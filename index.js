(function () {
    try {
        // 把背景图复制到 html，白条变背景
        var copyBg = function () {
            var bg1 = document.getElementById('bg1');
            if (!bg1) return;
            var img = bg1.querySelector('img');
            if (img && img.src) {
                var h = document.documentElement;
                h.style.setProperty('background-image', 'url(' + img.src + ')', 'important');
                h.style.setProperty('background-size', 'cover', 'important');
                h.style.setProperty('background-position', 'center', 'important');
            }
        };

        // 键盘收起归零
        document.addEventListener('focusout', function () {
            setTimeout(function () {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }, 300);
        });

        // 等 bg1 加载再复制，换背景时也跟着更新
        var wait = setInterval(function () {
            var bg1 = document.getElementById('bg1');
            if (!bg1) return;
            clearInterval(wait);
            copyBg();
            new MutationObserver(copyBg).observe(bg1, {
                childList: true, attributes: true, subtree: true
            });
        }, 500);
    } catch (e) {}
})();
