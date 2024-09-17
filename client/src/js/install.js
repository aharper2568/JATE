/* Instructor provided solution 2024-09-16 */

const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('event triggered')
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    console.log('error in install')
    return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', () => {
  window.deferredPrompt = null;
});