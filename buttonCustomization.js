chrome.storage.sync.get(['switch', 'disable'], function (data) {
    var toSwitch = data.switch;
    var toDisable = data.disable;
    setInterval(function () {
        var btnContainer = document.querySelector('.sd-comment-buttons');
        if (toSwitch) {
            var externalButtons = document.querySelectorAll("button.sd-external-submit");
            externalButtons.forEach(function (b) {
                b.classList.remove('aui-button-primary');
            });
            var internalButtons = document.querySelectorAll("button.sd-internal-submit");
            internalButtons.forEach(function (b) {
                b.classList.add('aui-button-primary');
            });
        }
        if (btnContainer) {
            var tooltips = btnContainer.querySelectorAll('.js-tooltip');
            var havntSwitch = false;
            var customerBtn;
            var internalBtn;
            for (var i = 0; i < tooltips.length; i++) {
                if (i === 0 && tooltips[i].querySelector('button.sd-external-submit')) {
                    customerBtn = tooltips[0];
                    havntSwitch = true;
                } else if (i === 1 && havntSwitch) {
                    internalBtn = tooltips[1];
                }
            }
            if (havntSwitch && toSwitch) {
                btnContainer.removeChild(customerBtn);
                btnContainer.removeChild(internalBtn);
                btnContainer.insertBefore(customerBtn, btnContainer.firstChild);
                btnContainer.insertBefore(internalBtn, btnContainer.firstChild);
            }
            if (toDisable && customerBtn) {
                btnContainer.removeChild(customerBtn);
            }
        }
    }, 100);
});

