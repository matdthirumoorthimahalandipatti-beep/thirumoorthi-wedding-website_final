import { useEffect, useState, type FormEvent } from 'react';
import {
  Disc3,
  ExternalLink,
  Music2,
  Pause,
  Play,
  Plus,
  Shuffle,
  SkipBack,
  SkipForward,
  ThumbsUp,
  Volume2,
} from 'lucide-react';
import {
  extractYoutubeId,
  HERITAGE_ASSETS,
  QUICK_YOUTUBE_PICKS,
  WEDDING_AUDIO_COLLECTION,
  type JukeboxTrack,
  type Lang,
} from '../data/weddingData';
import { soundFx, type MusicPlayerState } from '../utils/soundFx';
import ContinuitySection3D from './ContinuitySection3D';

interface SangeetJukeboxProps {
  lang: Lang;
  guestName: string;
  tracks: JukeboxTrack[];
  onAddTrack: (track: Omit<JukeboxTrack, 'id' | 'votes' | 'addedAt'>) => void;
  onUpvoteTrack: (id: string) => void;
}

export default function SangeetJukebox({
  lang,
  guestName,
  tracks,
  onAddTrack,
  onUpvoteTrack,
}: SangeetJukeboxProps) {
  const [currentTrackId, setCurrentTrackId] = useState<string>(tracks[0]?.id || 'tr-1');
  const [autoPlayEmbed, setAutoPlayEmbed] = useState(false);
  const [playerState, setPlayerState] = useState<MusicPlayerState>(() => soundFx.getState());
  const [youtubeInput, setYoutubeInput] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [artistName, setArtistName] = useState('');
  const [suggestedBy, setSuggestedBy] = useState(
    guestName && guestName !== 'Esteemed Guest' ? guestName : ''
  );
  const [dedication, setDedication] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const [isLookingUp, setIsLookingUp] = useState(false);

  useEffect(() => {
    return soundFx.subscribe(setPlayerState);
  }, []);

  const sortedTracks = [...tracks].sort((a, b) => b.votes - a.votes || b.addedAt - a.addedAt);
  const activeIndex = Math.max(
    0,
    sortedTracks.findIndex((t) => t.id === currentTrackId)
  );
  const activeTrack = sortedTracks[activeIndex] || sortedTracks[0];

  const handleToggleBuiltInMusic = () => {
    if (playerState.isPlaying) {
      soundFx.pauseMusic();
    } else {
      soundFx.startRandomCollection(true);
    }
  };

  const handlePlayRandomSong = () => {
    soundFx.nextRandomTrack();
  };

  const handleSelectLocalTrack = (id: string) => {
    soundFx.playTrackById(id);
  };

  const handleSelectTrack = (id: string) => {
    soundFx.pauseMusic();
    setCurrentTrackId(id);
    setAutoPlayEmbed(true);
    soundFx.playChime();
  };

  const handleYoutubeInputChange = async (val: string) => {
    setYoutubeInput(val);
    setStatusMsg('');
    const ytId = extractYoutubeId(val);
    if (ytId && !songTitle.trim()) {
      setIsLookingUp(true);
      try {
        const res = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${ytId}`);
        if (res.ok) {
          const data = (await res.json()) as { title?: string; author_name?: string };
          if (data.title) setSongTitle(data.title);
          if (data.author_name && !artistName.trim()) setArtistName(data.author_name);
        }
      } catch {
        // Optional lookup; user can type title manually
      } finally {
        setIsLookingUp(false);
      }
    }
  };

  const handleSubmitSuggestion = (e: FormEvent) => {
    e.preventDefault();
    const ytId = extractYoutubeId(youtubeInput);
    if (!ytId) {
      setStatusMsg(
        lang === 'ta'
          ? 'தயவுசெய்து சரியான YouTube இணைப்பை (அல்லது கீழே உள்ள பாடலை) தேர்ந்தெடுக்கவும்.'
          : 'Please paste a valid YouTube link / video ID, or pick a Tamil wedding hit below.'
      );
      return;
    }

    const title = songTitle.trim() || `Wedding Sangeet Pick (${ytId})`;
    const artist = artistName.trim() || 'YouTube Sangeet Selection';
    const requester =
      suggestedBy.trim() ||
      (guestName && guestName !== 'Esteemed Guest' ? guestName : null) ||
      (lang === 'ta' ? 'திருமண விருந்தினர்' : 'Wedding Guest');
    const note =
      dedication.trim() ||
      (lang === 'ta'
        ? 'M. திரிஷா & சிவசங்கர் சங்கீத் கொண்டாட்டத்திற்காக!'
        : 'Dedicated to M. Thirisha & Siva Shankar Sangeet night!');

    onAddTrack({
      youtubeId: ytId,
      title,
      artist,
      suggestedBy: requester,
      dedication: note,
    });

    soundFx.playWinFanfare();
    setYoutubeInput('');
    setSongTitle('');
    setArtistName('');
    setDedication('');
    soundFx.pauseMusic();
    setAutoPlayEmbed(true);
    setStatusMsg(
      lang === 'ta'
        ? `"${title}" சங்கீத் பட்டியலில் சேர்க்கப்பட்டது!`
        : `"${title}" added to the live Sangeet playlist!`
    );
  };

  const handleQuickPick = (pick: { youtubeId: string; title: string; artist: string }) => {
    setYoutubeInput(`https://www.youtube.com/watch?v=${pick.youtubeId}`);
    setSongTitle(pick.title);
    setArtistName(pick.artist);
    soundFx.playChime();
  };

  const handleStep = (delta: number) => {
    if (sortedTracks.length === 0) return;
    soundFx.pauseMusic();
    const nextIdx = (activeIndex + delta + sortedTracks.length) % sortedTracks.length;
    setCurrentTrackId(sortedTracks[nextIdx].id);
    setAutoPlayEmbed(true);
    soundFx.playChime();
  };

  const embedUrl = activeTrack
    ? `https://www.youtube-nocookie.com/embed/${activeTrack.youtubeId}?rel=0&playsinline=1&enablejsapi=1${
        autoPlayEmbed ? '&autoplay=1&mute=0' : ''
      }`
    : '';

  return (
    <ContinuitySection3D
      id="sangeet"
      className="relative py-16 text-[#3b1d16] sm:py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 248, 235, 0.86), rgba(255, 248, 235, 0.94)), url('${HERITAGE_ASSETS.weddingCourtyard}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 border-b border-[#c9932d]/40 pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#631226] uppercase">
              ❖ {lang === 'ta' ? 'சங்கீத் டிஜே & சிறப்புப் பாடல் தொகுப்பு' : 'Sangeet DJ · 16-Track Shuffle & YouTube'} ❖
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#3a0815] sm:text-5xl">
              {lang === 'ta'
                ? 'திருமண இசைத் தொகுப்பு & YouTube பாடல் பரிந்துரை'
                : 'Sangeet DJ Jukebox & YouTube Suggestion Box'}
            </h2>
            <p className="mt-1 text-sm text-[#6e463a]">
              {lang === 'ta'
                ? 'ஒவ்வொரு முறையும் 16 சிறப்புத் தமிழ் திருமணப் பாடல்களிலிருந்து ரேண்டமாக இசையைக் கேளுங்கள் அல்லது YouTube பாடலைச் சேர்க்கவும்.'
                : 'Stream our 16-song wedding music collection in random shuffle mode or add your favorite YouTube dance picks.'}
            </p>
          </div>
          <div className="font-mono-num text-sm font-bold text-[#631226]">
            {WEDDING_AUDIO_COLLECTION.length} {lang === 'ta' ? 'திருமணப் பாடல்கள்' : 'wedding songs'} · {sortedTracks.length}{' '}
            {lang === 'ta' ? 'YouTube பட்டியல்' : 'YouTube tracks'}
          </div>
        </div>

        {/* 16-Track Real Audio Wedding Shuffle Collection */}
        <div className="mt-8 rounded-3xl border-2 border-[#c9932d] bg-gradient-to-br from-[#3b0714] via-[#2b050f] to-[#1a0308] p-5 text-[#fff8eb] shadow-2xl sm:p-6">
          <div className="flex flex-col justify-between gap-4 border-b border-[#c9932d]/35 pb-4 md:flex-row md:items-center">
            <div className="flex items-center gap-3.5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f7df94] to-[#c9932d] text-[#24050d] shadow-lg">
                <Volume2 className={`h-6 w-6 ${playerState.isPlaying ? 'animate-pulse' : ''}`} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-bold tracking-[0.18em] text-[#f7df94] uppercase">
                  {lang === 'ta'
                    ? `திருமண சிறப்பு இசைத் தொகுப்பு · ${WEDDING_AUDIO_COLLECTION.length} பாடல்கள் (ரேண்டம்)`
                    : `Wedding Music Collection · ${WEDDING_AUDIO_COLLECTION.length} Tracks (Random Shuffle)`}
                </p>
                <h3 className="mt-0.5 truncate font-display text-lg font-bold text-white sm:text-xl">
                  {playerState.isPlaying
                    ? `♫ ${lang === 'ta' ? playerState.currentTrack.titleTa : playerState.currentTrack.titleEn}`
                    : lang === 'ta'
                      ? `தேர்ந்தெடுக்கப்பட்டது: ${playerState.currentTrack.titleTa}`
                      : `Ready: ${playerState.currentTrack.titleEn}`}
                </h3>
                <p className="text-xs text-[#f5deb3]/80">
                  {lang === 'ta' ? playerState.currentTrack.tagTa : playerState.currentTrack.tagEn}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={handleToggleBuiltInMusic}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold shadow-lg transition cursor-pointer ${
                  playerState.isPlaying
                    ? 'border border-[#f7df94] bg-[#631226] text-[#f7df94]'
                    : 'bg-gradient-to-r from-[#f7df94] via-[#c9932d] to-[#b3822a] text-[#24050d] hover:brightness-105'
                }`}
              >
                {playerState.isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span>
                  {playerState.isPlaying
                    ? lang === 'ta'
                      ? 'இசையை நிறுத்து'
                      : 'Pause Music'
                    : lang === 'ta'
                      ? 'ரேண்டம் பாடலை இயக்கு'
                      : 'Play Random Song'}
                </span>
              </button>

              <button
                type="button"
                onClick={handlePlayRandomSong}
                className="inline-flex items-center gap-2 rounded-full border border-[#f7df94]/70 bg-[#480c1c] px-4 py-2.5 text-xs font-bold text-[#f7df94] shadow transition hover:bg-[#631226] cursor-pointer"
              >
                <Shuffle className="h-4 w-4" />
                <span>{lang === 'ta' ? 'அடுத்த ரேண்டம் பாடல்' : 'Next Random Song'}</span>
              </button>
            </div>
          </div>

          {/* Interactive 16-Song Selector Grid */}
          <div className="mt-4 grid max-h-56 grid-cols-1 gap-2 overflow-y-auto pr-1 sm:grid-cols-2 lg:grid-cols-4">
            {WEDDING_AUDIO_COLLECTION.map((song, idx) => {
              const isCurrent = playerState.currentTrack.id === song.id;
              return (
                <button
                  key={song.id}
                  type="button"
                  onClick={() => handleSelectLocalTrack(song.id)}
                  className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 text-left text-xs transition cursor-pointer ${
                    isCurrent
                      ? 'border-[#f7df94] bg-[#631226] text-white shadow'
                      : 'border-[#c9932d]/30 bg-[#2d0914]/80 text-[#f3d9ad] hover:border-[#f7df94] hover:bg-[#440c1d]'
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono-num text-[11px] font-bold ${
                      isCurrent ? 'bg-[#f7df94] text-[#24050d]' : 'bg-[#1a0308] text-[#f7df94]'
                    }`}
                  >
                    {isCurrent && playerState.isPlaying ? '♫' : idx + 1}
                  </span>
                  <span className="min-w-0 flex-1 truncate font-semibold">
                    {lang === 'ta' ? song.titleTa : song.titleEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Left Stage: YouTube DJ Deck + Playlist Queue */}
          <div className="space-y-5 lg:col-span-7">
            {activeTrack && (
              <div className="card-3d-tilt overflow-hidden rounded-3xl border border-[#c9932d] bg-[#24050d] text-[#fff8eb] shadow-2xl">
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    key={`${activeTrack.youtubeId}-${autoPlayEmbed ? 'play' : 'idle'}`}
                    title={activeTrack.title}
                    src={embedUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#f7df94]">
                      <Disc3 className="h-4 w-4 animate-spin" style={{ animationDuration: '5s' }} />
                      <span>{lang === 'ta' ? 'YouTube சங்கீத் திரை' : 'Now Spinning on YouTube Deck'}</span>
                    </div>
                    <h3 className="mt-1 truncate font-display text-xl font-bold text-[#fff8eb]">
                      {activeTrack.title}
                    </h3>
                    <p className="text-xs text-[#f5deb3]/85">
                      {activeTrack.artist} · {lang === 'ta' ? 'பரிந்துரை:' : 'Suggested by'}{' '}
                      <strong className="text-white">{activeTrack.suggestedBy}</strong>
                    </p>
                    {activeTrack.dedication && (
                      <p className="mt-1 text-xs italic text-[#f7df94]">“{activeTrack.dedication}”</p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleStep(-1)}
                      aria-label="Previous track"
                      className="rounded-full border border-[#c9932d] bg-[#3a0815] p-2.5 text-[#f7df94] transition hover:bg-[#520d20] cursor-pointer"
                    >
                      <SkipBack className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        soundFx.pauseMusic();
                        setAutoPlayEmbed(true);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#f7df94] to-[#c9932d] px-3.5 py-2 text-xs font-bold text-[#24050d] shadow cursor-pointer"
                    >
                      <Play className="h-3.5 w-3.5" />
                      <span>{lang === 'ta' ? 'இயக்கு' : 'Play'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleStep(1)}
                      aria-label="Next track"
                      className="rounded-full border border-[#c9932d] bg-[#3a0815] p-2.5 text-[#f7df94] transition hover:bg-[#520d20] cursor-pointer"
                    >
                      <SkipForward className="h-4 w-4" />
                    </button>
                    <a
                      href={`https://www.youtube.com/watch?v=${activeTrack.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#f7df94]/60 bg-[#3a0815] px-3.5 py-2 text-xs font-bold text-[#f7df94] transition hover:bg-[#520d20]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>{lang === 'ta' ? 'YouTube-இல் கேள்' : 'Open on YouTube'}</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="card-3d-tilt rounded-3xl border border-[#c9932d]/60 bg-[#fffaf0]/95 p-4 shadow-xl sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-sm font-bold tracking-wider text-[#631226] uppercase">
                  <Music2 className="h-4 w-4 text-[#c9932d]" />
                  <span>{lang === 'ta' ? 'YouTube பாடல் வரிசை' : 'YouTube Dance Queue'}</span>
                </h3>
                <span className="text-xs font-medium text-[#6e463a]">
                  {lang === 'ta' ? 'அதிக வாக்குகள் மேலே' : 'Top-voted rises first'}
                </span>
              </div>

              <div className="max-h-72 space-y-2 overflow-y-auto pr-1">
                {sortedTracks.map((track) => {
                  const isActive = activeTrack?.id === track.id;
                  return (
                    <div
                      key={track.id}
                      className={`flex items-center justify-between gap-3 rounded-xl border p-3 transition ${
                        isActive
                          ? 'border-[#631226] bg-[#631226] text-white shadow'
                          : 'border-[#c9932d]/30 bg-white text-[#3b1d16] hover:border-[#631226]'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => handleSelectTrack(track.id)}
                        className="flex min-w-0 flex-1 items-center gap-3 text-left cursor-pointer"
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                            isActive ? 'bg-[#f7df94] text-[#3a0815]' : 'bg-[#fff4d9] text-[#631226]'
                          }`}
                        >
                          <Play className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="truncate text-sm font-bold">{track.title}</div>
                          <div className="truncate text-xs opacity-80">
                            {track.suggestedBy} · {track.dedication}
                          </div>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          onUpvoteTrack(track.id);
                          soundFx.playThavilTap();
                        }}
                        className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-3 py-1.5 font-mono-num text-xs font-bold transition cursor-pointer ${
                          isActive
                            ? 'border-[#f7df94] bg-[#3a0815] text-[#f7df94]'
                            : 'border-[#c9932d] bg-[#fff8eb] text-[#631226] hover:bg-[#631226] hover:text-white'
                        }`}
                      >
                        <ThumbsUp className="h-3.5 w-3.5" />
                        <span>{track.votes}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Stage: YouTube Suggestion Box */}
          <div className="lg:col-span-5">
            <form
              onSubmit={handleSubmitSuggestion}
              className="card-3d-tilt w-full max-w-full overflow-hidden rounded-2xl border border-[#c9932d]/70 bg-[#fffaf0]/95 p-3.5 shadow-2xl sm:rounded-3xl sm:p-6"
            >
              <h3 className="font-display text-xl font-bold text-[#3a0815] sm:text-2xl">
                {lang === 'ta' ? 'YouTube பாடல் பரிந்துரைப் பெட்டி' : 'Suggest a Song from YouTube'}
              </h3>
              <p className="mt-1 text-xs text-[#6e463a]">
                {lang === 'ta'
                  ? 'YouTube இணைப்பை ஒட்டவும் அல்லது கீழே உள்ள ஹிட் பாடலைத் தேர்ந்தெடுக்கவும்.'
                  : 'Paste any YouTube watch/share URL or tap a quick Tamil wedding hit below to prefill.'}
              </p>

              <div className="mt-3 sm:mt-4">
                <span className="block text-[11px] font-bold tracking-wider text-[#631226] uppercase">
                  {lang === 'ta' ? 'விரைவுத் தேர்வு (YouTube)' : 'Quick YouTube Picks'}
                </span>
                <div className="mt-1.5 grid grid-cols-2 gap-1.5 sm:mt-2 sm:gap-2">
                  {QUICK_YOUTUBE_PICKS.map((pick) => (
                    <button
                      key={pick.youtubeId}
                      type="button"
                      onClick={() => handleQuickPick(pick)}
                      className="truncate rounded-lg border border-[#c9932d]/45 bg-white px-2 py-1.5 text-left text-[11px] font-semibold text-[#3a0815] transition hover:border-[#631226] hover:bg-[#fff4d9] cursor-pointer sm:rounded-xl sm:px-3 sm:py-2 sm:text-xs"
                    >
                      + {pick.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                <div>
                  <label htmlFor="ytUrlInput" className="block text-[11px] font-bold text-[#3a0815] sm:text-xs">
                    {lang === 'ta' ? 'YouTube பாடல் இணைப்பு அல்லது ID *' : 'YouTube Link or Video ID *'}
                  </label>
                  <input
                    id="ytUrlInput"
                    type="text"
                    value={youtubeInput}
                    onChange={(e) => void handleYoutubeInputChange(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="mt-1 w-full max-w-full rounded-lg border border-[#c9932d] bg-white px-3 py-1.5 text-xs text-[#3b1d16] focus:border-[#631226] focus:outline-none sm:rounded-xl sm:py-2 sm:text-sm"
                  />
                  {isLookingUp && (
                    <p className="mt-1 text-[11px] font-semibold text-[#631226]">
                      {lang === 'ta' ? 'பாடல் தலைப்பு பெறப்படுகிறது...' : 'Fetching YouTube title...'}
                    </p>
                  )}
                </div>

                <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                  <div>
                    <label htmlFor="ytSongTitle" className="block text-[11px] font-bold text-[#3a0815] sm:text-xs">
                      {lang === 'ta' ? 'பாடல் பெயர்' : 'Song Title'}
                    </label>
                    <input
                      id="ytSongTitle"
                      type="text"
                      value={songTitle}
                      onChange={(e) => setSongTitle(e.target.value)}
                      placeholder={lang === 'ta' ? 'எ.கா. வாத்தி கமிங்' : 'e.g. Arabic Kuthu'}
                      className="mt-1 w-full max-w-full rounded-lg border border-[#c9932d] bg-white px-3 py-1.5 text-xs text-[#3b1d16] focus:border-[#631226] focus:outline-none sm:rounded-xl sm:py-2 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="ytArtist" className="block text-[11px] font-bold text-[#3a0815] sm:text-xs">
                      {lang === 'ta' ? 'இசை / கலைஞர்' : 'Artist / Film'}
                    </label>
                    <input
                      id="ytArtist"
                      type="text"
                      value={artistName}
                      onChange={(e) => setArtistName(e.target.value)}
                      placeholder={lang === 'ta' ? 'எ.கா. அனிருத்' : 'e.g. Anirudh'}
                      className="mt-1 w-full max-w-full rounded-lg border border-[#c9932d] bg-white px-3 py-1.5 text-xs text-[#3b1d16] focus:border-[#631226] focus:outline-none sm:rounded-xl sm:py-2 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="ytSuggestedBy" className="block text-[11px] font-bold text-[#3a0815] sm:text-xs">
                    {lang === 'ta' ? 'உங்கள் பெயர்' : 'Your Name'}
                  </label>
                  <input
                    id="ytSuggestedBy"
                    type="text"
                    value={suggestedBy}
                    onChange={(e) => setSuggestedBy(e.target.value)}
                    placeholder={lang === 'ta' ? 'எ.கா. கார்த்திக் & குடும்பத்தினர்' : 'e.g. Karthik & Cousins'}
                    className="mt-1 w-full max-w-full rounded-lg border border-[#c9932d] bg-white px-3 py-1.5 text-xs text-[#3b1d16] focus:border-[#631226] focus:outline-none sm:rounded-xl sm:py-2 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="ytDedication" className="block text-[11px] font-bold text-[#3a0815] sm:text-xs">
                    {lang === 'ta' ? 'வாழ்த்து / நடன சவால்' : 'Dance Dedication Note'}
                  </label>
                  <input
                    id="ytDedication"
                    type="text"
                    value={dedication}
                    onChange={(e) => setDedication(e.target.value)}
                    placeholder={
                      lang === 'ta'
                        ? 'எ.கா. மாப்பிள்ளை நண்பர்கள் ஆட்டத்திற்கு!'
                        : 'e.g. Calling all cousins to the Sangeet stage!'
                    }
                    className="mt-1 w-full max-w-full rounded-lg border border-[#c9932d] bg-white px-3 py-1.5 text-xs text-[#3b1d16] focus:border-[#631226] focus:outline-none sm:rounded-xl sm:py-2 sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e6b247] to-[#ba8222] px-4 py-2 text-xs font-bold text-[#310d15] shadow-lg transition hover:brightness-105 cursor-pointer sm:py-2.5 sm:text-sm"
                >
                  <Plus className="h-4 w-4" />
                  <span>{lang === 'ta' ? 'சங்கீத் பட்டியலில் சேர்' : 'Add to Sangeet Playlist'}</span>
                </button>

                {statusMsg && (
                  <p className="text-center text-xs font-bold text-[#631226]">{statusMsg}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContinuitySection3D>
  );
}
