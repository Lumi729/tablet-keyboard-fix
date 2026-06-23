(function () {
    try {
        document.addEventListener('focusout', function () {
            setTimeout(function () {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }, 300);
        });
    } catch (e) {}
})();
