# Testing Log (Assessment 1 → prototype)
| # | Type (responsive / accessibility / cross-browser / usability / validation) | What I tested | Tool / method | Issue found | Change made (commit) | Result |
|---|---|---|---|---|---|---|
| 1 | Validation | Tested the html code for errors | Tested on https://validator.w3.org/#validate_by_input | No issues found | No changes made | Pass |
| 2 | Responsive | Tested the behaviour as the screen size shrinks | Tested on Firefox by using Responsive Design Mode | No issues were found at the moment as the Now Playing bar and library panel tucked away after going below 992 px and the Home, Search, Library controls shifted to the bottom of the screen when the screen went below 768 | No changes were made | Pass |
| 3 | Responsive | Tested how the playlist cards appeared when screen size went to 992 px | Firefox Inspect | Found the cards were cramped with 4 fixed coloumns | Changed the coloumns to 2 coloumns with narrower side panels | Success |
| 4 | Responsive | Tested how the playlist cards appeared when screen size went to 991 px | Firefox Inspect | Found the auto-fill made uneven rows (5/5/2) | Replaced with explicit coloumn counts that divide the 12 cards | Success |
| 5 | Responsive | Tested how the playlist cards appeared when screen size went to 767 px | Firefox Inspect | Covers were too large with two coloumns | Changed to 3 coloumns when the screen is between 480 and 767 px | Success |
| 6 | Usability | Tested the JavaScript now-playing toggles | Tested through Firefox Respnsive Design Mode | No issue found at 1280 px | No changes made after test | Pass |
| 7 | Usability | Tested the JavaScript now-playing toggles | Tested through Firefox Respnsive Design Mode | No issue found at 991 px | No changes made after test | Pass |
| 8 | Usability | Tested the JavaScript now-playing toggles | Tested through Firefox Respnsive Design Mode | No issue found at 767 px | No changes made after test | Pass |
| 9 | Usability | Tested screen resizing with Now Playing panel | Tested through Firefox Responsive Design Mode. Tested whether hiding the panel at 1280 px and shrinking below 992 px kept the panel closed | No issue found | No changes made | Pass |
| 10 | Usability | Tested screen resizing with Now Playing panel | Tested through Firefox Responsive Design Mode. Tested at 991 px if opening the panel then making screen wider, the panel remained open with toggle hidden | No issue found | No changes made | Pass |
| 11 | Usability | Tested the report a problem screen | Tested with Firefox Responsive Design Mode. Tested submitting the report with empty text inputs to return the error message | No issues found | No changes | Pass |
| 12 | Usability | Tested the report a problem screen | Using Firefox Responsive Design Mode, tested typing a valid email into error screen to see if the error disappeared for email | No issues | No changes | Pass |
| 13 | Usability | Tested the report a problem screen | Using Firefox Responsive Design Mode, tested typing 9 characters in message to see if the error would remain. Error was still present then typed a 10th character which cleared the errors | No issues | No changes | Pass |
| 14 | Usability | Tested the report a problem screen | Using Firefox Responsive Design Mode, tested submitting valid data to prompt the success message. Afterwards reopened the report form to make sure it was empty | No issues | No changes | Pass |
| 15 | Usability | Tested the report a problem screen | Using Firefox Responsive Design Mode, tested typing <b>hello</b> which should cause the program not to render as HTML, the program received the data as normal and didn't experience any problems | No issues | No changes | Pass |
| 16 | Usability | Tested the report a problem screen | Using Firefox Responsive Design Mode, tested tabbing through the report screen and submitting with enter with the program looping back to the first error with focus | No issues | No changes | Pass |
| 17 | Usability | Tested the report a problem screen | Using Firefox Responsive Design Mode, tested pressing esc to close the report screen | Pressing escape caused both the now playing panel and report screen to close | Changed with a reportDialog.open guard | Passed after the fix |
| 18 | Usability | Tested the report a problem screen | | | | |

|  | | | | | | |

**Usability test notes (2–3 participants):** tasks given · success / fail · time · errors · quotes · changes made.
**Browsers tested:** Chrome ☐ Firefox ☐ Edge ☐ Safari ☐ (state honestly if not tested)