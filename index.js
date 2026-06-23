(function () {
    如果 (window.innerWidth < 600 || window.innerWidth >= 1000) 返回;

    const 重置 = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    };

    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', () => setTimeout(reset, 50));
        window.visualViewport.addEventListener('scroll', () => setTimeout(reset, 50));
    } else {
        window.addEventListener('resize', () => setTimeout(reset, 50));
    }

    document.addEventListener('focusout', () => setTimeout(reset, 150));
})();
