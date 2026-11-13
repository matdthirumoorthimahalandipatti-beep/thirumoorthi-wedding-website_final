import { useEffect, useMemo, useState, type FormEvent } from 'react';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Eye,
  FileText,
  Heart,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  QrCode,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import patrikaGoldBg from '../assets/images/patrika_gold_background_1794511442411.jpg';
import {
  AGE_GROUP_ORDER,
  getRoyalTitle,
  HERITAGE_ASSETS,
  WEDDING_CONFIG,
  type AgeGroupKey,
  type AlbumPhoto,
  type BlessingEntry,
  type DirectoryPerson,
  type FamilyMemberPhotoCard,
  type Lang,
  type OracleFortune,
  type TeamSide,
} from '../data/weddingData';
import type { CouplePhotosState } from './AdminPortalModal';
import { soundFx } from '../utils/soundFx';
import {
  downloadOriginalPatrikaImage,
  downloadPersonalizedInvitationPdf,
  downloadPersonalizedInvitationPng,
  generateVenueMapQrDataUrl,
  generateWebsiteQrDataUrl,
  shareInvitationToInstagram,
  shareInvitationToWhatsApp,
} from '../utils/downloadInvitation';
import ContinuitySection3D from './ContinuitySection3D';

interface HeritageUpperProps {
  lang: Lang;
  guestName: string;
  team: TeamSide;
  totalScore: number;
  selectedFortune: OracleFortune;
  couplePhotos: CouplePhotosState;
  familyMembers: FamilyMemberPhotoCard[];
  onChangeGuestName: (name: string) => void;
  onSelectTeam: (t: TeamSide) => void;
  onOpenAdmin: () => void;
}

export function HeritageUpperSections({
  lang,
  guestName,
  team,
  totalScore,
  selectedFortune,
  couplePhotos,
  familyMembers,
  onChangeGuestName,
  onSelectTeam,
  onOpenAdmin,
}: HeritageUpperProps) {
  const [gpsStatus, setGpsStatus] = useState('');
  const [showPatrikaScan, setShowPatrikaScan] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [shareFeedback, setShareFeedback] = useState('');
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [venueQrDataUrl, setVenueQrDataUrl] = useState<string>('');

  useEffect(() => {
    let active = true;
    void generateWebsiteQrDataUrl(220)
      .then((url) => {
        if (active) setQrDataUrl(url);
      })
      .catch(() => undefined);

    void generateVenueMapQrDataUrl(220)
      .then((url) => {
        if (active) setVenueQrDataUrl(url);
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, []);

  const handleGpsDirections = () => {
    soundFx.playChime();
    if (!navigator.geolocation) {
      window.open(WEDDING_CONFIG.mapsUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setGpsStatus(lang === 'ta' ? 'உங்கள் இருப்பிடம் பெறப்படுகிறது...' : 'Locating your starting point...');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const origin = `${pos.coords.latitude},${pos.coords.longitude}`;
        const dest = encodeURIComponent(
          'MATD Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti, Madurai'
        );
        setGpsStatus('');
        window.open(
          `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=driving`,
          '_blank',
          'noopener,noreferrer'
        );
      },
      () => {
        setGpsStatus(
          lang === 'ta'
            ? 'Google Maps வழிகாட்டி திறக்கப்பட்டது.'
            : 'Opening Google Maps venue directions.'
        );
        window.open(WEDDING_CONFIG.mapsUrl, '_blank', 'noopener,noreferrer');
      },
      { timeout: 6000 }
    );
  };

  const exportParams = {
    lang,
    guestName,
    team,
    totalScore,
    selectedFortune,
  };

  const handleDownloadPdf = async () => {
    if (isExporting) return;
    setIsExporting(true);
    setShareFeedback('');
    soundFx.playTempleBell();
    try {
      await downloadPersonalizedInvitationPdf(exportParams);
      setShareFeedback(
        lang === 'ta'
          ? 'உங்கள் பெயருடன் PDF அழைப்பிதழ் பதிவிறக்கப்பட்டது!'
          : 'Personalized PDF invitation downloaded!'
      );
    } finally {
      setIsExporting(false);
    }
  };

  const handleDownloadPng = async () => {
    if (isExporting) return;
    setIsExporting(true);
    setShareFeedback('');
    soundFx.playTempleBell();
    try {
      await downloadPersonalizedInvitationPng(exportParams);
      setShareFeedback(
        lang === 'ta'
          ? 'HD அழைப்பிதழ் படம் (PNG) பதிவிறக்கப்பட்டது!'
          : 'HD PNG invitation downloaded!'
      );
    } finally {
      setIsExporting(false);
    }
  };

  const handleInstagramShare = async () => {
    if (isExporting) return;
    setIsExporting(true);
    setShareFeedback('');
    soundFx.playChime();
    try {
      const outcome = await shareInvitationToInstagram(exportParams);
      setShareFeedback(
        outcome === 'shared'
          ? lang === 'ta'
            ? 'Instagram-இல் பகிரத் தயாராக உள்ளது!'
            : 'Opened share sheet for Instagram!'
          : lang === 'ta'
            ? 'படம் பதிவிறக்கப்பட்டது! Instagram Story-இல் பதிவேற்றவும்.'
            : 'Image saved! Upload directly to your Instagram Story.'
      );
    } finally {
      setIsExporting(false);
    }
  };

  const handleWhatsAppShare = async () => {
    if (isExporting) return;
    setIsExporting(true);
    setShareFeedback('');
    soundFx.playChime();
    try {
      await shareInvitationToWhatsApp(exportParams);
      setShareFeedback(
        lang === 'ta'
          ? 'WhatsApp-இல் பகிரத் திறக்கப்பட்டது!'
          : 'Shared with QR & website link for WhatsApp!'
      );
    } finally {
      setIsExporting(false);
    }
  };

  const eventsList = [
    {
      titleEn: 'Nichayathartham (Engagement)',
      titleTa: 'நிச்சயதார்த்தம்',
      timeEn: WEDDING_CONFIG.nichayatharthamEn,
      timeTa: WEDDING_CONFIG.nichayatharthamTa,
      descEn: 'The engagement ceremony with family blessings and traditional rituals.',
      descTa: 'குடும்பத்தினர் மற்றும் பெரியோர்களின் ஆசிகளுடன் நடைபெறும் பாரம்பரிய நிச்சயதார்த்த விழா.',
      dressEn: 'Traditional Silk Pattu / Formal Sherwani',
      dressTa: 'பாரம்பரிய பட்டுப் புடவை / வேஷ்டி அல்லது ஷெர்வானி',
      locationEn: WEDDING_CONFIG.venueFullEn,
      locationTa: WEDDING_CONFIG.venueFullTa,
    },
    {
      titleEn: 'Ganapathi Homam & Vratham',
      titleTa: 'கணபதி ஹோமம் மற்றும் விரதம்',
      timeEn: 'Sunday, 22 Nov 2026 · 5:00 AM',
      timeTa: 'ஞாயிறு, 22 நவம்பர் 2026 · காலை 5:00',
      descEn: 'Sacred dawn fire rituals for prosperity, guided by family traditions.',
      descTa: 'குடும்ப மரபுகளின்படி செழிப்பும் நலமும் வேண்டி நடைபெறும் புனித ஹோமம்.',
      dressEn: 'Traditional South Indian Attire',
      dressTa: 'பாரம்பரிய தென்னிந்திய உடை',
      locationEn: WEDDING_CONFIG.venueFullEn,
      locationTa: WEDDING_CONFIG.venueFullTa,
    },
    {
      titleEn: 'Sacred Muhurtham (Thirumangalyam)',
      titleTa: 'திருமாங்கல்ய தாரணம் — சுப முகூர்த்தம்',
      timeEn: `${WEDDING_CONFIG.dateDisplayEn} · ${WEDDING_CONFIG.muhurthamTimeEn}`,
      timeTa: `${WEDDING_CONFIG.dateDisplayTa} · ${WEDDING_CONFIG.muhurthamTimeTa}`,
      descEn: 'The sacred Thirumangalyam ceremony with traditional Nadaswaram music and flower blessings.',
      descTa: 'பாரம்பரிய நாதஸ்வர இசை மற்றும் மலர் ஆசிகளுடன் நடைபெறும் திருமாங்கல்ய தாரணம்.',
      dressEn: 'Madurai Sungudi / Kanchipuram Silk & Veshti',
      dressTa: 'மதுரை சுங்குடி / காஞ்சிபுரம் பட்டுப் புடவை மற்றும் வேஷ்டி',
      locationEn: 'Main Kalyana Mandapam Stage, Madurai',
      locationTa: 'முக்கிய திருமண மேடை, மதுரை',
    },
    {
      titleEn: 'Traditional Madurai Kalyana Virundhu',
      titleTa: 'பாரம்பரிய மதுரை கல்யாண விருந்து',
      timeEn: `Sunday, 22 Nov 2026 · ${WEDDING_CONFIG.feastTimeEn}`,
      timeTa: `ஞாயிறு, 22 நவம்பர் 2026 · ${WEDDING_CONFIG.feastTimeTa}`,
      descEn: 'Traditional wedding feast served on fresh banana leaves, with Madurai Jigarthanda & sweets.',
      descTa: 'வாழை இலையில் பரிமாறப்படும் பாரம்பரிய திருமண விருந்து மற்றும் மதுரை சிறப்பு உணவுகள்.',
      dressEn: 'Festive Attire',
      dressTa: 'விழாக்கால உடை',
      locationEn: 'Dining Hall, MATD Thirumoorthi Mahal',
      locationTa: 'உணவுக் கூடம், MATD திருமூர்த்தி மஹால், மதுரை',
    },
  ];

  const effectiveGuest =
    guestName.trim() && guestName.trim() !== 'Esteemed Guest'
      ? guestName.trim()
      : lang === 'ta'
        ? 'அன்புள்ள விருந்தினர்கள்'
        : 'Respected Guests & Family';

  const brideFamilyMembers = familyMembers.filter((m) => m.side === 'bride');
  const groomFamilyMembers = familyMembers.filter((m) => m.side === 'groom');
  const royalTitle = getRoyalTitle(totalScore, lang);

  return (
    <>
      {/* ====================================================================
          1. THE BRIDE & THE GROOM (#couple)
         ==================================================================== */}
      <ContinuitySection3D
        id="couple"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 246, 230, 0.72), rgba(255, 246, 230, 0.80)), url('${HERITAGE_ASSETS.coupleSectionBg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.22em] text-[#631226] uppercase">
              ❖ {lang === 'ta' ? 'இரு மனம் இணையும் திருநாள் · Divine Union' : 'Divine Union · Thirukalyanam'} ❖
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#3a0815] sm:text-5xl">
              {lang === 'ta' ? 'மணமகள் & மணமகன்' : 'The Bride & The Groom'}
            </h2>
            <p className="mt-2 text-sm italic text-[#6e463a] sm:text-base">
              {lang === 'ta'
                ? '“மதுரை திருநகரில் பெரியோர்கள் மற்றும் குலதெய்வங்களின் ஆசியுடன் இணையும் இரு உள்ளங்கள்.”'
                : '“Two souls united with the sacred blessings of elders and deities in the temple town of Madurai.”'}
            </p>
            <div aria-hidden="true" className="mt-3 text-lg text-[#c9932d]">
              ❧ ❖ ❧
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Bride Card with Description Box Under Image */}
            <article className="overflow-hidden rounded-3xl border-2 border-[#c9932d]/80 bg-[#fffaf0]/95 shadow-2xl">
              <div className="aspect-[4/4.2] sm:aspect-[3/4] w-full overflow-hidden bg-[#1a040b]">
                <img
                  src={couplePhotos.bridePhoto}
                  alt={lang === 'ta' ? 'மணமகள் M. திரிஷா' : 'M. Thirisha, the bride'}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = HERITAGE_ASSETS.coupleTemple;
                  }}
                  className="h-full w-full object-cover object-top"
                  style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
              <div className="border-t-2 border-[#c9932d]/50 bg-[#fff8eb] p-6 text-center">
                <p className="text-xs font-bold tracking-[0.18em] text-[#631226] uppercase">
                  {lang === 'ta' ? 'மணமகள் · The Bride' : 'The Bride · மணமகள்'}
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold text-[#3a0815]">
                  {lang === 'ta' ? WEDDING_CONFIG.brideTa : WEDDING_CONFIG.bride}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#8c6418]">
                  {lang === 'ta' ? WEDDING_CONFIG.brideQualificationTa : WEDDING_CONFIG.brideQualification}
                </p>
                <p className="mt-3 rounded-xl border border-[#c9932d]/30 bg-white/95 p-4 text-sm leading-relaxed text-[#3b1d16] shadow-sm">
                  {lang === 'ta'
                    ? 'A. மூர்த்தி மற்றும் M. அலமேலு ஆகிய திருமூர்த்தி குழும நிறுவனர்களின் அன்பு மகள். ஆங்கில இலக்கியத்தில் முதுகலைப் பட்டம் பெற்றவர்.'
                    : 'Daughter of A. Moorthi and M. Alamelu, founders of Thirumoorthi Groups. Graduate with M.A. in English Literature.'}
                </p>
              </div>
            </article>

            {/* Groom Card with Description Box Under Image — Fills Completely Without Empty Space */}
            <article className="overflow-hidden rounded-3xl border-2 border-[#c9932d]/80 bg-[#fffaf0]/95 shadow-2xl">
              <div className="aspect-[4/4.2] sm:aspect-[3/4] w-full overflow-hidden bg-[#1a040b]">
                <img
                  src={couplePhotos.groomPhoto}
                  alt={lang === 'ta' ? 'மணமகன் S. சிவசங்கர்' : 'Siva Shankar, the groom'}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = HERITAGE_ASSETS.coupleTemple;
                  }}
                  className="h-full w-full object-cover object-top"
                  style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
              <div className="border-t-2 border-[#c9932d]/50 bg-[#fff8eb] p-6 text-center">
                <p className="text-xs font-bold tracking-[0.18em] text-[#631226] uppercase">
                  {lang === 'ta' ? 'மணமகன் · The Groom' : 'The Groom · மணமகன்'}
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold text-[#3a0815]">
                  {lang === 'ta' ? WEDDING_CONFIG.groomTa : WEDDING_CONFIG.groomShort}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#8c6418]">
                  {lang === 'ta' ? WEDDING_CONFIG.groomQualificationTa : WEDDING_CONFIG.groomQualification}
                </p>
                <p className="mt-3 rounded-xl border border-[#c9932d]/30 bg-white/95 p-4 text-sm leading-relaxed text-[#3b1d16] shadow-sm">
                  {lang === 'ta'
                    ? 'S. சுரேஷ் மற்றும் வள்ளி (வெங்கடேஷ் மளிகைக் கடை) அவர்களின் அன்பு மகன். பொறியியல் பட்டதாரி மற்றும் தமிழ்நாடு தீயணைப்புத்துறையில் பணியாற்றுகிறார்.'
                    : 'Son of S. Suresh and Valli, owners of Venkatesh Grocery Shop. B.E. Graduate serving in Tamil Nadu Fire and Rescue Services.'}
                </p>
              </div>
            </article>
          </div>
        </div>
      </ContinuitySection3D>

      {/* ====================================================================
          2. VENUE & ROUTE PLANNER (#venue)
         ==================================================================== */}
      <ContinuitySection3D
        id="venue"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 243, 225, 0.72), rgba(255, 243, 225, 0.84)), url('${HERITAGE_ASSETS.heroTempleDay}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.22em] text-[#631226] uppercase">
              ❖ {lang === 'ta' ? 'திருமண மண்டபம் · பயண வழிகாட்டி' : 'Travel & Venue Directions'} ❖
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#3a0815] sm:text-5xl">
              {lang === 'ta' ? 'மண்டபம் & வழித்தடம்' : 'Venue & Route Planner'}
            </h2>
            <p className="mt-2 text-sm italic text-[#6e463a] sm:text-base">
              {lang === 'ta'
                ? 'உங்கள் தற்போதைய இருப்பிடத்திலிருந்து மண்டபத்திற்கான நேரடி வழியை உடனே பெறலாம்.'
                : 'Tap below to get instant driving, bus, or train directions straight to the Madurai mandapam.'}
            </p>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-12">
            <div className="card-3d-tilt flex flex-col justify-between rounded-3xl border border-[#c9932d]/60 bg-[#fff8eb]/95 p-6 shadow-xl sm:p-8 lg:col-span-7">
              <div>
                <div className="border-b border-[#c9932d]/30 pb-5 text-center sm:text-left">
                  <span className="text-3xl" aria-hidden="true">
                    🏛️
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#3a0815] sm:text-3xl">
                    {lang === 'ta' ? WEDDING_CONFIG.venueFullTa : WEDDING_CONFIG.venueFullEn}
                  </h3>
                  <p className="mt-1 text-sm text-[#6e463a]">
                    {lang === 'ta'
                      ? 'ஆண்டிப்பட்டி பங்களா, டி. வாடிப்பட்டி, மதுரை – 625 221, தமிழ்நாடு'
                      : 'Andipatti Bungalow, T. Vadipatti, Madurai – 625 221, Tamil Nadu'}
                  </p>
                </div>

                <div className="mt-5 grid gap-3 text-sm text-[#3b1d16] sm:grid-cols-2">
                  <div className="rounded-xl border border-[#c9932d]/30 bg-white/90 p-3.5">
                    <span className="block text-xs font-bold text-[#631226] uppercase">
                      {lang === 'ta' ? 'நிச்சயதார்த்தம்' : 'Nichayathartham'}
                    </span>
                    <span className="mt-0.5 block font-semibold">
                      {lang === 'ta' ? WEDDING_CONFIG.nichayatharthamTa : WEDDING_CONFIG.nichayatharthamEn}
                    </span>
                  </div>
                  <div className="rounded-xl border border-[#c9932d]/30 bg-white/90 p-3.5">
                    <span className="block text-xs font-bold text-[#631226] uppercase">
                      {lang === 'ta' ? 'சுப முகூர்த்தம்' : 'Muhurtham Timings'}
                    </span>
                    <span className="mt-0.5 block font-semibold">
                      {lang === 'ta'
                        ? `${WEDDING_CONFIG.dateDisplayTa} · ${WEDDING_CONFIG.muhurthamTimeTa}`
                        : `${WEDDING_CONFIG.dateDisplayEn} · ${WEDDING_CONFIG.muhurthamTimeEn}`}
                    </span>
                  </div>
                </div>

                {/* Bus Route Details Card */}
                <div className="mt-3 rounded-xl border border-[#c9932d]/45 bg-[#fff5db] p-4 text-sm text-[#3b1d16]">
                  <p className="text-xs font-bold tracking-wider text-[#631226] uppercase">
                    🚌 {lang === 'ta' ? 'பேருந்து வழித்தடம் (பஸ் ரூட்)' : 'Bus Routes to Venue'}
                  </p>
                  <ul className="mt-1.5 space-y-1 text-xs font-semibold sm:text-sm">
                    {(lang === 'ta' ? WEDDING_CONFIG.busRoutesTa : WEDDING_CONFIG.busRoutesEn).map((route) => (
                      <li key={route}>• {route}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 space-y-2.5">
                <button
                  type="button"
                  onClick={handleGpsDirections}
                  className="flex w-full items-center justify-between rounded-xl border border-[#f7df94] bg-gradient-to-r from-[#a62040] to-[#631226] px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:brightness-110 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-[#f7df94]" />
                    <span>
                      {lang === 'ta'
                        ? 'என் இருப்பிடத்திலிருந்து நேரடி வழி (GPS)'
                        : 'Get Directions From My Location (GPS)'}
                    </span>
                  </span>
                  <span aria-hidden="true">➔</span>
                </button>

                {gpsStatus && <p className="text-center text-xs font-semibold text-[#631226]">{gpsStatus}</p>}

                <div className="grid gap-2.5 sm:grid-cols-3">
                  <a
                    href={WEDDING_CONFIG.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-[#c9932d] bg-white px-4 py-3 text-xs font-bold text-[#3a0815] transition hover:bg-[#631226] hover:text-white"
                  >
                    <span>🗺 {lang === 'ta' ? 'Google Maps' : 'Open Maps'}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href={WEDDING_CONFIG.busUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-[#c9932d] bg-white px-4 py-3 text-xs font-bold text-[#3a0815] transition hover:bg-[#631226] hover:text-white"
                  >
                    <span>🚌 {lang === 'ta' ? 'பேருந்து வழி' : 'Bus Routes'}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href={WEDDING_CONFIG.trainUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-[#c9932d] bg-white px-4 py-3 text-xs font-bold text-[#3a0815] transition hover:bg-[#631226] hover:text-white"
                  >
                    <span>🚆 {lang === 'ta' ? 'ரயில் (MDU)' : 'Train (MDU)'}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card-3d-tilt overflow-hidden rounded-3xl border-4 border-white bg-[#24050d] shadow-2xl ring-2 ring-[#c9932d] lg:col-span-5">
              <img
                src={HERITAGE_ASSETS.venuePhoto}
                alt={lang === 'ta' ? 'MATD திருமூர்த்தி மஹால்' : 'MATD Thirumoorthi Mahal'}
                className="h-64 w-full object-cover lg:h-full"
              />
            </div>
          </div>
        </div>
      </ContinuitySection3D>

      {/* ====================================================================
          3. OUR BELOVED FAMILIES (#families)
             - Bride Family Photos: A. Moorthi, M. Alamelu, M. Deepak (Minors UAV)
             - Thirumoorthi Groups as its own paragraph
             - Groom Family Photos: ONLY Parents (S. Suresh & Valli), NO photo for Sister's family!
             - NO Groom row inside Families
         ==================================================================== */}
      <ContinuitySection3D
        id="families"
        className="relative py-16 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 248, 235, 0.72), rgba(255, 248, 235, 0.84)), url('${HERITAGE_ASSETS.eventsBg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.22em] text-[#631226] uppercase">
              ❖ {lang === 'ta' ? 'பெற்றோர்கள் மற்றும் குடும்பத்தினர்' : 'Parents & Immediate Households'} ❖
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#3a0815] sm:text-5xl">
              {lang === 'ta' ? 'எங்கள் அன்பான குடும்பங்கள்' : 'Our Beloved Families'}
            </h2>
            <p className="mt-2 text-sm italic text-[#6e463a] sm:text-base">
              {lang === 'ta'
                ? 'மணமகள்: தந்தை, தாய் மற்றும் சகோதரர் · மணமகன்: தந்தை, தாய் மற்றும் சகோதரியின் குடும்பம்.'
                : "Bride: Father, Mother & Brother · Groom: Father, Mother & Sister's Family."}
            </p>
            <button
              type="button"
              onClick={onOpenAdmin}
              className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#c9932d] bg-[#fffaf0] px-4 py-1.5 text-xs font-bold text-[#631226] shadow-sm transition hover:bg-[#f7df94]/40 cursor-pointer"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-[#8c6418]" />
              <span>{lang === 'ta' ? 'நிர்வாகம்: புகைப்படங்களைப் புதுப்பிக்க' : 'Admin: Update Photos'}</span>
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Bride's Family Card with Photos */}
            <div
              className="card-3d-tilt overflow-hidden rounded-3xl border-2 border-[#c9932d]/70 bg-[#fffaf0]/95 p-6 shadow-xl sm:p-8"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 250, 240, 0.90), rgba(255, 250, 240, 0.94)), url('${HERITAGE_ASSETS.familyInvitationBorder}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-[#3a0815]">
                <span aria-hidden="true">🌸</span>
                <span>{lang === 'ta' ? 'மணமகள் குடும்பம்' : "The Bride's Family"}</span>
              </h3>
              <p className="mt-1 text-xs font-semibold text-[#6e463a]">
                {lang === 'ta'
                  ? 'திருமூர்த்தி குழுமம் · ஆண்டிப்பட்டி பங்களா, மதுரை'
                  : 'Thirumoorthi Groups · Andipatti Bungalow, Madurai'}
              </p>

              {/* Family Member Portrait Photo Cards */}
              <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                {brideFamilyMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col items-center rounded-2xl border border-[#c9932d]/45 bg-white/95 p-3.5 text-center shadow-sm"
                  >
                    <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-[#c9932d] bg-[#fdf1d4] shadow-md">
                      <img
                        src={member.photo}
                        alt={lang === 'ta' ? member.nameTa : member.nameEn}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = HERITAGE_ASSETS.portraitPlaceholder;
                        }}
                        className="h-full w-full object-cover object-center"
                        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <p className="mt-2.5 text-[11px] font-bold tracking-wide text-[#8c6418] uppercase">
                      {lang === 'ta' ? member.roleTa : member.roleEn}
                    </p>
                    <h4 className="mt-0.5 font-display text-sm font-bold text-[#3a0815]">
                      {lang === 'ta' ? member.nameTa : member.nameEn}
                    </h4>
                    <p className="mt-1 text-xs leading-snug text-[#6e463a]">
                      {lang === 'ta' ? member.detailTa : member.detailEn}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-2.5 text-sm text-[#3b1d16]">
                <div className="rounded-xl border border-[#c9932d]/30 bg-white/95 p-3.5">
                  <strong className="text-[#631226]">{lang === 'ta' ? 'பெற்றோர்:' : 'Parents:'}</strong>{' '}
                  {lang === 'ta'
                    ? 'A. மூர்த்தி (நிறுவனர் & தலைவர்) · M. அலமேலு (நிறுவனர் & CEO)'
                    : 'A. Moorthi (Founder & Chairperson) · M. Alamelu (Founder & CEO)'}
                </div>
                <div className="rounded-xl border border-[#c9932d]/30 bg-white/95 p-3.5">
                  <strong className="text-[#631226]">{lang === 'ta' ? 'சகோதரர்:' : 'Brother:'}</strong>{' '}
                  {lang === 'ta' ? WEDDING_CONFIG.brideBrotherTa : WEDDING_CONFIG.brideBrotherEn}
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-[#c9932d]/35 bg-[#fff6e3] p-4 text-sm leading-relaxed text-[#3b1d16]">
                <p className="font-bold text-[#631226]">
                  {lang === 'ta' ? 'திருமூர்த்தி குழுமம்' : 'Thirumoorthi Groups'}
                </p>
                <p className="mt-1">
                  {lang === 'ta' ? WEDDING_CONFIG.brideBusinessesTa : WEDDING_CONFIG.brideBusinessesEn}
                </p>
              </div>
            </div>

            {/* Groom's Family Card — Photos ONLY for Parents, Text ONLY for Sister's Family */}
            <div
              className="card-3d-tilt overflow-hidden rounded-3xl border-2 border-[#c9932d]/70 bg-[#fffaf0]/95 p-6 shadow-xl sm:p-8"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 250, 240, 0.90), rgba(255, 250, 240, 0.94)), url('${HERITAGE_ASSETS.ornateFamilyBorder}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-[#3a0815]">
                <span aria-hidden="true">⚜️</span>
                <span>{lang === 'ta' ? 'மணமகன் குடும்பம்' : "The Groom's Family"}</span>
              </h3>
              <p className="mt-1 text-xs font-semibold text-[#6e463a]">
                {lang === 'ta'
                  ? 'வெங்கடேஷ் மளிகைக் கடை · யாதவர் பொதிகுளம்'
                  : 'Venkatesh Grocery Shop · Yadavar Pothikulam'}
              </p>

              {/* Photos ONLY for Groom's Parents */}
              <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {groomFamilyMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col items-center rounded-2xl border border-[#c9932d]/45 bg-white/95 p-3.5 text-center shadow-sm"
                  >
                    <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-[#c9932d] bg-[#fdf1d4] shadow-md">
                      <img
                        src={member.photo}
                        alt={lang === 'ta' ? member.nameTa : member.nameEn}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = HERITAGE_ASSETS.portraitPlaceholder;
                        }}
                        className="h-full w-full object-cover object-center"
                        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <p className="mt-2.5 text-[11px] font-bold tracking-wide text-[#8c6418] uppercase">
                      {lang === 'ta' ? member.roleTa : member.roleEn}
                    </p>
                    <h4 className="mt-0.5 font-display text-sm font-bold text-[#3a0815]">
                      {lang === 'ta' ? member.nameTa : member.nameEn}
                    </h4>
                    <p className="mt-1 text-xs leading-snug text-[#6e463a]">
                      {lang === 'ta' ? member.detailTa : member.detailEn}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-2.5 text-sm text-[#3b1d16]">
                <div className="rounded-xl border border-[#c9932d]/30 bg-white/95 p-3.5">
                  <strong className="text-[#631226]">{lang === 'ta' ? 'பெற்றோர்:' : 'Parents:'}</strong>{' '}
                  {lang === 'ta' ? WEDDING_CONFIG.groomParentsTa : WEDDING_CONFIG.groomParentsEn}
                </div>
                <div className="rounded-xl border border-[#c9932d]/35 bg-[#fff6e3] p-4">
                  <strong className="text-[#631226]">
                    {lang === 'ta' ? 'சகோதரி & மாப்பிள்ளை குடும்பம்:' : "Sister's Family:"}
                  </strong>{' '}
                  {lang === 'ta' ? WEDDING_CONFIG.groomSisterFamilyTa : WEDDING_CONFIG.groomSisterFamilyEn}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContinuitySection3D>

      {/* ====================================================================
          4. COMPLETE TRADITIONAL GOLD WEDDING INVITATION (#full-patrika)
             - AI-Generated Traditional Madurai Temple Gold & Garlands Background
             - Rich Royal Gold & Temple Crimson Styling (No Blue)
         ==================================================================== */}
      <ContinuitySection3D
        id="full-patrika"
        className="relative py-16 sm:py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(48, 12, 18, 0.36), rgba(48, 12, 18, 0.44)), url('${patrikaGoldBg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mx-auto mb-8 max-w-2xl rounded-2xl border border-[#f7df94]/60 bg-[#2b0711]/82 px-6 py-4 text-center shadow-2xl">
            <p className="text-xs font-bold tracking-[0.22em] text-[#f7df94] uppercase">
              ❖ M.A.T.D. THIRUMOORTHI ILLAM ❖
            </p>
            <h2 className="mt-1.5 font-display text-3xl font-bold text-[#fff8eb] sm:text-5xl">
              {lang === 'ta' ? 'முழுத் திருமண அழைப்பிதழ்' : 'Complete Wedding Invitation'}
            </h2>
            <p className="mt-1.5 text-sm italic text-[#f3d9ad]">
              {lang === 'ta'
                ? 'தங்க நிறப் பாரம்பரிய அச்சுத் திருமண அழைப்பிதழ்.'
                : 'Authentic traditional gold-bordered Tamil wedding patrika.'}
            </p>
          </div>

          <article
            className="patrika-gold-paper overflow-hidden p-5 sm:p-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 249, 232, 0.80), rgba(255, 244, 214, 0.82)), url('${patrikaGoldBg}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {lang === 'ta' ? (
              <div className="font-tamil space-y-5 text-[#3a120a]" lang="ta">
                {/* Top Temple Pillars & Deity Invocations Row */}
                <div className="flex flex-col items-center gap-2 border-b-2 border-[#c9932d]/45 pb-4 text-center sm:flex-row sm:justify-between">
                  <span aria-hidden="true" className="text-3xl text-[#8c5a12]">
                    🛕
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-bold leading-relaxed text-[#6b1024] sm:text-sm">
                      ஸ்ரீ சிங்கார உடையார் துணை. ஸ்ரீ தாயம்மாள் துணை. ஸ்ரீ திண்ணாயிரமூர்த்தி அய்யனார் துணை.
                      <br />
                      ஸ்ரீ வீரமாகாளியம்மன் துணை, ஸ்ரீ வெற்றி விநாயகர் துணை
                    </p>
                    <h3 className="font-display text-2xl font-extrabold tracking-tight text-[#7c1428] sm:text-4xl">
                      M.A.T.D. திருமூர்த்தி இல்ல திருமண அழைப்பிதழ்
                    </h3>
                  </div>
                  <span aria-hidden="true" className="text-3xl text-[#8c5a12]">
                    🪔
                  </span>
                </div>

                {/* Salutation & Auspicious Date */}
                <div className="space-y-2 text-sm leading-relaxed sm:text-base">
                  <p className="font-bold text-[#6b1024]">அன்புடையீர்,</p>
                  <p className="text-center font-semibold text-[#3a120a]">
                    நிகழும் மங்களகரமான பராபவ வருடம் கார்த்திகை மாதம் 6-ஆம் தேதி (22.11.2026) ஞாயிற்றுக்கிழமை
                    திரயோதசி திதியும், அசுபதி நட்சத்திரமும் சித்தயோகமும் கூடிய சுபயோக சுபதினத்தில் அன்று
                    காலை 6.00 மணிக்குமேல் 7.35 மணிக்குள் விருச்சிக லக்கினத்தில்
                  </p>
                </div>

                {/* 2 Side-by-Side Gold-Bordered Lineage Boxes */}
                <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr]">
                  {/* Groom Box */}
                  <div className="flex flex-col justify-between rounded-lg border-2 border-[#c9932d] bg-[#fffaf0]/88 p-4 text-center shadow-sm">
                    <p className="text-xs leading-relaxed text-[#3a120a] sm:text-sm">
                      யாதவர் பொதிகுளம் திரு. பெ. சிங்கனன் யாதவ் – ராஜலெட்சுமி அம்மாள் இவர்களின் மகன்வழிப்
                      பேரனும், யாதவர் பொதிகுளம் தெய்வத்திருவாளர்கள் வெ. முனியசாமி யாதவ் – ஆராயி அம்மாள்
                      இவர்களின் மகள்வழிப் பேரனும், S. சுரேஷ் – வள்ளி இவர்களின் குமாரனுமாகிய திருநிறைச்செல்வன்
                    </p>
                    <div className="mt-3">
                      <p className="font-display text-xl font-extrabold text-[#7c1428] sm:text-2xl">
                        S. சிவசங்கர் <span className="text-base font-bold text-[#8c5a12]">B.E.,</span>
                      </p>
                      <p className="text-xs font-semibold text-[#5c2b12] sm:text-sm">
                        (தமிழ்நாடு தீயணைப்புத்துறை)
                      </p>
                    </div>
                  </div>

                  {/* Center Sacred Gold Lotus Crest */}
                  <div className="flex items-center justify-center py-2 text-center" aria-hidden="true">
                    <div className="rounded-full border-2 border-[#c9932d] bg-[#fff4d6]/90 px-3 py-4 text-2xl shadow">
                      🪷
                    </div>
                  </div>

                  {/* Bride Box */}
                  <div className="flex flex-col justify-between rounded-lg border-2 border-[#c9932d] bg-[#fffaf0]/88 p-4 text-center shadow-sm">
                    <p className="text-xs leading-relaxed text-[#3a120a] sm:text-sm">
                      யாதவர் பொதிகுளம் தெய்வத்திருவாளர்கள் K. அழகர் யாதவ் – சமுந்திரவள்ளி இவர்களின் மகன்வழிப்
                      பேத்தியும், யாதவர் பொதிகுளம் தெய்வத்திருவாளர்கள் A. இராமையா யாதவ் – கிருஷ்ணம்மாள்
                      இவர்களின் மகள்வழிப் பேத்தியும், திரு. A. கோபால் கிருஷ்ண மூர்த்தி – அலமேலு இவர்களின்
                      குமாரத்தியுமான திருநிறைச்செல்வி
                    </p>
                    <div className="mt-3">
                      <p className="font-display text-xl font-extrabold text-[#7c1428] sm:text-2xl">
                        M. திரிஷா <span className="text-base font-bold text-[#8c5a12]">M.A., (English Literature)</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Centered Venue Invitation Line */}
                <p className="px-2 text-center text-sm leading-relaxed font-semibold text-[#3a120a] sm:text-base">
                  இவர்களது திருமணம் பெரியோர்களால் நிச்சயித்தவண்ணம் மேற்படி வைபவம்{' '}
                  <strong className="text-base font-extrabold text-[#7c1428] sm:text-lg">
                    T. வாடிப்பட்டி ஆண்டிப்பட்டி பங்களா M.A.T.D. திருமூர்த்தி மகாலில்
                  </strong>{' '}
                  நடைபெறுவதால் தாங்கள் தங்கள் குடும்பத்துடன் வந்திருந்து மணமக்களை வாழ்த்தி ஆசீர்வதிக்குமாறு
                  அன்புடன் அழைக்கின்றோம்.
                </p>

                {/* 2-Column Bottom Inviters Block (Bride Hosts & Groom Hosts) */}
                <div className="grid items-start gap-6 border-t-2 border-[#c9932d]/45 pt-5 text-center sm:grid-cols-2">
                  {/* Left: Bride Hosts */}
                  <div className="space-y-1 text-xs leading-relaxed sm:text-sm">
                    <p className="font-bold text-[#8c5a12] underline decoration-[#c9932d]/70 underline-offset-4">
                      அவ்வண்ணமே கோரும்
                    </p>
                    <p className="pt-1 font-bold text-[#7c1428]">A. மூர்த்தி – அலமேலு</p>
                    <p className="text-xs text-[#5c2b12]">(M.A.T.D. திருமூர்த்தி மகால்)</p>
                    <p className="font-bold text-[#7c1428]">M. தீபக் B.Tech., (ECE.,)</p>
                    <p className="font-semibold">யாதவர் பொதிகுளம்.</p>
                    <p>(இருப்பு) ஆண்டிப்பட்டி பங்களா, மதுரை – 625 221.</p>
                    <p className="font-bold text-[#6b1024]">செல் : 90424 98664, 96884 43550.</p>
                  </div>

                  {/* Right: Groom Hosts */}
                  <div className="space-y-1 text-xs leading-relaxed sm:text-sm">
                    <p className="font-bold text-[#8c5a12] underline decoration-[#c9932d]/70 underline-offset-4">
                      தங்களன்புள்ள
                    </p>
                    <p className="pt-1 font-bold text-[#7c1428]">S. சுரேஷ் கண்ணா மளிகை – வள்ளி – யா. ஒத்தக்கடை</p>
                    <p className="font-bold text-[#7c1428]">
                      S. சந்திரன் – முருகேஸ்வரி – முதுகுளத்தூர்
                    </p>
                    <p className="text-xs">(சிவரஞ்சனி எலெக்ட்ரிக்கல்ஸ்)</p>
                    <p className="font-bold text-[#7c1428]">
                      S. ஜெயராஜ் B.A., – வள்ளி – நாகமலை புதுக்கோட்டை
                    </p>
                    <p className="text-xs">(Vasanth &amp; Co.,)</p>
                    <p>யாதவர் பொதிகுளம். (இருப்பு) யா. ஒத்தக்கடை</p>
                    <p className="font-bold text-[#6b1024]">செல் : 98650 17438.</p>
                  </div>
                </div>

                {/* Full-Width Bottom Gold-Bordered Engagement Strip */}
                <div className="rounded-lg border-2 border-[#c9932d] bg-[#fff8e4]/92 px-4 py-2.5 text-center text-xs font-semibold text-[#3a120a] sm:text-sm">
                  <strong className="text-[#7c1428]">நிச்சயதார்த்தம் :</strong> 21.11.26. சனிக்கிழமை மாலை 6.30
                  மணிமுதல் நிச்சயதார்த்தம் T. வாடிப்பட்டி. ஆண்டிப்பட்டி பங்களா,{' '}
                  <strong className="text-[#7c1428]">M.A.T.D. திருமூர்த்தி மகாலில்</strong> நடைபெறும்.
                </div>
              </div>
            ) : (
              <div className="space-y-5 text-[#3a120a]" lang="en">
                <div className="flex flex-col items-center gap-2 border-b-2 border-[#c9932d]/45 pb-4 text-center sm:flex-row sm:justify-between">
                  <span aria-hidden="true" className="text-3xl text-[#8c5a12]">
                    🛕
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-bold leading-relaxed text-[#6b1024]">
                      Sri Singara Udaiyar Thunai · Sri Thayammal Thunai · Sri Thinnayiramoorthi Ayyanar Thunai ·
                      Sri Veeramakaliyamman Thunai · Sri Vetri Vinayagar Thunai
                    </p>
                    <h3 className="font-display text-2xl font-extrabold tracking-tight text-[#7c1428] sm:text-4xl">
                      M.A.T.D. Thirumoorthi Illam – Wedding Invitation
                    </h3>
                  </div>
                  <span aria-hidden="true" className="text-3xl text-[#8c5a12]">
                    🪔
                  </span>
                </div>

                <div className="space-y-2 text-sm leading-relaxed sm:text-base">
                  <p className="font-bold text-[#6b1024]">Dear Respected Family and Friends,</p>
                  <p className="text-center font-medium text-[#3a120a]">
                    On the auspicious Sunday, 22 November 2026 (Karthigai 6, Parabhava Year), during the sacred
                    morning Vrischika Lagnam muhurtham between 6:00 AM and 7:35 AM (Thirumangalyam 6:15 – 7:15 AM)
                  </p>
                </div>

                <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr]">
                  <div className="flex flex-col justify-between rounded-lg border-2 border-[#c9932d] bg-[#fffaf0]/88 p-4 text-center shadow-sm">
                    <p className="text-xs leading-relaxed text-[#3a120a] sm:text-sm">
                      Paternal grandson of Mr. P. Singanan Yadav &amp; Rajalakshmi Ammal (Yadavar Pothikulam),
                      maternal grandson of the late V. Muniyasamy Yadav &amp; Aarayee Ammal, and beloved son of
                      S. Suresh &amp; Valli
                    </p>
                    <div className="mt-3">
                      <p className="font-display text-xl font-extrabold text-[#7c1428] sm:text-2xl">
                        S. Siva Shankar <span className="text-base font-bold text-[#8c5a12]">B.E.,</span>
                      </p>
                      <p className="text-xs font-semibold text-[#5c2b12] sm:text-sm">
                        (Tamil Nadu Fire and Rescue Services)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center py-2 text-center" aria-hidden="true">
                    <div className="rounded-full border-2 border-[#c9932d] bg-[#fff4d6]/90 px-3 py-4 text-2xl shadow">
                      🪷
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-lg border-2 border-[#c9932d] bg-[#fffaf0]/88 p-4 text-center shadow-sm">
                    <p className="text-xs leading-relaxed text-[#3a120a] sm:text-sm">
                      Paternal granddaughter of the late K. Azhagar Yadav &amp; Samundhiravalli (Yadavar Pothikulam),
                      maternal granddaughter of the late A. Ramaiya Yadav &amp; Krishnammal, and beloved daughter
                      of Mr. A. Gopal Krishna Moorthy &amp; Alamelu
                    </p>
                    <div className="mt-3">
                      <p className="font-display text-xl font-extrabold text-[#7c1428] sm:text-2xl">
                        M. Thirisha <span className="text-base font-bold text-[#8c5a12]">M.A., (English Literature)</span>
                      </p>
                    </div>
                  </div>
                </div>

                <p className="px-2 text-center text-sm leading-relaxed font-semibold text-[#3a120a] sm:text-base">
                  We warmly invite you and your family to bless the couple as the sacred ceremony takes place at{' '}
                  <strong className="text-base font-extrabold text-[#7c1428] sm:text-lg">
                    M.A.T.D. Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti, Madurai.
                  </strong>
                </p>

                <div className="grid items-center gap-6 border-t-2 border-[#c9932d]/45 pt-5 text-center sm:grid-cols-3">
                  <div className="space-y-1 text-xs leading-relaxed sm:text-sm">
                    <p className="font-bold text-[#8c5a12] underline decoration-[#c9932d]/70 underline-offset-4">
                      Soliciting Your Presence
                    </p>
                    <p className="pt-1 font-bold text-[#7c1428]">A. Moorthi – Alamelu</p>
                    <p className="text-xs text-[#5c2b12]">(M.A.T.D. Thirumoorthi Mahal)</p>
                    <p className="font-bold text-[#7c1428]">M. Deepak B.Tech., (ECE)</p>
                    <p className="font-semibold">Yadavar Pothikulam · Andipatti Bungalow, Madurai – 625 221.</p>
                    <p className="font-bold text-[#6b1024]">Cell: 90424 98664, 96884 43550.</p>
                  </div>

                  <div className="flex flex-col items-center justify-center space-y-2 py-2">
                    <span className="text-5xl" aria-hidden="true">
                      🪔
                    </span>
                    <p className="text-xs font-bold text-[#7c1428] sm:text-sm">
                      (Joint Invitation from Both Families)
                    </p>
                  </div>

                  <div className="space-y-1 text-xs leading-relaxed sm:text-sm">
                    <p className="font-bold text-[#8c5a12] underline decoration-[#c9932d]/70 underline-offset-4">
                      Yours Affectionately
                    </p>
                    <p className="pt-1 font-bold text-[#7c1428]">
                      S. Suresh Kanna Maligai – Valli (Y. Othakkadai)
                    </p>
                    <p className="font-bold text-[#7c1428]">
                      S. Chandran – Murugeswari (Muthukulathur · Sivaranjani Electricals)
                    </p>
                    <p className="font-bold text-[#7c1428]">
                      S. Jeyaraj B.A. – Valli (Nagamalai Pudukkottai · Vasanth &amp; Co.)
                    </p>
                    <p>Yadavar Pothikulam · Y. Othakkadai · Cell: 98650 17438.</p>
                  </div>
                </div>

                <div className="rounded-lg border-2 border-[#c9932d] bg-[#fff8e4]/92 px-4 py-2.5 text-center text-xs font-semibold text-[#3a120a] sm:text-sm">
                  <strong className="text-[#7c1428]">Engagement (Nichayathartham):</strong> Saturday, 21 Nov 2026
                  from 6:30 PM onwards at{' '}
                  <strong className="text-[#7c1428]">
                    M.A.T.D. Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti.
                  </strong>
                </div>
              </div>
            )}
          </article>

          {/* Patrika Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                soundFx.playChime();
                downloadOriginalPatrikaImage();
              }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f7df94] to-[#c9932d] px-5 py-2.5 text-xs font-bold text-[#24050d] shadow-lg transition hover:brightness-105 cursor-pointer sm:text-sm"
            >
              <Download className="h-4 w-4" />
              <span>
                {lang === 'ta'
                  ? 'அசல் அச்சுப் பத்திரிகை பதிவிறக்கம் (PNG)'
                  : 'Download Printed Patrika (PNG)'}
              </span>
            </button>

            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="inline-flex items-center gap-2 rounded-full border border-[#f7df94] bg-[#631226] px-5 py-2.5 text-xs font-bold text-[#fff8eb] shadow-lg transition hover:bg-[#7c1730] cursor-pointer sm:text-sm"
            >
              <FileText className="h-4 w-4 text-[#f7df94]" />
              <span>
                {lang === 'ta'
                  ? 'பெயருடன் அழைப்பிதழ் PDF பதிவிறக்கம்'
                  : 'Download Personalised PDF'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setShowPatrikaScan((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-[#c9932d] bg-[#fffaf0] px-5 py-2.5 text-xs font-bold text-[#3a0815] shadow transition hover:bg-[#fff1cf] cursor-pointer sm:text-sm"
            >
              <Eye className="h-4 w-4" />
              <span>
                {showPatrikaScan
                  ? lang === 'ta'
                    ? 'அசல் அச்சுப் படத்தை மறைக்க'
                    : 'Hide Original Card Image'
                  : lang === 'ta'
                    ? 'அசல் அச்சுப் பத்திரிகையைக் காண'
                    : 'View Original Printed Card'}
              </span>
            </button>
          </div>

          {showPatrikaScan && (
            <div className="mt-6 overflow-hidden rounded-2xl border-4 border-[#c9932d] bg-[#fffdf7] p-2 shadow-2xl">
              <img
                src={HERITAGE_ASSETS.patrikaScan}
                alt={
                  lang === 'ta'
                    ? 'M.A.T.D. திருமூர்த்தி இல்ல அசல் திருமண அழைப்பிதழ்'
                    : 'Original M.A.T.D. Thirumoorthi Illam Wedding Invitation Scan'
                }
                className="mx-auto w-full max-w-4xl rounded-lg object-contain"
              />
            </div>
          )}
        </div>
      </ContinuitySection3D>

      {/* ====================================================================
          5. AUSPICIOUS WEDDING INVITATION (#invitation — மங்கள திருமண அழைப்பு)
             - NO 3D/tilt effects (plain static <section>)
             - Words anchored cleanly inside the parchment window so top arch,
               pillars, lamps & floral kolam stay 100% visible!
             - Personalized with Guest Name + QR Code ("https://thirumoorthi-wedding-website.pages.dev/")
             - Downloadable as PDF & PNG + One-tap Instagram & WhatsApp Sharing
         ==================================================================== */}
      <section
        id="invitation"
        className="relative py-16 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(253, 244, 228, 0.72), rgba(247, 232, 206, 0.84)), url('${HERITAGE_ASSETS.invitationTempleBg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.22em] text-[#631226] uppercase">
              ❖ {lang === 'ta' ? 'மங்கள திருமண அழைப்பிதழ் · தனிப்பயனாக்கிய பகிர்வு' : 'Personalized Sacred Invite & QR'} ❖
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#3a0815] sm:text-5xl">
              {lang === 'ta' ? 'மங்கள திருமண அழைப்பு' : 'Auspicious Wedding Invitation'}
            </h2>
            <p className="mt-2 text-sm text-[#6e463a]">
              {lang === 'ta'
                ? 'உங்கள் பெயர் மற்றும் இணையதள QR குறியீட்டுடன் கூடிய அழைப்பிதழை PDF-ஆகப் பதிவிறக்கவும் அல்லது Instagram / WhatsApp-இல் பகிரவும்.'
                : 'Customize with your name, scan the QR code, download as a print-ready PDF/PNG, or share straight to Instagram & WhatsApp.'}
            </p>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-12">
            {/* Framed Invitation Card — ALL text & QR strictly confined inside empty parchment free space (top 10%, sides 26%, bottom 8%) */}
            <div className="lg:col-span-6">
              <div
                className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl shadow-2xl ring-2 ring-[#c9932d]"
                style={{ aspectRatio: '9 / 16' }}
              >
                <img
                  src={HERITAGE_ASSETS.goddessFrame}
                  alt={lang === 'ta' ? 'மங்கள திருமண அழைப்பு' : 'Auspicious Madurai Wedding Invitation'}
                  className="pointer-events-none absolute inset-0 h-full w-full object-fill"
                />

                {/* Pure Empty Parchment Window ONLY (Left 26%..Right 26%, Top 10%..Bottom 8%) — ZERO overlap with goddesses, lamps, or lotuses */}
                <div className="absolute top-[10%] right-[26%] bottom-[8%] left-[26%] flex flex-col items-center justify-between overflow-y-auto px-1 py-1 text-center">
                  <div className="w-full space-y-1 sm:space-y-1.5">
                    <p className="font-tamil text-[8.5px] leading-tight font-bold text-[#631226] sm:text-[10.5px]">
                      ஸ்ரீ வெற்றி விநாயகர் · பொதிகுளம் முத்துமாரியம்மன் துணை
                    </p>

                    <p className="font-tamil text-[9px] font-extrabold tracking-wide text-[#8c5a12] sm:text-xs">
                      ❖ {lang === 'ta' ? 'மங்கள திருமண அழைப்பு' : 'AUSPICIOUS INVITATION'} ❖
                    </p>

                    <div className="pt-0.5">
                      <span className="block text-[8.5px] font-bold text-[#631226] sm:text-[10px]">
                        🌸 {lang === 'ta' ? 'அன்புடன் வரவேற்கிறோம்' : 'Cordially Welcoming'} 🌸
                      </span>
                      <strong className="block truncate font-display text-xs text-[#3a0815] sm:text-sm">
                        {effectiveGuest}!
                      </strong>
                      <p className="mt-0.5 font-tamil text-[8px] leading-snug font-semibold text-[#4e2318] sm:text-[10px]">
                        {lang === 'ta'
                          ? 'உங்கள் குடும்பத்தினர் மற்றும் நண்பர்களுடன் வருகை தர அன்புடன் அழைக்கின்றோம்.'
                          : 'We warmly welcome you to come with your family and friends.'}
                      </p>
                    </div>

                    <div className="pt-0.5 font-display leading-tight font-bold text-[#3a0815]">
                      <div className="text-sm sm:text-xl">
                        {lang === 'ta' ? WEDDING_CONFIG.brideTa : WEDDING_CONFIG.bride}
                      </div>
                      <span className="block text-[10px] font-normal italic text-[#8c5a12] sm:text-xs">
                        {lang === 'ta' ? 'மணக்கும்' : 'weds'}
                      </span>
                      <div className="text-sm sm:text-xl">
                        {lang === 'ta' ? WEDDING_CONFIG.groomTa : WEDDING_CONFIG.groomShort}
                      </div>
                    </div>

                    <p className="font-tamil text-[7.5px] leading-snug font-semibold text-[#5a1a12] sm:text-[9px]">
                      {lang === 'ta'
                        ? WEDDING_CONFIG.auspiciousNoticeTa
                        : WEDDING_CONFIG.auspiciousNoticeEn}
                    </p>

                    {/* Engagement Details inside Parchment Window (Dress line removed) */}
                    <div className="rounded-lg border border-[#c9932d]/70 bg-[#fff5db]/95 px-2 py-1.5 text-center shadow-sm">
                      <p className="font-tamil text-[8.5px] font-extrabold text-[#631226] sm:text-[10px]">
                        ❖ {lang === 'ta' ? WEDDING_CONFIG.engagementTitleTa : WEDDING_CONFIG.engagementTitleEn} ❖
                      </p>
                      <p className="font-tamil text-[7.8px] font-bold text-[#8c5a12] sm:text-[9.5px]">
                        {lang === 'ta' ? WEDDING_CONFIG.nichayatharthamTa : WEDDING_CONFIG.nichayatharthamEn}
                      </p>
                      <p className="mt-0.5 font-tamil text-[7px] leading-snug text-[#4e2318] sm:text-[8.5px]">
                        {lang === 'ta' ? WEDDING_CONFIG.engagementDescTa : WEDDING_CONFIG.engagementDescEn}
                      </p>
                    </div>

                    {/* Highlighted Sacred Muhurtham (திருமாங்கல்ய தாரணம் — சுப முகூர்த்தம்) */}
                    <div className="mx-auto w-full rounded-xl border-2 border-[#f7df94] bg-gradient-to-r from-[#7c1428] via-[#631226] to-[#7c1428] px-2 py-1.5 text-center shadow-lg">
                      <p className="font-tamil text-[8.5px] leading-tight font-extrabold text-[#f7df94] sm:text-[10.5px]">
                        ✨ {lang === 'ta' ? 'திருமாங்கல்ய தாரணம் — சுப முகூர்த்தம்' : 'Sacred Muhurtham — Thirumangalyam'} ✨
                      </p>
                      <p className="mt-0.5 font-tamil text-[8px] leading-tight font-bold text-white sm:text-[10px]">
                        {lang === 'ta'
                          ? 'ஞாயிறு, 22.11.2026 · காலை 6:15 – 7:15'
                          : 'Sunday, 22 Nov 2026 · 6:15 – 7:15 AM'}
                      </p>
                      <p className="mt-0.5 text-[7.5px] leading-tight font-semibold text-[#ffefa8] sm:text-[9px]">
                        {lang === 'ta'
                          ? 'MATD திருமூர்த்தி மஹால், டி. வாடிப்பட்டி, மதுரை'
                          : 'MATD Thirumoorthi Mahal, T. Vadipatti, Madurai'}
                      </p>
                    </div>
                  </div>

                  {/* Dual QR Codes anchored strictly inside free bottom parchment space */}
                  <div className="mt-1 flex w-full items-center justify-around gap-2 border-t border-[#c9932d]/45 pt-1.5">
                    {/* Left: Venue Google Maps QR */}
                    <div className="flex flex-col items-center">
                      {venueQrDataUrl && (
                        <img
                          src={venueQrDataUrl}
                          alt="Venue Maps QR Code"
                          className="h-11 w-11 rounded border border-[#c9932d]/60 bg-white p-0.5 sm:h-14 sm:w-14"
                        />
                      )}
                      <p className="text-[7.5px] font-bold text-[#631226] sm:text-[9px]">
                        {lang === 'ta' ? '📍 மண்டபம் வழி' : '📍 Venue Map'}
                      </p>
                      <p className="font-mono-num text-[6.5px] text-[#4e2318] sm:text-[8px]">
                        MATD Vadipatti
                      </p>
                    </div>

                    {/* Right: Wedding Website QR */}
                    <div className="flex flex-col items-center">
                      {qrDataUrl && (
                        <img
                          src={qrDataUrl}
                          alt="Website QR Code"
                          className="h-11 w-11 rounded border border-[#c9932d]/60 bg-white p-0.5 sm:h-14 sm:w-14"
                        />
                      )}
                      <p className="text-[7.5px] font-bold text-[#631226] sm:text-[9px]">
                        {lang === 'ta' ? '📲 திருமண தளம்' : '📲 Web Invite'}
                      </p>
                      <p className="font-mono-num text-[6.5px] text-[#4e2318] sm:text-[8px]">
                        Live Songs & RSVP
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personalize, QR Code, PDF Export & Instagram / WhatsApp Share Studio */}
            <div className="lg:col-span-6">
              <div className="space-y-5 rounded-3xl border-2 border-[#c9932d]/75 bg-[#fffaf0]/95 p-6 shadow-2xl sm:p-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#3a0815]">
                    {lang === 'ta'
                      ? 'உங்கள் பெயருடன் அழைப்பிதழ் & QR பகிர்வு'
                      : 'Personalize, Download PDF & Share'}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#6e463a]">
                    {lang === 'ta'
                      ? 'உங்கள் பெயரை உள்ளிட்டு QR குறியீட்டுடன் கூடிய PDF அல்லது படத்தைப் பதிவிறக்கி Instagram மற்றும் WhatsApp-இல் பகிருங்கள்.'
                      : 'Enter your name below to update the invitation live, generate a printable PDF with website QR code, or share to Instagram & WhatsApp.'}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="inviteGuestInput"
                      className="block text-xs font-bold tracking-wider text-[#631226] uppercase"
                    >
                      {lang === 'ta' ? 'அழைக்கப்படும் பெயர்' : 'Your Name / Family'}
                    </label>
                    <input
                      id="inviteGuestInput"
                      type="text"
                      maxLength={44}
                      value={guestName === 'Esteemed Guest' ? '' : guestName}
                      onChange={(e) => onChangeGuestName(e.target.value || 'Esteemed Guest')}
                      placeholder={
                        lang === 'ta'
                          ? 'எ.கா. சுந்தர் & குடும்பத்தினர்'
                          : 'e.g. Sundar & Family'
                      }
                      className="mt-1.5 w-full rounded-xl border border-[#c9932d] bg-white px-3.5 py-2.5 text-sm text-[#3b1d16] focus:border-[#631226] focus:outline-none"
                    />
                  </div>

                  <div>
                    <span className="block text-xs font-bold tracking-wider text-[#631226] uppercase">
                      {lang === 'ta' ? 'உங்கள் அணி' : 'Your Wedding Side'}
                    </span>
                    <div className="mt-1.5 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectTeam('ponnu')}
                        className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition cursor-pointer ${
                          team === 'ponnu'
                            ? 'border-[#631226] bg-[#631226] text-white'
                            : 'border-[#c9932d]/50 bg-white text-[#3a0815]'
                        }`}
                      >
                        {lang === 'ta' ? 'பொண்ணு அணி' : 'Team Ponnu'}
                      </button>
                      <button
                        type="button"
                        onClick={() => onSelectTeam('mappillai')}
                        className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition cursor-pointer ${
                          team === 'mappillai'
                            ? 'border-[#1e3a8a] bg-[#1e3a8a] text-white'
                            : 'border-[#c9932d]/50 bg-white text-[#3a0815]'
                        }`}
                      >
                        {lang === 'ta' ? 'மாப்பிள்ளை அணி' : 'Team Mappillai'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Synced Score + Oracle Blessing + Live Dual QR Preview */}
                <div className="rounded-2xl border border-[#c9932d]/55 bg-[#fff5db] p-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-[11px] font-bold text-[#631226]">
                      👑 {royalTitle} ({totalScore} pts) · {selectedFortune.emoji}{' '}
                      {lang === 'ta' ? selectedFortune.ta : selectedFortune.en}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-[#c9932d]/30">
                    {/* Venue Google Maps QR */}
                    <div className="flex items-center gap-3 rounded-xl border border-[#c9932d]/40 bg-white/80 p-2.5">
                      {venueQrDataUrl && (
                        <img
                          src={venueQrDataUrl}
                          alt="Venue Maps QR Code"
                          className="h-16 w-16 shrink-0 rounded-lg border border-[#c9932d] bg-white p-1 shadow"
                        />
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-1 text-xs font-bold text-[#631226]">
                          <MapPin className="h-3.5 w-3.5 text-[#c9932d]" />
                          <span>{lang === 'ta' ? 'மண்டபம் கூகுள் மேப்' : 'Venue Google Maps'}</span>
                        </p>
                        <p className="mt-0.5 text-[11px] text-[#4e2318] line-clamp-1">
                          MATD Mahal, Vadipatti
                        </p>
                        <a
                          href={WEDDING_CONFIG.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex text-[10px] font-bold text-[#8c5a12] underline hover:text-[#631226]"
                        >
                          {lang === 'ta' ? 'வழித்தடத்தைக் காண்க →' : 'View GPS Route →'}
                        </a>
                      </div>
                    </div>

                    {/* Wedding Website QR */}
                    <div className="flex items-center gap-3 rounded-xl border border-[#c9932d]/40 bg-white/80 p-2.5">
                      {qrDataUrl && (
                        <img
                          src={qrDataUrl}
                          alt="Official Wedding Website QR"
                          className="h-16 w-16 shrink-0 rounded-lg border border-[#c9932d] bg-white p-1 shadow"
                        />
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-1 text-xs font-bold text-[#631226]">
                          <QrCode className="h-3.5 w-3.5 text-[#8c5a12]" />
                          <span>{lang === 'ta' ? 'இணையதள அழைப்பிதழ்' : 'Website Invite'}</span>
                        </p>
                        <p className="mt-0.5 text-[11px] text-[#4e2318] truncate font-mono-num">
                          {WEDDING_CONFIG.websiteUrl.replace('https://', '')}
                        </p>
                        <span className="mt-1 inline-block text-[10px] font-semibold text-[#8c5a12]">
                          {lang === 'ta' ? 'நேரலை பாடல்கள் & வாழ்த்துகள்' : 'Live Deck & RSVP'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary Download & Social Share Buttons */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleDownloadPdf}
                    disabled={isExporting}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#a62040] to-[#631226] px-4 py-3.5 text-sm font-bold text-white shadow-lg transition hover:brightness-110 cursor-pointer"
                  >
                    <FileText className="h-4 w-4 text-[#f7df94]" />
                    <span>{lang === 'ta' ? 'PDF-ஆகப் பதிவிறக்கம்' : 'Download as PDF'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadPng}
                    disabled={isExporting}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f7df94] to-[#c9932d] px-4 py-3.5 text-sm font-bold text-[#24050d] shadow-lg transition hover:brightness-105 cursor-pointer"
                  >
                    <Download className="h-4 w-4" />
                    <span>{lang === 'ta' ? 'HD படம் பதிவிறக்கம் (PNG)' : 'Download HD Image'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleInstagramShare}
                    disabled={isExporting}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d62976] via-[#962fbf] to-[#4f5bd5] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110 cursor-pointer"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>{lang === 'ta' ? 'Instagram-இல் பகிர்க' : 'Share to Instagram'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppShare}
                    disabled={isExporting}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#128c7e] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110 cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{lang === 'ta' ? 'WhatsApp-இல் பகிர்க' : 'Share on WhatsApp'}</span>
                  </button>
                </div>

                {shareFeedback && (
                  <p className="rounded-xl border border-[#c9932d]/45 bg-[#fff8e4] px-4 py-2 text-center text-xs font-bold text-[#631226]">
                    ✓ {shareFeedback}
                  </p>
                )}

                <div className="flex flex-wrap justify-center gap-3 border-t border-[#c9932d]/30 pt-3">
                  <a
                    href="#events"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#631226] hover:underline"
                  >
                    <Calendar className="h-3.5 w-3.5 text-[#c9932d]" />
                    <span>{lang === 'ta' ? 'நிகழ்வு நேர அட்டவணை' : 'Events Timeline'}</span>
                  </a>
                  <span className="text-[#c9932d]">·</span>
                  <a
                    href="#venue"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#631226] hover:underline"
                  >
                    <MapPin className="h-3.5 w-3.5 text-[#c9932d]" />
                    <span>{lang === 'ta' ? 'மண்டப வழித்தடம்' : 'Venue Directions'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. AUSPICIOUS EVENTS TIMELINE (#events)
         ==================================================================== */}
      <ContinuitySection3D
        id="events"
        className="relative py-16 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 246, 230, 0.78), rgba(255, 246, 230, 0.88)), url('${HERITAGE_ASSETS.weddingCourtyard}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.22em] text-[#631226] uppercase">
              ❖ {lang === 'ta' ? 'திருமண சடங்குகள் & நேர அட்டவணை' : 'Sacred Vedic Rituals'} ❖
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#3a0815] sm:text-5xl">
              {lang === 'ta' ? 'சுப நிகழ்வுகள் அட்டவணை' : 'Auspicious Events Timeline'}
            </h2>
          </div>

          <div className="relative space-y-6 before:absolute before:top-4 before:bottom-4 before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-[#c9932d] before:via-[#631226] before:to-[#c9932d]">
            {eventsList.map((ev, idx) => (
              <div key={idx} className="relative pl-14">
                <div
                  aria-hidden="true"
                  className="absolute top-6 left-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#631226] bg-gradient-to-br from-[#f7df94] to-[#c9932d] text-xs font-bold text-[#3a0815] shadow"
                >
                  {idx + 1}
                </div>
                <div className="card-3d-tilt rounded-2xl border border-[#c9932d]/55 bg-[#fffaf0]/95 p-5 shadow-lg sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#631226] uppercase">
                      <Clock className="h-3.5 w-3.5 text-[#c9932d]" />
                      {lang === 'ta' ? ev.timeTa : ev.timeEn}
                    </span>
                    <span className="text-xs font-semibold text-[#8c6418]">
                      {lang === 'ta' ? ev.dressTa : ev.dressEn}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-[#3a0815] sm:text-2xl">
                    {lang === 'ta' ? ev.titleTa : ev.titleEn}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#3b1d16]">
                    {lang === 'ta' ? ev.descTa : ev.descEn}
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-[#6e463a]">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-[#c9932d]" />
                    <span>{lang === 'ta' ? ev.locationTa : ev.locationEn}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContinuitySection3D>
    </>
  );
}

/* ============================================================================
   7 & 8. AGE-WISE PEOPLE DIRECTORY + PHOTO ALBUM
   ============================================================================ */
interface HeritageDirectoryAndAlbumProps {
  lang: Lang;
  directoryPersons: DirectoryPerson[];
  albumPhotos: AlbumPhoto[];
  onOpenAdmin: () => void;
}

export function HeritageDirectoryAndAlbum({
  lang,
  directoryPersons,
  albumPhotos,
  onOpenAdmin,
}: HeritageDirectoryAndAlbumProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<
    'all' | 'bride' | 'groom' | 'brother_friends' | 'friends'
  >('all');
  const [ageFilter, setAgeFilter] = useState<'all' | AgeGroupKey>('all');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const segregatedSections = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    const matchesQuery = (p: DirectoryPerson) => {
      if (!q) return true;
      const seniorKeyword = p.isSenior ? 'senior சீனியர்' : '';
      const haystack =
        `${p.nameEn} ${p.nameTa} ${p.groupEn} ${p.groupTa} ${p.locationEn} ${p.locationTa} ${seniorKeyword}`.toLowerCase();
      return haystack.includes(q);
    };

    const categories: Array<{
      id: 'bride' | 'groom' | 'brother_friends' | 'friends';
      emoji: string;
      titleTa: string;
      titleEn: string;
      subtitleTa: string;
      subtitleEn: string;
      accentBorder: string;
      headerBg: string;
      tiers: Array<{
        meta: { key: string; order: number; labelTa: string; labelEn: string };
        members: DirectoryPerson[];
      }>;
      totalCount: number;
    }> = [];

    if (categoryFilter === 'all' || categoryFilter === 'bride') {
      const tiers = AGE_GROUP_ORDER.filter(
        (g) => g.key !== 'friends' && (ageFilter === 'all' || ageFilter === g.key)
      )
        .map((meta) => ({
          meta,
          members: directoryPersons.filter(
            (p) =>
              p.ageGroup === meta.key &&
              p.side === 'bride' &&
              p.ageGroup !== 'friends' &&
              matchesQuery(p)
          ),
        }))
        .filter((t) => t.members.length > 0);
      if (tiers.length > 0) {
        categories.push({
          id: 'bride',
          emoji: '🌸',
          titleTa: 'மணமகள் குடும்ப உறவினர்கள் (M. திரிஷா இல்லம்)',
          titleEn: "Bride's Family & Relatives (M. Thirisha)",
          subtitleTa: 'மணமகள் தரப்பு பெரியவர்கள் முதல் குட்டீஸ்கள் வரை வயது வரிசைப்படி',
          subtitleEn: "Bride's relatives organized in respectful age-wise order",
          accentBorder: 'border-[#631226]/40',
          headerBg: 'bg-gradient-to-r from-[#631226] to-[#871b36] text-[#fff8eb]',
          tiers,
          totalCount: tiers.reduce((acc, t) => acc + t.members.length, 0),
        });
      }
    }

    if (categoryFilter === 'all' || categoryFilter === 'groom') {
      const tiers = AGE_GROUP_ORDER.filter(
        (g) => g.key !== 'friends' && (ageFilter === 'all' || ageFilter === g.key)
      )
        .map((meta) => ({
          meta,
          members: directoryPersons.filter(
            (p) =>
              p.ageGroup === meta.key &&
              p.side === 'groom' &&
              p.ageGroup !== 'friends' &&
              matchesQuery(p)
          ),
        }))
        .filter((t) => t.members.length > 0);
      if (tiers.length > 0) {
        categories.push({
          id: 'groom',
          emoji: '⚜️',
          titleTa: 'மணமகன் குடும்ப உறவினர்கள் (S. சிவசங்கர் இல்லம்)',
          titleEn: "Groom's Family & Relatives (S. Siva Shankar)",
          subtitleTa: 'மணமகன் தரப்பு பெரியவர்கள் முதல் குட்டீஸ்கள் வரை வயது வரிசைப்படி',
          subtitleEn: "Groom's relatives organized in respectful age-wise order",
          accentBorder: 'border-[#1e3a8a]/35',
          headerBg: 'bg-gradient-to-r from-[#1e3a8a] to-[#2b4ea6] text-[#fff8eb]',
          tiers,
          totalCount: tiers.reduce((acc, t) => acc + t.members.length, 0),
        });
      }
    }

    if (categoryFilter === 'all' || categoryFilter === 'friends' || categoryFilter === 'brother_friends') {
      const showFriendsTier = ageFilter === 'all' || ageFilter === 'friends';
      if (showFriendsTier) {
        const brotherSubGroups: Array<{
          key: NonNullable<DirectoryPerson['friendCategory']>;
          order: number;
          labelTa: string;
          labelEn: string;
        }> = [
          {
            key: 'thaai_school',
            order: 1,
            labelTa: 'தாய் பள்ளி நண்பர்கள்',
            labelEn: 'Thaai School Friends',
          },
          {
            key: 'kalasalingam_mentors',
            order: 2,
            labelTa: 'கலசலிங்கம் பல்கலைக்கழகம் · வழிகாட்டிகள்',
            labelEn: 'Kalasalingam University · Mentors',
          },
          {
            key: 'kalasalingam_seniors',
            order: 3,
            labelTa: 'கலசலிங்கம் பல்கலைக்கழகம் · சீனியர்கள்',
            labelEn: 'Kalasalingam University · Seniors',
          },
          {
            key: 'kalasalingam_friends',
            order: 4,
            labelTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்',
            labelEn: 'Kalasalingam University · Friends',
          },
        ];

        const brotherTiers = brotherSubGroups
          .map((sub) => ({
            meta: sub,
            members: directoryPersons.filter(
              (p) => p.friendCategory === sub.key && matchesQuery(p)
            ),
          }))
          .filter((t) => t.members.length > 0);

        if (brotherTiers.length > 0) {
          categories.push({
            id: 'brother_friends',
            emoji: '🎓',
            titleTa: 'மணமகள் சகோதரர் (M. தீபக்) நண்பர்கள் & வழிகாட்டிகள்',
            titleEn: "Bride's Brother's Friends & Mentors (M. Deepak)",
            subtitleTa:
              'தாய் பள்ளி நண்பர்கள் மற்றும் கலசலிங்கம் பல்கலைக்கழக வழிகாட்டிகள் & நண்பர்கள்',
            subtitleEn:
              'Thaai School friends along with Kalasalingam University mentors & friends',
            accentBorder: 'border-[#7a4b0c]/45',
            headerBg: 'bg-gradient-to-r from-[#4b1022] via-[#631226] to-[#7a4b0c] text-[#fff8eb]',
            tiers: brotherTiers,
            totalCount: brotherTiers.reduce((acc, t) => acc + t.members.length, 0),
          });
        }
      }
    }

    if (categoryFilter === 'all' || categoryFilter === 'friends') {
      const friendsMeta = AGE_GROUP_ORDER.find((g) => g.key === 'friends');
      const showFriendsTier = ageFilter === 'all' || ageFilter === 'friends';
      if (friendsMeta && showFriendsTier) {
        const friendsMembers = directoryPersons.filter(
          (p) =>
            !p.friendCategory &&
            (p.ageGroup === 'friends' || p.side === 'both') &&
            matchesQuery(p)
        );
        if (friendsMembers.length > 0) {
          categories.push({
            id: 'friends',
            emoji: '🤝',
            titleTa: 'நண்பர்கள் & ஊர் பொதுமக்கள்',
            titleEn: 'Friends & Community Well-Wishers',
            subtitleTa: 'பள்ளி, கல்லூரி நண்பர்கள் மற்றும் பொதிகுளம் இளைஞர் & ஊர் பொதுமக்கள்',
            subtitleEn: 'School, college friends & Yadavar Pothikulam community associations',
            accentBorder: 'border-[#c9932d]/60',
            headerBg: 'bg-gradient-to-r from-[#7a4b0c] to-[#9b6516] text-[#fff8eb]',
            tiers: [{ meta: friendsMeta, members: friendsMembers }],
            totalCount: friendsMembers.length,
          });
        }
      }
    }

    return categories;
  }, [directoryPersons, searchQuery, categoryFilter, ageFilter]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight')
        setLightboxIdx((i) => (i === null ? 0 : (i + 1) % Math.max(1, albumPhotos.length)));
      if (e.key === 'ArrowLeft')
        setLightboxIdx((i) =>
          i === null ? 0 : (i - 1 + Math.max(1, albumPhotos.length)) % Math.max(1, albumPhotos.length)
        );
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIdx, albumPhotos.length]);

  return (
    <>
      <section
        id="people"
        className="relative py-12 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 248, 235, 0.84), rgba(255, 248, 235, 0.92)), url('${HERITAGE_ASSETS.maduraiPanorama}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#631226] uppercase sm:text-xs">
              ❖ {lang === 'ta' ? 'மணமகள் குடும்பம் · மணமகன் குடும்பம் · நண்பர்கள்' : "Bride's Family · Groom's Family · Friends"} ❖
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#3a0815] sm:text-5xl">
              {lang === 'ta' ? 'திருமூர்த்தி குடும்ப அழைப்புப் பட்டியல்' : 'Honored Families, Relatives & Friends'}
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-[#6e463a] sm:text-sm">
              {lang === 'ta'
                ? 'மணமகள் வீட்டார், மணமகன் வீட்டார் மற்றும் நண்பர்கள் எனத் தனித்தனியாக வயது வரிசைப்படி தொகுக்கப்பட்டுள்ளது.'
                : 'Segregated cleanly into Bride Family, Groom Family, and Friends in respectful age-wise order.'}
            </p>
            <button
              type="button"
              onClick={onOpenAdmin}
              className="mt-3.5 inline-flex items-center gap-1.5 rounded-full border border-[#c9932d] bg-white px-4 py-2 text-xs font-bold text-[#631226] shadow-sm transition-colors hover:bg-[#fff3d2] cursor-pointer"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-[#8c6418]" />
              <span>
                {lang === 'ta'
                  ? 'நிர்வாகம் (Admin): பெயர்கள் சேர்க்க / திருத்த'
                  : 'Admin: Add / Edit Relatives & Friends'}
              </span>
            </button>
          </div>

          {/* Search & 4-Way Segregation Bar — Bride Family / Groom Family / Friends */}
          <div className="mb-6 rounded-2xl border border-[#c9932d]/45 bg-[#fffaf0]/95 p-3.5 shadow-sm sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-sm">
                <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#8c6418]" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === 'ta' ? 'பெயர் அல்லது ஊர் தேடுக...' : 'Search by name, group or city...'}
                  className="w-full rounded-xl border border-[#c9932d]/70 bg-white py-2.5 pr-4 pl-10 text-sm text-[#3b1d16] focus:border-[#631226] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:justify-end sm:gap-2">
                {(
                  [
                    { id: 'all', labelTa: 'அனைவரும்', labelEn: 'All' },
                    { id: 'bride', labelTa: 'மணமகள் குடும்பம்', labelEn: "Bride's Family" },
                    { id: 'groom', labelTa: 'மணமகன் குடும்பம்', labelEn: "Groom's Family" },
                    {
                      id: 'brother_friends',
                      labelTa: 'மணமகள் சகோதரர் நண்பர்கள்',
                      labelEn: "Bride's Brother's Friends",
                    },
                    { id: 'friends', labelTa: 'நண்பர்கள்', labelEn: 'Friends' },
                  ] as const
                ).map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => {
                      setCategoryFilter(f.id);
                      if (f.id === 'friends' || f.id === 'brother_friends') setAgeFilter('all');
                    }}
                    className={`rounded-xl border px-3 py-2.5 text-center text-[11px] font-bold leading-tight transition-colors cursor-pointer sm:px-4 sm:text-xs ${
                      categoryFilter === f.id
                        ? 'border-[#631226] bg-[#631226] text-white shadow-sm'
                        : 'border-[#c9932d]/50 bg-white text-[#3a0815] hover:border-[#631226]'
                    }`}
                  >
                    {lang === 'ta' ? f.labelTa : f.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Age-Wise Order Filter Grid */}
            <div className="mt-3.5 border-t border-[#c9932d]/25 pt-3.5">
              <div className="grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:justify-center sm:gap-2">
                <button
                  type="button"
                  onClick={() => setAgeFilter('all')}
                  className={`col-span-2 rounded-lg border px-3 py-2 text-center text-[11px] font-bold transition-colors cursor-pointer sm:col-span-1 sm:py-1.5 ${
                    ageFilter === 'all'
                      ? 'border-[#c9932d] bg-[#f7df94] text-[#24050d]'
                      : 'border-[#c9932d]/40 bg-white text-[#3a0815] hover:bg-[#fff4d6]'
                  }`}
                >
                  {lang === 'ta' ? 'அனைத்து வரிசைகளும் (1–10)' : 'All Age Tiers (1–10)'}
                </button>
                {AGE_GROUP_ORDER.map((g) => (
                  <button
                    key={g.key}
                    type="button"
                    onClick={() => {
                      setAgeFilter(g.key);
                      if (g.key === 'friends') setCategoryFilter('friends');
                      else if (categoryFilter === 'friends') setCategoryFilter('all');
                    }}
                    className={`truncate rounded-lg border px-2.5 py-2 text-left text-[11px] font-bold transition-colors cursor-pointer sm:px-3 sm:py-1.5 sm:text-center ${
                      ageFilter === g.key
                        ? 'border-[#631226] bg-[#631226] text-white'
                        : 'border-[#c9932d]/40 bg-white text-[#3a0815] hover:bg-[#fff4d6]'
                    }`}
                    title={`${g.order}. ${lang === 'ta' ? g.labelTa : g.labelEn}`}
                  >
                    {g.order}. {lang === 'ta' ? g.labelTa : g.labelEn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Segregated Sections: Bride's Family | Groom's Family | Friends (Static, Zero 3D Effects) */}
          <div className="space-y-8 sm:space-y-10">
            {segregatedSections.map((section) => (
              <div
                key={section.id}
                className={`overflow-hidden rounded-2xl border-2 bg-[#fffaf0]/95 shadow-md sm:rounded-3xl ${section.accentBorder}`}
              >
                {/* Segregated Family / Friends Banner Header */}
                <div className={`flex flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 ${section.headerBg}`}>
                  <div>
                    <h3 className="font-display text-lg font-bold sm:text-2xl">
                      <span className="mr-2" aria-hidden="true">
                        {section.emoji}
                      </span>
                      {lang === 'ta' ? section.titleTa : section.titleEn}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#f7df94]/95">
                      {lang === 'ta' ? section.subtitleTa : section.subtitleEn}
                    </p>
                  </div>
                  <span className="rounded-lg bg-white/15 px-3 py-1 text-xs font-bold text-[#fff8eb]">
                    {section.totalCount} {lang === 'ta' ? 'பெயர்கள்' : 'entries'}
                  </span>
                </div>

                {/* Age-wise subsections inside this family/friends group */}
                <div className="space-y-6 p-4 sm:p-6">
                  {section.tiers.map(({ meta, members }) => (
                    <div key={`${section.id}-${meta.key}`}>
                      <div className="mb-3 flex items-center justify-between gap-2 border-b border-[#c9932d]/30 pb-2">
                        <div className="flex min-w-0 items-center gap-2">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#631226] font-mono-num text-[11px] font-bold text-[#f7df94]">
                            {meta.order}
                          </span>
                          <h4 className="font-display text-sm font-bold text-[#3a0815] sm:text-lg">
                            {lang === 'ta' ? meta.labelTa : meta.labelEn}
                          </h4>
                        </div>
                        <span className="shrink-0 text-[11px] font-bold text-[#8c6418]">
                          {members.length}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                        {members.map((person) => (
                          <article
                            key={person.id}
                            className="flex h-full flex-col justify-between rounded-xl border border-[#c9932d]/40 bg-white p-3.5 shadow-sm sm:rounded-2xl sm:p-4"
                          >
                            <div>
                              <div className="flex items-start justify-between gap-2">
                                <p className="text-[11px] font-bold tracking-wide text-[#8c6418]">
                                  {lang === 'ta' ? person.groupTa : person.groupEn}
                                </p>
                                <span
                                  className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold ${
                                    person.friendCategory === 'kalasalingam_mentors'
                                      ? 'bg-[#631226]/12 text-[#631226]'
                                      : person.friendCategory === 'kalasalingam_seniors' || person.isSenior
                                        ? 'bg-[#c9932d]/25 text-[#631226]'
                                        : person.side === 'bride'
                                          ? 'bg-[#631226]/10 text-[#631226]'
                                          : person.side === 'groom'
                                            ? 'bg-[#1e3a8a]/10 text-[#1e3a8a]'
                                            : 'bg-[#c9932d]/15 text-[#7a5210]'
                                  }`}
                                >
                                  {person.friendCategory === 'kalasalingam_mentors'
                                    ? lang === 'ta'
                                      ? 'வழிகாட்டி'
                                      : 'Mentor'
                                    : person.friendCategory === 'kalasalingam_seniors' || person.isSenior
                                      ? lang === 'ta'
                                        ? 'சீனியர்'
                                        : 'Senior'
                                      : person.ageGroup === 'friends' || person.side === 'both'
                                        ? lang === 'ta'
                                          ? 'நண்பர்கள்'
                                          : 'Friends'
                                        : person.side === 'bride'
                                          ? lang === 'ta'
                                            ? 'மணமகள்'
                                            : 'Bride'
                                          : lang === 'ta'
                                            ? 'மணமகன்'
                                            : 'Groom'}
                                </span>
                              </div>
                              <h5 className="mt-1.5 flex flex-wrap items-center gap-1.5 text-sm font-bold leading-snug text-[#3a0815] sm:text-[15px]">
                                <span>{lang === 'ta' ? person.nameTa : person.nameEn}</span>
                                {person.isSenior && (
                                  <span className="inline-block rounded-md border border-[#c9932d] bg-[#fff3d2] px-2 py-0.5 text-[10px] font-extrabold tracking-wide text-[#631226] uppercase">
                                    {lang === 'ta' ? 'சீனியர்' : 'Senior'}
                                  </span>
                                )}
                              </h5>
                            </div>
                            {(person.locationTa || person.locationEn) && (
                              <p className="mt-3 flex items-start gap-1.5 border-t border-[#f3e5cb] pt-2 text-xs font-medium text-[#6e463a]">
                                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#c9932d]" />
                                <span>{lang === 'ta' ? person.locationTa : person.locationEn}</span>
                              </p>
                            )}
                          </article>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {segregatedSections.length === 0 && (
            <p className="py-8 text-center text-sm text-[#6e463a]">
              {lang === 'ta' ? 'பொருந்தும் பெயர்கள் இல்லை.' : 'No matching family or friend entries found.'}
            </p>
          )}
        </div>
      </section>

      <ContinuitySection3D
        id="communityWelcome"
        className="relative py-14"
        style={{
          backgroundImage: `linear-gradient(rgba(253, 246, 230, 0.84), rgba(253, 246, 230, 0.92)), url('${HERITAGE_ASSETS.page5HorizontalFrame}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold tracking-[0.22em] text-[#631226] uppercase">
            ❖ {lang === 'ta' ? WEDDING_CONFIG.familyFunctionTa : WEDDING_CONFIG.familyFunction} ❖
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-[#3a0815] sm:text-4xl">
            {lang === 'ta' ? 'அன்பான நல்வரவு' : 'Warm Welcome'}
          </h2>
          <div className="mt-6 rounded-3xl border border-[#c9932d]/55 bg-white/95 p-6 text-sm leading-relaxed text-[#3b1d16] shadow-lg sm:p-8">
            {lang === 'ta' ? (
              <p className="font-tamil text-[#631226]" lang="ta">
                பொதிகுளம் யாதவர் இளைஞர் நற்பணி மன்றத்தினர், யாதவர் பொதிகுளம் கிராமப் பொதுமக்கள்,
                கலசலிங்கம் மாணவர்கள், தாய் பள்ளி நண்பர்கள், செந்தாமரை கல்லூரி நண்பர்கள் மற்றும் அனைத்து
                உறவினர்கள், நண்பர்கள், நல்விரும்பிகள் அனைவரையும் அன்புடன் வரவேற்கிறோம்.
              </p>
            ) : (
              <p className="text-[#3b1d16]">
                We warmly welcome the Pothikulam Yadavar Ilaignar Narpani Mandram, the people of Yadavar
                Pothikulam village, Kalasalingam University students, Thaai School friends, Senthamarai
                College friends, and all our relatives, friends and well-wishers.
              </p>
            )}
          </div>
        </div>
      </ContinuitySection3D>

      <ContinuitySection3D
        id="album"
        className="relative py-16 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 233, 214, 0.80), rgba(245, 233, 214, 0.90)), url('${HERITAGE_ASSETS.venueBg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.22em] text-[#631226] uppercase">
              ❖ {lang === 'ta' ? 'புகைப்பட ஆல்பம் · மதுரை நினைவுகள்' : 'Memories of Madurai'} ❖
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#3a0815] sm:text-5xl">
              {lang === 'ta' ? 'திருமணப் புகைப்பட ஆல்பம்' : 'Wedding Moments & Photo Album'}
            </h2>
            <p className="mt-2 text-sm italic text-[#6e463a]">
              {lang === 'ta'
                ? 'முழுப் படத்தைக் காண எந்தவொரு புகைப்படத்தையும் தட்டவும்.'
                : 'Click any heritage photograph for full lightbox inspection.'}
            </p>
            <button
              type="button"
              onClick={onOpenAdmin}
              className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#c9932d] bg-white px-4 py-1.5 text-xs font-bold text-[#631226] shadow-sm transition hover:bg-[#fff3d2] cursor-pointer"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-[#8c6418]" />
              <span>{lang === 'ta' ? 'நிர்வாகம்: ஆல்பம் படங்கள் சேர்க்க' : 'Admin: Manage Album Photos'}</span>
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {albumPhotos.map((photo, idx) => (
              <button
                key={`${photo.src}-${idx}`}
                type="button"
                onClick={() => {
                  setLightboxIdx(idx);
                  soundFx.playChime();
                }}
                className="card-3d-tilt group overflow-hidden rounded-2xl border-2 border-[#c9932d]/65 bg-white text-left shadow-lg cursor-pointer"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#f4e3c1]">
                  <img
                    src={photo.src}
                    alt={lang === 'ta' ? photo.captionTa : photo.captionEn}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-[#fffdf7] p-4">
                  <p className="text-[11px] font-bold tracking-wider text-[#8c6418] uppercase">
                    {String(idx + 1).padStart(2, '0')} · {lang === 'ta' ? photo.dateTa : photo.dateEn}
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-[#3a0815]">
                    {lang === 'ta' ? photo.captionTa : photo.captionEn}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </ContinuitySection3D>

      {lightboxIdx !== null && albumPhotos[lightboxIdx] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <button
            type="button"
            onClick={() => setLightboxIdx(null)}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#f7df94] bg-[#3a0815] text-white cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() =>
              setLightboxIdx((i) =>
                i === null ? 0 : (i - 1 + albumPhotos.length) % albumPhotos.length
              )
            }
            aria-label="Previous image"
            className="mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f7df94] bg-[#3a0815]/90 text-[#f7df94] cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="max-w-4xl text-center">
            <img
              src={albumPhotos[lightboxIdx].src}
              alt={
                lang === 'ta'
                  ? albumPhotos[lightboxIdx].captionTa
                  : albumPhotos[lightboxIdx].captionEn
              }
              className="max-h-[78vh] w-auto rounded-xl border-2 border-[#f7df94] object-contain shadow-2xl"
            />
            <p className="mt-3 font-display text-lg text-[#ffe8a3]">
              {lang === 'ta'
                ? albumPhotos[lightboxIdx].captionTa
                : albumPhotos[lightboxIdx].captionEn}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setLightboxIdx((i) => (i === null ? 0 : (i + 1) % albumPhotos.length))
            }
            aria-label="Next image"
            className="ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f7df94] bg-[#3a0815]/90 text-[#f7df94] cursor-pointer"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}

/* ============================================================================
   9, 10, 11. TRADITIONS & WISHES, COMMUNITY WELCOME, GRATITUDE & 2018 NOTES
   ============================================================================ */
interface HeritageWishesProps {
  lang: Lang;
  guestName: string;
  blessings: BlessingEntry[];
  onAddBlessing: (entry: Omit<BlessingEntry, 'id' | 'time'>) => void;
  onOpenAdmin: () => void;
}

export function HeritageWishesAndFooter({
  lang,
  guestName,
  blessings,
  onAddBlessing,
  onOpenAdmin,
}: HeritageWishesProps) {
  const [wishName, setWishName] = useState(guestName === 'Esteemed Guest' ? '' : guestName);
  const [wishRelation, setWishRelation] = useState('');
  const [wishMessage, setWishMessage] = useState('');
  const [wishAck, setWishAck] = useState('');

  const handleSubmitBlessing = (e: FormEvent) => {
    e.preventDefault();
    if (!wishMessage.trim()) return;
    onAddBlessing({
      name:
        wishName.trim() ||
        (guestName && guestName !== 'Esteemed Guest' ? guestName : null) ||
        (lang === 'ta' ? 'குடும்ப நலம் விரும்பி' : 'Family Well-Wisher'),
      relation: wishRelation.trim() || (lang === 'ta' ? 'குடும்ப நலம் விரும்பி' : 'Family & Friends'),
      message: wishMessage.trim(),
    });
    setWishMessage('');
    soundFx.playTempleBell();
    setWishAck(
      lang === 'ta'
        ? 'உங்கள் மங்கள வாழ்த்து பலகையில் சேர்க்கப்பட்டது!'
        : 'Your blessing has been posted to the wall!'
    );
  };

  const handleWhatsAppWish = () => {
    const text = encodeURIComponent(
      `🌸 Heartfelt wedding wishes to M. Thirisha & Siva Shankar from ${
        wishName.trim() || guestName
      }! ${wishMessage.trim() || 'Wishing you a lifetime of harmony and blessings!'} ${WEDDING_CONFIG.websiteUrl}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <ContinuitySection3D
        id="wishes"
        className="relative py-16 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 248, 235, 0.78), rgba(255, 248, 235, 0.88)), url('${HERITAGE_ASSETS.wishesBg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.22em] text-[#631226] uppercase">
              ❖ {lang === 'ta' ? 'வழிகாட்டுதல் & வாழ்த்துகள்' : 'Etiquette & Digital Blessing Wall'} ❖
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#3a0815] sm:text-5xl">
              {lang === 'ta' ? 'பாரம்பரியம் & வாழ்த்துப் பலகை' : 'Wedding Traditions & Wishes'}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card-3d-tilt rounded-3xl border border-[#c9932d]/55 bg-[#fffaf0]/95 p-6 shadow-xl sm:p-8">
              <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-[#3a0815]">
                <span aria-hidden="true">🪔</span>
                <span>{lang === 'ta' ? 'திருமண மரபுகள் & குறிப்புகள்' : 'Wedding Traditions & Tips'}</span>
              </h3>
              <div className="mt-5 space-y-4 text-sm text-[#3b1d16]">
                <div>
                  <strong className="text-[#631226]">
                    👘 {lang === 'ta' ? 'பாரம்பரிய உடை' : 'Traditional Attire Suggested'}
                  </strong>
                  <p className="mt-1 text-xs leading-relaxed text-[#6e463a]">
                    {lang === 'ta'
                      ? 'பெண்களுக்குப் பட்டுப் புடவை மற்றும் ஆண்களுக்கு வேஷ்டி / குர்தா பாரம்பரிய உடை பரிந்துரைக்கப்படுகிறது.'
                      : 'We warmly encourage traditional South Indian attire — vibrant Silk Pattu Sarees for ladies and Veshti / Kurta for gentlemen.'}
                  </p>
                </div>
                <div>
                  <strong className="text-[#631226]">
                    ⏰ {lang === 'ta' ? 'சுப முகூர்த்த நேரம்' : 'Auspicious Timings'}
                  </strong>
                  <p className="mt-1 text-xs leading-relaxed text-[#6e463a]">
                    {lang === 'ta'
                      ? 'திருமாங்கல்ய தாரணம் காலை 6:15 முதல் 7:15 வரை நடைபெறும். காலை 6:00 மணிக்கு முன்னதாக வருகை தரவும்.'
                      : 'Mangalya Dharanam takes place between 6:15 AM and 7:15 AM. Kindly be seated in the mandapam by 6:00 AM.'}
                  </p>
                </div>
                <div>
                  <strong className="text-[#631226]">
                    🍌 {lang === 'ta' ? 'மதுரை கல்யாண விருந்து' : 'Grand Madurai Kalyana Virundhu'}
                  </strong>
                  <p className="mt-1 text-xs leading-relaxed text-[#6e463a]">
                    {lang === 'ta'
                      ? 'வாழை இலையில் பரிமாறப்படும் பாரம்பரிய உணவுடன் மதுரை ஜிகர்தண்டா மற்றும் இனிப்பு வகைகள்.'
                      : 'Authentic Madurai feast served on fresh plantain leaves with Madurai Jigarthanda and traditional sweets.'}
                  </p>
                </div>
                <div>
                  <strong className="text-[#631226]">
                    📸 {lang === 'ta' ? 'புகைப்படங்கள் & ஆசிகள்' : 'Photography & Blessings'}
                  </strong>
                  <p className="mt-1 text-xs leading-relaxed text-[#6e463a]">
                    {lang === 'ta'
                      ? '#ThirishaWedsSivaShankar — உங்கள் இனிய மதுரை தருணங்களையும் அழைப்பிதழையும் பகிருங்கள்!'
                      : '#ThirishaWedsSivaShankar — share your joyful Madurai moments & invitation cards!'}
                  </p>
                </div>
              </div>
            </div>

            <div className="card-3d-tilt rounded-3xl border border-[#c9932d]/55 bg-[#fffaf0]/95 p-6 shadow-xl sm:p-8">
              <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-[#3a0815]">
                <Heart className="h-5 w-5 text-[#631226]" />
                <span>{lang === 'ta' ? 'டிஜிட்டல் வாழ்த்துப் பலகை' : 'Digital Blessing Wall'}</span>
              </h3>

              <div className="mt-4 max-h-56 space-y-2.5 overflow-y-auto pr-1">
                {blessings.map((b) => (
                  <div
                    key={b.id}
                    className="rounded-xl border border-[#c9932d]/35 bg-white p-3.5 shadow-sm"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <strong className="text-[#631226]">{b.name}</strong>
                      <span className="text-[#6e463a]">
                        {b.relation} · {b.time}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed italic text-[#3b1d16]">{b.message}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmitBlessing} className="mt-4 space-y-2.5">
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <input
                    type="text"
                    value={wishName}
                    onChange={(e) => setWishName(e.target.value)}
                    placeholder={lang === 'ta' ? 'உங்கள் முழுப் பெயர்' : 'Your Full Name'}
                    className="rounded-xl border border-[#c9932d] bg-white px-3.5 py-2.5 text-sm text-[#3b1d16] focus:border-[#631226] focus:outline-none"
                  />
                  <input
                    type="text"
                    value={wishRelation}
                    onChange={(e) => setWishRelation(e.target.value)}
                    placeholder={lang === 'ta' ? 'உறவு / ஊர்' : 'Relation / City'}
                    className="rounded-xl border border-[#c9932d] bg-white px-3.5 py-2.5 text-sm text-[#3b1d16] focus:border-[#631226] focus:outline-none"
                  />
                </div>
                <textarea
                  rows={2}
                  value={wishMessage}
                  onChange={(e) => setWishMessage(e.target.value)}
                  placeholder={
                    lang === 'ta'
                      ? 'மணமக்களுக்கான உங்கள் அன்பான ஆசிகளை எழுதுங்கள்...'
                      : 'Write your wedding blessings, prayer, or wishes here...'
                  }
                  className="w-full rounded-xl border border-[#c9932d] bg-white px-3.5 py-2.5 text-sm text-[#3b1d16] focus:border-[#631226] focus:outline-none"
                />
                <div className="flex flex-wrap gap-2.5">
                  <button
                    type="submit"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e6b247] to-[#ba8222] px-5 py-2.5 text-xs font-bold text-[#310d15] shadow transition hover:brightness-105 cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{lang === 'ta' ? 'வாழ்த்து சமர்ப்பி' : 'Post on Blessing Wall'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppWish}
                    className="rounded-full border border-[#c9932d] bg-[#631226] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#7d1731] cursor-pointer"
                  >
                    💬 WhatsApp
                  </button>
                </div>
                {wishAck && <p className="text-center text-xs font-bold text-[#631226]">{wishAck}</p>}
              </form>
            </div>
          </div>
        </div>
      </ContinuitySection3D>

      <section
        id="thanks"
        className="relative py-20 text-center text-[#fff4db]"
        style={{
          backgroundImage: `linear-gradient(rgba(43, 7, 17, 0.78), rgba(43, 7, 17, 0.90)), url('${HERITAGE_ASSETS.thanksCourtyard}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="font-tamil text-lg font-bold text-[#ffd87d] sm:text-2xl">
            வந்தாரை வாழவைக்கும் மதுரை · தங்கள் வருகையே எங்கள் மகிழ்ச்சி
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-5xl">
            {lang === 'ta' ? 'மனமார்ந்த நன்றி' : 'With Heartfelt Gratitude'}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed italic text-[#faebd7]">
            {lang === 'ta'
              ? '“எங்கள் இல்லத் திருமணப் பெருவிழாவில் கலந்துகொண்டு மணமக்களை ஆசீர்வதித்தமைக்கு உளமார்ந்த நன்றிகள். உங்கள் அன்பும் ஆசிகளும் என்றும் எங்கள் வாழ்வை ஒளிரச் செய்யும்.”'
              : '“We express our deepest thanks for being a part of this blessed milestone in our lives. Your love, presence, and timeless blessings will illuminate our shared future forever.”'}
          </p>
          <div aria-hidden="true" className="my-5 text-lg text-[#f7d779]">
            ❧ ❖ ❧
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="card-3d-tilt rounded-2xl border border-[#f6d87c]/40 bg-white/10 p-5">
              <p className="text-xs font-bold tracking-wider text-[#ffd87d] uppercase">
                {lang === 'ta' ? 'மணமகள் குடும்பத் தொடர்பு' : "The Bride's Family Coordinator"}
              </p>
              <p className="mt-1 font-display text-xl font-bold text-white">
                {WEDDING_CONFIG.brideCoordName}
              </p>
              <div className="mt-3 flex justify-center gap-3">
                <a
                  href={`tel:${WEDDING_CONFIG.brideCoordPhone}`}
                  className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#f7df94] to-[#c9932d] px-4 py-1.5 text-xs font-bold text-[#2b0b14]"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>{WEDDING_CONFIG.brideCoordPhone}</span>
                </a>
                <a
                  href={`https://wa.me/91${WEDDING_CONFIG.brideCoordPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#f7df94]/60 px-4 py-1.5 text-xs font-bold text-[#f7df94] hover:bg-white/10"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            <div className="card-3d-tilt rounded-2xl border border-[#f6d87c]/40 bg-white/10 p-5">
              <p className="text-xs font-bold tracking-wider text-[#ffd87d] uppercase">
                {lang === 'ta' ? 'மணமகன் குடும்பத் தொடர்பு' : "The Groom's Family Coordinator"}
              </p>
              <p className="mt-1 font-display text-xl font-bold text-white">
                {WEDDING_CONFIG.groomCoordName}
              </p>
              <div className="mt-3 flex justify-center gap-3">
                <a
                  href={`tel:${WEDDING_CONFIG.groomCoordPhone}`}
                  className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#f7df94] to-[#c9932d] px-4 py-1.5 text-xs font-bold text-[#2b0b14]"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>{WEDDING_CONFIG.groomCoordPhone}</span>
                </a>
                <a
                  href={`https://wa.me/91${WEDDING_CONFIG.groomCoordPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#f7df94]/60 px-4 py-1.5 text-xs font-bold text-[#f7df94] hover:bg-white/10"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-full border border-[#f6d87c]/70 bg-white/15 px-6 py-2.5 text-xs font-bold text-[#fff6db] transition hover:bg-white/25"
            >
              <span>↑ {lang === 'ta' ? 'மேலே செல்லவும்' : 'Back to Top'}</span>
            </a>
            <button
              type="button"
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#f7df94]/60 bg-[#3a0815]/90 px-5 py-2.5 text-xs font-bold text-[#f7df94] transition hover:bg-[#520d1f] cursor-pointer"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{lang === 'ta' ? 'குடும்ப நிர்வாகப் பகுதி (Admin)' : 'Family Admin Studio'}</span>
            </button>
          </div>
        </div>
      </section>

      <ContinuitySection3D
        id="notes"
        className="relative py-14"
        style={{
          backgroundImage: `linear-gradient(rgba(253, 246, 230, 0.86), rgba(253, 246, 230, 0.94)), url('${HERITAGE_ASSETS.page7FamilyFrame}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.22em] text-[#631226] uppercase">
            <Users className="h-4 w-4 text-[#c9932d]" />
            <span>{lang === 'ta' ? '2018 குடும்பச் சந்திப்பு நினைவு' : 'Family Reunion Note'}</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold text-[#3a0815]">
            {lang === 'ta' ? 'ஒன்றாகத் தொடங்கும் புதிய அத்தியாயம்' : 'A New Chapter Together'}
          </h2>
          <div aria-hidden="true" className="mt-2 text-lg text-[#c9932d]">
            ❧ ❖ ❧
          </div>
          <div className="card-3d-tilt mt-5 space-y-3 rounded-3xl border border-[#c9932d]/55 bg-white/95 p-6 text-sm leading-relaxed text-[#3b1d16] shadow-lg sm:p-8">
            <p className="font-tamil text-[#631226]" lang="ta">
              2018-ஆம் ஆண்டு நம் கடைசி சந்திப்பிற்குப் பிறகு, மீண்டும் ஒன்றாகக் கூடுவதில் மகிழ்ச்சி
              அடைகிறோம். அன்பு, நினைவுகள், ஆசிகள் மற்றும் ஒற்றுமையுடன் ஒரு புதிய அத்தியாயத்தைத்
              தொடங்குவோம்.
            </p>
            <p>
              After our last gathering in 2018, we are delighted to come together once again and
              begin a new chapter filled with love, memories, blessings, and togetherness.
            </p>
          </div>
          <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-[#6e463a]">
            <Sparkles className="h-3.5 w-3.5 text-[#c9932d]" />
            <span>
              {lang === 'ta'
                ? 'திருமூர்த்தி வீட்டு திருக்கல்யாணம் · MATD Digital Groups'
                : 'Thirumoorthi Veettu Thirukalyanam · Presented by MATD Digital Groups'}
            </span>
          </p>
        </div>
      </ContinuitySection3D>
    </>
  );
}
