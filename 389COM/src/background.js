function getThemedPrefix() {
  return browser.storage.local.get('settings').then((store) => {
    if (store.settings && store.settings.theme && store.settings.theme === 'dark') {
      return 'light';
    }
    return 'dark';
  });
}

function init() {
  getThemedPrefix().then((prefix) => {
    browser.browserAction.setIcon({
      path: `/icons/icon-${prefix}.svg`
    });
  });
}



