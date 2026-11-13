import type { DirectoryPerson } from '../data/weddingData';

export interface LeaderboardData {
  ponnuScore: number;
  mappillaiScore: number;
  recentWinners: Array<{
    guestName: string;
    team: string;
    points: number;
    game: string;
    timestamp: string;
  }>;
  topPlayers?: Array<{
    name: string;
    team: string;
    score: number;
    title: string;
  }>;
  lastUpdated: string;
}

export interface AdminSyncData {
  lastSynced: string;
  customPersons: DirectoryPerson[];
  deletedPersonIds: string[];
  notes?: string;
}

const STORAGE_KEYS = {
  githubToken: 'tvm_github_pat_v1',
  repoOwner: 'tvm_github_owner_v1',
  repoName: 'tvm_github_repo_v1',
  autoSyncEnabled: 'tvm_github_autosync_v1',
  syncStatus: 'tvm_github_last_sync_status_v1',
};

// Default repository details
export const DEFAULT_GITHUB_CONFIG = {
  owner: 'matdthirumoorthimahalandipatti-beep',
  repo: 'thirumoorthi-wedding-website_final',
  branch: 'main',
  token: '',
};

class GitHubSyncService {
  private owner = DEFAULT_GITHUB_CONFIG.owner;
  private repo = DEFAULT_GITHUB_CONFIG.repo;
  private branch = DEFAULT_GITHUB_CONFIG.branch;
  private token = '';
  private autoSync = true;
  private pendingLeaderboardSync: NodeJS.Timeout | null = null;
  private isSyncing = false;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const envToken = (import.meta as unknown as { env?: { VITE_GITHUB_TOKEN?: string } })?.env?.VITE_GITHUB_TOKEN;
        const savedToken = localStorage.getItem(STORAGE_KEYS.githubToken);
        if (savedToken?.trim()) {
          this.token = savedToken.trim();
        } else if (envToken?.trim()) {
          this.token = envToken.trim();
        }
        const savedOwner = localStorage.getItem(STORAGE_KEYS.repoOwner);
        if (savedOwner?.trim()) this.owner = savedOwner.trim();
        const savedRepo = localStorage.getItem(STORAGE_KEYS.repoName);
        if (savedRepo?.trim()) this.repo = savedRepo.trim();
        const savedAuto = localStorage.getItem(STORAGE_KEYS.autoSyncEnabled);
        if (savedAuto !== null) this.autoSync = savedAuto === 'true';
      } catch {
        // fallback
      }
    }
  }

  public getConfig() {
    return {
      owner: this.owner,
      repo: this.repo,
      branch: this.branch,
      token: this.token,
      autoSync: this.autoSync,
    };
  }

  public updateConfig(newConfig: {
    owner?: string;
    repo?: string;
    token?: string;
    autoSync?: boolean;
  }) {
    if (newConfig.owner !== undefined) this.owner = newConfig.owner.trim();
    if (newConfig.repo !== undefined) this.repo = newConfig.repo.trim();
    if (newConfig.token !== undefined) this.token = newConfig.token.trim();
    if (newConfig.autoSync !== undefined) this.autoSync = newConfig.autoSync;

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEYS.repoOwner, this.owner);
        localStorage.setItem(STORAGE_KEYS.repoName, this.repo);
        localStorage.setItem(STORAGE_KEYS.githubToken, this.token);
        localStorage.setItem(STORAGE_KEYS.autoSyncEnabled, String(this.autoSync));
      } catch {
        // ignore
      }
    }
  }

  private getAuthHeaders(): HeadersInit {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }
    return headers;
  }

  /**
   * Helper to encode UTF-8 string to Base64 in browser or node
   */
  private utf8ToBase64(str: string): string {
    const bytes = new TextEncoder().encode(str);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  /**
   * Helper to decode Base64 to UTF-8
   */
  private base64ToUtf8(b64: string): string {
    const clean = b64.replace(/\s/g, '');
    const binary = atob(clean);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }

  /**
   * Get file SHA and content from GitHub repository
   */
  private async getFileFromGitHub(filePath: string): Promise<{ sha?: string; content?: string } | null> {
    try {
      const url = `https://api.github.com/repos/${this.owner}/${this.repo}/contents/${filePath}?ref=${this.branch}`;
      const res = await fetch(url, {
        headers: this.getAuthHeaders(),
      });
      if (res.status === 404) return null;
      if (!res.ok) {
        console.warn(`[GitHubSync] Failed to read ${filePath}:`, res.statusText);
        return null;
      }
      const data = await res.json();
      return {
        sha: data.sha,
        content: data.content ? this.base64ToUtf8(data.content) : undefined,
      };
    } catch (err) {
      console.warn(`[GitHubSync] Error fetching ${filePath}:`, err);
      return null;
    }
  }

  /**
   * Put file into GitHub repository (creates commit)
   */
  private async putFileToGitHub(
    filePath: string,
    contentStr: string,
    commitMessage: string
  ): Promise<{ success: boolean; error?: string }> {
    if (!this.token) {
      return { success: false, error: 'No GitHub Personal Access Token configured' };
    }

    try {
      // 1. Get existing file sha if it exists
      const existing = await this.getFileFromGitHub(filePath);

      const url = `https://api.github.com/repos/${this.owner}/${this.repo}/contents/${filePath}`;
      const payload: {
        message: string;
        content: string;
        branch: string;
        sha?: string;
      } = {
        message: commitMessage,
        content: this.utf8ToBase64(contentStr),
        branch: this.branch,
      };

      if (existing?.sha) {
        payload.sha = existing.sha;
      }

      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          ...this.getAuthHeaders(),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({ message: res.statusText }));
        const msg = errJson.message || res.statusText;
        console.error('[GitHubSync] GitHub API Error:', msg);
        return { success: false, error: msg };
      }

      return { success: true };
    } catch (err) {
      const errorStr = err instanceof Error ? err.message : String(err);
      console.error('[GitHubSync] Failed to put file:', errorStr);
      return { success: false, error: errorStr };
    }
  }

  /**
   * Fetch current live leaderboard (tries GitHub API first, falls back to local /data/leaderboard.json)
   */
  public async fetchLeaderboard(): Promise<LeaderboardData | null> {
    try {
      // 1. Try fetching directly from GitHub raw or API for live data
      const remote = await this.getFileFromGitHub('public/data/leaderboard.json');
      if (remote?.content) {
        return JSON.parse(remote.content) as LeaderboardData;
      }

      // 2. Fall back to local deployed static file
      const localRes = await fetch('/data/leaderboard.json', { cache: 'no-store' });
      if (localRes.ok) {
        return (await localRes.json()) as LeaderboardData;
      }
    } catch (err) {
      console.warn('[GitHubSync] Failed to fetch leaderboard:', err);
    }
    return null;
  }

  /**
   * Sync leaderboard scores and latest winner to GitHub repository
   */
  public async syncLeaderboardToGitHub(
    ponnuScore: number,
    mappillaiScore: number,
    winner?: {
      guestName: string;
      team: string;
      points: number;
      game: string;
    }
  ): Promise<{ success: boolean; error?: string }> {
    if (this.isSyncing) return { success: false, error: 'Sync in progress' };
    this.isSyncing = true;

    try {
      let currentData: LeaderboardData = {
        ponnuScore,
        mappillaiScore,
        recentWinners: [],
        lastUpdated: new Date().toISOString(),
      };

      const existing = await this.fetchLeaderboard();
      if (existing) {
        currentData = {
          ...existing,
          ponnuScore: Math.max(existing.ponnuScore, ponnuScore),
          mappillaiScore: Math.max(existing.mappillaiScore, mappillaiScore),
          recentWinners: existing.recentWinners || [],
          lastUpdated: new Date().toISOString(),
        };
      }

      if (winner) {
        const newWinner = {
          guestName: winner.guestName,
          team: winner.team,
          points: winner.points,
          game: winner.game,
          timestamp: new Date().toISOString(),
        };
        currentData.recentWinners = [newWinner, ...(currentData.recentWinners || [])].slice(0, 15);
      }

      const content = JSON.stringify(currentData, null, 2);
      const commitMsg = `chore: update wedding games leaderboard [Ponnu: ${currentData.ponnuScore}, Mappillai: ${currentData.mappillaiScore}]`;

      const result = await this.putFileToGitHub('public/data/leaderboard.json', content, commitMsg);
      return result;
    } finally {
      this.isSyncing = false;
    }
  }

  /**
   * Debounced sync called when points are earned in games
   */
  public triggerLeaderboardUpdate(
    ponnuScore: number,
    mappillaiScore: number,
    winner?: {
      guestName: string;
      team: string;
      points: number;
      game: string;
    }
  ): void {
    if (!this.autoSync) return;

    if (this.pendingLeaderboardSync) {
      clearTimeout(this.pendingLeaderboardSync);
    }

    this.pendingLeaderboardSync = setTimeout(() => {
      void this.syncLeaderboardToGitHub(ponnuScore, mappillaiScore, winner);
    }, 2500);
  }

  /**
   * Fetch remote admin data (custom added / deleted directory persons)
   */
  public async fetchAdminData(): Promise<AdminSyncData | null> {
    try {
      const remote = await this.getFileFromGitHub('public/data/admin_data.json');
      if (remote?.content) {
        return JSON.parse(remote.content) as AdminSyncData;
      }
      const localRes = await fetch('/data/admin_data.json', { cache: 'no-store' });
      if (localRes.ok) {
        return (await localRes.json()) as AdminSyncData;
      }
    } catch (err) {
      console.warn('[GitHubSync] Failed to fetch admin data:', err);
    }
    return null;
  }

  /**
   * Sync admin directory modifications (added or removed names) directly to GitHub
   */
  public async syncAdminDataToGitHub(
    customPersons: DirectoryPerson[],
    deletedPersonIds: string[],
    notes?: string
  ): Promise<{ success: boolean; error?: string }> {
    const payload: AdminSyncData = {
      lastSynced: new Date().toISOString(),
      customPersons,
      deletedPersonIds,
      notes: notes || `Admin updated directory with ${customPersons.length} custom entries`,
    };

    const content = JSON.stringify(payload, null, 2);
    const commitMsg = `feat(admin): update directory persons & family access [Total: ${customPersons.length} custom, ${deletedPersonIds.length} deleted]`;

    return this.putFileToGitHub('public/data/admin_data.json', content, commitMsg);
  }
}

export const githubSync = new GitHubSyncService();
