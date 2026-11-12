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
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [showGarlandVideo, setShowGarlandVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleUnlock = (e: FormEvent) => {
    e.preventDefault();
    if (doorsOpen) return;
    const cleaned = nameInput.trim() || 'Esteemed Guest';
    onUpdateGuest(cleaned, selectedTeam);
    soundFx.playTempleBell();
    setDoorsOpen(true);

    // Realistic heavy carved temple door swing (~2.4s) + sanctum reveal pause before garland video
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
    onEnter();
  };

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
              : `${WEDDING_CONFIG.bride} & ${WEDDING_CONFIG.groomShort} · Cordially Welcoming ${nameInput.trim() || guestName}`}
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
              <span>{lang === 'ta' ? 'முழு 3D தளத்திற்குச் செல் →' : 'Continue to Celebration →'}</span>
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
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#1b060d] px-3 py-4 text-[#fdf6e7] sm:items-center sm:px-4 sm:py-6"
      style={{
        backgroundImage: `linear-gradient(rgba(28, 7, 10, 0.56), rgba(18, 4, 8, 0.74)), url('${HERITAGE_ASSETS.templeDoorBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="my-auto relative w-full max-w-4xl overflow-hidden rounded-2xl border-2 border-[#c9932d]/80 bg-[#24050d]/80 shadow-2xl">
        {/* Top Sacred Gopuram Header */}
        <div className="border-b border-[#c9932d]/40 px-4 pt-5 pb-3.5 text-center sm:px-6 sm:pt-6 sm:pb-4">
          <p className="text-[10px] font-semibold tracking-[0.16em] text-[#f7df94] uppercase sm:text-xs sm:tracking-[0.18em]">
            {lang === 'ta' ? WEDDING_CONFIG.deitiesTa : WEDDING_CONFIG.deities}
          </p>
          <p className="mt-1 text-[11px] font-bold tracking-[0.18em] text-[#f5deb3]/90 uppercase sm:mt-1.5 sm:text-xs sm:tracking-[0.22em]">
            {lang === 'ta' ? WEDDING_CONFIG.familyFunctionTa : WEDDING_CONFIG.familyFunction}
          </p>
          <h1 className="mt-1.5 font-display text-2xl leading-tight font-bold text-[#fff8eb] sm:mt-2 sm:text-5xl">
            {lang === 'ta'
              ? `${WEDDING_CONFIG.brideTa} & ${WEDDING_CONFIG.groomTa}`
              : `${WEDDING_CONFIG.bride} & ${WEDDING_CONFIG.groomShort}`}
          </h1>
          <p className="mt-1.5 text-[11px] text-[#f7df94] sm:mt-2 sm:text-sm">
            {lang === 'ta'
              ? `${WEDDING_CONFIG.dateDisplayTa} · முகூர்த்தம்: ${WEDDING_CONFIG.muhurthamTimeTa} · ${WEDDING_CONFIG.venueShort}`
              : `${WEDDING_CONFIG.dateDisplayEn} · Muhurtham: ${WEDDING_CONFIG.muhurthamTimeEn} · ${WEDDING_CONFIG.venueShort}`}
          </p>
        </div>

        {/* 3D Perspective Golden Temple Doors Stage */}
        <div
          className="relative mx-auto my-3 flex min-h-[370px] max-w-3xl items-center justify-center px-3 py-4 sm:my-5 sm:min-h-[430px] sm:px-6"
          style={{ perspective: '1400px' }}
        >
          {/* Revealed Sanctum Behind Doors */}
          <div
            className="absolute inset-x-3 inset-y-0 flex flex-col items-center justify-center rounded-xl border border-[#c9932d]/70 p-5 text-center sm:inset-x-6 sm:p-6"
            style={{
              backgroundImage: `linear-gradient(rgba(40, 8, 16, 0.35), rgba(40, 8, 16, 0.58)), url('${HERITAGE_ASSETS.heroTempleDay}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <p className="font-display text-xl font-bold text-[#fff8eb] drop-shadow sm:text-3xl">
              {lang === 'ta' ? 'மங்களம் பொங்க வருக!' : 'Opening Sacred Temple Doors...'}
            </p>
            <p className="mt-1.5 text-xs text-[#f7df94] sm:text-sm">
              {lang === 'ta'
                ? 'திருமூர்த்தி குடும்ப விழாவிற்குத் தாங்களை அன்புடன் வரவேற்கிறோம்...'
                : 'Entering the Madurai Garland Ceremony & Celebration...'}
            </p>
          </div>

          {/* Left Golden Carved Temple Door — Realistic slow swing */}
          <div
            className="absolute top-0 bottom-0 left-3 w-[calc(50%-0.75rem)] rounded-l-xl border-2 border-r border-[#f7df94]/75 shadow-inner transition-transform duration-[2400ms] ease-[cubic-bezier(0.22,0.85,0.36,1)] sm:left-6 sm:w-[calc(50%-1.5rem)]"
            style={{
              backgroundImage: `linear-gradient(rgba(30, 14, 2, 0.06), rgba(30, 14, 2, 0.14)), url('${HERITAGE_ASSETS.templeDoorBg}')`,
              backgroundSize: '200% 100%',
              backgroundPosition: 'left center',
              transformOrigin: 'left center',
              transform: doorsOpen ? 'rotateY(-108deg)' : 'rotateY(0deg)',
            }}
          />

          {/* Right Golden Carved Temple Door — Realistic slow swing */}
          <div
            className="absolute top-0 right-3 bottom-0 w-[calc(50%-0.75rem)] rounded-r-xl border-2 border-l border-[#f7df94]/75 shadow-inner transition-transform duration-[2400ms] ease-[cubic-bezier(0.22,0.85,0.36,1)] sm:right-6 sm:w-[calc(50%-1.5rem)]"
            style={{
              backgroundImage: `linear-gradient(rgba(30, 14, 2, 0.06), rgba(30, 14, 2, 0.14)), url('${HERITAGE_ASSETS.templeDoorBg}')`,
              backgroundSize: '200% 100%',
              backgroundPosition: 'right center',
              transformOrigin: 'right center',
              transform: doorsOpen ? 'rotateY(108deg)' : 'rotateY(0deg)',
            }}
          />

          {/* Center Royal Key + Personalization Form (smooth fade out on unlock so doors visibly open) */}
          <form
            onSubmit={handleUnlock}
            className={`relative z-10 mx-auto w-[92%] max-w-xs transition-all duration-500 sm:w-full sm:max-w-md ${
              doorsOpen ? 'pointer-events-none scale-95 opacity-0' : 'opacity-100'
            }`}
          >
            <div className="w-full rounded-xl border border-[#f7df94]/80 bg-[#24050d]/85 p-3.5 shadow-2xl sm:p-5">
              <label
                htmlFor="portalGuestNameInput"
                className="block text-[11px] font-bold tracking-wider text-[#f7df94] uppercase sm:text-xs"
              >
                {lang === 'ta'
                  ? 'உங்கள் பெயர் (அழைப்பிதழ் & QR-க்காக)'
                  : 'Your Name (For Personalised Invite & QR)'}
              </label>
              <input
                id="portalGuestNameInput"
                type="text"
                maxLength={50}
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder={lang === 'ta' ? 'உங்கள் பெயரை உள்ளிடவும்' : 'Enter your name (e.g. Sundar & Family)'}
                className="mt-1.5 w-full rounded-lg border border-[#c9932d]/60 bg-[#140308] px-3.5 py-2 text-sm text-[#fff8eb] placeholder-[#d4b898]/60 focus:border-[#f7df94] focus:outline-none"
              />

              <div className="mt-2.5 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTeam('ponnu')}
                  className={`rounded-lg border px-2 py-2 text-[11px] font-bold leading-tight transition cursor-pointer sm:px-3 sm:text-xs ${
                    selectedTeam === 'ponnu'
                      ? 'border-[#f7df94] bg-[#631226] text-[#fff8eb]'
                      : 'border-[#c9932d]/35 bg-[#1b050b] text-[#e7d4b5]/80'
                  }`}
                >
                  {lang === 'ta' ? 'பொண்ணு அணி (திரிஷா)' : 'Team Ponnu (Bride)'}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTeam('mappillai')}
                  className={`rounded-lg border px-2 py-2 text-[11px] font-bold leading-tight transition cursor-pointer sm:px-3 sm:text-xs ${
                    selectedTeam === 'mappillai'
                      ? 'border-[#f7df94] bg-[#1e3a8a] text-[#fff8eb]'
                      : 'border-[#c9932d]/35 bg-[#1b050b] text-[#e7d4b5]/80'
                  }`}
                >
                  {lang === 'ta' ? 'மாப்பிள்ளை அணி (சிவா)' : 'Team Mappillai (Groom)'}
                </button>
              </div>

              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#f7df94] via-[#c9932d] to-[#b3822a] px-3.5 py-2.5 text-xs font-bold text-[#24050d] shadow-lg transition hover:brightness-105 cursor-pointer sm:px-4 sm:text-sm"
              >
                <img src={HERITAGE_ASSETS.royalKey} alt="" className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7" />
                <span>
                  {lang === 'ta'
                    ? 'அரச சாவியால் கோயில் கதவைத் திறக்கவும்'
                    : 'Use the Royal Key · Open Doors'}
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Footer Skip */}
        <div className="flex items-center justify-center border-t border-[#c9932d]/30 px-4 py-3 sm:px-6 sm:py-3.5">
          <button
            type="button"
            onClick={handleQuickSkip}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f7df94] underline-offset-4 transition hover:underline cursor-pointer"
          >
            <span>
              {lang === 'ta'
                ? 'அனிமேஷனைத் தவிர்த்து நேரடியாக தளத்திற்குச் செல்'
                : 'Skip Animation & Enter Website'}
            </span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
