(function () {
    try {
        // 键盘修复
        var vp = document.querySelector('meta[name="viewport"]');
        if (vp && !vp.content.includes('interactive-widget')) {
            vp.content += ', interactive-widget=resizes-content';
        }
        document.addEventListener('focusout', function () {
            setTimeout(function () {
                window.scrollTo(0, 0);
            }, 100);
        });

        // 找到锁头白条并修复
        var fixBar = function () {
            var all = document.querySelectorAll('*');
            for (var i = 0; i < all.length; i++) {
                var el = all[i];
                if (el.children.length < 5 && el.textContent.includes('单击滑块')) {
                    el.style.setProperty('position', 'relative', 'important');
                    el.style.setProperty('z-index', '1', 'important');
                    // 调试：先用红色确认找对了
                    el.style.setProperty('background', 'red', 'important');
                    console.log('找到锁头元素:', el.tagName, el.className, el.id);
                    break;
                }
            }
        };

        setTimeout(fixBar, 2000);
        document.addEventListener('click', function () {
            setTimeout(fixBar, 500);
        });
    } catch (e) {}
})();
