import { useEffect, useRef, useState } from 'react';
import { Crown, Flame, Play, RotateCcw, Sparkles, Trophy } from 'lucide-react';
import {
  getRoyalTitle,
  HERITAGE_ASSETS,
  GAMES_THEME_SRC,
  type Lang,
  type TeamSide,
} from '../data/weddingData';
import { soundFx } from '../utils/soundFx';
import ContinuitySection3D from './ContinuitySection3D';

type GameId = 'mothiram' | 'virundhu' | 'maalai' | 'thengai';

interface WeddingGamesArenaProps {
  lang: Lang;
  guestName: string;
  team: TeamSide;
  totalScore: number;
  ponnuScore: number;
  mappillaiScore: number;
  onAddPoints: (pts: number, gameTitle?: string) => void;
  onSelectTeam: (t: TeamSide) => void;
  onProceedToOracle: () => void;
}

/* ============================================================================
   GAME 1: MOTHIRAM THEDAL (Ring in the Milk & Rose-Petal Brass Pot)
   ============================================================================ */
function MothiramGame({
  lang,
  onWinPoints,
}: {
  lang: Lang;
  onWinPoints: (pts: number, gameTitle?: string) => void;
}) {
  const [round, setRound] = useState(1);
  const [ringIndex, setRingIndex] = useState(() => Math.floor(Math.random() * 9));
  const [revealed, setRevealed] = useState<number[]>([]);
  const [status, setStatus] = useState<'playing' | 'found'>('playing');
  const [roundPoints, setRoundPoints] = useState(0);
  const [rippleCell, setRippleCell] = useState<number | null>(null);

  const startNewRound = (nextRound: number) => {
    setRound(nextRound);
    setRingIndex(Math.floor(Math.random() * 9));
    setRevealed([]);
    setStatus('playing');
    setRippleCell(null);
  };

  const handleDip = (idx: number) => {
    if (status !== 'playing' || revealed.includes(idx)) return;
    setRippleCell(idx);
    const nextRevealed = [...revealed, idx];
    setRevealed(nextRevealed);

    if (idx === ringIndex) {
      const tries = nextRevealed.length;
      const earned = Math.max(25, 110 - (tries - 1) * 15);
      setRoundPoints((prev) => prev + earned);
      setStatus('found');
      // Ceremonial points indication and victory fanfare sound
      soundFx.playGameVictory(earned);
      onWinPoints(earned, lang === 'ta' ? 'மோதிரம் தேடல்' : 'Ring in the Pot');
    } else {
      soundFx.playSplash();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#c9932d]/30 pb-3">
        <div>
          <h4 className="font-display text-xl font-bold text-[#3a0815]">
            {lang === 'ta' ? 'மோதிரம் தேடல் (பால் பானை)' : 'Mothiram Thedal · Ring in the Milk Pot'}
          </h4>
          <p className="text-xs text-[#6e463a]">
            {lang === 'ta'
              ? `சுற்று ${round} · தங்க மோதிரத்தைக் கண்டறிய பால் & ரோஜா இதழ் குடத்தில் கை விடுங்கள்!`
              : `Round ${round} · Dip into the rose-petal milk pot to find the sacred wedding gold ring!`}
          </p>
        </div>
        <div className="font-mono-num text-sm font-bold text-[#631226]">
          {lang === 'ta' ? 'இந்த விளையாட்டு:' : 'Session:'} +{roundPoints} pts
        </div>
      </div>

      {/* Brass Milk Pot Grid */}
      <div className="mx-auto max-w-md rounded-2xl border-2 border-[#c9932d] bg-gradient-to-b from-[#631226] to-[#3a0815] p-5 shadow-inner">
        <div className="mx-auto aspect-square max-w-[300px] rounded-full border-4 border-[#f7df94] bg-gradient-to-br from-[#fff9ec] via-[#f7e7cb] to-[#ecd2a4] p-4 shadow-xl">
          <div className="grid h-full grid-cols-3 gap-2.5">
            {Array.from({ length: 9 }).map((_, idx) => {
              const isRevealed = revealed.includes(idx);
              const isRing = idx === ringIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDip(idx)}
                  disabled={status === 'found' || isRevealed}
                  className={`relative flex items-center justify-center rounded-full border transition cursor-pointer ${
                    isRevealed && isRing
                      ? 'border-[#b7791f] bg-[#f7df94] text-2xl shadow-lg scale-105'
                      : isRevealed
                        ? 'border-[#d6bda0]/60 bg-[#ebd5b3]/70 text-sm text-[#7a4e32]'
                        : 'border-[#e5c490] bg-[#fffaf0]/90 text-xl hover:scale-105 hover:border-[#631226] hover:bg-[#fff3d6]'
                  } ${rippleCell === idx ? 'ring-2 ring-[#c9932d]' : ''}`}
                  aria-label={`Pot zone ${idx + 1}`}
                >
                  {isRevealed ? (isRing ? '💍' : '🌸') : '🪷'}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-[#3a0815]">
          {status === 'found'
            ? lang === 'ta'
              ? `அருமை! ${revealed.length} முயற்சியில் தங்க மோதிரம் கிடைத்தது!`
              : `Found the sacred gold ring in ${revealed.length} ${revealed.length === 1 ? 'try' : 'tries'}!`
            : lang === 'ta'
              ? `முயற்சிகள்: ${revealed.length} / 9`
              : `Dips used: ${revealed.length} · Fewer dips earn higher points!`}
        </p>
        {status === 'found' && (
          <button
            type="button"
            onClick={() => startNewRound(round + 1)}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#e6b247] to-[#ba8222] px-4 py-2 text-xs font-bold text-[#310d15] shadow transition hover:brightness-105 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>{lang === 'ta' ? 'அடுத்த சுற்று' : 'Next Pot Round'}</span>
          </button>
        )}
      </div>
    </div>
  );
}

/* ============================================================================
   GAME 2: KALYANA VIRUNDHU (Madurai Banana Leaf Feast Rush)
   ============================================================================ */
const DISHES = [
  { id: 'mysore', nameEn: 'Ghee Mysore Pak', nameTa: 'நெய் மைசூர் பாக்', emoji: '🟨', pts: 20 },
  { id: 'jigarthanda', nameEn: 'Madurai Jigarthanda', nameTa: 'மதுரை ஜிகர்தண்டா', emoji: '🍨', pts: 25 },
  { id: 'sambar', nameEn: 'Kalyana Sambar', nameTa: 'கல்யாண சாம்பார்', emoji: '🍛', pts: 15 },
  { id: 'payasam', nameEn: 'Pal Payasam', nameTa: 'பால் பாயசம்', emoji: '🥣', pts: 20 },
  { id: 'vadai', nameEn: 'Medhu Vadai', nameTa: 'மெது வடை', emoji: '🍩', pts: 15 },
  { id: 'chilli', nameEn: 'Spicy Green Chilli', nameTa: 'கார மிளகாய் (தவிர்!)', emoji: '🌶️', pts: -15 },
];

function VirundhuGame({
  lang,
  onWinPoints,
}: {
  lang: Lang;
  onWinPoints: (pts: number, gameTitle?: string) => void;
}) {
  const [running, setRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25);
  const [score, setScore] = useState(0);
  const [targetDishId, setTargetDishId] = useState('mysore');
  const [gridSlots, setGridSlots] = useState<string[]>([
    'mysore',
    'jigarthanda',
    'sambar',
    'payasam',
    'vadai',
    'chilli',
  ]);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setRunning(false);
          soundFx.playGameVictory(score);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [running, score]);

  const shuffleSlots = (nextTarget: string) => {
    const ids = DISHES.map((d) => d.id);
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }
    if (!ids.includes(nextTarget)) ids[0] = nextTarget;
    setGridSlots(ids);
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(25);
    setRunning(true);
    setFeedback('');
    const sweetChoices = DISHES.filter((d) => d.id !== 'chilli');
    const first = sweetChoices[Math.floor(Math.random() * sweetChoices.length)].id;
    setTargetDishId(first);
    shuffleSlots(first);
    soundFx.playChime();
  };

  const handleServe = (dishId: string) => {
    if (!running) return;
    const dish = DISHES.find((d) => d.id === dishId);
    if (!dish) return;

    if (dish.id === 'chilli') {
      soundFx.playMiss();
      setScore((s) => Math.max(0, s - 15));
      setFeedback(lang === 'ta' ? 'அச்சச்சோ! கார மிளகாய்! -15' : 'Oops! Spicy Chilli! -15 pts');
      return;
    }

    if (dish.id === targetDishId) {
      const gained = dish.pts + 10;
      // Sound indication of points earned!
      soundFx.playPointsEarned(gained);
      setScore((s) => s + gained);
      onWinPoints(gained, lang === 'ta' ? 'கல்யாண விருந்து' : 'Wedding Feast');
      setFeedback(
        lang === 'ta'
          ? `சரியான விருந்து உபசரிப்பு! +${gained}`
          : `Perfect Banana Leaf Serve! +${gained} pts`
      );
      const sweetChoices = DISHES.filter((d) => d.id !== 'chilli');
      const next = sweetChoices[Math.floor(Math.random() * sweetChoices.length)].id;
      setTargetDishId(next);
      shuffleSlots(next);
    } else {
      soundFx.playThavilTap();
      const gained = 5;
      setScore((s) => s + gained);
      onWinPoints(gained, lang === 'ta' ? 'கல்யாண விருந்து' : 'Wedding Feast');
      setFeedback(lang === 'ta' ? `இனிமையான பந்தி பரிமாற்றம் +5` : `Tasty extra serving +5 pts`);
    }
  };

  const targetDish = DISHES.find((d) => d.id === targetDishId) || DISHES[0];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#c9932d]/30 pb-3">
        <div>
          <h4 className="font-display text-xl font-bold text-[#3a0815]">
            {lang === 'ta' ? 'கல்யாண விருந்து (வாழை இலை பந்தி)' : 'Kalyana Virundhu · Banana Leaf Feast Rush'}
          </h4>
          <p className="text-xs text-[#6e463a]">
            {lang === 'ta'
              ? 'விருந்தினர் கேட்கும் உணவை விரைந்து பரிமாறுங்கள் · மிளகாயைத் தவிருங்கள்!'
              : 'Serve the requested Madurai feast dish quickly on the banana leaf · avoid the chilli!'}
          </p>
        </div>
        <div className="flex items-center gap-4 font-mono-num text-sm font-bold">
          <span className="text-[#631226]">{timeLeft}s</span>
          <span className="text-emerald-700">+{score} pts</span>
        </div>
      </div>

      {/* Banana Leaf Stage */}
      <div className="rounded-xl border border-emerald-700/40 bg-gradient-to-r from-[#164a30] via-[#1f613f] to-[#164a30] p-4 text-center shadow-inner">
        {running ? (
          <div>
            <p className="text-xs font-medium tracking-wider text-emerald-100 uppercase">
              {lang === 'ta' ? 'இப்போது பந்தியில் கேட்கப்படும் உணவு' : 'VIP Guest Requests'}
            </p>
            <p className="mt-1 font-display text-2xl font-bold text-[#fff9e8]">
              {targetDish.emoji} {lang === 'ta' ? targetDish.nameTa : targetDish.nameEn}
            </p>
          </div>
        ) : (
          <div className="py-1">
            <p className="text-sm text-emerald-50">
              {timeLeft === 0
                ? lang === 'ta'
                  ? `பந்தி நிறைவு! நீங்கள் ${score} புள்ளிகள் வென்றீர்கள்!`
                  : `Feast complete! You scored ${score} points for your team!`
                : lang === 'ta'
                  ? '25 வினாடிகளில் வாழை இலையில் உணவு பரிமாறத் தயாராகுங்கள்!'
                  : 'Ready for a 25-second Madurai Banana Leaf Virundhu challenge?'}
            </p>
            <button
              type="button"
              onClick={startGame}
              className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#f7df94] to-[#c9932d] px-5 py-2 text-xs font-bold text-[#310d15] shadow transition hover:brightness-105 cursor-pointer"
            >
              <Play className="h-3.5 w-3.5" />
              <span>
                {timeLeft === 0
                  ? lang === 'ta'
                    ? 'மீண்டும் விளையாடு'
                    : 'Serve Another Round'
                  : lang === 'ta'
                    ? 'பந்தியைத் தொடங்கு'
                    : 'Start Virundhu Rush'}
              </span>
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {gridSlots.map((id) => {
          const dish = DISHES.find((d) => d.id === id)!;
          return (
            <button
              key={id}
              type="button"
              disabled={!running}
              onClick={() => handleServe(id)}
              className={`flex flex-col items-center justify-center rounded-xl border p-3.5 text-center transition cursor-pointer ${
                running
                  ? 'border-[#c9932d]/60 bg-white hover:border-[#631226] hover:bg-[#fff6e3] active:scale-95 shadow-sm'
                  : 'border-[#c9932d]/20 bg-[#f7eee0] opacity-60 cursor-not-allowed'
              }`}
            >
              <span className="text-2xl">{dish.emoji}</span>
              <span className="mt-1.5 text-xs font-bold text-[#3a0815]">
                {lang === 'ta' ? dish.nameTa : dish.nameEn}
              </span>
            </button>
          );
        })}
      </div>

      {feedback && <p className="text-center text-xs font-bold text-[#631226]">{feedback}</p>}
    </div>
  );
}

/* ============================================================================
   GAME 3: MAALAI MAATRAL (Garland Exchange Precision Reflex)
   ============================================================================ */
function MaalaiGame({
  lang,
  onWinPoints,
}: {
  lang: Lang;
  onWinPoints: (pts: number, gameTitle?: string) => void;
}) {
  const [pos, setPos] = useState(50);
  const dirRef = useRef(1);
  const [active, setActive] = useState(true);
  const [resultMsg, setResultMsg] = useState('');
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (!active) return;
    let rafId = 0;
    let last = performance.now();
    const speed = 92 + streak * 12;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      setPos((prev) => {
        let next = prev + dirRef.current * speed * dt;
        if (next >= 96) {
          next = 96;
          dirRef.current = -1;
        } else if (next <= 4) {
          next = 4;
          dirRef.current = 1;
        }
        return next;
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [active, streak]);

  const handleGarlandDrop = () => {
    if (!active) {
      setActive(true);
      setResultMsg('');
      return;
    }
    const dist = Math.abs(pos - 50);
    setActive(false);

    if (dist <= 7) {
      const pts = 60 + streak * 15;
      setStreak((s) => s + 1);
      // Play full victory sound on perfect garland exchange!
      soundFx.playGameVictory(pts);
      onWinPoints(pts, lang === 'ta' ? 'மாலை மாற்றல்' : 'Garland Exchange');
      setResultMsg(
        lang === 'ta'
          ? `மணமாலை கச்சிதமாக விழுந்தது! +${pts} புள்ளிகள் (தொடர் வெற்றி ${streak + 1})`
          : `Perfect Garland Exchange! +${pts} pts (Streak ${streak + 1})`
      );
    } else if (dist <= 18) {
      const pts = 30;
      setStreak((s) => s + 1);
      // Play points earned sound indication!
      soundFx.playPointsEarned(pts);
      onWinPoints(pts, lang === 'ta' ? 'மாலை மாற்றல்' : 'Garland Exchange');
      setResultMsg(
        lang === 'ta'
          ? `அருமை! மாலை மாற்றப்பட்டது +${pts} புள்ளிகள்`
          : `Great catch! Garland exchanged +${pts} pts`
      );
    } else {
      setStreak(0);
      soundFx.playMiss();
      setResultMsg(
        lang === 'ta'
          ? 'மாமன் தூக்கிவிட்டார்! மீண்டும் முயற்சி செய்யுங்கள்!'
          : 'Uncle lifted them just in time! Try again!'
      );
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#c9932d]/30 pb-3">
        <div>
          <h4 className="font-display text-xl font-bold text-[#3a0815]">
            {lang === 'ta' ? 'மாலை மாற்றல் சடங்கு' : 'Maalai Maatral · Garland Exchange Reflex'}
          </h4>
          <p className="text-xs text-[#6e463a]">
            {lang === 'ta'
              ? 'மணமாலை நடுவிலுள்ள தங்க வட்டத்திற்குள் வரும்போது தட்டி மாலை சூட்டுங்கள்!'
              : 'Tap right when the jasmine garland aligns inside the golden target zone!'}
          </p>
        </div>
        <div className="font-mono-num text-sm font-bold text-[#631226]">
          {lang === 'ta' ? 'தொடர் வெற்றி:' : 'Streak:'} {streak}
        </div>
      </div>

      <div className="rounded-xl border border-[#c9932d]/55 bg-[#3a0815] p-6">
        <div className="relative mx-auto h-14 max-w-lg overflow-hidden rounded-full border border-[#f7df94]/55 bg-[#1e050d]">
          <div className="absolute inset-y-0 left-1/2 w-16 -translate-x-1/2 border-x-2 border-[#f7df94] bg-[#c9932d]/25" />
          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl select-none"
            style={{ left: `${pos}%` }}
          >
            💐
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={handleGarlandDrop}
            className="rounded-full bg-gradient-to-r from-[#f7df94] to-[#c9932d] px-6 py-2.5 text-sm font-bold text-[#310d15] shadow-lg transition hover:brightness-105 cursor-pointer"
          >
            {active
              ? lang === 'ta'
                ? '💐 இப்போது மாலை சூட்டு!'
                : '💐 Exchange Garland Now!'
              : lang === 'ta'
                ? 'மீண்டும் விளையாடு'
                : 'Play Next Exchange'}
          </button>
          {resultMsg && <p className="text-center text-sm font-bold text-[#f7df94]">{resultMsg}</p>}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   GAME 4: THENGAI URUTTAL (Traditional Coconut Rolling Race)
   ============================================================================ */
function ThengaiGame({
  lang,
  team,
  onWinPoints,
}: {
  lang: Lang;
  team: TeamSide;
  onWinPoints: (pts: number, gameTitle?: string) => void;
}) {
  const [playerPos, setPlayerPos] = useState(0);
  const [rivalPos, setRivalPos] = useState(0);
  const [racing, setRacing] = useState(false);
  const [winner, setWinner] = useState<'none' | 'player' | 'rival'>('none');

  useEffect(() => {
    if (!racing) return;
    const interval = window.setInterval(() => {
      setRivalPos((prev) => {
        const next = Math.min(100, prev + 2.4 + Math.random() * 2.8);
        if (next >= 100) {
          setRacing(false);
          setWinner((w) => (w === 'none' ? 'rival' : w));
        }
        return next;
      });
    }, 180);
    return () => window.clearInterval(interval);
  }, [racing]);

  const startRace = () => {
    setPlayerPos(0);
    setRivalPos(0);
    setWinner('none');
    setRacing(true);
    soundFx.playChime();
  };

  const rollTap = () => {
    if (!racing || winner !== 'none') return;
    soundFx.playThavilTap();
    setPlayerPos((prev) => {
      const next = Math.min(100, prev + 7.5 + Math.random() * 3.5);
      if (next >= 100) {
        setRacing(false);
        setWinner('player');
        // Play victory celebration with points chime and temple bells
        soundFx.playGameVictory(75);
        onWinPoints(75, lang === 'ta' ? 'தேங்காய் உருட்டல்' : 'Coconut Rolling Race');
      }
      return next;
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#c9932d]/30 pb-3">
        <div>
          <h4 className="font-display text-xl font-bold text-[#3a0815]">
            {lang === 'ta' ? 'தேங்காய் உருட்டல் பந்தயம்' : 'Thengai Uruttal · Coconut Rolling Race'}
          </h4>
          <p className="text-xs text-[#6e463a]">
            {lang === 'ta'
              ? 'மஞ்சள் பூசிய மங்களத் தேங்காயை முதலில் எல்லைக் கோட்டிற்கு உருட்டிச் செல்ல வேகமாகத் தட்டுங்கள்!'
              : 'Tap rapidly to roll your turmeric-anointed coconut across the temple mat first!'}
          </p>
        </div>
      </div>

      <div className="space-y-3 rounded-xl border border-[#c9932d]/55 bg-[#3a0815] p-5 text-[#fff8eb]">
        <div>
          <div className="mb-1 flex justify-between text-xs font-semibold text-[#f7df94]">
            <span>
              {team === 'ponnu'
                ? lang === 'ta'
                  ? 'உங்கள் அணி: பொண்ணு'
                  : 'Your Lane: Team Ponnu'
                : lang === 'ta'
                  ? 'உங்கள் அணி: மாப்பிள்ளை'
                  : 'Your Lane: Team Mappillai'}
            </span>
            <span className="font-mono-num">{Math.round(playerPos)}%</span>
          </div>
          <div className="relative h-10 rounded-lg border border-[#c9932d]/50 bg-[#561a14]">
            <div
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl transition-all duration-100"
              style={{ left: `${Math.max(4, Math.min(95, playerPos))}%` }}
            >
              🥥
            </div>
          </div>
        </div>

        <div>
          <div className="mb-1 flex justify-between text-xs font-medium text-[#f5deb3]/80">
            <span>
              {team === 'ponnu'
                ? lang === 'ta'
                  ? 'மாப்பிள்ளை அணி'
                  : 'Rival Lane: Team Mappillai'
                : lang === 'ta'
                  ? 'பொண்ணு அணி'
                  : 'Rival Lane: Team Ponnu'}
            </span>
            <span className="font-mono-num">{Math.round(rivalPos)}%</span>
          </div>
          <div className="relative h-10 rounded-lg border border-[#c9932d]/25 bg-[#290b0f]">
            <div
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl transition-all duration-150"
              style={{ left: `${Math.max(4, Math.min(95, rivalPos))}%` }}
            >
              🥥
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {!racing ? (
            <button
              type="button"
              onClick={startRace}
              className="rounded-full bg-gradient-to-r from-[#f7df94] to-[#c9932d] px-6 py-2.5 text-sm font-bold text-[#310d15] shadow transition hover:brightness-105 cursor-pointer"
            >
              {winner === 'none'
                ? lang === 'ta'
                  ? 'பந்தயத்தைத் தொடங்கு'
                  : 'Start Coconut Race'
                : lang === 'ta'
                  ? 'மீண்டும் பந்தயம்'
                  : 'Race Again'}
            </button>
          ) : (
            <button
              type="button"
              onClick={rollTap}
              className="w-full max-w-xs rounded-full bg-gradient-to-r from-[#f7df94] to-[#c9932d] px-6 py-3 text-base font-bold text-[#310d15] shadow-xl active:scale-95 cursor-pointer"
            >
              {lang === 'ta' ? '🥥 வேகமாகத் தட்டுங்கள்!' : '🥥 TAP TO ROLL FASTER!'}
            </button>
          )}
        </div>

        {winner !== 'none' && (
          <p className="text-center text-sm font-bold text-[#f7df94]">
            {winner === 'player'
              ? lang === 'ta'
                ? 'வெற்றி! உங்கள் அணிக்கு +75 புள்ளிகள் கிடைத்தது!'
                : 'Victory! Your team earned +75 Royal Points!'
              : lang === 'ta'
                ? 'நல்ல போட்டி! அடுத்த பந்தயத்தில் வெல்லுங்கள்!'
                : 'Close race! Tap faster next round to claim the 75-pt bonus!'}
          </p>
        )}
      </div>
    </div>
  );
}

/* ============================================================================
   MAIN GAMES ARENA SHELL
   ============================================================================ */
export default function WeddingGamesArena({
  lang,
  guestName,
  team,
  totalScore,
  ponnuScore,
  mappillaiScore,
  onAddPoints,
  onSelectTeam,
  onProceedToOracle,
}: WeddingGamesArenaProps) {
  const [activeGame, setActiveGame] = useState<GameId>('mothiram');
  const royalTitle = getRoyalTitle(totalScore, lang);
  const sectionRef = useRef<HTMLElement | null>(null);
  const gameMusicRef = useRef<HTMLAudioElement | null>(null);
  const gamesMusicPlayedRef = useRef(false);

  // Games section dedicated music — play once when user enters games area
  useEffect(() => {
    if (typeof window === 'undefined' || typeof Audio === 'undefined') return;

    const audio = new Audio(GAMES_THEME_SRC);
    audio.volume = 0.72;
    audio.preload = 'none';
    gameMusicRef.current = audio;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !gamesMusicPlayedRef.current && !soundFx.isMuted()) {
          gamesMusicPlayedRef.current = true;
          // Pause wedding background music
          soundFx.pauseMusic();
          // Play game theme once
          const el = gameMusicRef.current;
          if (el) {
            el.currentTime = 0;
            void el.play().catch(() => undefined);
            el.addEventListener('ended', () => {
              // Resume wedding music after game theme finishes
              if (!soundFx.isMuted()) {
                soundFx.startRandomCollection(true);
              }
            }, { once: true });
          }
        }
      },
      { threshold: 0.3 }
    );

    // Observe the section element
    const sectionEl = document.getElementById('games');
    if (sectionEl) observer.observe(sectionEl);

    return () => {
      observer.disconnect();
      const el = gameMusicRef.current;
      if (el) {
        el.pause();
        el.src = '';
      }
    };
  }, []);

  const gameCards: Array<{
    id: GameId;
    titleEn: string;
    titleTa: string;
    subEn: string;
    subTa: string;
    img: string;
  }> = [
    {
      id: 'mothiram',
      titleEn: 'Mothiram Thedal',
      titleTa: 'மோதிரம் தேடல்',
      subEn: 'Find the wedding ring in the rose-petal milk pot',
      subTa: 'பால் குடத்தில் தங்க மோதிரத்தைக் கண்டறியுங்கள்',
      img: HERITAGE_ASSETS.coupleTemple,
    },
    {
      id: 'virundhu',
      titleEn: 'Kalyana Virundhu',
      titleTa: 'கல்யாண விருந்து',
      subEn: 'Serve Madurai delicacies on the banana leaf',
      subTa: 'வாழை இலையில் விருந்து பரிமாறும் போட்டி',
      img: HERITAGE_ASSETS.weddingCourtyard,
    },
    {
      id: 'maalai',
      titleEn: 'Maalai Maatral',
      titleTa: 'மாலை மாற்றல்',
      subEn: 'Precision reflex garland exchange challenge',
      subTa: 'சரியான நேரத்தில் மணமாலை சூட்டும் போட்டி',
      img: HERITAGE_ASSETS.garlandPoster,
    },
    {
      id: 'thengai',
      titleEn: 'Thengai Uruttal',
      titleTa: 'தேங்காய் உருட்டல்',
      subEn: 'Traditional temple mat coconut rolling race',
      subTa: 'மங்களத் தேங்காய் உருட்டும் பாரம்பரியப் போட்டி',
      img: HERITAGE_ASSETS.duskTemple,
    },
  ];

  return (
    <ContinuitySection3D
      id="games"
      className="relative py-16 text-[#3b1d16] sm:py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 248, 235, 0.88), rgba(255, 248, 235, 0.94)), url('${HERITAGE_ASSETS.maduraiPanorama}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 border-b border-[#c9932d]/40 pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#631226] uppercase">
              ❖ {lang === 'ta' ? 'தமிழ்நாடு திருமண விளையாட்டு அரங்கம்' : 'Tamil Nadu Wedding Games Arena'} ❖
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#3a0815] sm:text-5xl">
              {lang === 'ta'
                ? 'பொண்ணு அணி vs மாப்பிள்ளை அணி'
                : 'Team Ponnu vs. Team Mappillai'}
            </h2>
            <p className="mt-1 text-sm text-[#6e463a]">
              {lang === 'ta'
                ? `${guestName}, விளையாடிப் புள்ளிகள் சேகரித்து உங்கள் அரச பட்டத்தை ஸ்டோரி கார்டில் பெறுங்கள்!`
                : `Play Tamil Nadu wedding rituals, boost your side's score, and unlock a Royal Title for your 1080×1920 Story Card.`}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-[#c9932d] bg-white/95 px-5 py-3 shadow-md">
            <div>
              <div className="text-[11px] font-bold tracking-wider text-[#6e463a] uppercase">
                {lang === 'ta' ? 'உங்கள் புள்ளிகள்' : 'Your Score'}
              </div>
              <div className="font-mono-num text-xl font-bold text-[#631226]">{totalScore} pts</div>
            </div>
            <div className="h-8 w-px bg-[#c9932d]/40" />
            <div>
              <div className="flex items-center gap-1 text-[11px] font-bold tracking-wider text-[#6e463a] uppercase">
                <Crown className="h-3 w-3 text-[#c9932d]" />
                <span>{lang === 'ta' ? 'அரச பட்டம்' : 'Royal Title'}</span>
              </div>
              <div className="text-sm font-bold text-[#3a0815]">{royalTitle}</div>
            </div>
          </div>
        </div>

        {/* Live Team Tally Bar */}
        <div className="mt-6 grid gap-4 rounded-2xl border border-[#c9932d]/50 bg-[#fffaf0]/95 p-4 shadow-md sm:grid-cols-3 sm:items-center">
          <button
            type="button"
            onClick={() => onSelectTeam('ponnu')}
            className={`flex items-center justify-between rounded-xl border px-4 py-2.5 text-left transition cursor-pointer ${
              team === 'ponnu'
                ? 'border-[#f7df94] bg-[#631226] text-white shadow'
                : 'border-[#c9932d]/35 bg-white text-[#3a0815] hover:border-[#631226]'
            }`}
          >
            <div>
              <span className="block text-xs font-bold">
                {lang === 'ta' ? 'பொண்ணு அணி (M. திரிஷா)' : 'Team Ponnu (Thirisha)'}
              </span>
              <span className="text-[11px] opacity-80">
                {team === 'ponnu'
                  ? lang === 'ta'
                    ? 'தேர்ந்தெடுக்கப்பட்டது'
                    : 'Your active team'
                  : lang === 'ta'
                    ? 'மாறத் தட்டவும்'
                    : 'Tap to join'}
              </span>
            </div>
            <span className="font-mono-num text-lg font-bold">{ponnuScore}</span>
          </button>

          <div className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-[#631226]">
              <Trophy className="h-4 w-4 text-[#c9932d]" />
              <span>{lang === 'ta' ? 'நேரடி அணிப் போட்டி' : 'Live Wedding Cup'}</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>{lang === 'ta' ? 'GitHub நேரலை' : 'GitHub Live'}</span>
              </span>
            </div>
            <div className="mt-2 flex h-2.5 overflow-hidden rounded-full bg-[#e8d5b3]">
              <div
                className="bg-gradient-to-r from-[#a62040] to-[#c9932d] transition-all duration-300"
                style={{
                  width: `${Math.round((ponnuScore / Math.max(1, ponnuScore + mappillaiScore)) * 100)}%`,
                }}
              />
              <div className="flex-1 bg-[#1e3a8a]" />
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectTeam('mappillai')}
            className={`flex items-center justify-between rounded-xl border px-4 py-2.5 text-left transition cursor-pointer ${
              team === 'mappillai'
                ? 'border-[#f7df94] bg-[#183d70] text-white shadow'
                : 'border-[#c9932d]/35 bg-white text-[#3a0815] hover:border-[#183d70]'
            }`}
          >
            <div>
              <span className="block text-xs font-bold">
                {lang === 'ta' ? 'மாப்பிள்ளை அணி (சிவசங்கர்)' : 'Team Mappillai (Siva)'}
              </span>
              <span className="text-[11px] opacity-80">
                {team === 'mappillai'
                  ? lang === 'ta'
                    ? 'தேர்ந்தெடுக்கப்பட்டது'
                    : 'Your active team'
                  : lang === 'ta'
                    ? 'மாறத் தட்டவும்'
                    : 'Tap to join'}
              </span>
            </div>
            <span className="font-mono-num text-lg font-bold">{mappillaiScore}</span>
          </button>
        </div>

        {/* 4 Game Selector Tabs with Authentic Artwork */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {gameCards.map((g) => {
            const isSelected = activeGame === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => {
                  setActiveGame(g.id);
                  soundFx.playChime();
                }}
                className={`card-3d-tilt flex items-center gap-3 rounded-2xl border p-3 text-left transition cursor-pointer ${
                  isSelected
                    ? 'border-[#631226] bg-[#631226] text-white shadow-xl'
                    : 'border-[#c9932d]/45 bg-white/95 text-[#3a0815] hover:border-[#631226]'
                }`}
              >
                <img
                  src={g.img}
                  alt={lang === 'ta' ? g.titleTa : g.titleEn}
                  className="h-14 w-14 shrink-0 rounded-xl border border-[#c9932d]/60 object-cover"
                />
                <div className="min-w-0">
                  <div className="truncate text-sm font-bold">
                    {lang === 'ta' ? g.titleTa : g.titleEn}
                  </div>
                  <div className="line-clamp-2 text-[11px] opacity-80">
                    {lang === 'ta' ? g.subTa : g.subEn}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Game Stage */}
        <div className="card-3d-tilt mt-6 rounded-3xl border border-[#c9932d] bg-[#fffdf7]/95 p-5 shadow-2xl sm:p-7">
          {activeGame === 'mothiram' && <MothiramGame lang={lang} onWinPoints={onAddPoints} />}
          {activeGame === 'virundhu' && <VirundhuGame lang={lang} onWinPoints={onAddPoints} />}
          {activeGame === 'maalai' && <MaalaiGame lang={lang} onWinPoints={onAddPoints} />}
          {activeGame === 'thengai' && (
            <ThengaiGame lang={lang} team={team} onWinPoints={onAddPoints} />
          )}
        </div>

        {/* Finale Transition CTA right below Games -> Let's Predict Your Next Luck */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#c9932d] bg-gradient-to-r from-[#631226] via-[#4a0c1d] to-[#631226] px-6 py-4 text-white shadow-xl sm:flex-row">
          <div className="flex items-center gap-3">
            <Flame className="h-6 w-6 shrink-0 text-[#f7df94]" />
            <div>
              <p className="text-sm font-bold">
                {lang === 'ta'
                  ? '🔮 விளையாட்டு நிறைவு: உங்கள் அடுத்த அதிர்ஷ்டத்தை கணிக்க வாருங்கள்!'
                  : "🔮 Games Finale: Let's Predict Your Next Luck!"}
              </p>
              <p className="text-xs text-[#f5deb3]">
                {lang === 'ta'
                  ? 'சுடர்விடும் மாய தீபத்தைத் தொட்டுத் திறக்கவும் — 100% நகைச்சுவை & சிரிப்பு நிறைந்த எதிர்கால கணிப்பு!'
                  : 'Touch the glowing magic lamp to unlock your 100% hilarious next luck prophecy!'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onProceedToOracle}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#f7df94] to-[#c9932d] px-5 py-2.5 text-xs font-bold text-[#310d15] shadow transition hover:brightness-105 cursor-pointer"
          >
            <Sparkles className="h-4 w-4" />
            <span>{lang === 'ta' ? 'அதிர்ஷ்டத்தை கணிக்க →' : 'Predict Next Luck →'}</span>
          </button>
        </div>
      </div>
    </ContinuitySection3D>
  );
}
