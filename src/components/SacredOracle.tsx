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
  const [hasOpened, setHasOpened] = useState(false);

  const handleOpenMagicDiya = () => {
    if (spinning) return;
    setSpinning(true);
    soundFx.playOracleSpin();
    soundFx.playPointsEarned(50);
    setRotationDeg((prev) => prev + 720 + Math.floor(Math.random() * 180));

    window.setTimeout(() => {
      const pool = ORACLE_FORTUNES.filter((f) => f.id !== selectedFortune.id);
      const next = pool[Math.floor(Math.random() * pool.length)] || ORACLE_FORTUNES[0];
      onFortuneRevealed(next);
      setSpinning(false);
      setHasOpened(true);
      soundFx.playTraditionalBronzeBell(1046.5, 2.0, 0.22, 0);
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
            ❖ {lang === 'ta' ? '100% சிரிப்பு & நகைச்சுவை கணிப்பு அரங்கம்' : "100% Hilarious Wedding Future Predictor"} ❖
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-[#fff8eb] sm:text-5xl">
            {lang === 'ta'
              ? '🔮 உங்கள் அடுத்த அதிர்ஷ்டத்தை கணிப்போம் வாருங்கள்!'
              : "🔮 Let's Predict Your Next Luck!"}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-[#f5deb3]">
            {lang === 'ta'
              ? 'சுடர்விடும் மாய தீபத்தைத் தொட்டுத் திறக்கவும் — திறந்த பிறகே உங்கள் 100% சிரிப்பு & நகைச்சுவை நிறைந்த அடுத்த அதிர்ஷ்டம் இங்கே தோன்றும்!'
              : 'Touch & Open the Glowing Magic Lamp — only after it opens, your 100% funny & humorous prediction will be revealed!'}
          </p>
        </div>

        {/* Interactive Diya Mandala Stage */}
        <div className="card-3d-tilt mt-10 grid items-center gap-8 rounded-3xl border border-[#c9932d]/70 bg-[#24050d]/90 p-6 shadow-2xl md:grid-cols-12 md:p-10">
          {/* Glowing Magic Diya Lamp Spinner */}
          <div className="flex flex-col items-center justify-center md:col-span-5">
            <button
              type="button"
              onClick={handleOpenMagicDiya}
              disabled={spinning}
              aria-label={lang === 'ta' ? 'மாய தீபத்தைத் தொட்டுத் திறக்கவும்' : 'Touch magic lamp to predict your next luck'}
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
                <span className="mt-2 text-xs font-bold tracking-wider text-[#fff8eb] uppercase text-center px-2">
                  {spinning
                    ? lang === 'ta'
                      ? 'கணிக்கிறது... 🔮'
                      : 'Predicting... 🔮'
                    : hasOpened
                      ? lang === 'ta'
                        ? 'அதிர்ஷ்டம் திறந்தது!'
                        : 'Luck Unlocked! ✨'
                      : lang === 'ta'
                        ? 'தட்டித் திறக்கவும் 🪔'
                        : 'Touch to Open 🪔'}
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={handleOpenMagicDiya}
              disabled={spinning}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#c9932d] bg-[#3a0815] px-5 py-2.5 text-xs font-bold text-[#f7df94] transition hover:bg-[#520d20] cursor-pointer"
            >
              <RotateCw className={`h-3.5 w-3.5 ${spinning ? 'animate-spin' : ''}`} />
              <span>
                {hasOpened
                  ? lang === 'ta'
                    ? '🔮 மற்றொரு நகைச்சுவை அதிர்ஷ்டத்தைக் காண்க'
                    : '🔮 Predict Another Funny Luck!'
                  : lang === 'ta'
                    ? '🪔 தீபத்தைத் தொட்டுத் திறக்கவும்'
                    : '🪔 Touch & Open Magic Lamp'}
              </span>
            </button>
          </div>

          {/* Revealed Fortune Prophecy Card — Only Revealed Once Opened! */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-[#c9932d]/60 bg-[#fffdf7] p-6 text-[#3b1d16] shadow-xl sm:p-8 min-h-[260px] flex flex-col justify-center">
              {!hasOpened ? (
                /* Sealed Mystery State Before Diya is Touched */
                <div className="flex flex-col items-center justify-center p-4 text-center space-y-3">
                  <span className="text-6xl animate-bounce" aria-hidden="true">
                    🎁
                  </span>
                  <h4 className="font-display text-lg font-bold text-[#631226] sm:text-xl">
                    {lang === 'ta'
                      ? 'அதிர்ஷ்டப் பெட்டகம் பூட்டப்பட்டுள்ளது!'
                      : 'Your Next Luck is Locked!'}
                  </h4>
                  <p className="text-xs text-[#6e463a] max-w-md leading-relaxed">
                    {lang === 'ta'
                      ? 'இடதுபுறமுள்ள மாய தீபத்தைத் தொட்டுத் திறக்கவும்! திறந்த பிறகே உங்கள் 100% சிரிப்பு நிறைந்த அடுத்த அதிர்ஷ்டம் இங்கே தோன்றும்!'
                      : 'Touch and open the Magic Lamp on the left! Only after opening, your 100% hilarious next luck prophecy will appear here!'}
                  </p>
                  <button
                    type="button"
                    onClick={handleOpenMagicDiya}
                    disabled={spinning}
                    className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f7df94] via-[#c9932d] to-[#b3822a] px-6 py-2.5 text-xs font-bold text-[#24050d] shadow-lg transition hover:brightness-105 cursor-pointer"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>
                      {lang === 'ta'
                        ? 'மாய தீபத்தைத் தட்டித் திறக்கவும் 🪔'
                        : 'Touch Magic Lamp to Open 🪔'}
                    </span>
                  </button>
                </div>
              ) : (
                /* Unlocked 100% Funny & Humorous Prediction Words */
                <div className="animate-in fade-in zoom-in-95 duration-500">
                  <div className="flex items-center justify-between gap-2 text-xs font-bold tracking-wider text-[#631226] uppercase">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-[#c9932d]" />
                      <span>
                        {lang === 'ta'
                          ? `🤣 ${guestName} அவர்களுக்கான நகைச்சுவை அதிர்ஷ்டம்:`
                          : `🤣 100% Hilarious Prediction for ${guestName}:`}
                      </span>
                    </span>
                    <span className="rounded-full bg-[#fde8e8] px-2.5 py-0.5 text-[10px] font-bold text-[#a62040]">
                      100% Comedy
                    </span>
                  </div>

                  <div className="mt-4 flex items-start gap-4">
                    <span className="shrink-0 text-5xl sm:text-6xl" aria-hidden="true">
                      {selectedFortune.emoji}
                    </span>
                    <div>
                      <p className="font-display text-xl leading-snug font-bold text-[#3a0815] sm:text-2xl">
                        “{lang === 'ta' ? selectedFortune.ta : selectedFortune.en}”
                      </p>
                      <p className="mt-2 text-xs text-[#6e463a] font-medium leading-relaxed">
                        {lang === 'ta' ? selectedFortune.en : selectedFortune.ta}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#c9932d]/30 pt-4">
                    <span className="text-xs font-medium text-[#6e463a]">
                      {lang === 'ta'
                        ? 'இந்த நகைச்சுவை அதிர்ஷ்டம் உங்கள் திருமண அழைப்பிதழில் இணைக்கப்படும்!'
                        : 'Synced to your personalized wedding invitation card!'}
                    </span>
                    <button
                      type="button"
                      onClick={onJumpToInvitation}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e6b247] to-[#ba8222] px-5 py-2.5 text-xs font-bold text-[#310d15] shadow transition hover:brightness-105 cursor-pointer"
                    >
                      <Share2 className="h-3.5 w-3.5" />
                      <span>{lang === 'ta' ? 'அழைப்பிதழில் காண்க →' : 'View in Invitation →'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ContinuitySection3D>
  );
}
