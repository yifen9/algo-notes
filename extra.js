document$.subscribe(function() {
  var tables = document.querySelectorAll("article table")
  tables.forEach(function(table) {
    new Tablesort(table)
  });
});

document$.subscribe(() => {
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(location.hostname)) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});

window.MathJax = {
  tex: {
    inlineMath: [ ["\\(","\\)"] ],
    displayMath: [ ["\\[","\\]"] ],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*",
    processHtmlClass: "arithmatex"
  }
};

(function () {
  'use strict';
  
  var katexMath = (function () {
      var maths = document.querySelectorAll('.arithmatex'),
          tex;
  
      for (var i = 0; i < maths.length; i++) {
        tex = maths[i].textContent || maths[i].innerText;
        if (tex.startsWith('\\(') && tex.endsWith('\\)')) {
          katex.render(tex.slice(2, -2), maths[i], {'displayMode': false});
        } else if (tex.startsWith('\\[') && tex.endsWith('\\]')) {
          katex.render(tex.slice(2, -2), maths[i], {'displayMode': true});
        }
      }
  });
  
  (function () {
    var onReady = function onReady(fn) {
      if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", fn);
      } else {
        document.attachEvent("onreadystatechange", function () {
          if (document.readyState === "interactive") {
            fn();
          }
        });
      }
    };
  
    onReady(function () {
      if (typeof katex !== "undefined") {
        katexMath();
      }
    });
  })();
  
  }());