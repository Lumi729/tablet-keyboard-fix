(function () {
    try {
        const vp = document.querySelector('meta[name="viewport"]');
        if (vp && !vp.content.includes('interactive-widget')) {
            vp.content += ', interactive-widget=resizes-content';
        }

        const fix = () => {
            try {
                const h = window.innerHeight;
                document.documentElement.style.setProperty('--real-vh', h + 'px');
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            } catch (e) {}
        };

        const init = () => {
            const wait = setInterval(() => {
                if (!document.getElementById('sheld')) return;
                clearInterval(wait);
                fix();
                window.addEventListener('resize', () => requestAnimationFrame(fix));
                if (window.visualViewport) {
                    window.visualViewport.addEventListener('resize', () => requestAnimationFrame(fix));
                }
                document.addEventListener('focusout', () => setTimeout(fix, 300));
            }, 200);
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    } catch (e) {}
})();
