import { WEDDING_AUDIO_COLLECTION, type WeddingAudioTrack } from '../data/weddingData';

export interface MusicPlayerState {
  muted: boolean;
  isPlaying: boolean;
  currentTrack: WeddingAudioTrack;
  currentIndex: number;
  totalTracks: number;
}

type StateListener = (state: MusicPlayerState) => void;

const LAST_TRACK_STORAGE_KEY = 'tvm_last_random_track_id_v1';

// Wedding Audio & Game Sound Engine
// Uses HTML5 <audio> with pure non-ordered random track picking (and persists last-played ID so leaving/returning always plays a different song).
class SoundEngine {
  private ctx: AudioContext | null = null;
  private muted = false;
  private audioEl: HTMLAudioElement | null = null;
  private currentIndex = 0;
  private isPlaying = false;
  private listeners = new Set<StateListener>();

  constructor() {
    if (WEDDING_AUDIO_COLLECTION.length > 0) {
      this.currentIndex = this.pickRandomIndexDifferentFromLast();
    }
  }

  private getSavedLastTrackId(): string | null {
    try {
      return typeof window !== 'undefined' ? window.localStorage.getItem(LAST_TRACK_STORAGE_KEY) : null;
    } catch {
      return null;
    }
  }

  private saveLastTrackId(id: string): void {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(LAST_TRACK_STORAGE_KEY, id);
      }
    } catch {
      // ignore storage quota errors
    }
  }

  private pickRandomIndexDifferentFromLast(): number {
    const count = WEDDING_AUDIO_COLLECTION.length;
    if (count <= 1) return 0;

    const currentId = WEDDING_AUDIO_COLLECTION[this.currentIndex]?.id;
    const savedLastId = this.getSavedLastTrackId();
    const candidates = WEDDING_AUDIO_COLLECTION.map((t, idx) => ({ id: t.id, idx })).filter(
      (item) => item.id !== currentId && item.id !== savedLastId
    );
    const fallbackCandidates = WEDDING_AUDIO_COLLECTION.map((t, idx) => ({ id: t.id, idx })).filter(
      (item) => item.id !== currentId
    );
    const pool =
      candidates.length > 0
        ? candidates
        : fallbackCandidates.length > 0
          ? fallbackCandidates
          : WEDDING_AUDIO_COLLECTION.map((t, idx) => ({ id: t.id, idx }));

    const picked = pool[Math.floor(Math.random() * pool.length)];
    return picked ? picked.idx : 0;
  }

  private ensureAudioElement(): HTMLAudioElement | null {
    if (typeof window === 'undefined' || typeof Audio === 'undefined') return null;
    if (!this.audioEl) {
      const el = new Audio();
      el.preload = 'auto';
      el.volume = 0.85;
      el.addEventListener('play', () => {
        this.isPlaying = true;
        this.emit();
      });
      el.addEventListener('pause', () => {
        this.isPlaying = false;
        this.emit();
      });
      el.addEventListener('ended', () => {
        this.isPlaying = false;
        if (!this.muted) {
          this.nextRandomTrack();
        } else {
          this.emit();
        }
      });
      el.addEventListener('error', () => {
        if (!this.muted && this.isPlaying) {
          this.nextRandomTrack();
        } else {
          this.isPlaying = false;
          this.emit();
        }
      });
      this.audioEl = el;
    }
    return this.audioEl;
  }

  private emit(): void {
    const snapshot = this.getState();
    this.listeners.forEach((cb) => cb(snapshot));
  }

  public subscribe(listener: StateListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  public getState(): MusicPlayerState {
    const safeIdx = Math.max(0, Math.min(this.currentIndex, WEDDING_AUDIO_COLLECTION.length - 1));
    return {
      muted: this.muted,
      isPlaying: this.isPlaying,
      currentTrack: WEDDING_AUDIO_COLLECTION[safeIdx],
      currentIndex: safeIdx,
      totalTracks: WEDDING_AUDIO_COLLECTION.length,
    };
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public isMusicPlaying(): boolean {
    return this.isPlaying;
  }

  public setMuted(mute: boolean): void {
    this.muted = mute;
    if (mute) {
      this.pauseMusic();
    } else {
      this.startRandomCollection(true);
    }
    this.emit();
  }

  private playIndex(idx: number): void {
    const track = WEDDING_AUDIO_COLLECTION[idx];
    if (!track) return;
    this.currentIndex = idx;
    this.saveLastTrackId(track.id);
    this.muted = false;
    const el = this.ensureAudioElement();
    if (!el) return;

    const targetSrc = new URL(track.src, window.location.origin).href;
    if (el.src !== targetSrc) {
      el.src = track.src;
      el.load();
    }
    el.currentTime = 0;
    const playPromise = el.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.emit();
        })
        .catch(() => {
          this.isPlaying = false;
          this.emit();
        });
    } else {
      this.isPlaying = true;
      this.emit();
    }
  }

  // Starts playback picking a completely random song (guaranteed different from the previous visit or track)
  public startRandomCollection(forceNewRandom = true): void {
    if (WEDDING_AUDIO_COLLECTION.length === 0) return;
    if (this.muted) this.muted = false;
    const el = this.ensureAudioElement();
    if (forceNewRandom || !el || !el.src) {
      const nextIdx = this.pickRandomIndexDifferentFromLast();
      this.playIndex(nextIdx);
      return;
    }
    void el
      .play()
      .then(() => {
        this.isPlaying = true;
        this.emit();
      })
      .catch(() => {
        this.isPlaying = false;
        this.emit();
      });
  }

  public nextRandomTrack(): void {
    if (WEDDING_AUDIO_COLLECTION.length === 0) return;
    const nextIdx = this.pickRandomIndexDifferentFromLast();
    this.playIndex(nextIdx);
  }

  public playTrackById(id: string): void {
    const idx = WEDDING_AUDIO_COLLECTION.findIndex((t) => t.id === id);
    if (idx >= 0) {
      this.playIndex(idx);
    }
  }

  public pauseMusic(): void {
    if (this.audioEl && !this.audioEl.paused) {
      this.audioEl.pause();
    }
    this.isPlaying = false;
    this.emit();
  }

  public stopWeddingMusicLoop(): void {
    this.pauseMusic();
  }

  public startWeddingMusicLoop(): void {
    this.startRandomCollection(true);
  }

  // --- Synthesized UI & Game Sound Effects ---
  private getContext(): AudioContext | null {
    if (this.muted || typeof window === 'undefined') return null;
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return null;
    if (!this.ctx) {
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume().catch(() => undefined);
    }
    return this.ctx;
  }

  private playTone(
    freq: number,
    duration: number,
    type: OscillatorType = 'sine',
    gainPeak = 0.14,
    delay = 0
  ): void {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(gainPeak, now + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration + 0.04);
  }

  public playTempleBell(): void {
    this.playTone(523.25, 1.4, 'sine', 0.14, 0);
    this.playTone(1046.5, 1.0, 'triangle', 0.07, 0);
    this.playTone(1567.98, 0.7, 'sine', 0.04, 0.01);
  }

  public playChime(): void {
    this.playTone(659.25, 0.25, 'sine', 0.12, 0);
    this.playTone(880, 0.35, 'sine', 0.12, 0.08);
  }

  public playSplash(): void {
    this.playTone(320, 0.14, 'triangle', 0.1, 0);
    this.playTone(480, 0.18, 'sine', 0.08, 0.04);
  }

  public playThavilTap(): void {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(75, now + 0.12);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.16);
  }

  public playMiss(): void {
    this.playTone(220, 0.18, 'sawtooth', 0.07, 0);
    this.playTone(170, 0.22, 'sawtooth', 0.06, 0.08);
  }

  public playWinFanfare(): void {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, i) => {
      this.playTone(f, 0.45, 'triangle', 0.13, i * 0.09);
    });
  }

  public playOracleSpin(): void {
    const scale = [440, 523.25, 587.33, 659.25, 783.99, 880, 1046.5];
    scale.forEach((f, i) => {
      this.playTone(f, 0.25, 'sine', 0.1, i * 0.075);
    });
  }
}

export const soundFx = new SoundEngine();
