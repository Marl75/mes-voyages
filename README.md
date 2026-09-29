# Mes Voyages

Progressive Web App to plan trips (FR/EN):

- **List** grouped by country or by date, with the next trip on top and a month filter (trips of a given month/year, or destinations ideal that month)
- **Map** of countries and destinations
- **Timeline** of trips per year
- **Stats**: countries visited, share of the world, travel days per year

## Stack

- Plain HTML / CSS / JavaScript, no build step
- [Firebase](https://firebase.google.com/) Auth (email + Google) and Firestore
- [Leaflet](https://leafletjs.com/) with CARTO tiles, country shapes from `world-atlas`
- [Nominatim](https://nominatim.org/) for geocoding, Wikipedia for photos
- Service worker (`sw.js`) for offline use
- `logic.js`: pure functions (dates, filters, best months, next trip, stats) shared by the app and the tests

## Run locally

Serve the folder with any static server, for example:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Add `localhost` to the authorized domains in Firebase Auth if it's not there.

## Tests

The logic in `logic.js` is covered by `tests/logic.test.js`:

- in a browser: serve the folder and open http://localhost:8000/tests/
- with Node: `node tests/logic.test.js`
- on GitHub: runs automatically on every push (`.github/workflows/tests.yml`)

## Deploy

Any static host works (GitHub Pages, Firebase Hosting…). After deploying:

- Publish `firestore.rules` (Firebase console → Firestore → Rules, or `firebase deploy --only firestore:rules`).
- Add the site's domain to Firebase Auth → Settings → Authorized domains.
- Restrict the Firebase API key to that domain (Google Cloud console → APIs & Services → Credentials → HTTP referrers).

App files are fetched network-first by the service worker, so a new deploy reaches users on their next load. Bump `CACHE_NAME` in `sw.js` only when the list of third-party assets changes.

## Data

Destinations live in Firestore under `users/{uid}/destinations`. `bestMonths` is an array of month numbers (0 = January); older destinations may still hold free text like `avr–oct`, which `parseBestMonths` reads and which is converted on the next save.
