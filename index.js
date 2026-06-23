(function () {
    try {
        const fix = () => {
            try {
                const vv = window.visualViewport;
                if (!vv) return;

                const keyboardH = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);

                // 底栏贴键盘顶端
                const formSheld = document.getElementById('form_sheld');
                if (formSheld) {
                    formSheld.style.setProperty('bottom', keyboardH + 'px', 'important');
                }

                // chat 区域随键盘缩短
                const topBar = document.getElementById('top-settings-holder');
                const topH = topBar ? topBar.offsetHeight : 56;
                const formH = formSheld ? formSheld.offsetHeight : 60;
                const chatH = vv.height - topH - formH - 12;

                const chat = document.getElementById('chat');
                if (chat) {
                    chat.style.setProperty('max-height', chatH + 'px', 'important');
                }

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

                window.visualViewport.addEventListener('resize', () => requestAnimationFrame(fix));
                window.visualViewport.addEventListener('scroll', () => {
                    window.scrollTo(0, 0);
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                });

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
