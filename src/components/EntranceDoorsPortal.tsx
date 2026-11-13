import { useRef, useState, type FormEvent } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { HERITAGE_ASSETS, WEDDING_CONFIG, type Lang, type TeamSide } from '../data/weddingData';
import { soundFx } from '../utils/soundFx';

interface EntranceDoorsPortalProps {
  lang: Lang;
  guestName: string;
  team: TeamSide;
  onUpdateGuest: (name: string, team: TeamSide) => void;
  onEnter: () => void;
}

export default function EntranceDoorsPortal({
  lang,
  guestName,
  team,
  onUpdateGuest,
  onEnter,
}: EntranceDoorsPortalProps) {
  const [nameInput, setNameInput] = useState(guestName === 'Esteemed Guest' ? '' : guestName);
  const [selectedTeam, setSelectedTeam] = useState<TeamSide>(team);
  const [portalStep, setPortalStep] = useState<'form' | 'key'>('form');
  const [nameError, setNameError] = useState('');
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [showGarlandVideo, setShowGarlandVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleSubmitNameStep = (e: FormEvent) => {
    e.preventDefault();
    const cleaned = nameInput.trim();
    if (!cleaned) {
      setNameError(
        lang === 'ta'
          ? 'தொடர உங்கள் பெயரை உள்ளிடவும்.'
          : 'Please enter your name to continue to the royal key.'
      );
      return;
    }
    setNameError('');
    onUpdateGuest(cleaned, selectedTeam);
    soundFx.playChime();
    setPortalStep('key');
  };

  const handleUnlockDoor = () => {
    if (doorsOpen) return;
    soundFx.playTempleBell();
    if (!soundFx.isMuted()) {
      soundFx.startRandomCollection(true);
    }
    setDoorsOpen(true);

    // Full-screen carved temple door swing (~2.4s) + sanctum reveal before garland ceremony video
    window.setTimeout(() => {
      setShowGarlandVideo(true);
      window.setTimeout(() => {
        if (videoRef.current) {
          void videoRef.current.play().catch(() => undefined);
        }
      }, 80);
    }, 3200);
  };

  const handleQuickSkip = () => {
    const cleaned = nameInput.trim() || guestName || 'Esteemed Guest';
    onUpdateGuest(cleaned, selectedTeam);
    soundFx.playChime();
    if (!soundFx.isMuted()) {
      soundFx.startRandomCollection(true);
    }
    onEnter();
  };

  const displayGuest =
    nameInput.trim() || guestName || (lang === 'ta' ? 'அன்புள்ள விருந்தினர்கள்' : 'Our Esteemed Guest');

  if (showGarlandVideo) {
    return (
      <section
        aria-label={lang === 'ta' ? 'மணமாலை மாற்றும் விழா' : 'Sacred Garland Exchange Ceremony'}
        className="fixed inset-0 z-50 flex flex-col justify-end overflow-hidden bg-black text-[#fff6e3]"
      >
        <video
          ref={videoRef}
          src={HERITAGE_ASSETS.garlandVideo}
          poster={HERITAGE_ASSETS.garlandPoster}
          playsInline
          autoPlay
          muted
          controls={false}
          onEnded={onEnter}
          className="absolute inset-0 h-full w-full object-contain sm:object-cover"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#19060c]/95 via-[#19060c]/20 to-[#19060c]/60"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-4 pb-8 pt-10 text-center sm:px-6 sm:pb-12">
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#f7df94] uppercase sm:text-xs">
            {lang === 'ta' ? WEDDING_CONFIG.familyFunctionTa : WEDDING_CONFIG.familyFunction}
          </p>
          <h2 className="mt-1.5 font-display text-2xl font-bold text-white sm:text-5xl">
            {lang === 'ta' ? 'திருமண விழா — மாலை மாற்றல்' : 'Wedding Ceremony'}
          </h2>
          <p className="mt-1.5 text-xs text-[#f7e7cb] sm:text-sm">
            {lang === 'ta'
              ? `${WEDDING_CONFIG.brideTa} & ${WEDDING_CONFIG.groomTa} · அன்புடன் வரவேற்கிறோம்`
              : `${WEDDING_CONFIG.bride} & ${WEDDING_CONFIG.groomShort} · Cordially Welcoming ${displayGuest}`}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:mt-5 sm:gap-3">
            <button
              type="button"
              onClick={() => {
                if (videoRef.current) void videoRef.current.play();
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#f7df94]/60 bg-[#3a0815]/90 px-4 py-2 text-xs font-semibold text-[#f7df94] cursor-pointer"
            >
              <Play className="h-3.5 w-3.5" />
              <span>{lang === 'ta' ? 'வீடியோ இயக்கு' : 'Replay Ceremony Clip'}</span>
            </button>
            <button
              type="button"
              onClick={onEnter}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f7df94] via-[#c9932d] to-[#b3822a] px-5 py-2.5 text-xs font-bold text-[#24050d] shadow-xl transition hover:brightness-105 cursor-pointer sm:px-6 sm:text-sm"
            >
              <span>{lang === 'ta' ? 'முழு தளத்திற்குச் செல் →' : 'Continue to Celebration →'}</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

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
            {lang === 'ta' ? 'மங்களம் பொங்க வருக!' : 'Opening Sacred Temple Doors...'}
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

      {/* Floating Foreground Controls Layer Over the Full-Screen Doors */}
      <div className="relative z-10 flex h-full w-full flex-col justify-between overflow-y-auto px-3 py-4 sm:px-6 sm:py-5">
        {/* Top Sacred Header + Event Info Boxes (only on form step) */}
        {portalStep === 'form' && (
          <div className="mx-auto w-full max-w-4xl text-center">
            <div className="rounded-2xl border border-[#c9932d]/65 bg-[#1d040b]/82 px-3 py-3 shadow-2xl sm:px-6 sm:py-4 overflow-hidden">
              <p className="text-[10px] font-semibold tracking-[0.14em] text-[#f7df94] uppercase sm:text-xs sm:tracking-[0.18em]">
                {lang === 'ta' ? WEDDING_CONFIG.deitiesTa : WEDDING_CONFIG.deities}
              </p>
              <p className="mt-1 text-[11px] font-extrabold tracking-[0.16em] text-[#fff4d4] uppercase sm:text-sm">
                {lang === 'ta' ? WEDDING_CONFIG.familyFunctionTa : WEDDING_CONFIG.familyFunction}
              </p>
              <h1 className="mt-1 font-display text-xl leading-tight font-bold text-[#fff8eb] sm:text-4xl">
                {lang === 'ta'
                  ? `${WEDDING_CONFIG.brideTa} & ${WEDDING_CONFIG.groomTa}`
                  : `${WEDDING_CONFIG.bride} & ${WEDDING_CONFIG.groomShort}`}
              </h1>

              {/* Compact Event & Venue Boxes */}
              <div className="mx-auto mt-2.5 grid max-w-3xl gap-1.5 grid-cols-1 text-[10px] sm:grid-cols-3 sm:gap-2 sm:text-xs">
                <div className="rounded-xl border border-[#c9932d]/55 bg-[#120207]/90 px-2.5 py-1.5">
                  <span className="block text-[9px] font-bold tracking-wider text-[#f7df94] uppercase sm:text-[10px]">
                    {lang === 'ta' ? 'சுப முகூர்த்தம்' : 'Muhurtham'}
                  </span>
                  <span className="font-semibold text-[#fff8eb]">
                    {lang === 'ta' ? '22.11.2026 · காலை 6:15–7:15' : '22 Nov 2026 · 6:15–7:15 AM'}
                  </span>
                </div>

                <div className="rounded-xl border border-[#c9932d]/55 bg-[#120207]/90 px-2.5 py-1.5">
                  <span className="block text-[9px] font-bold tracking-wider text-[#f7df94] uppercase sm:text-[10px]">
                    {lang === 'ta' ? 'நிச்சயதார்த்தம்' : 'Nichayathartham'}
                  </span>
                  <span className="font-semibold text-[#fff8eb]">
                    {lang === 'ta' ? '21.11.2026 · மாலை 6:30' : '21 Nov 2026 · 6:30 PM'}
                  </span>
                </div>

                <div className="rounded-xl border border-[#c9932d]/55 bg-[#120207]/90 px-2.5 py-1.5">
                  <span className="block text-[9px] font-bold tracking-wider text-[#f7df94] uppercase sm:text-[10px]">
                    {lang === 'ta' ? 'திருமண மண்டபம்' : 'Venue'}
                  </span>
                  <span className="font-semibold text-[#fff8eb]">
                    {lang === 'ta' ? 'MATD திருமூர்த்தி மஹால், மதுரை' : 'MATD Thirumoorthi Mahal, Madurai'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Center Interactive Overlay Over Full-Screen Temple Doors */}
        <div className="my-auto flex flex-col items-center justify-center py-4">
          {portalStep === 'form' ? (
            <form
              onSubmit={handleSubmitNameStep}
              className="w-full max-w-md rounded-2xl border-2 border-[#f7df94]/85 bg-[#1a040a]/90 p-5 shadow-2xl sm:p-6"
            >
              <p className="text-center font-display text-lg font-bold text-[#f7df94] sm:text-xl">
                {lang === 'ta' ? 'குடும்பத்தினர் & நண்பர்கள் வருக!' : 'Welcome, Family & Friends'}
              </p>
              <p className="mt-1 text-center text-xs text-[#f3d9ad]/85">
                {lang === 'ta'
                  ? 'உங்கள் பெயரை உள்ளிட்டு அரச சாவியைப் பெற்றுத் திருமண வாயிலைத் திறக்கவும்.'
                  : 'Enter your name below to receive the Royal Key and open the temple doors.'}
              </p>

              <div className="mt-4">
                <label
                  htmlFor="portalGuestNameInput"
                  className="block text-[11px] font-bold tracking-wider text-[#f7df94] uppercase sm:text-xs"
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
                  placeholder={lang === 'ta' ? 'உங்கள் பெயரை உள்ளிடவும்' : 'Enter your name (e.g. Sundar & Family)'}
                  className="mt-1.5 w-full rounded-lg border border-[#c9932d]/70 bg-[#120207] px-3.5 py-2.5 text-sm text-[#fff8eb] placeholder-[#d4b898]/60 focus:border-[#f7df94] focus:outline-none"
                />
                {nameError && <p className="mt-1.5 text-xs font-bold text-[#ffb4b4]">{nameError}</p>}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedTeam('ponnu')}
                  className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition cursor-pointer ${
                    selectedTeam === 'ponnu'
                      ? 'border-[#f7df94] bg-[#631226] text-[#fff8eb] shadow'
                      : 'border-[#c9932d]/40 bg-[#140308] text-[#e7d4b5]/80'
                  }`}
                >
                  {lang === 'ta' ? 'பொண்ணு அணி (திரிஷா)' : 'Team Ponnu (Bride)'}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTeam('mappillai')}
                  className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition cursor-pointer ${
                    selectedTeam === 'mappillai'
                      ? 'border-[#f7df94] bg-[#1e3a8a] text-[#fff8eb] shadow'
                      : 'border-[#c9932d]/40 bg-[#140308] text-[#e7d4b5]/80'
                  }`}
                >
                  {lang === 'ta' ? 'மாப்பிள்ளை அணி (சிவா)' : 'Team Mappillai (Groom)'}
                </button>
              </div>

              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f7df94] via-[#c9932d] to-[#b3822a] px-4 py-3 text-sm font-bold text-[#24050d] shadow-lg transition hover:brightness-105 cursor-pointer"
              >
                <span>{lang === 'ta' ? 'அரச சாவிக்குத் தொடரவும்' : 'Continue to the Royal Key'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <div
              className={`flex flex-col items-center justify-center transition-all duration-500 ${
                doorsOpen ? 'pointer-events-none scale-90 opacity-0' : 'opacity-100'
              }`}
            >
              {/* Pure Key Image & Open Temple Door Wording Only — Zero Borders or Background */}
              <button
                type="button"
                onClick={handleUnlockDoor}
                disabled={doorsOpen}
                aria-label={lang === 'ta' ? 'சாவியால் கோயில் கதவைத் திறக்கவும்' : 'Use Key Open Temple Door'}
                className="flex flex-col items-center justify-center border-0 bg-transparent p-0 text-center shadow-none transition-transform hover:scale-105 focus:outline-none cursor-pointer"
              >
                <img
                  src={HERITAGE_ASSETS.royalKey}
                  alt=""
                  className="h-28 w-28 object-contain drop-shadow-[0_6px_22px_rgba(0,0,0,0.85)] sm:h-36 sm:w-36"
                />
                <span className="mt-1 inline-block rounded-full border border-[#e8c670]/85 bg-gradient-to-b from-[#5c1026] to-[#350714] px-5 py-1.5 font-display text-xs font-bold tracking-wide text-[#fff8eb] shadow-md sm:text-sm">
                  {lang === 'ta' ? 'அழைப்பிதழைத் திறந்திடுக' : 'Open Temple Door'}
                </span>
                <span className="mt-1 text-[11px] font-medium text-[#fff8eb] drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] sm:text-xs">
                  {lang === 'ta' ? 'அழைப்பிதழைத் திறக்கவும்' : 'Use Key · Open Temple Door'}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Bottom Skip Bar (only on form step) */}
        {portalStep === 'form' && (
          <div className="flex justify-center pb-1">
            <button
              type="button"
              onClick={handleQuickSkip}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#c9932d]/60 bg-[#1a040a]/85 px-4 py-2 text-xs font-semibold text-[#f7df94] shadow-lg transition hover:border-[#f7df94] cursor-pointer"
            >
              <span>
                {lang === 'ta'
                  ? 'அனிமேஷனைத் தவிர்த்து நேரடியாக தளத்திற்குச் செல்'
                  : 'Skip Animation & Enter Website'}
              </span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
