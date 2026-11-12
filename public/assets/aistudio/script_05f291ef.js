/* ==========================================================================
   MADURAI HERITAGE WEDDING - SCRIPT & LOGIC ENGINE
   ========================================================================== */

/* Default Seed Configuration */
const DEFAULT_DATA = {
  bride: "M. Thirisha",
  groom: "Siva Shankar",
  familyFunction: "THIRUMOORTHI GROUPS FAMILY FUNCTION",
  familyFunctionTa: "திருமூர்த்தி குழுமக் குடும்ப விழா",
  deities: "Sri Vetri Vinayagar Thunai, Pothikulam Muthumari Amman and Oor Kavalan Samy",
  deitiesTa: "ஸ்ரீ வெற்றி விநாயகர் துணை · பொதிகுளம் முத்துமாரியம்மன் · ஊர் காவலன் சாமி",
  brideQualificationTa: "ஆங்கில இலக்கியத்தில் முதுகலை (M.A.)",
  brideFatherTa: "A. மூர்த்தி — நிறுவனர் மற்றும் தலைவர், திருமூர்த்தி குழுமம்",
  brideMotherTa: "M. அலமேலு — நிறுவனர் மற்றும் தலைமைச் செயல் அதிகாரி, திருமூர்த்தி குழுமம்",
  brideBrotherTa: "M. தீபக் — B.Tech ECE, எம்பெடெட் பொறியாளர் மற்றும் திருமூர்த்தி குழும மேலாளர்",
  businessesTa: "MATD திருமூர்த்தி மஹால், ஆண்டிப்பட்டி பங்களா, டி. வாடிப்பட்டி, மதுரை · திருமூர்த்தி தேநீர் கடை · திருமூர்த்தி மளிகைக் கடை",
  brideBioTa: "M. திரிஷா ஆங்கில இலக்கியத்தில் முதுகலைப் பட்டம் பெற்றவர். A. மூர்த்தி மற்றும் M. அலமேலு ஆகிய திருமூர்த்தி குழும நிறுவனர்களின் மகள்.",
  groomBioTa: "மணமகன் சிவசங்கர். அவரைப் பற்றிய கூடுதல் விவரங்களை குடும்ப நிர்வாகி சேர்க்கலாம்.",
  patrikaBodyTextTa: "ஸ்ரீ வெற்றி விநாயகர் துணை · பொதிகுளம் முத்துமாரியம்மன் · ஊர் காவலன் சாமி அருளுடனும், பெற்றோர் மற்றும் பெரியோரின் ஆசிகளுடனும், திருமூர்த்தி குழுமக் குடும்பம் M. திரிஷா மற்றும் சிவசங்கர் திருமண விழாவில் தங்களின் வருகையை அன்புடன் வேண்டுகிறது.",
  brideQualification: "M.A. English Literature",
  brideFather: "A. Moorthi — Founder & Chairperson, Thirumoorthi Groups",
  brideMother: "M. Alamelu — Founder & CEO, Thirumoorthi Groups",
  brideBrother: "M. Deepak — B.Tech ECE, Embedded Engineer & Manager, Thirumoorthi Groups",
  businesses: "MATD Thirumoorthi Mahal · Thirumoorthi Tea Stall · Thirumoorthi Grocery Shop",
  groomQualification: "",
  date: "2026-11-22T06:15",
  venue: "MATD Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti, Madurai",
  venueTa: "MATD திருமூர்த்தி மஹால், ஆண்டிப்பட்டி பங்களா, டி. வாடிப்பட்டி, மதுரை",
  address: "MATD Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti, Madurai",
  addressTa: "MATD திருமூர்த்தி மஹால், ஆண்டிப்பட்டி பங்களா, டி. வாடிப்பட்டி, மதுரை",
  map: "https://maps.app.goo.gl/GA7fjzCVVkBG7dwv7",
  bus: "https://www.google.com/search?q=buses+to+Mattuthavani+Bus+Stand+Madurai",
  train: "https://www.google.com/search?q=trains+to+Madurai+Junction+MDU",
  whatsapp: "",
  brideBio: "M. Thirisha, M.A. English Literature. Daughter of A. Moorthi and M. Alamelu, founders of Thirumoorthi Groups.",
  groomBio: "Siva Shankar, the groom. Further professional and family details can be added by the family administrator.",
  patrikaBodyText: "With the divine blessings of Sri Vetri Vinayagar Thunai, Pothikulam Muthumari Amman and Oor Kavalan Samy, and with the blessings of our elders, the Thirumoorthi Groups family warmly invites you to celebrate the auspicious wedding of M. Thirisha and Siva Shankar.",
  brideCoordName: "M. Deepak",
  brideCoordPhone: "7845051288",
  groomCoordName: "Sankar (Groom)",
  groomCoordPhone: "9655884474",
  displayMode: "auto",
  lang: "ta",
  events: [
    {
      id: "ev1",
      title: "Nichayathartham (Engagement)",
      titleTa: "நிச்சயதார்த்தம்",
      time: "Saturday, 21 Nov · 6:30 PM", timeTa: "நவம்பர் 21, சனி · மாலை 6:30",
      desc: "The engagement ceremony with family blessings and traditional rituals.", descTa: "குடும்பத்தினர் மற்றும் பெரியோர்களின் ஆசிகளுடன் நடைபெறும் பாரம்பரிய நிச்சயதார்த்த விழா.",
      dress: "Traditional Silk Pattu / Formal Sherwani", dressTa: "பாரம்பரிய பட்டுப் புடவை / வேஷ்டி அல்லது ஷெர்வானி",
      location: "MATD Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti, Madurai", locationTa: "MATD திருமூர்த்தி மஹால், ஆண்டிப்பட்டி பங்களா, டி. வாடிப்பட்டி, மதுரை, மதுரை"
    },
    {
      id: "ev2",
      title: "Ganapathi Homam & Vratham", titleTa: "கணபதி ஹோமம் மற்றும் விரதம்",
      time: "Sunday, 22 Nov · 5:00 AM", timeTa: "நவம்பர் 22, ஞாயிறு · காலை 5:00",
      desc: "Sacred fire rituals for prosperity, guided by family traditions.", descTa: "குடும்ப மரபுகளின்படி செழிப்பும் நலமும் வேண்டி நடைபெறும் புனித ஹோமம்.",
      dress: "Traditional South Indian Attire", dressTa: "பாரம்பரிய தென்னிந்திய உடை",
      location: "MATD Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti, Madurai", locationTa: "MATD திருமூர்த்தி மஹால், ஆண்டிப்பட்டி பங்களா, டி. வாடிப்பட்டி, மதுரை, மதுரை"
    },
    {
      id: "ev3",
      title: "Sacred Muhurtham (திருமாங்கல்ய தாரணம்)", titleTa: "திருமாங்கல்ய தாரணம் — சுப முகூர்த்தம்",
      time: "Sunday, 22 Nov · 6:15 AM - 7:15 AM", timeTa: "நவம்பர் 22, ஞாயிறு · காலை 6:15–7:15",
      desc: "The sacred Thirumangalyam ceremony with traditional music and flower blessings.", descTa: "பாரம்பரிய இசை மற்றும் மலர் ஆசிகளுடன் நடைபெறும் திருமாங்கல்ய தாரணம்.",
      dress: "Madurai Sungudi / Kanchipuram Silk & Veshti", dressTa: "மதுரை சுங்குடி / காஞ்சிபுரம் பட்டுப் புடவை மற்றும் வேஷ்டி",
      location: "Main Kalyana Mandapam Stage, Madurai", locationTa: "முக்கிய திருமண மேடை, மதுரை"
    },
    {
      id: "ev4",
      title: "Traditional Madurai Kalyana Virundhu", titleTa: "பாரம்பரிய மதுரை கல்யாண விருந்து",
      time: "Sunday, 22 Nov · 8:00 AM onwards", timeTa: "நவம்பர் 22, ஞாயிறு · காலை 8:00 மணி முதல்",
      desc: "Traditional wedding feast served on banana leaves, with local delicacies.", descTa: "வாழை இலையில் பரிமாறப்படும் பாரம்பரிய திருமண விருந்து மற்றும் மதுரை சிறப்பு உணவுகள்.",
      dress: "Festive Attire", dressTa: "விழாக்கால உடை",
      location: "Dining Hall, MATD Thirumoorthi Mahal", locationTa: "உணவுக் கூடம், MATD திருமூர்த்தி மஹால், ஆண்டிப்பட்டி பங்களா, டி. வாடிப்பட்டி, மதுரை"
    }
  ],
  album: [
    { src: "assets/page1-bride-groom.webp", caption: "M. Thirisha & Siva Shankar Traditional Attire", captionTa: "M. திரிஷா மற்றும் சிவசங்கர் — பாரம்பரிய அலங்காரம்", captionEn: "M. Thirisha & Siva Shankar Traditional Attire", date: "Pre-wedding Rituals", dateTa: "திருமணத்திற்கு முந்தைய சடங்குகள்", dateEn: "Pre-wedding Rituals" },
    { src: "assets/page2-temple-day.webp", caption: "Meenakshi Amman Temple Gopuram by Day", captionTa: "பகல் நேர மீனாட்சி அம்மன் கோபுரம்", captionEn: "Meenakshi Amman Temple Gopuram by Day", date: "Heritage Blessings", dateTa: "பாரம்பரிய ஆசி", dateEn: "Heritage Blessings" },
    { src: "assets/page3-temple-aerial.webp", caption: "Temple Towers Aerial Heritage View", captionTa: "கோபுரங்களின் வான்வழிப் பார்வை", captionEn: "Temple Towers Aerial Heritage View", date: "Madurai Skyline", dateTa: "மதுரை நகரக் காட்சி", dateEn: "Madurai Skyline" },
    { src: "assets/wedding-courtyard.webp", caption: "Sacred Wedding Courtyard Mandapam", captionTa: "திருமண மண்டப முற்றம்", captionEn: "Sacred Wedding Courtyard Mandapam", date: "Ceremony Venue", dateTa: "திருமண நிகழ்வு நடைபெறும் இடம்", dateEn: "Ceremony Venue" },
    { src: "assets/final-thank-you-courtyard.webp", caption: "Royal Heritage Hall at Golden Hour", captionTa: "மாலை ஒளியில் பாரம்பரிய மண்டபம்", captionEn: "Royal Heritage Hall at Golden Hour", date: "Evening Illumination", dateTa: "மாலை நேர அலங்கார விளக்குகள்", dateEn: "Evening Illumination" },
    { src: "assets/madurai-sunset-panorama.webp", caption: "Sunset Panorama of Madurai Temple City", captionTa: "சூரிய அஸ்தமனத்தில் மதுரை கோவில் நகரம்", captionEn: "Sunset Panorama of Madurai Temple City", date: "Vaigai Horizon", dateTa: "வைகை நதிக்கரைக் காட்சி", dateEn: "Vaigai Horizon" }
  ],
  persons: [
    { id: "p1", name: "A. Moorthi & M. Alamelu", nameTa: "A. மூர்த்தி & M. அலமேலு", nameEn: "A. Moorthi & M. Alamelu", category: "relatives-bride", kinship: "parents-immediate", role: "Bride's Parents · Founders of Thirumoorthi Groups", roleTa: "மணமகளின் பெற்றோர் · திருமூர்த்தி குழும நிறுவனர்கள்", roleEn: "Bride's Parents · Founders of Thirumoorthi Groups", kids: "M. Thirisha (Bride) · M. Deepak (Son)", kidsTa: "M. திரிஷா (மணமகள்) · M. தீபக் (மகன்)", kidsEn: "M. Thirisha (Bride) · M. Deepak (Son)", location: "Madurai", locationTa: "மதுரை", locationEn: "Madurai", photo: "", note: "A. Moorthi is Founder & Chairperson; M. Alamelu is Founder & CEO. Businesses: MATD Thirumoorthi Mahal, Thirumoorthi Tea Stall and Thirumoorthi Grocery Shop.", noteTa: "A. மூர்த்தி நிறுவனர் மற்றும் தலைவர்; M. அலமேலு நிறுவனர் மற்றும் தலைமைச் செயல் அதிகாரி. திருமூர்த்தி குழுமத்தின் குடும்பத் தொழில்கள்.", noteEn: "A. Moorthi is Founder & Chairperson; M. Alamelu is Founder & CEO of Thirumoorthi Groups." },
    { id: "p2", name: "M. Thirisha", nameTa: "M. திரிஷா", nameEn: "M. Thirisha", category: "relatives-bride", kinship: "parents-immediate", role: "Bride · M.A. English Literature", roleTa: "மணமகள் · ஆங்கில இலக்கியத்தில் முதுகலை", roleEn: "Bride · M.A. English Literature", kids: "", kidsTa: "", kidsEn: "", location: "Thirumoorthi Groups Family", locationTa: "திருமூர்த்தி குழுமக் குடும்பம்", locationEn: "Thirumoorthi Groups Family", photo: "", note: "Bride of the family celebration.", noteTa: "திருமூர்த்தி குழுமக் குடும்ப விழாவின் மணமகள்.", noteEn: "Bride of the Thirumoorthi Groups family celebration." },
    { id: "p3", name: "M. Deepak", nameTa: "M. தீபக்", nameEn: "M. Deepak", category: "relatives-bride", kinship: "parents-immediate", role: "Bride's Brother · B.Tech ECE · Embedded Engineer & Manager, Thirumoorthi Groups", roleTa: "மணமகளின் சகோதரர் · B.Tech ECE · எம்பெடெட் பொறியாளர் மற்றும் திருமூர்த்தி குழும மேலாளர்", roleEn: "Bride's Brother · B.Tech ECE · Embedded Engineer & Manager, Thirumoorthi Groups", kids: "", kidsTa: "", kidsEn: "", location: "Madurai", locationTa: "மதுரை", locationEn: "Madurai", photo: "", note: "Helps manage MATD Thirumoorthi Mahal, Thirumoorthi Tea Stall and Thirumoorthi Grocery Shop.", noteTa: "MATD திருமூர்த்தி மஹால், ஆண்டிப்பட்டி பங்களா, டி. வாடிப்பட்டி, மதுரை, திருமூர்த்தி தேநீர் கடை மற்றும் திருமூர்த்தி மளிகைக் கடையின் நிர்வாகத்தில் உதவுகிறார்.", noteEn: "Helps manage MATD Thirumoorthi Mahal, Thirumoorthi Tea Stall and Thirumoorthi Grocery Shop." },
    { id: "p4", name: "S. Suresh & Valli", nameTa: "S. சுரேஷ் – வள்ளி", nameEn: "S. Suresh & Valli", category: "relatives-groom", kinship: "parents-immediate", role: "Groom's Parents", roleTa: "மணமகனின் பெற்றோர்", roleEn: "Groom's Parents", kids: "S. Siva Shankar (Groom)", kidsTa: "S. சிவசங்கர் (மணமகன்)", kidsEn: "S. Siva Shankar (Groom)", location: "", locationTa: "", locationEn: "", photo: "", note: "", noteTa: "", noteEn: "" },
    { id: "bride-father-photo", name: "A. Moorthi", nameTa: "A. மூர்த்தி", nameEn: "A. Moorthi", category: "relatives-bride", kinship: "parents-immediate", role: "Bride's Father", roleTa: "மணமகளின் தந்தை", roleEn: "Bride's Father", kids: "", kidsTa: "", kidsEn: "", location: "Madurai", locationTa: "மதுரை", locationEn: "Madurai", photo: "", note: "Founder & Chairperson, Thirumoorthi Groups", noteTa: "திருமூர்த்தி குழும நிறுவனர் மற்றும் தலைவர்", noteEn: "Founder & Chairperson, Thirumoorthi Groups" },
    { id: "bride-mother-photo", name: "M. Alamelu", nameTa: "M. அலமேலு", nameEn: "M. Alamelu", category: "relatives-bride", kinship: "parents-immediate", role: "Bride's Mother", roleTa: "மணமகளின் தாய்", roleEn: "Bride's Mother", kids: "", kidsTa: "", kidsEn: "", location: "Madurai", locationTa: "மதுரை", locationEn: "Madurai", photo: "", note: "Founder & CEO, Thirumoorthi Groups", noteTa: "திருமூர்த்தி குழும நிறுவனர் மற்றும் தலைமைச் செயல் அதிகாரி", noteEn: "Founder & CEO, Thirumoorthi Groups" }
  ],
  wishes: [
    { name: "Prof. S. Rengasamy", relation: "Family Elder", text: "May Sri Vetri Vinayagar Thunai, Pothikulam Muthumari Amman and Oor Kavalan Samy bless the Thirumoorthi Groups family with prosperity, happiness, and peace!", time: "Yesterday" },
    { name: "Dr. K. Jayashree", relation: "Bride's Mentor", text: "Two brilliant minds uniting with sacred family traditions. Wishing a blissful married life ahead!", time: "2 days ago" },
    { name: "M. Vignesh & Family", relation: "Brother", text: "Can't wait to welcome all relatives to Madurai. Let the celebrations begin!", time: "3 days ago" }
  ],
  rsvps: []
};

// V36 coordinator contact migration: apply the requested updated coordinator details once.
try {
  if (localStorage.getItem("thirumoorthiV36CoordinatorMigration") !== "1") {
    siteData.brideCoordName = "M. Deepak"; siteData.brideCoordPhone = "7845051288";
    siteData.groomCoordName = "Sankar (Groom)"; siteData.groomCoordPhone = "9655884474";
    localStorage.setItem("thirumoorthiV36CoordinatorMigration", "1");
    persistSiteData();
  }
} catch (e) {}

/* Guest list supplied for the Thirumoorthi Groups family function. Original wording is retained in both Tamil and English fields. */
const GROOM_FAMILY_DIRECTORY_SEED = [
  {
    "id": "groomlist-sister-01",
    "name": "Mr. A. Selvam – Thamila",
    "nameTa": "திரு. A. செல்வம் – தாமிலா",
    "nameEn": "Mr. A. Selvam – Thamila",
    "category": "relatives-groom",
    "kinship": "groom-sisters-samayars",
    "role": "Engineering",
    "roleTa": "பொறியியல்",
    "roleEn": "Engineering",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "",
    "locationTa": "",
    "locationEn": "",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் 10 சாமியாரிகள் – சகோதரிகள்",
    "directoryGroupEn": "Bridegroom's 10 Samayars – Sisters"
  },
  {
    "id": "groomlist-sister-02",
    "name": "Mr. A. Manojkumar – Bhuvaneswari",
    "nameTa": "திரு. A. மனோஜ்குமார் – புவனேஸ்வரி",
    "nameEn": "Mr. A. Manojkumar – Bhuvaneswari",
    "category": "relatives-groom",
    "kinship": "groom-sisters-samayars",
    "role": "",
    "roleTa": "",
    "roleEn": "",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Trichy",
    "locationTa": "திருச்சி",
    "locationEn": "Trichy",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் 10 சாமியாரிகள் – சகோதரிகள்",
    "directoryGroupEn": "Bridegroom's 10 Samayars – Sisters"
  },
  {
    "id": "groomlist-sister-03",
    "name": "Mr. M. Chandramohan – Ninaividam",
    "nameTa": "திரு. M. சந்திரமோகன் – நினைவிடம்",
    "nameEn": "Mr. M. Chandramohan – Ninaividam",
    "category": "relatives-groom",
    "kinship": "groom-sisters-samayars",
    "role": "",
    "roleTa": "",
    "roleEn": "",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Madurai",
    "locationTa": "மதுரை",
    "locationEn": "Madurai",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் 10 சாமியாரிகள் – சகோதரிகள்",
    "directoryGroupEn": "Bridegroom's 10 Samayars – Sisters"
  },
  {
    "id": "groomlist-sister-04",
    "name": "Mr. P. Prasad – Gayathri",
    "nameTa": "திரு. பி. பிரசாத் – காயத்ரி",
    "nameEn": "Mr. P. Prasad – Gayathri",
    "category": "relatives-groom",
    "kinship": "groom-sisters-samayars",
    "role": "MCA, Engineering",
    "roleTa": "MCA, பொறியியல்",
    "roleEn": "MCA, Engineering",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "",
    "locationTa": "",
    "locationEn": "",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் 10 சாமியாரிகள் – சகோதரிகள்",
    "directoryGroupEn": "Bridegroom's 10 Samayars – Sisters"
  },
  {
    "id": "groomlist-sister-05",
    "name": "Mr. Saravanan B.Com – Priyanka M.Sc., B.Ed.",
    "nameTa": "திரு. சரவணன் B.Com – பிரியங்கா M.Sc., B.Ed.",
    "nameEn": "Mr. Saravanan B.Com – Priyanka M.Sc., B.Ed.",
    "category": "relatives-groom",
    "kinship": "groom-sisters-samayars",
    "role": "College Professor Department · Rajagopal",
    "roleTa": "கல்லூரிப் பேராசிரியர் துறை · ராஜகோபால்",
    "roleEn": "College Professor Department · Rajagopal",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "",
    "locationTa": "",
    "locationEn": "",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் 10 சாமியாரிகள் – சகோதரிகள்",
    "directoryGroupEn": "Bridegroom's 10 Samayars – Sisters"
  },
  {
    "id": "groomlist-sister-06",
    "name": "Mr. P. Ravikumar M.Sc. (Physics) – Chitra",
    "nameTa": "திரு. பி. ரவிக்குமார் M.Sc. (இயற்பியல்) – சித்ரா",
    "nameEn": "Mr. P. Ravikumar M.Sc. (Physics) – Chitra",
    "category": "relatives-groom",
    "kinship": "groom-sisters-samayars",
    "role": "Engineering",
    "roleTa": "பொறியியல்",
    "roleEn": "Engineering",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "",
    "locationTa": "",
    "locationEn": "",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் 10 சாமியாரிகள் – சகோதரிகள்",
    "directoryGroupEn": "Bridegroom's 10 Samayars – Sisters"
  },
  {
    "id": "groomlist-samayar-01",
    "name": "Mr. P. Prabhu – Gayathri",
    "nameTa": "திரு. பி. பிரபு – காயத்ரி",
    "nameEn": "Mr. P. Prabhu – Gayathri",
    "category": "relatives-groom",
    "kinship": "groom-samayars",
    "role": "Engineering",
    "roleTa": "பொறியியல்",
    "roleEn": "Engineering",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "",
    "locationTa": "",
    "locationEn": "",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் சாமியாரிகள்",
    "directoryGroupEn": "Bridegroom's Samayars"
  },
  {
    "id": "groomlist-samayar-02",
    "name": "Mr. Ku. Ayyappan",
    "nameTa": "திரு. கு. அய்யப்பன்",
    "nameEn": "Mr. Ku. Ayyappan",
    "category": "relatives-groom",
    "kinship": "groom-samayars",
    "role": "Engineering",
    "roleTa": "பொறியியல்",
    "roleEn": "Engineering",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Uthiramerur",
    "locationTa": "உத்திரமேரூர்",
    "locationEn": "Uthiramerur",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் சாமியாரிகள்",
    "directoryGroupEn": "Bridegroom's Samayars"
  },
  {
    "id": "groomlist-elder-01",
    "name": "Mr. P. Ravindran",
    "nameTa": "திரு. P. ரவீந்திரன்",
    "nameEn": "Mr. P. Ravindran",
    "category": "relatives-groom",
    "kinship": "groom-elder-brothers",
    "role": "Engineering",
    "roleTa": "பொறியியல்",
    "roleEn": "Engineering",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Pinnathiri",
    "locationTa": "பின்னத்திரி",
    "locationEn": "Pinnathiri",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் மனை – அண்ணன்கள்",
    "directoryGroupEn": "Bridegroom's Household – Elder Brothers"
  },
  {
    "id": "groomlist-elder-02",
    "name": "Mr. P. Elangovan B.Com – Seetha",
    "nameTa": "திரு. P. இளங்கோவன் B.Com – சீதா",
    "nameEn": "Mr. P. Elangovan B.Com – Seetha",
    "category": "relatives-groom",
    "kinship": "groom-elder-brothers",
    "role": "Nanthanai",
    "roleTa": "நந்தனை",
    "roleEn": "Nanthanai",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "",
    "locationTa": "",
    "locationEn": "",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் மனை – அண்ணன்கள்",
    "directoryGroupEn": "Bridegroom's Household – Elder Brothers"
  },
  {
    "id": "groomlist-elder-03",
    "name": "Mr. R. Saravanaperumal B.E. (Nokia) – Sandhiya MCA",
    "nameTa": "திரு. R. சரவணப்பெருமாள் B.E. (Nokia) – சந்தியா MCA",
    "nameEn": "Mr. R. Saravanaperumal B.E. (Nokia) – Sandhiya MCA",
    "category": "relatives-groom",
    "kinship": "groom-elder-brothers",
    "role": "4G Network",
    "roleTa": "4G Network",
    "roleEn": "4G Network",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Pudukkottai",
    "locationTa": "புதுக்கோட்டை",
    "locationEn": "Pudukkottai",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் மனை – அண்ணன்கள்",
    "directoryGroupEn": "Bridegroom's Household – Elder Brothers"
  },
  {
    "id": "groomlist-elder-04",
    "name": "Dr. R. Balasubramanian Ph.D. – Lalitha M.Sc.",
    "nameTa": "திரு. Dr. R. பாலசுப்ரமணியன் Ph.D. – லலிதா M.Sc.",
    "nameEn": "Dr. R. Balasubramanian Ph.D. – Lalitha M.Sc.",
    "category": "relatives-groom",
    "kinship": "groom-elder-brothers",
    "role": "Assistant Professor, Rajagiri Business School",
    "roleTa": "ராஜகிரி பிசினஸ் ஸ்கூல் உதவிப் பேராசிரியர்",
    "roleEn": "Assistant Professor, Rajagiri Business School",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Ernakulam",
    "locationTa": "எர்ணாகுளம்",
    "locationEn": "Ernakulam",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் மனை – அண்ணன்கள்",
    "directoryGroupEn": "Bridegroom's Household – Elder Brothers"
  },
  {
    "id": "groomlist-elder-05",
    "name": "Mr. R. Balan B.E. – Gayathri M.Com.",
    "nameTa": "திரு. R. பாலன் B.E. – காயத்ரி M.Com.",
    "nameEn": "Mr. R. Balan B.E. – Gayathri M.Com.",
    "category": "relatives-groom",
    "kinship": "groom-elder-brothers",
    "role": "",
    "roleTa": "",
    "roleEn": "",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Nanthanai, Pudukkottai",
    "locationTa": "நந்தனை, புதுக்கோட்டை",
    "locationEn": "Nanthanai, Pudukkottai",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் மனை – அண்ணன்கள்",
    "directoryGroupEn": "Bridegroom's Household – Elder Brothers"
  },
  {
    "id": "groomlist-elder-06",
    "name": "V. Perumal – Selvaraj",
    "nameTa": "V. பெருமாள் – செல்வராஜ்",
    "nameEn": "V. Perumal – Selvaraj",
    "category": "relatives-groom",
    "kinship": "groom-elder-brothers",
    "role": "",
    "roleTa": "",
    "roleEn": "",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Kallakurichi",
    "locationTa": "கள்ளக்குறிச்சி",
    "locationEn": "Kallakurichi",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் மனை – அண்ணன்கள்",
    "directoryGroupEn": "Bridegroom's Household – Elder Brothers"
  },
  {
    "id": "groomlist-elder-07",
    "name": "Mr. U. Rajaji – Rajkumar",
    "nameTa": "திரு. U. ராஜாஜி – ராஜ்குமார்",
    "nameEn": "Mr. U. Rajaji – Rajkumar",
    "category": "relatives-groom",
    "kinship": "groom-elder-brothers",
    "role": "Hariraja Store",
    "roleTa": "ஹரிராஜா ஸ்டோர்",
    "roleEn": "Hariraja Store",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Manaivikkadai",
    "locationTa": "மனைவிக்கடை",
    "locationEn": "Manaivikkadai",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் மனை – அண்ணன்கள்",
    "directoryGroupEn": "Bridegroom's Household – Elder Brothers"
  },
  {
    "id": "groomlist-elder-08",
    "name": "Mr. T. Thulasigam – Neela",
    "nameTa": "திரு. T. துளசிங்கம் – நீலா",
    "nameEn": "Mr. T. Thulasigam – Neela",
    "category": "relatives-groom",
    "kinship": "groom-elder-brothers",
    "role": "",
    "roleTa": "",
    "roleEn": "",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Ayyampettai",
    "locationTa": "அய்யம்பேட்டை",
    "locationEn": "Ayyampettai",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் மனை – அண்ணன்கள்",
    "directoryGroupEn": "Bridegroom's Household – Elder Brothers"
  },
  {
    "id": "groomlist-elder-09",
    "name": "Mr. K. Ramesh Dip.E. – Sridevi",
    "nameTa": "திரு. K. ரமேஷ் Dip.E. – ஸ்ரீதேவி",
    "nameEn": "Mr. K. Ramesh Dip.E. – Sridevi",
    "category": "relatives-groom",
    "kinship": "groom-elder-brothers",
    "role": "",
    "roleTa": "",
    "roleEn": "",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Nanthanai, Pudukkottai",
    "locationTa": "நந்தனை, புதுக்கோட்டை",
    "locationEn": "Nanthanai, Pudukkottai",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் மனை – அண்ணன்கள்",
    "directoryGroupEn": "Bridegroom's Household – Elder Brothers"
  },
  {
    "id": "groomlist-elder-10",
    "name": "Mr. P. Arunkumar (TVS) – Sridevi M.Sc., B.Ed.",
    "nameTa": "திரு. P. அருண்குமார் (TVS) – ஸ்ரீதேவி M.Sc., B.Ed.",
    "nameEn": "Mr. P. Arunkumar (TVS) – Sridevi M.Sc., B.Ed.",
    "category": "relatives-groom",
    "kinship": "groom-elder-brothers",
    "role": "Keran School",
    "roleTa": "கேரன் பள்ளி",
    "roleEn": "Keran School",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Nanthanai, Pudukkottai",
    "locationTa": "நந்தனை, புதுக்கோட்டை",
    "locationEn": "Nanthanai, Pudukkottai",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் மனை – அண்ணன்கள்",
    "directoryGroupEn": "Bridegroom's Household – Elder Brothers"
  },
  {
    "id": "groomlist-special-01",
    "name": "Mr. Pa. Selvathurai",
    "nameTa": "திரு. பா. செல்வதுரை",
    "nameEn": "Mr. Pa. Selvathurai",
    "category": "relatives-groom",
    "kinship": "groom-parent-special-guests",
    "role": "Engineering",
    "roleTa": "பொறியியல்",
    "roleEn": "Engineering",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Thirukovil",
    "locationTa": "திருக்கோவில்",
    "locationEn": "Thirukovil",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் பெற்றோர் – சிறப்பு விருந்தினர்கள்",
    "directoryGroupEn": "Groom's Parents – Special Guests"
  },
  {
    "id": "groomlist-special-02",
    "name": "Mr. Ku. Chandramohan – Padma",
    "nameTa": "திரு. கு. சந்திரமோகன் – பத்மா",
    "nameEn": "Mr. Ku. Chandramohan – Padma",
    "category": "relatives-groom",
    "kinship": "groom-parent-special-guests",
    "role": "Engineering",
    "roleTa": "பொறியியல்",
    "roleEn": "Engineering",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "",
    "locationTa": "",
    "locationEn": "",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் பெற்றோர் – சிறப்பு விருந்தினர்கள்",
    "directoryGroupEn": "Groom's Parents – Special Guests"
  },
  {
    "id": "groomlist-special-03",
    "name": "Mr. A. Srikant – Rani",
    "nameTa": "திரு. அ. ஸ்ரீகாந்த் – ராணி",
    "nameEn": "Mr. A. Srikant – Rani",
    "category": "relatives-groom",
    "kinship": "groom-parent-special-guests",
    "role": "Engineering",
    "roleTa": "பொறியியல்",
    "roleEn": "Engineering",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "",
    "locationTa": "",
    "locationEn": "",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் பெற்றோர் – சிறப்பு விருந்தினர்கள்",
    "directoryGroupEn": "Groom's Parents – Special Guests"
  },
  {
    "id": "groomlist-special-04",
    "name": "P. Singaraj – Padmam",
    "nameTa": "P. சிங்கராஜ் – பத்மம்",
    "nameEn": "P. Singaraj – Padmam",
    "category": "relatives-groom",
    "kinship": "groom-parent-special-guests",
    "role": "",
    "roleTa": "",
    "roleEn": "",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Nanthanai",
    "locationTa": "நந்தனை",
    "locationEn": "Nanthanai",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் பெற்றோர் – சிறப்பு விருந்தினர்கள்",
    "directoryGroupEn": "Groom's Parents – Special Guests"
  },
  {
    "id": "groomlist-special-05",
    "name": "Mr. P. Selvaraj B.A. – Pushpavathi",
    "nameTa": "திரு. P. செல்வராஜ் B.A. – புஷ்பாவதி",
    "nameEn": "Mr. P. Selvaraj B.A. – Pushpavathi",
    "category": "relatives-groom",
    "kinship": "groom-parent-special-guests",
    "role": "Pandiyan Paints Ltd.",
    "roleTa": "பாண்டியன் பெயிண்ட்ஸ் லிமிடெட்",
    "roleEn": "Pandiyan Paints Ltd.",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Manaivikkadai",
    "locationTa": "மனைவிக்கடை",
    "locationEn": "Manaivikkadai",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் பெற்றோர் – சிறப்பு விருந்தினர்கள்",
    "directoryGroupEn": "Groom's Parents – Special Guests"
  },
  {
    "id": "groomlist-special-06",
    "name": "Mr. P. Selvaraj – Ranikkani",
    "nameTa": "திரு. P. செல்வராஜ் – ராணிக்கனி",
    "nameEn": "Mr. P. Selvaraj – Ranikkani",
    "category": "relatives-groom",
    "kinship": "groom-parent-special-guests",
    "role": "Engineering",
    "roleTa": "பொறியியல்",
    "roleEn": "Engineering",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "",
    "locationTa": "",
    "locationEn": "",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் பெற்றோர் – சிறப்பு விருந்தினர்கள்",
    "directoryGroupEn": "Groom's Parents – Special Guests"
  },
  {
    "id": "groomlist-special-07",
    "name": "Mr. A. Elangovan – Janakirani",
    "nameTa": "திரு. A. இளங்கோவன் – ஜானகிராணி",
    "nameEn": "Mr. A. Elangovan – Janakirani",
    "category": "relatives-groom",
    "kinship": "groom-parent-special-guests",
    "role": "Retired Manager, RAMCO",
    "roleTa": "முன்னாள் RAMCO மேலாளர்",
    "roleEn": "Retired Manager, RAMCO",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Nanthanai, Pudukkottai",
    "locationTa": "நந்தனை, புதுக்கோட்டை",
    "locationEn": "Nanthanai, Pudukkottai",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் பெற்றோர் – சிறப்பு விருந்தினர்கள்",
    "directoryGroupEn": "Groom's Parents – Special Guests"
  },
  {
    "id": "groomlist-special-08",
    "name": "Mr. K. Deivamani MBA – Selvi M.Sc., B.Ed.",
    "nameTa": "திரு. K. தெய்வமணி MBA – செல்வி M.Sc., B.Ed.",
    "nameEn": "Mr. K. Deivamani MBA – Selvi M.Sc., B.Ed.",
    "category": "relatives-groom",
    "kinship": "groom-parent-special-guests",
    "role": "Agrovct, KAPL · Deputy Manager, Aavin",
    "roleTa": "Agrovct, KAPL · Aavin துணை மேலாளர்",
    "roleEn": "Agrovct, KAPL · Deputy Manager, Aavin",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Nanthanai, Pudukkottai",
    "locationTa": "நந்தனை, புதுக்கோட்டை",
    "locationEn": "Nanthanai, Pudukkottai",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் பெற்றோர் – சிறப்பு விருந்தினர்கள்",
    "directoryGroupEn": "Groom's Parents – Special Guests"
  },
  {
    "id": "groomlist-special-09",
    "name": "Mr. M. Sridharan M.Sc. – Marithiya MBA",
    "nameTa": "திரு. M. ஸ்ரீதரன் M.Sc. – மாரித்தியா MBA",
    "nameEn": "Mr. M. Sridharan M.Sc. – Marithiya MBA",
    "category": "relatives-groom",
    "kinship": "groom-parent-special-guests",
    "role": "",
    "roleTa": "",
    "roleEn": "",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Chennai",
    "locationTa": "சென்னை",
    "locationEn": "Chennai",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் பெற்றோர் – சிறப்பு விருந்தினர்கள்",
    "directoryGroupEn": "Groom's Parents – Special Guests"
  },
  {
    "id": "groomlist-brother-01",
    "name": "K. Janarthanan (Police Officer, Oyyur)",
    "nameTa": "K. ஜனார்த்தனன் (காவல்துறை அதிகாரி, ஒய்யூர்)",
    "nameEn": "K. Janarthanan (Police Officer, Oyyur)",
    "category": "relatives-groom",
    "kinship": "groom-brothers",
    "role": "",
    "roleTa": "",
    "roleEn": "",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Madurai",
    "locationTa": "மதுரை",
    "locationEn": "Madurai",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் சகோதரர்கள்",
    "directoryGroupEn": "Bridegroom's Brothers"
  },
  {
    "id": "groomlist-brother-02",
    "name": "Pe. Singa – Jayapal Anna",
    "nameTa": "பெ. சிங்கா – ஜெயபால் அண்ணன்",
    "nameEn": "Pe. Singa – Jayapal Anna",
    "category": "relatives-groom",
    "kinship": "groom-brothers",
    "role": "",
    "roleTa": "",
    "roleEn": "",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Kallakurichi",
    "locationTa": "கள்ளக்குறிச்சி",
    "locationEn": "Kallakurichi",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் சகோதரர்கள்",
    "directoryGroupEn": "Bridegroom's Brothers"
  },
  {
    "id": "groomlist-brother-03",
    "name": "Mr. K. Ramachandran",
    "nameTa": "திரு. K. இராமச்சந்திரன்",
    "nameEn": "Mr. K. Ramachandran",
    "category": "relatives-groom",
    "kinship": "groom-brothers",
    "role": "Equality Department Officer, Oyyur",
    "roleTa": "சமத்துவத் துறை அதிகாரி, ஒய்யூர்",
    "roleEn": "Equality Department Officer, Oyyur",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "Madurai",
    "locationTa": "மதுரை",
    "locationEn": "Madurai",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் சகோதரர்கள்",
    "directoryGroupEn": "Bridegroom's Brothers"
  },
  {
    "id": "groomlist-brother-04",
    "name": "K. Perumal – Shanmugasundaram",
    "nameTa": "K. பெருமாள் – சண்முகசுந்தரம்",
    "nameEn": "K. Perumal – Shanmugasundaram",
    "category": "relatives-groom",
    "kinship": "groom-brothers",
    "role": "Engineering",
    "roleTa": "பொறியியல்",
    "roleEn": "Engineering",
    "kids": "",
    "kidsTa": "",
    "kidsEn": "",
    "location": "",
    "locationTa": "",
    "locationEn": "",
    "photo": "",
    "note": "",
    "noteTa": "",
    "noteEn": "",
    "directoryGroupTa": "மணமகன் சகோதரர்கள்",
    "directoryGroupEn": "Bridegroom's Brothers"
  }
];

const BRIDE_FAMILY_DIRECTORY_SEED = [
  { id:"bride-periyappa-01", name:"S. Nanjiraj & Santhiri", nameTa:"S. நங்கிராஜ் – சந்திரி", nameEn:"S. Nanjiraj & Santhiri", category:"relatives-bride", kinship:"bride-periyappa-periyamma", role:"Periyappa & Periyamma", roleTa:"பெரியப்பா – பெரியம்மா", roleEn:"Periyappa & Periyamma", kids:"", kidsTa:"", kidsEn:"", location:"Ponnamaravathi", locationTa:"பொன்னமராவதி", locationEn:"Ponnamaravathi", photo:"", note:"", noteTa:"", noteEn:"" },
  { id:"bride-periyappa-02", name:"M. Arumugam & Irakkuthai", nameTa:"M. ஆறுமுகம் – இராக்குத்தாய்", nameEn:"M. Arumugam & Irakkuthai", category:"relatives-bride", kinship:"bride-periyappa-periyamma", role:"Periyappa & Periyamma", roleTa:"பெரியப்பா – பெரியம்மா", roleEn:"Periyappa & Periyamma", kids:"", kidsTa:"", kidsEn:"", location:"Ponnamaravathi", locationTa:"பொன்னமராவதி", locationEn:"Ponnamaravathi", photo:"", note:"", noteTa:"", noteEn:"" },
  { id:"bride-periyappa-03", name:"S. Chandran & Pushpasaram", nameTa:"S. சந்திரன் – புஷ்பாசரம்", nameEn:"S. Chandran & Pushpasaram", category:"relatives-bride", kinship:"bride-periyappa-periyamma", role:"Periyappa & Periyamma", roleTa:"பெரியப்பா – பெரியம்மா", roleEn:"Periyappa & Periyamma", kids:"", kidsTa:"", kidsEn:"", location:"Madurai", locationTa:"மதுரை", locationEn:"Madurai", photo:"", note:"", noteTa:"", noteEn:"" },
  { id:"bride-periyappa-04", name:"K. Bhoominathan (B.Com) & Geetha (DTC)", nameTa:"K. பூமிநாதன் (B.Com) – கீதா (DTC)", nameEn:"K. Bhoominathan (B.Com) & Geetha (DTC)", category:"relatives-bride", kinship:"bride-periyappa-periyamma", role:"Periyappa & Periyamma", roleTa:"பெரியப்பா – பெரியம்மா", roleEn:"Periyappa & Periyamma", kids:"", kidsTa:"", kidsEn:"", location:"Madurai", locationTa:"மதுரை", locationEn:"Madurai", photo:"", note:"", noteTa:"", noteEn:"" },
  { id:"bride-anna-anni-01", name:"T. Rajasekarasamy (M.Com) & Anitha (D.Ted., B.Lit.)", nameTa:"T. இராஜசேகரசாமி (M.Com) – அனிதா (D.Ted., B.Lit.)", nameEn:"T. Rajasekarasamy (M.Com) & Anitha (D.Ted., B.Lit.)", category:"relatives-bride", kinship:"bride-anna-anni", role:"Anna & Anni", roleTa:"அண்ணன் – அண்ணி", roleEn:"Anna & Anni", kids:"", kidsTa:"", kidsEn:"", location:"Ponnamaravathi", locationTa:"பொன்னமராவதி", locationEn:"Ponnamaravathi", photo:"", note:"", noteTa:"", noteEn:"" },
  { id:"bride-anna-anni-02", name:"T. Sarandhumar (B.Com) & Vanitha (D.Ted.)", nameTa:"T. சார்ந்துமார் (B.Com) – வனிதா (D.Ted.)", nameEn:"T. Sarandhumar (B.Com) & Vanitha (D.Ted.)", category:"relatives-bride", kinship:"bride-anna-anni", role:"Anna & Anni", roleTa:"அண்ணன் – அண்ணி", roleEn:"Anna & Anni", kids:"", kidsTa:"", kidsEn:"", location:"Ponnamaravathi", locationTa:"பொன்னமராவதி", locationEn:"Ponnamaravathi", photo:"", note:"Name spelling follows the handwritten list and may need family confirmation.", noteTa:"பெயரின் எழுத்து வடிவம் கையெழுத்துப் பட்டியலின்படி உள்ளதால் குடும்பத்தினர் உறுதிப்படுத்தலாம்.", noteEn:"Name spelling follows the handwritten list and may need family confirmation." },
  { id:"bride-anna-anni-03", name:"S. Chandrasekaran (B.Tech) & Radhika (M.Sc., B.Ed.)", nameTa:"S. சந்திரசேகரன் (B.Tech) – ராதிகா (M.Sc., B.Ed.)", nameEn:"S. Chandrasekaran (B.Tech) & Radhika (M.Sc., B.Ed.)", category:"relatives-bride", kinship:"bride-anna-anni", role:"Anna & Anni", roleTa:"அண்ணன் – அண்ணி", roleEn:"Anna & Anni", kids:"", kidsTa:"", kidsEn:"", location:"Pattukkottai", locationTa:"பட்டுக்கோட்டை", locationEn:"Pattukkottai", photo:"", note:"", noteTa:"", noteEn:"" },
  { id:"bride-anna-anni-04", name:"A. Kodeeswari & Parvathi", nameTa:"A. கோடீஸ்வரி – பார்வதி", nameEn:"A. Kodeeswari & Parvathi", category:"relatives-bride", kinship:"bride-anna-anni", role:"Anna & Anni", roleTa:"அண்ணன் – அண்ணி", roleEn:"Anna & Anni", kids:"", kidsTa:"", kidsEn:"", location:"Veerapanidi", locationTa:"வீரபாண்டி", locationEn:"Veerapanidi", photo:"", note:"Names are transcribed from the handwritten list; please confirm spelling.", noteTa:"கையெழுத்துப் பட்டியலிலிருந்து பெயர்கள் பதிவு செய்யப்பட்டுள்ளன; எழுத்து வடிவத்தை உறுதிப்படுத்தவும்.", noteEn:"Names are transcribed from the handwritten list; please confirm spelling." },
  { id:"bride-anna-anni-05", name:"A. Dhanabalan (DCE) & Sandhiya (B.Sc.)", nameTa:"A. தனபாலன் (DCE) – சந்தியா (B.Sc.)", nameEn:"A. Dhanabalan (DCE) & Sandhiya (B.Sc.)", category:"relatives-bride", kinship:"bride-anna-anni", role:"Anna & Anni", roleTa:"அண்ணன் – அண்ணி", roleEn:"Anna & Anni", kids:"", kidsTa:"", kidsEn:"", location:"Veerapanidi", locationTa:"வீரபாண்டி", locationEn:"Veerapanidi", photo:"", note:"", noteTa:"", noteEn:"" },
  { id:"bride-anna-anni-06", name:"C. Jegatheeswaran & Arasiya", nameTa:"C. ஜெகதீஸ்வரன் – அரசுயா", nameEn:"C. Jegatheeswaran & Arasiya", category:"relatives-bride", kinship:"bride-anna-anni", role:"Anna & Anni", roleTa:"அண்ணன் – அண்ணி", roleEn:"Anna & Anni", kids:"", kidsTa:"", kidsEn:"", location:"Madurai", locationTa:"மதுரை", locationEn:"Madurai", photo:"", note:"Names are transcribed from the handwritten list; please confirm spelling.", noteTa:"கையெழுத்துப் பட்டியலிலிருந்து பெயர்கள் பதிவு செய்யப்பட்டுள்ளன; எழுத்து வடிவத்தை உறுதிப்படுத்தவும்.", noteEn:"Names are transcribed from the handwritten list; please confirm spelling." },
  { id:"bride-athan-01", name:"S. Kondachamy & Valarmathi", nameTa:"S. கோண்டச்சாமி – வளர்மதி", nameEn:"S. Kondachamy & Valarmathi", category:"relatives-bride", kinship:"machan-akka", role:"Bride's Akka & Machan family", roleTa:"மணமகள் அக்கா & மச்சான் குடும்பம்", roleEn:"Bride's Akka & Machan family", kids:"", kidsTa:"", kidsEn:"", location:"Malaysia (as written)", locationTa:"மலேசியா (குறிப்பிட்டபடி)", locationEn:"Malaysia (as written)", photo:"", note:"The handwritten location appears to read Malaysia; please confirm.", noteTa:"கையெழுத்தில் உள்ள இடம் மலேசியா எனத் தெரிகிறது; உறுதிப்படுத்தவும்.", noteEn:"The handwritten location appears to read Malaysia; please confirm." },
  { id:"bride-athan-02", name:"C. Senthamaraikannan (B.E.) & Rasathi (D.Ted., M.A., B.Ed., M.Phil.)", nameTa:"C. செந்தாமரைக்கண்ணன் (B.E.) – ராசாத்தி (D.Ted., M.A., B.Ed., M.Phil.)", nameEn:"C. Senthamaraikannan (B.E.) & Rasathi (D.Ted., M.A., B.Ed., M.Phil.)", category:"relatives-bride", kinship:"machan-akka", role:"Bride's Akka & Machan family", roleTa:"மணமகள் அக்கா & மச்சான் குடும்பம்", roleEn:"Bride's Akka & Machan family", kids:"", kidsTa:"", kidsEn:"", location:"Madurai", locationTa:"மதுரை", locationEn:"Madurai", photo:"", note:"", noteTa:"", noteEn:"" },
  { id:"bride-athan-03", name:"R. Dinesh (E.M.W., D.C.E.) & Petri (B.Com CA)", nameTa:"R. தினேஷ் (E.M.W., D.C.E.) – பெற்றி (B.Com CA)", nameEn:"R. Dinesh (E.M.W., D.C.E.) & Petri (B.Com CA)", category:"relatives-bride", kinship:"machan-akka", role:"Bride's Akka & Machan family", roleTa:"மணமகள் அக்கா & மச்சான் குடும்பம்", roleEn:"Bride's Akka & Machan family", kids:"", kidsTa:"", kidsEn:"", location:"Madurai", locationTa:"மதுரை", locationEn:"Madurai", photo:"", note:"Name spelling follows the handwritten list and may need family confirmation.", noteTa:"பெயரின் எழுத்து வடிவம் கையெழுத்துப் பட்டியலின்படி உள்ளது; குடும்பத்தினர் உறுதிப்படுத்தலாம்.", noteEn:"Name spelling follows the handwritten list and may need family confirmation." },
  { id:"bride-athan-04", name:"S. Manimaran Kumar (DME) & Chitra (B.Com)", nameTa:"S. மணிமாறன் குமார் (DME) – சித்ரா (B.Com)", nameEn:"S. Manimaran Kumar (DME) & Chitra (B.Com)", category:"relatives-bride", kinship:"machan-akka", role:"Bride's Akka & Machan family", roleTa:"மணமகள் அக்கா & மச்சான் குடும்பம்", roleEn:"Bride's Akka & Machan family", kids:"", kidsTa:"", kidsEn:"", location:"Madurai", locationTa:"மதுரை", locationEn:"Madurai", photo:"", note:"", noteTa:"", noteEn:"" }
];

/* V33 master family directory transcribed from the seven-page Tamil invitation. */
const V33_DIRECTORY_ROWS = "groom-brothers|relatives-groom|திரு.C.சிவபிரசாத் B.Tech., (Civil Construction)–சிந்துஜா M.A.,B.Ed.,|கத்தார்|மணமகன் சகோதரர்கள்\ngroom-brothers|relatives-groom|திரு.C.சிவகண்ணன் B.E., (Ford Motors Pvt., Ltd.,)–ரேவதி B.Sc.,|சென்னை|மணமகன் சகோதரர்கள்\ngroom-brothers|relatives-groom|திரு.P.திருமணிகண்டன் M.Pharm., (Aurobindo Pharma Ltd.,)–சிவசந்தியா MSc., B.Ed.,|ஆந்திரா|மணமகன் சகோதரர்கள்\ngroom-brothers|relatives-groom|திரு.R.விக்னேஷ் B.Pharm., (Preethi Hospital)–சிவரஞ்சனி MCA.,B.Ed.,|மதுரை|மணமகன் சகோதரர்கள்\ngroom-brothers|relatives-groom|திரு.J.சிவநிஷாந்த் B.Sc., MCA., (Telic Info Service)|சென்னை|மணமகன் சகோதரர்கள்\ngroom-mama|relatives-groom|திரு.மு.பிரப்பன்–காளிமுத்து|பொதிகுளம்|மணமகன் தாய்மாமன்கள்\ngroom-mama|relatives-groom|திரு.மு.அய்யாவு D.Co-op.,–உத்தமச்செல்வி|மதுரை|மணமகன் தாய்மாமன்கள்\ngroom-mama-athai|relatives-groom|திரு.P.தமிழ்குமரன்–பிச்சைக்கனி|பொதிகுளம்|மணமகன் மாமா–அத்தைமார்கள்\ngroom-mama-athai|relatives-groom|திரு.P.இளங்கோபெருமாள் B.Com.,–துர்கா|நாகமலைபுதுக்கோட்டை|மணமகன் மாமா–அத்தைமார்கள்\ngroom-mama-athai|relatives-groom|திரு.R.சரவணப்பெருமாள் B.E., (Nokia)–சத்யபிரபா MCA.,|நியூசிலாந்து|மணமகன் மாமா–அத்தைமார்கள்\ngroom-mama-athai|relatives-groom|திரு.Dr.R.பாலசுப்பிரமணியன் Ph.d.,–வைகை M.Sc., (Asst. Professor, Rajagiri Business School)|எர்ணாகுளம்|மணமகன் மாமா–அத்தைமார்கள்\ngroom-mama-athai|relatives-groom|திரு.R.பாலன் B.E., (கத்தார்)–காயத்ரி M.Com.,|நாகமலைபுதுக்கோட்டை|மணமகன் மாமா–அத்தைமார்கள்\ngroom-mama-athai|relatives-groom|திரு.V.பொன்னையா–செல்லத்தாய்|காத்தனேந்தல்|மணமகன் மாமா–அத்தைமார்கள்\ngroom-mama-athai|relatives-groom|திரு.U.ராமராஜ் (Hariraja Store)–ராக்கம்மாள்|யா.ஒத்தக்கடை|மணமகன் மாமா–அத்தைமார்கள்\ngroom-mama-athai|relatives-groom|திரு.T.பூவலிங்கம்–மீனா|அய்யங்கோட்டை|மணமகன் மாமா–அத்தைமார்கள்\ngroom-mama-athai|relatives-groom|திரு.K.ரமேஷ் Dip.Er.–முருகேஸ்வரி|நாகமலைபுதுக்கோட்டை|மணமகன் மாமா–அத்தைமார்கள்\ngroom-mama-athai|relatives-groom|திரு.P.ஆறுமுகசாமி (TVS)–முருகேஸ்வரி M.Sc., B.Ed., (Keran School)|N.P.கோட்டை|மணமகன் மாமா–அத்தைமார்கள்\ngroom-periyappa|relatives-groom|திரு.பா.செல்லத்துரை–சிவகாமி|பொதிகுளம்|மணமகன் பெரியப்பா–சித்தப்பாமார்கள்\ngroom-periyappa|relatives-groom|திரு.கு.சக்கரபாண்டி–பத்மா|பொதிகுளம்|மணமகன் பெரியப்பா–சித்தப்பாமார்கள்\ngroom-periyappa|relatives-groom|திரு.அ.முருகேசன்–ராணி|பொதிகுளம்|மணமகன் பெரியப்பா–சித்தப்பாமார்கள்\ngroom-periyappa|relatives-groom|திரு.P.சிங்கராஜ்–புஷ்பம்|காத்தனேந்தல்|மணமகன் பெரியப்பா–சித்தப்பாமார்கள்\ngroom-periyappa|relatives-groom|திரு.P.செல்வராஜ் B.A., (பாண்டியன் கெமிக்கல்ஸ் லிட)–முத்துராக்கு|யா.ஒத்தக்கடை|மணமகன் பெரியப்பா–சித்தப்பாமார்கள்\ngroom-periyappa|relatives-groom|திரு.P.ஜெயராஜ்–ரோகிணி|பொதிகுளம்|மணமகன் பெரியப்பா–சித்தப்பாமார்கள்\ngroom-periyappa|relatives-groom|திரு.A.குணசேகரன் (Ramco Manager (Rtd.,)–சண்முகவள்ளி|நாகமலைபுதுக்கோட்டை|மணமகன் பெரியப்பா–சித்தப்பாமார்கள்\ngroom-periyappa|relatives-groom|திரு.K.கருப்பசாமி MBA., (Agrovct, KAPL)–கௌசல்யா M.Sc.,B.Ed., (Deputy Manager Aavin)|நாகமலைபுதுக்கோட்டை|மணமகன் பெரியப்பா–சித்தப்பாமார்கள்\ngroom-periyappa|relatives-groom|திரு.M.மூவேந்திரன் M.Sc.,–கார்த்திகா MBA.,|சென்னை|மணமகன் பெரியப்பா–சித்தப்பாமார்கள்\ngroom-grandparents|relatives-groom|திரு.K.துரைச்சாமி காவல்துறை ஆய்வாளர் (ஓய்வு)|மதுரை|மணமகன் தாத்தா–பாட்டிமார்கள்\ngroom-grandparents|relatives-groom|திரு.பெ.பிச்சை–கருப்பாயி அம்மாள்|காத்தனேந்தல்|மணமகன் தாத்தா–பாட்டிமார்கள்\ngroom-grandparents|relatives-groom|திரு.K.இராமச்சந்திரன் சுகாதாரத்துறை ஆய்வாளர் (ஓய்வு)|மதுரை|மணமகன் தாத்தா–பாட்டிமார்கள்\ngroom-grandparents|relatives-groom|திரு.K.உடையார்–சிங்காத்தை|பொதிகுளம்|மணமகன் தாத்தா–பாட்டிமார்கள்\ngroom-grandparents|relatives-groom|திரு.K.பெருமாள்–சண்முகம்மாள்|பொதிகுளம்|மணமகன் தாத்தா–பாட்டிமார்கள்\ngroom-grandparents|relatives-groom|திரு.P.அம்மாசி–சுத்தக்காள்|பொதிகுளம்|மணமகன் தாத்தா–பாட்டிமார்கள்\ngroom-grandparents|relatives-groom|திரு.K.ராமக்கிருஷ்ணன் கால்நடை ஆய்வாளர் (ஓய்வு)–சாந்தி|மதுரை|மணமகன் தாத்தா–பாட்டிமார்கள்\ngroom-grandparents|relatives-groom|திரு.V.கிருஷ்ணன்–காளியம்மாள்|பொதிகுளம்|மணமகன் தாத்தா–பாட்டிமார்கள்\ngroom-grandparents|relatives-groom|திரு.M.மாரியப்பன் (TVS - Bangalore)–ரஞ்சிதம்|நாகமலைபுதுக்கோட்டை|மணமகன் தாத்தா–பாட்டிமார்கள்\ngroom-grandparents|relatives-groom|திரு.K.ராஜேந்திரன்–ராமுத்தாய்|பொதிகுளம்|மணமகன் தாத்தா–பாட்டிமார்கள்\ngroom-grandparents|relatives-groom|திரு.K.மகேந்திரன்–காந்தி (இளங்கோ ஸ்டோர்)|பொதிகுளம்|மணமகன் தாத்தா–பாட்டிமார்கள்\ngroom-anna-anni|relatives-groom|திரு.செ.ராஜா B.Com.,–பொன்மலர் M.Com.,|பொதிகுளம்|மணமகன் அண்ணன்–அண்ணிமார்கள்\ngroom-anna-anni|relatives-groom|திரு.ம.சேவுகப்பெருமாள் MBA.,–சோபனா M.Phil., B.Ed., (Deputy Manager, IT, Puthiyathalaimurai)|சென்னை|மணமகன் அண்ணன்–அண்ணிமார்கள்\ngroom-anna-anni|relatives-groom|திரு.ச.மாரிமுத்து–செல்வி|பொதிகுளம்|மணமகன் அண்ணன்–அண்ணிமார்கள்\ngroom-anna-anni|relatives-groom|திரு.ச.செந்தாமரை–கோகிலா|பொதிகுளம்|மணமகன் அண்ணன்–அண்ணிமார்கள்\ngroom-anna-anni|relatives-groom|திரு.ச.ரமேஷ் B.E., Ramesh Construction –தீபா B.Com.,|திருச்சி|மணமகன் அண்ணன்–அண்ணிமார்கள்\ngroom-anna-anni|relatives-groom|திரு.P.கருணாகரன் ITI., சிங்கப்பூர்–பிரதீபா B.Sc.,|மதுரை|மணமகன் அண்ணன்–அண்ணிமார்கள்\ngroom-anna-anni|relatives-groom|திரு.R.ஷியாம்சுந்தர் B.E.,–மோனிஷா M.Sc.,|செல்வநாயகபுரம்|மணமகன் அண்ணன்–அண்ணிமார்கள்\ngroom-anna-anni|relatives-groom|திரு.நாகராஜ்–பிரியங்கா B.E.,|பொதிகுளம்|மணமகன் அண்ணன்–அண்ணிமார்கள்\ngroom-sisters|relatives-groom|திரு.A.செல்வம்–கோகிலா|மதுரை|மணமகன் மச்சான்மார்கள்–சகோதரிகள்\ngroom-sisters|relatives-groom|திரு.A.மலைச்சாமி–புவனேஸ்வரி|திருச்சி|மணமகன் மச்சான்மார்கள்–சகோதரிகள்\ngroom-sisters|relatives-groom|திரு.M.சந்திரமோகன்–குணசுந்தரி|மதுரை|மணமகன் மச்சான்மார்கள்–சகோதரிகள்\ngroom-sisters|relatives-groom|திரு.K.சதீஸ்கண்ணன் B.Com., தமிழ்நாடு தீயணைப்புத்துறை–மேனகா M.Sc., B.Ed.,|இராமேஸ்வரம்|மணமகன் மச்சான்மார்கள்–சகோதரிகள்\ngroom-sisters|relatives-groom|திரு.பி.பிரகாஷ் B.Sc.,–காயத்ரி MCA.,|பொதிகுளம்|மணமகன் மச்சான்மார்கள்–சகோதரிகள்\ngroom-sisters|relatives-groom|திரு.பி.வேல்முருகன் M.Sc., துபாய்–திவ்யா|மதுரை|மணமகன் மச்சான்மார்கள்–சகோதரிகள்\nbride-aunt|relatives-bride|திரு.K.இராஜேந்திரன்–வீரமாகாளி|பொதிகுளம்|மணமகள் அத்தை–மாமா\nbride-periyappa|relatives-bride|திரு.S.தங்கராஜ்–சுந்தரி|பொதிகுளம்|மணமகள் பெரியப்பா–சித்தப்பாமார்கள்\nbride-periyappa|relatives-bride|திரு.M.ஆறுமுகம்–இராமுத்தாய்|பொதிகுளம்|மணமகள் பெரியப்பா–சித்தப்பாமார்கள்\nbride-periyappa|relatives-bride|திரு.S.சந்திரன்–பஞ்சாட்சரம்|மதுரை|மணமகள் பெரியப்பா–சித்தப்பாமார்கள்\nbride-periyappa|relatives-bride|திரு.K.பூமிநாதன் B.Com.,–குமுதா (DTC.,)|மதுரை|மணமகள் பெரியப்பா–சித்தப்பாமார்கள்\nbride-anna|relatives-bride|திரு.T.இராஜாமுனியசாமி M.Com.,–அனிதா D.T.Ed.,B.Lit.,|பொதிகுளம்|மணமகள் அண்ணன்–அண்ணிமார்கள்\nbride-anna|relatives-bride|திரு.T.சாந்தகுமார் B.Com.,–வனிதா D.T.Ed.,|பொதிகுளம்|மணமகள் அண்ணன்–அண்ணிமார்கள்\nbride-anna|relatives-bride|திரு.S.சந்திரசேகரன் B.Tech.,–சங்கீதா M.Sc., B.Ed.,|பருத்திகுளம்|மணமகள் அண்ணன்–அண்ணிமார்கள்\nbride-anna|relatives-bride|திரு.A.கோட்டைசாமி–பரமேஸ்வரி|வீரபாண்டி|மணமகள் அண்ணன்–அண்ணிமார்கள்\nbride-anna|relatives-bride|திரு.A.தனபாலன் DCE.,–சுகன்யா B.Sc.,|வீரபாண்டி|மணமகள் அண்ணன்–அண்ணிமார்கள்\nbride-anna|relatives-bride|திரு.C.ஜெகதீஸ்வரன் B.Com.,–அனுசியா|மதுரை|மணமகள் அண்ணன்–அண்ணிமார்கள்\nbride-akka|relatives-bride|திரு.S.கோட்டைச்சாமி–வளர்மதி|மலேசியா (இருப்பு) மதுரை|மணமகள் அக்கா–மச்சான்மார்கள்\nbride-akka|relatives-bride|திரு.C.செந்தாமரைகண்ணன் B.E.,–வாசுகி D.TEd., M.A., B.Ed.,M.Phil.,|மதுரை|மணமகள் அக்கா–மச்சான்மார்கள்\nbride-akka|relatives-bride|திரு.R.தினேஷ் E.M.W., DCE.,–பெப்சி B.Com., (CA)|மதுரை|மணமகள் அக்கா–மச்சான்மார்கள்\nbride-akka|relatives-bride|திரு.S.மனோஜ்குமார் D.M.E.,–சபினா B.Com.,|மதுரை|மணமகள் அக்கா–மச்சான்மார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திரு.கருப்பணன்–அழகம்மாள்|பொதிகுளம்|மணமகள் பாட்டன்–பாட்டிமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திரு.குப்பன்–வெள்ளைசுவரி|பொதிகுளம்|மணமகள் பாட்டன்–பாட்டிமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திரு.குண்டப்பன்–இராமாயி|பொதிகுளம்|மணமகள் பாட்டன்–பாட்டிமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திரு.வேலு–முனியம்மாள்|பொதிகுளம்|மணமகள் பாட்டன்–பாட்டிமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திரு.ஆறுமுகம்–குப்பம்மாள்|பொதிகுளம்|மணமகள் பாட்டன்–பாட்டிமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திருவாளர்கள்.K.தின்னார்–இராமாயி|பொதிகுளம்|மணமகள் தாத்தா–அப்பத்தாமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திருவாளர்கள்.K.அழகர்–சமுந்திரவள்ளி|பொதிகுளம்|மணமகள் தாத்தா–அப்பத்தாமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திரு.K.இராமையா–ஆறுமுகவள்ளி|பொதிகுளம்|மணமகள் தாத்தா–அப்பத்தாமார்கள்\nbride-grandparents|relatives-bride|திரு.K.கார்மேகம்– வீரமாகாளி|கொல்லங்குளம்|மணமகள் தாத்தா–அப்பத்தாமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திருவாளர்கள்.பெரியகருப்பன்–இருளாயி|பொதிகுளம்|மணமகள் தாத்தா–அப்பத்தாமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திருவாளர்கள்.முனியசாமி–காளியம்மாள்|பொதிகுளம்|மணமகள் தாத்தா–அப்பத்தாமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திருவாளர்கள்.சுத்தப்பெருமாள்–சண்முகம்|பொதிகுளம்|மணமகள் தாத்தா–அப்பத்தாமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திரு.K.சந்திரன்–சிகப்பியம்மாள்|பொதிகுளம்|மணமகள் தாத்தா–அப்பத்தாமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திருவாளர்கள்.மாடசாமி–முனியம்மாள்|பொதிகுளம்|மணமகள் தாத்தா–பாட்டிமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திருவாளர்கள்.ஆறுமுகம்–சண்முகம்|பொதிகுளம்|மணமகள் தாத்தா–பாட்டிமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திருவாளர்கள்.V.மலைச்சாமி–அமிர்தவள்ளி|பொதிகுளம்|மணமகள் தாத்தா–பாட்டிமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திருவாளர்கள்.A.அழகர்–காமாட்சி|பொதிகுளம்|மணமகள் தாத்தா–பாட்டிமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திருவாளர்கள்.A.இராமையா–கிருஷ்ணம்மாள்|பொதிகுளம்|மணமகள் தாத்தா–பாட்டிமார்கள்\nbride-grandparents|relatives-bride|திரு.முனியாண்டி–தெய்வத்திரு.லட்சுமி|பொதிகுளம்|மணமகள் தாத்தா–பாட்டிமார்கள்\nbride-grandparents|relatives-bride|தெய்வத்திரு.P.செந்தூரன்–சீனியம்மாள்|பொதிகுளம்|மணமகள் தாத்தா–பாட்டிமார்கள்\nbride-kids|relatives-bride|S.ஜிவின்||குட்டீஸ்\nbride-host|relatives-bride|திரு.த.கோகுலபெருமாள் Dip. ECE.,–ஆனந்தி B.Com.,|நியூசிலாந்து|வரவேற்பாளர்\nbride-kids|relatives-bride|K.சுமித்||குட்டீஸ்கள்\nbride-kids|relatives-bride|K.சர்பேஸ்||குட்டீஸ்கள்\nbride-kids|relatives-bride|R.சச்சின்||குட்டீஸ்கள்\nbride-kids|relatives-bride|R.மிதுன்||குட்டீஸ்கள்\nbride-kids|relatives-bride|S.சமிந்தா வாசு||குட்டீஸ்கள்\nbride-kids|relatives-bride|S.சாசிகா||குட்டீஸ்கள்\nbride-kids|relatives-bride|K.தர்சன்||குட்டீஸ்கள்\nbride-kids|relatives-bride|K.தன்சிகா||குட்டீஸ்கள்\nbride-kids|relatives-bride|S.நிஷாந்த் சர்மா||குட்டீஸ்கள்\nbride-kids|relatives-bride|S.யோகித்||குட்டீஸ்கள்\nbride-kids|relatives-bride|B.விகாஷ்||குட்டீஸ்கள்\nbride-kids|relatives-bride|C.கவிஷா||குட்டீஸ்கள்\nbride-kids|relatives-bride|C.சஜனேஸ்||குட்டீஸ்கள்\nbride-kids|relatives-bride|P.பிரதா||குட்டீஸ்கள்\nbride-kids|relatives-bride|M.கேஸ்மி||குட்டீஸ்கள்\nbride-kids|relatives-bride|D.தியா||குட்டீஸ்கள்\nbride-kids|relatives-bride|D.ரித்தன் பிரபு||குட்டீஸ்கள்\nbride-kids|relatives-bride|S.செழியன்||குட்டீஸ்கள்\nbride-kids|relatives-bride|D.தயா ஸ்ரீ||குட்டீஸ்கள்\nbride-host|relatives-bride|திரு.M.போஸ் காவல்துறை ஆய்வாளர்(ஓய்வு)–காந்தி|மதுரை|வரவேற்பாளர்";
const V33_DIRECTORY_SEED = V33_DIRECTORY_ROWS.split("\n").filter(Boolean).map((line, i) => {
  const [group, category, nameTa, locationTa, roleTa] = line.split("|");
  const groupLabels = {
    "groom-brothers":"groom-brothers", "groom-mama":"groom-mama", "groom-mama-athai":"groom-mama-athai",
    "groom-periyappa":"groom-periyappa", "groom-grandparents":"groom-grandparents", "groom-anna-anni":"groom-anna-anni",
    "groom-sisters":"groom-sisters-samayars", "bride-aunt":"bride-aunt-uncle", "bride-periyappa":"bride-periyappa-periyamma",
    "bride-anna":"bride-anna-anni", "bride-akka":"machan-akka", "bride-grandparents":"bride-grandparents",
    "bride-kids":"bride-kids", "bride-host":"bride-host"
  };
  const kinship = groupLabels[group] || "other";
  const loc = locationTa || "";
  return { id: `v33-${group}-${i+1}`, name: nameTa, nameTa, nameEn: nameTa, category, kinship, role: roleTa, roleTa, roleEn: roleTa, kids:"", kidsTa:"", kidsEn:"", location:loc, locationTa:loc, locationEn:loc, photo:"", note:"", noteTa:"", noteEn:"" };
});

/* Load Data from LocalStorage */
let siteData;
try {
  const stored = localStorage.getItem("maduraiWeddingSiteData_v3");
  siteData = stored ? { ...DEFAULT_DATA, ...JSON.parse(stored) } : { ...DEFAULT_DATA };
  if (siteData.date === "2026-11-22T06:30") siteData.date = "2026-11-22T06:15"; // migrate the previous default countdown to Muhurtham start
  // Ensure array properties exist
  if (!Array.isArray(siteData.events)) siteData.events = DEFAULT_DATA.events;
  siteData.events = siteData.events.map(ev => ({ ...(DEFAULT_DATA.events.find(seed => seed.id === ev.id) || {}), ...ev }));
  if (!Array.isArray(siteData.album)) siteData.album = DEFAULT_DATA.album;
  siteData.album = siteData.album.map(item => {
    const seed = DEFAULT_DATA.album.find(candidate => candidate.src === item.src);
    const merged = { ...(seed || {}), ...item };
    [["caption", "captionTa", "captionEn"], ["date", "dateTa", "dateEn"]].forEach(([base, taKey, enKey]) => {
      if (!item[taKey]) merged[taKey] = seed && item[base] === seed[base] ? (seed[taKey] || item[base] || "") : (item[base] || "");
      if (!item[enKey]) merged[enKey] = item[base] || seed?.[enKey] || "";
    });
    return merged;
  });
  if (!Array.isArray(siteData.persons)) siteData.persons = DEFAULT_DATA.persons;
  if (!Array.isArray(siteData.wishes)) siteData.wishes = DEFAULT_DATA.wishes;
  if (!Array.isArray(siteData.rsvps)) siteData.rsvps = [];
  // Carry bilingual defaults into older saved records while preserving custom edits.
  const savedPersonSeeds = new Map(DEFAULT_DATA.persons.map(person => [person.id, person]));
  const localizedFields = [
    ["name", "nameTa", "nameEn"], ["role", "roleTa", "roleEn"],
    ["kids", "kidsTa", "kidsEn"], ["location", "locationTa", "locationEn"],
    ["note", "noteTa", "noteEn"]
  ];
  siteData.persons = siteData.persons.map(person => {
    const seed = savedPersonSeeds.get(person.id);
    const merged = { ...(seed || {}), ...person };
    localizedFields.forEach(([base, taKey, enKey]) => {
      const baseValue = String(person[base] ?? seed?.[base] ?? "");
      if (!person[taKey]) merged[taKey] = seed && baseValue === String(seed[base] ?? "") && seed[taKey] ? seed[taKey] : baseValue;
      if (!person[enKey]) merged[enKey] = baseValue || String(seed?.[enKey] ?? "");
    });
    return merged;
  });
  // Add the newly supplied groom-side directory records to existing local data exactly once.
  const existingPersonIds = new Set(siteData.persons.map(p => p.id));
  GROOM_FAMILY_DIRECTORY_SEED.forEach(person => { if (!existingPersonIds.has(person.id)) siteData.persons.push({ ...person }); });
  BRIDE_FAMILY_DIRECTORY_SEED.forEach(person => { if (!existingPersonIds.has(person.id)) siteData.persons.push({ ...person }); });
  // V29 data cleanup: remove the specifically excluded bride-side entry, and move the four named couples into Akka & Machan.
  siteData.persons = siteData.persons.filter(person => {
    const names = `${person.name || ""} ${person.nameTa || ""} ${person.nameEn || ""}`;
    return person.id !== "bride-aunt-uncle-01" && !/K\.?\s*Rajendran|இராசேந்திரன்\s*[–-]\s*வீரமணாளி|Veeramanali/i.test(names);
  });
  const akkaMachanIds = new Set(["bride-athan-01", "bride-athan-02", "bride-athan-03", "bride-athan-04"]);
  siteData.persons.forEach(person => {
    if (!akkaMachanIds.has(person.id)) return;
    person.kinship = "machan-akka";
    person.role = "Bride's Akka & Machan family";
    person.roleEn = "Bride's Akka & Machan family";
    person.roleTa = "மணமகள் அக்கா & மச்சான் குடும்பம்";
  });
  // One-time V33 replacement: retain the four immediate-family records, replace all older extended-relative entries with the newly supplied Tamil invitation directory.
  if (localStorage.getItem("thirumoorthiV33DirectoryMigration") !== "1") {
    const immediate = siteData.persons.filter(person => ["p1","p2","p3","p4"].includes(person.id)).map(person => person.id === "p4" ? { ...person, name:"S. Suresh & Valli", nameTa:"S. சுரேஷ் – வள்ளி", nameEn:"S. Suresh & Valli", role:"Groom's Parents", roleTa:"மணமகனின் பெற்றோர்", roleEn:"Groom's Parents", kids:"S. Siva Shankar (Groom)", kidsTa:"S. சிவசங்கர் (மணமகன்)", kidsEn:"S. Siva Shankar (Groom)" } : person);
    siteData.persons = [...immediate, ...V33_DIRECTORY_SEED.map(person => ({ ...person }))];
    try { localStorage.setItem("thirumoorthiV33DirectoryMigration", "1"); } catch (e) {}
  }
  // Migrate older saved deity strings so the Vinayagar invocation is visible on both opening and home pages.
  if (!/வெற்றி\s*விநாயகர்/.test(String(siteData.deitiesTa || "")) || !/பொதிகுளம்/.test(String(siteData.deitiesTa || ""))) siteData.deitiesTa = DEFAULT_DATA.deitiesTa;
  if (!/Vetri\s+Vinayagar/i.test(String(siteData.deities || "")) || !/Pothikulam/i.test(String(siteData.deities || ""))) siteData.deities = DEFAULT_DATA.deities;
  const stripMapHelper = value => String(value || "").replace(/\s*\(open the exact venue in Google Maps\)\s*/ig, "").replace(/\s*\(open the venue in Google Maps\)\s*/ig, "").trim();
  ["venue", "address"].forEach(key => { siteData[key] = stripMapHelper(siteData[key]); });
  ["venueTa", "addressTa"].forEach(key => { siteData[key] = String(siteData[key] || DEFAULT_DATA.addressTa).trim(); });
  // One-time V29 migration: standardise all saved venue fields without overriding future admin edits.
  if (localStorage.getItem("thirumoorthiV29VenueMigration") !== "1") {
    siteData.venue = DEFAULT_DATA.venue;
    siteData.address = DEFAULT_DATA.address;
    siteData.venueTa = DEFAULT_DATA.venueTa;
    siteData.addressTa = DEFAULT_DATA.addressTa;
    siteData.events = (siteData.events || DEFAULT_DATA.events).map(ev => ({
      ...ev,
      location: ev.id === "ev3" ? `Main Kalyana Mandapam Stage · ${DEFAULT_DATA.venue}` : DEFAULT_DATA.venue,
      locationTa: ev.id === "ev3" ? `முக்கிய திருமண மேடை · ${DEFAULT_DATA.addressTa}` : DEFAULT_DATA.addressTa
    }));
    try { localStorage.setItem("thirumoorthiV29VenueMigration", "1"); } catch (e) {}
  }
  const immediateKinship = {};
  siteData.persons.forEach(person => { if (immediateKinship[person.id] && (!person.kinship || person.kinship === "auto")) person.kinship = immediateKinship[person.id]; });
  if (siteData.bride === "M. Meenakshi" || siteData.groom === "S. Karthik") {
    ["bride","groom","familyFunction","deities","brideQualification","brideFather","brideMother","brideBrother","businesses","groomQualification","venue","address","map","brideBio","groomBio","patrikaBodyText","persons","whatsapp","brideCoordName","brideCoordPhone","groomCoordName","groomCoordPhone"].forEach(key => { siteData[key] = DEFAULT_DATA[key]; });
  }
} catch(e) {
  siteData = { ...DEFAULT_DATA };
}

function persistSiteData() {
  try {
    localStorage.setItem("maduraiWeddingSiteData_v3", JSON.stringify(siteData));
    const status = document.getElementById("admStatus");
    if (status) {
      status.textContent = "Saved successfully on this device!";
      setTimeout(() => { if (status) status.textContent = ""; }, 4000);
    }
  } catch(e) {
    alert("Storage limit reached. Please remove large images or use Export backup.");
  }
}

/* ==========================================================================
   TAMIL / ENGLISH TRANSLATION DICTIONARY (Section 15E)
   ========================================================================== */
const I18N = {
  ta: {
    brandTitle: "திருமூர்த்தி வீட்டு திருக்கல்யாணம்",
    navHome: "முகப்பு",
    navPanorama: "மதுரை காட்சி",
    navInvitation: "அழைப்பிதழ்",
    navCouple: "மணமக்கள்",
    navKolam: "கோலம்",
    navStory: "காதல் கதை",
    navAlbum: "ஆல்பம்",
    navFamilies: "குடும்பத்தினர்",
    navGuests: "உறவினர்கள்",
    navEvents: "நிகழ்வுகள்",
    navVenue: "மண்டபம்",
    navRsvp: "வருகை",
    navWishes: "வாழ்த்துகள்",
    navThanks: "நன்றியுரை",
    navNotes: "குறிப்புகள்",
    fullPatrikaTitle: "முழுமையான திருமண அழைப்பிதழ்",
    fullPatrikaSub: "தமிழ் மற்றும் ஆங்கிலத்தில் குடும்ப அழைப்பிதழ்.",
    adminLoginLabel: "குடும்ப நிர்வாக உள்நுழைவு",
    autoScrollDock: "தானியங்கு உருள்",
    maxSpeedDock: "அதிகபட்ச வேகம்",
    portalMuhurthamLine: "முகூர்த்தம்: காலை 6:15–7:15 · திருமண விருந்து: காலை 8:00",
    portalNichayatharthamLine: "நிச்சயதார்த்தம்: நவம்பர் 21, மாலை 6:30",
    portalVenueLabel: "திருமண மண்டபம்:",
    portalFamilyNote: "அன்பும் ஆசிகளும் ஒன்றிணையும் திருமூர்த்தி குழுமக் குடும்ப விழாவிற்கு அன்புடன் வரவேற்கிறோம்.",
    heroFamilyNote: "",
    videoCeremonyTitle: "திருமண விழா",
    videoCeremonySubtitle: "M. திரிஷா & சிவசங்கர் · திருமூர்த்தி குழுமக் குடும்ப விழா",
    videoContinueHome: "முகப்புக்குச் செல்லவும் →",
    videoCeremonyHint: "கொண்டாட்டம் தொடங்கும் முன் ஒரு பாரம்பரிய தருணம்.",
    notesQuickTemplates: "விரைவு வார்ப்புருக்கள்:",
    notesMuhurthamTemplate: "+ முகூர்த்தச் சரிபார்ப்பு",
    notesRoomTemplate: "+ அறை ஒதுக்கீடு",
    notesTravelTemplate: "+ பயண விவரங்கள்",
    notesTextareaLabel: "தனிப்பட்ட குறிப்புகள் (இந்தச் சாதனத்தில் மட்டும் சேமிக்கப்படும்)",
    notesSaveBtn: "💾 குறிப்புகளைச் சேமிக்கவும்",
    notesClearBtn: "🗑 அழிக்கவும்",
    notesDeviceStatus: "இந்தச் சாதனத்தில் தானாகச் சேமிக்கப்படும்",
    notesPrivacy: "இந்தக் குறிப்புகள் இந்தச் சாதனத்தின் இந்த உலாவியில் மட்டுமே சேமிக்கப்படும்; மற்ற விருந்தினர்களுடன் பகிரப்படாது.",
    guestPlaceholderName: "உங்கள் முழுப் பெயர்",
    guestPlaceholderSpouse: "துணையின் பெயர்",
    guestFormTitle: "குடும்பத்தினருக்கும் நண்பர்களுக்கும் அன்பான வரவேற்பு",
    guestComplete: "தொடர்ந்து சாவியைப் பயன்படுத்தவும்",
    guestFormName: "உங்கள் பெயர்",
    guestFormSpouse: "துணையின் பெயர் (விருப்பத்தேர்வு)",
    guestFormKids: "குழந்தைகள் (விருப்பத்தேர்வு)",
    guestFormAddChild: "+ குழந்தையைச் சேர்க்கவும்",
    guestFormFamilyToggle: "+ துணைவர் / குழந்தைகள் பெயர்களைச் சேர்க்கவும் (விருப்பத்தேர்வு)",
    guestFormHint: "குடும்பத்தினர் மற்றும் நண்பர்களே, தொடர உங்கள் பெயரை மட்டும் உள்ளிடுங்கள்.",
    downloadInvite: "தனிப்பயன் அழைப்பிதழைப் பதிவிறக்கவும் (PDF)",
    portalInvocation: "ஸ்ரீ வெற்றி விநாயகர் துணை · பொதிகுளம் முத்துமாரியம்மன் · ஊர் காவலன் சாமி",
    portalOpenText: "அழைப்பிதழைத்<br>திறந்திடுக",
    portalOpenSub: "அழைப்பிதழைத் திறக்கவும்",
    skipIntro: "அழைப்பிதழுக்குள் நுழைக ↓",
    enterCelebration: "கொண்டாட்டத்திற்குள் செல்ல உருட்டவும் ↓",
    sacredInvocation: "ஸ்ரீ வெற்றி விநாயகர் துணை · பொதிகுளம் முத்துமாரியம்மன் · ஊர் காவலன் சாமி",
    bannerTag: "திருமூர்த்தி குழுமக் குடும்ப விழா",
    weds: "இணையும் திருநாள்",
    days: "நாட்கள்",
    hours: "மணிகள்",
    minutes: "நிமிடங்கள்",
    seconds: "நொடிகள்",
    liveBroadcast: "நேரலை ஒளிபரப்பு",
    openPatrika: "அழைப்பிதழ்",
    viewSchedule: "நிகழ்ச்சி நிரல்",
    confirmRsvp: "வருகை உறுதி",
    invKicker: "திருமண அழைப்பிதழ் · SACRED PATRIKA",
    invTitle: "சுபமுகூர்த்த அழைப்பிதழ்",
    invSub: "குலதெய்வம், முன்னோர்கள், பெற்றோர்கள் மற்றும் உற்றார் உறவினர்களின் நல்வாழ்த்துகளோடு.",
    patrikaSlokam: "மங்கலம் பொங்க, நலம் பல சூழ,\nஅன்புடன் நல்வாழ்வு மலர வாழ்த்தி வருக!",
    patrikaGreeting: "அன்புடையீர், வணக்கம்.",
    persSalute: "🌸 தங்களை அன்புடன் வரவேற்கிறோம்",
    coupleKicker: "இரு மனம் இணையும் திருநாள்",
    coupleTitle: "மணமகள் & மணமகன்",
    coupleSubtitle: "“பெற்றோர்கள், பெரியோர்கள் மற்றும் இறைவனின் அருளாசியுடன் இணைந்திடும் மங்கள ஜோடி.”",
    brideTag: "மகிழ்ச்சி நாயகி · THE BRIDE",
    groomTag: "மணமகன் · THE GROOM",
    kolamKicker: "மங்கள கோலம் · SACRED THRESHOLD OF HARMONY",
    kolamTitle: "மங்களக் கோல ஆசி",
    kolamSub: "இல்லற வாழ்வு சிறக்க அரிசி மாவில் இடப்பட்ட மங்களக் கோலக் கோடுகள்.",
    kolamBlessing: "“சுப மங்களம் — மணமக்கள் இல்லறம் நன்மணம் வீசிச் சிறக்க நல்வாழ்த்துகள்.”",
    storyKicker: "காதல் மலர்ந்த கதை · SACRED MILESTONES",
    storyTitle: "எங்கள் இனிய காதல் பயணம்",
    storySubtitle: "இரு குடும்பங்களின் ஆசியோடும் பரஸ்பர அன்போடும் மலர்ந்த புனிதமான பயணம்.",
    ms1Title: "வைகை நதிக்கரையில் முதல் சந்திப்பு",
    ms1Desc: "பெரியோர்களின் ஏற்பாட்டில் மதுரை பாரம்பரியப் பண்பாட்டுப் பின்னணியில் நடந்த முதல் உரையாடல், வாழ்நாள் பந்தத்திற்கு வழிவகுத்தது.",
    ms2Title: "மங்கல நிச்சயதார்த்தம்",
    ms2Desc: "தாம்பூலம் மாற்றி, பெரியோர்களின் முன்னிலையில் வேத மந்திரங்கள் முழங்க நடைபெற்ற சுப நிச்சயதார்த்த வைபவம்.",
    ms3Title: "வாழ்நாள் இல்லறத் தொடக்கம்",
    ms3Desc: "15 டிசம்பர் 2026 அன்று மாங்கல்ய தாரணம் செய்து சப்தபதி எடுத்து இல்லறத்தில் இணைகிறோம்.",
    easterEggTitle: "மதுரையின் புனிதச் சின்னங்களைத் தொட்டு அறிக:",
    easterEggSub: "கீழுள்ள சின்னங்களைத் தொட்டு அதன் பாரம்பரிய ஆன்மீக முக்கியத்துவத்தை அறியலாம்:",
    symParrot: "கிளி (Kili)",
    symJasmine: "மல்லி (Malli)",
    symBell: "மணி (Mani)",
    symDiya: "தீபம் (Deepam)",
    albumKicker: "புகைப்பட ஆல்பம் · MEMORIES OF MADURAI",
    albumTitle: "இனிய தருணங்கள் & புகைப்பட ஆல்பம்",
    albumSub: "பக்கவாட்டில் உருட்டி எங்களின் இனிய புகைப்படங்களைப் பார்க்கலாம். பெரிதாகப் பார்க்க படத்தைத் தொடவும்.",
    famKicker: "பெற்றோர்கள் மற்றும் குடும்பத்தினர்",
    famTitle: "எங்கள் அன்புக் குடும்பத்தினர்",
    famSub: "மணமகள்: தந்தை, தாய், சகோதரர். மணமகன்: தந்தை, தாய் மற்றும் சகோதரியின் குடும்பம். மற்ற உறவினர்கள் மற்றும் நண்பர்கள் கீழே உள்ள பட்டியலில் இடம்பெறுவர்.",
    brideFamHeading: "பெண் வீட்டார்",
    groomFamHeading: "மாப்பிள்ளை வீட்டார்",
    peopleKicker: "குடும்ப உறுப்பினர்கள் & நண்பர்கள்",
    peopleTitle: "குடும்ப உறுப்பினர்கள் & நண்பர்கள்",
    peopleSub: "பெயர், உறவு, குழந்தைகள் அல்லது ஊர் மூலம் குடும்ப உறுப்பினர்கள் மற்றும் நண்பர்களைத் தேடலாம்.",
    pillAll: "அனைவரும்",
    pillKids: "குழந்தைகள் உள்ள குடும்பங்கள் 👶",
    pillBrideRel: "பெண் உறவினர்கள்",
    pillGroomRel: "மாப்பிள்ளை உறவினர்கள்",
    pillGroomFrnd: "மணமகன் நண்பர்கள்",
    pillBrideFrnd: "மணமகள் தோழிகள்",
    pillBroFrnd: "சகோதரர் நண்பர்கள்",
    pillColleagues: "பணிபுரிவோர்",
    eventsKicker: "திருமண சடங்குகள் & நேர அட்டவணை",
    eventsTitle: "சுபமுகூர்த்த வைபவங்கள்",
    eventsSub: "வேத மந்திரங்கள் முழங்க நடைபெறும் மங்கள நிகழ்வுகள்.",
    venueKicker: "திருமண மண்டபம் · TRAVEL & DIRECTIONS",
    venueTitle: "திருமண மண்டபம் & வழிகாட்டி",
    venueSub: "உங்கள் தற்போதைய இடத்திலிருந்து மண்டபத்திற்கு நேரடியாக வழிகாட்டுதல் பெறலாம்.",
    rsvpKicker: "வருகை உறுதிப்படுத்துதல் · RSVP",
    rsvpTitle: "தங்கள் வருகையை உறுதி செய்க",
    rsvpSub: "தங்களுக்குச் சிறப்பான வரவேற்பு அளிக்கத் தங்கள் வருகையை அன்புடன் உறுதிசெய்ய வேண்டுகிறோம்.",
    rsvpLabelName: "தங்கள் பெயர் / குடும்பப் பெயர்",
    rsvpLabelAttending: "தாங்கள் வருகை தருகிறீர்களா?",
    rsvpOptYes: "🌸 மகிழ்வுடன் நேரில் கலந்து கொள்கிறோம்",
    rsvpOptNo: "🙏 வாழ்த்துகளுடன் நேரில் வர இயலாமை தெரிவிக்கிறோம்",
    rsvpLabelCount: "மொத்த நபர்களின் எண்ணிக்கை",
    rsvpLabelEvents: "கலந்து கொள்ளும் நிகழ்வுகள்",
    rsvpLabelNote: "குறிப்புகள், உணவு விருப்பம் அல்லது நல்வாழ்த்துகள்",
    rsvpSubmitBtn: "வருகையை உறுதி செய்க",
    rsvpSuccessTitle: "தங்கள் வருகை பதிவானது, மிக்க நன்றி!",
    rsvpSuccessMsg: "தங்களை மதுரையில் இருகரம் கூப்பி வரவேற்கக் காத்திருக்கிறோம்.",
    rsvpDemoNotice: "(இந்தச் சாதனத்தில் சேமிக்கப்பட்டது · Admin Panel மூலம் பதிவிறக்கலாம்)",
    wishesKicker: "வழிகாட்டுதல் & வாழ்த்துகள்",
    wishesTitle: "ஆலோசனை & டிஜிட்டல் வாழ்த்துச் சுவர்",
    wishesSub: "பாரம்பரிய வழிகாட்டுதல்கள் மற்றும் அன்பானவர்களின் நல்வாழ்த்துகள்.",
    etiquetteHeading: "திருமணப் பாரம்பரிய வழிகாட்டுதல்கள்",
    attireTitle: "பாரம்பரியப் பட்டு ஆடை",
    attireDesc: "பெண்கள் பட்டுச் சேலைகளிலும், ஆண்கள் பட்டு வேஷ்டி / குர்தாவிலும் வர அன்புடன் வேண்டுகிறோம்.",
    timeTitle: "முகூர்த்த நேரம்",
    timeDesc: "மாங்கல்ய தாரணம் காலை 6:15 முதல் 7:15 மணி வரை. காலை 6:00 மணிக்குள் மண்டபத்திற்கு வருகை தர வேண்டுகிறோம்.",
    feastTitle: "மதுரைக் கல்யாண விருந்து",
    feastDesc: "வாழை இலையில் அறுசுவை மதுரைக் கல்யாண விருந்து மற்றும் மதுரையின் புகழ்பெற்ற ஜிகர்தண்டா.",
    photoTitle: "புகைப்படம் & வாழ்த்து",
    photoDesc: "மணமக்களுடன் புகைப்படம் எடுக்க பிரத்யேகப் பகுதி அமைக்கப்பட்டுள்ளது.",
    wallHeading: "டிஜிட்டல் வாழ்த்துச் சுவர் & ஆசிகள்",
    postWallBtn: "வாழ்த்தைப் பதிவிடுக",
    thanksBlessing: "வந்தாரை வாழவைக்கும் மதுரை · தங்கள் வருகையே எங்கள் மகிழ்ச்சி",
    thanksTitle: "மனமார்ந்த நன்றிகள்",
    brideCoordTitle: "பெண் வீட்டார் ஒருங்கிணைப்பாளர்",
    groomCoordTitle: "மாப்பிள்ளை வீட்டார் ஒருங்கிணைப்பாளர்",
    returnTop: "தொடக்கத்திற்குத் திரும்புக ↑",
    notesKicker: "தனிப்பட்ட குறிப்புகள் · PERSONAL WEDDING DIARY",
    notesTitle: "தங்கள் திருமணக் குறிப்பேடு",
    notesSub: "பயணத் திட்டம், அறை விவரங்கள் அல்லது நினைவூட்டல்களை இங்கேயே குறித்து வைத்துக் கொள்ளலாம்.",
    dayModeBadge: "✨ இன்று திருமண நன்னாள் ✨",
    dayModeTitle: "அருண்மிகு திருக்கல்யாண வைபவம்",
    dayModeDesc: "மதுரை ராஜா முத்தையா மண்டபத்தில் சுபமுகூர்த்தச் சடங்குகள் இனிதே நடைபெறுகின்றன."
  },
  en: {
    brandTitle: "Thirumoorthi Veettu Thirukalyanam",
    navHome: "Home",
    navPanorama: "Panorama",
    navInvitation: "Invitation",
    navCouple: "Couple",
    navKolam: "Kolam",
    navStory: "Our Story",
    navAlbum: "Album",
    navFamilies: "Families",
    navGuests: "Guests",
    navEvents: "Events",
    navVenue: "Venue",
    navRsvp: "RSVP",
    navWishes: "Wishes",
    navThanks: "Gratitude",
    navNotes: "Notes",
    fullPatrikaTitle: "Complete Wedding Invitation",
    fullPatrikaSub: "The traditional family invitation in Tamil and English.",
    adminLoginLabel: "Family Admin Login",
    autoScrollDock: "Auto Scroll",
    maxSpeedDock: "Max Speed",
    portalMuhurthamLine: "Muhurtham: 6:15–7:15 AM · Wedding feast: 8:00 AM",
    portalNichayatharthamLine: "Nichayathartham: 6:30 PM, 21 November 2026",
    portalVenueLabel: "Venue:",
    portalFamilyNote: "We warmly welcome you to the Thirumoorthi Groups family function, filled with love and blessings.",
    heroFamilyNote: "",
    videoCeremonyTitle: "Wedding Ceremony",
    videoCeremonySubtitle: "M. Thirisha & Siva Shankar · Thirumoorthi Groups Family Function",
    videoContinueHome: "Continue to Home →",
    videoCeremonyHint: "A moment of tradition before the celebration begins.",
    notesQuickTemplates: "Quick templates:",
    notesMuhurthamTemplate: "+ Muhurtham checklist",
    notesRoomTemplate: "+ Room allocation",
    notesTravelTemplate: "+ Travel details",
    notesTextareaLabel: "Personal notes (saved on this device only)",
    notesSaveBtn: "💾 Save Notes",
    notesClearBtn: "🗑 Clear",
    notesDeviceStatus: "Auto-saved on this device",
    notesPrivacy: "These notes are stored only in this browser on this device and are not shared with other guests.",
    guestPlaceholderName: "Your full name",
    guestPlaceholderSpouse: "Spouse name",
    guestFormTitle: "Welcome, Family & Friends",
    guestComplete: "Continue to the royal key",
    guestFormName: "Your name",
    guestFormSpouse: "Spouse name (optional)",
    guestFormKids: "Children (optional)",
    guestFormAddChild: "+ Add child",
    guestFormFamilyToggle: "+ Add spouse / children (optional)",
    guestFormHint: "Family & friends: enter just your own name to continue.",
    downloadInvite: "Download personalised invitation (PDF)",
    portalInvocation: "Sri Vetri Vinayagar Thunai · Pothikulam Muthumari Amman · Oor Kavalan Samy",
    portalOpenText: "Tap to Open<br>Royal Invitation",
    portalOpenSub: "Open the royal invitation",
    skipIntro: "Skip Animation & Enter Website ↓",
    enterCelebration: "Scroll to enter the celebration ↓",
    sacredInvocation: "Sri Vetri Vinayagar Thunai · Pothikulam Muthumari Amman · Oor Kavalan Samy",
    bannerTag: "THIRUMOORTHI GROUPS FAMILY FUNCTION",
    weds: "weds",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    liveBroadcast: "Live Broadcast Channels",
    openPatrika: "Sacred Invitation",
    viewSchedule: "Events Schedule",
    confirmRsvp: "RSVP Attendance",
    invKicker: "Auspicious Invitation · SACRED PATRIKA",
    invTitle: "Sacred Wedding Invitation",
    invSub: "With the divine blessings of family deities, grandparents, parents, and loving relatives.",
    patrikaSlokam: "With auspiciousness flourishing and all goodness surrounding,\nWe welcome you with love to celebrate this sacred union!",
    patrikaGreeting: "Respected Family, Elders, and Friends,",
    persSalute: "🌸 Warmly Welcoming",
    coupleKicker: "Divine Union of Two Souls",
    coupleTitle: "The Bride & The Groom",
    coupleSubtitle: "“Two souls united with the sacred blessings of elders and deities in the temple town of Madurai.”",
    brideTag: "THE BRIDE",
    groomTag: "THE GROOM",
    kolamKicker: "SACRED KOLAM · THRESHOLD OF HARMONY",
    kolamTitle: "Sacred Kolam Blessing",
    kolamSub: "Handcrafted fine rice-flour strokes welcoming divine prosperity, health, and harmony.",
    kolamBlessing: "“Subha Mangalam — May the fragrant jasmine path guide our steps toward timeless togetherness.”",
    storyKicker: "SACRED MILESTONES · OUR JOURNEY",
    storyTitle: "Our Love Story & Journey",
    storySubtitle: "A beautiful tapestry woven with family blessings, shared conversations, and heartfelt promises.",
    ms1Title: "A Meeting by the Vaigai",
    ms1Desc: "Introduced through our loving families, our first conversation began amidst the serene river breeze and heritage towers of Madurai.",
    ms2Title: "The Sacred Nischayathartham",
    ms2Desc: "With the sacred exchange of Thamboolam, sweet delicacies, and Vedic chants, both families officially sealed the alliance.",
    ms3Title: "Stepping into Eternity",
    ms3Desc: "On 22 November 2026, we take the sacred Sapthapadi vows and embark on a lifelong journey as one.",
    easterEggTitle: "Discover Madurai Heritage Symbols:",
    easterEggSub: "Touch any sacred symbol below to reveal its ancient cultural significance:",
    symParrot: "Kili (Parrot)",
    symJasmine: "Malli (Jasmine)",
    symBell: "Mani (Temple Bell)",
    symDiya: "Deepam (Diya)",
    albumKicker: "MEMORIES OF MADURAI · PHOTO ALBUM",
    albumTitle: "Wedding Moments & Album",
    albumSub: "Swipe or scroll horizontally through our panoramic photo journey. Click any photo for full lightbox view.",
    famKicker: "Parents & Extended Family",
    famTitle: "Our Beloved Families",
    famSub: "Bride: father, mother and brother. Groom: father, mother and sister’s family. Other relatives and friends are listed below.",
    brideFamHeading: "The Bride's Family",
    groomFamHeading: "The Groom's Family",
    peopleKicker: "FAMILY MEMBERS & FRIENDS",
    peopleTitle: "Family Members & Friends",
    peopleSub: "Browse family members and friends by name, relationship, children, or location.",
    pillAll: "All Guests",
    pillKids: "Families with Kids 👶",
    pillBrideRel: "Bride's Relatives",
    pillGroomRel: "Groom's Relatives",
    pillGroomFrnd: "Groom's Friends",
    pillBrideFrnd: "Bride's Friends",
    pillBroFrnd: "Brothers' Friends",
    pillColleagues: "Work Colleagues",
    eventsKicker: "RITUALS & CEREMONY SCHEDULE",
    eventsTitle: "Auspicious Events Timeline",
    eventsSub: "Sacred Vedic rituals and traditional festivities celebrating the divine wedding union.",
    venueKicker: "VENUE DETAILS · TRAVEL & ROUTE",
    venueTitle: "Venue & Route Planner",
    venueSub: "Touch below to get instant driving directions from your exact present location.",
    rsvpKicker: "CONFIRM ATTENDANCE · RSVP",
    rsvpTitle: "Will You Join Our Celebration?",
    rsvpSub: "Kindly confirm your attendance so our families can prepare comfortable arrangements for you and your family.",
    rsvpLabelName: "Guest / Family Name",
    rsvpLabelAttending: "Will You Attend?",
    rsvpOptYes: "🌸 Joyfully Accepts with Blessings",
    rsvpOptNo: "🙏 Regretfully Declining with Warm Wishes",
    rsvpLabelCount: "Total Number of Guests Attending",
    rsvpLabelEvents: "Events You Will Attend",
    rsvpLabelNote: "Blessings, Song Requests or Travel Notes",
    rsvpSubmitBtn: "Confirm My RSVP",
    rsvpSuccessTitle: "RSVP Recorded with Gratitude!",
    rsvpSuccessMsg: "Thank you! We eagerly look forward to welcoming you with folded hands in Madurai.",
    rsvpDemoNotice: "(Saved locally on this device · Exportable via Admin Panel)",
    wishesKicker: "GUIDELINES & CELEBRATION WISHES",
    wishesTitle: "Suggestions & Digital Blessing Wall",
    wishesSub: "Traditional etiquette for attendees and cherished blessings shared by relatives and friends.",
    etiquetteHeading: "Wedding Traditions & Tips",
    attireTitle: "Traditional Attire Suggested",
    attireDesc: "We warmly encourage traditional South Indian attire — vibrant Silk Pattu Sarees for ladies, and silk Dhotis (Veshti) / Kurta for gentlemen.",
    timeTitle: "Auspicious Timings",
    timeDesc: "The sacred Mangalya Dharanam takes place between 6:15 AM and 7:15 AM. Kindly be seated in the mandapam by 6:00 AM.",
    feastTitle: "Grand Madurai Kalyana Virundhu",
    feastDesc: "Authentic Madurai traditional feast served on fresh plantain leaves with Madurai Jigarthanda and traditional sweet delicacies.",
    photoTitle: "Photography & Blessings",
    photoDesc: "Share your favourite moments with #ThirishaWedsSivaShankar and the Thirumoorthi Groups family.",
    wallHeading: "Digital Blessing Wall & Wishes",
    postWallBtn: "Post on Blessing Wall",
    thanksBlessing: "Madurai that sustains all who arrive · Your presence is our joy",
    thanksTitle: "With Heartfelt Gratitude",
    brideCoordTitle: "The Bride's Family Coordinator",
    groomCoordTitle: "The Groom's Family Coordinator",
    returnTop: "Return to Beginning ↑",
    notesKicker: "PERSONAL WEDDING DIARY",
    notesTitle: "Your Wedding Notes",
    notesSub: "A private notebook on this device to keep travel reminders, muhurtham times, or coordination tasks.",
    dayModeBadge: "✨ TODAY WE CELEBRATE ✨",
    dayModeTitle: "Arulmigu Thirukalyana Vaibhavam",
    dayModeDesc: "The sacred Muhurtham rituals are underway at MATD Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti, Madurai."
  }
};

let currentLang = siteData.lang || "ta";

function applyTranslations(lang) {
  document.querySelectorAll(".full-patrika-ta").forEach(el => { el.hidden = lang !== "ta"; });
  document.querySelectorAll(".full-patrika-en").forEach(el => { el.hidden = lang !== "en"; });
  const welcomeEn = document.querySelector(".welcome-groups-en");
  const welcomeTa = document.querySelector(".welcome-groups-ta");
  if (welcomeEn) welcomeEn.hidden = lang === "ta";
  if (welcomeTa) welcomeTa.hidden = lang !== "ta";
  currentLang = lang === "en" ? "en" : "ta";
  siteData.lang = currentLang;
  document.documentElement.lang = currentLang;
  const dict = I18N[currentLang] || I18N.ta;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { const key=el.dataset.i18nPlaceholder; if(dict[key]) el.placeholder=dict[key]; });
  const search = document.getElementById("guestSearchInput");
  if (search) search.placeholder = lang === "ta" ? "பெயர், ஊர், உறவு அல்லது குழந்தைகள் மூலம் தேடவும்..." : "Search by name, location, relation, or children...";
  if (typeof renderPeopleList === "function") renderPeopleList(activeFilter || "all", search?.value || "");
  if (typeof applyPersonalisedGuest === "function") applyPersonalisedGuest();

  const langText = document.getElementById("langText");
  // Show the currently active language, matching the content currently on screen.
  if (langText) langText.textContent = currentLang === "ta" ? "English" : "தமிழ்";
  const langButton = document.getElementById("langToggleBtn");
  if (langButton) {
    langButton.title = currentLang === "ta" ? "தற்போதைய மொழி: தமிழ் · Englishக்கு மாற்றவும்" : "Current language: English · Switch to Tamil";
    langButton.setAttribute("aria-label", langButton.title);
  }
  document.title = currentLang === "ta" ? "திருமூர்த்தி வீட்டு திருக்கல்யாணம் | M. திரிஷா & சிவசங்கர்" : "Thirumoorthi Veettu Thirukalyanam | M. Thirisha & Siva Shankar";
  const musicHeading = document.getElementById("musicPickerHeading");
  if (musicHeading) musicHeading.textContent = lang === "ta" ? "திருமணப் பாடல்கள்" : "Wedding songs";
  const musicNote = document.getElementById("musicPickerNote");
  if (musicNote) musicNote.textContent = lang === "ta" ? "பாடலைத் தேர்ந்தெடுத்தால் இங்கே இயக்கப்படும்." : "Choose a song to play it here.";
  document.querySelectorAll(".music-track-option").forEach((btn, i) => { btn.textContent = lang === "ta" ? `♫ திருமணப் பாடல் ${i + 1}` : `♫ Wedding song ${i + 1}`; });
  const musicText = document.getElementById("musicText");
  if (musicText && window.matchMedia("(max-width: 700px)").matches) {
    musicText.textContent = lang === "ta" ? "இசை" : "Music";
  }
  const dockLabels = {
    "Home": ["முகப்பு", "Home"], "Invitation": ["அழைப்பிதழ்", "Invitation"],
    "Couple": ["மணமக்கள்", "Couple"], "Album": ["புகைப்படங்கள்", "Album"],
    "Events": ["நிகழ்வுகள்", "Events"], "Venue": ["மண்டபம்", "Venue"],
    "Top": ["மேலே", "Top"], "Notes": ["குறிப்புகள்", "Notes"]
  };
  document.querySelectorAll("#smartFloatingDock .dock-item").forEach(item => {
    const key = item.getAttribute("title");
    const label = dockLabels[key];
    const small = item.querySelector("small");
    if (label && small) small.textContent = label[currentLang === "ta" ? 0 : 1];
  });
  if (typeof updateAutoScrollControls === "function") updateAutoScrollControls();
}

document.getElementById("langToggleBtn")?.addEventListener("click", () => {
  const nextLang = currentLang === "ta" ? "en" : "ta";
  applyTranslations(nextLang);
  // Re-render all dynamic content (events, families, guests, names and notes)
  // after changing language, so the button label and page language never diverge.
  renderSiteContent();
  persistSiteData();
});

/* ==========================================================================
   DOM UTILITIES & HELPERS
   ========================================================================== */
function esc(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function formatDate(isoStr) {
  if (!isoStr) return "Sunday, 22 November 2026 · 6:30 AM";
  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return isoStr;
  return d.toLocaleDateString((typeof currentLang !== "undefined" && currentLang === "ta") ? "ta-IN" : "en-IN", {
    weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "2-digit"
  });
}

/* ==========================================================================
   RENDER SITE CONTENT
   ========================================================================== */
function localizedValue(record, field) {
  if (!record) return "";
  const localKey = `${field}${currentLang === "ta" ? "Ta" : "En"}`;
  return String(record[localKey] ?? record[field] ?? "");
}
function renderSiteContent() {
  // Hero section
  const heroBride = document.getElementById("heroBride");
  const heroGroom = document.getElementById("heroGroom");
  const heroDate = document.getElementById("heroDateDisplay");
  const heroVenue = document.getElementById("heroVenueSub");
  if (heroBride) heroBride.textContent = siteData.bride;
  if (heroGroom) heroGroom.textContent = siteData.groom;
  const portalWeddingHeading = document.getElementById("portalWeddingHeading");
  if (portalWeddingHeading) portalWeddingHeading.textContent = `${siteData.bride} & ${siteData.groom}`;
  if (heroDate) heroDate.textContent = formatDate(siteData.date).toUpperCase() + (currentLang === "ta" ? " · மதுரை" : " · MADURAI");
  const portalDateTag = document.getElementById("portalDateTag");
  if (portalDateTag) portalDateTag.textContent = `${formatDate(siteData.date)} · ${currentLang === "ta" ? "மதுரை" : "Madurai"}`;
  if (heroVenue) heroVenue.textContent = currentLang === "ta" ? (siteData.addressTa || siteData.venueTa || "MATD திருமூர்த்தி மஹால், ஆண்டிப்பட்டி பங்களா, டி. வாடிப்பட்டி, மதுரை") : (siteData.address || siteData.venue || "MATD Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti, Madurai");
  const functionTitle = document.getElementById("familyFunctionTitle");
  if (functionTitle) { functionTitle.textContent = currentLang === "ta" ? (siteData.familyFunctionTa || "திருமூர்த்தி குழுமக் குடும்ப விழா") : (siteData.familyFunction || "THIRUMOORTHI GROUPS FAMILY FUNCTION"); functionTitle.classList.add("family-function-title"); }
  const deityLine = document.getElementById("familyDeityLine");
  if (deityLine) deityLine.textContent = currentLang === "ta" ? (siteData.deitiesTa || "ஸ்ரீ வெற்றி விநாயகர் துணை · பொதிகுளம் முத்துமாரியம்மன் · ஊர் காவலன் சாமி") : (siteData.deities || "Sri Vetri Vinayagar Thunai, Pothikulam Muthumari Amman and Oor Kavalan Samy");
  const portalDeityInvocation = document.getElementById("portalDeityInvocation");
  if (portalDeityInvocation) portalDeityInvocation.textContent = currentLang === "ta" ? (siteData.deitiesTa || "ஸ்ரீ வெற்றி விநாயகர் துணை · பொதிகுளம் முத்துமாரியம்மன் · ஊர் காவலன் சாமி") : (siteData.deities || "Sri Vetri Vinayagar Thunai, Pothikulam Muthumari Amman and Oor Kavalan Samy");
  const portalFunctionTitle = document.getElementById("portalFunctionTitle");
  if (portalFunctionTitle) portalFunctionTitle.textContent = currentLang === "ta" ? (siteData.familyFunctionTa || "திருமூர்த்தி குழுமக் குடும்ப விழா") : (siteData.familyFunction || "THIRUMOORTHI GROUPS FAMILY FUNCTION");
  const portalVenueValue = document.getElementById("portalVenueValue");
  if (portalVenueValue) portalVenueValue.textContent = currentLang === "ta" ? (siteData.venueTa || siteData.addressTa || "MATD திருமூர்த்தி மஹால், ஆண்டிப்பட்டி பங்களா, டி. வாடிப்பட்டி, மதுரை") : (siteData.venue || siteData.address || "MATD Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti, Madurai");
  const brideQualification = document.getElementById("brideQualification");
  if (brideQualification) brideQualification.textContent = currentLang === "ta" ? (siteData.brideQualificationTa || siteData.brideQualification || "") : (siteData.brideQualification || "");
  const groomQualification = document.getElementById("groomQualification");
  if (groomQualification) groomQualification.textContent = siteData.groomQualification || "";
  const familyBusinessLine = document.getElementById("familyBusinessLine");
  if (familyBusinessLine) familyBusinessLine.textContent = currentLang === "ta" ? (siteData.businessesTa || siteData.businesses || "") : (siteData.businesses || "");
  const brideParentsLine = document.getElementById("brideParentsLine");
  if (brideParentsLine) brideParentsLine.textContent = currentLang === "ta" ? `${siteData.brideFatherTa || siteData.brideFather || ""} · ${siteData.brideMotherTa || siteData.brideMother || ""}` : `${siteData.brideFather || ""} · ${siteData.brideMother || ""}`;
  const brideBrotherLine = document.getElementById("brideBrotherLine");
  if (brideBrotherLine) brideBrotherLine.textContent = currentLang === "ta" ? (siteData.brideBrotherTa || siteData.brideBrother || "") : (siteData.brideBrother || "");

  // Portal revealed text
  const revCouple = document.getElementById("revealedCoupleTitle");
  const revDate = document.getElementById("revealedDateBadge");
  if (revCouple) revCouple.textContent = `${siteData.bride} & ${siteData.groom}`;
  if (revDate) revDate.textContent = `${formatDate(siteData.date)} · ${currentLang === "ta" ? "மதுரை" : "Madurai"}`;

  // Couple section
  const brideCardName = document.getElementById("brideCardName");
  const groomCardName = document.getElementById("groomCardName");
  const brideBioText = document.getElementById("brideBioText");
  const groomBioText = document.getElementById("groomBioText");
  if (brideCardName) brideCardName.textContent = siteData.bride;
  if (groomCardName) groomCardName.textContent = siteData.groom;
  const brideCaption = document.getElementById("bridePortraitCaption");
  const groomCaption = document.getElementById("groomPortraitCaption");
  if (brideCaption) brideCaption.textContent = `${siteData.bride} · ${currentLang === "ta" ? "மணமகள்" : "The Bride"}`;
  if (groomCaption) groomCaption.textContent = `${siteData.groom} · ${currentLang === "ta" ? "மணமகன்" : "The Groom"}`;
  if (brideBioText) brideBioText.textContent = currentLang === "ta" ? (siteData.brideBioTa || siteData.brideBio) : siteData.brideBio;
  if (groomBioText) groomBioText.textContent = currentLang === "ta" ? (siteData.groomBioTa || siteData.groomBio) : siteData.groomBio;

  // Invitation Patrika
  const patrikaBride = document.getElementById("patrikaBrideName");
  const patrikaGroom = document.getElementById("patrikaGroomName");
  const patrikaMuhurtham = document.getElementById("patrikaMuhurthamTime");
  const patrikaBody = document.getElementById("patrikaBodyText");
  if (patrikaBride) patrikaBride.textContent = siteData.bride;
  if (patrikaGroom) patrikaGroom.textContent = siteData.groom;
  if (patrikaMuhurtham) patrikaMuhurtham.textContent = (currentLang === "ta" ? "முகூர்த்தம்: " : "Muhurtham: ") + formatDate(siteData.date);
  if (patrikaBody && siteData.patrikaBodyText) patrikaBody.textContent = currentLang === "ta" ? (siteData.patrikaBodyTextTa || siteData.patrikaBodyText) : siteData.patrikaBodyText;

  // Venue section
  const venueTitle = document.getElementById("venueTitle");
  const venueAddress = document.getElementById("venueFullAddress");
  const venueDate = document.getElementById("venueDateText");
  const mapLink = document.getElementById("googleMapLink");
  const busLink = document.getElementById("busRouteLink");
  const trainLink = document.getElementById("trainRouteLink");
  if (venueTitle) venueTitle.textContent = currentLang === "ta" ? (siteData.venueTa || "MATD திருமூர்த்தி மஹால், ஆண்டிப்பட்டி பங்களா, டி. வாடிப்பட்டி, மதுரை") : siteData.venue;
  if (venueAddress) venueAddress.textContent = currentLang === "ta" ? (siteData.addressTa || siteData.address) : siteData.address;
  if (venueDate) venueDate.textContent = formatDate(siteData.date);
  if (mapLink) mapLink.href = siteData.map || "https://maps.google.com/?q=Madurai";
  if (busLink) busLink.href = siteData.bus || "https://www.google.com/search?q=buses+to+Madurai";
  if (trainLink) trainLink.href = siteData.train || "https://www.google.com/search?q=trains+to+Madurai+Junction";

  // Coordinators
  const brideCoordName = document.getElementById("brideCoordName");
  const groomCoordName = document.getElementById("groomCoordName");
  if (brideCoordName) brideCoordName.textContent = siteData.brideCoordName || "Bride Family";
  if (groomCoordName) groomCoordName.textContent = siteData.groomCoordName || "Groom Family";
  {
    const cleanBride = (siteData.brideCoordPhone || "").replace(/\D/g, '');
    const callEl = document.getElementById("brideCoordCall");
    const waEl = document.getElementById("brideCoordWa");
    const links = callEl?.parentElement;
    if (links) links.hidden = !cleanBride;
    if (callEl && cleanBride) callEl.href = "tel:+" + cleanBride;
    if (waEl && cleanBride) waEl.href = "https://wa.me/" + (cleanBride.length === 10 ? "91" + cleanBride : cleanBride);
  }
  {
    const cleanGroom = (siteData.groomCoordPhone || "").replace(/\D/g, '');
    const callEl = document.getElementById("groomCoordCall");
    const waEl = document.getElementById("groomCoordWa");
    const links = callEl?.parentElement;
    if (links) links.hidden = !cleanGroom;
    if (callEl && cleanGroom) callEl.href = "tel:+" + cleanGroom;
    if (waEl && cleanGroom) waEl.href = "https://wa.me/" + (cleanGroom.length === 10 ? "91" + cleanGroom : cleanGroom);
  }

  // Check Wedding Day Mode (Section 14)
  updateWeddingDayMode();

  // Render Subcomponents
  renderEvents();
  renderAlbum();
  renderFamilies();
  renderPeopleList("all");
  renderBlessingsWall();
  renderAdminRsvpsList();

  // Apply translations
  applyTranslations(currentLang);
}

/* ==========================================================================
   WEDDING DAY MODE (Section 14)
   ========================================================================== */
function updateWeddingDayMode() {
  const banner = document.getElementById("weddingDayBanner");
  const countdownWrap = document.getElementById("countdownWrapper");
  if (!banner) return;

  const mode = siteData.displayMode || "auto";
  let isToday = false;
  let isAfter = false;

  if (mode === "auto") {
    const eventTime = new Date(siteData.date || "2026-11-22T06:30:00").getTime();
    const now = Date.now();
    const oneDayMs = 24 * 60 * 60 * 1000;
    if (now >= eventTime && now <= eventTime + oneDayMs) {
      isToday = true;
    } else if (now > eventTime + oneDayMs) {
      isAfter = true;
    }
  } else if (mode === "today") {
    isToday = true;
  } else if (mode === "after") {
    isAfter = true;
  }

  if (isToday) {
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }

  if (isAfter && countdownWrap) {
    countdownWrap.innerHTML = `
      <div style="background: rgba(99,18,38,0.85); border: 1px solid var(--gold-glow); padding: 0.8rem 1.6rem; border-radius: 99px; color: #ffefa8; font-weight: 700;">
        🌸 Celebrated with Joy &amp; Divine Blessings! Thank You for Being Part of Our Story.
      </div>
    `;
  }
}

/* ==========================================================================
   PERSONALIZED GUEST INVITATION URL PARAMETER (Section 13)
   ========================================================================== */
function checkPersonalizedUrl() {
  const params = new URLSearchParams(window.location.search);
  const guest = { name: params.get('guest') || params.get('name') || '', spouse: params.get('spouse') || '', children: (params.get('kids') || params.getAll('child').join(',')).split(',').map(v=>v.trim()).filter(Boolean) };
  const nameInput=document.getElementById('inviteeNameInput');
  const spouseInput=document.getElementById('inviteeSpouseInput');
  if(nameInput && guest.name) nameInput.value=guest.name;
  if(spouseInput && guest.spouse) spouseInput.value=guest.spouse;
  if(guest.children.length){
    document.getElementById('optionalHouseholdFields')?.removeAttribute('hidden');
    const toggle=document.getElementById('toggleFamilyFieldsBtn'); if(toggle) toggle.setAttribute('aria-expanded','true');
    guest.children.forEach((child,i)=>{ if(i===0) addChildInput(child); else addChildInput(child); });
  }
  if (guest.name.trim()) applyPersonalisedGuest(guest);
}
function getPersonalisedGuest() {
  const val = id => (document.getElementById(id)?.value || '').trim().slice(0,100);
  const children=[...document.querySelectorAll('#inviteeChildrenList input')].map(el=>el.value.trim().slice(0,100)).filter(Boolean);
  return { name:val('inviteeNameInput'), spouse:val('inviteeSpouseInput'), children };
}
function applyPersonalisedGuest(guest=getPersonalisedGuest()) {
  const nameEntered=Boolean((guest.name||'').trim());
  const badge=document.getElementById('portalGuestBadge'), badgeName=document.getElementById('portalGuestName');
  if(badge && badgeName && nameEntered){badgeName.textContent=guest.name;badge.style.display='inline-flex';}
  else if(badge) badge.style.display='none';
  const box=document.getElementById('personalizedGuestBox'), name=document.getElementById('persGuestName');
  if(box && name && nameEntered){name.textContent=guest.name;box.style.display='block';}
  const line=document.getElementById('persHouseholdLine');
  const household=[guest.spouse,...(guest.children||[])].filter(Boolean);
  if(line){line.textContent=household.length?(currentLang==='ta'?'உடன்: ':'With: ')+household.join(' · '):'';line.hidden=!household.length;}
  const rsvp=document.getElementById('rsvpNameInput'); if(rsvp && nameEntered) rsvp.value=guest.name;
  const stage=document.getElementById('portalDoorsStage'), openBtn=document.getElementById('portalOpenBtn');
  const completed=document.body.classList.contains('guest-details-complete');
  if(stage) stage.classList.toggle('name-entered',completed && nameEntered);
  if(openBtn){openBtn.disabled=!(completed && nameEntered);openBtn.setAttribute('aria-hidden',String(!(completed && nameEntered)));}
}
function addChildInput(value='') {
  const list=document.getElementById('inviteeChildrenList'); if(!list) return;
  if(list.querySelectorAll('input').length>=12) return;
  const row=document.createElement('div'); row.className='invitee-child-row';
  const input=document.createElement('input'); input.type='text'; input.maxLength=100; input.placeholder=currentLang==='ta'?'குழந்தையின் பெயர்':'Child name'; input.setAttribute('aria-label',currentLang==='ta'?'குழந்தையின் பெயர்':'Child name'); input.value=value;
  input.addEventListener('input',()=>applyPersonalisedGuest());
  const remove=document.createElement('button'); remove.type='button'; remove.className='remove-child-name'; remove.textContent='×'; remove.setAttribute('aria-label',currentLang==='ta'?'குழந்தையின் பெயரை நீக்கவும்':'Remove child name');
  remove.addEventListener('click',()=>{row.remove();applyPersonalisedGuest();});
  row.append(input,remove); list.append(row); if(!value) input.focus();
}
['inviteeNameInput','inviteeSpouseInput'].forEach(id=>document.getElementById(id)?.addEventListener('input',()=>applyPersonalisedGuest()));
document.getElementById('toggleFamilyFieldsBtn')?.addEventListener('click',()=>{
  const panel=document.getElementById('optionalHouseholdFields'), btn=document.getElementById('toggleFamilyFieldsBtn');
  if(!panel||!btn)return; const open=panel.hasAttribute('hidden'); panel.toggleAttribute('hidden',!open); btn.setAttribute('aria-expanded',String(open));
  if(open && !panel.querySelector('#inviteeChildrenList input')) addChildInput();
});
document.getElementById('addChildNameBtn')?.addEventListener('click',()=>addChildInput());
document.getElementById('guestPersonaliseForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  startWeddingMusicFromGesture();
  const guest=getPersonalisedGuest();
  const input=document.getElementById('inviteeNameInput');
  if(!guest.name.trim()) { input?.setCustomValidity(currentLang==='ta'?'உங்கள் பெயரை உள்ளிடவும்':'Please enter your name'); input?.reportValidity(); input?.focus(); return; }
  input?.setCustomValidity('');
  applyPersonalisedGuest(guest);
  document.body.classList.add('guest-details-complete');
  const form=document.getElementById('guestPersonaliseForm');
  if(form) { form.classList.add('guest-form-finished'); form.setAttribute('aria-hidden','true'); }
  const stage=document.getElementById('portalDoorsStage'), openBtn=document.getElementById('portalOpenBtn');
  stage?.classList.add('name-entered');
  if(openBtn) { openBtn.disabled=false; openBtn.setAttribute('aria-hidden','false'); openBtn.setAttribute('aria-label',currentLang==='ta'?'கதவைத் திறந்து அழைப்பிதழைக் காண்க':'Use the royal key to open the invitation doors'); }
  openBtn?.focus({preventScroll:true});
});
function createQrSvgDataUrl(value) {
  try {
    if (!window.QRCode) return '';
    const qr = new window.QRCode(-1, (window.QRErrorCorrectLevel && window.QRErrorCorrectLevel.L) || 1);
    qr.addData(String(value || ''));
    qr.make();
    const matrix = qr.modules;
    const count = qr.getModuleCount();
    const quiet = 4;
    const size = count + quiet * 2;
    let path = '';
    for (let row = 0; row < count; row++) {
      for (let col = 0; col < count; col++) {
        if (matrix[row][col]) path += `M${col + quiet} ${row + quiet}h1v1h-1z`;
      }
    }
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges"><rect width="${size}" height="${size}" fill="#fff"/><path d="${path}" fill="#111"/></svg>`;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  } catch (err) {
    console.warn('Could not create invitation QR code:', err);
    return '';
  }
}

function getInvitationWebsiteUrl() {
  const u = new URL(window.location.href);
  u.hash = '';
  u.search = '';
  return u.href;
}

function downloadPersonalisedInvitation() {
  const guest = getPersonalisedGuest(), lang = currentLang, dict = I18N[lang] || I18N.en;
  const safe = esc, bride = siteData.bride || 'M. Thirisha', groom = siteData.groom || 'Siva Shankar';
  const names = [guest.name, guest.spouse, ...(guest.children || [])].filter(Boolean);
  const tamil = lang === 'ta';
  const welcome = tamil ? 'அன்புடன் அழைக்கிறோம்' : 'You are warmly invited';
  const blessing = tamil
    ? 'ஸ்ரீ வெற்றி விநாயகர் துணை, பொதிகுளம் முத்துமாரியம்மன் மற்றும் ஊர் காவலன் சாமி அருளுடனும், பெரியோரின் ஆசிகளுடனும் இந்த இனிய குடும்ப விழாவில் கலந்து கொள்ள அன்புடன் அழைக்கிறோம்.'
    : 'With the blessings of Sri Vetri Vinayagar, Pothikulam Muthumari Amman and Oor Kavalan Samy, we warmly invite you to celebrate with our family.';
  const dateLabel = tamil ? 'திருமண நாள்' : 'Wedding date';
  const venueLabel = tamil ? 'திருமண மண்டபம்' : 'Wedding venue';
  const venue = siteData.venue || 'MATD Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti, Madurai';
  const address = siteData.address || venue;
  const printWindow = window.open('', '_blank', 'width=850,height=900');
  const printBackgroundUrl = new URL('assets/bride-groom-temple.webp', window.location.href).href;
  if (!printWindow) { alert(tamil ? 'அழைப்பிதழைப் பதிவிறக்க பாப்-அப் அனுமதிக்கவும்.' : 'Please allow pop-ups to print or save your invitation.'); return; }
  const familyLine = names.length > 1 ? `<p class="family">${safe(tamil ? 'குடும்பத்தினர்: ' : 'Family: ')}${names.slice(1).map(safe).join(' · ')}</p>` : '';
  // Read the same live links that appear on the website, so the single printable invitation includes them.
  const liveSources = [
    { id: 'liveYt', label: tamil ? 'YouTube நேரலை' : 'YouTube Live' },
    { id: 'liveInsta', label: tamil ? 'Instagram நேரலை' : 'Instagram Live' },
    { id: 'liveZoom', label: tamil ? 'Zoom நேரலை' : 'Zoom Live' }
  ];
  const liveLinks = liveSources.map(item => {
    const el = document.getElementById(item.id);
    const href = el?.href || '';
    if (!href || !/^https?:\/\//i.test(href)) return '';
    return `<a href="${safe(href)}" target="_blank" rel="noopener">${safe(item.label)}</a>`;
  }).filter(Boolean);
  const venueMap = siteData.map || 'https://maps.app.goo.gl/GA7fjzCVVkBG7dwv7';
  const websiteUrl = getInvitationWebsiteUrl();
  const hostLooksLocal = window.location.protocol === 'file:' || /^(localhost|127\.|0\.0\.0\.0|10\.|192\.168\.|172\.(1[6-9]|2[0-9]|3[01])\.)/i.test(window.location.hostname);
  const qrSources = [
    { label: tamil ? 'இணையதளம்' : 'Website', href: websiteUrl },
    { label: tamil ? 'Google Maps' : 'Venue Map', href: venueMap },
    ...liveSources.map(item => ({ label: item.label, href: document.getElementById(item.id)?.href || '' }))
  ].filter(item => /^https?:\/\//i.test(item.href) || item.href === websiteUrl);
  const qrCardsHtml = qrSources.map(item => {
    const qrData = createQrSvgDataUrl(item.href);
    if (!qrData) return '';
    return `<div class="qr-card"><img class="qr-code-img" src="${qrData}" alt="QR code for ${safe(item.label)}"><span>${safe(item.label)}</span></div>`;
  }).filter(Boolean).join('');
  const websiteQrNote = hostLooksLocal ? (tamil ? 'குறிப்பு: விருந்தினர்களுக்குப் பகிர்வதற்கு முன் இணையத்தில் வெளியிட்ட இணையதளத்திலிருந்து அழைப்பிதழை மீண்டும் பதிவிறக்கவும்.' : 'Local preview detected: after publishing the website, download this invitation again so the website QR works for guests.') : (tamil ? 'நேரலை மற்றும் இணையதளத்தை QR குறியீடுகள் மூலம் திறக்கலாம்.' : 'Scan a QR code to open the website, map or live stream.');
  const liveLinksHtml = `<section class="qr-section"><strong>${safe(tamil ? 'QR குறியீடுகள் — இணையதளம், வழி மற்றும் நேரலை' : 'Scan for Website, Venue & Live Streams')}</strong><div class="qr-grid">${qrCardsHtml}</div><small>${safe(websiteQrNote)}</small><div class="live-link-row">${liveLinks.join('')}</div></section>`;
  const ceremonyDate = tamil ? 'ஞாயிறு, 22 நவம்பர் 2026' : 'Sunday, 22 November 2026';
  const timing = tamil ? 'முகூர்த்தம்: காலை 6:15–7:15 · திருமண விருந்து: காலை 8:00' : 'Muhurtham: 6:15–7:15 AM · Wedding feast: 8:00 AM';
  printWindow.document.write(`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${safe(bride)} &amp; ${safe(groom)} Invitation</title><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;600;700&family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet"><style>@page{size:A5 portrait;margin:7mm}*{box-sizing:border-box}body{margin:0;padding:12px;background:#f7ecd7;color:#4a1722;font-family:${tamil?'"Noto Sans Tamil",sans-serif':'"Cormorant Garamond",Georgia,serif'}}.card{position:relative;isolation:isolate;overflow:hidden;min-height:175mm;border:5px double #b8862b;padding:9mm 8mm;text-align:center;background:#fff4df;border-radius:10px;display:flex;flex-direction:column;justify-content:center}.print-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2;opacity:.88}.card:before{content:'';position:absolute;inset:0;background:rgba(255,246,226,.32);z-index:-1}.orn{font-size:20px;color:#b8862b;margin:4px}.title{font-size:25px;line-height:1.25;color:#631226;margin:.35rem 0}.guest{font-size:18px;font-weight:700;margin:8px 0}.family{font-size:13px;margin:4px 0}.blessing{font-size:14px;line-height:1.55;margin:6px 0}.names{font-size:24px;font-weight:700;margin:8px 0;color:#631226}.details{font-size:13px;line-height:1.6}.venue-link{display:block;color:#631226;overflow-wrap:anywhere;margin-top:4px}.qr-section{margin:7px auto 0;padding:5px 5px 4px;border:1px solid rgba(184,134,43,.65);border-radius:8px;background:rgba(255,250,239,.82);width:100%}.qr-section>strong{display:block;color:#631226;font-size:11px;margin-bottom:4px}.qr-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:3px;align-items:start}.qr-card{min-width:0;display:flex;flex-direction:column;align-items:center;gap:2px;color:#4a1722;font-family:Arial,sans-serif;font-size:8px;line-height:1.12;text-align:center;overflow-wrap:anywhere}.qr-code-img{display:block;width:19mm;height:19mm;max-width:100%;object-fit:contain;background:#fff;border:1px solid #fff;image-rendering:pixelated}.qr-card span{display:block;max-width:100%}.qr-section small{display:block;font-size:8px;line-height:1.25;overflow-wrap:anywhere;color:#5a3529;margin-top:4px}.live-link-row{display:flex;gap:4px;justify-content:center;flex-wrap:wrap;margin:4px 0 0}.live-link-row a{display:inline-block;padding:2px 4px;border-radius:999px;background:#6e1428;color:#fff4dc;text-decoration:underline;font-family:Arial,sans-serif;font-size:8px;overflow-wrap:anywhere}@media print{body{padding:0}.card{print-color-adjust:exact;-webkit-print-color-adjust:exact}.qr-section{break-inside:avoid}.qr-code-img{print-color-adjust:exact;-webkit-print-color-adjust:exact}}</style></head><body><main class="card"><img class="print-bg" src="${safe(printBackgroundUrl)}" alt=""><div class="orn">❧ ❖ ❧</div><p>${safe(tamil ? 'திருமூர்த்தி குழுமக் குடும்ப விழா' : 'THIRUMOORTHI GROUPS FAMILY FUNCTION')}</p><h1 class="title">${safe(dict.invTitle || 'Wedding Invitation')}</h1><div class="guest">${safe(welcome)}${guest.name ? '<br>' + safe(guest.name) : ''}</div>${familyLine}<p class="blessing">${safe(blessing)}</p><div class="names">${safe(bride)}<br><small>${safe(dict.weds || 'weds')}</small><br>${safe(groom)}</div><div class="details"><strong>${safe(dateLabel)}:</strong> ${safe(ceremonyDate)}<br><strong>${safe(tamil ? 'நேரம்' : 'Time')}:</strong> ${safe(timing)}<br><strong>${safe(venueLabel)}:</strong> ${safe(venue)}<br>${safe(address)}<a class="venue-link" href="${safe(venueMap)}" target="_blank" rel="noopener">${safe(tamil ? 'Google Maps-ல் வழியைப் பார்க்கவும்' : 'Open venue in Google Maps')}</a></div>${liveLinksHtml}<div class="orn">❧ ❖ ❧</div></main><script>window.addEventListener('load',()=>setTimeout(()=>window.print(),500));<\/script></body></html>`);
  printWindow.document.close();
}
document.getElementById('downloadPersonalInvitationBtn')?.addEventListener('click',downloadPersonalisedInvitation);
// Hero calendar actions: use local wedding time and keep the event file downloadable.
document.getElementById('downloadWeddingIcsBtn')?.addEventListener('click', () => downloadEventIcs('ev1'));
function refreshGoogleCalendarLink() {
  const link = document.getElementById('googleCalendarBtn');
  if (!link) return;
  const start = new Date(siteData.date || '2026-11-22T06:30:00');
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const fmt = d => d.getUTCFullYear() + String(d.getUTCMonth()+1).padStart(2,'0') + String(d.getUTCDate()).padStart(2,'0') + 'T' + String(d.getUTCHours()).padStart(2,'0') + String(d.getUTCMinutes()).padStart(2,'0') + '00Z';
  const title = `${siteData.bride || 'M. Thirisha'} & ${siteData.groom || 'Siva Shankar'} Wedding`;
  const details = 'Sacred wedding ceremony and celebrations';
  const location = `${siteData.venue || 'MATD Thirumoorthi Mahal'}, ${siteData.address || 'Madurai, Tamil Nadu'}`;
  link.href = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(title) + '&dates=' + fmt(start) + '/' + fmt(end) + '&details=' + encodeURIComponent(details) + '&location=' + encodeURIComponent(location);
}
refreshGoogleCalendarLink();
function playTempleBellIfEnabled() {
  if (!document.getElementById('templeBellToggle')?.checked) return;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    const master = ctx.createGain(); master.gain.value = .12; master.connect(ctx.destination);
    [660,880,1320].forEach((freq,i)=>{
      const osc=ctx.createOscillator(), gain=ctx.createGain();
      osc.type='sine'; osc.frequency.value=freq;
      gain.gain.setValueAtTime(.0001,ctx.currentTime+i*.06);
      gain.gain.exponentialRampToValueAtTime(.16,ctx.currentTime+i*.06+.025);
      gain.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+i*.06+1.2);
      osc.connect(gain); gain.connect(master); osc.start(ctx.currentTime+i*.06); osc.stop(ctx.currentTime+i*.06+1.25);
    });
    window.setTimeout(()=>ctx.close().catch(()=>{}),1800);
  } catch(e) { /* Sound is optional and disabled by default. */ }
}
function updateNextCeremonyLine() {
  const el = document.getElementById('nextCeremonyLine');
  if (!el || !Array.isArray(siteData.events) || !siteData.events.length) return;
  const upcoming = siteData.events.find(ev => {
    const match = String(ev.time || '').match(/(\d{1,2}:\d{2})\s*(AM|PM)?/i);
    return match;
  }) || siteData.events[0];
  const time = (String(upcoming.time || '').match(/\d{1,2}:\d{2}\s*(?:AM|PM)?/i) || [])[0] || '6:30 AM';
  el.textContent = (currentLang === 'ta' ? 'அடுத்த நிகழ்ச்சி: ' : 'Next ceremony: ') + localizedValue(upcoming, 'title') + ' · ' + (currentLang === 'ta' ? (upcoming.timeTa || time) : time);
}
updateNextCeremonyLine();



/* ==========================================================================
   EVENTS TIMELINE WITH ADD TO CALENDAR (.ICS) (Section 11)
   ========================================================================== */
function renderEvents() {
  const container = document.getElementById("eventsTimelineList");
  if (!container) return;

  container.innerHTML = siteData.events.map(ev => `
    <div class="event-timeline-item">
      <div class="event-timeline-marker">🪔</div>
      <div class="event-card">
        <div class="event-header-row">
          <span class="event-time-tag">${esc(currentLang === 'ta' ? (ev.timeTa || ev.time) : ev.time)}</span>
          ${(localizedValue(ev, 'dress')) ? `<span style="font-size:0.75rem; color:var(--crimson); font-weight:600;">👘 ${esc(localizedValue(ev, 'dress'))}</span>` : ''}
        </div>
        <h4 class="event-title">${esc(localizedValue(ev, 'title'))}</h4>
        <p class="event-desc">${esc(localizedValue(ev, 'desc'))}</p>
        <div class="event-footer-bar">
          <button type="button" class="template-btn" onclick="downloadEventIcs('${esc(ev.id)}')">
            📅 ${currentLang === 'ta' ? 'நாள்காட்டியில் சேர்க்கவும்' : 'Add to Calendar'}
          </button>
          <a href="${siteData.map || 'https://maps.google.com/?q=Madurai'}" target="_blank" rel="noopener" class="template-btn">
            📍 ${currentLang === 'ta' ? 'வழிகாட்டி' : 'Directions'}
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function toICSDate(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "20261215T010000Z";
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function downloadEventIcs(eventId) {
  const ev = siteData.events.find(e => e.id === eventId) || siteData.events[0];
  const langTitle = localizedValue(ev, "title");
  const langDesc = localizedValue(ev, "desc");
  const venueName = currentLang === "ta" ? (siteData.venueTa || siteData.venue) : siteData.venue;
  const venueAddress = currentLang === "ta" ? (siteData.addressTa || siteData.address) : siteData.address;
  const title = `${langTitle} - ${siteData.bride} & ${siteData.groom} ${currentLang === "ta" ? "திருமணம்" : "Wedding"}`;
  const desc = `${langDesc} \n${currentLang === "ta" ? "இடம்" : "Venue"}: ${venueName}, ${venueAddress}`;
  const loc = `${venueName}, ${venueAddress}`;
  
  // Format ICS
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Madurai Thirukalyanam//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${title}`,
    `DESCRIPTION:${desc}`,
    `LOCATION:${loc}`,
    `DTSTART:${toICSDate(siteData.date || "2026-11-22T06:30")}`,
    `DTEND:${toICSDate(new Date(new Date(siteData.date || "2026-11-22T06:30").getTime() + 60 * 60 * 1000))}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${langTitle.replace(/[^\p{L}\p{N}]+/gu, '_') || 'wedding-event'}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

/* ==========================================================================
   PHOTO ALBUM - 3-PAGE WIDE TRACK & LIGHTBOX (Section 7)
   ========================================================================== */
let activeLightboxIndex = 0;

function getAlbumItems() {
  const familyPhotos = (siteData.persons || []).filter(p => p.photo && p.photo.startsWith('data:image/')).map(p => ({
    src: p.photo,
    caption: p.name || p.nameTa || 'Family portrait',
    captionTa: p.nameTa || p.name || 'குடும்பப் புகைப்படம்',
    captionEn: p.nameEn || p.name || 'Family portrait',
    date: 'Family Portrait', dateTa: 'குடும்பப் புகைப்படம்', dateEn: 'Family Portrait'
  }));
  return [...siteData.album, ...familyPhotos];
}
function renderAlbum() {
  const strip = document.getElementById("albumScrollStrip");
  if (!strip) return;
  const albumItems = getAlbumItems();
  strip.innerHTML = albumItems.map((item, idx) => `
    <div class="album-item-card" onclick="openLightboxByIndex(${idx})" role="button" tabindex="0" aria-label="${currentLang === 'ta' ? 'புகைப்படத்தைப் பார்க்கவும்' : 'View photo'}: ${esc(localizedValue(item, 'caption'))}">
      <div class="album-img-wrapper">
        <img src="${esc(item.src)}" alt="${esc(localizedValue(item, 'caption'))}" loading="lazy">
      </div>
      <div class="album-caption-bar">
        <div class="album-caption-title">${esc(localizedValue(item, 'caption'))}</div>
        ${localizedValue(item, 'date') ? `<small style="font-size:0.75rem; color:var(--gold-dark);">${esc(localizedValue(item, 'date'))}</small>` : ''}
      </div>
    </div>
  `).join('');
}

function openLightboxByIndex(idx) {
  const albumItems = getAlbumItems();
  if (idx < 0) idx = albumItems.length - 1;
  if (idx >= albumItems.length) idx = 0;
  activeLightboxIndex = idx;
  const item = albumItems[idx];
  if (!item) return;

  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");
  if (img) img.src = item.src;
  if (caption) caption.textContent = `${localizedValue(item, 'caption')} (${idx + 1} ${currentLang === 'ta' ? 'இல்' : 'of'} ${getAlbumItems().length})`;
  openModal("lightboxModal");
}

document.getElementById("lightboxPrevBtn")?.addEventListener("click", () => {
  openLightboxByIndex(activeLightboxIndex - 1);
});
document.getElementById("lightboxNextBtn")?.addEventListener("click", () => {
  openLightboxByIndex(activeLightboxIndex + 1);
});

// Update album counter on scroll
const albumWrap = document.getElementById("albumScrollWrap");
albumWrap?.addEventListener("scroll", () => {
  const scrollLeft = albumWrap.scrollLeft;
  const cardWidth = 320;
  const albumCount = getAlbumItems().length;
  const current = Math.min(albumCount, Math.max(1, Math.round(scrollLeft / cardWidth) + 1));
  const badge = document.getElementById("albumCounterBadge");
  if (badge) {
    badge.textContent = `Photo ${String(current).padStart(2, '0')} / ${String(albumCount).padStart(2, '0')}`;
  }
}, { passive: true });

document.getElementById("albumPrevBtn")?.addEventListener("click", () => {
  albumWrap?.scrollBy({ left: -340, behavior: "smooth" });
});
document.getElementById("albumNextBtn")?.addEventListener("click", () => {
  albumWrap?.scrollBy({ left: 340, behavior: "smooth" });
});

/* ==========================================================================
   FAMILIES & RELATIVES WITH KIDS BAR (Section 8 & 10)
   ========================================================================== */
function renderFamilies() {
  const brideGrid = document.getElementById("brideFamilyMembersGrid");
  const groomGrid = document.getElementById("groomFamilyMembersGrid");
  if (!brideGrid || !groomGrid) return;
  const all = Array.isArray(siteData.persons) ? siteData.persons : [];
  const byId = id => all.find(p => p.id === id) || {};
  const groomSister = all.find(p => /திருமணிகண்டன்|Thirumanikandan/i.test(`${p.name||''} ${p.nameTa||''}`)) || {};
  const groomParents = byId('p4');
  const groomFather = byId('groom-father-photo').id ? byId('groom-father-photo') : groomParents;
  const groomMother = byId('groom-mother-photo').id ? byId('groom-mother-photo') : groomParents;
  const photoCard = (titleTa, titleEn, person, nameTa, nameEn, roleTa, roleEn) => {
    const title = currentLang === 'ta' ? titleTa : titleEn;
    const name = currentLang === 'ta' ? (nameTa || person.nameTa || person.name || nameEn) : (nameEn || person.nameEn || person.name || nameTa);
    const role = currentLang === 'ta' ? roleTa : roleEn;
    const src = person.photo || 'assets/portrait-placeholder.webp';
    return `<article class="family-member-card family-photo-card"><img class="family-member-photo" src="${esc(src)}" alt="${esc(name)}" loading="lazy"><div class="family-member-copy"><h4>${esc(name)}</h4><p>${esc(role)}</p><small>${esc(title)}</small></div></article>`;
  };
  const father = byId('bride-father-photo').id ? byId('bride-father-photo') : byId('p1');
  const mother = byId('bride-mother-photo').id ? byId('bride-mother-photo') : byId('p1');
  const brother = byId('p3');
  brideGrid.innerHTML = [
    photoCard('தந்தை','Father',father,'A. மூர்த்தி','A. Moorthi','நிறுவனர் & தலைவர், திருமூர்த்தி குழுமம்','Founder & Chairperson, Thirumoorthi Groups'),
    photoCard('தாய்','Mother',mother,'M. அலமேலு','M. Alamelu','நிறுவனர் & தலைமைச் செயல் அதிகாரி, திருமூர்த்தி குழுமம்','Founder & CEO, Thirumoorthi Groups'),
    photoCard('சகோதரர்','Brother',brother,'M. தீபக்','M. Deepak','B.Tech ECE · எம்பெடெட் பொறியாளர் & குழும மேலாளர்','B.Tech ECE · Embedded Engineer & Groups Manager')
  ].join('');
  const groomCards = [
    photoCard('தந்தை','Father',groomFather,'S. சுரேஷ்','S. Suresh','மணமகனின் தந்தை','Groom’s Father'),
    photoCard('தாய்','Mother',groomMother,'வள்ளி','Valli','மணமகனின் தாய்','Groom’s Mother')
  ];
  groomCards.push(`<article class="family-member-card family-name-only groom-sister-row"><div class="family-member-copy"><h4>${currentLang==='ta'?'திருமணிகண்டன் – சிவசந்தியா':'Thirumanikandan – Sivasandhiya'}</h4><p>${currentLang==='ta'?'மணமகனின் சகோதரி குடும்பம்':'Groom’s sister’s family'}</p><small>M.Pharm. · Aurobindo Pharma Ltd. · Andhra Pradesh</small></div></article>`);
  groomGrid.innerHTML = groomCards.join('');
}

const KINSHIP_CONFIG = [
  { id: "groom-sisters-samayars", ta: "மணமகன் 10 சாமியாரிகள் – சகோதரிகள்", en: "Bridegroom's 10 Samayars – Sisters" },
  { id: "groom-samayars", ta: "மணமகன் சாமியாரிகள்", en: "Bridegroom's Samayars" },
  { id: "groom-elder-brothers", ta: "மணமகன் மனை – அண்ணன்கள்", en: "Bridegroom's Household – Elder Brothers" },
  { id: "groom-parent-special-guests", ta: "மணமகன் பெற்றோர் – சிறப்பு விருந்தினர்கள்", en: "Groom's Parents – Special Guests" },
  { id: "groom-mama", ta: "மணமகன் தாய்மாமன்கள்", en: "Groom's Maternal Uncles" },
  { id: "groom-mama-athai", ta: "மணமகன் மாமா–அத்தைமார்கள்", en: "Groom's Uncles & Aunts" },
  { id: "groom-periyappa", ta: "மணமகன் பெரியப்பா–சித்தப்பாமார்கள்", en: "Groom's Paternal Uncles & Aunts" },
  { id: "groom-grandparents", ta: "மணமகன் தாத்தா–பாட்டிமார்கள்", en: "Groom's Grandparents & Elders" },
  { id: "groom-anna-anni", ta: "மணமகன் அண்ணன்–அண்ணிமார்கள்", en: "Groom's Elder Brothers & Sisters-in-law" },
  { id: "groom-brothers", ta: "மணமகன் சகோதரிகள் குடும்பம்", en: "Groom's Sister & Family" },
  { id: "bride-aunt-uncle", ta: "மணமகள் அத்தை – மாமாமார்கள்", en: "Bride's Aunts & Uncles" },
  { id: "bride-periyappa-periyamma", ta: "மணமகள் பெரியப்பா – பெரியம்மார்கள்", en: "Bride's Periyappa & Periyamma Families" },
  { id: "bride-anna-anni", ta: "மணமகள் அண்ணன் – அண்ணிமார்கள்", en: "Bride's Anna & Anni Families" },
  { id: "bride-grandparents", ta: "மணமகள் தாத்தா–பாட்டிமார்கள்", en: "Bride's Grandparents & Elders" },
  { id: "bride-kids", ta: "குட்டீஸ்", en: "Children" },
  { id: "bride-host", ta: "வரவேற்பாளர்கள்", en: "Hosts & Welcomers" },
  { id: "bride-athan-family", ta: "மணமகள் அத்தான் குடும்பத்தினர்", en: "Bride's Extended Family" },
  { id: "machan-akka", ta: "மச்சான் & அக்கா", en: "Machan & Akka" },
  { id: "anna-anni", ta: "அண்ணன் & அண்ணி", en: "Anna & Anni" },
  { id: "periyappa-periyamma", ta: "பெரியப்பா & பெரியம்மா", en: "Periyappa & Periyamma" },
  { id: "chithappa-chithi", ta: "சித்தப்பா & சித்தி", en: "Chithappa & Chithi" },
  { id: "thatha-patti", ta: "தாத்தா & பாட்டி", en: "Thatha & Patti" },
  { id: "mama-athai", ta: "மாமா & அத்தை", en: "Mama & Athai" },
  { id: "other", ta: "மற்ற உறவினர்கள்", en: "Other relatives" }
];
function inferKinship(person) {
  const explicit = person?.kinship;
  if (explicit && explicit !== "auto" && KINSHIP_CONFIG.some(item => item.id === explicit)) return explicit;
  const value = `${person?.role || ""} ${person?.roleTa || ""} ${person?.name || ""} ${person?.nameTa || ""}`.toLocaleLowerCase();
  if (/machan|மச்சான்|akka|அக்கா/.test(value)) return "machan-akka";
  if (/anna|anni|அண்ணன்|அண்ணி/.test(value)) return "anna-anni";
  if (/periyappa|periyamma|பெரியப்பா|பெரியம்மா/.test(value)) return "periyappa-periyamma";
  if (/chithappa|chithi|சித்தப்பா|சித்தி/.test(value)) return "chithappa-chithi";
  if (/thatha|patti|grandfather|grandmother|தாத்தா|பாட்டி/.test(value)) return "thatha-patti";
  if (/mama|athai|aathai|மாமா|அத்தை|அத்தா/.test(value)) return "mama-athai";
  return "other";
}
const KINSHIP_DISPLAY_ORDER = ["bride-grandparents", "groom-grandparents", "groom-mama", "bride-aunt-uncle", "groom-mama-athai", "groom-periyappa", "bride-periyappa-periyamma", "machan-akka", "groom-sisters", "bride-akka", "groom-anna-anni", "bride-anna-anni", "groom-brothers", "bride-host", "bride-kids", "other"];
const KINSHIP_DISPLAY_CONFIG = KINSHIP_DISPLAY_ORDER.map(id => KINSHIP_CONFIG.find(item => item.id === id)).filter(Boolean).map(item => ({ ...item, sourceIds: [item.id] }));
function renderKinshipSubgroups(people) {
  // All names remain visible under their own family relationship headings.
  return KINSHIP_DISPLAY_CONFIG.map((kinship) => {
    const members = people.filter(person => kinship.sourceIds.includes(inferKinship(person)));
    if (!members.length) return "";
    const title = currentLang === "ta" ? kinship.ta : kinship.en;
    return `<section class="kinship-subgroup"><div class="kinship-subgroup-heading"><span>${esc(title)}</span><span class="kinship-count">${members.length}</span></div><div class="guest-cards-grid">${members.map(renderGuestCardHtml).join("")}</div></section>`;
  }).join("");
}

const GROUP_CONFIG = [
  { id: "relatives-bride", title: "பெண் வீட்டாரின் உறவினர்கள் · Bride's Relatives", icon: "🌸" },
  { id: "relatives-groom", title: "மாப்பிள்ளை வீட்டாரின் உறவினர்கள் · Groom's Relatives", icon: "⚜" },
  { id: "friends-groom", title: "மணமகனின் நண்பர்கள் · Groom's Friends", icon: "🤝" },
  { id: "friends-bride", title: "மணமகளின் தோழிகள் · Bride's Friends", icon: "💐" },
  { id: "friends-brothers", title: "சகோதரர்களின் நண்பர்கள் · Brothers' Friends", icon: "✨" },
  { id: "officials", title: "பணிபுரிவோர் & மேலதிகாரிகள் · Workplace Colleagues & Officials", icon: "💼" }
];

let activeFilter = "all";
let peopleVisibleLimit = Number.POSITIVE_INFINITY;
function renderPeopleList(filter = "all", searchQuery = "") {
  activeFilter = filter;
  const container = document.getElementById("segregatedPeopleContainer");
  if (!container) return;
  const query = searchQuery.trim().toLocaleLowerCase();
  const all = Array.isArray(siteData.persons) ? siteData.persons.filter(p => p.kinship !== "parents-immediate" && !["p1","p2","p3","p4"].includes(p.id)) : [];
  let matches = all.filter(p => {
    if (filter === "with-kids" && !(localizedValue(p, "kids") || p.kids || "").trim()) return false;
    if (filter !== "all" && filter !== "with-kids" && p.category !== filter) return false;
    if (!query) return true;
    return [p.name,p.nameTa,p.nameEn,p.kids,p.kidsTa,p.kidsEn,p.location,p.locationTa,p.locationEn,p.role,p.roleTa,p.roleEn,p.category,p.note,p.noteTa,p.noteEn].some(v => String(v || "").toLocaleLowerCase().includes(query));
  });
  const total = matches.length;
  matches = matches.slice(0, peopleVisibleLimit);
  let html = "";
  if (filter === "with-kids") {
    html = `<div class="guest-segregated-block"><div class="guest-group-header"><span>${currentLang==='ta'?'குழந்தைகள் உள்ள குடும்பங்கள்':'Families with Kids'}</span><span class="group-count-badge">${total}</span></div><div class="guest-cards-grid">${matches.map(renderGuestCardHtml).join('')}</div></div>`;
  } else {
    const groups = filter === "all" ? GROUP_CONFIG : GROUP_CONFIG.filter(g => g.id === filter);
    groups.forEach(grp => {
      const group = matches.filter(p => p.category === grp.id);
      if (!group.length) return;
      const groupBody = grp.id.startsWith("relatives-") ? renderKinshipSubgroups(group) : `<div class="guest-cards-grid">${group.map(renderGuestCardHtml).join('')}</div>`;
      html += `<div class="guest-segregated-block"><div class="guest-group-header"><span>${grp.icon} ${esc(currentLang==='ta' ? translateGroupTamil(grp.id) : grp.title.replace(/^.*?· /,''))}</span><span class="group-count-badge">${all.filter(p=>p.category===grp.id).length}</span></div>${groupBody}</div>`;
    });
  }
  if (!html) html = `<div class="people-empty-state">${currentLang==='ta'?'பொருத்தமான உறவினர் அல்லது நண்பர் கிடைக்கவில்லை.':'No matching relatives or friends found.'}</div>`;
  // All matches are rendered together; subheadings never collapse or hide names.
  container.innerHTML = html;
}
function translateGroupTamil(id) {
  return ({'relatives-bride':'மணமகள் வீட்டார் உறவினர்கள்','relatives-groom':'மணமகன் வீட்டார் உறவினர்கள்','friends-groom':'மணமகனின் நண்பர்கள்','friends-bride':'மணமகளின் தோழிகள்','friends-brothers':'சகோதரர்களின் நண்பர்கள்','officials':'பணியிட நண்பர்கள் மற்றும் அதிகாரிகள்'})[id] || id;
}


function renderGuestCardHtml(p) {
  const name = localizedValue(p, "name");
  const children = localizedValue(p, "kids").trim();
  const location = localizedValue(p, "location").trim();
  const role = localizedValue(p, "role").trim();
  return `
    <article class="guest-interactive-card" aria-label="${esc(name)} family">
      <div class="guest-couple-row">
        <div class="guest-name-text">${esc(currentLang === "ta" ? (p.nameTa || p.name || name) : (p.nameEn || p.name || name))}</div>
        ${location ? `<div class="guest-location-badge">${esc(location)}</div>` : ''}
      </div>
      ${children ? `<div class="guest-children-line"><span class="guest-children-label">${currentLang === 'ta' ? 'குழந்தைகள்:' : 'Children:'}</span> ${esc(children)}</div>` : ''}
      ${role ? `<div class="guest-relation-text">${esc(role)}</div>` : ''}
    </article>
  `;
}

function openPersonPhotoModal(id) {
  const person = siteData.persons.find(p => p.id === id);
  if (!person) return;

  document.getElementById("gPopupImg").src = person.photo || "assets/portrait-placeholder.webp";
  document.getElementById("gPopupName").textContent = person.name;
  document.getElementById("gPopupCategory").textContent = person.role;
  document.getElementById("gPopupBranch").textContent = person.category.replace("-", " ").toUpperCase();
  document.getElementById("gPopupLocation").textContent = person.location || "Madurai, Tamil Nadu";
  document.getElementById("gPopupSide").textContent = person.category.includes("bride") ? "Bride's Side" : "Groom's Side";

  const kidsBox = document.getElementById("gPopupKidsBox");
  const kidsNames = document.getElementById("gPopupKidsNames");
  if (person.kids && person.kids.trim() !== "") {
    kidsBox.style.display = "block";
    kidsNames.textContent = person.kids;
  } else {
    kidsBox.style.display = "none";
  }

  document.getElementById("gPopupNote").textContent = person.note || "Sending heartfelt prayers and warmest congratulations to M. Thirisha & Siva Shankar!";
  openModal("guestPhotoModal");
}

/* Filter pills & search event listeners */
document.querySelectorAll(".filter-pill").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    peopleVisibleLimit = Number.POSITIVE_INFINITY;
    const query = document.getElementById("guestSearchInput")?.value || "";
    renderPeopleList(btn.dataset.filter, query);
  });
});

document.getElementById("guestSearchInput")?.addEventListener("input", (e) => {
  peopleVisibleLimit = Number.POSITIVE_INFINITY;
  renderPeopleList(activeFilter, e.target.value);
});

/* ==========================================================================
   DIGITAL BLESSING WALL (Section 15F)
   ========================================================================== */
function renderBlessingsWall() {
  const stream = document.getElementById("blessingsWallStream");
  if (!stream) return;
  const taWish = {
    "Prof. S. Rengasamy": { relation: "குடும்பப் பெரியவர்", text: "ஸ்ரீ வெற்றி விநாயகர் துணை · பொதிகுளம் முத்துமாரியம்மன் · ஊர் காவலன் சாமி திருமூர்த்தி குழுமக் குடும்பத்திற்கு வளமும் மகிழ்ச்சியும் அமைதியும் அருளட்டும்!", time: "நேற்று" },
    "Dr. K. Jayashree": { relation: "மணமகளின் வழிகாட்டி", text: "பண்பாடும் குடும்ப மரபுகளும் இணையும் இவ்விழா இனிய இல்லற வாழ்வை அளிக்கட்டும்!", time: "2 நாட்களுக்கு முன்பு" },
    "M. Vignesh & Family": { relation: "சகோதரர்", text: "மதுரைக்கு வரும் உறவினர்களை வரவேற்க ஆவலுடன் காத்திருக்கிறோம். கொண்டாட்டம் தொடங்கட்டும்!", time: "3 நாட்களுக்கு முன்பு" }
  };
  stream.innerHTML = siteData.wishes.slice(-6).reverse().map(w => {
    const t = currentLang === 'ta' ? (taWish[w.name] || {}) : {};
    return `<div class="blessing-card-bubble"><div class="blessing-card-header"><span class="blessing-author">${esc(w.name)}</span><span class="blessing-relation-pill">${esc(t.relation || w.relation || (currentLang==='ta'?'வாழ்த்துநர்':'Well-wisher'))}</span></div><div class="blessing-quote">“${esc(t.text || w.text)}”</div><small style="font-size:0.72rem;color:var(--ink-muted);">${esc(t.time || w.time || (currentLang==='ta'?'சமீபத்தில்':'Recently'))}</small></div>`;
  }).join('');
}

document.getElementById("wishesForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const name = f.elements.guestName.value.trim();
  const relation = f.elements.guestRelation.value;
  const msg = f.elements.guestMessage.value.trim();
  if (!name || !msg) return;

  siteData.wishes.push({
    name,
    relation,
    text: msg,
    time: "Just now"
  });
  persistSiteData();
  renderBlessingsWall();

  const ack = document.getElementById("wishesAck");
  if (ack) {
    ack.textContent = "🌸 Thank you! Your warm blessing is posted on our Digital Wall!";
    setTimeout(() => { if (ack) ack.textContent = ""; }, 5000);
  }
  f.reset();
});

document.getElementById("sendWhatsAppWishBtn")?.addEventListener("click", () => {
  const f = document.getElementById("wishesForm");
  const name = f.elements.guestName.value.trim() || "A Well-wisher";
  const relation = f.elements.guestRelation.value;
  const msg = f.elements.guestMessage.value.trim() || "Hearty congratulations and best wishes!";
  const fullText = `*Wedding Blessings for M. Thirisha & Siva Shankar*\nFrom: ${name} (${relation})\nMessage: ${msg}`;
  const num = siteData.whatsapp ? siteData.whatsapp.replace(/\D/g, '') : "";
  window.open(`https://wa.me/${num}?text=${encodeURIComponent(fullText)}`, "_blank");
});

/* ==========================================================================
   PROPER RSVP EXPERIENCE (Section 12)
   ========================================================================== */
document.getElementById("rsvpForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const name = document.getElementById("rsvpNameInput")?.value.trim();
  const attendance = document.getElementById("rsvpAttendanceInput")?.value;
  const count = document.getElementById("rsvpGuestCountInput")?.value;
  const note = document.getElementById("rsvpNoteInput")?.value.trim();

  const checkedEvents = [];
  document.querySelectorAll('input[name="rsvpEvents"]:checked').forEach(cb => {
    checkedEvents.push(cb.value);
  });

  const submitBtn = document.getElementById("rsvpSubmitBtn");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = "<span>🪔</span> Recording RSVP...";
  }

  setTimeout(() => {
    siteData.rsvps.push({
      id: "rsvp_" + Date.now(),
      name,
      attendance,
      count: attendance === "attending-no" ? 0 : Number(count),
      events: checkedEvents,
      note,
      timestamp: new Date().toISOString()
    });

    persistSiteData();
    renderAdminRsvpsList();

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "<span>🪔</span> <span>Confirm My RSVP</span>";
    }

    const seal = document.getElementById("rsvpSuccessSeal");
    const msg = document.getElementById("rsvpSuccessMsg");
    if (seal && msg) {
      if (attendance === "attending-no") {
        msg.textContent = `Thank you, ${name}. We deeply cherish your loving prayers and warm wishes from afar!`;
      } else {
        msg.textContent = `Thank you, ${name}! We joyfully look forward to welcoming you and your family (${count} guest${count > 1 ? 's' : ''}) in Madurai.`;
      }
      seal.style.display = "block";
      seal.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 400);
});

/* ==========================================================================
   PRESENT LOCATION ROUTE (GEOLOCATION + GOOGLE MAPS)
   ========================================================================== */
document.getElementById("gpsRouteBtn")?.addEventListener("click", () => {
  const venueDest = encodeURIComponent(siteData.venue + ", " + siteData.address);
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const url = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${venueDest}&travelmode=driving`;
        window.open(url, "_blank");
      },
      () => {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${venueDest}`, "_blank");
      },
      { timeout: 7000 }
    );
  } else {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${venueDest}`, "_blank");
  }
});

/* ==========================================================================
   ROYAL ENTRANCE DOORS INTERACTION (Section 4)
   ========================================================================== */
const portalStage = document.getElementById("portalDoorsStage");
const portalOpenBtn = document.getElementById("portalOpenBtn");
const skipPortalBtn = document.getElementById("skipPortalBtn");
const floatingDock = document.getElementById("smartFloatingDock");

function openEntranceDoors(instant = false) {
  if (!portalStage || portalStage.dataset.completed === "true") return;
  const guest = getPersonalisedGuest();
  if (!guest.name.trim()) { document.getElementById('inviteeNameInput')?.focus(); return; }
  applyPersonalisedGuest(guest);
  startWeddingMusicFromGesture();
  playTempleBellIfEnabled();
  portalStage.classList.add("doors-open");
  const finishEntrance = () => {
    portalStage.dataset.completed = "true";
    portalStage.classList.add("doors-completed");
    document.body.classList.remove("invitation-locked");
    document.body.classList.add("invitation-entered");
    if (floatingDock) floatingDock.classList.add("visible");
    if (instant) {
      document.getElementById("home")?.scrollIntoView({ behavior: "auto", block: "start" });
    } else {
      startGarlandIntro();
    }
  };
  window.setTimeout(finishEntrance, instant ? 30 : 1150);
}

function startGarlandIntro() {
  const stage = document.getElementById("garlandIntro");
  const video = document.getElementById("garlandIntroVideo");
  if (!stage || !video) { document.getElementById("home")?.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
  stage.hidden = false;
  stage.classList.add("is-active");
  video.currentTime = 0;
  // Keep the continuous wedding playlist audible; the intro clip is muted so tracks do not overlap.
  video.muted = true;
  const playAttempt = video.play();
  if (playAttempt && typeof playAttempt.catch === "function") {
    playAttempt.catch(() => {
      stage.classList.add("needs-tap");
      const playBtn = document.getElementById("garlandVideoPlayBtn");
      if (playBtn) playBtn.hidden = false;
      const hint = document.getElementById("garlandVideoHint");
      if (hint) hint.textContent = currentLang === "ta" ? "வீடியோவை இயக்கத் தொடவும் அல்லது முகப்புக்குச் செல்லவும்." : "Tap play to start the clip, or continue to the home page.";
    });
  }
}
function finishGarlandIntro() {
  const stage = document.getElementById("garlandIntro");
  const video = document.getElementById("garlandIntroVideo");
  if (video) { video.pause(); try { video.currentTime = 0; } catch(e) {} }
  if (stage) { stage.classList.remove("is-active", "needs-tap"); stage.hidden = true; }
  document.getElementById("home")?.scrollIntoView({ behavior: "auto", block: "start" });
}
document.getElementById("skipGarlandIntroBtn")?.addEventListener("click", finishGarlandIntro);
document.getElementById("garlandIntroVideo")?.addEventListener("ended", finishGarlandIntro);
document.getElementById("garlandVideoPlayBtn")?.addEventListener("click", () => {
  const video = document.getElementById("garlandIntroVideo");
  const stage = document.getElementById("garlandIntro");
  if (!video) return;
  video.muted = true;
  video.play().then(() => { stage?.classList.remove("needs-tap"); const btn=document.getElementById("garlandVideoPlayBtn"); if(btn) btn.hidden=true; }).catch(() => {});
});

portalOpenBtn?.addEventListener("click", () => openEntranceDoors(false));
skipPortalBtn?.addEventListener("click", () => { if(getPersonalisedGuest().name.trim()) openEntranceDoors(true); else document.getElementById("inviteeNameInput")?.focus(); });

// The revealed-stage cue also enters the main hero page.
document.getElementById("revealedScrollCue")?.addEventListener("click", () => {
  if (document.body.classList.contains("invitation-locked")) openEntranceDoors(false);
  else document.getElementById("home")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* ==========================================================================
   LOCATION-AWARE ROUTES — asks permission only after the visitor taps.
   ========================================================================== */
function openDirectionsFromCurrentLocation() {
  const destination = `${siteData.venue || "Wedding venue"}, ${siteData.address || "Madurai, Tamil Nadu"}`;
  const fallback = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
  if (!navigator.geolocation) { window.open(fallback, "_blank", "noopener"); return; }
  const btn = document.getElementById("gpsRouteBtn");
  if (btn) { btn.disabled = true; btn.setAttribute("aria-busy", "true"); }
  navigator.geolocation.getCurrentPosition(
    pos => {
      const origin = `${pos.coords.latitude},${pos.coords.longitude}`;
      window.open(`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`, "_blank", "noopener");
      if (btn) { btn.disabled = false; btn.removeAttribute("aria-busy"); }
    },
    () => {
      window.open(fallback, "_blank", "noopener");
      if (btn) { btn.disabled = false; btn.removeAttribute("aria-busy"); }
    },
    { enableHighAccuracy: false, timeout: 8000, maximumAge: 60000 }
  );
}
document.getElementById("gpsRouteBtn")?.addEventListener("click", openDirectionsFromCurrentLocation);

function openTransitRouteFromCurrentLocation(kind) {
  const destination = `${siteData.venue || "Wedding venue"}, ${siteData.address || "Madurai, Tamil Nadu"}`;
  const fallbackHref = kind === "bus" ? siteData.bus : siteData.train;
  const fallback = fallbackHref || `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=transit`;
  if (!navigator.geolocation) { window.open(fallback, "_blank", "noopener"); return; }
  navigator.geolocation.getCurrentPosition(
    pos => {
      const origin = `${pos.coords.latitude},${pos.coords.longitude}`;
      const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=transit`;
      window.open(url, "_blank", "noopener");
    },
    () => window.open(fallback, "_blank", "noopener"),
    { enableHighAccuracy: false, timeout: 8000, maximumAge: 60000 }
  );
}
document.getElementById("busRouteLink")?.addEventListener("click", event => {
  event.preventDefault(); openTransitRouteFromCurrentLocation("bus");
});
document.getElementById("trainRouteLink")?.addEventListener("click", event => {
  event.preventDefault(); openTransitRouteFromCurrentLocation("train");
});

/* ==========================================================================
   REAL-TIME COUNTDOWN
   ========================================================================== */
function updateCountdown() {
  const target = new Date(siteData.date || "2026-11-22T06:30:00");
  const diff = Math.max(0, Math.floor((target - new Date()) / 1000));

  const d = Math.floor(diff / 86400);
  const h = Math.floor((diff % 86400) / 3600);
  const m = Math.floor((diff % 3600) / 60);
  const s = diff % 60;

  const cdDays = document.getElementById("cdDays");
  const cdHours = document.getElementById("cdHours");
  const cdMins = document.getElementById("cdMins");
  const cdSecs = document.getElementById("cdSecs");

  if (cdDays) cdDays.textContent = String(d).padStart(2, '0');
  if (cdHours) cdHours.textContent = String(h).padStart(2, '0');
  if (cdMins) cdMins.textContent = String(m).padStart(2, '0');
  if (cdSecs) cdSecs.textContent = String(s).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

/* ==========================================================================
   CINEMATIC PANORAMA & SCROLL PARALLAX (Section 5 & 18)
   ========================================================================== */
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (scrollY / max) * 100 : 0;
  
  // Progress bar
  const bar = document.getElementById("progressBar");
  if (bar) bar.style.width = pct + "%";

  // Floating dock visibility after scrolling past entrance
  if (floatingDock && scrollY > 200) {
    floatingDock.classList.add("visible");
  }

  // Hero parallax
  const heroImg = document.getElementById("heroBgImg");
  if (heroImg && scrollY < window.innerHeight * 2) {
    heroImg.style.transform = `scale(1.04) translateY(${scrollY * 0.15}px)`;
  }

  // Panorama section scroll depth
  const panoSection = document.getElementById("panorama");
  if (panoSection) {
    const rect = panoSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
      const panoImg = document.getElementById("panoramaStageImg");
      if (panoImg) {
        panoImg.style.transform = `scale(${1.02 + progress * 0.08}) translateX(${(progress - 0.5) * 20}px)`;
      }
      const line = document.getElementById("panoLinePath");
      if (line) {
        const offset = Math.max(0, 1200 - progress * 1400);
        line.style.strokeDashoffset = offset;
      }
    }
  }

  // Kolam drawing scroll animation (Section 6)
  const kolamSection = document.getElementById("kolam");
  if (kolamSection) {
    const kRect = kolamSection.getBoundingClientRect();
    if (kRect.top <= window.innerHeight * 0.8 && kRect.bottom >= 0) {
      document.querySelectorAll(".kolam-draw-path").forEach(path => {
        path.style.strokeDashoffset = "0";
      });
    }
  }
}, { passive: true });

/* ==========================================================================
   SMART FLOATING DOCK INTERSECTION OBSERVER (Section 16)
   ========================================================================== */
const sections = document.querySelectorAll("header[id], section[id], footer[id]");
const dockItems = document.querySelectorAll(".dock-item");

const observerOptions = {
  root: null,
  rootMargin: "-20% 0px -60% 0px",
  threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      dockItems.forEach(item => {
        const href = item.getAttribute("href");
        if (href === `#${id}`) {
          dockItems.forEach(d => d.classList.remove("active"));
          item.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

sections.forEach(s => sectionObserver.observe(s));

/* ==========================================================================
   HERITAGE SYMBOL EASTER EGGS MODAL (Section 15A)
   ========================================================================== */
const HERITAGE_DATA = {
  parrot: {
    icon: "🦜",
    title: "Meenakshi Temple Green Parrot (கிளி)",
    desc: "In Madurai Meenakshi Amman Temple, the divine Goddess Meenakshi holds a sacred green parrot on her right shoulder. The parrot is revered as a messenger of eternal love, divine wisdom, and sweet truthful speech, repeating the sacred prayers and wishes of devotees to the Goddess."
  },
  jasmine: {
    icon: "🌸",
    title: "Madurai Gundu Malli (மதுரை மல்லி)",
    desc: "Renowned globally with a Geographical Indication (GI) tag, the round Madurai Jasmine ('Gundu Malli') is famous for its thick petals, lingering fragrant aroma, and sacred role in wedding garlands, symbolizing pure love, auspicious beginnings, and unblemished joy."
  },
  bell: {
    icon: "🔔",
    title: "Sacred Temple Bell (கோவில் மணி)",
    desc: "The sacred brass temple bell creates an auspicious acoustic resonance that dispels negative frequencies and invokes the presence of divine celestial forces. Its melodious ring during the Mangalya Dharanam sanctifies the holy union."
  },
  diya: {
    icon: "🪔",
    title: "Auspicious Agal Vilakku (மங்கள தீபம்)",
    desc: "The five-faced traditional brass oil lamp represents the illumination of five sacred virtues: Knowledge, Prosperity, Health, Harmony, and Devotion. Lighting the deepam marks the victory of spiritual light over darkness in the newlyweds' shared life."
  }
};

function openHeritageModal(type) {
  const data = HERITAGE_DATA[type];
  if (!data) return;
  document.getElementById("heritageModalIcon").textContent = data.icon;
  document.getElementById("heritageModalHeadline").textContent = data.title;
  document.getElementById("heritageModalText").textContent = data.desc;
  openModal("heritageModal");
}

/* ==========================================================================
   NOTES TAB (PRIVATE ON DEVICE)
   ========================================================================== */
const notesArea = document.getElementById("privateWeddingNotes");
if (notesArea) {
  try {
    notesArea.value = localStorage.getItem("maduraiWeddingPrivateNotes") || "";
  } catch(e) {}
  notesArea.addEventListener("input", () => {
    try {
      localStorage.setItem("maduraiWeddingPrivateNotes", notesArea.value);
      const msg = document.getElementById("notesStatusMsg");
      if (msg) msg.textContent = "Auto-saved just now";
    } catch(e) {}
  });
}
document.getElementById("saveNotesBtn")?.addEventListener("click", () => {
  if (notesArea) {
    localStorage.setItem("maduraiWeddingPrivateNotes", notesArea.value);
    const msg = document.getElementById("notesStatusMsg");
    if (msg) msg.textContent = "Saved securely on your device!";
  }
});
document.getElementById("clearNotesBtn")?.addEventListener("click", () => {
  if (confirm("Clear your personal notes?")) {
    if (notesArea) notesArea.value = "";
    localStorage.removeItem("maduraiWeddingPrivateNotes");
    const msg = document.getElementById("notesStatusMsg");
    if (msg) msg.textContent = "Notes cleared.";
  }
});
function insertNoteTemplate(text) {
  if (notesArea) {
    notesArea.value = (notesArea.value ? notesArea.value + "\n\n" : "") + text;
    localStorage.setItem("maduraiWeddingPrivateNotes", notesArea.value);
    const msg = document.getElementById("notesStatusMsg");
    if (msg) msg.textContent = "Template inserted!";
  }
}

/* Admin song upload: files are stored in this browser only; keep uploads modest (<3 MB). */
document.getElementById("admSongUpload")?.addEventListener("change", async (event) => {
  const files = Array.from(event.target.files || []);
  const status = document.getElementById("admSongUploadStatus");
  const existing = (() => { try { return JSON.parse(localStorage.getItem("thirumoorthiCustomSongs") || "[]"); } catch { return []; } })();
  for (const file of files) {
    if (!file.type.startsWith("audio/")) continue;
    if (file.size > 3 * 1024 * 1024) { if (status) status.textContent = `${file.name}: file is over 3 MB; use a compressed MP3.`; continue; }
    const dataUrl = await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file); });
    existing.push({ title: file.name.replace(/\.[^.]+$/, ""), src: dataUrl });
  }
  try { localStorage.setItem("thirumoorthiCustomSongs", JSON.stringify(existing)); if (status) status.textContent = `${existing.length} custom song(s) saved in this browser. Reload the page to add them to the playlist.`; }
  catch (e) { if (status) status.textContent = "Storage is full. Use smaller MP3 files or hosted audio URLs."; }
  event.target.value = "";
});

/* Local wedding playlist supplied for this project.
   The audio element remains mounted for the complete visit. On mobile the browser may
   require a first touch to enable audible autoplay; when permitted it starts muted on load. */
const musicBtn = document.getElementById("musicToggleBtn");
const weddingAudioPlayer = document.getElementById("weddingAudioPlayer");
const weddingMusicTracks = [
  { src: "assets/music/radhimaa.mp3", title: "Radhimaa" },
  { src: "assets/music/thangame-thangame.mp3", title: "Thangame Thangame" },
  { src: "assets/music/pavazha-malli.mp3", title: "Pavazha Malli" },
  { src: "assets/music/hayyoda.mp3", title: "Hayyoda" },
  { src: "assets/music/vikram-title-track.mp3", title: "Vikram Title Track" }
];
// Administrator-added tracks are stored locally in this browser (small audio files only).
try {
  const customTracks = JSON.parse(localStorage.getItem("thirumoorthiCustomSongs") || "[]");
  customTracks.forEach((track, i) => { if (track && track.src && track.title) weddingMusicTracks.push({ src: track.src, title: track.title }); });
} catch (e) { console.warn("Custom songs could not be loaded", e); }
// Shuffle the built-in songs for a different playback order on each visit.
for (let i = weddingMusicTracks.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [weddingMusicTracks[i], weddingMusicTracks[j]] = [weddingMusicTracks[j], weddingMusicTracks[i]];
}
let currentWeddingTrackIndex = 0;
let isMusicPlaying = false;
let musicGestureUnlocked = false;
let musicAutoplayAttempted = false;
function currentWeddingTrack() { return weddingMusicTracks[currentWeddingTrackIndex] || weddingMusicTracks[0]; }
function loadWeddingTrack(index, shouldPlay = false) {
  if (!weddingAudioPlayer || !weddingMusicTracks.length) return Promise.resolve(false);
  currentWeddingTrackIndex = (index + weddingMusicTracks.length) % weddingMusicTracks.length;
  const track = currentWeddingTrack();
  const target = new URL(track.src, window.location.href).href;
  if (weddingAudioPlayer.src !== target) {
    weddingAudioPlayer.src = track.src;
    weddingAudioPlayer.load();
  }
  if (!shouldPlay) return Promise.resolve(true);
  return weddingAudioPlayer.play()
    .then(() => { updateMusicButton(!weddingAudioPlayer.paused && !weddingAudioPlayer.muted); return true; })
    .catch(() => { updateMusicButton(false); return false; });
}
function updateMusicButton(playing = isMusicPlaying) {
  isMusicPlaying = Boolean(playing);
  const label = document.getElementById("musicText");
  if (label) label.textContent = currentLang === "ta" ? (isMusicPlaying ? "இசை இயங்குகிறது" : "இசை") : (isMusicPlaying ? "Music On" : "Music");
  if (musicBtn) {
    musicBtn.classList.toggle("active", isMusicPlaying);
    musicBtn.setAttribute("aria-pressed", String(isMusicPlaying));
    musicBtn.title = currentLang === "ta" ? "திருமண இசையை இயக்க / நிறுத்த" : "Play or pause wedding music";
  }
}
function startWeddingMusicFromGesture() {
  if (!weddingAudioPlayer) return;
  musicGestureUnlocked = true;
  if (!weddingAudioPlayer.currentSrc) {
    const track = currentWeddingTrack();
    weddingAudioPlayer.src = track.src;
    weddingAudioPlayer.load();
  }
  weddingAudioPlayer.muted = false;
  weddingAudioPlayer.volume = 0.52;
  weddingAudioPlayer.play().then(() => updateMusicButton(true)).catch(() => updateMusicButton(false));
}
function toggleWeddingMusic() {
  if (!weddingAudioPlayer) return;
  if (weddingAudioPlayer.paused || weddingAudioPlayer.muted) startWeddingMusicFromGesture();
  else { weddingAudioPlayer.pause(); updateMusicButton(false); }
}
musicBtn?.addEventListener("click", event => { event.preventDefault(); toggleWeddingMusic(); });
// Continue through all supplied tracks and restart at the beginning until the visitor closes the site.
weddingAudioPlayer?.addEventListener("ended", () => { loadWeddingTrack(currentWeddingTrackIndex + 1, true); });
weddingAudioPlayer?.addEventListener("play", () => { if (!weddingAudioPlayer.muted) updateMusicButton(true); });
weddingAudioPlayer?.addEventListener("pause", () => { if (!weddingAudioPlayer.muted) updateMusicButton(false); });
function startWeddingMusicOnEntry() {
  if (!weddingAudioPlayer || musicAutoplayAttempted) return;
  musicAutoplayAttempted = true;
  weddingAudioPlayer.volume = 0.52;
  weddingAudioPlayer.muted = true;
  const first = currentWeddingTrack();
  weddingAudioPlayer.src = first.src;
  weddingAudioPlayer.load();
  // Muted autoplay is allowed by many browsers; audible playback unlocks on the first guest tap.
  weddingAudioPlayer.play().then(() => updateMusicButton(false)).catch(() => updateMusicButton(false));
}
function unlockWeddingMusicOnFirstGesture(event) {
  if (event?.target?.closest?.("#musicToggleBtn")) return;
  startWeddingMusicFromGesture();
  document.removeEventListener("pointerdown", unlockWeddingMusicOnFirstGesture, true);
  document.removeEventListener("touchstart", unlockWeddingMusicOnFirstGesture, true);
  document.removeEventListener("keydown", unlockWeddingMusicOnFirstGesture, true);
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", startWeddingMusicOnEntry, { once: true });
else startWeddingMusicOnEntry();
document.addEventListener("pointerdown", unlockWeddingMusicOnFirstGesture, true);
document.addEventListener("touchstart", unlockWeddingMusicOnFirstGesture, { capture: true, passive: true });
document.addEventListener("keydown", unlockWeddingMusicOnFirstGesture, true);
updateMusicButton(false);

// Motion presets: retained internally, but the floating controls are removed from the visitor UI.
const motionLevelSelect = document.getElementById('motionLevelSelect');
function setMotionLevel(level) {
  document.documentElement.dataset.motionLevel = level;
  document.body.classList.toggle('motion-off', level === 'off');
  document.body.classList.toggle('motion-festive', level === 'festive');
  try { localStorage.setItem('maduraiMotionLevel', level); } catch(e) {}
}
if (motionLevelSelect) {
  let saved = 'gentle'; try { saved = localStorage.getItem('maduraiMotionLevel') || 'gentle'; } catch(e) {}
  motionLevelSelect.value = saved; setMotionLevel(saved);
  motionLevelSelect.addEventListener('change', () => setMotionLevel(motionLevelSelect.value));
}
/* ==========================================================================
   AUTO PAGE SCROLL — user-controlled speed presets
   ========================================================================== */
const autoScrollBtn = document.getElementById('autoScrollBtn');
const autoScrollText = document.getElementById('autoScrollText');
const scrollSpeedBtn = document.getElementById('scrollSpeedBtn');
const scrollSpeedText = document.getElementById('scrollSpeedText');
const autoScrollPresets = [
  { label: 'Slow', pxPerFrame: 0.35 },
  { label: 'Normal', pxPerFrame: 0.8 },
  { label: 'Fast', pxPerFrame: 1.8 },
  { label: 'Very Fast', pxPerFrame: 3.2 },
  { label: 'MAX', pxPerFrame: 16.0 }
];
let autoScrollSpeedIndex = 1;
let autoScrollActive = false;
let autoScrollFrame = 0;
function updateAutoScrollControls() {
  if (autoScrollText) autoScrollText.textContent = autoScrollActive
    ? (currentLang === 'ta' ? 'தானியங்கு: இயங்கு' : 'Auto Scroll: On')
    : (currentLang === 'ta' ? 'தானியங்கு: நிறுத்தம்' : 'Auto Scroll: Off');
  if (scrollSpeedText) scrollSpeedText.textContent = (currentLang === 'ta' ? 'அதிகபட்ச வேகம்' : 'Max Speed');
  autoScrollBtn?.classList.toggle('active', autoScrollActive);
  autoScrollBtn?.setAttribute('aria-pressed', String(autoScrollActive));
}
function autoScrollStep() {
  if (!autoScrollActive) return;
  if (document.body.classList.contains('invitation-locked') || document.hidden) {
    autoScrollFrame = requestAnimationFrame(autoScrollStep);
    return;
  }
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (window.scrollY >= maxScroll - 1) {
    autoScrollActive = false;
    updateAutoScrollControls();
    return;
  }
  window.scrollBy(0, autoScrollPresets[autoScrollSpeedIndex].pxPerFrame);
  autoScrollFrame = requestAnimationFrame(autoScrollStep);
}
autoScrollBtn?.addEventListener('click', () => {
  autoScrollActive = !autoScrollActive;
  updateAutoScrollControls();
  if (autoScrollActive) autoScrollFrame = requestAnimationFrame(autoScrollStep);
  else cancelAnimationFrame(autoScrollFrame);
});
scrollSpeedBtn?.addEventListener('click', () => {
  autoScrollSpeedIndex = autoScrollPresets.length - 1;
  updateAutoScrollControls();
});
updateAutoScrollControls();

/* ==========================================================================
   FLOATING REAL ROSES + INDIVIDUAL PETALS FROM THE USER'S ARTWORK
   ========================================================================== */
const pCanvas = document.getElementById("petalsCanvas");
const pCtx = pCanvas?.getContext("2d");
const roseSpriteFiles = [
  "assets/rose-bloom-real.png",
  "assets/rose-petal-round.png",
  "assets/rose-petal-dotted.png",
  "assets/rose-petal-folded.png",
  "assets/rose-petal-curved.png",
  "assets/rose-petal-frilled.png"
];
const roseSprites = roseSpriteFiles.map(src => { const img = new Image(); img.src = src; return img; });
let fallingRoses = [];
let isTabVisible = true;

function resizePetalsCanvas() {
  if (!pCanvas) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  pCanvas.width = Math.round(window.innerWidth * dpr);
  pCanvas.height = Math.round(window.innerHeight * dpr);
  pCanvas.style.width = `${window.innerWidth}px`;
  pCanvas.style.height = `${window.innerHeight}px`;
  pCtx?.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resizePetalsCanvas);
resizePetalsCanvas();

class FallingRose {
  constructor(initial = false) { this.reset(initial); }
  reset(initial = false) {
    // Use a few whole roses mixed with many individual petals for a natural effect.
    this.spriteIndex = Math.random() < 0.22 ? 0 : 1 + Math.floor(Math.random() * (roseSprites.length - 1));
    this.size = this.spriteIndex === 0 ? 20 + Math.random() * 19 : 12 + Math.random() * 19;
    this.x = Math.random() * (window.innerWidth || 1200);
    this.y = initial ? Math.random() * (window.innerHeight || 800) : -this.size - 8;
    this.speedY = 0.42 + Math.random() * 0.95;
    this.speedX = (Math.random() - 0.5) * 0.42;
    this.rotation = (Math.random() - 0.5) * 0.8;
    this.rotationSpeed = (Math.random() - 0.5) * 0.014;
    this.opacity = 0.70 + Math.random() * 0.28;
    this.sway = 0.25 + Math.random() * 0.8;
    this.phase = Math.random() * Math.PI * 2;
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX + Math.sin(this.y * 0.008 + this.phase) * this.sway;
    this.rotation += this.rotationSpeed;
    if (this.y > window.innerHeight + this.size) this.reset();
    if (this.x < -this.size) this.x = window.innerWidth + this.size;
    if (this.x > window.innerWidth + this.size) this.x = -this.size;
  }
  draw() {
    const sprite = roseSprites[this.spriteIndex];
    if (!pCtx || !sprite?.complete || !sprite.naturalWidth) return;
    pCtx.save();
    pCtx.translate(this.x, this.y);
    pCtx.rotate(this.rotation);
    pCtx.globalAlpha = this.opacity;
    pCtx.shadowColor = "rgba(72, 0, 15, 0.18)";
    pCtx.shadowBlur = this.spriteIndex === 0 ? 4 : 2;
    pCtx.drawImage(sprite, -this.size / 2, -this.size / 2, this.size, this.size);
    pCtx.restore();
  }
}
function seedRoses() {
  fallingRoses = [];
  const count = window.innerWidth < 600 ? 9 : 18;
  for (let i = 0; i < count; i++) fallingRoses.push(new FallingRose(true));
}
seedRoses();
window.addEventListener("resize", seedRoses);
function animatePetals() {
  if (isTabVisible && pCtx && pCanvas) {
    pCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    fallingRoses.forEach(rose => { rose.update(); rose.draw(); });
  }
  requestAnimationFrame(animatePetals);
}
animatePetals();
document.addEventListener("visibilitychange", () => { isTabVisible = !document.hidden; });

/* ==========================================================================
   3D DRONE LIGHT SHOW OVER GOPURAM
   ========================================================================== */
const droneCanvas = document.getElementById("droneCanvas");
const dCtx = droneCanvas?.getContext("2d");
let droneActive = false;
let droneLights = [];

function resizeDroneCanvas() {
  if (!droneCanvas) return;
  droneCanvas.width = window.innerWidth;
  droneCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeDroneCanvas);
resizeDroneCanvas();

class DronePoint {
  constructor(targetX, targetY, color) {
    this.targetX = targetX;
    this.targetY = targetY;
    this.x = Math.random() * (droneCanvas ? droneCanvas.width : 1000);
    this.y = Math.random() * ((droneCanvas ? droneCanvas.height : 800) * 0.5);
    this.color = color;
    this.radius = 3 + Math.random() * 2.5;
  }
  update() {
    this.x += (this.targetX - this.x) * 0.05;
    this.y += (this.targetY - this.y) * 0.05;
  }
  draw() {
    if (!dCtx) return;
    dCtx.save();
    dCtx.fillStyle = this.color;
    dCtx.shadowColor = this.color;
    dCtx.shadowBlur = 14;
    dCtx.beginPath();
    dCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    dCtx.fill();
    dCtx.restore();
  }
}

function initDroneFormation() {
  droneLights = [];
  if (!droneCanvas) return;
  const cx = droneCanvas.width / 2;
  const cy = droneCanvas.height * 0.35;
  const colors = ["#ffdd55", "#ff5577", "#55eeff", "#ffffff"];

  for (let t = 0; t < Math.PI * 2; t += 0.12) {
    const hx = 16 * Math.pow(Math.sin(t), 3);
    const hy = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
    droneLights.push(new DronePoint(cx + hx * 9, cy + hy * 9, colors[Math.floor(Math.random() * colors.length)]));
  }
}

document.getElementById("droneToggleBtn")?.addEventListener("click", () => {
  droneActive = !droneActive;
  const droneBtn = document.getElementById("droneToggleBtn");
  if (droneActive) {
    droneBtn?.classList.add("active");
    if (droneCanvas) droneCanvas.style.display = "block";
    initDroneFormation();
  } else {
    droneBtn?.classList.remove("active");
    if (droneCanvas) droneCanvas.style.display = "none";
  }
});

function animateDrones() {
  if (droneActive && dCtx && droneCanvas) {
    dCtx.clearRect(0, 0, droneCanvas.width, droneCanvas.height);
    droneLights.forEach(d => { d.update(); d.draw(); });
  }
  requestAnimationFrame(animateDrones);
}
animateDrones();

/* ==========================================================================
   ADMIN PANEL FUNCTIONALITY (Section 17)
   ========================================================================== */
const adminBtn = document.getElementById("openAdminBtn");
adminBtn?.addEventListener("click", () => {
  // Demo-only client-side gate. Do not treat this as secure authentication on a public website.
  const username = window.prompt("Family Admin Login\nUsername:");
  if (username === null) return;
  const password = window.prompt("Family Admin Login\nPassword:");
  if (username !== "familyadmin" || password !== "Madurai@2026") {
    window.alert("Login not recognised. Please check the family admin credentials.");
    return;
  }
  document.getElementById("admBride").value = siteData.bride || "";
  document.getElementById("admFamilyFunction").value = siteData.familyFunction || "";
  document.getElementById("admFamilyFunctionTa").value = siteData.familyFunctionTa || "";
  document.getElementById("admDeities").value = siteData.deities || "";
  document.getElementById("admDeitiesTa").value = siteData.deitiesTa || "";
  document.getElementById("admBrideQualification").value = siteData.brideQualification || "";
  document.getElementById("admBrideQualificationTa").value = siteData.brideQualificationTa || "";
  document.getElementById("admGroomQualification").value = siteData.groomQualification || "";
  document.getElementById("admBrideFather").value = siteData.brideFather || "";
  document.getElementById("admBrideFatherTa").value = siteData.brideFatherTa || "";
  document.getElementById("admBrideMother").value = siteData.brideMother || "";
  document.getElementById("admBrideMotherTa").value = siteData.brideMotherTa || "";
  document.getElementById("admBrideBrother").value = siteData.brideBrother || "";
  document.getElementById("admBrideBrotherTa").value = siteData.brideBrotherTa || "";
  document.getElementById("admBusinesses").value = siteData.businesses || "";
  document.getElementById("admBusinessesTa").value = siteData.businessesTa || "";
  document.getElementById("admGroom").value = siteData.groom || "";
  document.getElementById("admDate").value = siteData.date || "";
  document.getElementById("admDisplayMode").value = siteData.displayMode || "auto";
  document.getElementById("admVenue").value = siteData.venue || "";
  document.getElementById("admAddress").value = siteData.address || "";
  document.getElementById("admMap").value = siteData.map || "";
  document.getElementById("admBus").value = siteData.bus || "";
  document.getElementById("admTrain").value = siteData.train || "";
  document.getElementById("admWhatsapp").value = siteData.whatsapp || "";
  document.getElementById("admBrideCoordName").value = siteData.brideCoordName || "";
  document.getElementById("admBrideCoordPhone").value = siteData.brideCoordPhone || "";
  document.getElementById("admGroomCoordName").value = siteData.groomCoordName || "";
  document.getElementById("admGroomCoordPhone").value = siteData.groomCoordPhone || "";
  document.getElementById("admBrideBio").value = siteData.brideBio || "";
  document.getElementById("admBrideBioTa").value = siteData.brideBioTa || "";
  document.getElementById("admGroomBio").value = siteData.groomBio || "";
  document.getElementById("admGroomBioTa").value = siteData.groomBioTa || "";
  document.getElementById("admInviteMsg").value = siteData.patrikaBodyText || "";
  document.getElementById("admInviteMsgTa").value = siteData.patrikaBodyTextTa || "";

  renderAdminPersonsList();
  renderAdminRsvpsList();
  openModal("adminModal");
});

document.getElementById("adminSiteForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  siteData.bride = document.getElementById("admBride").value.trim();
  siteData.familyFunction = document.getElementById("admFamilyFunction").value.trim();
  siteData.familyFunctionTa = document.getElementById("admFamilyFunctionTa").value.trim();
  siteData.deities = document.getElementById("admDeities").value.trim();
  siteData.deitiesTa = document.getElementById("admDeitiesTa").value.trim();
  siteData.brideQualification = document.getElementById("admBrideQualification").value.trim();
  siteData.brideQualificationTa = document.getElementById("admBrideQualificationTa").value.trim();
  siteData.groomQualification = document.getElementById("admGroomQualification").value.trim();
  siteData.brideFather = document.getElementById("admBrideFather").value.trim();
  siteData.brideFatherTa = document.getElementById("admBrideFatherTa").value.trim();
  siteData.brideMother = document.getElementById("admBrideMother").value.trim();
  siteData.brideMotherTa = document.getElementById("admBrideMotherTa").value.trim();
  siteData.brideBrother = document.getElementById("admBrideBrother").value.trim();
  siteData.brideBrotherTa = document.getElementById("admBrideBrotherTa").value.trim();
  siteData.businesses = document.getElementById("admBusinesses").value.trim();
  siteData.businessesTa = document.getElementById("admBusinessesTa").value.trim();
  siteData.groom = document.getElementById("admGroom").value.trim();
  siteData.date = document.getElementById("admDate").value;
  siteData.displayMode = document.getElementById("admDisplayMode").value;
  siteData.venue = document.getElementById("admVenue").value.trim();
  siteData.address = document.getElementById("admAddress").value.trim();
  siteData.map = document.getElementById("admMap").value.trim();
  siteData.bus = document.getElementById("admBus").value.trim();
  siteData.train = document.getElementById("admTrain").value.trim();
  siteData.whatsapp = document.getElementById("admWhatsapp").value.trim();
  siteData.brideCoordName = document.getElementById("admBrideCoordName").value.trim();
  siteData.brideCoordPhone = document.getElementById("admBrideCoordPhone").value.trim();
  siteData.groomCoordName = document.getElementById("admGroomCoordName").value.trim();
  siteData.groomCoordPhone = document.getElementById("admGroomCoordPhone").value.trim();
  siteData.brideBio = document.getElementById("admBrideBio").value.trim();
  siteData.brideBioTa = document.getElementById("admBrideBioTa").value.trim();
  siteData.groomBio = document.getElementById("admGroomBio").value.trim();
  siteData.groomBioTa = document.getElementById("admGroomBioTa").value.trim();
  siteData.patrikaBodyText = document.getElementById("admInviteMsg").value.trim();
  siteData.patrikaBodyTextTa = document.getElementById("admInviteMsgTa").value.trim();

  persistSiteData();
  renderSiteContent();
  closeModal("adminModal");
});

/* Personalized Link Generator in Admin */
document.getElementById("admGenerateLinkBtn")?.addEventListener("click", () => {
  const name = document.getElementById("admGuestParamInput")?.value.trim();
  if (!name) return;
  const baseUrl = window.location.origin + window.location.pathname;
  const link = `${baseUrl}?guest=${encodeURIComponent(name)}`;
  const outBox = document.getElementById("admGeneratedLinkOutput");
  const linkBox = document.getElementById("admLinkBox");
  if (outBox && linkBox) {
    linkBox.value = link;
    outBox.style.display = "block";
  }
});

document.getElementById("copyLinkBtn")?.addEventListener("click", () => {
  const linkBox = document.getElementById("admLinkBox");
  if (linkBox && linkBox.value) {
    navigator.clipboard.writeText(linkBox.value).then(() => {
      const ack = document.getElementById("copyLinkAck");
      if (ack) {
        ack.textContent = "Copied!";
        setTimeout(() => { if (ack) ack.textContent = ""; }, 3000);
      }
    });
  }
});

/* Manage Persons in Admin */
let adminPeopleLimit = 50;
function renderAdminPersonsList() {
  const listEl = document.getElementById("adminPersonsList");
  if (!listEl) return;
  const q=(document.getElementById("adminPeopleSearchInput")?.value||"").trim().toLocaleLowerCase();
  const all=siteData.persons.filter(p=>!q||[p.name,p.role,p.location,p.kids,p.category].some(v=>String(v||"").toLocaleLowerCase().includes(q)));
  const shown=all.slice(0,adminPeopleLimit);
  listEl.innerHTML = shown.map(p => `
    <div style="display:flex; align-items:center; justify-content:space-between; gap:.5rem; padding:0.5rem; border-bottom:1px solid #f0dcad;">
      <div style="display:flex; align-items:center; gap:0.6rem; min-width:0;">
        <img src="${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy" style="width:38px;height:38px;flex:0 0 38px;border-radius:50%;object-fit:cover;">
        <div style="min-width:0;overflow-wrap:anywhere;">
          <strong style="font-size:0.85rem;color:var(--crimson);">${esc(p.name)}</strong>
          <div style="font-size:0.75rem;color:var(--ink-muted);">${esc(p.role)} · ${esc(p.location)} ${p.kids ? '· 👶 ' + esc(p.kids) : ''}</div>
        </div>
      </div>
      <div style="display:flex;gap:.25rem;flex:0 0 auto;">
        <button type="button" class="template-btn" onclick="editPerson('${esc(p.id)}')">Edit</button>
        <button type="button" class="template-btn" style="color:red;" onclick="deletePerson('${esc(p.id)}')">Delete</button>
      </div>
    </div>
  `).join('') || '<p style="padding:1rem;">No matching records.</p>';
  if(all.length>adminPeopleLimit) listEl.insertAdjacentHTML('beforeend',`<div style="padding:.7rem;text-align:center;"><p style="font-size:.8rem;margin-bottom:.4rem;">Showing ${shown.length} of ${all.length}</p><button class="template-btn" type="button" id="adminPeopleLoadMore">Load 50 more</button></div>`);
  document.getElementById('adminPeopleLoadMore')?.addEventListener('click',()=>{adminPeopleLimit+=50;renderAdminPersonsList();});
}
document.getElementById('adminPeopleSearchInput')?.addEventListener('input',()=>{adminPeopleLimit=50;renderAdminPersonsList();});

function openAddPersonModal() {
  document.getElementById("personModalTitle").textContent = "Add Relative or Friend";
  document.getElementById("personForm").reset();
  document.getElementById("pId").value = "";
  document.getElementById("pKids").value = "";
  openModal("personEditModal");
}

function editPerson(id) {
  const p = siteData.persons.find(x => x.id === id);
  if (!p) return;
  document.getElementById("personModalTitle").textContent = "Edit Person";
  document.getElementById("pId").value = p.id;
  document.getElementById("pName").value = p.name || p.nameEn || p.nameTa || "";
  document.getElementById("pNameTa").value = p.nameTa || p.name || "";
  document.getElementById("pNameEn").value = p.nameEn || p.name || "";
  document.getElementById("pCategory").value = p.category || "relatives-bride";
  document.getElementById("pRole").value = p.roleEn || p.role || "";
  document.getElementById("pRoleTa").value = p.roleTa || p.role || "";
  document.getElementById("pKinship").value = p.kinship || "auto";
  document.getElementById("pKids").value = p.kidsEn || p.kids || "";
  document.getElementById("pKidsTa").value = p.kidsTa || p.kids || "";
  document.getElementById("pKidsEn").value = p.kidsEn || p.kids || "";
  document.getElementById("pLocation").value = p.locationEn || p.location || "";
  document.getElementById("pLocationTa").value = p.locationTa || p.location || "";
  document.getElementById("pNote").value = p.note || "";
  openModal("personEditModal");
}

function deletePerson(id) {
  if (confirm("Remove this person from the list?")) {
    siteData.persons = siteData.persons.filter(p => p.id !== id);
    persistSiteData();
    renderSiteContent();
    renderAdminPersonsList();
  }
}

document.getElementById("personForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.getElementById("pId").value || "p_" + Date.now();
  const nameFallback = document.getElementById("pName").value.trim();
  const nameTa = document.getElementById("pNameTa").value.trim();
  const nameEn = document.getElementById("pNameEn").value.trim();
  const name = nameEn || nameTa || nameFallback;
  const category = document.getElementById("pCategory").value;
  const role = document.getElementById("pRole").value.trim();
  const roleTa = document.getElementById("pRoleTa").value.trim();
  const roleEn = role; 
  const kinship = document.getElementById("pKinship")?.value || "auto";
  const kids = document.getElementById("pKids").value.trim();
  const kidsTa = document.getElementById("pKidsTa").value.trim();
  const kidsEn = document.getElementById("pKidsEn").value.trim() || kids;
  const location = document.getElementById("pLocation").value.trim();
  const locationTa = document.getElementById("pLocationTa").value.trim();
  const locationEn = location;
  const note = document.getElementById("pNote").value.trim();

  let photo = "assets/floral-invitation-border.webp";
  const existing = siteData.persons.find(p => p.id === id);
  if (existing && existing.photo) photo = existing.photo;

  const fileInput = document.getElementById("pPhotoFile");
  if (fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];
    photo = await new Promise((res) => {
      const r = new FileReader();
      r.onload = () => res(r.result);
      r.readAsDataURL(file);
    });
  }

  const newPerson = { id, name, nameTa: nameTa || name, nameEn: nameEn || name, category, role, roleTa: roleTa || role, roleEn, kinship, kids: kidsEn || kids, kidsTa: kidsTa || kids, kidsEn: kidsEn || kids, location: locationEn, locationTa: locationTa || location, locationEn, note, noteTa: existing?.noteTa || note, noteEn: note, photo };
  const idx = siteData.persons.findIndex(p => p.id === id);
  if (idx >= 0) siteData.persons[idx] = newPerson;
  else siteData.persons.push(newPerson);

  persistSiteData();
  renderSiteContent();
  renderAdminPersonsList();
  closeModal("personEditModal");
});

/* Manage RSVPs in Admin */
function renderAdminRsvpsList() {
  const countEl = document.getElementById("admRsvpCount");
  const listEl = document.getElementById("adminRsvpsList");
  if (countEl) countEl.textContent = siteData.rsvps.length;
  if (!listEl) return;

  if (siteData.rsvps.length === 0) {
    listEl.innerHTML = `<div style="text-align:center; padding:1rem; color:var(--ink-muted); font-size:0.85rem;">No RSVP submissions recorded yet.</div>`;
    return;
  }

  listEl.innerHTML = siteData.rsvps.map(r => `
    <div style="padding:0.4rem 0.2rem; border-bottom:1px solid #f0e0c0; font-size:0.82rem;">
      <strong style="color:var(--crimson);">${esc(r.name)}</strong>: 
      <span>${r.attendance === 'attending-yes' ? '🌸 Attending' : '🙏 Regret'} (${r.count} guest${r.count > 1 ? 's' : ''})</span>
      ${r.events && r.events.length ? `<span style="color:var(--gold-dark);"> · Events: ${esc(r.events.join(', '))}</span>` : ''}
      ${r.note ? `<div style="font-style:italic; color:var(--ink-muted);">Note: "${esc(r.note)}"</div>` : ''}
    </div>
  `).join('');
}

document.getElementById("admExportRsvpsBtn")?.addEventListener("click", () => {
  if (siteData.rsvps.length === 0) {
    alert("No RSVPs to export.");
    return;
  }
  const csvRows = ["Name,Attendance,Guest Count,Events,Note,Timestamp"];
  siteData.rsvps.forEach(r => {
    csvRows.push([
      `"${r.name || ''}"`,
      `"${r.attendance || ''}"`,
      `"${r.count || 0}"`,
      `"${(r.events || []).join(';')}"`,
      `"${(r.note || '').replace(/"/g, '""')}"`,
      `"${r.timestamp || ''}"`
    ].join(","));
  });
  const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `wedding-rsvps-${Date.now()}.csv`;
  a.click();
});

document.getElementById("admClearRsvpsBtn")?.addEventListener("click", () => {
  if (confirm("Clear all recorded RSVP entries?")) {
    siteData.rsvps = [];
    persistSiteData();
    renderAdminRsvpsList();
  }
});

/* Export / Import Backup */
function exportDataBackup() {
  const blob = new Blob([JSON.stringify(siteData, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `madurai-wedding-backup-${Date.now()}.json`;
  a.click();
}

document.getElementById("importJsonInput")?.addEventListener("change", async (e) => {
  const f = e.target.files[0];
  if (!f) return;
  try {
    const text = await f.text();
    siteData = JSON.parse(text);
    persistSiteData();
    renderSiteContent();
    alert("Backup imported successfully!");
  } catch(err) {
    alert("Invalid backup file.");
  }
  e.target.value = "";
});

/* Modal Open/Close helpers */
function openModal(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// Close modals when clicking overlay background or pressing Escape
document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal(overlay.id);
    }
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.open").forEach(m => closeModal(m.id));
  }
  if (document.getElementById("lightboxModal")?.classList.contains("open")) {
    if (e.key === "ArrowLeft") openLightboxByIndex(activeLightboxIndex - 1);
    if (e.key === "ArrowRight") openLightboxByIndex(activeLightboxIndex + 1);
  }
});

/* ==========================================================================
   INITIALIZE ON PAGE LOAD
   ========================================================================== */
window.addEventListener("DOMContentLoaded", () => {
  renderSiteContent();
  checkPersonalizedUrl();
});

/* Bulk CSV import for large relative/friend directories. Supports bilingual fields and kinship subtopics. */
function parsePeopleCsv(text) {
  const rows=[]; let row=[], field='', quoted=false;
  for(let i=0;i<text.length;i++) {
    const ch=text[i], next=text[i+1];
    if(ch==='"' && quoted && next==='"'){field+='"';i++;}
    else if(ch==='"'){quoted=!quoted;}
    else if(ch===',' && !quoted){row.push(field.trim());field='';}
    else if((ch==='\n'||ch==='\r')&&!quoted){if(ch==='\r'&&next==='\n')i++;row.push(field.trim());field='';if(row.some(v=>v!==''))rows.push(row);row=[];}
    else field+=ch;
  }
  row.push(field.trim()); if(row.some(v=>v!==''))rows.push(row);
  if(!rows.length)return [];
  const headers=rows.shift().map(h=>h.toLowerCase().replace(/^\ufeff/,''));
  return rows.map(cols=>Object.fromEntries(headers.map((h,i)=>[h,cols[i]||''])));
}
document.getElementById('downloadPeopleCsvTemplateBtn')?.addEventListener('click',()=>{
  const csv='name,nameTa,nameEn,category,role,roleTa,kids,kidsTa,kidsEn,location,locationTa,locationEn,kinship,photo,note,id\n"Mr. A. Selvam – Thamila","திரு. A. செல்வம் – தாமிலா","Mr. A. Selvam – Thamila",relatives-groom,Engineering,பொறியியல்,,,,, ,groom-sisters-samayars,, ,\n';
  const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));
  const a=document.createElement('a');a.href=url;a.download='madurai-relatives-template.csv';a.click();URL.revokeObjectURL(url);
});
document.getElementById('importPeopleCsvInput')?.addEventListener('change',async e=>{
  const file=e.target.files?.[0]; if(!file)return;
  try {
    const rows=parsePeopleCsv(await file.text());
    const validCats=new Set(GROUP_CONFIG.map(g=>g.id));
    let added=0, updated=0;
    rows.forEach((r,index)=>{
      if(!r.name)return;
      const category=validCats.has(r.category)?r.category:'relatives-bride';
      const match=siteData.persons.find(p=>(r.id&&p.id===r.id)||(!r.id&&p.name.toLocaleLowerCase()===r.name.toLocaleLowerCase()&&p.category===category));
      const allowedKinships=new Set(KINSHIP_CONFIG.map(k=>k.id));
      const person={id:r.id||match?.id||`csv_${Date.now()}_${index}_${Math.random().toString(36).slice(2,7)}`,name:r.nameEn||r.name||r.nameTa,nameTa:r.nameTa||r.name||'',nameEn:r.nameEn||r.name||'',category,role:r.roleEn||r.role||'Family member',roleTa:r.roleTa||r.role||'',roleEn:r.roleEn||r.role||'',kids:r.kidsEn||r.kids||'',kidsTa:r.kidsTa||r.kids||'',kidsEn:r.kidsEn||r.kids||'',location:r.locationEn||r.location||'Madurai',locationTa:r.locationTa||r.location||'',locationEn:r.locationEn||r.location||'',kinship:allowedKinships.has(r.kinship)?r.kinship:(match?.kinship||'auto'),photo:r.photo||match?.photo||'',note:r.note||'',noteTa:r.noteTa||'',noteEn:r.noteEn||r.note||''};
      if(match){Object.assign(match,person);updated++;}else{siteData.persons.push(person);added++;}
    });
    persistSiteData(); renderSiteContent(); renderAdminPersonsList();
    const status=document.getElementById('admStatus'); if(status)status.textContent=`CSV imported: ${added} added, ${updated} updated. Total directory records: ${siteData.persons.length}.`;
    alert(`CSV import complete. ${added} added, ${updated} updated. Total: ${siteData.persons.length}.`);
  } catch(err){alert('Could not import this CSV. Please use the downloaded template and check its headers.');}
  e.target.value='';
});


/* V16 mobile UX: place only Language and Music in the bottom navigation row.
   The bell, audio volume, motion preset and auto-scroll speed controls remain desktop-only. */
(function setupCompactMobileControls() {
  const controls = document.querySelector('.floating-actions');
  const dock = document.getElementById('smartFloatingDock');
  const lang = document.getElementById('langToggleBtn');
  const music = document.getElementById('musicToggleBtn');
  const auto = document.getElementById('autoScrollBtn');
  const max = document.getElementById('scrollSpeedBtn');
  if (!controls || !dock || !lang || !music) return;
  const mobileQuery = window.matchMedia('(max-width: 700px)');
  const topItem = () => dock.querySelector('.dock-item[title="Top"]') || null;
  function applyLayout() {
    const top = topItem();
    if (mobileQuery.matches) {
      // Phone users get one consolidated bottom bar: navigation + auto-scroll + MAX + language + music.
      [auto, max, lang, music].filter(Boolean).forEach(button => {
        button.classList.add('dock-item', 'mobile-dock-control');
        if (top) dock.insertBefore(button, top); else dock.appendChild(button);
      });
      const musicText = document.getElementById('musicText');
      if (musicText) musicText.textContent = currentLang === 'ta' ? 'இசை' : 'Music';
      const langText = document.getElementById('langText');
      if (langText) langText.textContent = currentLang === 'ta' ? 'English' : 'தமிழ்';
      if (auto) auto.title = currentLang === 'ta' ? 'தானியங்கி உருளலை தொடங்கு அல்லது நிறுத்து' : 'Start or stop auto-scroll';
      if (max) max.title = currentLang === 'ta' ? 'அதிகபட்ச உருள் வேகம்' : 'Set auto-scroll to maximum speed';
    } else {
      [lang, music].forEach(button => { button.classList.remove('dock-item', 'mobile-dock-control'); controls.insertBefore(button, controls.firstChild); });
      if (auto) auto.classList.remove('mobile-dock-control');
      if (max) max.classList.remove('mobile-dock-control');
      const musicText = document.getElementById('musicText');
      if (musicText) musicText.textContent = isMusicPlaying ? (currentLang === 'ta' ? 'இசை' : 'Music On') : (currentLang === 'ta' ? 'திருமண இசை' : 'Wedding Music');
    }
  }
  applyLayout();
  if (mobileQuery.addEventListener) mobileQuery.addEventListener('change', applyLayout);
  else if (mobileQuery.addListener) mobileQuery.addListener(applyLayout);
})();


/* V28 refinements: venue map shortcuts and remove immediate-family category cards. */
(function v28VenueAndFamilyFixes(){
  const mapUrl = "https://maps.app.goo.gl/GA7fjzCVVkBG7dwv7";
  ["portalVenueValue","heroVenueSub","venueTitle","venueFullAddress"].forEach(id=>{
    const el=document.getElementById(id); if(!el) return;
    el.setAttribute("role","link"); el.setAttribute("tabindex","0"); el.setAttribute("title","Open venue in Google Maps");
    el.style.cursor="pointer"; el.style.textDecoration="underline"; el.style.textUnderlineOffset="3px";
    el.addEventListener("click",()=>window.open(mapUrl,"_blank","noopener"));
    el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();window.open(mapUrl,"_blank","noopener");}});
  });
  document.querySelectorAll('[data-kinship="parents-immediate"], [data-category="parents-immediate"]').forEach(el=>el.remove());
})();
