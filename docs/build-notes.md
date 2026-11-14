# Build notes

## Overview
Build went well, using Figma to design the wireframes and mockups was fun and straightforward. Using the Figma mockups to base the HTML and CSS off helped keep me on track. Implementing JavaScript was trickier considering my lack of experience in using it but once it came together was very happy with the result. Throughout creating this prototype I used VS Code, Live Server Extension, GitHub, Figma, and browser DevTools which provided simple bases to build upon which made any errors/bugs easy to fix and find.

## Design stage
- Built wireframes at three sizes, style guide, components, mockups, error and form screens in Figma
- Changed the error colour to #FF6B6B after checking the contrast of the original error colour

## Build, by feature

### F1 Responsive layout
- Built: A CSS Grid with three panels and a bottom player that restructures at 992 px and 768 px.
- Decision: Used named grid areas so the panels can rearrange without changing the HTML. Chose 768 px because it is 2/5 of 1920, which was where I measured Spotify clipping in Assessment 1.
- Problem and fix: At 992 px the cards were cramped with four columns, so I used two columns and narrower side panels.

### F2 Responsive navigation
- Built: Left panel on desktop, which becomes an icon rail for tablet, and a bottom tab bar on phones
- Decision: The icons remain above the label at every size
- Problem and fix: I had to re-export the Figma icons because they had text already that interferred with the code

### F3 Now Playing panel
- Built: A top-right toggle and a labelled X Hide button to close the Now Playing panel
- Decision: Toggling the class with matchMedia at 992 px and using aria-expanded to keep it in sync
- Problem and fix: Escape would close both the Now Playing panel and the report dialog, so I added a guard

### F4 Playback error
- Built: A banner with a "Couldn't play this track" message and Retry and Report buttons
- Decision: Triggered by a missing file ensuring it isn't a false positive
- Problem and fix: Found a duplicate play button on final review and removed it

### F5 Report a problem form
- Built: Native `<dialog>` to validate email and message
- Decision: Errors written with textContent, not innerHTML
- Problem and fix: If the user pressed escape within the report dialog then the Now Playing panel would close too

### F6 Audio player
- Built: Play/Pause, seek, volume, and time which are synced across the bar, cards, and phone sheet
- Decision: The audio element's events update every button
- Problem and fix: Originally the buttons showed "Pause" before anything play so I used `updatePlayUI()` at load

### F7 Playlist cards
- Built: 12 gradient cards with a green play button on hover
- Decision: Gradients from CSS custom properties
- Problem and fix: The play icon showed a double circke and a black ring, which was fixed by using SVG backgrounds with seperate hover versions

## Testing and changes
- Validators: HTML and CSS both passed with no errors. Browsers: Firefox and Edge.
- A keyboard-only test at 375 px found the focus order on mobile was wrong and a final HTML review found an extra play button on the "Tired" playlist. Both issues were fixed and retested.
- Two usability sessions led to adding a "Hide" message next to the X in the top-right to make it clearer what the button did. Full detail is in `docs/testing-log.md` and `docs/traceability.md`.

## What I would do next
Would wire up the Previous and Next buttons with more audio files in the local build. To make the build feel closer to completion I would implement a search function properly and make the Library work with functional playlists for users.