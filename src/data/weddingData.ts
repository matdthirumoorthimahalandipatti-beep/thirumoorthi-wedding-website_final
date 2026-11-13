export type Lang = 'en' | 'ta';
export type TeamSide = 'ponnu' | 'mappillai';

export interface OracleFortune {
  id: string;
  emoji: string;
  en: string;
  ta: string;
}

export interface JukeboxTrack {
  id: string;
  youtubeId: string;
  title: string;
  artist: string;
  suggestedBy: string;
  dedication: string;
  votes: number;
  addedAt: number;
}

export type AgeGroupKey =
  | 'kollu_patti_thatha'
  | 'thatha_patti'
  | 'athai_mama'
  | 'periyappa_periyamma'
  | 'chithappa_chithi'
  | 'akka_machan'
  | 'anna_anni'
  | 'hosts_welcomers'
  | 'children'
  | 'friends';

export interface AgeGroupMeta {
  key: AgeGroupKey;
  order: number;
  labelTa: string;
  labelEn: string;
}

export const AGE_GROUP_ORDER: AgeGroupMeta[] = [
  { key: 'kollu_patti_thatha', order: 1, labelTa: 'கொள்ளுப் பாட்டி / தாத்தா', labelEn: 'Kollu Patti / Thatha' },
  { key: 'thatha_patti', order: 2, labelTa: 'தாத்தா / பாட்டி', labelEn: 'Thatha / Patti' },
  { key: 'athai_mama', order: 3, labelTa: 'அத்தை / மாமா', labelEn: 'Athai / Mama' },
  { key: 'periyappa_periyamma', order: 4, labelTa: 'பெரியப்பா / பெரியம்மா', labelEn: 'Periyappa / Periyamma' },
  { key: 'chithappa_chithi', order: 5, labelTa: 'சித்தப்பா / சித்தி', labelEn: 'Chithappa / Chithi' },
  { key: 'akka_machan', order: 6, labelTa: 'அக்கா / மச்சான்', labelEn: 'Akka / Machan' },
  { key: 'anna_anni', order: 7, labelTa: 'அண்ணன் / அண்ணி', labelEn: 'Anna / Anni' },
  { key: 'hosts_welcomers', order: 8, labelTa: 'வரவேற்பாளர்கள் & இல்லத்தினர்', labelEn: 'Hosts and Welcomers' },
  { key: 'children', order: 9, labelTa: 'குட்டீஸ்கள் (குழந்தைகள்)', labelEn: 'Children' },
  { key: 'friends', order: 10, labelTa: 'நண்பர்கள் & ஊர் பொதுமக்கள்', labelEn: 'Friends' },
];

export interface DirectoryPerson {
  id: string;
  nameTa: string;
  nameEn: string;
  side: 'bride' | 'groom' | 'both';
  ageGroup: AgeGroupKey;
  groupTa: string;
  groupEn: string;
  locationTa: string;
  locationEn: string;
  friendCategory?:
    | 'thaai_school'
    | 'kalasalingam_mentors'
    | 'kalasalingam_seniors'
    | 'kalasalingam_friends';
  isSenior?: boolean;
}

export interface BlessingEntry {
  id: string;
  name: string;
  relation: string;
  message: string;
  time: string;
}

export interface AlbumPhoto {
  src: string;
  captionEn: string;
  captionTa: string;
  dateEn: string;
  dateTa: string;
}

export const HERITAGE_ASSETS = {
  venuePhoto: '/assets/gallery/matd-thirumoorthi-mahal.jpg',
  templeDoorBg: '/assets/aistudio/temple-door-reference_325e2119.png',
  royalKey: '/assets/aistudio/royal-key-transparent_de554471.png',
  garlandVideo: '/assets/aistudio/garland-exchange-5sec-clear.mp4',
  garlandPoster: '/assets/aistudio/garland-video-poster_27772393.jpg',
  heroMandapamCouple: '/assets/aistudio/hero-mandapam-couple_49d38ac9.webp',
  heroTempleDay: '/assets/aistudio/page2-temple-day_c5eabb40.webp',
  bridePhoto: '/assets/aistudio/bride_photo_b0c6d03a.png',
  groomPhoto: '/assets/aistudio/groom_photo_1619e017.png',
  coupleTemple: '/assets/aistudio/bride-groom-temple_49d38ac9.webp',
  coupleSectionBg: '/assets/aistudio/couple-section-wedding_fd409aac.webp',
  venueBg: '/assets/gallery/matd-thirumoorthi-mahal.jpg',
  eventsBg: '/assets/aistudio/temple-aerial-sunset-two_89d2d3fe.webp',
  familyBorder: '/assets/aistudio/pages8-family-border_5ae5fbe4.webp',
  goddessFrame: '/assets/aistudio/ornate-goddess-invitation-frame_96a0b883.webp',
  invitationBg: '/assets/aistudio/page6-goddess-frame_f9cd4876.webp',
  mandapamFrame: '/assets/aistudio/mandapam-invitation-frame_da999d57.webp',
  wishesBg: '/assets/gallery/matd-thirumoorthi-mahal.jpg',
  thanksCourtyard: '/assets/aistudio/final-thank-you-courtyard_49d38ac9.webp',
  maduraiPanorama: '/assets/aistudio/madurai-sunset-panorama_49d38ac9.webp',
  weddingCourtyard: '/assets/aistudio/wedding-courtyard_49d38ac9.webp',
  duskTemple: '/assets/aistudio/golden-temple-wedding-dusk_8fc0376c.webp',
  patrikaScan: '/assets/aistudio/image_21249b37.png',
  portraitPlaceholder: '/assets/aistudio/portrait-placeholder_a8ad7109.webp',
  relative001: '/assets/aistudio/relative-001_a8ad7109.webp',
  maduraiHeritageBg: '/assets/aistudio/madurai-heritage-background_62f0e0ee.webp',
  invitationTempleBg: '/assets/aistudio/invitation-temple-background_7c9e789b.webp',
  page4PeopleFrame: '/assets/aistudio/page4-people-frame_a8ad7109.webp',
  page5HorizontalFrame: '/assets/aistudio/page5-horizontal-frame_da999d57.webp',
  page7FamilyFrame: '/assets/aistudio/page7-family-frame_a8ad7109.webp',
  familyInvitationBorder: '/assets/aistudio/family-invitation-border_da999d57.webp',
  floralInvitationBorder: '/assets/aistudio/floral-invitation-border_da999d57.webp',
  ornateFamilyBorder: '/assets/aistudio/ornate-family-border_da999d57.webp',
  rosePetals: [
    '/assets/aistudio/rose-petal-curved_8a7c275b.png',
    '/assets/aistudio/rose-petal-dotted_9ef13c84.png',
    '/assets/aistudio/rose-petal-folded_394ed581.png',
    '/assets/aistudio/rose-petal-frilled_c55cdba0.png',
    '/assets/aistudio/rose-petal-round_9b4d7b85.png',
    '/assets/aistudio/rose-bloom-real_1261644c.png',
  ],
};

export const ALBUM_PHOTOS: AlbumPhoto[] = [
  {
    src: '/assets/gallery/matd-thirumoorthi-mahal.jpg',
    captionEn: 'MATD Thirumoorthi Mahal — Grand Main Entrance',
    captionTa: 'MATD திருமூர்த்தி மஹால் — பிரம்மாண்ட வரவேற்பு முகப்பு',
    dateEn: 'Venue Architecture',
    dateTa: 'திருமண அரங்கம்',
  },
  {
    src: '/assets/gallery/grand-entrance.jpg',
    captionEn: 'Grand Floral Entrance Arch & Illumination',
    captionTa: 'பிரம்மாண்ட மலர் அலங்கார வரவேற்பு தோரண வாயில்',
    dateEn: 'Grand Welcome Arch',
    dateTa: 'வரவேற்பு அலங்காரம்',
  },
  {
    src: '/assets/gallery/stage-decoration.jpg',
    captionEn: 'Wedding Stage Floral Splendor',
    captionTa: 'மணமேடை மலர் அலங்காரப் பொலிவு',
    dateEn: 'Kalyana Mandapam Stage',
    dateTa: 'திருமண மேடை',
  },
  {
    src: '/assets/gallery/reception-decoration.jpg',
    captionEn: 'Evening Reception Stage Illumination',
    captionTa: 'நிச்சயதார்த்த & வரவேற்பு மேடை விளக்கு அலங்காரம்',
    dateEn: 'Reception Night',
    dateTa: 'வரவேற்பு விழா',
  },
  {
    src: '/assets/gallery/hall-view.jpg',
    captionEn: 'Thirumoorthi Mahal Spacious Celebration Hall',
    captionTa: 'திருமூர்த்தி மஹால் பிரம்மாண்ட விழா அரங்கம்',
    dateEn: 'Grand Hall View',
    dateTa: 'மண்டபக் காட்சி',
  },
  {
    src: '/assets/gallery/dining-area.jpg',
    captionEn: 'Traditional Madurai Wedding Feast Dining Hall',
    captionTa: 'பாரம்பரிய மதுரைத் திருமண விருந்து உணவுக் கூடம்',
    dateEn: 'Traditional Virundhu',
    dateTa: 'திருமண விருந்து கூடம்',
  },
  {
    src: '/assets/gallery/marriage-setup.jpg',
    captionEn: 'Sacred Thirumangalyam Pooja Setup',
    captionTa: 'திருமாங்கல்ய பூஜை மற்றும் சுப முகூர்த்த மேடை அமைப்பு',
    dateEn: 'Muhurtham Sanctum',
    dateTa: 'முகூர்த்த மேடை',
  },
  {
    src: '/assets/gallery/mahal-interior.jpg',
    captionEn: 'Mahal Interior & Royal Mandapam Ambience',
    captionTa: 'மஹால் உட்புற வடிவமைப்பு மற்றும் மங்கள சூழல்',
    dateEn: 'Interior Ambience',
    dateTa: 'மண்டப உட்புறம்',
  },
  {
    src: '/assets/gallery/event-setup.jpg',
    captionEn: 'Celebration Event Setup & Guest Seating',
    captionTa: 'மங்கள நிகழ்வு விழா அமைப்பு & விருந்தினர் அரங்கம்',
    dateEn: 'Event Ambience',
    dateTa: 'நிகழ்வு அரங்கம்',
  },
  {
    src: '/assets/gallery/grand-entrance-3.jpg',
    captionEn: 'Festive Welcome Flower Archway',
    captionTa: 'வண்ண மலர் அலங்கார வரவேற்பு முகப்பு தோரணம்',
    dateEn: 'Floral Welcome',
    dateTa: 'மலர் வரவேற்பு',
  },
  {
    src: '/assets/gallery/stage-decoration-4.jpg',
    captionEn: 'Sacred Stage Backdrop & Ornate Pillars',
    captionTa: 'மணமேடை பின்னணி மற்றும் மங்களத் தூண்கள்',
    dateEn: 'Stage Backdrop',
    dateTa: 'மேடை பின்னணி',
  },
  {
    src: '/assets/gallery/family-appa.jpg',
    captionEn: 'Beloved Family Elder & Heritage Memories',
    captionTa: 'குடும்பப் பெரியவர் ஆசி மற்றும் நினைவுகள்',
    dateEn: 'Family Blessings',
    dateTa: 'குடும்ப ஆசி',
  },
  {
    src: '/assets/gallery/gallery-moment-01.jpg',
    captionEn: 'Auspicious Wedding Moments & Celebrations',
    captionTa: 'மங்கள திருமண விழா தருணங்கள்',
    dateEn: 'Joyous Memories',
    dateTa: 'மகிழ்ச்சி தருணங்கள்',
  },
  {
    src: '/assets/gallery/gallery-moment-06.jpg',
    captionEn: 'Traditional Family Gathering & Festivities',
    captionTa: 'பாரம்பரியக் குடும்ப சங்கமம் மற்றும் கொண்டாட்டங்கள்',
    dateEn: 'Heritage Festivities',
    dateTa: 'குடும்பக் கொண்டாட்டம்',
  },
  {
    src: '/assets/gallery/gallery-moment-09.jpg',
    captionEn: 'Divine Wedding Blessings & Cheerful Smiles',
    captionTa: 'தெய்வீகத் திருமண ஆசிகள் மற்றும் புன்னகைகள்',
    dateEn: 'Sacred Blessings',
    dateTa: 'மங்கள ஆசி',
  },
  {
    src: '/assets/gallery/gallery-moment-11.jpg',
    captionEn: 'Family & Friends Wedding Festivities',
    captionTa: 'உறவினர்கள் & நண்பர்கள் சங்கம விழா',
    dateEn: 'Wedding Joy',
    dateTa: 'விழா மகிழ்ச்சி',
  },
];

export const WEDDING_CONFIG = {
  bride: 'M. Thirisha',
  brideTa: 'M. திரிஷா',
  brideQualification: 'M.A. English Literature',
  brideQualificationTa: 'ஆங்கில இலக்கியத்தில் முதுகலை (M.A.)',
  groom: 'S. Siva Shankar',
  groomShort: 'Siva Shankar',
  groomTa: 'S. சிவசங்கர்',
  groomQualification: 'B.E. · Tamil Nadu Fire and Rescue Services',
  groomQualificationTa: 'B.E. · தமிழ்நாடு தீயணைப்பு மற்றும் மீட்புப் பணிகள் துறை',
  familyFunction: 'THIRUMOORTHI GROUPS FAMILY FUNCTION',
  familyFunctionTa: 'திருமூர்த்தி குழுமக் குடும்ப விழா',
  deities: 'Sri Vetri Vinayagar Thunai · Pothikulam Muthumari Amman · Oor Kavalan Samy',
  deitiesTa: 'ஸ்ரீ வெற்றி விநாயகர் துணை · பொதிகுளம் முத்துமாரியம்மன் · ஊர் காவலன் சாமி',
  muhurthamIso: '2026-11-22T06:15:00+05:30',
  dateDisplayEn: 'Sunday, 22 November 2026',
  dateDisplayTa: 'ஞாயிறு, 22 நவம்பர் 2026',
  muhurthamTimeEn: '6:15 – 7:15 AM',
  muhurthamTimeTa: 'காலை 6:15 – 7:15',
  feastTimeEn: '8:00 AM onwards',
  feastTimeTa: 'காலை 8:00 மணி முதல்',
  nichayatharthamEn: 'Saturday, 21 November 2026 · 6:30 PM',
  nichayatharthamTa: 'சனி, 21 நவம்பர் 2026 · மாலை 6:30',
  engagementTitleTa: 'நிச்சயதார்த்தம்',
  engagementTitleEn: 'Engagement (Nichayathartham)',
  engagementDressTa: 'பாரம்பரிய பட்டுப் புடவை / வேஷ்டி அல்லது ஷெர்வானி',
  engagementDressEn: 'Traditional Silk Saree / Veshti or Sherwani',
  engagementDescTa: 'குடும்பத்தினர் மற்றும் பெரியோர்களின் ஆசிகளுடன் நடைபெறும் பாரம்பரிய நிச்சயதார்த்த விழா.',
  engagementDescEn: 'Traditional betrothal ceremony blessed by both families and elders.',
  venueShort: 'MATD Thirumoorthi Mahal, Madurai',
  venueFullEn: 'MATD Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti, Madurai',
  venueFullTa: 'MATD திருமூர்த்தி மஹால், ஆண்டிப்பட்டி பங்களா, டி. வாடிப்பட்டி, மதுரை',
  mapsUrl: 'https://maps.app.goo.gl/GA7fjzCVVkBG7dwv7',
  busUrl: 'https://www.google.com/search?q=buses+to+Mattuthavani+Bus+Stand+Madurai',
  trainUrl: 'https://www.google.com/search?q=trains+to+Madurai+Junction+MDU',
  brideParentsEn: 'A. Moorthi (Founder & Chairperson) & M. Alamelu (Founder & CEO), Thirumoorthi Groups',
  brideParentsTa: 'A. மூர்த்தி (நிறுவனர் & தலைவர்) & M. அலமேலு (நிறுவனர் & CEO), திருமூர்த்தி குழுமம்',
  brideBrotherEn: 'M. Deepak · B.Tech ECE · Embedded Engineer & Minors UAV',
  brideBrotherTa: 'M. தீபக் · B.Tech ECE · எம்பெடெட் பொறியாளர் & Minors UAV',
  brideBusinessesEn:
    'Thirumoorthi Groups spans diverse business sectors across Madurai — including hospitality and wedding hall services at MATD Thirumoorthi Mahal, refreshments at Thirumoorthi Tea Stall, and daily retail provisions at Thirumoorthi Grocery Shop.',
  brideBusinessesTa:
    'திருமூர்த்தி குழுமம் திருமண மண்டபம், தேநீர் கடை மற்றும் மளிகைக் கடை எனப் பல்வேறு வணிகத் துறைகளை உள்ளடக்கிய குடும்ப நிறுவனமாகும் — MATD திருமூர்த்தி மஹால், திருமூர்த்தி தேநீர் கடை மற்றும் திருமூர்த்தி மளிகைக் கடை ஆகியவை இதன் முக்கிய அங்கங்களாகும்.',
  groomParentsEn: 'S. Suresh & Valli · Owners, Venkatesh Grocery Shop',
  groomParentsTa: 'S. சுரேஷ் & வள்ளி · வெங்கடேஷ் மளிகைக் கடை உரிமையாளர்கள்',
  groomSisterFamilyEn: 'P. Thirumanikandan (M.Pharm., Aurobindo Pharma Ltd.) & Sivasandhiya (M.Sc., B.Ed.), Andhra Pradesh',
  groomSisterFamilyTa: 'P. திருமணிகண்டன் (M.Pharm., Aurobindo Pharma Ltd.) & சிவசந்தியா (M.Sc., B.Ed.), ஆந்திரப் பிரதேசம்',
  brideCoordName: 'M. Deepak',
  brideCoordPhone: '7845051288',
  groomCoordName: 'Sankar (Groom)',
  groomCoordPhone: '9655884474',
  websiteUrl: 'https://thirumoorthi-gourps-family-wedding.vercel.app/',
  auspiciousNoticeTa:
    'நிகழும் மங்களகரமான பராபவ வருடம் கார்த்திகை மாதம் 6-ஆம் தேதி (22.11.2026) ஞாயிற்றுக்கிழமை திரயோதசி திதியும், அசுபதி நட்சத்திரமும் சித்தயோகமும் கூடிய சுபயோக சுபதினத்தில் அன்று காலை 6.00 மணிக்குமேல் 7.35 மணிக்குள் விருச்சிக லக்கினத்தில்',
  auspiciousNoticeEn:
    'On the auspicious Sunday, 22 November 2026 (Karthigai 6, Parabhava Year), Trayodashi Thithi, Aswini Nakshatra & Siddha Yoga in Vrischika Lagnam between 6:00 AM and 7:35 AM',
  busRoutesTa: [
    'மதுரை பெரியார் நிலையம் To வாடிப்பட்டி : 71, 41, 41A, 41K',
    'அலங்காநல்லூர் To வாடிப்பட்டி : L1',
  ],
  busRoutesEn: [
    'Madurai Periyar Bus Stand to Vadipatti: 71, 41, 41A, 41K',
    'Alanganallur to Vadipatti: L1',
  ],
};

export interface FamilyMemberPhotoCard {
  id: string;
  side: 'bride' | 'groom';
  nameEn: string;
  nameTa: string;
  roleEn: string;
  roleTa: string;
  detailEn: string;
  detailTa: string;
  photo: string;
}

export const FAMILY_MEMBERS: FamilyMemberPhotoCard[] = [
  {
    id: 'bf-father',
    side: 'bride',
    nameEn: 'A. Moorthi',
    nameTa: 'A. மூர்த்தி',
    roleEn: 'Father of the Bride',
    roleTa: 'மணமகள் தந்தை',
    detailEn: 'Founder & Chairperson, Thirumoorthi Groups',
    detailTa: 'நிறுவனர் & தலைவர், திருமூர்த்தி குழுமம்',
    photo: '/assets/aistudio/bride_father_ea95bf23.png',
  },
  {
    id: 'bf-mother',
    side: 'bride',
    nameEn: 'M. Alamelu',
    nameTa: 'M. அலமேலு',
    roleEn: 'Mother of the Bride',
    roleTa: 'மணமகள் தாய்',
    detailEn: 'Founder & CEO, Thirumoorthi Groups',
    detailTa: 'நிறுவனர் & CEO, திருமூர்த்தி குழுமம்',
    photo: '/assets/aistudio/bride_mother_fa349240.png',
  },
  {
    id: 'bf-brother',
    side: 'bride',
    nameEn: 'M. Deepak',
    nameTa: 'M. தீபக்',
    roleEn: 'Brother of the Bride',
    roleTa: 'மணமகள் சகோதரர்',
    detailEn: 'B.Tech ECE · Embedded Engineer & Minors UAV',
    detailTa: 'B.Tech ECE · எம்பெடெட் பொறியாளர் & Minors UAV',
    photo: '/assets/aistudio/image_ec79226f.png',
  },
  {
    id: 'gf-father',
    side: 'groom',
    nameEn: 'S. Suresh',
    nameTa: 'S. சுரேஷ்',
    roleEn: 'Father of the Groom',
    roleTa: 'மணமகன் தந்தை',
    detailEn: 'Owner, Venkatesh Grocery Shop',
    detailTa: 'உரிமையாளர், வெங்கடேஷ் மளிகைக் கடை',
    photo: '/assets/aistudio/groom_father_6b080c57.jpeg',
  },
  {
    id: 'gf-mother',
    side: 'groom',
    nameEn: 'Valli',
    nameTa: 'வள்ளி',
    roleEn: 'Mother of the Groom',
    roleTa: 'மணமகன் தாய்',
    detailEn: 'Co-owner, Venkatesh Grocery Shop',
    detailTa: 'இணை உரிமையாளர், வெங்கடேஷ் மளிகைக் கடை',
    photo: '/assets/aistudio/groom_mother_eb8d6156.jpeg',
  },
];

export interface WeddingAudioTrack {
  id: string;
  src: string;
  titleTa: string;
  titleEn: string;
  tagTa: string;
  tagEn: string;
}

// Games section dedicated theme (plays only when guest enters Games section)
export const GAMES_THEME_SRC = '/assets/audio/games_section_theme.mp3';

export const WEDDING_AUDIO_COLLECTION: WeddingAudioTrack[] = [
  {
    id: 'wt-01',
    src: '/assets/audio/wedding_track_01.mpeg',
    titleTa: 'திருமண இசை — 1',
    titleEn: 'Wedding Special — 1',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-02',
    src: '/assets/audio/wedding_track_02.mpeg',
    titleTa: 'திருமண இசை — 2',
    titleEn: 'Wedding Special — 2',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-03',
    src: '/assets/audio/wedding_track_03.mpeg',
    titleTa: 'திருமண இசை — 3',
    titleEn: 'Wedding Special — 3',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-04',
    src: '/assets/audio/wedding_track_04.mpeg',
    titleTa: 'திருமண இசை — 4',
    titleEn: 'Wedding Special — 4',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-05',
    src: '/assets/audio/wedding_track_05.mpeg',
    titleTa: 'திருமண இசை — 5',
    titleEn: 'Wedding Special — 5',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-06',
    src: '/assets/audio/wedding_track_06.mpeg',
    titleTa: 'திருமண இசை — 6',
    titleEn: 'Wedding Special — 6',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-07',
    src: '/assets/audio/wedding_track_07.mpeg',
    titleTa: 'திருமண இசை — 7',
    titleEn: 'Wedding Special — 7',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-08',
    src: '/assets/audio/wedding_track_08.mpeg',
    titleTa: 'திருமண இசை — 8',
    titleEn: 'Wedding Special — 8',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-09',
    src: '/assets/audio/wedding_track_09.mpeg',
    titleTa: 'திருமண இசை — 9',
    titleEn: 'Wedding Special — 9',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-10',
    src: '/assets/audio/wedding_track_10.mpeg',
    titleTa: 'திருமண இசை — 10',
    titleEn: 'Wedding Special — 10',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-11',
    src: '/assets/audio/wedding_track_11.mpeg',
    titleTa: 'திருமண இசை — 11',
    titleEn: 'Wedding Special — 11',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-12',
    src: '/assets/audio/wedding_track_12.mpeg',
    titleTa: 'திருமண இசை — 12',
    titleEn: 'Wedding Special — 12',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-13',
    src: '/assets/audio/wedding_track_13.mpeg',
    titleTa: 'திருமண இசை — 13',
    titleEn: 'Wedding Special — 13',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-14',
    src: '/assets/audio/wedding_track_14.mpeg',
    titleTa: 'திருமண இசை — 14',
    titleEn: 'Wedding Special — 14',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-15',
    src: '/assets/audio/wedding_track_15.mpeg',
    titleTa: 'திருமண இசை — 15',
    titleEn: 'Wedding Special — 15',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-16',
    src: '/assets/audio/wedding_track_16.mpeg',
    titleTa: 'திருமண இசை — 16',
    titleEn: 'Wedding Special — 16',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-17',
    src: '/assets/audio/wedding_track_17.mpeg',
    titleTa: 'திருமண இசை — 17',
    titleEn: 'Wedding Special — 17',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-18',
    src: '/assets/audio/wedding_track_18.mpeg',
    titleTa: 'திருமண இசை — 18',
    titleEn: 'Wedding Special — 18',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-19',
    src: '/assets/audio/wedding_track_19.mpeg',
    titleTa: 'திருமண இசை — 19',
    titleEn: 'Wedding Special — 19',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-20',
    src: '/assets/audio/wedding_track_20.mpeg',
    titleTa: 'திருமண இசை — 20',
    titleEn: 'Wedding Special — 20',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-21',
    src: '/assets/audio/wedding_track_21.mpeg',
    titleTa: 'திருமண இசை — 21',
    titleEn: 'Wedding Special — 21',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-22',
    src: '/assets/audio/wedding_track_22.mpeg',
    titleTa: 'திருமண இசை — 22',
    titleEn: 'Wedding Special — 22',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-23',
    src: '/assets/audio/wedding_track_23.mpeg',
    titleTa: 'திருமண இசை — 23',
    titleEn: 'Wedding Special — 23',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-24',
    src: '/assets/audio/wedding_track_24.mpeg',
    titleTa: 'திருமண இசை — 24',
    titleEn: 'Wedding Special — 24',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-25',
    src: '/assets/audio/wedding_track_25.mpeg',
    titleTa: 'திருமண இசை — 25',
    titleEn: 'Wedding Special — 25',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-26',
    src: '/assets/audio/wedding_track_26.mpeg',
    titleTa: 'திருமண இசை — 26',
    titleEn: 'Wedding Special — 26',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
  {
    id: 'wt-27',
    src: '/assets/audio/wedding_track_27.mpeg',
    titleTa: 'திருமண இசை — 27',
    titleEn: 'Wedding Special — 27',
    tagTa: 'குடும்ப கலைஞர் பாடல்',
    tagEn: 'Family Artist Track',
  },
];

export interface RoyalTitleTier {
  minScore: number;
  titleEn: string;
  titleTa: string;
}

export const ROYAL_TITLES: RoyalTitleTier[] = [
  { minScore: 0, titleEn: 'Mandapam Royal Guest', titleTa: 'மண்டப சிறப்பு விருந்தினர்' },
  { minScore: 100, titleEn: 'Kalyana Kondattam', titleTa: 'கல்யாண கொண்டாட்டம்' },
  { minScore: 250, titleEn: 'Madurai Vilakku Star', titleTa: 'மதுரை விளக்கு நட்சத்திரம்' },
  { minScore: 450, titleEn: 'Sangeet Showstopper', titleTa: 'சங்கீத் நாயகன்/நாயகி' },
  { minScore: 700, titleEn: 'Vaigai Royal Champion', titleTa: 'வைகை அரச சாம்பியன்' },
];

export function getRoyalTitle(score: number, lang: Lang): string {
  let current = ROYAL_TITLES[0];
  for (const tier of ROYAL_TITLES) {
    if (score >= tier.minScore) current = tier;
  }
  return lang === 'ta' ? current.titleTa : current.titleEn;
}

export const ORACLE_FORTUNES: OracleFortune[] = [
  {
    id: 'f1',
    emoji: '🍨',
    en: 'Jigarthanda Jackpot: Whenever you visit Madurai, the shopkeeper will mysteriously add double malai in your Jigarthanda with a grand smile!',
    ta: 'ஜிகர்தண்டா யோகம்: மதுரையில எந்த கடைக்கு போனாலும், உங்களுக்கு மட்டும் ஸ்பெஷல் ஜிகர்தண்டாவுல எக்ஸ்ட்ரா பாலாடை போட்டுத் தருவாங்க!',
  },
  {
    id: 'f2',
    emoji: '🍗',
    en: 'Biryani Leg Piece Guarantee: Every time you open a biryani box or sit at a wedding feast, the juiciest chicken/mutton leg piece will land straight in your plate!',
    ta: 'லெக் பீஸ் யோகம்: கல்யாண விருந்துலயோ ஹோட்டல்லயோ நீங்க பிரியாணி சாப்பிடும் போதெல்லாம், லெக் பீஸ் தப்பாம உங்க இலைக்கு தான் வரும்!',
  },
  {
    id: 'f3',
    emoji: '🔌',
    en: 'Charger Immortality: Nobody in your entire family will ever take your phone charger again. It will always stay exactly where you plugged it!',
    ta: 'சார்ஜர் அதிர்ஷ்டம்: உங்க போன் சார்ஜரை இனிமேல் வீட்ல யாரும் ஆட்டைய போட மாட்டாங்க! 100% சார்ஜோட பத்திரமா இருக்கும்!',
  },
  {
    id: 'f4',
    emoji: '💃🕺',
    en: 'Viral Kuthu Legend: At the next family sangeet, your spontaneous "Vaathi Coming" dance steps will accidentally go viral with 1 million views!',
    ta: 'டான்ஸ் சூப்பர் ஸ்டார்: அடுத்த மாமன்/மச்சான் கல்யாணத்துல நீங்க போடுற அதிரடி குத்து டான்ஸ் இன்ஸ்டா ரீல்ஸ்ல 1 மில்லியன் வியூஸ் போகும்!',
  },
  {
    id: 'f5',
    emoji: '☕',
    en: 'GPay Savior Miracle: Every single time you go for hot filter coffee or Madurai bun parotta, your friend will rush and pay the bill before you even unlock your phone!',
    ta: 'கூகுள் பே யோகம்: நீங்க டீ, காபி, பன் பரோட்டா சாப்பிட போகும் போதெல்லாம், உங்க ஃப்ரெண்டே அவசரப்பட்டு பில்ல பே பண்ணிடுவாரு!',
  },
  {
    id: 'f6',
    emoji: '😴',
    en: 'Sunday 11 AM Royal Decree: The universe decrees no alarm, mother, or spouse is legally allowed to wake you up before 11:00 AM on Sundays!',
    ta: 'ஞாயிறு ராஜ தூக்கம்: இனிமேல் எந்த ஞாயிற்றுக்கிழமையும் காலையில 11 மணி வரைக்கும் உங்களை யாரும் தூக்கத்துல இருந்து எழுப்பவே கூடாது!',
  },
  {
    id: 'f7',
    emoji: '🍲',
    en: 'Double Payasam VIP: In every Kalyana Virundhu feast, the payasam server will make eye contact, smile, and pour you three extra ladlefuls!',
    ta: 'பந்திக்கு முந்து மன்னன்: கல்யாண சாப்பாட்டுல பாயாசம் போடும்போது, கரெக்டா 2-வது முறை வர்றவர் உங்க இலையில தான் முதல்ல ஊத்துவார்!',
  },
  {
    id: 'f8',
    emoji: '🟢',
    en: 'Green Signal Wizard: Every traffic signal in town will turn green the exact second your bike or car approaches it!',
    ta: 'டிராபிக் சிக்னல் மேஜிக்: நீங்க வண்டி ஓட்டும் போதெல்லாம் எல்லா டிராபிக் சிக்னலும் நீங்க பக்கத்துல போன உடனே பச்சையா மாறும்!',
  },
  {
    id: 'f9',
    emoji: '🍕',
    en: 'Midnight Fridge Treasure: Every time you sneak into the kitchen at 1:00 AM, a delicious snack will be mysteriously waiting inside the fridge!',
    ta: 'நள்ளிரவு ஸ்நாக்ஸ் ரகசியம்: நைட் 1 மணிக்கு பசிக்கும்போது ஃபிரிட்ஜ்ல ஒரு சூப்பர் ஸ்நாக்ஸ் உங்களுக்காகவே ஒளிஞ்சிருக்கும்!',
  },
  {
    id: 'f10',
    emoji: '💍',
    en: 'Next Grand Stage Alert: The auspicious wedding garland is aimed directly at your hands — start picking your silk outfit right now!',
    ta: 'அடுத்த மாப்பிள்ளை / பொண்ணு அலர்ட்: அடுத்த பிரம்மாண்ட கல்யாணத்துல மணமாலை கரெக்டா உங்க கைக்குள்ள தான் வந்து விழப்போகுது!',
  },
  {
    id: 'f11',
    emoji: '🕶️',
    en: 'Madurai Fashion Icon: Even if you wear simple track pants, relatives will whisper: "Wow, which luxury boutique did they buy this from?"',
    ta: 'ஸ்டைல் மன்னன்/அரசி: நீங்க சாதாரண டிரஸ் போட்டாலும் சுத்தி இருக்கிறவங்க "எந்த பொட்டிக்ல வாங்குனீங்க?"னு கேட்டுட்டே இருப்பாங்க!',
  },
  {
    id: 'f12',
    emoji: '👑',
    en: 'Supreme Court of Family: In every family debate, everyone will stop arguing and declare: "Whatever you decide is the final golden rule!"',
    ta: 'குடும்ப பஞ்சாயத்து தலைவர்: குடும்பத்துல எந்த சண்டை வந்தாலும் "நீங்க சொன்னா சரியா இருக்கும்"னு உங்களையே முடிவெடுக்க வைப்பாங்க!',
  },
];

export const INITIAL_JUKEBOX_TRACKS: JukeboxTrack[] = [
  {
    id: 'tr-1',
    youtubeId: 'z5_klHXYZS4',
    title: 'Venmegam (Yaaradi Nee Mohini)',
    artist: 'Yuvan Shankar Raja · Hariharan',
    suggestedBy: 'M. Deepak',
    dedication: 'Special Sangeet melody dedication from M. Deepak for Thirisha & Siva Shankar!',
    votes: 28,
    addedAt: 1,
  },
  {
    id: 'tr-2',
    youtubeId: 'x6Q7c9RyMzk',
    title: 'Rowdy Baby (Maari 2)',
    artist: 'Dhanush & Dhee · Yuvan',
    suggestedBy: 'Cousins Squad',
    dedication: 'Mandatory sibling group choreography challenge!',
    votes: 15,
    addedAt: 2,
  },
  {
    id: 'tr-3',
    youtubeId: 'KUN5Uf9mObQ',
    title: 'Arabic Kuthu (Beast)',
    artist: 'Anirudh & Jonita Gandhi',
    suggestedBy: 'Sankar (Groom Crew)',
    dedication: 'For the Mappillai Barat & Sangeet finale!',
    votes: 14,
    addedAt: 3,
  },
  {
    id: 'tr-4',
    youtubeId: 'r_S-b-fJ6E8',
    title: 'Manasilaayo (Vettaiyan)',
    artist: 'Anirudh · Malaysia Vasudevan',
    suggestedBy: 'Madurai Relatives',
    dedication: 'All uncles, aunties, and grandparents to the stage!',
    votes: 12,
    addedAt: 4,
  },
  {
    id: 'tr-5',
    youtubeId: 'UBBHpoW3AKA',
    title: 'Munbe Vaa (Sillunu Oru Kaadhal)',
    artist: 'A.R. Rahman · Shreya Ghoshal',
    suggestedBy: 'Thirisha’s Friends',
    dedication: 'Couple spotlight slow dance for M. Thirisha & Siva Shankar.',
    votes: 16,
    addedAt: 5,
  },
  {
    id: 'tr-6',
    youtubeId: '7C2z4GqqS5E',
    title: 'Megham Karukatha (Thiruchitrambalam)',
    artist: 'Anirudh & Dhanush',
    suggestedBy: 'Groom Brothers',
    dedication: 'Breezy Madurai courtyard evening vibes.',
    votes: 10,
    addedAt: 6,
  },
];

export const QUICK_YOUTUBE_PICKS = [
  { youtubeId: 'lM02vNMRRB0', title: 'Kaavaalaa (Jailer)', artist: 'Anirudh & Shilpa Rao' },
  { youtubeId: 'y3C_b8S9F0k', title: 'Tum Tum (Enemy)', artist: 'Thaman S · Sri Vardhini' },
  { youtubeId: '5Eqb_-j3FDA', title: 'Pasoori (Coke Studio)', artist: 'Ali Sethi & Shae Gill' },
  { youtubeId: 'Y_U8B_Y7o9w', title: 'Kalyana Samayal Saadham', artist: 'Traditional Feast Classic' },
];

export function extractYoutubeId(input: string): string | null {
  const trimmed = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  try {
    const url = new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`);
    if (url.hostname.includes('youtu.be')) {
      const id = url.pathname.split('/').filter(Boolean)[0];
      return id && /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
    }
    const vParam = url.searchParams.get('v');
    if (vParam && /^[a-zA-Z0-9_-]{11}$/.test(vParam)) return vParam;
    const parts = url.pathname.split('/').filter(Boolean);
    for (const seg of ['embed', 'shorts', 'live', 'v']) {
      const idx = parts.indexOf(seg);
      if (idx !== -1 && parts[idx + 1] && /^[a-zA-Z0-9_-]{11}$/.test(parts[idx + 1])) {
        return parts[idx + 1];
      }
    }
  } catch {
    return null;
  }
  return null;
}

type RawSeedRow = {
  side: 'bride' | 'groom' | 'both';
  ageGroup: AgeGroupKey;
  groupTa: string;
  groupEn: string;
  nameTa: string;
  nameEn: string;
  locTa: string;
  locEn: string;
  friendCategory?: DirectoryPerson['friendCategory'];
  isSenior?: boolean;
};

const RAW_DIRECTORY_SEED: RawSeedRow[] = [
  // 1. KOLLU PATTI / THATHA (மணமகள் பாட்டன்–பாட்டிமார்கள் / Great-Grandparents)
  { side: 'bride', ageGroup: 'kollu_patti_thatha', groupTa: 'மணமகள் பாட்டன்–பாட்டிமார்கள்', groupEn: "Bride's Great-Grandparents (Paatan / Paatti)", nameTa: 'தெய்வத்திரு. கருப்பணன் – அழகம்மாள்', nameEn: 'Late Thiru. Karuppanan – Azhagammal', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'kollu_patti_thatha', groupTa: 'மணமகள் பாட்டன்–பாட்டிமார்கள்', groupEn: "Bride's Great-Grandparents (Paatan / Paatti)", nameTa: 'தெய்வத்திரு. குப்பன் – வெள்ளைசுவரி', nameEn: 'Late Thiru. Kuppan – Vellaisuvari', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'kollu_patti_thatha', groupTa: 'மணமகள் பாட்டன்–பாட்டிமார்கள்', groupEn: "Bride's Great-Grandparents (Paatan / Paatti)", nameTa: 'தெய்வத்திரு. குண்டப்பன் – இராமாயி', nameEn: 'Late Thiru. Kundappan – Ramayi', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'kollu_patti_thatha', groupTa: 'மணமகள் பாட்டன்–பாட்டிமார்கள்', groupEn: "Bride's Great-Grandparents (Paatan / Paatti)", nameTa: 'தெய்வத்திரு. வேலு – முனியம்மாள்', nameEn: 'Late Thiru. Velu – Muniyammal', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'kollu_patti_thatha', groupTa: 'மணமகள் பாட்டன்–பாட்டிமார்கள்', groupEn: "Bride's Great-Grandparents (Paatan / Paatti)", nameTa: 'தெய்வத்திரு. ஆறுமுகம் – குப்பம்மாள்', nameEn: 'Late Thiru. Arumugam – Kuppammal', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },

  // 2. THATHA / PATTI (தாத்தா–பாட்டிமார்கள் / அப்பத்தாமார்கள்)
  { side: 'groom', ageGroup: 'thatha_patti', groupTa: 'மணமகன் தாத்தா–பாட்டிமார்கள்', groupEn: "Groom's Grandfathers & Grandmothers", nameTa: 'திரு. K. துரைச்சாமி, காவல்துறை ஆய்வாளர் (ஓய்வு)', nameEn: 'Thiru. K. Duraichamy, Police Inspector (Retd.)', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'groom', ageGroup: 'thatha_patti', groupTa: 'மணமகன் தாத்தா–பாட்டிமார்கள்', groupEn: "Groom's Grandfathers & Grandmothers", nameTa: 'திரு. பெ. பிச்சை – கருப்பாயி அம்மாள்', nameEn: 'Thiru. Pe. Pichai – Karuppayi Ammal', locTa: 'காத்தனேந்தல்', locEn: 'Kaththanendhal' },
  { side: 'groom', ageGroup: 'thatha_patti', groupTa: 'மணமகன் தாத்தா–பாட்டிமார்கள்', groupEn: "Groom's Grandfathers & Grandmothers", nameTa: 'திரு. K. இராமச்சந்திரன், சுகாதாரத்துறை ஆய்வாளர் (ஓய்வு)', nameEn: 'Thiru. K. Ramachandran, Health Department Inspector (Retd.)', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'groom', ageGroup: 'thatha_patti', groupTa: 'மணமகன் தாத்தா–பாட்டிமார்கள்', groupEn: "Groom's Grandfathers & Grandmothers", nameTa: 'திரு. K. உடையார் – சிங்காத்தை', nameEn: 'Thiru. K. Udaiyar – Singaththai', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'thatha_patti', groupTa: 'மணமகன் தாத்தா–பாட்டிமார்கள்', groupEn: "Groom's Grandfathers & Grandmothers", nameTa: 'திரு. K. பெருமாள் – சண்முகம்மாள்', nameEn: 'Thiru. K. Perumal – Shanmugammal', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'thatha_patti', groupTa: 'மணமகன் தாத்தா–பாட்டிமார்கள்', groupEn: "Groom's Grandfathers & Grandmothers", nameTa: 'திரு. P. அம்மாசி – சுத்தக்காள்', nameEn: 'Thiru. P. Ammasi – Suththakkal', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'thatha_patti', groupTa: 'மணமகன் தாத்தா–பாட்டிமார்கள்', groupEn: "Groom's Grandfathers & Grandmothers", nameTa: 'திரு. K. ராமக்கிருஷ்ணன், கால்நடை ஆய்வாளர் (ஓய்வு) – சாந்தி', nameEn: 'Thiru. K. Ramakrishnan, Veterinary Inspector (Retd.) – Santhi', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'groom', ageGroup: 'thatha_patti', groupTa: 'மணமகன் தாத்தா–பாட்டிமார்கள்', groupEn: "Groom's Grandfathers & Grandmothers", nameTa: 'திரு. V. கிருஷ்ணன் – காளியம்மாள்', nameEn: 'Thiru. V. Krishnan – Kaliyammal', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'thatha_patti', groupTa: 'மணமகன் தாத்தா–பாட்டிமார்கள்', groupEn: "Groom's Grandfathers & Grandmothers", nameTa: 'திரு. M. மாரியப்பன் (TVS - Bangalore) – ரஞ்சிதம்', nameEn: 'Thiru. M. Mariyappan (TVS - Bangalore) – Ranjitham', locTa: 'நாகமலைபுதுக்கோட்டை', locEn: 'Nagamalaipudukottai' },
  { side: 'groom', ageGroup: 'thatha_patti', groupTa: 'மணமகன் தாத்தா–பாட்டிமார்கள்', groupEn: "Groom's Grandfathers & Grandmothers", nameTa: 'திரு. K. ராஜேந்திரன் – ராமுத்தாய்', nameEn: 'Thiru. K. Rajendran – Ramuthaai', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'thatha_patti', groupTa: 'மணமகன் தாத்தா–பாட்டிமார்கள்', groupEn: "Groom's Grandfathers & Grandmothers", nameTa: 'திரு. K. மகேந்திரன் – காந்தி (இளங்கோ ஸ்டோர்)', nameEn: 'Thiru. K. Mahendran – Gandhi (Elango Store)', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–அப்பத்தாமார்கள்', groupEn: "Bride's Grandfathers & Grand-uncles", nameTa: 'தெய்வத்திருவாளர்கள். K. தின்னார் – இராமாயி', nameEn: 'Late Thiruvalargal K. Thinnar – Ramayi', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–அப்பத்தாமார்கள்', groupEn: "Bride's Grandfathers & Grand-uncles", nameTa: 'தெய்வத்திருவாளர்கள். K. அழகர் – சமுந்திரவள்ளி', nameEn: 'Late Thiruvalargal K. Azhagar – Samundravalli', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–அப்பத்தாமார்கள்', groupEn: "Bride's Grandfathers & Grand-uncles", nameTa: 'தெய்வத்திரு. K. இராமையா – ஆறுமுகவள்ளி', nameEn: 'Late Thiru. K. Ramaiya – Arumugavalli', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–அப்பத்தாமார்கள்', groupEn: "Bride's Grandfathers & Grand-uncles", nameTa: 'திரு. K. கார்மேகம் – வீரமாகாளி', nameEn: 'Thiru. K. Karmegam – Veeramakali', locTa: 'கொல்லங்குளம்', locEn: 'Kollangulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–அப்பத்தாமார்கள்', groupEn: "Bride's Grandfathers & Grand-uncles", nameTa: 'தெய்வத்திருவாளர்கள். பெரியகருப்பன் – இருளாயி', nameEn: 'Late Thiruvalargal Periyakaruppan – Irulayi', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–அப்பத்தாமார்கள்', groupEn: "Bride's Grandfathers & Grand-uncles", nameTa: 'தெய்வத்திருவாளர்கள். முனியசாமி – காளியம்மாள்', nameEn: 'Late Thiruvalargal Muniyasamy – Kaliyammal', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–அப்பத்தாமார்கள்', groupEn: "Bride's Grandfathers & Grand-uncles", nameTa: 'தெய்வத்திருவாளர்கள். சுத்தப்பெருமாள் – சண்முகம்', nameEn: 'Late Thiruvalargal Suththaperumal – Shanmugam', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–அப்பத்தாமார்கள்', groupEn: "Bride's Grandfathers & Grand-uncles", nameTa: 'தெய்வத்திரு. K. சந்திரன் – சிகப்பியம்மாள்', nameEn: 'Late Thiru. K. Chandran – Sigappiyammal', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–பாட்டிமார்கள்', groupEn: "Bride's Grandfathers & Grandmothers", nameTa: 'தெய்வத்திருவாளர்கள். மாடசாமி – முனியம்மாள்', nameEn: 'Late Thiruvalargal Madasamy – Muniyammal', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–பாட்டிமார்கள்', groupEn: "Bride's Grandfathers & Grandmothers", nameTa: 'தெய்வத்திருவாளர்கள். ஆறுமுகம் – சண்முகம்', nameEn: 'Late Thiruvalargal Arumugam – Shanmugam', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–பாட்டிமார்கள்', groupEn: "Bride's Grandfathers & Grandmothers", nameTa: 'தெய்வத்திருவாளர்கள். V. மலைச்சாமி – அமிர்தவள்ளி', nameEn: 'Late Thiruvalargal V. Malaichamy – Amirthavalli', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–பாட்டிமார்கள்', groupEn: "Bride's Grandfathers & Grandmothers", nameTa: 'தெய்வத்திருவாளர்கள். A. அழகர் – காமாட்சி', nameEn: 'Late Thiruvalargal A. Azhagar – Kamatchi', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–பாட்டிமார்கள்', groupEn: "Bride's Grandfathers & Grandmothers", nameTa: 'தெய்வத்திருவாளர்கள். A. இராமையா – கிருஷ்ணம்மாள்', nameEn: 'Late Thiruvalargal A. Ramaiya – Krishnammal', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–பாட்டிமார்கள்', groupEn: "Bride's Grandfathers & Grandmothers", nameTa: 'திரு. முனியாண்டி – தெய்வத்திரு. லட்சுமி', nameEn: 'Thiru. Muniyandi – Late Thiru. Lakshmi', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'thatha_patti', groupTa: 'மணமகள் தாத்தா–பாட்டிமார்கள்', groupEn: "Bride's Grandfathers & Grandmothers", nameTa: 'தெய்வத்திரு. P. செந்தூரன் – சீனியம்மாள்', nameEn: 'Late Thiru. P. Senthooran – Seeniyammal', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },

  // 3. ATHAI / MAMA (தாய்மாமன்கள் & மாமா–அத்தைமார்கள்)
  { side: 'groom', ageGroup: 'athai_mama', groupTa: 'மணமகன் தாய்மாமன்கள்', groupEn: "Groom's Maternal Uncles", nameTa: 'திரு. மு. பிரப்பன் – காளிமுத்து', nameEn: 'Thiru. Mu. Pirappan – Kalimuthu', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'athai_mama', groupTa: 'மணமகன் தாய்மாமன்கள்', groupEn: "Groom's Maternal Uncles", nameTa: 'திரு. மு. அய்யாவு D.Co-op., – உத்தமச்செல்வி', nameEn: 'Thiru. Mu. Ayyavu D.Co-op., – Uthamaselvi', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'groom', ageGroup: 'athai_mama', groupTa: 'மணமகன் மாமா–அத்தைமார்கள்', groupEn: "Groom's Uncles & Aunts", nameTa: 'திரு. P. தமிழ்குமரன் – பிச்சைக்கனி', nameEn: 'Thiru. P. Tamilkumaran – Pichaikkani', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'athai_mama', groupTa: 'மணமகன் மாமா–அத்தைமார்கள்', groupEn: "Groom's Uncles & Aunts", nameTa: 'திரு. P. இளங்கோபெருமாள் B.Com., – துர்கா', nameEn: 'Thiru. P. Elangoperumal B.Com., – Durga', locTa: 'நாகமலைபுதுக்கோட்டை', locEn: 'Nagamalaipudukottai' },
  { side: 'groom', ageGroup: 'athai_mama', groupTa: 'மணமகன் மாமா–அத்தைமார்கள்', groupEn: "Groom's Uncles & Aunts", nameTa: 'திரு. R. சரவணப்பெருமாள் B.E., (Nokia) – சத்யபிரபா MCA.,', nameEn: 'Thiru. R. Saravanaperumal B.E., (Nokia) – Sathyaprabha MCA.,', locTa: 'நியூசிலாந்து', locEn: 'New Zealand' },
  { side: 'groom', ageGroup: 'athai_mama', groupTa: 'மணமகன் மாமா–அத்தைமார்கள்', groupEn: "Groom's Uncles & Aunts", nameTa: 'திரு. Dr. R. பாலசுப்பிரமணியன் Ph.d., – வைகை M.Sc., (Asst. Professor, Rajagiri Business School)', nameEn: 'Thiru. Dr. R. Balasubramanian Ph.d., – Vaigai M.Sc., (Asst. Professor, Rajagiri Business School)', locTa: 'எர்ணாகுளம்', locEn: 'Ernakulam' },
  { side: 'groom', ageGroup: 'athai_mama', groupTa: 'மணமகன் மாமா–அத்தைமார்கள்', groupEn: "Groom's Uncles & Aunts", nameTa: 'திரு. R. பாலன் B.E., (கத்தார்) – காயத்ரி M.Com.,', nameEn: 'Thiru. R. Balan B.E., (Qatar) – Gayathri M.Com.,', locTa: 'நாகமலைபுதுக்கோட்டை', locEn: 'Nagamalaipudukottai' },
  { side: 'groom', ageGroup: 'athai_mama', groupTa: 'மணமகன் மாமா–அத்தைமார்கள்', groupEn: "Groom's Uncles & Aunts", nameTa: 'திரு. V. பொன்னையா – செல்லத்தாய்', nameEn: 'Thiru. V. Ponnaiya – Sellathai', locTa: 'காத்தனேந்தல்', locEn: 'Kaththanendhal' },
  { side: 'groom', ageGroup: 'athai_mama', groupTa: 'மணமகன் மாமா–அத்தைமார்கள்', groupEn: "Groom's Uncles & Aunts", nameTa: 'திரு. U. ராமராஜ் (Hariraja Store) – ராக்கம்மாள்', nameEn: 'Thiru. U. Ramaraj (Hariraja Store) – Rakkammal', locTa: 'யா.ஒத்தக்கடை', locEn: 'Y. Othakadai' },
  { side: 'groom', ageGroup: 'athai_mama', groupTa: 'மணமகன் மாமா–அத்தைமார்கள்', groupEn: "Groom's Uncles & Aunts", nameTa: 'திரு. T. பூவலிங்கம் – மீனா', nameEn: 'Thiru. T. Poovalingam – Meena', locTa: 'அய்யங்கோட்டை', locEn: 'Ayyankottai' },
  { side: 'groom', ageGroup: 'athai_mama', groupTa: 'மணமகன் மாமா–அத்தைமார்கள்', groupEn: "Groom's Uncles & Aunts", nameTa: 'திரு. K. ரமேஷ் Dip.Er. – முருகேஸ்வரி', nameEn: 'Thiru. K. Ramesh Dip.Er. – Murugeshwari', locTa: 'நாகமலைபுதுக்கோட்டை', locEn: 'Nagamalaipudukottai' },
  { side: 'groom', ageGroup: 'athai_mama', groupTa: 'மணமகன் மாமா–அத்தைமார்கள்', groupEn: "Groom's Uncles & Aunts", nameTa: 'திரு. P. ஆறுமுகசாமி (TVS) – முருகேஸ்வரி M.Sc., B.Ed., (Keran School)', nameEn: 'Thiru. P. Arumugasamy (TVS) – Murugeshwari M.Sc., B.Ed., (Keran School)', locTa: 'N.P. கோட்டை', locEn: 'N.P. Kottai' },
  { side: 'bride', ageGroup: 'athai_mama', groupTa: 'மணமகள் அத்தை–மாமா', groupEn: "Bride's Aunt & Uncle", nameTa: 'திரு. K. இராஜேந்திரன் – வீரமாகாளி', nameEn: 'Thiru. K. Rajendran – Veeramakali', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },

  // 4. PERIYAPPA / PERIYAMMA (பெரியப்பா–பெரியம்மா)
  { side: 'groom', ageGroup: 'periyappa_periyamma', groupTa: 'மணமகன் பெரியப்பாமார்கள்', groupEn: "Groom's Periyappas & Periyammas", nameTa: 'திரு. பா. செல்லத்துரை – சிவகாமி', nameEn: 'Thiru. Pa. Selladurai – Sivagami', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'periyappa_periyamma', groupTa: 'மணமகன் பெரியப்பாமார்கள்', groupEn: "Groom's Periyappas & Periyammas", nameTa: 'திரு. கு. சக்கரபாண்டி – பத்மா', nameEn: 'Thiru. Ku. Chakkarapandi – Padma', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'periyappa_periyamma', groupTa: 'மணமகன் பெரியப்பாமார்கள்', groupEn: "Groom's Periyappas & Periyammas", nameTa: 'திரு. அ. முருகேசன் – ராணி', nameEn: 'Thiru. A. Murugesan – Rani', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'periyappa_periyamma', groupTa: 'மணமகன் பெரியப்பாமார்கள்', groupEn: "Groom's Periyappas & Periyammas", nameTa: 'திரு. P. சிங்கராஜ் – புஷ்பம்', nameEn: 'Thiru. P. Singaraj – Pushpam', locTa: 'காத்தனேந்தல்', locEn: 'Kaththanendhal' },
  { side: 'groom', ageGroup: 'periyappa_periyamma', groupTa: 'மணமகன் பெரியப்பாமார்கள்', groupEn: "Groom's Periyappas & Periyammas", nameTa: 'திரு. P. செல்வராஜ் B.A., (பாண்டியன் கெமிக்கல்ஸ் லிட்) – முத்துராக்கு', nameEn: 'Thiru. P. Selvaraj B.A., (Pandian Chemicals Ltd) – Muthurakku', locTa: 'யா.ஒத்தக்கடை', locEn: 'Y. Othakadai' },
  { side: 'bride', ageGroup: 'periyappa_periyamma', groupTa: 'மணமகள் பெரியப்பாமார்கள்', groupEn: "Bride's Periyappas & Periyammas", nameTa: 'திரு. S. தங்கராஜ் – சுந்தரி', nameEn: 'Thiru. S. Thangaraj – Sundari', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'periyappa_periyamma', groupTa: 'மணமகள் பெரியப்பாமார்கள்', groupEn: "Bride's Periyappas & Periyammas", nameTa: 'திரு. M. ஆறுமுகம் – இராமுத்தாய்', nameEn: 'Thiru. M. Arumugam – Ramuthaai', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },

  // 5. CHITHAPPA / CHITHI (சித்தப்பா–சித்தி)
  { side: 'groom', ageGroup: 'chithappa_chithi', groupTa: 'மணமகன் சித்தப்பாமார்கள்', groupEn: "Groom's Chithappas & Chithis", nameTa: 'திரு. P. ஜெயராஜ் – ரோகிணி', nameEn: 'Thiru. P. Jayaraj – Rohini', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'chithappa_chithi', groupTa: 'மணமகன் சித்தப்பாமார்கள்', groupEn: "Groom's Chithappas & Chithis", nameTa: 'திரு. A. குணசேகரன் (Ramco Manager Rtd.,) – சண்முகவள்ளி', nameEn: 'Thiru. A. Gunasekaran (Ramco Manager Rtd.,) – Shanmugavalli', locTa: 'நாகமலைபுதுக்கோட்டை', locEn: 'Nagamalaipudukottai' },
  { side: 'groom', ageGroup: 'chithappa_chithi', groupTa: 'மணமகன் சித்தப்பாமார்கள்', groupEn: "Groom's Chithappas & Chithis", nameTa: 'திரு. K. கருப்பசாமி MBA., (Agrovct, KAPL) – கௌசல்யா M.Sc.,B.Ed., (Deputy Manager Aavin)', nameEn: 'Thiru. K. Karuppasamy MBA., (Agrovct, KAPL) – Kowsalya M.Sc., B.Ed., (Deputy Manager Aavin)', locTa: 'நாகமலைபுதுக்கோட்டை', locEn: 'Nagamalaipudukottai' },
  { side: 'groom', ageGroup: 'chithappa_chithi', groupTa: 'மணமகன் சித்தப்பாமார்கள்', groupEn: "Groom's Chithappas & Chithis", nameTa: 'திரு. M. மூவேந்திரன் M.Sc., – கார்த்திகா MBA.,', nameEn: 'Thiru. M. Moovendran M.Sc., – Karthika MBA.,', locTa: 'சென்னை', locEn: 'Chennai' },
  { side: 'bride', ageGroup: 'chithappa_chithi', groupTa: 'மணமகள் சித்தப்பாமார்கள்', groupEn: "Bride's Chithappas & Chithis", nameTa: 'திரு. S. சந்திரன் – பஞ்சாட்சரம்', nameEn: 'Thiru. S. Chandran – Panchatcharam', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'chithappa_chithi', groupTa: 'மணமகள் சித்தப்பாமார்கள்', groupEn: "Bride's Chithappas & Chithis", nameTa: 'திரு. K. பூமிநாதன் B.Com., – குமுதா (DTC.,)', nameEn: 'Thiru. K. Boominathan B.Com., – Kumutha (DTC.,)', locTa: 'மதுரை', locEn: 'Madurai' },

  // 6. AKKA / MACHAN (அக்கா–மச்சான் / சகோதரிகள்–மச்சான்மார்கள்)
  { side: 'groom', ageGroup: 'akka_machan', groupTa: 'மணமகன் சகோதரி & மச்சான்', groupEn: "Groom's Sister & Brother-in-law", nameTa: 'திரு. P. திருமணிகண்டன் M.Pharm., (Aurobindo Pharma Ltd.,) – சிவசந்தியா MSc., B.Ed.', nameEn: 'Thiru. P. Thirumanikandan M.Pharm., (Aurobindo Pharma Ltd.,) – Sivasandhiya MSc., B.Ed.', locTa: 'ஆந்திரா', locEn: 'Andhra' },
  { side: 'groom', ageGroup: 'akka_machan', groupTa: 'மணமகன் மச்சான்மார்கள்–சகோதரிகள்', groupEn: "Groom's Brothers-in-law & Sisters", nameTa: 'திரு. A. செல்வம் – கோகிலா', nameEn: 'Thiru. A. Selvam – Kogila', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'groom', ageGroup: 'akka_machan', groupTa: 'மணமகன் மச்சான்மார்கள்–சகோதரிகள்', groupEn: "Groom's Brothers-in-law & Sisters", nameTa: 'திரு. A. மலைச்சாமி – புவனேஸ்வரி', nameEn: 'Thiru. A. Malaichamy – Bhuvaneshwari', locTa: 'திருச்சி', locEn: 'Trichy' },
  { side: 'groom', ageGroup: 'akka_machan', groupTa: 'மணமகன் மச்சான்மார்கள்–சகோதரிகள்', groupEn: "Groom's Brothers-in-law & Sisters", nameTa: 'திரு. M. சந்திரமோகன் – குணசுந்தரி', nameEn: 'Thiru. M. Chandramohan – Gunasundari', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'groom', ageGroup: 'akka_machan', groupTa: 'மணமகன் மச்சான்மார்கள்–சகோதரிகள்', groupEn: "Groom's Brothers-in-law & Sisters", nameTa: 'திரு. K. சதீஸ்கண்ணன் B.Com., தமிழ்நாடு தீயணைப்புத்துறை – மேனகா M.Sc., B.Ed.', nameEn: 'Thiru. K. Sathiskannan B.Com., Tamil Nadu Fire and Rescue Services – Menaka M.Sc., B.Ed.', locTa: 'இராமேஸ்வரம்', locEn: 'Rameswaram' },
  { side: 'groom', ageGroup: 'akka_machan', groupTa: 'மணமகன் மச்சான்மார்கள்–சகோதரிகள்', groupEn: "Groom's Brothers-in-law & Sisters", nameTa: 'திரு. பி. பிரகாஷ் B.Sc., – காயத்ரி MCA.,', nameEn: 'Thiru. Pi. Prakash B.Sc., – Gayathri MCA.,', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'akka_machan', groupTa: 'மணமகன் மச்சான்மார்கள்–சகோதரிகள்', groupEn: "Groom's Brothers-in-law & Sisters", nameTa: 'திரு. பி. வேல்முருகன் M.Sc., துபாய் – திவ்யா', nameEn: 'Thiru. Pi. Velmurugan M.Sc., Dubai – Divya', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'akka_machan', groupTa: 'மணமகள் அக்கா–மச்சான்மார்கள்', groupEn: "Bride's Elder Sisters & Brothers-in-law", nameTa: 'திரு. S. கோட்டைச்சாமி – வளர்மதி', nameEn: 'Thiru. S. Kottaichamy – Valarmathi', locTa: 'மலேசியா (இருப்பு) மதுரை', locEn: 'Malaysia (residing at) Madurai' },
  { side: 'bride', ageGroup: 'akka_machan', groupTa: 'மணமகள் அக்கா–மச்சான்மார்கள்', groupEn: "Bride's Elder Sisters & Brothers-in-law", nameTa: 'திரு. C. செந்தாமரைகண்ணன் B.E., – வாசுகி D.TEd., M.A., B.Ed.,M.Phil.,', nameEn: 'Thiru. C. Senthamaraikannan B.E., – Vasuki D.TEd., M.A., B.Ed., M.Phil.,', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'akka_machan', groupTa: 'மணமகள் அக்கா–மச்சான்மார்கள்', groupEn: "Bride's Elder Sisters & Brothers-in-law", nameTa: 'திரு. R. தினேஷ் E.M.W., DCE., – பெப்சி B.Com., (CA)', nameEn: 'Thiru. R. Dinesh E.M.W., DCE., – Pepsi B.Com., (CA)', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'akka_machan', groupTa: 'மணமகள் அக்கா–மச்சான்மார்கள்', groupEn: "Bride's Elder Sisters & Brothers-in-law", nameTa: 'திரு. S. மனோஜ்குமார் D.M.E., – சபினா B.Com.,', nameEn: 'Thiru. S. Manojkumar D.M.E., – Sabina B.Com.,', locTa: 'மதுரை', locEn: 'Madurai' },

  // 7. ANNA / ANNI (அண்ணன்–அண்ணிமார்கள் & மணமகன் வீட்டார்கள்)
  { side: 'groom', ageGroup: 'anna_anni', groupTa: 'மணமகன் வீட்டார்கள்', groupEn: "Groom's Family Brothers", nameTa: 'திரு. C. சிவபிரசாத் B.Tech., (Civil Construction) – சிந்துஜா M.A.,B.Ed.', nameEn: 'Thiru. C. Sivaprasad B.Tech., (Civil Construction) – Sindhuja M.A., B.Ed.', locTa: 'கத்தார்', locEn: 'Qatar' },
  { side: 'groom', ageGroup: 'anna_anni', groupTa: 'மணமகன் வீட்டார்கள்', groupEn: "Groom's Family Brothers", nameTa: 'திரு. C. சிவகண்ணன் B.E., (Ford Motors Pvt., Ltd.,) – ரேவதி B.Sc.', nameEn: 'Thiru. C. Sivakannan B.E., (Ford Motors Pvt., Ltd.,) – Revathi B.Sc.', locTa: 'சென்னை', locEn: 'Chennai' },
  { side: 'groom', ageGroup: 'anna_anni', groupTa: 'மணமகன் வீட்டார்கள்', groupEn: "Groom's Family Brothers", nameTa: 'திரு. R. விக்னேஷ் B.Pharm., (Preethi Hospital) – சிவரஞ்சனி MCA.,B.Ed.', nameEn: 'Thiru. R. Vignesh B.Pharm., (Preethi Hospital) – Sivaranjani MCA., B.Ed.', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'groom', ageGroup: 'anna_anni', groupTa: 'மணமகன் வீட்டார்கள்', groupEn: "Groom's Family Brothers", nameTa: 'திரு. J. சிவநிஷாந்த் B.Sc., MCA., (Telic Info Service)', nameEn: 'Thiru. J. Sivanishanth B.Sc., MCA., (Telic Info Service)', locTa: 'சென்னை', locEn: 'Chennai' },
  { side: 'groom', ageGroup: 'anna_anni', groupTa: 'மணமகன் அண்ணன்–அண்ணிமார்கள்', groupEn: "Groom's Elder Brothers & Sisters-in-law", nameTa: 'திரு. செ. ராஜா B.Com., – பொன்மலர் M.Com.,', nameEn: 'Thiru. Se. Raja B.Com., – Ponmalar M.Com.,', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'anna_anni', groupTa: 'மணமகன் அண்ணன்–அண்ணிமார்கள்', groupEn: "Groom's Elder Brothers & Sisters-in-law", nameTa: 'திரு. ம. சேவுகப்பெருமாள் MBA., – சோபனா M.Phil., B.Ed., (Deputy Manager, IT, Puthiyathalaimurai)', nameEn: 'Thiru. Ma. Sevugaperumal MBA., – Sobana M.Phil., B.Ed., (Deputy Manager, IT, Puthiyathalaimurai)', locTa: 'சென்னை', locEn: 'Chennai' },
  { side: 'groom', ageGroup: 'anna_anni', groupTa: 'மணமகன் அண்ணன்–அண்ணிமார்கள்', groupEn: "Groom's Elder Brothers & Sisters-in-law", nameTa: 'திரு. ச. மாரிமுத்து – செல்வி', nameEn: 'Thiru. Sa. Marimuthu – Selvi', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'anna_anni', groupTa: 'மணமகன் அண்ணன்–அண்ணிமார்கள்', groupEn: "Groom's Elder Brothers & Sisters-in-law", nameTa: 'திரு. ச. செந்தாமரை – கோகிலா', nameEn: 'Thiru. Sa. Senthamarai – Kogila', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'groom', ageGroup: 'anna_anni', groupTa: 'மணமகன் அண்ணன்–அண்ணிமார்கள்', groupEn: "Groom's Elder Brothers & Sisters-in-law", nameTa: 'திரு. ச. ரமேஷ் B.E., Ramesh Construction – தீபா B.Com.,', nameEn: 'Thiru. Sa. Ramesh B.E., Ramesh Construction – Deepa B.Com.,', locTa: 'திருச்சி', locEn: 'Trichy' },
  { side: 'groom', ageGroup: 'anna_anni', groupTa: 'மணமகன் அண்ணன்–அண்ணிமார்கள்', groupEn: "Groom's Elder Brothers & Sisters-in-law", nameTa: 'திரு. P. கருணாகரன் ITI., சிங்கப்பூர் – பிரதீபா B.Sc.,', nameEn: 'Thiru. P. Karunakaran ITI., Singapore – Pratheepa B.Sc.,', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'groom', ageGroup: 'anna_anni', groupTa: 'மணமகன் அண்ணன்–அண்ணிமார்கள்', groupEn: "Groom's Elder Brothers & Sisters-in-law", nameTa: 'திரு. R. ஷியாம்சுந்தர் B.E., – மோனிஷா M.Sc.,', nameEn: 'Thiru. R. Shyamsundar B.E., – Monisha M.Sc.,', locTa: 'செல்வநாயகபுரம்', locEn: 'Selvanayagapuram' },
  { side: 'groom', ageGroup: 'anna_anni', groupTa: 'மணமகன் அண்ணன்–அண்ணிமார்கள்', groupEn: "Groom's Elder Brothers & Sisters-in-law", nameTa: 'திரு. நாகராஜ் – பிரியங்கா B.E.,', nameEn: 'Thiru. Nagaraj – Priyanka B.E.,', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'anna_anni', groupTa: 'மணமகள் அண்ணன்–அண்ணிமார்கள்', groupEn: "Bride's Elder Brothers & Sisters-in-law", nameTa: 'திரு. T. இராஜாமுனியசாமி M.Com., – அனிதா D.T.Ed.,B.Lit.,', nameEn: 'Thiru. T. Rajamuniyasamy M.Com., – Anitha D.T.Ed., B.Lit.,', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'anna_anni', groupTa: 'மணமகள் அண்ணன்–அண்ணிமார்கள்', groupEn: "Bride's Elder Brothers & Sisters-in-law", nameTa: 'திரு. T. சாந்தகுமார் B.Com., – வனிதா D.T.Ed.,', nameEn: 'Thiru. T. Santhakumar B.Com., – Vanitha D.T.Ed.,', locTa: 'பொதிகுளம்', locEn: 'Pothikulam' },
  { side: 'bride', ageGroup: 'anna_anni', groupTa: 'மணமகள் அண்ணன்–அண்ணிமார்கள்', groupEn: "Bride's Elder Brothers & Sisters-in-law", nameTa: 'திரு. S. சந்திரசேகரன் B.Tech., – சங்கீதா M.Sc., B.Ed.,', nameEn: 'Thiru. S. Chandrasekaran B.Tech., – Sangeetha M.Sc., B.Ed.,', locTa: 'பருத்திகுளம்', locEn: 'Paruthikulam' },
  { side: 'bride', ageGroup: 'anna_anni', groupTa: 'மணமகள் அண்ணன்–அண்ணிமார்கள்', groupEn: "Bride's Elder Brothers & Sisters-in-law", nameTa: 'திரு. A. கோட்டைசாமி – பரமேஸ்வரி', nameEn: 'Thiru. A. Kottaisamy – Parameshwari', locTa: 'வீரபாண்டி', locEn: 'Veerapandi' },
  { side: 'bride', ageGroup: 'anna_anni', groupTa: 'மணமகள் அண்ணன்–அண்ணிமார்கள்', groupEn: "Bride's Elder Brothers & Sisters-in-law", nameTa: 'திரு. A. தனபாலன் DCE., – சுகன்யா B.Sc.,', nameEn: 'Thiru. A. Dhanapalan DCE., – Sukanya B.Sc.,', locTa: 'வீரபாண்டி', locEn: 'Veerapandi' },
  { side: 'bride', ageGroup: 'anna_anni', groupTa: 'மணமகள் அண்ணன்–அண்ணிமார்கள்', groupEn: "Bride's Elder Brothers & Sisters-in-law", nameTa: 'திரு. C. ஜெகதீஸ்வரன் B.Com., – அனுசியா', nameEn: 'Thiru. C. Jegatheeswaran B.Com., – Anusiya', locTa: 'மதுரை', locEn: 'Madurai' },

  // 8. HOSTS AND WELCOMERS (வரவேற்பாளர்கள் & இல்லத்தினர்)
  { side: 'bride', ageGroup: 'hosts_welcomers', groupTa: 'மணமகள் பெற்றோர் & இல்லத்தினர்', groupEn: "Bride's Parents & Hosts", nameTa: 'A. மூர்த்தி – M. அலமேலு (M.A.T.D. திருமூர்த்தி மகால் · திருமூர்த்தி குழுமம்)', nameEn: 'A. Moorthi – M. Alamelu (M.A.T.D. Thirumoorthi Mahal · Thirumoorthi Groups)', locTa: 'ஆண்டிப்பட்டி பங்களா, மதுரை', locEn: 'Andipatti Bungalow, Madurai' },
  { side: 'bride', ageGroup: 'hosts_welcomers', groupTa: 'மணமகள் சகோதரர் & ஏற்பாட்டாளர்', groupEn: "Bride's Brother & Coordinator", nameTa: 'M. தீபக் B.Tech., (ECE.,) – Minors UAV', nameEn: 'M. Deepak B.Tech., (ECE.,) – Minors UAV', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'groom', ageGroup: 'hosts_welcomers', groupTa: 'மணமகன் பெற்றோர் & இல்லத்தினர்', groupEn: "Groom's Parents & Hosts", nameTa: 'S. சுரேஷ் – வள்ளி (வெங்கடேஷ் மளிகைக் கடை)', nameEn: 'S. Suresh – Valli (Venkatesh Grocery Shop)', locTa: 'யா.ஒத்தக்கடை, மதுரை', locEn: 'Y. Othakadai, Madurai' },
  { side: 'groom', ageGroup: 'hosts_welcomers', groupTa: 'வரவேற்பாளர்', groupEn: 'Welcomer', nameTa: 'திரு. த. கோகுலபெருமாள் Dip. ECE., – ஆனந்தி B.Com.,', nameEn: 'Thiru. Tha. Gokulaperumal Dip. ECE., – Ananthi B.Com.,', locTa: 'நியூசிலாந்து', locEn: 'New Zealand' },
  { side: 'bride', ageGroup: 'hosts_welcomers', groupTa: 'வரவேற்பாளர்', groupEn: 'Welcomer', nameTa: 'திரு. M. போஸ், காவல்துறை ஆய்வாளர் (ஓய்வு) – காந்தி', nameEn: 'Thiru. M. Bose, Police Inspector (Retd.) – Gandhi', locTa: 'மதுரை', locEn: 'Madurai' },

  // 9. CHILDREN (குட்டீஸ்கள்)
  { side: 'groom', ageGroup: 'children', groupTa: 'குட்டீஸ் (மணமகன் இல்லம்)', groupEn: 'Kuttis (Little Ones)', nameTa: 'S. ஜிவின்', nameEn: 'S. Jivin', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'K. சுமித்', nameEn: 'K. Sumith', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'K. சர்பேஸ்', nameEn: 'K. Sarpesh', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'R. சச்சின்', nameEn: 'R. Sachin', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'R. மிதுன்', nameEn: 'R. Mithun', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'S. சமிந்தா வாசு', nameEn: 'S. Samindha Vasu', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'S. சாசிகா', nameEn: 'S. Sasika', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'K. தர்சன்', nameEn: 'K. Tharshan', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'K. தன்சிகா', nameEn: 'K. Thanshika', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'S. நிஷாந்த் சர்மா', nameEn: 'S. Nishanth Sharma', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'S. யோகித்', nameEn: 'S. Yogith', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'B. விகாஷ்', nameEn: 'B. Vikash', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'C. கவிஷா', nameEn: 'C. Kavisha', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'C. சஜனேஸ்', nameEn: 'C. Sajanesh', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'P. பிரதா', nameEn: 'P. Pratha', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'M. கேஸ்மி', nameEn: 'M. Kesmi', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'D. தியா', nameEn: 'D. Diya', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'D. ரித்தன் பிரபு', nameEn: 'D. Rithan Prabu', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'S. செழியன்', nameEn: 'S. Seliyan', locTa: 'மதுரை', locEn: 'Madurai' },
  { side: 'bride', ageGroup: 'children', groupTa: 'குட்டீஸ்கள்', groupEn: 'Kuttis (Little Ones)', nameTa: 'D. தயா ஸ்ரீ', nameEn: 'D. Daya Sri', locTa: 'மதுரை', locEn: 'Madurai' },

  // 10. FRIENDS & VILLAGE COMMUNITY (நண்பர்கள் & ஊர் பொதுமக்கள்)
  { side: 'both', ageGroup: 'friends', groupTa: 'உங்களை அன்புடன் வரவேற்கும்', groupEn: 'Welcoming You with Love', nameTa: 'இளைஞர் நற்பணி மன்றம் & கிராம பொதுமக்கள்', nameEn: 'Youth Welfare Association (Ilaignar Narpani Mandram) & Village Public', locTa: 'யாதவர் பொதிகுளம்', locEn: 'Yadavar Pothikulam' },
  { side: 'both', ageGroup: 'friends', groupTa: 'தொடரும் உறவுகளும் ...... வளரும் நட்புகளும் ....... ', groupEn: 'Continuing relationships ...... Growing friendships ....... ', nameTa: 'கலசலிங்கம் மாணவர்கள், தாய் பள்ளி & செந்தாமரை கல்லூரி நண்பர்கள்', nameEn: 'Kalasalingam University Students, Thaai School & Senthamarai College Friends', locTa: 'மதுரை & அனைத்து ஊர் நண்பர்கள்', locEn: 'Madurai & Friends Worldwide' },

  // 10A. BRIDE'S BROTHER'S FRIENDS — THAAI SCHOOL (மணமகள் சகோதரர் நண்பர்கள் · தாய் பள்ளி)
  { side: 'both', ageGroup: 'friends', friendCategory: 'thaai_school', groupTa: 'மணமகள் சகோதரர் நண்பர்கள் · தாய் பள்ளி', groupEn: "Bride's Brother's Friends · Thaai School", nameTa: 'விஷால்', nameEn: 'Vishal', locTa: 'தாய் பள்ளி', locEn: 'Thaai School' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'thaai_school', groupTa: 'மணமகள் சகோதரர் நண்பர்கள் · தாய் பள்ளி', groupEn: "Bride's Brother's Friends · Thaai School", nameTa: 'யோகேஷ்', nameEn: 'Yogesh', locTa: 'தாய் பள்ளி', locEn: 'Thaai School' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'thaai_school', groupTa: 'மணமகள் சகோதரர் நண்பர்கள் · தாய் பள்ளி', groupEn: "Bride's Brother's Friends · Thaai School", nameTa: 'மாதவ்', nameEn: 'Madhav', locTa: 'தாய் பள்ளி', locEn: 'Thaai School' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'thaai_school', groupTa: 'மணமகள் சகோதரர் நண்பர்கள் · தாய் பள்ளி', groupEn: "Bride's Brother's Friends · Thaai School", nameTa: 'ஹரி பிரசாத்', nameEn: 'Hari Prasad', locTa: 'தாய் பள்ளி', locEn: 'Thaai School' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'thaai_school', groupTa: 'மணமகள் சகோதரர் நண்பர்கள் · தாய் பள்ளி', groupEn: "Bride's Brother's Friends · Thaai School", nameTa: 'சரண்', nameEn: 'Sharan', locTa: 'தாய் பள்ளி', locEn: 'Thaai School' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'thaai_school', groupTa: 'மணமகள் சகோதரர் நண்பர்கள் · தாய் பள்ளி', groupEn: "Bride's Brother's Friends · Thaai School", nameTa: 'அஹ்மத்', nameEn: 'Ahmad', locTa: 'தாய் பள்ளி', locEn: 'Thaai School' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'thaai_school', groupTa: 'மணமகள் சகோதரர் நண்பர்கள் · தாய் பள்ளி', groupEn: "Bride's Brother's Friends · Thaai School", nameTa: 'கிஷாந்த்', nameEn: 'Kishanth', locTa: 'தாய் பள்ளி', locEn: 'Thaai School' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'thaai_school', groupTa: 'மணமகள் சகோதரர் நண்பர்கள் · தாய் பள்ளி', groupEn: "Bride's Brother's Friends · Thaai School", nameTa: 'சந்தோஷ்', nameEn: 'Santhosh', locTa: 'தாய் பள்ளி', locEn: 'Thaai School' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'thaai_school', groupTa: 'மணமகள் சகோதரர் நண்பர்கள் · தாய் பள்ளி', groupEn: "Bride's Brother's Friends · Thaai School", nameTa: 'ஹரிபிரசன்னா', nameEn: 'Hariprasanna', locTa: 'தாய் பள்ளி', locEn: 'Thaai School' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'thaai_school', groupTa: 'மணமகள் சகோதரர் நண்பர்கள் · தாய் பள்ளி', groupEn: "Bride's Brother's Friends · Thaai School", nameTa: 'செல்வா', nameEn: 'Selva', locTa: 'தாய் பள்ளி', locEn: 'Thaai School' },

  // 10B. KALASALINGAM UNIVERSITY — MENTORS (கலசலிங்கம் பல்கலைக்கழகம் · வழிகாட்டிகள்)
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_mentors', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · வழிகாட்டிகள்', groupEn: 'Kalasalingam University · Mentors', nameTa: 'Dr. ஜெனிபால் சாம்சன்', nameEn: 'Dr. Jenyfal Sampson', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_mentors', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · வழிகாட்டிகள்', groupEn: 'Kalasalingam University · Mentors', nameTa: 'Dr. மணிகண்டன்', nameEn: 'Dr. Manikandan', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_mentors', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · வழிகாட்டிகள்', groupEn: 'Kalasalingam University · Mentors', nameTa: 'Dr. முனீஸ்வரன்', nameEn: 'Dr. Muneeswaran', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_mentors', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · வழிகாட்டிகள்', groupEn: 'Kalasalingam University · Mentors', nameTa: 'Dr. ஆரத்தி', nameEn: 'Dr. Aarathi', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_mentors', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · வழிகாட்டிகள்', groupEn: 'Kalasalingam University · Mentors', nameTa: 'Dr. சார்லஸ் பிரவின்', nameEn: 'Dr. Charles Pravin', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_mentors', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · வழிகாட்டிகள்', groupEn: 'Kalasalingam University · Mentors', nameTa: 'Dr. புருஷோத்தமன்', nameEn: 'Dr. Purushothaman', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_mentors', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · வழிகாட்டிகள்', groupEn: 'Kalasalingam University · Mentors', nameTa: 'Dr. ஆபா தர்கர்', nameEn: 'Dr. Abha Dargar', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_mentors', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · வழிகாட்டிகள்', groupEn: 'Kalasalingam University · Mentors', nameTa: 'Dr. கணேச பெருமாள்', nameEn: 'Dr. Ganesha Perumal', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },

  // 10C. KALASALINGAM UNIVERSITY — FINAL YEAR SENIORS (கலசலிங்கம் பல்கலைக்கழகம் · இறுதி ஆண்டு சீனியர்கள்)
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_seniors', isSenior: true, groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · இறுதி ஆண்டு சீனியர்கள்', groupEn: 'Kalasalingam University · Final Year Seniors', nameTa: 'Ms. செல்வ ஜோதிஹா C A', nameEn: 'Ms. Selva Jotheha C A', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_seniors', isSenior: true, groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · இறுதி ஆண்டு சீனியர்கள்', groupEn: 'Kalasalingam University · Final Year Seniors', nameTa: 'Mr. தினேஷ் நாயுடு ராமினேனி', nameEn: 'Mr Dinesh Naidu Ramineni', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_seniors', isSenior: true, groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · இறுதி ஆண்டு சீனியர்கள்', groupEn: 'Kalasalingam University · Final Year Seniors', nameTa: 'தவுலூரி சாய் சித்தார்த்தா', nameEn: 'Davuluri Sai Siddardha', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },

  // 10D. KALASALINGAM UNIVERSITY — FRIENDS (கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்)
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'சுரேஷ்', nameEn: 'Suresh', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'ஹரிணி', nameEn: 'Harini', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'ஜோயல்', nameEn: 'Joel', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'ஆகாஷ்', nameEn: 'Akash', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'ராகேஷ்', nameEn: 'Rakesh', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'அபிராமன்', nameEn: 'Abiraman', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'Er. மனோஜ் பிரபாகர்', nameEn: 'Er. Manoj Prabahar', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'மனோஜ் ரெட்டி', nameEn: 'Manoj Reddy', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'மகாதிர் சாபி', nameEn: 'Mahatheir Sabi', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'நாகராஜ்', nameEn: 'Nagaraj', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'ரோஹித் CR', nameEn: 'Rohith CR', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'மது', nameEn: 'Madhu', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'அபர்ணா', nameEn: 'Abarna', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'அஜய் குமார்', nameEn: 'Ajay Kumar', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'அனுசூயா', nameEn: 'Anusuya', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'அஜீஸ்', nameEn: 'Azzes', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'பாரத்', nameEn: 'Bharath', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'லக்ஷா பிரகாஷ்', nameEn: 'Laksha Prakash', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'கிருஷ்ணா', nameEn: 'Krishna', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'நிதீஷ்வரன்', nameEn: 'Nithishwaran', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'சச்சின் பாரதி', nameEn: 'Sachin Bharathi', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'விஷ்ணவி (வைஷ்ணவி)', nameEn: 'Vishnavi', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'யோகேஷ்', nameEn: 'Yogesh', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'சந்தோஷ்', nameEn: 'Santhosh', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'சங்கர்', nameEn: 'Sankar', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'சரவணா', nameEn: 'Saravana', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'வெங்கடேஷ்', nameEn: 'Venkatesh', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'ஜெனிட்டா ஏஞ்சலின்', nameEn: 'Jenita Angeline', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'முத்துச்செல்வி', nameEn: 'Muthuselvi', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'கோபி', nameEn: 'Gopi', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'மதன்', nameEn: 'Mathan', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'பாலா', nameEn: 'Bala', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'கார்த்திக் தீபன்', nameEn: 'Karthik Deepan', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'சூர்யா வேலன்', nameEn: 'Suriya Velan', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'சையத் இப்ராஹிம்', nameEn: 'Syad Ibrahim', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'ரஸ்ஸல்', nameEn: 'Russel', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'மதுமிதா', nameEn: 'Mathumitha', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'அருண்', nameEn: 'Arun', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'சிவராம்', nameEn: 'Sivaram', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'சிவகுருநாதன்', nameEn: 'Sivagurunathan', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'கருப்பசாமி', nameEn: 'Karuppasamy', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'விஜய்', nameEn: 'Vijay', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'சஞ்சய்', nameEn: 'Sanjay', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },

  // 10D. KALASALINGAM UNIVERSITY — FRIENDS (கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்)
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'நீலகண்டேஸ்வர் ரெட்டி பொல்லாவரம்', nameEn: 'Neelakanteswar Reddy Bollavaram', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'S ரோஹித் குமார்', nameEn: 'S Rohith Kumar', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'Ms. கன்னிகா M', nameEn: 'Ms. Kanniga M', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'ஆர்த்திகா S', nameEn: 'Aarthika S', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'ஸ்ரீசுபஸ்ரீ. S', nameEn: 'Srisubasri.S', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'அஸ்மிதா ஸ்ரீ V', nameEn: 'Asmitha Shree V', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'முகமது அப்ரார் S K', nameEn: 'Mohamed Abrar S K', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'பொம்மிடி கணேஷ்', nameEn: 'Bommidi Ganesh', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'சாய் சித்தார்த் S', nameEn: 'Sai Siddarth S', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'Mr முகிலன் S P', nameEn: 'Mr Mugilan S P', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'நிவாஷ் S', nameEn: 'Nivash S', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'Mr வைஷ்ணவ தனுஷ் D', nameEn: 'Mr Vaishnava Dhanush D', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'Mr கைலாஷ் ரவிச்சந்திரன்', nameEn: 'Mr Kailash Ravichandran', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'ஜெயனிதா J', nameEn: 'Jeyanitha J', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'கார்த்திகா G', nameEn: 'Karthika G', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'Ms. புவனேஸ்வரி R', nameEn: 'Ms. Bhuvaneshwari R', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'Mr ஸ்ரீமன் ராஜ் T', nameEn: 'Mr Shriman Raj T', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'Mr கியாதப்பகரி ரோஹித்', nameEn: 'Mr Kyathappagari Rohith', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'Mr சுரேஷ் தீபக்', nameEn: 'Mr Suresh Dheepak', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'குருஅசோகன் G', nameEn: 'Guruashokan G', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'Ms. ஷிரின் மேரி. P', nameEn: 'Ms. Shirin Mary. P', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'Mr விஷ்வக் சாய் முதிவர்த்தி', nameEn: 'Mr Vishwak Sai Mudivarthi', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'ஹரிஷ்குமரன் V', nameEn: 'Harishkumaran V', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'செந்தூர் வேலன் B G A', nameEn: 'Chendhoor Velan B G A', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'ஆரோமல் S. குமார்', nameEn: 'Aaromal S. Kumar', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'ஹரி சாய் சுபாஷ் அலுமோலு', nameEn: 'Hari Sai Subhash Alumolu', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'L.S லோகேஷ்', nameEn: 'L.S Lokesh', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'நவீன் கரண் R S', nameEn: 'Naveen Karan R S', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'வெண்ணிமுத்து V', nameEn: 'Vennimuthu V', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'ஆனந்து பிரதீப்', nameEn: 'Anandu Pradeep', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'V ஆதித்யா', nameEn: 'V Adhithiyaa', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'கார்த்திகேயன் G', nameEn: 'Karthikeyen G', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
  { side: 'both', ageGroup: 'friends', friendCategory: 'kalasalingam_friends', groupTa: 'கலசலிங்கம் பல்கலைக்கழகம் · நண்பர்கள்', groupEn: 'Kalasalingam University · Friends', nameTa: 'பெத்தபுடி ரூபேஷ்', nameEn: 'Bethapudi Rupesh', locTa: 'கலசலிங்கம் பல்கலைக்கழகம்', locEn: 'Kalasalingam University' },
];

export const DIRECTORY_PERSONS: DirectoryPerson[] = RAW_DIRECTORY_SEED.map((row, idx) => ({
  id: `dir-${idx + 1}`,
  nameTa: row.nameTa,
  nameEn: row.nameEn,
  side: row.side,
  ageGroup: row.ageGroup,
  groupTa: row.groupTa,
  groupEn: row.groupEn,
  locationTa: row.locTa,
  locationEn: row.locEn,
  friendCategory: row.friendCategory,
  isSenior: row.isSenior,
}));

export const INITIAL_BLESSINGS: BlessingEntry[] = [
  {
    id: 'b1',
    name: 'Prof. S. Rengasamy',
    relation: 'Family Elder',
    message: 'May Sri Vetri Vinayagar, Pothikulam Muthumari Amman, and Oor Kavalan Samy bless M. Thirisha & Siva Shankar with endless harmony and prosperity!',
    time: 'Yesterday',
  },
  {
    id: 'b2',
    name: 'Dr. K. Jayashree',
    relation: "Bride's Mentor",
    message: 'Two brilliant minds uniting with sacred family traditions. Wishing you a blissful married life ahead!',
    time: '2 days ago',
  },
  {
    id: 'b3',
    name: 'M. Vignesh & Family',
    relation: 'Brother',
    message: "Can't wait to welcome all relatives to Madurai. Let the celebrations begin!",
    time: '3 days ago',
  },
];
