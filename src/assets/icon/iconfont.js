(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-accessory" viewBox="0 0 1024 1024">'+""+'<path d="M181.28000000000003 764.096a159.04 159.04 0 0 0 113.05599999999998 46.911999999999985l0.15999999999999998-4.163336342344337e-17a158.592 158.592 0 0 0 112.76799999999997-46.656000000000034l0.09599999999999997-0.06400000000000003 294.528-294.528a95.968 95.968 0 0 0-68.12800000000001-163.71199999999993c-24.512 8.881784197001252e-15-49.024 9.280000000000019-67.648 27.968000000000007l-294.49599999999987 294.49600000000004a31.968 31.968 0 1 0 45.248000000000005 45.24799999999998l294.49599999999987-294.49600000000004a31.872 31.872 0 0 1 45.087999999999994 0.15999999999998238 31.551999999999992 31.551999999999992 0 0 1 0.19200000000002504 45.087999999999994l-294.49599999999987 294.49600000000004a95.04 95.04 0 0 1-67.648 28.000000000000014l-0.096 4.163336342344337e-17a95.52 95.52 0 0 1-67.87199999999999-28.159999999999968c-18.112-18.112-28.09600000000001-42.23999999999999-28.128000000000004-67.84a95.13600000000001 95.13600000000001 0 0 1 27.968000000000004-67.776l79.51999999999997-79.52000000000001 0.5119999999999999-0.48000000000000004 220.41599999999994-220.48000000000005a160.32 160.32 0 0 1 226.43199999999996-0.09600000000007469A158.912 158.912 0 0 1 799.9999999999999 395.776c2.842170943040401e-14 42.816-16.67199999999994 83.03999999999999-46.911999999999985 113.28l-300.2879999999999 300.3200000000001a31.968 31.968 0 1 0 45.248000000000005 45.24799999999998l300.2879999999999-300.2880000000002A222.848 222.848 0 0 0 863.9999999999999 395.7759999999998c-1.7763568394002505e-14-59.872-23.26400000000003-116.15999999999997-65.50400000000005-158.39999999999998a223.168 223.168 0 0 0-158.3360000000001-65.43999999999994 223.67999999999998 223.67999999999998 0 0 0-158.59199999999993 65.60000000000002l-311.45599999999985 311.4240000000001a31.68 31.68 0 0 0-7.103999999999996 11.072000000000005c-18.495999999999988 26.560000000000006-28.639999999999986 57.920000000000016-28.607999999999972 91.04000000000002a159.104 159.104 0 0 0 46.88000000000004 113.024" fill="#1296db" ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)