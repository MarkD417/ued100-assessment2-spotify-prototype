# Testing Log (Assessment 1 → prototype)
| # | Type (responsive / accessibility / cross-browser / usability / validation) | What I tested | Tool / method | Issue found | Change made (commit) | Result |
|---|---|---|---|---|---|---|
| 1 | Responsive | Tested the behaviour as the screen size shrinks | Tested on Firefox by using Responsive Design Mode | No issues were found at the moment as the Now Playing bar and library panel tucked away after going below 992 px and the Home, Search, Library controls shifted to the bottom of the screen when the screen went below 768 | No changes were made | Pass |
| 2 | Responsive | Tested how the playlist cards appeared when screen size went to 992 px | Firefox Inspect | Found the cards were cramped with 4 fixed columns | Changed the columns to 2 columns with narrower side panels | Success |
| 3 | Responsive | Tested how the playlist cards appeared when screen size went to 991 px | Firefox Inspect | Found the auto-fill made uneven rows (5/5/2) | Replaced with explicit column counts that divide the 12 cards | Success |
| 4 | Responsive | Tested how the playlist cards appeared when screen size went to 767 px | Firefox Inspect | Covers were too large with two columns | Changed to 3 columns when the screen is between 480 and 767 px | Success |
| 5 | Functional | Tested the JavaScript now-playing toggles | Tested through Firefox Responsive Design Mode | No issue found at 1280 px | No changes made after test | Pass |
| 6 | Functional | Tested the JavaScript now-playing toggles | Tested through Firefox Respnosive Design Mode | No issue found at 991 px | No changes made after test | Pass |
| 7 | Functional | Tested the JavaScript now-playing toggles | Tested through Firefox Responsive Design Mode | No issue found at 767 px | No changes made after test | Pass |
| 8 | Functional | Tested screen resizing with Now Playing panel | Tested through Firefox Responsive Design Mode. Tested whether hiding the panel at 1280 px and shrinking below 992 px kept the panel closed | No issue found | No changes made | Pass |
| 9 | Functional | Tested screen resizing with Now Playing panel | Tested through Firefox Responsive Design Mode. Tested at 991 px if opening the panel then making screen wider, the panel remained open with toggle hidden | No issue found | No changes made | Pass |
| 10 | Functional | Tested the report a problem screen | Tested with Firefox Responsive Design Mode. Tested submitting the report with empty text inputs to return the error message | No issues found | No changes | Pass |
| 11 | Functional | Tested the report a problem screen | Using Firefox Responsive Design Mode, tested typing a valid email into error screen to see if the error disappeared for email | No issues | No changes | Pass |
| 12 | Functional | Tested the report a problem screen | Using Firefox Responsive Design Mode, tested typing 9 characters in message to see if the error would remain. Error was still present then typed a 10th character which cleared the errors | No issues | No changes | Pass |
| 13 | Functional | Tested the report a problem screen | Using Firefox Responsive Design Mode, tested submitting valid data to prompt the success message. Afterwards reopened the report form to make sure it was empty | No issues | No changes | Pass |
| 14 | Functional | Tested the report a problem screen | Using Firefox Responsive Design Mode, tested typing <b>hello</b> which should cause the program not to render as HTML, the program received the data as normal and didn't experience any problems | No issues | No changes | Pass |
| 15 | Functional | Tested the report a problem screen | Using Firefox Responsive Design Mode, tested tabbing through the report screen and submitting with enter with the program looping back to the first error with focus | No issues | No changes | Pass |
| 16 | Functional | Tested the report a problem screen | Using Firefox Responsive Design Mode, tested pressing esc to close the report screen | Pressing escape caused both the now playing panel and report screen to close | Changed with a reportDialog.open guard | Passed after the fix |
| 17 | Validation | Validated the HTML code | Used https://validator.w3.org/#validate_by_input to validate | No issues found | No changes made | Pass |
| 18 | Validation | Validated the CSS code | Used https://jigsaw.w3.org/css-validator/#validate_by_input+with_options to validate | No issues found | No changes made | Pass |
| 19 | Accessability | Checked focus order on 375 px | Tabbed through the page to check focus order was correct | At 375 px the focus tabbed through to the menu options at the bottom of the screen instead of focusing through the playlists. This is important because a keyboard or screen reader user will hear the navigation before the content they see, which means focus jumps from the top of the page to the bottom | Moved the nav to the end of the DOM at 767 px and below with a 'matchMedia' listener | Fail (Evidence is 375 px Keyboard Fail.png) |
| 20 | Accessability | Re-checked focus order on 375 px | Tabbed through the page to check focus order was correct | No issues found | No changes needed | Pass (Evidence is 375 px Keyboard Pass.png) |  
| 21 | Functional | Play/Pause stays in sync everywhere | Firefox and Edge. Clicked Play in the player bar, in a card's green button, and in the 375 px Now Playing sheet. Used Space and Enter on the focused button | None. Icon and label change together in every place. Originally the buttons showed Pause before anything was playing, which was fixed by calling `updatePlayUI()` once on load | Added `updatePlayUI()` driven by the audio's `play`, `pause` and `ended` events | Pass |
| 22 | Functional | Seek and time display | Dragged the seek slider and used the arrow keys. Watched both progress bars at 375 px and let the track finish | None | No changes | Pass |
| 23 | Functional | Volume | Dragged the volume slider from 0 to full while playing | None | No changes | Pass |
| 24 | Functional | Card play buttons | Clicked a card button, paused, clicked a different card. Pressed Enter on a focused button | Playing from a card resumes the same track rather than restarting it, because the prototype has one track | No change | Pass |
| 25 | Functional | Playback error appears | Clicked the "Tired" card, which points at a file that doesn't exist | None | No changes | Pass |
| 26 | Functional | Recovery | Clicked "Retry", then clicked a different playlist | "Retry" fails again, because the file is still missing. Choosing another playlist played music and cleared the banner | No changes | Pass |
| 27 | Accessibility | Report and keyboard | Clicked "Report" in the banner, tabbed to "Retry" and "Report" with the keyboard, pressed Esc in the dialog | None | No changes | Pass |
| 28 | Responsive | Banner at 375 px and when scrolling | Triggered the error at 375 px, then scrolled the cards | The banner stays at the top while scrolling, which keeps the error visible | Kept (it uses `position: sticky`) | Pass |
| 29 | Cross-browser | Play, panel toggle and report form | Edge and Firefox | None | No changes | Pass |
| 30 | Accessibility | Keyboard-only run at 1280 px | Tab, Shift+Tab, Enter, Space, arrows, Esc | No issues | No changes | Pass |
| 31 | Usability | Participant 1, tasks 1–8 | In person at my computer at 1280 px, then 375 px for task 8 | Task 4: hesitated at the X because it gave no clue it hides the panel | Added the word "Hide" next to the X | Retest with Participant 2 |

**Browsers tested:** Firefox and Edge 


**Usability test notes (2 participants):** 

**Participant 1** (anonymous, in person, 1280 px; task 8 at 375 px)
| Task | Result | Notes |
|---|---|---|
| 1 Play a playlist | Pass | |
| 2 Quieter, then pause | Pass | |
| 3 Seek to the middle | Pass | |
| 4 Hide and show Now Playing | Pass with difficulty | Hesitated at the ✕, "didn't want to press a random X" |
| 5 Play Tired | Pass | Saw the error banner |
| 6 Get music playing again | Pass | Tried Report and Retry before choosing another playlist |
| 7 Send a report (empty email first) | Pass | Found the report button, got the error messages, fixed them, sent |
| 8 Phone view: open the sheet and pause | Pass | |

**Participant 2** (anonymous, in person, 1280 px; task 8 at 375 px)
| Task | Result | Notes |
|---|---|---|
| 1 Play a playlist |  |  |
| 2 Quieter, then pause |  |  |
| 3 Seek to the middle |  |  |
| 4 Hide and show Now Playing |  |  |
| 5 Play Tired |  |  |
| 6 Get music playing again |  |  |
| 7 Send a report (empty email first) |  |  |
| 8 Phone view: open the sheet and pause |  |  |