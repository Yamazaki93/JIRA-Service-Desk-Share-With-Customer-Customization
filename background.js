chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ switch: true, disable: false }, function () {
    });
});