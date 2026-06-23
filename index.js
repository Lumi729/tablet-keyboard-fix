(function () {
    try {
        var reset = function () {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', function () {
                requestAnimationFrame(reset);
            });
        }

        document.addEventListener('focusout', function () {
            requestAnimationFrame(reset);
            setTimeout(reset, 100);
        });
    } catch (e) {}
})();
