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

  const [frameImg, qrUrl] = await Promise.all([
    loadImg(HERITAGE_ASSETS.goddessFrame),
    generateWebsiteQrDataUrl(220),
  ]);
  if (frameImg) {
    ctx.drawImage(frameImg, 0, 0, W, H);
  }
  const qrImg = await loadImg(qrUrl);

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
  const safeWidth = 470;
  let y = 216;

  // 1. Sacred Deities Invocation
  ctx.fillStyle = '#631226';
  ctx.font = '700 16px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  y = drawWrappedText(
    ctx,
    lang === 'ta'
      ? 'ஸ்ரீ வெற்றி விநாயகர் · பொதிகுளம் முத்துமாரியம்மன் துணை'
      : 'SRI VETRI VINAYAGAR · POTHIKULAM MUTHUMARI AMMAN',
    W / 2,
    y,
    safeWidth,
    22
  );

  y += 10;
  ctx.fillStyle = '#8c5a12';
  ctx.font = '700 20px "Noto Sans Tamil", "Fraunces", serif';
  ctx.fillText(
    lang === 'ta' ? '❖ மங்கள திருமண அழைப்பு ❖' : '❖ AUSPICIOUS INVITATION ❖',
    W / 2,
    y
  );

  // 2. Personalized Guest & Family/Friends Welcome
  y += 34;
  ctx.fillStyle = '#631226';
  ctx.font = '700 16px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta' ? '🌸 அன்புடன் வரவேற்கிறோம் 🌸' : '🌸 CORDIALLY WELCOMING 🌸',
    W / 2,
    y
  );

  y += 32;
  ctx.fillStyle = '#3a0815';
  ctx.font = '700 28px "Noto Sans Tamil", "Fraunces", serif';
  y = drawWrappedText(ctx, `${cleanGuest}!`, W / 2, y, safeWidth, 34);

  y += 4;
  ctx.fillStyle = '#4e2318';
  ctx.font = '600 15px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  y = drawWrappedText(
    ctx,
    lang === 'ta'
      ? 'உங்கள் அன்பான குடும்பத்தினர் மற்றும் நண்பர்கள் அனைவருடன் வருகை தர அன்புடன் அழைக்கின்றோம்.'
      : 'We warmly welcome you to come with your family and friends to celebrate with us.',
    W / 2,
    y,
    safeWidth,
    21
  );

  // 3. Divider Ornament
  y += 12;
  ctx.fillStyle = '#c9932d';
  ctx.font = '700 18px serif';
  ctx.fillText('❧ ❖ ❧', W / 2, y);

  // 4. Bride & Groom
  y += 38;
  ctx.fillStyle = '#3a0815';
  ctx.font = '700 40px "Noto Sans Tamil", "Fraunces", serif';
  ctx.fillText(lang === 'ta' ? WEDDING_CONFIG.brideTa : WEDDING_CONFIG.bride, W / 2, y);

  y += 30;
  ctx.fillStyle = '#8c5a12';
  ctx.font = 'italic 600 22px "Noto Sans Tamil", "Fraunces", serif';
  ctx.fillText(lang === 'ta' ? 'மணக்கும்' : 'weds', W / 2, y);

  y += 40;
  ctx.fillStyle = '#3a0815';
  ctx.font = '700 40px "Noto Sans Tamil", "Fraunces", serif';
  ctx.fillText(lang === 'ta' ? WEDDING_CONFIG.groomTa : WEDDING_CONFIG.groomShort, W / 2, y);

  // 5. Detailed Auspicious Tamil/English Function Text
  y += 34;
  ctx.fillStyle = '#631226';
  ctx.font = '700 15px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  y = drawWrappedText(
    ctx,
    lang === 'ta' ? WEDDING_CONFIG.auspiciousNoticeTa : WEDDING_CONFIG.auspiciousNoticeEn,
    W / 2,
    y,
    safeWidth,
    21
  );

  // 6. Engagement Ceremony Box (Nichayathartham — Saturday 21 Nov 2026)
  y += 10;
  ctx.save();
  ctx.fillStyle = 'rgba(255, 245, 219, 0.96)';
  ctx.strokeStyle = '#c9932d';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(298, y, 484, 146, 14);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = '#631226';
  ctx.font = '700 17px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta' ? `❖ ${WEDDING_CONFIG.engagementTitleTa} ❖` : `❖ ${WEDDING_CONFIG.engagementTitleEn} ❖`,
    W / 2,
    y + 26
  );

  ctx.fillStyle = '#8c5a12';
  ctx.font = '700 15px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta' ? WEDDING_CONFIG.nichayatharthamTa : WEDDING_CONFIG.nichayatharthamEn,
    W / 2,
    y + 52
  );

  ctx.fillStyle = '#3a0815';
  ctx.font = '600 14px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta' ? WEDDING_CONFIG.engagementDressTa : WEDDING_CONFIG.engagementDressEn,
    W / 2,
    y + 76
  );

  ctx.fillStyle = '#4e2318';
  ctx.font = '600 14px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  drawWrappedText(
    ctx,
    lang === 'ta' ? WEDDING_CONFIG.engagementDescTa : WEDDING_CONFIG.engagementDescEn,
    W / 2,
    y + 102,
    452,
    20
  );

  // 7. Muhurtham & Venue Pill (kept strictly inside x: 295..785)
  y += 162;
  ctx.save();
  ctx.fillStyle = '#631226';
  ctx.strokeStyle = '#d4a237';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(298, y, 484, 82, 14);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = '#f7df94';
  ctx.font = '700 17px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta'
      ? 'முகூர்த்தம்: 22.11.2026 · காலை 6:15 – 7:15'
      : 'Muhurtham: 22 Nov 2026 · 6:15 – 7:15 AM',
    W / 2,
    y + 30
  );
  ctx.fillStyle = '#ffffff';
  ctx.font = '600 15px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta'
      ? 'MATD திருமூர்த்தி மஹால், டி. வாடிப்பட்டி, மதுரை'
      : 'MATD Thirumoorthi Mahal, T. Vadipatti, Madurai',
    W / 2,
    y + 60
  );

  // 8. Optional Royal Game Score & Oracle Blessing
  y += 108;
  if (totalScore > 0) {
    const title = getRoyalTitle(totalScore, lang);
    const sideTxt =
      team === 'mappillai'
        ? lang === 'ta'
          ? 'மாப்பிள்ளை அணி'
          : 'Team Mappillai'
        : lang === 'ta'
          ? 'பொண்ணு அணி'
          : 'Team Ponnu';
    ctx.fillStyle = '#7c1428';
    ctx.font = '700 15px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
    y = drawWrappedText(ctx, `👑 ${sideTxt} · ${title} (${totalScore} pts)`, W / 2, y, safeWidth, 20);
  }
  if (selectedFortune) {
    ctx.fillStyle = '#4e2318';
    ctx.font = 'italic 600 15px "Noto Sans Tamil", "Fraunces", serif';
    y = drawWrappedText(
      ctx,
      `${selectedFortune.emoji} “${lang === 'ta' ? selectedFortune.ta : selectedFortune.en}”`,
      W / 2,
      y + 2,
      safeWidth,
      20
    );
  }

  // 9. QR Code Box strictly centered inside x: 300..780 above bottom lotus
  const qrBoxY = Math.max(y + 12, 1525);
  ctx.save();
  ctx.fillStyle = 'rgba(255, 250, 238, 0.92)';
  ctx.strokeStyle = '#c9932d';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(300, qrBoxY, 480, 174, 16);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  if (qrImg) {
    ctx.drawImage(qrImg, 322, qrBoxY + 17, 140, 140);
  }

  ctx.textAlign = 'left';
  ctx.fillStyle = '#631226';
  ctx.font = '700 18px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta' ? '📲 3D அழைப்பிதழ் தளம்' : '📲 OPEN 3D WEBSITE',
    478,
    qrBoxY + 52
  );

  ctx.fillStyle = '#3a0815';
  ctx.font = '600 15px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    lang === 'ta' ? 'QR ஸ்கேன் செய்து காண்க:' : 'Scan QR to visit invite:',
    478,
    qrBoxY + 86
  );

  ctx.fillStyle = '#8c5a12';
  ctx.font = '700 15px "JetBrains Mono", monospace';
  ctx.fillText('thirumoorthi-wedding-', 478, qrBoxY + 118);
  ctx.fillText('website.pages.dev', 478, qrBoxY + 142);

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
