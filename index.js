(function () {
    try {
        if (window.innerWidth < 600 || window.innerWidth >= 1000) return;

        const apply = () => {
            try {
                const vv = window.visualViewport;
                if (!vv) return;

                const keyboardHeight = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
                const topBar = document.querySelector('#top-settings-holder');
                const topBarHeight = topBar ? topBar.offsetHeight : 56;
                const formSheld = document.getElementById('form_sheld');
                const chat = document.getElementById('chat');

                if (formSheld) formSheld.style.bottom = (keyboardHeight + 6) + 'px';
                if (chat) chat.style.maxHeight = (vv.height - topBarHeight - 10) + 'px';

                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            } catch (e) {}
        };

        const init = () => {
            if (window.visualViewport) {
                window.visualViewport.addEventListener('resize', () => requestAnimationFrame(apply));
                window.visualViewport.addEventListener('scroll', () => {
                    window.scrollTo(0, 0);
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                });
            }
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    } catch (e) {}
})();
