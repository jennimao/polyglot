window.addEventListener('load', () => {
  let scriptElem = document.createElement('script');
  scriptElem.setAttribute('type', 'text/javascript');
  scriptElem.textContent = `(() => {
      window.__nflxMultiSubsExtId = ${JSON.stringify(chrome.runtime.id)};
    })();`;
  document.body.insertAdjacentElement('beforeend', scriptElem);

  const scriptsToInject = ['netflix_subtitles_content.min.js'];
  scriptsToInject.forEach(scriptName => {
    const scriptElem = document.createElement('script');
    scriptElem.setAttribute('type', 'text/javascript');
    scriptElem.setAttribute('src', chrome.runtime.getURL(scriptName));
    document.head.insertAdjacentElement('beforeend', scriptElem);
    //log(`Injected: ${scriptName}`);
  });
});