// UED100 Assessment 2: Spotify Web Player prototype scripts

// F3: Now Playing panel toggle
const app = document.querySelector('.app');
const panel = document.getElementById('now-playing');
const toggle = document.getElementById('panel-toggle');      // top-right button (tablet/desktop)
const closeBtn = document.getElementById('panel-close');     // X inside the panel
const openBtn = document.getElementById('open-now-playing'); // track info in the player bar
const wide = window.matchMedia('(min-width: 992px)');        // true at 992 px and wider (desktop layout)
let lastTrigger = toggle;   // remembers what opened the panel, so focus can return to it

// Checks if the panel is open, Desktop uses panel-hidden, tablet/mobile use is-open.
function isOpen() {
  return wide.matches
    ? !app.classList.contains('panel-hidden')
    : panel.classList.contains('is-open');
}

// Open or close the panel, keep aria-expanded correct, and move focus into it when opening
function setPanel(open) {
  if (wide.matches) {
    app.classList.toggle('panel-hidden', !open);
  } else {
    panel.classList.toggle('is-open', open);
  }
  syncState();
  if (open) closeBtn.focus();
}

// Keep aria-expanded correct on both buttons that control the panel
function syncState() {
  const state = String(isOpen());
  toggle.setAttribute('aria-expanded', state);
  openBtn.setAttribute('aria-expanded', state);
}

// Top-right toggle: open if closed, close if open
toggle.addEventListener('click', () => {
  lastTrigger = toggle;
  setPanel(!isOpen());
});

// Player-bar track info (the mini-player on mobile): open Now Playing
openBtn.addEventListener('click', () => {
  lastTrigger = openBtn;
  setPanel(true);
});

// Close (X) button: close and return focus to whatever opened the panel
closeBtn.addEventListener('click', () => {
  setPanel(false);
  lastTrigger.focus();
});

// Escape closes the drawer/sheet (below 992 px) and returns focus
document.addEventListener('keydown', (e) => {
  if (reportDialog.open) return;          // let the dialog handle its own Esc
  if (e.key === 'Escape' && !wide.matches && isOpen()) {
    setPanel(false);
    lastTrigger.focus();
  }
});

// Layout changed across 992 px: reset to the default for the new layout
wide.addEventListener('change', () => {
  app.classList.remove('panel-hidden');   // desktop default: panel open
  panel.classList.remove('is-open');      // drawer/sheet default: closed
  syncState();
});
syncState();

// F5: Report a problem dialog
const reportDialog = document.getElementById('report-dialog');
const reportBtn = document.getElementById('report-btn');
const reportCancel = document.getElementById('report-cancel');

// Open as a modal: the browser adds the backdrop, traps focus and handles Esc
reportBtn.addEventListener('click', () => reportDialog.showModal());
reportCancel.addEventListener('click', () => reportDialog.close());

// F5: validation 
const reportForm = document.getElementById('report-form');
const formSummary = document.getElementById('form-summary');
const reportSuccess = document.getElementById('report-success');
const reportCloseBtn = document.getElementById('report-close');
const emailInput = document.getElementById('report-email');
const messageInput = document.getElementById('report-message');
let submitted = false;   // after the first Send attempt, fields re-check as the user types

// Each rule returns an error message, or '' if the value is fine
const rules = [
  { input: emailInput, errorId: 'email-error',
    check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
      ? '' : 'Enter a valid email address, like name@example.com' },
  { input: messageInput, errorId: 'message-error',
    check: v => v.trim().length >= 10
      ? '' : 'Tell us a bit more. 10 characters minimum' }
];

// Show or clear one field's error. textContent so typed text can never inject markup
function showFieldError(rule, message) {
  const errorEl = document.getElementById(rule.errorId);
  errorEl.textContent = message;
  errorEl.hidden = message === '';
  if (message) rule.input.setAttribute('aria-invalid', 'true');
  else rule.input.removeAttribute('aria-invalid');
}

// Check every field; returns the rules that failed
function validateForm() {
  const failed = [];
  rules.forEach(rule => {
    const message = rule.check(rule.input.value);
    showFieldError(rule, message);
    if (message) failed.push(rule);
  });
  return failed;
}

reportForm.addEventListener('submit', (e) => {
  e.preventDefault();               // prototype: nothing is sent anywhere
  submitted = true;
  const failed = validateForm();
  if (failed.length > 0) {
    formSummary.textContent = failed.length === 1
      ? 'Please fix 1 problem' : `Please fix ${failed.length} problems`;
    formSummary.hidden = false;
    failed[0].input.focus();        // take the user straight to the first problem
  } else {
    formSummary.hidden = true;
    reportForm.hidden = true;
    reportSuccess.hidden = false;
    reportCloseBtn.focus();
  }
});

// After a failed attempt, re-check as the user fixes things
reportForm.addEventListener('input', () => {
  if (!submitted) return;
  if (validateForm().length === 0) formSummary.hidden = true;
});

// Close button on the success view; reset everything whenever the dialog closes
reportCloseBtn.addEventListener('click', () => reportDialog.close());
reportDialog.addEventListener('close', () => {
  reportForm.reset();
  reportForm.hidden = false;
  reportSuccess.hidden = true;
  formSummary.hidden = true;
  rules.forEach(rule => showFieldError(rule, ''));
  submitted = false;
});

// F6: audio player
const audio = document.getElementById('audio');
const playButtons = document.querySelectorAll('.ctrl-play');   // player bar + mobile sheet

// Make every Play/Pause button match the audio state: icon and label change together
function updatePlayUI() {
  const playing = !audio.paused;
  playButtons.forEach(btn => {
    btn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    btn.querySelector('img').src = playing
      ? 'assets/icons/pause.svg'
      : 'assets/icons/play.svg';
  });
}

// One place that starts playback
function playAudio() {
  audio.play().catch(err => console.error('Play failed:', err.name));
}

function togglePlay() {
  if (audio.paused) playAudio();
  else audio.pause();
}

// Card play buttons, load that card's track and play it
const DEFAULT_SRC = 'assets/audio/track.mp3';
document.querySelectorAll('.play-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const src = btn.dataset.src || DEFAULT_SRC;
    if (audio.getAttribute('src') !== src) audio.src = src;   // only reload if it changed
    playAudio();
  });
});

playButtons.forEach(btn => btn.addEventListener('click', togglePlay));
audio.addEventListener('play', updatePlayUI);
audio.addEventListener('pause', updatePlayUI);
audio.addEventListener('ended', updatePlayUI);
updatePlayUI();   // start in the paused state (shows Play)

// F6: progress and seek
const progressEls = document.querySelectorAll('.progress');   // player bar + mobile sheet

function formatTime(seconds) {
  const s = Math.floor(seconds || 0);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

// Refresh the time labels and slider in both progress blocks
function updateProgress() {
  const dur = audio.duration || 0;      // NaN until metadata loads, so fall back to 0
  progressEls.forEach(el => {
    const [now, slider, total] = el.children;
    now.textContent = formatTime(audio.currentTime);
    total.textContent = formatTime(dur);
    slider.value = dur ? (audio.currentTime / dur) * 100 : 0;
    slider.setAttribute('aria-valuetext',
      `${formatTime(audio.currentTime)} of ${formatTime(dur)}`);   // screen readers hear times, not %
  });
}

// Dragging or using the arrow keys on a slider seeks the audio
progressEls.forEach(el => {
  const slider = el.children[1];
  slider.step = 'any';                  // smooth seeking instead of 1% jumps
  slider.addEventListener('input', () => {
    if (audio.duration) audio.currentTime = (slider.value / 100) * audio.duration;
    updateProgress();
  });
});

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('loadedmetadata', updateProgress);
updateProgress();

// F6: volume
const volumeSlider = document.querySelector('.volume input');
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value / 100;   // slider is 0-100, audio.volume is 0-1
});
audio.volume = volumeSlider.value / 100;     // start matching the slider's 60

// F4: playback error
const playbackError = document.getElementById('playback-error');
const playbackErrorText = document.getElementById('playback-error-text');

function showPlaybackError() {
  playbackError.hidden = false;                                  // show first, then set the text,
  playbackErrorText.textContent = "Couldn't play this track";   // so the alert is announced
}

function hidePlaybackError() {
  playbackError.hidden = true;
  playbackErrorText.textContent = '';
}

audio.addEventListener('error', showPlaybackError);   // the browser could not load or play the file
audio.addEventListener('playing', hidePlaybackError); // any successful playback clears the banner

// Retry, try the same source again
document.getElementById('playback-retry').addEventListener('click', () => {
  hidePlaybackError();
  audio.load();
  playAudio();
});

// Report, open the form from F5 with the likely problem already chosen
document.getElementById('playback-report').addEventListener('click', () => {
  document.getElementById('report-type').value = "Music won't play";
  reportDialog.showModal();
});

// Focus order fix 
// On phones the nav bar is displayed at the bottom, so it must also be last in the
// DOM, or keyboard focus goes to the bottom nav before the playlists. 
// On larger screens it is first.
const sidebar = document.querySelector('.sidebar');
const phone = window.matchMedia('(max-width: 767px)');

function placeSidebar() {
  if (phone.matches) app.append(sidebar);    // end of .app: matches the visual order
  else app.prepend(sidebar);                 // start of .app: sidebar is on the left
}
phone.addEventListener('change', placeSidebar);
placeSidebar();