chrome.storage.sync.get(['switch', 'disable'], function (data) {
    var toSwitch = data.switch;
    var toDisable = data.disable;
    if (toSwitch) {
        document.getElementById('switch').checked = true;
    }
    if (toDisable) {
        document.getElementById('disable').checked = true;
    }
});

document.querySelectorAll('input').forEach(function (elem) {
    elem.addEventListener('click', function () {
        chrome.storage.sync.set({ switch: document.getElementById('switch').checked, disable: document.getElementById('disable').checked }, function (_) {
        });
    })
})