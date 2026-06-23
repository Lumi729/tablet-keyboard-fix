(function () {
    try {
        var resetScroll = function () {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        // 键盘弹出/收起都归零
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', function () {
                requestAnimationFrame(resetScroll);
            });
        }

        // 失焦兜底
        document.addEventListener('focusout', function () {
            setTimeout(resetScroll, 300);
        });
    } catch (e) {}
})();
