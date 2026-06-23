(function () {
    try {
        if (window.innerWidth < 600 || window.innerWidth >= 1000) return;

        const fixHeight = () => {
            try {
                const h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
                const sheld = document.getElementById('sheld');
                if (sheld) sheld.style.height = h + 'px';
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            } catch (e) {}
        };

        const init = () => {
            fixHeight();
            if (window.visualViewport) {
                window.visualViewport.addEventListener('resize', () => requestAnimationFrame(fixHeight));
                window.visualViewport.addEventListener('scroll', () => requestAnimationFrame(fixHeight));
            }
            window.addEventListener('resize', () => requestAnimationFrame(fixHeight));
            document.addEventListener('focusout', () => setTimeout(fixHeight, 200));
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    } catch (e) {}
})();
