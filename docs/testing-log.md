# Testing Log (Assessment 1 → prototype)
| # | Type (responsive / accessibility / cross-browser / usability / validation) | What I tested | Tool / method | Issue found | Change made (commit) | Result |
|---|---|---|---|---|---|---|
| 1 | Validation | Tested the html code for errors | Tested on https://validator.w3.org/#validate_by_input | No issues found | No changes made | Pass |
| 2 | Responsive | Tested the behaviour as the screen size shrinks | Tested on Firefox by using Responsive Design Mode | No issues were found at the moment as the Now Playing bar and library panel tucked away after going below 992 px and the Home, Search, Library controls shifted to the bottom of the screen when the screen went below 768 | No changes were made | Pass |
| 3 | Responsive | Tested how the playlist cards appeared when screen size went to 992 px | Firefox Inspect | Found the cards were cramped with 4 fixed coloumns | Changed the coloumns to 2 coloumns with narrower side panels | Success |
| 4 | Responsive | Tested how the playlist cards appeared when screen size went to 991 px | Firefox Inspect | Found the auto-fill made uneven rows (5/5/2) | Replaced with explicit coloumn counts that divide the 12 cards | Success |
| 5 | Responsive | Tested how the playlist cards appeared when screen size went to 767 px | Firefox Inspect | Covers were too large with two coloumns | Changed to 3 coloumns when the screen is between 480 and 767 px | Success |
| 6 | | | | | | |
| 7 | | | | | | |

**Usability test notes (2–3 participants):** tasks given · success / fail · time · errors · quotes · changes made.
**Browsers tested:** Chrome ☐ Firefox ☐ Edge ☐ Safari ☐ (state honestly if not tested)