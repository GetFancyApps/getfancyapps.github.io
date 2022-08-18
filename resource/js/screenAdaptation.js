(function () {
    function flex() {
      const designWidth = 1200;
      const minWidth = 756;
      const html = document.documentElement;
      const htmlWidth = html.offsetWidth;
      const maxFontSize = 100;
      let fontSize;
      if (htmlWidth > designWidth) {
        fontSize = maxFontSize;
      }
      if (htmlWidth < minWidth) {
        fontSize = (minWidth * maxFontSize) / designWidth;
      }
      if (htmlWidth >= minWidth && htmlWidth <= designWidth) {
        fontSize = (htmlWidth * maxFontSize) / designWidth;
      }
      html.style.fontSize = `${fontSize}px`;
    }
    flex();
    window.onload = flex;
    // window.onresize = flex;
    window.addEventListener('resize', flex)
  }());