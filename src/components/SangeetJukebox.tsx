import { useEffect, useState, type FormEvent } from 'react';
import {
  Disc3,
  ExternalLink,
  Music2,
  Pause,
  Play,
  Plus,
  SkipBack,
  SkipForward,
  ThumbsUp,
  Volume2,
} from 'lucide-react';
import {
  extractYoutubeId,
  HERITAGE_ASSETS,
  QUICK_YOUTUBE_PICKS,
  type JukeboxTrack,
  type Lang,
} from '../data/weddingData';
import { soundFx } from '../utils/soundFx';
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
  const [liveMusicOn, setLiveMusicOn] = useState(false);
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
    return () => {
      soundFx.stopWeddingMusicLoop();
    };
  }, []);

  const sortedTracks = [...tracks].sort((a, b) => b.votes - a.votes || b.addedAt - a.addedAt);
  const activeIndex = Math.max(
    0,
    sortedTracks.findIndex((t) => t.id === currentTrackId)
  );
  const activeTrack = sortedTracks[activeIndex] || sortedTracks[0];

  const handleToggleBuiltInMusic = () => {
    if (liveMusicOn) {
      soundFx.stopWeddingMusicLoop();
      setLiveMusicOn(false);
    } else {
      soundFx.startWeddingMusicLoop('sangeet');
      setLiveMusicOn(true);
    }
  };

  const handleSelectTrack = (id: string) => {
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
              ❖ {lang === 'ta' ? 'சங்கீத் டிஜே இசைப்பெட்டி' : 'Sangeet DJ Jukebox · YouTube Request Box'} ❖
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#3a0815] sm:text-5xl">
              {lang === 'ta'
                ? 'உங்கள் விருப்பப் பாடலை YouTube-இல் இருந்து சேர்க்கவும்'
                : 'Sangeet DJ Jukebox & YouTube Suggestion Box'}
            </h2>
            <p className="mt-1 text-sm text-[#6e463a]">
              {lang === 'ta'
                ? 'எந்த YouTube பாடல் இணைப்பையும் சேர்த்து, விருப்பப் பாடல்களுக்கு வாக்களித்து, இசையை உடனே கேட்டு மகிழுங்கள்.'
                : 'Drop any YouTube song link for the Sangeet dance floor, play YouTube tracks or launch instant Madurai wedding beats.'}
            </p>
          </div>
          <div className="font-mono-num text-sm font-bold text-[#631226]">
            {sortedTracks.length} {lang === 'ta' ? 'பாடல்கள் வரிசையில்' : 'tracks queued'}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Left Stage: Live Audio + YouTube DJ Deck + Playlist Queue */}
          <div className="space-y-5 lg:col-span-7">
            {/* Instant Audible Built-in Wedding Music Bar (Always audible with 1 tap) */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-[#c9932d] bg-gradient-to-r from-[#4a0c1d] via-[#3a0815] to-[#24050d] px-5 py-4 text-[#fff8eb] shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7df94] text-[#24050d]">
                  <Volume2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-wider text-[#f7df94] uppercase">
                    {lang === 'ta' ? 'நேரலை மங்கள இசை & சங்கீத் தாளம்' : 'Built-In Wedding Music Deck'}
                  </p>
                  <p className="text-xs text-[#f5deb3]">
                    {liveMusicOn
                      ? lang === 'ta'
                        ? 'மங்கள நாதஸ்வரம் & தவில் இசை ஒலிக்கிறது...'
                        : 'Playing live Tamil wedding Nadaswaram & Thavil beats...'
                      : lang === 'ta'
                        ? 'உடனடியாக இசை கேட்க கீழே உள்ள பொத்தானை அழுத்தவும்'
                        : 'Tap Play for instant celebratory wedding music without restrictions'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleToggleBuiltInMusic}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold shadow-lg transition cursor-pointer ${
                  liveMusicOn
                    ? 'border border-[#f7df94] bg-[#631226] text-[#f7df94]'
                    : 'bg-gradient-to-r from-[#f7df94] via-[#c9932d] to-[#b3822a] text-[#24050d] hover:brightness-105'
                }`}
              >
                {liveMusicOn ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span>
                  {liveMusicOn
                    ? lang === 'ta'
                      ? 'இசையை நிறுத்து'
                      : 'Pause Wedding Music'
                    : lang === 'ta'
                      ? 'இசையை இயக்கு'
                      : 'Play Wedding Music'}
                </span>
              </button>
            </div>

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
                      <span>{lang === 'ta' ? 'இப்போது இசைப்பது' : 'Now Spinning on Sangeet Deck'}</span>
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
                      onClick={() => setAutoPlayEmbed(true)}
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
                <div className="border-t border-[#c9932d]/25 bg-[#19040a] px-4 py-2 text-[11px] text-[#f5deb3]/85">
                  {lang === 'ta'
                    ? 'குறிப்பு: சில திரைப்படப் பாடல்கள் YouTube உள்-பின்னணியில் கட்டுப்படுத்தப்பட்டிருந்தால் “YouTube-இல் கேள்” அல்லது மேலே உள்ள “இசையை இயக்கு” பொத்தானைப் பயன்படுத்தலாம்.'
                    : 'Tip: If YouTube disables embedded audio for a film label track, click “Open on YouTube” or tap “Play Wedding Music” above for live audio.'}
                </div>
              </div>
            )}

            <div className="card-3d-tilt rounded-3xl border border-[#c9932d]/60 bg-[#fffaf0]/95 p-4 shadow-xl sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-sm font-bold tracking-wider text-[#631226] uppercase">
                  <Music2 className="h-4 w-4 text-[#c9932d]" />
                  <span>{lang === 'ta' ? 'சங்கீத் பாடல் வரிசை' : 'Live Sangeet Dance Queue'}</span>
                </h3>
                <span className="text-xs font-medium text-[#6e463a]">
                  {lang === 'ta' ? 'அதிக வாக்குகள் மேலே' : 'Top-voted rises first'}
                </span>
              </div>

              <div className="max-h-80 space-y-2 overflow-y-auto pr-1">
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
              className="card-3d-tilt rounded-3xl border border-[#c9932d]/70 bg-[#fffaf0]/95 p-5 shadow-2xl sm:p-6"
            >
              <h3 className="font-display text-2xl font-bold text-[#3a0815]">
                {lang === 'ta' ? 'YouTube பாடல் பரிந்துரைப் பெட்டி' : 'Suggest a Song from YouTube'}
              </h3>
              <p className="mt-1 text-xs text-[#6e463a]">
                {lang === 'ta'
                  ? 'YouTube இணைப்பை ஒட்டவும் அல்லது கீழே உள்ள ஹிட் பாடலைத் தேர்ந்தெடுக்கவும்.'
                  : 'Paste any YouTube watch/share URL or tap a quick Tamil wedding hit below to prefill.'}
              </p>

              {/* Quick Picks */}
              <div className="mt-4">
                <span className="block text-[11px] font-bold tracking-wider text-[#631226] uppercase">
                  {lang === 'ta' ? 'விரைவுத் தேர்வு (YouTube)' : 'Quick YouTube Picks'}
                </span>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {QUICK_YOUTUBE_PICKS.map((pick) => (
                    <button
                      key={pick.youtubeId}
                      type="button"
                      onClick={() => handleQuickPick(pick)}
                      className="truncate rounded-xl border border-[#c9932d]/45 bg-white px-3 py-2 text-left text-xs font-semibold text-[#3a0815] transition hover:border-[#631226] hover:bg-[#fff4d9] cursor-pointer"
                    >
                      + {pick.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <label htmlFor="ytUrlInput" className="block text-xs font-bold text-[#3a0815]">
                    {lang === 'ta' ? 'YouTube பாடல் இணைப்பு அல்லது ID *' : 'YouTube Link or Video ID *'}
                  </label>
                  <input
                    id="ytUrlInput"
                    type="text"
                    value={youtubeInput}
                    onChange={(e) => void handleYoutubeInputChange(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="mt-1 w-full rounded-xl border border-[#c9932d] bg-white px-3 py-2 text-sm text-[#3b1d16] focus:border-[#631226] focus:outline-none"
                  />
                  {isLookingUp && (
                    <p className="mt-1 text-[11px] font-semibold text-[#631226]">
                      {lang === 'ta' ? 'பாடல் தலைப்பு பெறப்படுகிறது...' : 'Fetching YouTube title...'}
                    </p>
                  )}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="ytSongTitle" className="block text-xs font-bold text-[#3a0815]">
                      {lang === 'ta' ? 'பாடல் பெயர்' : 'Song Title'}
                    </label>
                    <input
                      id="ytSongTitle"
                      type="text"
                      value={songTitle}
                      onChange={(e) => setSongTitle(e.target.value)}
                      placeholder={lang === 'ta' ? 'எ.கா. வாத்தி கமிங்' : 'e.g. Arabic Kuthu'}
                      className="mt-1 w-full rounded-xl border border-[#c9932d] bg-white px-3 py-2 text-sm text-[#3b1d16] focus:border-[#631226] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="ytArtist" className="block text-xs font-bold text-[#3a0815]">
                      {lang === 'ta' ? 'இசை / கலைஞர்' : 'Artist / Film'}
                    </label>
                    <input
                      id="ytArtist"
                      type="text"
                      value={artistName}
                      onChange={(e) => setArtistName(e.target.value)}
                      placeholder={lang === 'ta' ? 'எ.கா. அனிருத்' : 'e.g. Anirudh'}
                      className="mt-1 w-full rounded-xl border border-[#c9932d] bg-white px-3 py-2 text-sm text-[#3b1d16] focus:border-[#631226] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="ytSuggestedBy" className="block text-xs font-bold text-[#3a0815]">
                    {lang === 'ta' ? 'உங்கள் பெயர்' : 'Your Name'}
                  </label>
                  <input
                    id="ytSuggestedBy"
                    type="text"
                    value={suggestedBy}
                    onChange={(e) => setSuggestedBy(e.target.value)}
                    placeholder={lang === 'ta' ? 'எ.கா. கார்த்திக் & குடும்பத்தினர்' : 'e.g. Karthik & Cousins'}
                    className="mt-1 w-full rounded-xl border border-[#c9932d] bg-white px-3 py-2 text-sm text-[#3b1d16] focus:border-[#631226] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="ytDedication" className="block text-xs font-bold text-[#3a0815]">
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
                    className="mt-1 w-full rounded-xl border border-[#c9932d] bg-white px-3 py-2 text-sm text-[#3b1d16] focus:border-[#631226] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e6b247] to-[#ba8222] px-4 py-2.5 text-sm font-bold text-[#310d15] shadow-lg transition hover:brightness-105 cursor-pointer"
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
