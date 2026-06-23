(function () {
    try {
        if (window.innerWidth < 600 || window.innerWidth >= 1000) return;

        let lastH = 0;

        const fix = (resetScroll) => {
            try {
                const vv = window.visualViewport;
                const h = vv ? vv.height : window.innerHeight;

                if (resetScroll) {
                    window.scrollTo(0, 0);
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                }

                const sheld = document.getElementById('sheld');
                if (sheld) {
                    sheld.style.setProperty('height', h + 'px', 'important');
                    sheld.style.setProperty('max-height', h + 'px', 'important');
                    sheld.style.setProperty('overflow', 'hidden', 'important');
                }

                if (h === lastH) return;
                lastH = h;

                const keyboardH = Math.max(0, window.innerHeight - h);
                const formSheld = document.getElementById('form_sheld');
                if (formSheld) {
                    formSheld.style.setProperty('bottom', keyboardH + 'px', 'important');
                }
            } catch (e) {}
        };

        const init = () => {
            fix(true);
            setInterval(() => fix(false), 300);

            if (window.visualViewport) {
                window.visualViewport.addEventListener('resize', () => fix(true));
                window.visualViewport.addEventListener('scroll', () => {
                    window.scrollTo(0, 0);
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                });
            }
            document.addEventListener('focusout', () => setTimeout(() => fix(true), 300));
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    } catch (e) {}
})();
