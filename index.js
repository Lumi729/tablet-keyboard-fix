(function () {
    try {
        var textarea = null;

        document.addEventListener('focusin', function (e) {
            if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') {
                textarea = e.target;
                setTimeout(function () {
                    textarea.scrollIntoView({ block: 'end', behavior: 'instant' });
                }, 50);
            }
        });

        document.addEventListener('focusout', function () {
            textarea = null;
            requestAnimationFrame(function () {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            });
            setTimeout(function () {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }, 100);
        });
    } catch (e) {}
})();
