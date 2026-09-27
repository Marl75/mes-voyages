# Mes Voyages

Progressive Web App to plan trips: list, map and yearly timeline of destinations (visited, planned, ideas). FR/EN.

## Stack

- Plain HTML / CSS / JavaScript, no build step
- [Firebase](https://firebase.google.com/) Auth (email + Google) and Firestore
- [Leaflet](https://leafletjs.com/) with CARTO tiles, country shapes from `world-atlas`
- [Nominatim](https://nominatim.org/) for geocoding, Wikipedia for photos
- Service worker (`sw.js`) for offline use

## Run locally

Serve the folder with any static server, for example:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Add `localhost` to the authorized domains in Firebase Auth if it's not there.

## Deploy

Any static host works (GitHub Pages, Firebase Hosting…). After deploying:

- Publish `firestore.rules` (Firebase console → Firestore → Rules, or `firebase deploy --only firestore:rules`).
- Add the site's domain to Firebase Auth → Settings → Authorized domains.
- Restrict the Firebase API key to that domain (Google Cloud console → APIs & Services → Credentials → HTTP referrers).

App files are fetched network-first by the service worker, so a new deploy reaches users on their next load. Bump `CACHE_NAME` in `sw.js` only when the list of third-party assets changes.

## Data

Destinations live in Firestore under `users/{uid}/destinations`. Demo mode stores its sample data in the browser's localStorage only.
