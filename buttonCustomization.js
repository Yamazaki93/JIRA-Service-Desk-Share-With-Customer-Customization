setInterval(function () {
    var externalButtons = document.querySelectorAll("button.sd-external-submit");
    externalButtons.forEach(function (b) {
        b.classList.remove('aui-button-primary');
    });
    var internalButtons = document.querySelectorAll("button.sd-internal-submit");
    internalButtons.forEach(function (b) {
        b.classList.add('aui-button-primary');
    });
    var btnContainer = document.querySelector('.sd-comment-buttons');
    if (btnContainer) {
        var tooltips = btnContainer.querySelectorAll('.js-tooltip');
        var toSwitch = false;
        var customerBtn;
        var internalBtn;
        for (var i = 0; i < tooltips.length; i++) {
            if (i === 0 && tooltips[i].querySelector('button.sd-external-submit')) {
                customerBtn = tooltips[0];
                toSwitch = true;
            } else if (i === 1 && toSwitch) {
                internalBtn = tooltips[1];
            }
        }
        if (toSwitch) {
            btnContainer.removeChild(customerBtn);
            btnContainer.removeChild(internalBtn);
            btnContainer.insertBefore(customerBtn, btnContainer.firstChild);
            btnContainer.insertBefore(internalBtn, btnContainer.firstChild);
        }
    }
}, 100);
