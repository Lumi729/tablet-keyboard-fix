(function () {
    try {
        if (window.innerWidth < 600 || window.innerWidth >= 1000) return;

        const reset = () => {
            try {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            } catch (e) {}
        };

        const init = () => {
            if (window.visualViewport) {
                window.visualViewport.addEventListener('resize', () => setTimeout(reset, 100));
                window.visualViewport.addEventListener('scroll', () => setTimeout(reset, 100));
            } else {
                window.addEventListener('resize', () => setTimeout(reset, 100));
            }
            document.addEventListener('focusout', () => setTimeout(reset, 200));
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    } catch (e) {}
})();
