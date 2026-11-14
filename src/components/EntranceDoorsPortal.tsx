import { useState, type FormEvent } from 'react';
import { ArrowRight, DoorOpen, Globe } from 'lucide-react';
import { HERITAGE_ASSETS, WEDDING_CONFIG, type Lang, type TeamSide } from '../data/weddingData';
import { soundFx } from '../utils/soundFx';

interface EntranceDoorsPortalProps {
  lang: Lang;
  onToggleLang?: () => void;
  guestName: string;
  team: TeamSide;
  onUpdateGuest: (name: string, team: TeamSide) => void;
  onEnter: () => void;
}

export default function EntranceDoorsPortal({
  lang,
  onToggleLang,
  guestName,
  team,
  onUpdateGuest,
  onEnter,
}: EntranceDoorsPortalProps) {
  const [nameInput, setNameInput] = useState(guestName === 'Esteemed Guest' ? '' : guestName);
  const [nameError, setNameError] = useState('');
  const [portalStage, setPortalStage] = useState<'form' | 'unlocking'>('form');
  const [doorsOpen, setDoorsOpen] = useState(false);

  const handleSubmitNameStep = (e: FormEvent) => {
    e.preventDefault();
    if (doorsOpen || portalStage === 'unlocking') return;
    const cleaned = nameInput.trim();
    if (!cleaned) {
      setNameError(
        lang === 'ta'
          ? 'தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.'
          : 'Please enter your name to proceed.'
      );
      return;
    }
    setNameError('');
    onUpdateGuest(cleaned, team);

    // 1. Show the royal key unlocking screen like before (no manual key pressing needed)
    setPortalStage('unlocking');

    // 2. Play authentic multi-strike traditional temple bell sequence (கோவில் மணி ஓசை)
    soundFx.playTraditionalTempleBellSequence();

    // 3. Give some time (~1800ms) to show the royal key turning and unlocking automatically
    window.setTimeout(() => {
      setDoorsOpen(true);
      if (!soundFx.isMuted()) {
        soundFx.startRandomCollection(true);
      }

      // 4. After the doors fully swing open (~2800ms) and sanctum reveals, proceed to home page!
      window.setTimeout(() => {
        onEnter();
      }, 2800);
    }, 1800);
  };

  const handleQuickSkip = () => {
    if (doorsOpen) return;
    const cleaned = nameInput.trim() || guestName || 'Esteemed Guest';
    onUpdateGuest(cleaned, team);
    soundFx.playChime();
    if (!soundFx.isMuted()) {
      soundFx.startRandomCollection(true);
    }
    onEnter();
  };

  const displayGuest =
    nameInput.trim() || guestName || (lang === 'ta' ? 'அன்புள்ள விருந்தினர்கள்' : 'Our Esteemed Guest');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={lang === 'ta' ? 'திருமண கோயில் வாயில்' : 'Royal Madurai Temple Entrance'}
      className="fixed inset-0 z-50 overflow-hidden bg-[#1b060d] text-[#fdf6e7]"
      style={{ perspective: '1600px' }}
    >
      {/* FULL-SCREEN Sanctum Revealed Behind the Opening Doors */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(36, 6, 14, 0.34), rgba(24, 4, 10, 0.56)), url('${HERITAGE_ASSETS.heroTempleDay}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className={`transition-all duration-700 ${
            doorsOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <p className="text-xs font-bold tracking-[0.22em] text-[#f7df94] uppercase sm:text-sm">
            {lang === 'ta' ? WEDDING_CONFIG.familyFunctionTa : WEDDING_CONFIG.familyFunction}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-[#fff8eb] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] sm:text-6xl">
            {lang === 'ta' ? 'மங்களம் பொங்க வருக!' : 'Welcome to the Wedding Celebration!'}
          </h2>
          <p className="mt-2 text-sm font-semibold text-[#f7df94] drop-shadow sm:text-lg">
            {lang === 'ta'
              ? `${displayGuest} அவர்களைத் திருமூர்த்தி குடும்ப விழாவிற்கு அன்புடன் வரவேற்கிறோம்...`
              : `Cordially Welcoming ${displayGuest} to the Madurai Celebration...`}
          </p>
        </div>
      </div>

      {/* FULL-SCREEN Left Golden Carved Temple Door */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 bottom-0 left-0 w-1/2 border-r border-[#f7df94]/70 shadow-2xl transition-transform duration-[2400ms] ease-[cubic-bezier(0.22,0.85,0.36,1)]"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 8, 2, 0.08), rgba(22, 8, 2, 0.2)), url('${HERITAGE_ASSETS.templeDoorBg}')`,
          backgroundSize: '200% 100%',
          backgroundPosition: 'left center',
          transformOrigin: 'left center',
          transform: doorsOpen ? 'rotateY(-108deg)' : 'rotateY(0deg)',
        }}
      />

      {/* FULL-SCREEN Right Golden Carved Temple Door */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 bottom-0 w-1/2 border-l border-[#f7df94]/70 shadow-2xl transition-transform duration-[2400ms] ease-[cubic-bezier(0.22,0.85,0.36,1)]"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 8, 2, 0.08), rgba(22, 8, 2, 0.2)), url('${HERITAGE_ASSETS.templeDoorBg}')`,
          backgroundSize: '200% 100%',
          backgroundPosition: 'right center',
          transformOrigin: 'right center',
          transform: doorsOpen ? 'rotateY(108deg)' : 'rotateY(0deg)',
        }}
      />

      {/* Floating Foreground Controls Layer Over the Full-Screen Doors — Fits 100% in 1 screen on Mobile */}
      <div className="relative z-10 flex h-full max-h-[100dvh] w-full flex-col justify-between overflow-hidden p-2 sm:p-5">
        {/* Top Language Bar alone on the screen */}
        <div className="mx-auto flex w-full max-w-md items-center justify-between px-1 sm:max-w-4xl">
          <span className="text-[10px] font-bold tracking-widest text-[#f7df94]/90 uppercase sm:text-xs">
            {lang === 'ta' ? 'அழைப்பிதழ் வாயில்' : 'Wedding Portal'}
          </span>
          {onToggleLang && (
            <button
              type="button"
              onClick={onToggleLang}
              title={lang === 'en' ? 'தமிழில் மாற்ற' : 'Switch to English'}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#f7df94] bg-[#2b0711]/95 px-3 py-1 text-xs font-bold text-[#f7df94] shadow-md transition hover:bg-[#4a0d1b] cursor-pointer"
            >
              <Globe className="h-3.5 w-3.5 text-[#f7df94]" />
              <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>
          )}
        </div>

        {/* Top Sacred Header + Event Info Boxes (only on form step) */}
        {portalStage === 'form' && (
          <div className="mx-auto w-full max-w-4xl text-center">
            <div className="overflow-hidden rounded-xl border border-[#c9932d]/65 bg-[#1d040b]/88 px-2.5 py-1.5 shadow-2xl sm:rounded-2xl sm:px-6 sm:py-3.5">
              <p className="text-[9px] font-semibold tracking-[0.1em] text-[#f7df94] uppercase sm:text-xs sm:tracking-[0.18em]">
                {lang === 'ta' ? WEDDING_CONFIG.deitiesTa : WEDDING_CONFIG.deities}
              </p>
              <p className="text-[10px] font-extrabold tracking-[0.12em] text-[#fff4d4] uppercase sm:text-sm">
                {lang === 'ta' ? WEDDING_CONFIG.familyFunctionTa : WEDDING_CONFIG.familyFunction}
              </p>
              <h1 className="font-display text-base leading-tight font-bold text-[#fff8eb] sm:text-3xl">
                {lang === 'ta'
                  ? `${WEDDING_CONFIG.brideTa} & ${WEDDING_CONFIG.groomTa}`
                  : `${WEDDING_CONFIG.bride} & ${WEDDING_CONFIG.groomShort}`}
              </h1>

              {/* Compact Event & Venue Boxes — Single horizontal row on mobile */}
              <div className="mx-auto mt-1 grid max-w-3xl grid-cols-3 gap-1 text-[8.5px] sm:mt-2.5 sm:gap-2 sm:text-xs">
                <div className="rounded-lg border border-[#c9932d]/55 bg-[#120207]/90 px-1 py-1 sm:rounded-xl sm:px-2.5 sm:py-1.5">
                  <span className="block font-bold tracking-wider text-[#f7df94] uppercase">
                    {lang === 'ta' ? 'சுப முகூர்த்தம்' : 'Muhurtham'}
                  </span>
                  <span className="block truncate font-semibold text-[#fff8eb]">
                    {lang === 'ta' ? '22.11 · 6:15–7:15 AM' : '22 Nov · 6:15 AM'}
                  </span>
                </div>

                <div className="rounded-lg border border-[#c9932d]/55 bg-[#120207]/90 px-1 py-1 sm:rounded-xl sm:px-2.5 sm:py-1.5">
                  <span className="block font-bold tracking-wider text-[#f7df94] uppercase">
                    {lang === 'ta' ? 'நிச்சயதார்த்தம்' : 'Nichayathartham'}
                  </span>
                  <span className="block truncate font-semibold text-[#fff8eb]">
                    {lang === 'ta' ? '21.11 · மாலை 6:30' : '21 Nov · 6:30 PM'}
                  </span>
                </div>

                <div className="rounded-lg border border-[#c9932d]/55 bg-[#120207]/90 px-1 py-1 sm:rounded-xl sm:px-2.5 sm:py-1.5">
                  <span className="block font-bold tracking-wider text-[#f7df94] uppercase">
                    {lang === 'ta' ? 'மண்டபம்' : 'Venue'}
                  </span>
                  <span className="block truncate font-semibold text-[#fff8eb]">
                    {lang === 'ta' ? 'MATD மஹால்' : 'MATD Mahal'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Center Interactive Overlay: Form OR Automatic Key Unlocking Presentation */}
        <div className="my-auto flex flex-col items-center justify-center py-1 sm:py-3">
          {portalStage === 'form' ? (
            <form
              onSubmit={handleSubmitNameStep}
              className="w-full max-w-md rounded-xl border border-[#f7df94]/85 bg-[#1a040a]/92 p-3 shadow-2xl sm:rounded-2xl sm:border-2 sm:p-5"
            >
              <p className="text-center font-display text-sm font-bold text-[#f7df94] sm:text-xl">
                {lang === 'ta' ? 'குடும்பத்தினர் & நண்பர்கள் வருக!' : 'Welcome, Family & Friends'}
              </p>
              <p className="mt-0.5 text-center text-[10px] text-[#f3d9ad]/85 sm:text-xs">
                {lang === 'ta'
                  ? 'உங்கள் பெயரை உள்ளிட்டுத் திருமண வாயிலைத் திறந்து நுழையவும்.'
                  : 'Enter your name below to open the temple doors and enter the celebration.'}
              </p>

              <div className="mt-2 sm:mt-3">
                <label
                  htmlFor="portalGuestNameInput"
                  className="block text-[10px] font-bold tracking-wider text-[#f7df94] uppercase sm:text-xs"
                >
                  {lang === 'ta'
                    ? 'உங்கள் பெயர் (அழைப்பிதழ் & QR-க்காக) *'
                    : 'Your Name (For Personalised Invite & QR) *'}
                </label>
                <input
                  id="portalGuestNameInput"
                  type="text"
                  maxLength={50}
                  value={nameInput}
                  onChange={(e) => {
                    setNameInput(e.target.value);
                    if (nameError) setNameError('');
                  }}
                  placeholder={
                    lang === 'ta'
                      ? 'உங்கள் பெயரை உள்ளிடவும் (எ.கா. சுந்தர் & குடும்பத்தினர்)'
                      : 'Enter your name (e.g. Sundar & Family)'
                  }
                  className="mt-1 w-full rounded-lg border border-[#c9932d]/70 bg-[#120207] px-2.5 py-1.5 text-xs text-[#fff8eb] placeholder-[#d4b898]/60 focus:border-[#f7df94] focus:outline-none sm:px-3.5 sm:py-2.5 sm:text-sm"
                />
                {nameError && <p className="mt-1 text-[11px] font-bold text-[#ffb4b4]">{nameError}</p>}
              </div>

              <button
                type="submit"
                disabled={doorsOpen}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#f7df94] via-[#c9932d] to-[#b3822a] px-3 py-2 text-xs font-bold text-[#24050d] shadow-lg transition hover:brightness-105 cursor-pointer sm:mt-4 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
              >
                <DoorOpen className="h-4 w-4" />
                <span>{lang === 'ta' ? 'திருமண வாயிலைத் திறக்கவும்' : 'Open Temple Doors & Enter'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          ) : (
            /* Automatic Key Unlocking Presentation (Shows the Royal Key & doors opening automatically without manual clicking) */
            <div
              className={`flex flex-col items-center justify-center text-center transition-all duration-700 ${
                doorsOpen ? 'pointer-events-none scale-90 opacity-0' : 'scale-100 opacity-100'
              }`}
            >
              <div className="relative flex items-center justify-center">
                {/* Golden ambient aura */}
                <div className="absolute inset-0 h-32 w-32 -translate-x-2 -translate-y-2 rounded-full bg-[#f7df94]/30 blur-2xl animate-pulse sm:h-44 sm:w-44" />
                <img
                  src={HERITAGE_ASSETS.royalKey}
                  alt="Royal Key"
                  className="relative h-28 w-28 sm:h-36 sm:w-36 object-contain drop-shadow-[0_8px_30px_rgba(247,223,148,0.85)] transition-transform duration-1000 ease-out"
                  style={{
                    transform: doorsOpen ? 'rotate(90deg) scale(0.8)' : 'rotate(-15deg) scale(1.05)',
                  }}
                />
              </div>

              <div className="mt-3 inline-block rounded-full border border-[#f7df94]/85 bg-gradient-to-b from-[#5c1026] to-[#350714] px-5 py-2 font-display text-xs sm:text-sm font-bold tracking-wide text-[#fff8eb] shadow-2xl">
                {doorsOpen
                  ? lang === 'ta'
                    ? '🚪 திருக்கோயில் வாயில் திறக்கிறது...'
                    : '🚪 Temple Doors Opening...'
                  : lang === 'ta'
                    ? '✨ அரச சாவி தானாக வாயிலைத் திறக்கிறது... ✨'
                    : '✨ Royal Key Automatically Opening Doors... ✨'}
              </div>

              <p className="mt-2 text-xs sm:text-sm font-semibold text-[#f7df94] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                {lang === 'ta'
                  ? `${displayGuest} அவர்களுக்காகத் திருமண வாயில் திறக்கப்படுகிறது`
                  : `Opening the Temple Doors for ${displayGuest}...`}
              </p>
            </div>
          )}
        </div>

        {/* Bottom Skip Bar */}
        <div className="flex justify-center pb-1">
          <button
            type="button"
            onClick={handleQuickSkip}
            disabled={doorsOpen}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#c9932d]/60 bg-[#1a040a]/85 px-4 py-2 text-xs font-semibold text-[#f7df94] shadow-lg transition hover:border-[#f7df94] cursor-pointer"
          >
            <span>
              {lang === 'ta'
                ? 'நேரடியாக தளத்திற்குச் செல்'
                : 'Enter Website Directly'}
            </span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
