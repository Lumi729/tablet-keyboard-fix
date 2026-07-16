(function () {
    try {
        var vp = document.querySelector('meta[name="viewport"]');
        if (vp && !vp.content.includes('interactive-widget')) {
            vp.content += ', interactive-widget=resizes-content';
        }
        document.addEventListener('focusout', function () {
            setTimeout(function () {
                window.scrollTo(0, 0);
            }, 100);
        });
    } catch (e) {}
})();
document.addEventListener('dblclick', function () {
    alert('宽度: ' + window.innerWidth + ' 高度: ' + window.innerHeight);
});
