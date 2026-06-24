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

        // 点击屏幕顶部区域时，抓那个位置的元素信息
        document.addEventListener('click', function (e) {
            if (e.clientY < 80) {
                var el = document.elementFromPoint(e.clientX, e.clientY);
                if (el) {
                    var info = [];
                    var cur = el;
                    while (cur && cur !== document.body) {
                        info.push(cur.tagName + (cur.id ? '#' + cur.id : '') + (cur.className ? '.' + String(cur.className).split(' ').join('.') : ''));
                        cur = cur.parentElement;
                    }
                    alert(info.join('\n'));
                }
            }
        });
    } catch (e) {}
})();
