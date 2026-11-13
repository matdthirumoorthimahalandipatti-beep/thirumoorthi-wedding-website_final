import { useEffect, useState } from 'react';
import {
  Calendar,
  DoorOpen,
  Download,
  Globe,
  Pause,
  Play,
  ScrollText,
  Shuffle,
  Sparkles,
  Tv,
  Volume2,
  VolumeX,
} from 'lucide-react';
import {
  ALBUM_PHOTOS,
  DIRECTORY_PERSONS,
  FAMILY_MEMBERS,
  HERITAGE_ASSETS,
  INITIAL_BLESSINGS,
  INITIAL_JUKEBOX_TRACKS,
  ORACLE_FORTUNES,
  WEDDING_CONFIG,
  type AlbumPhoto,
  type BlessingEntry,
  type DirectoryPerson,
  type FamilyMemberPhotoCard,
  type JukeboxTrack,
  type Lang,
  type OracleFortune,
  type TeamSide,
} from './data/weddingData';
import { soundFx, type MusicPlayerState } from './utils/soundFx';
import { githubSync } from './utils/githubSync';
import Petal3DFloat from './components/Petal3DFloat';
import EntranceDoorsPortal from './components/EntranceDoorsPortal';
import AdminPortalModal, { type CouplePhotosState } from './components/AdminPortalModal';
import {
  HeritageUpperSections,
  HeritageDirectoryAndAlbum,
  HeritageWishesAndFooter,
} from './components/WeddingHeritageSections';
import WeddingGamesArena from './components/WeddingGamesArena';
import SacredOracle from './components/SacredOracle';
import SangeetJukebox from './components/SangeetJukebox';

const STORAGE_KEYS = {
  guestName: 'tvm_guest_name_v1',
  team: 'tvm_guest_team_v1',
  score: 'tvm_game_score_v1',
  ponnuScore: 'tvm_ponnu_score_v1',
  mappillaiScore: 'tvm_mappillai_score_v1',
  jukebox: 'tvm_sangeet_jukebox_v1',
  blessings: 'tvm_blessings_wall_v1',
  portalDismissed: 'tvm_portal_dismissed_v1',
  couplePhotos: 'tvm_admin_couple_photos_v2',
  familyMembers: 'tvm_admin_family_members_v3',
  albumPhotos: 'tvm_admin_album_photos_v2',
  directoryPersons: 'tvm_admin_directory_v4',
};

interface CountdownParts {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isWeddingDay: boolean;
}

function getMuhurthamCountdown(): CountdownParts {
  const target = new Date(WEDDING_CONFIG.muhurthamIso).getTime();
  const diff = target - Date.now();
  if (diff <= 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00', isWeddingDay: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const pad = (n: number) => String(n).padStart(2, '0');
  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    isWeddingDay: false,
  };
}

export default function App() {
  const [lang, setLang] = useState<Lang>('ta');
  const [musicState, setMusicState] = useState<MusicPlayerState>(() => soundFx.getState());
  const muted = musicState.muted;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    return soundFx.subscribe(setMusicState);
  }, []);

  const [guestName, setGuestName] = useState<string>(() => {
    try {
      const urlGuest = new URLSearchParams(window.location.search).get('guest');
      if (urlGuest?.trim()) return urlGuest.trim();
      return localStorage.getItem(STORAGE_KEYS.guestName) || 'Esteemed Guest';
    } catch {
      return 'Esteemed Guest';
    }
  });

  const [team, setTeam] = useState<TeamSide>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.team);
      return saved === 'mappillai' ? 'mappillai' : 'ponnu';
    } catch {
      return 'ponnu';
    }
  });

  const [showPortal, setShowPortal] = useState<boolean>(true);

  const [totalScore, setTotalScore] = useState<number>(() => {
    try {
      return Number(localStorage.getItem(STORAGE_KEYS.score)) || 0;
    } catch {
      return 0;
    }
  });

  const [ponnuScore, setPonnuScore] = useState<number>(() => {
    try {
      return Number(localStorage.getItem(STORAGE_KEYS.ponnuScore)) || 240;
    } catch {
      return 240;
    }
  });

  const [mappillaiScore, setMappillaiScore] = useState<number>(() => {
    try {
      return Number(localStorage.getItem(STORAGE_KEYS.mappillaiScore)) || 225;
    } catch {
      return 225;
    }
  });

  const [selectedFortune, setSelectedFortune] = useState<OracleFortune>(ORACLE_FORTUNES[0]);

  const [jukeboxTracks, setJukeboxTracks] = useState<JukeboxTrack[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.jukebox);
      if (saved) {
        const parsed = JSON.parse(saved) as JukeboxTrack[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((t) =>
            t.id === 'tr-1' && (t.youtubeId === 'fRD_3vJagxk' || t.title.includes('Vaathi'))
              ? INITIAL_JUKEBOX_TRACKS[0]
              : t
          );
        }
      }
    } catch {
      // fall back to initial seed
    }
    return INITIAL_JUKEBOX_TRACKS;
  });

  const [blessings, setBlessings] = useState<BlessingEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.blessings);
      if (saved) {
        const parsed = JSON.parse(saved) as BlessingEntry[];
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fall back to initial seed
    }
    return INITIAL_BLESSINGS;
  });

  const [pageScrollPercent, setPageScrollPercent] = useState(0);
  const [countdown, setCountdown] = useState<CountdownParts>(() => getMuhurthamCountdown());
  const [heroImgSrc, setHeroImgSrc] = useState(HERITAGE_ASSETS.coupleSectionBg);
  const [showAdminModal, setShowAdminModal] = useState(false);

  const [couplePhotos, setCouplePhotos] = useState<CouplePhotosState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.couplePhotos);
      if (saved) {
        const parsed = JSON.parse(saved) as CouplePhotosState;
        if (parsed?.bridePhoto && parsed?.groomPhoto) return parsed;
      }
    } catch {
      // fallback
    }
    return {
      bridePhoto: HERITAGE_ASSETS.bridePhoto,
      groomPhoto: HERITAGE_ASSETS.groomPhoto,
    };
  });

  const [familyMembers, setFamilyMembers] = useState<FamilyMemberPhotoCard[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.familyMembers);
      if (saved) {
        const parsed = JSON.parse(saved) as FamilyMemberPhotoCard[];
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fallback
    }
    return FAMILY_MEMBERS;
  });

  const [albumPhotos, setAlbumPhotos] = useState<AlbumPhoto[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.albumPhotos);
      if (saved) {
        const parsed = JSON.parse(saved) as AlbumPhoto[];
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fallback
    }
    return ALBUM_PHOTOS;
  });

  const [directoryPersons, setDirectoryPersons] = useState<DirectoryPerson[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.directoryPersons);
      if (saved) {
        const parsed = JSON.parse(saved) as DirectoryPerson[];
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fallback
    }
    return DIRECTORY_PERSONS;
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getMuhurthamCountdown());
    }, 1000);

    // Live Sync with GitHub: Load initial community leaderboard scores
    void githubSync.fetchLeaderboard().then((data) => {
      if (data) {
        if (typeof data.ponnuScore === 'number' && data.ponnuScore > 0) {
          setPonnuScore((prev) => Math.max(prev, data.ponnuScore));
        }
        if (typeof data.mappillaiScore === 'number' && data.mappillaiScore > 0) {
          setMappillaiScore((prev) => Math.max(prev, data.mappillaiScore));
        }
      }
    });

    // Live Sync with GitHub: Load remote admin directory updates
    void githubSync.fetchAdminData().then((adminData) => {
      if (adminData) {
        const deletedSet = new Set(adminData.deletedPersonIds || []);
        const customList = adminData.customPersons || [];
        setDirectoryPersons((prev) => {
          const filtered = prev.filter((p) => !deletedSet.has(p.id));
          const existingIds = new Set(filtered.map((p) => p.id));
          const merged = [...filtered];
          for (const c of customList) {
            if (!existingIds.has(c.id) && !deletedSet.has(c.id)) {
              merged.push(c);
            }
          }
          return merged;
        });
      }
    });

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const maxDoc = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setPageScrollPercent(Math.min(100, Math.max(0, (window.scrollY / maxDoc) * 100)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.guestName, guestName);
      localStorage.setItem(STORAGE_KEYS.team, team);
      localStorage.setItem(STORAGE_KEYS.score, String(totalScore));
      localStorage.setItem(STORAGE_KEYS.ponnuScore, String(ponnuScore));
      localStorage.setItem(STORAGE_KEYS.mappillaiScore, String(mappillaiScore));
    } catch {
      // ignore storage quota errors
    }
  }, [guestName, team, totalScore, ponnuScore, mappillaiScore]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.jukebox, JSON.stringify(jukeboxTracks));
    } catch {
      // ignore
    }
  }, [jukeboxTracks]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.blessings, JSON.stringify(blessings));
    } catch {
      // ignore
    }
  }, [blessings]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.couplePhotos, JSON.stringify(couplePhotos));
      localStorage.setItem(STORAGE_KEYS.familyMembers, JSON.stringify(familyMembers));
      localStorage.setItem(STORAGE_KEYS.albumPhotos, JSON.stringify(albumPhotos));
      localStorage.setItem(STORAGE_KEYS.directoryPersons, JSON.stringify(directoryPersons));
    } catch {
      // ignore storage quota errors
    }
  }, [couplePhotos, familyMembers, albumPhotos, directoryPersons]);

  const handleResetAdminDefaults = () => {
    setCouplePhotos({
      bridePhoto: HERITAGE_ASSETS.bridePhoto,
      groomPhoto: HERITAGE_ASSETS.groomPhoto,
    });
    setFamilyMembers(FAMILY_MEMBERS);
    setAlbumPhotos(ALBUM_PHOTOS);
    setDirectoryPersons(DIRECTORY_PERSONS);
  };

  const handleToggleMusicDock = () => {
    if (musicState.isPlaying) {
      soundFx.setMuted(true);
    } else {
      soundFx.startRandomCollection(true);
    }
  };

  const handleNextRandomSong = () => {
    soundFx.nextRandomTrack();
  };

  const handleUpdateGuest = (name: string, nextTeam: TeamSide) => {
    setGuestName(name);
    setTeam(nextTeam);
  };

  const handleEnterPortal = () => {
    setShowPortal(false);
  };

  const handleAddPoints = (pts: number, gameTitle?: string) => {
    setTotalScore((s) => s + pts);
    let nextPonnu = ponnuScore;
    let nextMappillai = mappillaiScore;
    if (team === 'ponnu') {
      nextPonnu = ponnuScore + pts;
      setPonnuScore(nextPonnu);
    } else {
      nextMappillai = mappillaiScore + pts;
      setMappillaiScore(nextMappillai);
    }
    // Update GitHub repository leaderboard whenever someone completes a game or wins points!
    githubSync.triggerLeaderboardUpdate(nextPonnu, nextMappillai, {
      guestName: effectiveGuest,
      team,
      points: pts,
      game: gameTitle || 'திருமண விளையாட்டு',
    });
  };

  const handleAddTrack = (track: Omit<JukeboxTrack, 'id' | 'votes' | 'addedAt'>) => {
    const newTrack: JukeboxTrack = {
      ...track,
      id: `tr-${Date.now()}`,
      votes: 1,
      addedAt: Date.now(),
    };
    setJukeboxTracks((prev) => [newTrack, ...prev]);
  };

  const handleUpvoteTrack = (id: string) => {
    setJukeboxTracks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, votes: t.votes + 1 } : t))
    );
  };

  const handleAddBlessing = (entry: Omit<BlessingEntry, 'id' | 'time'>) => {
    const item: BlessingEntry = {
      ...entry,
      id: `wish-${Date.now()}`,
      time: lang === 'ta' ? 'இப்போது' : 'Just now',
    };
    setBlessings((prev) => [item, ...prev]);
  };

  const handleDownloadIcs = () => {
    soundFx.playChime();
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Thirumoorthi Thirukalyanam//EN',
      'BEGIN:VEVENT',
      'UID:thirisha-siva-20261122@thirumoorthi.local',
      'DTSTAMP:20260101T000000Z',
      'DTSTART:20261122T004500Z',
      'DTEND:20261122T030000Z',
      'SUMMARY:M. Thirisha & Siva Shankar Wedding (Thirumoorthi Veettu Thirukalyanam)',
      'DESCRIPTION:Sacred Muhurtham 6:15-7:15 AM IST followed by Traditional Kalyana Virundhu at 8:00 AM.',
      'LOCATION:MATD Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti, Madurai',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Thirisha-Siva-Wedding-22Nov2026.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.setTimeout(() => URL.revokeObjectURL(url), 1200);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const effectiveGuest =
    guestName.trim() && guestName.trim() !== 'Esteemed Guest'
      ? guestName.trim()
      : lang === 'ta'
        ? 'அன்புள்ள விருந்தினர்கள்'
        : 'Esteemed Guest';

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden text-[#3b1d16] selection:bg-[#c9932d] selection:text-[#24050d]">
      {/* Scroll Depth Indicator */}
      <div
        aria-hidden="true"
        className="scroll-progress-bar"
        style={{ width: `${pageScrollPercent}%` }}
      />

      {/* Ambient Real 3D Rose Petals Layer */}
      <Petal3DFloat />

      {/* Persistent Side Floating Dock — Language & Random Music accessible throughout the website */}
      {!showPortal && (
        <div
          aria-label={lang === 'ta' ? 'மொழி மற்றும் இசை கட்டுப்பாடுகள்' : 'Language and Music Controls'}
          className="fixed bottom-4 right-3 z-40 flex flex-col items-end gap-1.5 sm:bottom-auto sm:top-24 sm:right-4 sm:gap-2 floating-ui-dock"
        >
          <button
            type="button"
            onClick={() => setLang((prev) => (prev === 'en' ? 'ta' : 'en'))}
            title={lang === 'en' ? 'Switch to Tamil' : 'Switch to English'}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#c9932d]/80 bg-[#2b0711]/95 px-3 py-1.5 text-[11px] font-bold text-[#fff8eb] shadow-xl transition hover:border-[#f7df94] hover:bg-[#3a0815] cursor-pointer sm:px-3.5 sm:py-2 sm:text-xs"
          >
            <Globe className="h-3.5 w-3.5 shrink-0 text-[#f7df94]" />
            <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleToggleMusicDock}
              aria-label={
                musicState.isPlaying
                  ? lang === 'ta'
                    ? 'இசையை நிறுத்து'
                    : 'Pause wedding music'
                  : lang === 'ta'
                    ? 'திருமண இசையை இயக்கு'
                    : 'Play random wedding music'
              }
              title={
                musicState.isPlaying
                  ? `${lang === 'ta' ? musicState.currentTrack.titleTa : musicState.currentTrack.titleEn}`
                  : lang === 'ta'
                    ? 'ரேண்டம் திருமண பாடலை இயக்கு'
                    : 'Play random wedding song'
              }
              className="inline-flex items-center gap-1.5 rounded-full border border-[#c9932d]/80 bg-[#2b0711]/95 px-3 py-1.5 text-[11px] font-bold text-[#fff8eb] shadow-xl transition hover:border-[#f7df94] hover:bg-[#3a0815] cursor-pointer sm:px-3.5 sm:py-2 sm:text-xs"
            >
              {muted ? (
                <VolumeX className="h-3.5 w-3.5 shrink-0 text-[#f7df94]" />
              ) : musicState.isPlaying ? (
                <Pause className="h-3.5 w-3.5 shrink-0 text-[#f7df94]" />
              ) : (
                <Play className="h-3.5 w-3.5 shrink-0 text-[#f7df94]" />
              )}
              <span>
                {muted
                  ? lang === 'ta'
                    ? 'நிறுத்தம்'
                    : 'Muted'
                  : musicState.isPlaying
                    ? lang === 'ta'
                      ? 'இசை · நிறுத்து'
                      : 'Playing'
                    : lang === 'ta'
                      ? 'இசை இயக்கு'
                      : 'Play Music'}
              </span>
            </button>

            <button
              type="button"
              onClick={handleNextRandomSong}
              aria-label={lang === 'ta' ? 'அடுத்த ரேண்டம் பாடல்' : 'Play next random wedding song'}
              title={lang === 'ta' ? 'புதிய ரேண்டம் பாடல்' : 'Next random song'}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#c9932d]/80 bg-[#2b0711]/95 text-[#f7df94] shadow-xl transition hover:border-[#f7df94] hover:bg-[#3a0815] cursor-pointer sm:h-9 sm:w-9"
            >
              <Shuffle className="h-3.5 w-3.5" />
            </button>
          </div>

          {musicState.isPlaying && (
            <div className="hidden max-w-[190px] items-center gap-1.5 rounded-full border border-[#c9932d]/55 bg-[#24050d]/90 px-3 py-1 text-[10px] font-semibold text-[#f7df94] shadow-lg sm:inline-flex">
              <Volume2 className="h-3 w-3 shrink-0 animate-pulse text-[#f7df94]" />
              <span className="truncate">
                {lang === 'ta' ? musicState.currentTrack.titleTa : musicState.currentTrack.titleEn}
              </span>
            </div>
          )}
        </div>
      )}

      {/* 3D Temple Doors & Garland Video Intro Gate */}
      {showPortal && (
        <EntranceDoorsPortal
          lang={lang}
          guestName={guestName}
          team={team}
          onUpdateGuest={handleUpdateGuest}
          onEnter={handleEnterPortal}
        />
      )}

      {/* ====================================================================
          3-ZONE SINGLE-LINE STICKY TOPBAR
          [Brand Wordmark] — [5 Navigation Links] — [1 Primary CTA]
         ==================================================================== */}
      <header className="sticky top-0 z-40 h-16 border-b border-[#c9932d]/45 bg-[#2b0711]/95 px-4 text-[#fff8eb] shadow-lg sm:px-6">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4">
          <a
            href="#home"
            className="whitespace-nowrap shrink-0 font-display text-sm font-bold tracking-tight text-[#f7df94] sm:text-base"
          >
            {lang === 'ta'
              ? 'திருமூர்த்தி வீட்டு திருக்கல்யாணம்'
              : 'Thirumoorthi Veettu Thirukalyanam'}
          </a>

          <nav aria-label="Wedding Sections" className="hidden items-center gap-6 md:flex">
            <a
              href="#couple"
              className="whitespace-nowrap shrink-0 text-xs font-semibold tracking-wider text-[#f3d9ad] uppercase transition hover:text-[#f7df94]"
            >
              {lang === 'ta' ? 'மணமக்கள்' : 'Couple'}
            </a>
            <a
              href="#invitation"
              className="whitespace-nowrap shrink-0 text-xs font-semibold tracking-wider text-[#f3d9ad] uppercase transition hover:text-[#f7df94]"
            >
              {lang === 'ta' ? 'அழைப்பிதழ்' : 'Invitation'}
            </a>
            <a
              href="#games"
              className="whitespace-nowrap shrink-0 text-xs font-semibold tracking-wider text-[#f3d9ad] uppercase transition hover:text-[#f7df94]"
            >
              {lang === 'ta' ? 'விளையாட்டு' : 'Games'}
            </a>
            <a
              href="#sangeet"
              className="whitespace-nowrap shrink-0 text-xs font-semibold tracking-wider text-[#f3d9ad] uppercase transition hover:text-[#f7df94]"
            >
              {lang === 'ta' ? 'சங்கீத் DJ' : 'Sangeet DJ'}
            </a>
            <a
              href="#album"
              className="whitespace-nowrap shrink-0 text-xs font-semibold tracking-wider text-[#f3d9ad] uppercase transition hover:text-[#f7df94]"
            >
              {lang === 'ta' ? 'ஆல்பம்' : 'Album'}
            </a>
          </nav>

          <a
            href="#invitation"
            className="whitespace-nowrap shrink-0 rounded-full bg-gradient-to-r from-[#f7df94] via-[#c9932d] to-[#b3822a] px-4 py-1.5 text-xs font-bold text-[#24050d] shadow transition hover:brightness-105"
          >
            {lang === 'ta' ? 'மங்கள அழைப்பு' : 'Wedding Invite'}
          </a>
        </div>
      </header>

      {/* ====================================================================
          MADURAI COUPLE HERO + TRANSPARENT 3D CONTINUITY OVERLAY
         ==================================================================== */}
      <section
        id="home"
        className="relative flex w-full min-h-[calc(100vh-4rem)] flex-col justify-between overflow-hidden bg-[#24050d] text-[#fff8eb]"
        style={{
          backgroundImage: `url('${heroImgSrc}'), url('${HERITAGE_ASSETS.heroMandapamCouple}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* User-Requested Couple Mandapam Heritage Background */}
        <img
          src={heroImgSrc}
          alt="M. Thirisha and Siva Shankar seated inside Madurai temple mandapam"
          onError={() => {
            if (heroImgSrc !== HERITAGE_ASSETS.heroMandapamCouple) {
              setHeroImgSrc(HERITAGE_ASSETS.heroMandapamCouple);
            }
          }}
          className="absolute inset-0 z-0 h-full w-full object-cover object-top sm:object-center"
        />

        {/* Contrast Gradient Scrim Keeping Center Couple & Temple Vivid Across Complete Page */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#1e040c]/50 via-transparent to-[#1e040c]/70"
        />

        {/* Guest Personalization & Temple Doors Bar */}
        <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 pt-5 pr-24 sm:px-6 sm:pr-28">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#f3d9ad]">
            <span>{lang === 'ta' ? 'அன்புடன் வரவேற்கிறோம்:' : 'Cordially Welcoming:'}</span>
            <strong className="text-[#f7df94]">{effectiveGuest}</strong>
            <span className="text-[#c9932d]/60">·</span>
            <button
              type="button"
              onClick={() => setShowPortal(true)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#f7df94] underline-offset-4 hover:underline cursor-pointer"
            >
              <DoorOpen className="h-3.5 w-3.5" />
              <span>{lang === 'ta' ? 'கோயில் வாயில்' : 'Temple Doors'}</span>
            </button>
          </div>
        </div>

        {/* Centerpiece Copy Matching Original Madurai Format */}
        <div className="relative z-20 mx-auto my-auto max-w-4xl px-4 py-10 text-center sm:px-6">
          {countdown.isWeddingDay && (
            <div className="mb-4 rounded-xl border border-[#f7df94]/70 bg-[#4e0d20]/90 px-4 py-3 text-center shadow-lg">
              <p className="text-xs font-bold tracking-widest text-[#f7df94] uppercase">
                ✨ {lang === 'ta' ? 'இன்று திருக்கல்யாண நன்னாள்' : 'TODAY WE CELEBRATE'} ✨
              </p>
              <p className="mt-1 font-display text-lg font-bold text-white">
                {lang === 'ta'
                  ? 'அருள்மிகு திருக்கல்யாண வைபவம்'
                  : 'Arulmigu Thirukalyana Vaibhavam'}
              </p>
            </div>
          )}

          <p className="text-xs font-semibold tracking-[0.18em] text-[#f7df94] uppercase">
            {lang === 'ta' ? WEDDING_CONFIG.deitiesTa : WEDDING_CONFIG.deities}
          </p>

          <h2 className="mt-3 font-display text-2xl leading-snug font-extrabold tracking-wide text-[#f7df94] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] sm:text-4xl lg:text-5xl">
            {lang === 'ta' ? WEDDING_CONFIG.familyFunctionTa : WEDDING_CONFIG.familyFunction}
          </h2>

          <h1 className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)] sm:text-5xl lg:text-6xl">
            {lang === 'ta' ? WEDDING_CONFIG.brideTa : WEDDING_CONFIG.bride}{' '}
            <span className="mx-2 font-normal italic text-[#f7df94]">
              {lang === 'ta' ? 'மற்றும்' : 'weds'}
            </span>{' '}
            {lang === 'ta' ? WEDDING_CONFIG.groomTa : WEDDING_CONFIG.groomShort}
          </h1>

          <p className="mt-4 text-sm font-semibold text-[#f7df94] sm:text-base">
            {lang === 'ta'
              ? `${WEDDING_CONFIG.dateDisplayTa} · சுப முகூர்த்தம்: ${WEDDING_CONFIG.muhurthamTimeTa} · விருந்து: ${WEDDING_CONFIG.feastTimeTa}`
              : `${WEDDING_CONFIG.dateDisplayEn} · Muhurtham: ${WEDDING_CONFIG.muhurthamTimeEn} · Feast: ${WEDDING_CONFIG.feastTimeEn}`}
          </p>
          <p className="mt-1 text-xs text-[#f3d9ad]/90 sm:text-sm">
            {lang === 'ta' ? WEDDING_CONFIG.venueFullTa : WEDDING_CONFIG.venueFullEn}
          </p>

          {/* Real-time Countdown to Sacred Muhurtham */}
          <div
            aria-label={lang === 'ta' ? 'சுப முகூர்த்த நேர எண்ணிக்கை' : 'Countdown to auspicious Muhurtham'}
            className="mx-auto mt-6 grid max-w-md grid-cols-4 gap-2.5 sm:gap-3"
          >
            {[
              { value: countdown.days, labelEn: 'Days', labelTa: 'நாட்கள்' },
              { value: countdown.hours, labelEn: 'Hours', labelTa: 'மணி' },
              { value: countdown.minutes, labelEn: 'Minutes', labelTa: 'நிமிடம்' },
              { value: countdown.seconds, labelEn: 'Seconds', labelTa: 'விநாடி' },
            ].map((item) => (
              <div
                key={item.labelEn}
                className="rounded-xl border border-[#c9932d]/55 bg-[#24050d]/85 px-2 py-3 shadow-lg"
              >
                <div className="font-mono-num text-2xl font-bold text-[#f7df94] sm:text-3xl">
                  {item.value}
                </div>
                <div className="mt-0.5 text-[11px] font-semibold tracking-wider text-[#f3d9ad]/85 uppercase">
                  {lang === 'ta' ? item.labelTa : item.labelEn}
                </div>
              </div>
            ))}
          </div>

          {/* Calendar Actions */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=M.%20Thirisha%20%26%20Siva%20Shankar%20Wedding&dates=20261122T004500Z/20261122T030000Z&details=Sacred%20Muhurtham%20(6%3A15-7%3A15%20AM)%20and%20Kalyana%20Virundhu&location=MATD%20Thirumoorthi%20Mahal%2C%20Andipatti%20Bungalow%2C%20T.%20Vadipatti%2C%20Madurai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#f7df94]/50 bg-[#3a0815]/90 px-4 py-2 text-xs font-semibold text-[#f7df94] transition hover:bg-[#520d1f]"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>{lang === 'ta' ? 'Google Calendar-இல் சேர்க்க' : 'Add to Google Calendar'}</span>
            </a>

            <button
              type="button"
              onClick={handleDownloadIcs}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#c9932d]/50 bg-[#24050d]/85 px-4 py-2 text-xs font-semibold text-[#f3d9ad] transition hover:border-[#f7df94] hover:text-[#fff8eb] cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{lang === 'ta' ? 'நிகழ்வு கோப்பு (.ics)' : 'Download event file'}</span>
            </button>
          </div>

          {/* Live Broadcast Channels */}
          <div className="mt-5 flex flex-col items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.18em] text-[#f3d9ad]/85 uppercase">
              <Tv className="h-3.5 w-3.5 text-[#f7df94]" />
              <span>{lang === 'ta' ? 'நேரலை ஒளிபரப்பு' : 'Live Broadcast Channels'}</span>
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#c9932d]/40 bg-[#2b0711]/85 px-3 py-1.5 text-xs font-semibold text-[#fff8eb] transition hover:border-[#f7df94]"
              >
                ▶ YouTube Live
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#c9932d]/40 bg-[#2b0711]/85 px-3 py-1.5 text-xs font-semibold text-[#fff8eb] transition hover:border-[#f7df94]"
              >
                ▣ Instagram Live
              </a>
              <a
                href="https://zoom.us"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#c9932d]/40 bg-[#2b0711]/85 px-3 py-1.5 text-xs font-semibold text-[#fff8eb] transition hover:border-[#f7df94]"
              >
                📹 Zoom Meeting
              </a>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#invitation"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f7df94] via-[#c9932d] to-[#b3822a] px-6 py-3 text-sm font-bold text-[#24050d] shadow-xl transition hover:brightness-105"
            >
              <ScrollText className="h-4 w-4" />
              <span>{lang === 'ta' ? 'அழைப்பிதழ் பத்திரிகை' : 'Sacred Invitation'}</span>
            </a>

            <button
              type="button"
              onClick={() => scrollToSection('games')}
              className="inline-flex items-center gap-2 rounded-full border border-[#f7df94]/70 bg-[#3a0815]/90 px-6 py-3 text-sm font-bold text-[#f7df94] shadow-lg transition hover:bg-[#520d1f] cursor-pointer"
            >
              <Sparkles className="h-4 w-4" />
              <span>{lang === 'ta' ? 'விளையாட்டு' : 'Play Wedding Games'}</span>
            </button>

            <a
              href="#events"
              className="rounded-full border border-[#c9932d]/55 bg-[#24050d]/85 px-5 py-3 text-sm font-semibold text-[#fff8eb] transition hover:border-[#f7df94]"
            >
              {lang === 'ta' ? 'நிகழ்வு நிரல்' : 'Events Schedule'}
            </a>
          </div>
        </div>

        {/* Bottom Scroll Prompt */}
        <div className="relative z-20 pb-5 text-center text-xs font-semibold tracking-[0.2em] text-[#f3d9ad]/80 uppercase">
          {lang === 'ta'
            ? '↓ கீழே நகர்த்தி மதுரை திருமண விழாவைத் தரிசிக்கவும் ↓'
            : '↓ Scroll to explore the Madurai wedding celebration ↓'}
        </div>
      </section>

      {/* ====================================================================
          3D CONTINUITY MAIN FLOW
          Upper Heritage -> People & Album -> Games -> Oracle -> DJ Jukebox -> Traditions & Wishes
         ==================================================================== */}
      <main className="continuity-3d-stage">
        {/* 1. Authentic Madurai Heritage Upper Sections: Couple, Venue, Families, Gold Patrika, Personalized QR Invitation, Events */}
        <HeritageUpperSections
          lang={lang}
          guestName={guestName}
          team={team}
          totalScore={totalScore}
          selectedFortune={selectedFortune}
          couplePhotos={couplePhotos}
          familyMembers={familyMembers}
          onChangeGuestName={setGuestName}
          onSelectTeam={setTeam}
          onOpenAdmin={() => setShowAdminModal(true)}
        />

        {/* 2. Age-Wise Family Directory & Photo Album */}
        <HeritageDirectoryAndAlbum
          lang={lang}
          directoryPersons={directoryPersons}
          albumPhotos={albumPhotos}
          onOpenAdmin={() => setShowAdminModal(true)}
        />

        {/* 3. Interactive Tamil Nadu Wedding Games Arena */}
        <WeddingGamesArena
          lang={lang}
          guestName={guestName}
          team={team}
          totalScore={totalScore}
          ponnuScore={ponnuScore}
          mappillaiScore={mappillaiScore}
          onAddPoints={handleAddPoints}
          onSelectTeam={setTeam}
          onProceedToOracle={() => scrollToSection('oracle')}
        />

        {/* 4. Sacred Wedding Oracle Finale (Right After Games) */}
        <SacredOracle
          lang={lang}
          guestName={guestName}
          selectedFortune={selectedFortune}
          onFortuneRevealed={setSelectedFortune}
          onJumpToInvitation={() => scrollToSection('invitation')}
        />

        {/* 5. Sangeet DJ Jukebox & YouTube Suggestion Box */}
        <SangeetJukebox
          lang={lang}
          guestName={guestName}
          tracks={jukeboxTracks}
          onAddTrack={handleAddTrack}
          onUpvoteTrack={handleUpvoteTrack}
        />

        {/* 6. Wedding Traditions & Wishes, Community Welcome, Gratitude & 2018 Notes */}
        <HeritageWishesAndFooter
          lang={lang}
          guestName={guestName}
          blessings={blessings}
          onAddBlessing={handleAddBlessing}
          onOpenAdmin={() => setShowAdminModal(true)}
        />
      </main>

      {/* Family Admin Studio Modal for updating photos & age-wise relatives/friends */}
      <AdminPortalModal
        lang={lang}
        isOpen={showAdminModal}
        onClose={() => setShowAdminModal(false)}
        couplePhotos={couplePhotos}
        onUpdateCouplePhotos={setCouplePhotos}
        familyMembers={familyMembers}
        onUpdateFamilyMembers={setFamilyMembers}
        albumPhotos={albumPhotos}
        onUpdateAlbumPhotos={setAlbumPhotos}
        directoryPersons={directoryPersons}
        onUpdateDirectoryPersons={setDirectoryPersons}
        onResetAll={handleResetAdminDefaults}
      />
    </div>
  );
}
