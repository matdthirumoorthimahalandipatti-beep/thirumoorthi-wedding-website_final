# Thirumoorthi Veettu Thirukalyanam — V29

Mobile-first single-page wedding invitation for the **Thirumoorthi Groups Family Function** celebrating **M. Thirisha & Siva Shankar**.

## Run locally

1. Keep `index.html`, `style.css`, `script.js`, and the entire `assets/` folder together.
2. On a laptop, open a terminal in this folder and run:
   ```bash
   python -m http.server 8000 --bind 0.0.0.0
   ```
3. Open `http://127.0.0.1:8000` on the laptop. To test on a phone, connect both devices to the same Wi-Fi and open `http://YOUR-LAPTOP-IP:8000` on the phone.
4. Do not close the terminal while testing.

You can also use VS Code with Live Server.

## Confirmed event details

- Nichayathartham: 6:30 PM, Saturday, 21 November 2026.
- Muhurtham: 6:15–7:15 AM, Sunday, 22 November 2026.
- Wedding feast: 8:00 AM onwards, Sunday, 22 November 2026.
- Venue: MATD Thirumoorthi Mahal, Andipatti Bungalow, T. Vadipatti, Madurai.
- Map: https://maps.app.goo.gl/GA7fjzCVVkBG7dwv7
- Deities: Sri Vetri Vinayagar Thunai, பொதிகுளம் முத்துமாரியம்மன் / Pothikulam Muthumari Amman, and Oor Kavalan Samy.

## V29 changes

- Reduced the gap between opening-page function details and the guest-name form.
- Ensured Sri Vetri Vinayagar Thunai and பொதிகுளம் முத்துமாரியம்மன் appear on both the opening screen and home hero, in Tamil or English according to the selected language.
- Video title is now “Wedding Ceremony” / “திருமண விழா”.
- Removed the family-reunion tagline and upcoming-ceremony line from Home.
- Moved Family Admin Login from Home to the final Notes section.
- Removed K. Rajendran – Veeramanali from the bride-side list.
- Reclassified S. Kondachamy & Valarmathi, C. Senthamaraikannan & Rasathi, R. Dinesh & Petri, and S. Manimaran Kumar & Chitra under the Akka & Machan subgroup.
- The Our Beloved Families section now focuses on the immediate families; extended relatives and friends remain in Family Members & Friends.
- Renamed the directory and compacted the rows to remove the unused photo column and excess vertical spacing.
- Removed the visible Google Maps helper phrase and made the venue label clickable.

## Editing and hosting

- Edit wording and styles in `index.html` and `style.css`; update interactions and data in `script.js`.
- Replace media in `assets/` while keeping filenames/paths, or update the corresponding path in HTML/JavaScript.
- For publishing, upload the complete project folder to a static host such as Netlify or Cloudflare Pages.
- The current Family Admin Login is a **local demo gate**. Browser localStorage edits apply only to the current browser/device; public shared editing requires secure server-side authentication and a database.
- Audio/video playback may require an initial user tap on mobile browsers. Respect usage rights for music when publishing.

## Demo admin login

- Username: `familyadmin`
- Password: `Madurai@2026`

Do not rely on these JavaScript-checked demo credentials for public-site security.

## V30 update
- The downloadable personalised invitation now includes live-stream links from the main website and a clickable Google Maps venue link in the same printable PDF.
- Groom-side directory headings consolidate the former “Bridegroom's 10 Samayars – Sisters”, “Bridegroom's Brothers”, and “Bridegroom's Samayars” into one visible “Bridegroom's Brothers, Samayars – Sisters” group. “Bridegroom's Household – Elder Brothers” remains separate. Existing stored relationship IDs are retained for compatibility.
- Reduced vertical spacing around relatives subheadings and names, especially on mobile.
- Live-stream URLs currently mirror the hrefs on the page. Replace generic YouTube/Instagram/Zoom destinations with the actual broadcast URLs before distributing the invitation.


## V31 update
- The printable/downloadable invitation now includes QR codes for the current website URL, venue map, YouTube Live, Instagram Live, and Zoom. QR codes are generated locally by the bundled MIT-licensed `assets/qr-encode.js` file, so QR generation itself does not need an external QR service.
- A print note warns when the invitation is generated from a local `file://`, localhost, or private-network preview. After publishing, open the hosted website and download the invitation again so the website QR contains the shareable public address.
- Once the guest enters their name and continues, the opening-page title/deity/date/function-details block hides along with the form; the royal key is centred by itself.
