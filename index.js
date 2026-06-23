(function () {
    try {
        const fix = () => {
            try {
                const vv = window.visualViewport;
                const h = vv ? vv.height : window.innerHeight;
                const keyboardH = Math.max(0, window.innerHeight - h);

                const sheld = document.getElementById('sheld');
                if (sheld) {
                    sheld.style.setProperty('height', h + 'px', 'important');
                    sheld.style.setProperty('max-height', h + 'px', 'important');
                }

                const formSheld = document.getElementById('form_sheld');
                if (formSheld) {
                    formSheld.style.setProperty('bottom', (keyboardH + 6) + 'px', 'important');
                }

                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            } catch (e) {}
        };

        const init = () => {
            // 等 #sheld 出现再开始
            const waitSheld = setInterval(() => {
                const sheld = document.getElementById('sheld');
                if (!sheld) return;
                clearInterval(waitSheld);

                fix();

                // 监控 sheld 被 ST 改回去就立刻纠正
                new MutationObserver(() => setTimeout(fix, 30))
                    .observe(sheld, { attributes: true, attributeFilter: ['style'] });

                if (window.visualViewport) {
                    window.visualViewport.addEventListener('resize', () => requestAnimationFrame(fix));
                    window.visualViewport.addEventListener('scroll', () => {
                        window.scrollTo(0, 0);
                        document.documentElement.scrollTop = 0;
                        document.body.scrollTop = 0;
                    });
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
