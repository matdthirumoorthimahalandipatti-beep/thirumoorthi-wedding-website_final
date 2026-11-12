import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Check,
  Download,
  ImagePlus,
  Lock,
  Pencil,
  Plus,
  RotateCcw,
  ShieldCheck,
  Trash2,
  Unlock,
  Users,
  X,
} from 'lucide-react';
import {
  AGE_GROUP_ORDER,
  type AgeGroupKey,
  type AlbumPhoto,
  type DirectoryPerson,
  type FamilyMemberPhotoCard,
  type Lang,
} from '../data/weddingData';
import { soundFx } from '../utils/soundFx';

export interface CouplePhotosState {
  bridePhoto: string;
  groomPhoto: string;
}

interface AdminPortalModalProps {
  lang: Lang;
  isOpen: boolean;
  onClose: () => void;
  couplePhotos: CouplePhotosState;
  onUpdateCouplePhotos: (next: CouplePhotosState) => void;
  familyMembers: FamilyMemberPhotoCard[];
  onUpdateFamilyMembers: (next: FamilyMemberPhotoCard[]) => void;
  albumPhotos: AlbumPhoto[];
  onUpdateAlbumPhotos: (next: AlbumPhoto[]) => void;
  directoryPersons: DirectoryPerson[];
  onUpdateDirectoryPersons: (next: DirectoryPerson[]) => void;
  onResetAll: () => void;
}

const ADMIN_PIN = '221126';

async function compressImageFile(file: File, maxDim = 960): Promise<string> {
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const el = new Image();
    el.onload = () => resolve(el);
    el.onerror = reject;
    el.src = dataUrl;
  });

  const scale = Math.min(1, maxDim / Math.max(img.width || 1, img.height || 1));
  const w = Math.max(1, Math.round(img.width * scale));
  const h = Math.max(1, Math.round(img.height * scale));
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (!ctx) return dataUrl;
  ctx.drawImage(img, 0, 0, w, h);
  return canvas.toDataURL('image/jpeg', 0.84);
}

export default function AdminPortalModal({
  lang,
  isOpen,
  onClose,
  couplePhotos,
  onUpdateCouplePhotos,
  familyMembers,
  onUpdateFamilyMembers,
  albumPhotos,
  onUpdateAlbumPhotos,
  directoryPersons,
  onUpdateDirectoryPersons,
  onResetAll,
}: AdminPortalModalProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [activeTab, setActiveTab] = useState<'directory' | 'portraits' | 'album'>('directory');
  const [statusMsg, setStatusMsg] = useState('');

  // Directory Add/Edit Form
  const [filterGroup, setFilterGroup] = useState<'all' | AgeGroupKey>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formAgeGroup, setFormAgeGroup] = useState<AgeGroupKey>('friends');
  const [formSide, setFormSide] = useState<'bride' | 'groom' | 'both'>('bride');
  const [formNameTa, setFormNameTa] = useState('');
  const [formNameEn, setFormNameEn] = useState('');
  const [formLocTa, setFormLocTa] = useState('மதுரை');
  const [formLocEn, setFormLocEn] = useState('Madurai');

  // Album Add Form
  const [albumUrlInput, setAlbumUrlInput] = useState('');
  const [albumCaptionTa, setAlbumCaptionTa] = useState('');
  const [albumCaptionEn, setAlbumCaptionEn] = useState('');
  const [albumDateTa, setAlbumDateTa] = useState('புதிய நினைவு');
  const [albumDateEn, setAlbumDateEn] = useState('Wedding Memory');

  if (!isOpen) return null;

  const notify = (msg: string) => {
    setStatusMsg(msg);
    soundFx.playChime();
  };

  const handleUnlock = (e: FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === ADMIN_PIN) {
      setUnlocked(true);
      setPinError('');
      soundFx.playTempleBell();
    } else {
      setPinError(
        lang === 'ta'
          ? 'தவறான PIN எண். குடும்ப PIN: 221126'
          : 'Incorrect PIN. Family PIN is 221126'
      );
    }
  };

  const resetPersonForm = () => {
    setEditingId(null);
    setFormNameTa('');
    setFormNameEn('');
    setFormLocTa('மதுரை');
    setFormLocEn('Madurai');
    setFormSide('bride');
    setFormAgeGroup('friends');
  };

  const handleStartEditPerson = (p: DirectoryPerson) => {
    setEditingId(p.id);
    setFormAgeGroup(p.ageGroup);
    setFormSide(p.side);
    setFormNameTa(p.nameTa);
    setFormNameEn(p.nameEn);
    setFormLocTa(p.locationTa);
    setFormLocEn(p.locationEn);
  };

  const handleSavePerson = (e: FormEvent) => {
    e.preventDefault();
    const ta = formNameTa.trim() || formNameEn.trim();
    const en = formNameEn.trim() || formNameTa.trim();
    if (!ta && !en) return;

    const meta = AGE_GROUP_ORDER.find((g) => g.key === formAgeGroup) || AGE_GROUP_ORDER[9];

    if (editingId) {
      const next = directoryPersons.map((p) =>
        p.id === editingId
          ? {
              ...p,
              nameTa: ta,
              nameEn: en,
              side: formSide,
              ageGroup: formAgeGroup,
              groupTa: meta.labelTa,
              groupEn: meta.labelEn,
              locationTa: formLocTa.trim(),
              locationEn: formLocEn.trim(),
            }
          : p
      );
      onUpdateDirectoryPersons(next);
      notify(lang === 'ta' ? 'பெயர் விவரம் புதுப்பிக்கப்பட்டது!' : 'Relative / Friend updated!');
    } else {
      const created: DirectoryPerson = {
        id: `dir-custom-${Date.now()}`,
        nameTa: ta,
        nameEn: en,
        side: formSide,
        ageGroup: formAgeGroup,
        groupTa: meta.labelTa,
        groupEn: meta.labelEn,
        locationTa: formLocTa.trim() || 'மதுரை',
        locationEn: formLocEn.trim() || 'Madurai',
      };
      onUpdateDirectoryPersons([...directoryPersons, created]);
      notify(lang === 'ta' ? 'புதிய பெயர் பட்டியலில் சேர்க்கப்பட்டது!' : 'Added to age-wise directory!');
    }
    resetPersonForm();
  };

  const handleDeletePerson = (id: string) => {
    onUpdateDirectoryPersons(directoryPersons.filter((p) => p.id !== id));
    if (editingId === id) resetPersonForm();
    notify(lang === 'ta' ? 'பெயர் நீக்கப்பட்டது.' : 'Entry removed.');
  };

  const handleCoupleFileUpload = async (
    key: 'bridePhoto' | 'groomPhoto',
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const compressed = await compressImageFile(file);
      onUpdateCouplePhotos({ ...couplePhotos, [key]: compressed });
      notify(lang === 'ta' ? 'மணமக்கள் புகைப்படம் மாற்றப்பட்டது!' : 'Couple portrait updated!');
    } catch {
      notify(lang === 'ta' ? 'படம் பதிவேற்றத்தில் பிழை.' : 'Could not read image file.');
    }
  };

  const handleFamilyMemberFileUpload = async (
    id: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const compressed = await compressImageFile(file);
      onUpdateFamilyMembers(
        familyMembers.map((m) => (m.id === id ? { ...m, photo: compressed } : m))
      );
      notify(lang === 'ta' ? 'குடும்ப உறுப்பினர் படம் புதுப்பிக்கப்பட்டது!' : 'Family photo updated!');
    } catch {
      notify(lang === 'ta' ? 'படம் பதிவேற்றத்தில் பிழை.' : 'Could not read image file.');
    }
  };

  const handleAlbumFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const compressed = await compressImageFile(file, 1100);
      setAlbumUrlInput(compressed);
      notify(lang === 'ta' ? 'படம் பதிவேற்றத் தயார்! "ஆல்பத்தில் சேர்க்க" அழுத்தவும்.' : 'Image loaded! Click Add to Album.');
    } catch {
      notify(lang === 'ta' ? 'படம் பதிவேற்றத்தில் பிழை.' : 'Could not read image file.');
    }
  };

  const handleAddAlbumPhoto = (e: FormEvent) => {
    e.preventDefault();
    if (!albumUrlInput.trim()) return;
    const item: AlbumPhoto = {
      src: albumUrlInput.trim(),
      captionTa: albumCaptionTa.trim() || albumCaptionEn.trim() || 'மதுரை திருமண நினைவு',
      captionEn: albumCaptionEn.trim() || albumCaptionTa.trim() || 'Madurai Wedding Moment',
      dateTa: albumDateTa.trim() || 'திருமண விழா',
      dateEn: albumDateEn.trim() || 'Celebration',
    };
    onUpdateAlbumPhotos([item, ...albumPhotos]);
    setAlbumUrlInput('');
    setAlbumCaptionTa('');
    setAlbumCaptionEn('');
    notify(lang === 'ta' ? 'புதிய புகைப்படம் ஆல்பத்தில் சேர்க்கப்பட்டது!' : 'New photo added to album!');
  };

  const handleReplaceAlbumFile = async (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const compressed = await compressImageFile(file, 1100);
      onUpdateAlbumPhotos(
        albumPhotos.map((p, idx) => (idx === index ? { ...p, src: compressed } : p))
      );
      notify(lang === 'ta' ? 'ஆல்பம் படம் புதுப்பிக்கப்பட்டது!' : 'Album photo replaced!');
    } catch {
      notify(lang === 'ta' ? 'படம் பதிவேற்றத்தில் பிழை.' : 'Could not read image file.');
    }
  };

  const handleExportBackup = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      couplePhotos,
      familyMembers,
      albumPhotos,
      directoryPersons,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'thirumoorthi-wedding-admin-backup.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.setTimeout(() => URL.revokeObjectURL(url), 1200);
    notify(lang === 'ta' ? 'காப்புப் பிரதி (JSON) பதிவிறக்கப்பட்டது!' : 'Admin JSON backup downloaded!');
  };

  const visiblePeople = directoryPersons.filter((p) => {
    if (filterGroup !== 'all' && p.ageGroup !== filterGroup) return false;
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return `${p.nameTa} ${p.nameEn} ${p.locationTa} ${p.locationEn}`.toLowerCase().includes(q);
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={lang === 'ta' ? 'குடும்ப நிர்வாகப் பகுதி' : 'Family Admin Studio'}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-6"
    >
      <div className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border-2 border-[#c9932d] bg-[#fffaf0] text-[#3b1d16] shadow-2xl">
        {/* Top Modal Header */}
        <div className="flex items-center justify-between border-b border-[#c9932d]/45 bg-[#2b0711] px-5 py-4 text-[#fff8eb]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 text-[#f7df94]" />
            <div>
              <h2 className="font-display text-lg font-bold text-[#f7df94] sm:text-xl">
                {lang === 'ta' ? 'குடும்ப நிர்வாகப் பகுதி (Admin)' : 'Family Admin Studio'}
              </h2>
              <p className="text-[11px] text-[#f3d9ad]">
                {lang === 'ta'
                  ? 'புகைப்படங்கள், உறவினர்கள் & நண்பர்களின் பெயர்களைப் புதுப்பிக்கவும்'
                  : 'Update couple/family portraits, album photos, and age-wise relatives & friends'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Admin Panel"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9932d]/60 bg-[#3a0815] text-[#f7df94] transition hover:bg-[#520d1f] cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        {!unlocked ? (
          <div className="flex flex-1 flex-col items-center justify-center p-6 sm:p-10">
            <form
              onSubmit={handleUnlock}
              className="w-full max-w-md space-y-4 rounded-2xl border-2 border-[#c9932d]/65 bg-white p-6 text-center shadow-lg"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3d2] text-[#631226]">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#3a0815]">
                {lang === 'ta' ? 'நிர்வாக அனுமதி (Admin Unlock)' : 'Family Admin Access'}
              </h3>
              <p className="text-xs text-[#6e463a]">
                {lang === 'ta'
                  ? 'பெயர்கள் மற்றும் புகைப்படங்களைத் திருத்த குடும்ப PIN எண்ணை உள்ளிடவும் (திருமணத் தேதி PIN: 221126).'
                  : 'Enter the family admin PIN to edit photos and guest lists (Wedding Date PIN: 221126).'}
              </p>
              <input
                type="password"
                inputMode="numeric"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="PIN (e.g. 221126)"
                className="w-full rounded-xl border border-[#c9932d] px-4 py-2.5 text-center font-mono-num text-base tracking-widest text-[#3a0815] focus:border-[#631226] focus:outline-none"
              />
              {pinError && <p className="text-xs font-bold text-red-700">{pinError}</p>}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#a62040] to-[#631226] px-5 py-3 text-sm font-bold text-white shadow cursor-pointer"
              >
                <Unlock className="h-4 w-4 text-[#f7df94]" />
                <span>{lang === 'ta' ? 'நிர்வாகப் பகுதியைத் திறக்கவும்' : 'Unlock Admin Panel'}</span>
              </button>
            </form>
          </div>
        ) : (
          <>
            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#c9932d]/35 bg-[#fff5db] px-4 py-3 sm:px-6">
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    {
                      id: 'directory',
                      icon: Users,
                      ta: `உறவினர்கள் & நண்பர்கள் (${directoryPersons.length})`,
                      en: `Relatives & Friends (${directoryPersons.length})`,
                    },
                    {
                      id: 'portraits',
                      icon: ImagePlus,
                      ta: 'குடும்பப் புகைப்படங்கள்',
                      en: 'Couple & Family Photos',
                    },
                    {
                      id: 'album',
                      icon: ImagePlus,
                      ta: `ஆல்பம் (${albumPhotos.length})`,
                      en: `Photo Album (${albumPhotos.length})`,
                    },
                  ] as const
                ).map((t) => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveTab(t.id)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold transition cursor-pointer ${
                        activeTab === t.id
                          ? 'border-[#631226] bg-[#631226] text-white'
                          : 'border-[#c9932d]/60 bg-white text-[#3a0815]'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{lang === 'ta' ? t.ta : t.en}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleExportBackup}
                  className="inline-flex items-center gap-1 rounded-full border border-[#c9932d] bg-white px-3 py-1.5 text-[11px] font-bold text-[#3a0815] hover:bg-[#fff1cf] cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{lang === 'ta' ? 'JSON காப்பு' : 'Backup JSON'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onResetAll();
                    notify(lang === 'ta' ? 'அசல் விவரங்களுக்கு மீட்டமைக்கப்பட்டது.' : 'Reset to original defaults.');
                  }}
                  className="inline-flex items-center gap-1 rounded-full border border-red-300 bg-white px-3 py-1.5 text-[11px] font-bold text-red-700 hover:bg-red-50 cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>{lang === 'ta' ? 'மீட்டமை' : 'Reset'}</span>
                </button>
              </div>
            </div>

            {statusMsg && (
              <div className="border-b border-[#c9932d]/30 bg-[#eef9f0] px-5 py-2 text-xs font-bold text-emerald-800">
                ✓ {statusMsg}
              </div>
            )}

            {/* Tab Content Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {/* TAB 1: RELATIVES & FRIENDS */}
              {activeTab === 'directory' && (
                <div className="space-y-6">
                  <form
                    onSubmit={handleSavePerson}
                    className="space-y-3 rounded-2xl border border-[#c9932d]/55 bg-white p-4 shadow-sm sm:p-5"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-base font-bold text-[#3a0815]">
                        {editingId
                          ? lang === 'ta'
                            ? 'உறவினர் / நண்பர் விவரம் திருத்துக'
                            : 'Edit Relative / Friend'
                          : lang === 'ta'
                            ? 'புதிய உறவினர் / நண்பர் சேர்க்க'
                            : 'Add New Relative / Friend'}
                      </h3>
                      {editingId && (
                        <button
                          type="button"
                          onClick={resetPersonForm}
                          className="text-xs font-bold text-[#631226] underline cursor-pointer"
                        >
                          {lang === 'ta' ? 'ரத்து செய்' : 'Cancel Edit'}
                        </button>
                      )}
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-[11px] font-bold text-[#631226] uppercase">
                          {lang === 'ta' ? 'வயது வரிசைப் பிரிவு' : 'Age-Wise Group'}
                        </label>
                        <select
                          value={formAgeGroup}
                          onChange={(e) => setFormAgeGroup(e.target.value as AgeGroupKey)}
                          className="mt-1 w-full rounded-xl border border-[#c9932d] bg-[#fffdf7] px-3 py-2 text-xs font-semibold text-[#3a0815]"
                        >
                          {AGE_GROUP_ORDER.map((g) => (
                            <option key={g.key} value={g.key}>
                              {g.order}. {lang === 'ta' ? `${g.labelTa} (${g.labelEn})` : `${g.labelEn} (${g.labelTa})`}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#631226] uppercase">
                          {lang === 'ta' ? 'குடும்பத் தரப்பு' : 'Family Side'}
                        </label>
                        <select
                          value={formSide}
                          onChange={(e) => setFormSide(e.target.value as 'bride' | 'groom' | 'both')}
                          className="mt-1 w-full rounded-xl border border-[#c9932d] bg-[#fffdf7] px-3 py-2 text-xs font-semibold text-[#3a0815]"
                        >
                          <option value="bride">{lang === 'ta' ? 'மணமகள் வீட்டார் (Bride)' : "Bride's Side"}</option>
                          <option value="groom">{lang === 'ta' ? 'மணமகன் வீட்டார் (Groom)' : "Groom's Side"}</option>
                          <option value="both">{lang === 'ta' ? 'இரு வீட்டார் / நண்பர்கள் (Both)' : 'Both / Friends'}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#631226] uppercase">
                          {lang === 'ta' ? 'பெயர் (தமிழில்)' : 'Name (Tamil)'}
                        </label>
                        <input
                          type="text"
                          value={formNameTa}
                          onChange={(e) => setFormNameTa(e.target.value)}
                          placeholder="எ.கா. திரு. R. சுந்தர் – கலா"
                          className="mt-1 w-full rounded-xl border border-[#c9932d] px-3 py-2 text-xs text-[#3b1d16]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#631226] uppercase">
                          {lang === 'ta' ? 'பெயர் (ஆங்கிலத்தில்)' : 'Name (English)'}
                        </label>
                        <input
                          type="text"
                          value={formNameEn}
                          onChange={(e) => setFormNameEn(e.target.value)}
                          placeholder="e.g. Thiru. R. Sundar – Kala"
                          className="mt-1 w-full rounded-xl border border-[#c9932d] px-3 py-2 text-xs text-[#3b1d16]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#631226] uppercase">
                          {lang === 'ta' ? 'ஊர் (தமிழில்)' : 'City / Town (Tamil)'}
                        </label>
                        <input
                          type="text"
                          value={formLocTa}
                          onChange={(e) => setFormLocTa(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-[#c9932d] px-3 py-2 text-xs text-[#3b1d16]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#631226] uppercase">
                          {lang === 'ta' ? 'ஊர் (ஆங்கிலத்தில்)' : 'City / Town (English)'}
                        </label>
                        <input
                          type="text"
                          value={formLocEn}
                          onChange={(e) => setFormLocEn(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-[#c9932d] px-3 py-2 text-xs text-[#3b1d16]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#f7df94] to-[#c9932d] px-5 py-2.5 text-xs font-bold text-[#24050d] shadow cursor-pointer"
                    >
                      {editingId ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      <span>
                        {editingId
                          ? lang === 'ta'
                            ? 'மாற்றங்களைச் சேமி'
                            : 'Save Changes'
                          : lang === 'ta'
                            ? 'பட்டியலில் சேர்க்க'
                            : 'Add to List'}
                      </span>
                    </button>
                  </form>

                  {/* Search & Age Group Filter for Editing */}
                  <div className="flex flex-wrap items-center gap-2">
                    <input
                      type="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder={lang === 'ta' ? 'பெயர் தேடுக...' : 'Filter by name or city...'}
                      className="flex-1 rounded-xl border border-[#c9932d] bg-white px-3.5 py-2 text-xs"
                    />
                    <select
                      value={filterGroup}
                      onChange={(e) => setFilterGroup(e.target.value as 'all' | AgeGroupKey)}
                      className="rounded-xl border border-[#c9932d] bg-white px-3 py-2 text-xs font-semibold"
                    >
                      <option value="all">{lang === 'ta' ? 'அனைத்து வயதுப் பிரிவுகளும்' : 'All Age Groups'}</option>
                      {AGE_GROUP_ORDER.map((g) => (
                        <option key={g.key} value={g.key}>
                          {g.order}. {lang === 'ta' ? g.labelTa : g.labelEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    {visiblePeople.map((p) => {
                      const gMeta = AGE_GROUP_ORDER.find((g) => g.key === p.ageGroup);
                      return (
                        <div
                          key={p.id}
                          className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#c9932d]/40 bg-white px-3.5 py-2.5 text-xs"
                        >
                          <div className="min-w-0 flex-1">
                            <span className="inline-block rounded bg-[#fff3d2] px-2 py-0.5 text-[10px] font-bold text-[#631226]">
                              {gMeta?.order}. {lang === 'ta' ? gMeta?.labelTa : gMeta?.labelEn}
                            </span>
                            <p className="mt-1 font-bold text-[#3a0815]">
                              {lang === 'ta' ? p.nameTa : p.nameEn}
                            </p>
                            <p className="text-[11px] text-[#6e463a]">
                              {lang === 'ta' ? p.nameEn : p.nameTa} · {lang === 'ta' ? p.locationTa : p.locationEn}
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => handleStartEditPerson(p)}
                              className="inline-flex items-center gap-1 rounded-lg border border-[#c9932d] px-2.5 py-1.5 text-[11px] font-bold text-[#3a0815] hover:bg-[#fff3d2] cursor-pointer"
                            >
                              <Pencil className="h-3 w-3" />
                              <span>{lang === 'ta' ? 'திருத்து' : 'Edit'}</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeletePerson(p.id)}
                              className="inline-flex items-center gap-1 rounded-lg border border-red-200 px-2.5 py-1.5 text-[11px] font-bold text-red-700 hover:bg-red-50 cursor-pointer"
                            >
                              <Trash2 className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: COUPLE & FAMILY PORTRAITS */}
              {activeTab === 'portraits' && (
                <div className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {(
                      [
                        {
                          key: 'bridePhoto',
                          labelTa: 'மணமகள் புகைப்படம் (M. திரிஷா)',
                          labelEn: 'Bride Portrait (M. Thirisha)',
                          src: couplePhotos.bridePhoto,
                        },
                        {
                          key: 'groomPhoto',
                          labelTa: 'மணமகன் புகைப்படம் (S. சிவசங்கர்)',
                          labelEn: 'Groom Portrait (S. Siva Shankar)',
                          src: couplePhotos.groomPhoto,
                        },
                      ] as const
                    ).map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center gap-4 rounded-2xl border border-[#c9932d]/55 bg-white p-4 shadow-sm"
                      >
                        <img
                          src={item.src}
                          alt={item.labelEn}
                          className="h-20 w-20 shrink-0 rounded-xl border-2 border-[#c9932d] object-cover object-top"
                        />
                        <div className="min-w-0 flex-1 space-y-2">
                          <h4 className="font-display text-sm font-bold text-[#3a0815]">
                            {lang === 'ta' ? item.labelTa : item.labelEn}
                          </h4>
                          <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-[#631226] px-3 py-1.5 text-xs font-bold text-white hover:brightness-110">
                            <ImagePlus className="h-3.5 w-3.5 text-[#f7df94]" />
                            <span>{lang === 'ta' ? 'புதிய படம் பதிவேற்ற' : 'Upload Photo'}</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => void handleCoupleFileUpload(item.key, e)}
                            />
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-display text-base font-bold text-[#3a0815]">
                    {lang === 'ta' ? 'குடும்ப உறுப்பினர்களின் புகைப்படங்கள்' : 'Family Member Portraits'}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {familyMembers.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center gap-3.5 rounded-2xl border border-[#c9932d]/50 bg-white p-4 shadow-sm"
                      >
                        <img
                          src={member.photo}
                          alt={member.nameEn}
                          className="h-16 w-16 shrink-0 rounded-full border-2 border-[#c9932d] object-cover object-top"
                        />
                        <div className="min-w-0 flex-1 space-y-1.5">
                          <p className="text-[10px] font-bold text-[#8c6418] uppercase">
                            {lang === 'ta' ? member.roleTa : member.roleEn}
                          </p>
                          <p className="truncate font-display text-sm font-bold text-[#3a0815]">
                            {lang === 'ta' ? member.nameTa : member.nameEn}
                          </p>
                          <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#c9932d] bg-[#fff5db] px-3 py-1 text-[11px] font-bold text-[#3a0815] hover:bg-[#f7df94]">
                            <ImagePlus className="h-3.5 w-3.5 text-[#631226]" />
                            <span>{lang === 'ta' ? 'படம் மாற்ற' : 'Change Photo'}</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => void handleFamilyMemberFileUpload(member.id, e)}
                            />
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: ALBUM PHOTOS */}
              {activeTab === 'album' && (
                <div className="space-y-6">
                  <form
                    onSubmit={handleAddAlbumPhoto}
                    className="space-y-3 rounded-2xl border border-[#c9932d]/55 bg-white p-4 shadow-sm sm:p-5"
                  >
                    <h3 className="font-display text-base font-bold text-[#3a0815]">
                      {lang === 'ta' ? 'ஆல்பத்தில் புதிய புகைப்படம் சேர்க்க' : 'Add Photo to Wedding Album'}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#631226] px-4 py-2 text-xs font-bold text-white">
                        <ImagePlus className="h-4 w-4 text-[#f7df94]" />
                        <span>{lang === 'ta' ? 'சாதனத்திலிருந்து படம் தேர்வு' : 'Choose Image File'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => void handleAlbumFileUpload(e)}
                        />
                      </label>
                      <input
                        type="text"
                        value={albumUrlInput}
                        onChange={(e) => setAlbumUrlInput(e.target.value)}
                        placeholder={lang === 'ta' ? 'அல்லது படத்தின் URL உள்ளிடவும்...' : 'Or paste image URL...'}
                        className="flex-1 rounded-xl border border-[#c9932d] px-3 py-2 text-xs"
                      />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input
                        type="text"
                        value={albumCaptionTa}
                        onChange={(e) => setAlbumCaptionTa(e.target.value)}
                        placeholder={lang === 'ta' ? 'தலைப்பு (தமிழில்)' : 'Caption (Tamil)'}
                        className="rounded-xl border border-[#c9932d] px-3 py-2 text-xs"
                      />
                      <input
                        type="text"
                        value={albumCaptionEn}
                        onChange={(e) => setAlbumCaptionEn(e.target.value)}
                        placeholder={lang === 'ta' ? 'தலைப்பு (ஆங்கிலத்தில்)' : 'Caption (English)'}
                        className="rounded-xl border border-[#c9932d] px-3 py-2 text-xs"
                      />
                      <input
                        type="text"
                        value={albumDateTa}
                        onChange={(e) => setAlbumDateTa(e.target.value)}
                        placeholder={lang === 'ta' ? 'நிகழ்வு / தேதி (தமிழில்)' : 'Moment tag (Tamil)'}
                        className="rounded-xl border border-[#c9932d] px-3 py-2 text-xs"
                      />
                      <input
                        type="text"
                        value={albumDateEn}
                        onChange={(e) => setAlbumDateEn(e.target.value)}
                        placeholder={lang === 'ta' ? 'நிகழ்வு / தேதி (ஆங்கிலத்தில்)' : 'Moment tag (English)'}
                        className="rounded-xl border border-[#c9932d] px-3 py-2 text-xs"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#f7df94] to-[#c9932d] px-5 py-2 text-xs font-bold text-[#24050d] shadow cursor-pointer"
                    >
                      <Plus className="h-4 w-4" />
                      <span>{lang === 'ta' ? 'ஆல்பத்தில் சேர்க்க' : 'Add to Album'}</span>
                    </button>
                  </form>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {albumPhotos.map((photo, idx) => (
                      <div
                        key={`${photo.src}-${idx}`}
                        className="overflow-hidden rounded-2xl border border-[#c9932d]/50 bg-white shadow-sm"
                      >
                        <img
                          src={photo.src}
                          alt={photo.captionEn}
                          className="aspect-[16/10] w-full object-cover"
                        />
                        <div className="space-y-2 p-3">
                          <p className="text-xs font-bold text-[#3a0815]">
                            {lang === 'ta' ? photo.captionTa : photo.captionEn}
                          </p>
                          <div className="flex items-center justify-between gap-2">
                            <label className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-[#c9932d] bg-[#fff5db] px-2.5 py-1 text-[11px] font-bold text-[#3a0815]">
                              <ImagePlus className="h-3 w-3" />
                              <span>{lang === 'ta' ? 'படம் மாற்ற' : 'Replace'}</span>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => void handleReplaceAlbumFile(idx, e)}
                              />
                            </label>
                            <button
                              type="button"
                              onClick={() => {
                                onUpdateAlbumPhotos(albumPhotos.filter((_, i) => i !== idx));
                                notify(lang === 'ta' ? 'புகைப்படம் நீக்கப்பட்டது.' : 'Album photo removed.');
                              }}
                              className="inline-flex items-center gap-1 rounded-lg border border-red-200 px-2.5 py-1 text-[11px] font-bold text-red-700 hover:bg-red-50 cursor-pointer"
                            >
                              <Trash2 className="h-3 w-3" />
                              <span>{lang === 'ta' ? 'நீக்கு' : 'Delete'}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
