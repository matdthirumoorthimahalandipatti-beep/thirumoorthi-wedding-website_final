import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';
import {
  getRoyalTitle,
  HERITAGE_ASSETS,
  WEDDING_CONFIG,
  type Lang,
  type OracleFortune,
  type TeamSide,
} from '../data/weddingData';

export interface InvitationExportParams {
  lang: Lang;
  guestName: string;
  team?: TeamSide;
  totalScore?: number;
  selectedFortune?: OracleFortune;
}

function loadImg(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function drawWrappedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  cx: number,
  startY: number,
  maxWidth: number,
  lineHeight: number
): number {
  const words = text.split(' ');
  let line = '';
  let y = startY;
  for (let i = 0; i < words.length; i++) {
    const candidate = line + words[i] + ' ';
    if (ctx.measureText(candidate).width > maxWidth && i > 0) {
      ctx.fillText(line.trim(), cx, y);
      line = words[i] + ' ';
      y += lineHeight;
    } else {
      line = candidate;
    }
  }
  if (line.trim()) {
    ctx.fillText(line.trim(), cx, y);
    y += lineHeight;
  }
  return y;
}

export async function generateWebsiteQrDataUrl(size = 240): Promise<string> {
  return QRCode.toDataURL(WEDDING_CONFIG.websiteUrl, {
    width: size,
    margin: 1,
    color: {
      dark: '#3a0815',
      light: '#fff9eb',
    },
    errorCorrectionLevel: 'M',
  });
}

export async function generateVenueMapQrDataUrl(size = 240): Promise<string> {
  return QRCode.toDataURL(WEDDING_CONFIG.mapsUrl, {
    width: size,
    margin: 1,
    color: {
      dark: '#631226',
      light: '#fff9eb',
    },
    errorCorrectionLevel: 'M',
  });
}

export async function renderPersonalizedInvitationCanvas({
  lang,
  guestName,
  team,
  totalScore = 0,
  selectedFortune,
}: InvitationExportParams): Promise<HTMLCanvasElement> {
  const W = 1080;
  const H = 1920; // Matches ornate-goddess-invitation-frame & IG/WhatsApp Story 9:16
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#fff9eb');
  grad.addColorStop(1, '#f4e0b8');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  const [frameImg, webQrUrl, venueQrUrl] = await Promise.all([
    loadImg(HERITAGE_ASSETS.goddessFrame),
    generateWebsiteQrDataUrl(220),
    generateVenueMapQrDataUrl(220),
  ]);
  if (frameImg) {
    ctx.drawImage(frameImg, 0, 0, W, H);
  }
  const [webQrImg, venueQrImg] = await Promise.all([
    loadImg(webQrUrl),
    loadImg(venueQrUrl),
  ]);

  const cleanGuest =
    guestName.trim() && guestName.trim() !== 'Esteemed Guest'
      ? guestName.trim()
      : lang === 'ta'
        ? 'அன்புள்ள விருந்தினர்கள்'
        : 'Respected Guests';

  // Exact clear cream parchment bounds of ornate-goddess-invitation-frame:
  // Horizontal: 26%..74% (x: 281..799 => max safe width 480px centered at 540)
  // Vertical: 10%..92% (y: 192..1766)
  ctx.textAlign = 'center';
  const safeWidth = 475;
  let y = 210;

  // 1. Sacred Deities Invocation
  ctx.fillStyle = '#631226';
  ctx.font = '700 16px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  y = drawWrappedText(
    ctx,
    lang === 'ta'
      ? 'ஸ்ரீ வெற்றி விநாயகர் · பொதிகுளம் முத்துமாரியம்மன் · ஊர் காவலன் சாமி துணை'
      : 'SRI VETRI VINAYAGAR · POTHIKULAM MUTHUMARI AMMAN · OOR KAVALAN SAMY',
    W / 2,
    y,
    safeWidth,
    22
  );

  y += 10;
  ctx.fillStyle = '#8c5a12';
  ctx.font = '700 22px "Noto Sans Tamil", "Fraunces", serif';
  ctx.fillText(
    lang === 'ta' ? '❖ மங்கள திருமண அழைப்பிதழ் ❖' : '❖ AUSPICIOUS WEDDING INVITATION ❖',
    W / 2,
    y
  );

  // 2. Personalized Guest & Family/Friends Welcome
  y += 32;
  ctx.fillStyle = '#631226';
  ctx.font = '700 17px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta' ? '🌸 அன்புடன் வரவேற்கிறோம் 🌸' : '🌸 CORDIALLY WELCOMING 🌸',
    W / 2,
    y
  );

  y += 34;
  ctx.fillStyle = '#3a0815';
  ctx.font = '700 32px "Noto Sans Tamil", "Fraunces", serif';
  y = drawWrappedText(ctx, `${cleanGuest}!`, W / 2, y, safeWidth, 38);

  y += 4;
  ctx.fillStyle = '#4e2318';
  ctx.font = '600 15px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  y = drawWrappedText(
    ctx,
    lang === 'ta'
      ? 'தங்கள் வருகையே எங்கள் இல்லத்து விழாவின் பெருமகிழ்ச்சி! குடும்பத்தினர் மற்றும் நண்பர்களுடன் வருகை தர அன்புடன் அழைக்கின்றோம்.'
      : 'Your presence brings immense joy to our family celebration! We warmly invite you to join us with family & friends.',
    W / 2,
    y,
    safeWidth,
    21
  );

  // 3. Divider Ornament
  y += 10;
  ctx.fillStyle = '#c9932d';
  ctx.font = '700 18px serif';
  ctx.fillText('❧ ❖ ❧', W / 2, y);

  // 4. Bride & Parents Lineage
  y += 28;
  ctx.fillStyle = '#631226';
  ctx.font = '600 15px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta'
      ? 'திரு. A. மூர்த்தி & திருமதி M. அலமேலு அவர்களின் அன்பு மகள்'
      : 'Daughter of Thiru. A. Moorthi & Tmt. M. Alamelu',
    W / 2,
    y
  );

  y += 42;
  ctx.fillStyle = '#3a0815';
  ctx.font = '700 44px "Noto Sans Tamil", "Fraunces", serif';
  ctx.fillText(lang === 'ta' ? WEDDING_CONFIG.brideTa : WEDDING_CONFIG.bride, W / 2, y);

  y += 22;
  ctx.fillStyle = '#8c5a12';
  ctx.font = '600 14px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta' ? WEDDING_CONFIG.brideQualificationTa : WEDDING_CONFIG.brideQualification,
    W / 2,
    y
  );

  y += 26;
  ctx.fillStyle = '#8c5a12';
  ctx.font = 'italic 700 22px "Noto Sans Tamil", "Fraunces", serif';
  ctx.fillText(lang === 'ta' ? '— மணக்கும் —' : '— weds —', W / 2, y);

  // 5. Groom & Parents Lineage
  y += 38;
  ctx.fillStyle = '#3a0815';
  ctx.font = '700 44px "Noto Sans Tamil", "Fraunces", serif';
  ctx.fillText(lang === 'ta' ? WEDDING_CONFIG.groomTa : WEDDING_CONFIG.groomShort, W / 2, y);

  y += 22;
  ctx.fillStyle = '#8c5a12';
  ctx.font = '600 14px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta' ? WEDDING_CONFIG.groomQualificationTa : WEDDING_CONFIG.groomQualification,
    W / 2,
    y
  );

  y += 24;
  ctx.fillStyle = '#631226';
  ctx.font = '600 15px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta'
      ? 'திரு. S. சுரேஷ் & திருமதி வள்ளி அவர்களின் அன்பு மகன்'
      : 'Son of Thiru. S. Suresh & Tmt. Valli',
    W / 2,
    y
  );

  // 6. Auspicious Thithi, Nakshatra & Lagnam Notice
  y += 30;
  ctx.fillStyle = '#5a1a12';
  ctx.font = '600 14px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  y = drawWrappedText(
    ctx,
    lang === 'ta' ? WEDDING_CONFIG.auspiciousNoticeTa : WEDDING_CONFIG.auspiciousNoticeEn,
    W / 2,
    y,
    safeWidth,
    20
  );

  // 7. Engagement Ceremony Box (Nichayathartham)
  y += 10;
  ctx.save();
  ctx.fillStyle = 'rgba(255, 246, 222, 0.96)';
  ctx.strokeStyle = '#c9932d';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(295, y, 490, 96, 14);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = '#631226';
  ctx.font = '700 17px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta' ? `❖ ${WEDDING_CONFIG.engagementTitleTa} ❖` : `❖ ${WEDDING_CONFIG.engagementTitleEn} ❖`,
    W / 2,
    y + 24
  );

  ctx.fillStyle = '#8c5a12';
  ctx.font = '700 15px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta' ? WEDDING_CONFIG.nichayatharthamTa : WEDDING_CONFIG.nichayatharthamEn,
    W / 2,
    y + 48
  );

  ctx.fillStyle = '#4e2318';
  ctx.font = '600 13px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  drawWrappedText(
    ctx,
    lang === 'ta' ? WEDDING_CONFIG.engagementDescTa : WEDDING_CONFIG.engagementDescEn,
    W / 2,
    y + 72,
    460,
    18
  );

  // 8. Highlighted Sacred Muhurtham Box (Gold-Maroon Grand Banner)
  y += 110;
  ctx.save();
  const muhurthamGrad = ctx.createLinearGradient(295, y, 785, y + 110);
  muhurthamGrad.addColorStop(0, '#7c1428');
  muhurthamGrad.addColorStop(0.5, '#631226');
  muhurthamGrad.addColorStop(1, '#7c1428');
  ctx.fillStyle = muhurthamGrad;
  ctx.strokeStyle = '#f7df94';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(295, y, 490, 110, 16);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = '#f7df94';
  ctx.font = '700 20px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta'
      ? '✨ திருமாங்கல்ய தாரணம் — சுப முகூர்த்தம் ✨'
      : '✨ SACRED MUHURTHAM — THIRUMANGALYAM ✨',
    W / 2,
    y + 30
  );
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 18px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta'
      ? 'ஞாயிறு, 22.11.2026 · காலை 6:15 – 7:15 மணிக்குள்'
      : 'Sunday, 22 Nov 2026 · 6:15 – 7:15 AM',
    W / 2,
    y + 58
  );
  ctx.fillStyle = '#ffefa8';
  ctx.font = '700 16px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta'
      ? 'MATD திருமூர்த்தி மஹால், ஆண்டிப்பட்டி பங்களா, டி. வாடிப்பட்டி, மதுரை'
      : 'MATD Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti, Madurai',
    W / 2,
    y + 88
  );

  // 9. Wedding Feast / Virundhu Box
  y += 122;
  ctx.save();
  ctx.fillStyle = 'rgba(255, 248, 228, 0.96)';
  ctx.strokeStyle = '#c9932d';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(295, y, 490, 86, 14);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = '#631226';
  ctx.font = '700 17px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta'
      ? '🍽️ அறுசுவை மங்கள சைவத் திருமண விருந்து 🍽️'
      : '🍽️ Traditional Madurai Wedding Feast (Virundhu) 🍽️',
    W / 2,
    y + 26
  );
  ctx.fillStyle = '#8c5a12';
  ctx.font = '700 15px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta'
      ? 'காலை 8:00 மணி முதல் அறுசுவை சைவ உணவு உபசரிப்பு'
      : 'Breakfast & Grand Traditional Feast from 8:00 AM onwards',
    W / 2,
    y + 52
  );
  ctx.fillStyle = '#4e2318';
  ctx.font = '600 13px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta'
      ? 'உணவுக் கூடம், MATD திருமூர்த்தி மஹால், மதுரை'
      : 'Dining Hall, MATD Thirumoorthi Mahal, Madurai',
    W / 2,
    y + 74
  );

  // 10. Bus Routes Line
  y += 100;
  ctx.fillStyle = '#631226';
  ctx.font = '700 13px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta'
      ? '🚌 பேருந்து: மதுரை பெரியார் நிலையம் To வாடிப்பட்டி : 71, 41, 41A, 41K · ரயில்: மதுரை (MDU)'
      : '🚌 Bus Routes: Madurai Periyar to Vadipatti : 71, 41, 41A, 41K · Railway: Madurai (MDU)',
    W / 2,
    y
  );

  // 11. Dual QR Codes Section (Venue Google Maps QR + Wedding Website QR)
  const qrBoxY = Math.max(y + 12, 1480);
  ctx.save();
  ctx.fillStyle = 'rgba(255, 250, 238, 0.95)';
  ctx.strokeStyle = '#c9932d';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.roundRect(295, qrBoxY, 490, 218, 16);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // QR Box Header
  ctx.fillStyle = '#631226';
  ctx.font = '700 15px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta'
      ? '📲 டிஜிட்டல் வழிகாட்டி & இணையதள அழைப்பிதழ்'
      : '📲 DIGITAL VENUE MAP & ONLINE WEDDING INVITE',
    W / 2,
    qrBoxY + 24
  );

  // Left Column: Venue Google Maps QR
  if (venueQrImg) {
    ctx.drawImage(venueQrImg, 315, qrBoxY + 36, 120, 120);
  }
  ctx.textAlign = 'center';
  ctx.fillStyle = '#631226';
  ctx.font = '700 14px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(lang === 'ta' ? '📍 மண்டபம் GPS' : '📍 Venue Map', 375, qrBoxY + 172);

  ctx.fillStyle = '#3a0815';
  ctx.font = '600 11.5px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(lang === 'ta' ? 'Google Maps வழி' : 'Google Maps Route', 375, qrBoxY + 190);

  ctx.fillStyle = '#8c5a12';
  ctx.font = '700 10.5px "JetBrains Mono", monospace';
  ctx.fillText('MATD Mahal, Vadipatti', 375, qrBoxY + 206);

  // Right Column: Wedding Website QR
  if (webQrImg) {
    ctx.drawImage(webQrImg, 555, qrBoxY + 36, 120, 120);
  }
  ctx.textAlign = 'center';
  ctx.fillStyle = '#631226';
  ctx.font = '700 14px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(lang === 'ta' ? '📲 திருமண தளம்' : '📲 Web Invite', 615, qrBoxY + 172);

  ctx.fillStyle = '#3a0815';
  ctx.font = '600 11.5px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(lang === 'ta' ? 'இணைய அழைப்பிதழ் & பாடல்' : 'Online Songs & Live Deck', 615, qrBoxY + 190);

  ctx.fillStyle = '#8c5a12';
  ctx.font = '700 10.5px "JetBrains Mono", monospace';
  ctx.fillText('thirumoorthi-gourps...', 615, qrBoxY + 206);

  return canvas;
}

export async function downloadPersonalizedInvitationPng(
  params: InvitationExportParams
): Promise<void> {
  const canvas = await renderPersonalizedInvitationCanvas(params);
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
  if (!blob) return;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Thirumoorthi-Wedding-Invitation.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export async function downloadPersonalizedInvitationPdf(
  params: InvitationExportParams
): Promise<void> {
  const canvas = await renderPersonalizedInvitationCanvas(params);
  const imgData = canvas.toDataURL('image/jpeg', 0.94);

  // 1080 x 1920 scaled into portrait PDF points (exact 9:16 proportions)
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: [540, 960],
  });
  pdf.addImage(imgData, 'JPEG', 0, 0, 540, 960);
  pdf.save('Thirumoorthi-Wedding-Invitation.pdf');
}

export async function shareInvitationToInstagram(
  params: InvitationExportParams
): Promise<'shared' | 'downloaded'> {
  const canvas = await renderPersonalizedInvitationCanvas(params);
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
  if (!blob) return 'downloaded';

  const file = new File([blob], 'Thirumoorthi-Wedding-Invite-Story.png', { type: 'image/png' });
  const nav = navigator as Navigator & {
    canShare?: (data?: ShareData) => boolean;
  };

  if (nav.share && (!nav.canShare || nav.canShare({ files: [file] }))) {
    try {
      await nav.share({
        files: [file],
        title: 'M. Thirisha & Siva Shankar Wedding Invitation',
        text: `You're invited! Open the 3D wedding site: ${WEDDING_CONFIG.websiteUrl}`,
      });
      return 'shared';
    } catch {
      // User dismissed or platform rejected file share -> fall back to download
    }
  }

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Thirumoorthi-Wedding-Invite-Instagram-Story.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);
  return 'downloaded';
}

export async function shareInvitationToWhatsApp(
  params: InvitationExportParams
): Promise<'shared' | 'opened_link'> {
  const cleanGuest =
    params.guestName.trim() && params.guestName.trim() !== 'Esteemed Guest'
      ? params.guestName.trim()
      : params.lang === 'ta'
        ? 'அன்புள்ள குடும்பத்தினர் & நண்பர்கள்'
        : 'Esteemed Guest';

  const msgText =
    params.lang === 'ta'
      ? `🌸 அன்புடன் வரவேற்கிறோம்: ${cleanGuest}! 🌸\nM. திரிஷா & S. சிவசங்கர் திருமணப் பெருவிழா\n📅 22 நவம்பர் 2026 · ⏰ காலை 6:15 – 7:15\n🏛️ MATD திருமூர்த்தி மஹால், மதுரை\n🔗 அழைப்பிதழ் தளம்: ${WEDDING_CONFIG.websiteUrl}`
      : `🌸 Cordially Welcoming: ${cleanGuest}! 🌸\nM. Thirisha & S. Siva Shankar Wedding\n📅 Sunday, 22 Nov 2026 · ⏰ 6:15 – 7:15 AM\n🏛️ MATD Thirumoorthi Mahal, Madurai\n🔗 Open Invite: ${WEDDING_CONFIG.websiteUrl}`;

  const canvas = await renderPersonalizedInvitationCanvas(params);
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));

  if (blob) {
    const file = new File([blob], 'Thirumoorthi-Wedding-Invite.png', { type: 'image/png' });
    const nav = navigator as Navigator & {
      canShare?: (data?: ShareData) => boolean;
    };
    if (nav.share && (!nav.canShare || nav.canShare({ files: [file] }))) {
      try {
        await nav.share({
          files: [file],
          title: 'Thirumoorthi Veettu Thirukalyanam',
          text: msgText,
        });
        return 'shared';
      } catch {
        // Fallback to WhatsApp URL with direct invite text
      }
    }
  }

  window.open(`https://wa.me/?text=${encodeURIComponent(msgText)}`, '_blank', 'noopener,noreferrer');
  return 'opened_link';
}

export function downloadOriginalPatrikaImage(): void {
  const a = document.createElement('a');
  a.href = HERITAGE_ASSETS.patrikaScan;
  a.download = 'MATD-Thirumoorthi-Illam-Wedding-Patrika.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
