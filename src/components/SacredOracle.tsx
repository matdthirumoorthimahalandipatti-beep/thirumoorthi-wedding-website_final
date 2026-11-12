import { useState } from 'react';
import { Flame, RotateCw, Share2, Sparkles } from 'lucide-react';
import {
  HERITAGE_ASSETS,
  ORACLE_FORTUNES,
  type Lang,
  type OracleFortune,
} from '../data/weddingData';
import { soundFx } from '../utils/soundFx';
import ContinuitySection3D from './ContinuitySection3D';

interface SacredOracleProps {
  lang: Lang;
  guestName: string;
  selectedFortune: OracleFortune;
  onFortuneRevealed: (fortune: OracleFortune) => void;
  onJumpToInvitation: () => void;
}

export default function SacredOracle({
  lang,
  guestName,
  selectedFortune,
  onFortuneRevealed,
  onJumpToInvitation,
}: SacredOracleProps) {
  const [spinning, setSpinning] = useState(false);
  const [rotationDeg, setRotationDeg] = useState(0);
  const [hasSpun, setHasSpun] = useState(false);

  const handleSpinLamp = () => {
    if (spinning) return;
    setSpinning(true);
    soundFx.playOracleSpin();
    setRotationDeg((prev) => prev + 720 + Math.floor(Math.random() * 180));

    window.setTimeout(() => {
      const pool = ORACLE_FORTUNES.filter((f) => f.id !== selectedFortune.id);
      const next = pool[Math.floor(Math.random() * pool.length)] || ORACLE_FORTUNES[0];
      onFortuneRevealed(next);
      setSpinning(false);
      setHasSpun(true);
      soundFx.playTempleBell();
    }, 950);
  };

  return (
    <ContinuitySection3D
      id="oracle"
      className="relative overflow-hidden py-16 text-[#fff8eb] sm:py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(48, 8, 20, 0.88), rgba(29, 5, 13, 0.94)), url('${HERITAGE_ASSETS.duskTemple}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-[#f7df94] uppercase">
            ❖ {lang === 'ta' ? 'விளையாட்டு நிறைவுப் பகுதி · அருள்வாக்கு' : 'Grand Games Finale · Sacred Wedding Oracle'} ❖
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-[#fff8eb] sm:text-5xl">
            {lang === 'ta'
              ? 'புனிதத் திருமணத் தீப அருள்வாக்கு'
              : 'Sacred Wedding Oracle · Funny & 100% Positive Fortunes'}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-[#f5deb3]">
            {lang === 'ta'
              ? 'சுடர்விடும் புனிதத் தீபத்தைத் தட்டிச் சுழற்றுங்கள் — உங்கள் 1080×1920 ஸ்டோரி கார்டிற்கான நகைச்சுவையும் மங்களமும் நிறைந்த வாழ்த்து வாக்கு தோன்றும்!'
              : 'Tap the glowing holy diya lamp right after the games to spin and reveal humorous, heartwarming life prophecies for your Story Card!'}
          </p>
        </div>

        {/* Interactive Diya Mandala Stage */}
        <div className="card-3d-tilt mt-10 grid items-center gap-8 rounded-3xl border border-[#c9932d]/70 bg-[#24050d]/90 p-6 shadow-2xl md:grid-cols-12 md:p-10">
          {/* Glowing Holy Diya Lamp Spinner */}
          <div className="flex flex-col items-center justify-center md:col-span-5">
            <button
              type="button"
              onClick={handleSpinLamp}
              disabled={spinning}
              aria-label={lang === 'ta' ? 'புனித தீபத்தைச் சுழற்றுக' : 'Tap holy diya lamp to spin fortune'}
              className="group relative flex h-56 w-56 items-center justify-center rounded-full focus:outline-none cursor-pointer"
            >
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#f7df94]/70 transition-transform duration-1000 ease-out"
                style={{ transform: `rotate(${rotationDeg}deg)` }}
              >
                {Array.from({ length: 12 }).map((_, idx) => (
                  <span
                    key={idx}
                    className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f7df94]"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${idx * 30}deg) translateY(-108px)`,
                    }}
                  />
                ))}
              </div>

              <div className="animate-diya-glow flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 border-[#f7df94] bg-gradient-to-b from-[#631226] via-[#3a0815] to-[#24050d] shadow-[0_0_45px_rgba(247,223,148,0.4)] transition group-hover:scale-105">
                <Flame className="h-11 w-11 text-[#ffcf56] drop-shadow-[0_0_12px_rgba(255,207,86,0.9)]" />
                <span className="mt-2 text-xs font-bold tracking-wider text-[#fff8eb] uppercase">
                  {spinning
                    ? lang === 'ta'
                      ? 'சுழல்கிறது...'
                      : 'Divining...'
                    : lang === 'ta'
                      ? 'தீபத்தைத் தட்டுக'
                      : 'Tap Holy Diya'}
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={handleSpinLamp}
              disabled={spinning}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#c9932d] bg-[#3a0815] px-4 py-2 text-xs font-bold text-[#f7df94] transition hover:bg-[#520d20] cursor-pointer"
            >
              <RotateCw className={`h-3.5 w-3.5 ${spinning ? 'animate-spin' : ''}`} />
              <span>{lang === 'ta' ? 'மற்றொரு அருள்வாக்கு சுழற்று' : 'Spin Another Blessing'}</span>
            </button>
          </div>

          {/* Revealed Fortune Prophecy Card */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-[#c9932d]/60 bg-[#fffdf7] p-6 text-[#3b1d16] shadow-xl sm:p-8">
              <div className="flex items-center justify-between gap-2 text-xs font-bold tracking-wider text-[#631226] uppercase">
                <span>
                  {hasSpun
                    ? lang === 'ta'
                      ? `${guestName} அவர்களுக்கான அருள்வாக்கு`
                      : `Prophecy for ${guestName}`
                    : lang === 'ta'
                      ? 'இன்றைய மங்கள அருள்வாக்கு'
                      : "Today's Sacred Blessing"}
                </span>
                <Sparkles className="h-4 w-4 text-[#c9932d]" />
              </div>

              <div className="mt-4 flex items-start gap-4">
                <span className="shrink-0 text-4xl sm:text-5xl" aria-hidden="true">
                  {selectedFortune.emoji}
                </span>
                <div>
                  <p className="font-display text-xl leading-snug font-bold text-[#3a0815] sm:text-2xl">
                    “{lang === 'ta' ? selectedFortune.ta : selectedFortune.en}”
                  </p>
                  <p className="mt-2 text-xs text-[#6e463a]">
                    {lang === 'ta' ? selectedFortune.en : selectedFortune.ta}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#c9932d]/30 pt-4">
                <span className="text-xs font-medium text-[#6e463a]">
                  {lang === 'ta'
                    ? 'இந்த அருள்வாக்கு உங்கள் மங்கள திருமண அழைப்பிதழில் தானாக இணைக்கப்படும்.'
                    : 'Auto-synced to your personalized Auspicious Wedding Invitation.'}
                </span>
                <button
                  type="button"
                  onClick={onJumpToInvitation}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e6b247] to-[#ba8222] px-5 py-2.5 text-xs font-bold text-[#310d15] shadow transition hover:brightness-105 cursor-pointer"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  <span>{lang === 'ta' ? 'மங்கள அழைப்பிதழில் காண்க →' : 'Open Personalized Invite →'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContinuitySection3D>
  );
}
