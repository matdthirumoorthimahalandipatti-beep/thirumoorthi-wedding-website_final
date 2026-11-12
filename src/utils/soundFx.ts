// Synthesized festive Tamil wedding & game audio via Web Audio API (reliable playback inside iframes)

class SoundEngine {
  private ctx: AudioContext | null = null;
  private muted = false;
  private musicTimer: number | null = null;
  private stepIdx = 0;

  public isMuted(): boolean {
    return this.muted;
  }

  public setMuted(mute: boolean): void {
    this.muted = mute;
    if (mute) {
      this.stopWeddingMusicLoop();
    }
  }

  public isMusicPlaying(): boolean {
    return this.musicTimer !== null;
  }

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

  // Celebratory Tamil Kalyana Mohanam/Kalyani raga melody + soft Thavil pulse for Sangeet Jukebox
  public startWeddingMusicLoop(mode: 'nadaswaram' | 'sangeet' = 'nadaswaram'): void {
    if (this.muted) this.muted = false;
    this.stopWeddingMusicLoop();

    // Mohanam auspicious scale frequencies (S R2 G3 P D2 S')
    const nadaswaramPhrase = [
      293.66, 329.63, 369.99, 440.0, 493.88, 587.33, 493.88, 440.0,
      369.99, 440.0, 493.88, 440.0, 369.99, 329.63, 293.66, 369.99,
    ];
    const sangeetPhrase = [
      392.0, 440.0, 493.88, 587.33, 587.33, 493.88, 440.0, 392.0,
      329.63, 392.0, 440.0, 493.88, 440.0, 392.0, 329.63, 293.66,
    ];

    const phrase = mode === 'sangeet' ? sangeetPhrase : nadaswaramPhrase;
    const intervalMs = mode === 'sangeet' ? 320 : 420;
    this.stepIdx = 0;

    const tick = () => {
      if (this.muted) {
        this.stopWeddingMusicLoop();
        return;
      }
      const note = phrase[this.stepIdx % phrase.length];
      // Warm reed / flute blend
      this.playTone(note, intervalMs / 1000 + 0.08, mode === 'sangeet' ? 'triangle' : 'sawtooth', 0.065, 0);
      this.playTone(note * 2, intervalMs / 1000, 'sine', 0.025, 0);
      if (this.stepIdx % 2 === 0) {
        this.playThavilTap();
      }
      if (this.stepIdx % 8 === 0) {
        // Subtle Tanpura Sa drone
        this.playTone(146.83, 2.2, 'sine', 0.045, 0);
      }
      this.stepIdx++;
    };

    tick();
    this.musicTimer = window.setInterval(tick, intervalMs);
  }

  public stopWeddingMusicLoop(): void {
    if (this.musicTimer !== null) {
      window.clearInterval(this.musicTimer);
      this.musicTimer = null;
    }
  }
}

export const soundFx = new SoundEngine();
