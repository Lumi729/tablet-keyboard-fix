(function () {
    try {
        const update = () => {
            try {
                const vv = window.visualViewport;
                if (!vv) return;

                const keyboardH = Math.max(0, window.innerHeight - vv.height);
                document.documentElement.style.setProperty('--vp-keyboard-h', keyboardH + 'px');
                document.documentElement.style.setProperty('--vp-visible-h', vv.height + 'px');

                if (keyboardH === 0) {
                    window.scrollTo(0, 0);
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                }
            } catch (e) {}
        };

        const init = () => {
            const wait = setInterval(() => {
                if (!document.getElementById('sheld')) return;
                clearInterval(wait);

                update();

                if (window.visualViewport) {
                    window.visualViewport.addEventListener('resize', () => requestAnimationFrame(update));
                }

                document.addEventListener('focusout', () => setTimeout(update, 300));
            }, 200);
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    } catch (e) {}
})();
