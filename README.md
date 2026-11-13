# Spotify Web Player prototype (UED100 Assessment 2)

A responsive prototype of the Spotify Web Player home screen, built with HTML, CSS and vanilla JavaScript for UED100 Assessment 2. This prototype turns my Assessment 1 findings and marker feedback into working fixes. The layout restructures instead of clipping on small windows, the Now Playing panel always has a visible control, and playback errors explain what happened and offer recovery options.

## Run it
- Open the folder in VS Code and use Live Server on `index.html` (the "Live Server" extension), or open `index.html` directly in a browser
- There is nothing to install

## Design files
- Figma: https://www.figma.com/design/67aatEC5dMt4lVzjyrmwXI/UED100-A2-Spotify-prototype?node-id=7-331&t=a43oCwLSRU7fa5R8-1 - Contains wireframes (desktop, mobile, and tablet), mockups (desktop and mobile home, Now Playing, playback error, report form default, error and success), the style guide, and the components
- `design/`: PNG exports of those same screens: wireframes, mockups, style guide and components.

## Folder structure
- `index.html`: Contains the skip link, sidebar navigation and library, 12 playlist cards, the Now Playing panel, the player bar, the "Report a problem" dialog and the `<audio>` element
- `css/styles.css`: Contains the design tokens, the grid layout, navigation, player bar, cards, the dialog and form, the playback error banner, and the responsive breakpoints (992 px and 768 px)
- `js/script.js`: Contains the Now Playing panel toggle, the report form validation, the audio player and card buttons, the playback error banner, and the focus-order fix for phones
- `assets/`:
  - `audio/`: The prototype track (`track.mp3`)
  - `icons/`: SVG icons exported from Figma (navigation, player controls, and play buttons)
  - `images/`: The album cover art
- `design/`: PNG exports from Figma
- `docs/`: `traceability.md`, `testing-log.md`, `build-notes.md`, `ai-use-log.md`, and evidence screenshots (validators, 375 px keyboard test)

## Features
- F1 Responsive layout: CSS Grid with three panels and a bottom player bar, which allows the prototype to restructure instead of clipping when below 992 px and 768 px.
- F2 Responsive navigation: Home, Search, and Library are placed on a left panel for desktop, icon rail for tablet, and a bottom tab bar on mobile.
- F3 Now Playing panel hide/show: Top-right toggle plus a labelled X "Hide" button. Esc closes the drawer or sheet on tablet and phone.
- F4 Playback error: Banner showing "Couldn't play this track", "Retry", and "Report" which is triggered by the audio element's real error event.
- F5 Report a problem form: A native `<dialog>` with JavaScript validation to check email format, message of at least 10 characters, an error summary, and error text with an icon.
- F6 Audio player: Play and Pause buttons synced across the player bar, playlist cards, and the phone "Now Playing". Only one track in this prototype.
- F7 Playlist cards: 12 playlist cards with different gradient covers, a green play button appears on hover or when focused on keyboard and remains visible on touch screens.

## Testing summary
- Validation: HTML and CSS validators both passed with no errors
- Browsers: Firefox and Edge
- Accessibility: Keyboard test. Which Tab reached the bottom navigation before the content, when the screen size shrunk to 375 px. To fix this the nav was moved in the DOM then retested.
- Usability: 2 participants. Participant 1 hesitated to click the X in the top right of the Now Playing panel when asked to close it. As a result I added the word "Hide" near the X. Participant 2 completed every task without difficulty and understood what they needed to do.
- Full evidence is in `docs/testing-log.md`, and each test links to a requirement in `docs/traceability.md`.

## Differences from Assessment 1
- This prototype restructures into a drawer and a bottom tab bar instead of clipping on small windows
- Now Playing panel always has a visible, labelled control (the toggle icon, or X "Hide")
- Playback errors say what happened and offer "Retry" and "Report" options
- The full mapping is in `docs/traceability.md`

## Known limitations
- Search and Library links don't go anywhere
- Previous and Next don't work, and there is also only one song
- Validation is client-side only, which a real server would need to re-validate
- Nav moves in the DOM at phone size, resizing the window while focused on it could lose your place
- Playlists all play the same single track (cards only play, pausing is done from the player bar)

## Credits
- Audio: "Upbeat Music" by Tatamusic, Pixabay Content License. https://pixabay.com/music/future-bass-upbeat-upbeat-music-632588/
- Icons, cover art and playlist gradients: my own designs, created in Figma or CSS for this prototype.

## AI use
- I used Claude as a coach throughout. It helped plan the build, gave me code examples for most of the JavaScript, which I tested and adapted, and reviewed my code, test logs and traceability table for mistakes and gaps.
- I did the Figma design and the icons and cover art, wrote most of the HTML, ran every test, ran the usability sessions with real participants, made the design decisions, and wrote the report myself.
- Full details are in `docs/ai-use-log.md`.