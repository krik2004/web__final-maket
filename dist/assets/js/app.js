(()=>{var e,n={530:()=>{const e=document.querySelector(".first-block__expand-btn"),n=document.querySelector(".first-block__p2");e.addEventListener("click",(()=>{"Читать далее"===e.textContent?(console.log("remove"),n.classList.remove("hidden"),e.textContent="Скрыть"):(e.textContent="Читать далее",n.classList.add("hidden")),e.classList.toggle("first-block__expand-btn--open")}))},749:()=>{const e=document.querySelector(".upper-menu__btn-feedback"),n=document.querySelector(".chat-button"),i=document.querySelector(".popup-feedback"),s=i.querySelector(".close-btn");e.addEventListener("click",(function(){i.style.display="block"})),n.addEventListener("click",(function(){i.style.display="block"})),s.addEventListener("click",(function(){i.style.display="none"})),window.addEventListener("click",(function(e){e.target===i&&(i.style.display="none")}))},86:()=>{const e=document.querySelector(".btn-orderСall"),n=document.querySelector(".call-button"),i=document.querySelector(".popup-orderСall"),s=i.querySelector(".close-btn");e.addEventListener("click",(function(){i.style.display="block"})),n.addEventListener("click",(function(){i.style.display="block"})),s.addEventListener("click",(function(){i.style.display="none"})),window.addEventListener("click",(function(e){e.target===i&&(i.style.display="none")}))},977:()=>{const e=document.querySelector(".upper-menu__burger-button"),n=document.querySelector(".popup-burger"),i=n.querySelector(".popup-burger__button");e.addEventListener("click",(function(){n.style.display="block"})),i.addEventListener("click",(function(){n.style.display="none"})),window.addEventListener("click",(function(e){e.target===n&&(n.style.display="none")}))},616:(e,n,i)=>{"use strict";i(977),i(86),i(749);var s=i(468);let t=0;new s.Z(".swiper-rep-tech__swiper",{spaceBetween:26,pagination:{el:".swiper-rep-tech__swiper-pagination",clickable:!0},slidesPerView:1.3,on:{resize:function(e){window.innerWidth<=767?(r.classList.add("hidden"),t=100,e.enable(),e.el.classList.remove("-non-slider")):window.innerWidth>768?(r.classList.remove("hidden"),e.disable(),e.el.classList.add("-non-slider"),t=3):window.innerWidth>1440&&(r.classList.remove("hidden"),t=4,e.disable(),e.el.classList.add("-non-slider"))}}});const r=document.querySelector(".swiper-rep-tech__expand-btn"),d=Array.from(document.querySelectorAll(".swiper-rep-tech__swiper-slide"));let o;function l(){return window.innerWidth<=768?(d.forEach((e=>e.classList.remove("swiper-rep-tech__swiper-slide--hidden"))),r.classList.add("hidden"),o=100,t=100):window.innerWidth>768&&window.innerWidth<=1439?(r.classList.remove("hidden"),o=2,"Показать все"===r.textContent&&d.forEach(((e,n)=>{e.classList.remove("swiper-rep-tech__swiper-slide--hidden"),n>o&&e.classList.add("swiper-rep-tech__swiper-slide--hidden")}))):window.innerWidth>1440&&(r.classList.remove("hidden"),o=3,"Показать все"===r.textContent&&d.forEach(((e,n)=>{e.classList.remove("swiper-rep-tech__swiper-slide--hidden"),n>o&&e.classList.add("swiper-rep-tech__swiper-slide--hidden")}))),o}window.addEventListener("resize",l),window.addEventListener("load",l),r.addEventListener("click",(e=>{"Показать все"===r.textContent?(r.textContent="Скрыть все",console.log(o),d.forEach((e=>e.classList.remove("swiper-rep-tech__swiper-slide--hidden")))):(r.textContent="Показать все",console.log(o),d.forEach(((e,n)=>{n>o&&e.classList.add("swiper-rep-tech__swiper-slide--hidden")}))),r.classList.toggle("swiper-rep-tech__expand-btn--open")}));let c=0,a=new s.Z(".swiper-rep-brand__swiper",{spaceBetween:26,pagination:{el:".swiper-rep-brand__swiper-pagination",clickable:!0},slidesPerView:1.3,on:{resize:function(e){window.innerWidth<=767?(p.classList.add("hidden"),c=100,e.enable(),e.el.classList.remove("-non-slider")):window.innerWidth>768?(p.classList.remove("hidden"),e.disable(),e.el.classList.add("-non-slider"),c=3):window.innerWidth>1440&&(p.classList.remove("hidden"),c=4,e.disable(),e.el.classList.add("-non-slider"))}}});const p=document.querySelector(".swiper-rep-brand__expand-btn"),w=Array.from(document.querySelectorAll(".swiper-rep-brand__swiper-slide"));let h;function u(){return window.innerWidth<=768?(w.forEach((e=>e.classList.remove("swiper-rep-brand__swiper-slide--hidden"))),p.classList.add("hidden"),h=100,c=100):window.innerWidth>768&&window.innerWidth<=1439?(console.log("удалил между 768 и 1439"),p.classList.remove("hidden"),h=5,a.el.classList.add("-non-slider"),a.disable(),"Показать все"===p.textContent&&w.forEach(((e,n)=>{e.classList.remove("swiper-rep-brand__swiper-slide--hidden"),n>h&&e.classList.add("swiper-rep-brand__swiper-slide--hidden")}))):window.innerWidth>1440&&(p.classList.remove("hidden"),console.log("удалил после 1440"),h=7,a.el.classList.add("-non-slider"),a.disable(),"Показать все"===p.textContent&&w.forEach(((e,n)=>{e.classList.remove("swiper-rep-brand__swiper-slide--hidden"),n>h&&e.classList.add("swiper-rep-brand__swiper-slide--hidden")}))),h}window.addEventListener("resize",u),window.addEventListener("load",u),p.addEventListener("click",(e=>{"Показать все"===p.textContent?(p.textContent="Скрыть все",console.log(h),w.forEach((e=>e.classList.remove("swiper-rep-brand__swiper-slide--hidden")))):(p.textContent="Показать все",console.log(h),w.forEach(((e,n)=>{n>h&&e.classList.add("swiper-rep-brand__swiper-slide--hidden")}))),p.classList.toggle("swiper-rep-brand__expand-btn--open")}));let b=new s.Z(".swiper-prices__swiper",{spaceBetween:26,pagination:{el:".swiper-prices__swiper-pagination",clickable:!0},slidesPerView:1.3,on:{resize:function(e){window.innerWidth<=767?(e.enable(),e.el.classList.remove("-non-slider")):(window.innerWidth>768||window.innerWidth>1440)&&(e.el.classList.add("-non-slider"),e.disable())}}});window.innerWidth<=767&&(b.enable(),b.el.classList.remove("-non-slider"));i(530);console.log("it works!")}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,s),r.exports}s.m=n,e=[],s.O=(n,i,t,r)=>{if(!i){var d=1/0;for(a=0;a<e.length;a++){i=e[a][0],t=e[a][1],r=e[a][2];for(var o=!0,l=0;l<i.length;l++)(!1&r||d>=r)&&Object.keys(s.O).every((e=>s.O[e](i[l])))?i.splice(l--,1):(o=!1,r<d&&(d=r));if(o){e.splice(a--,1);var c=t();void 0!==c&&(n=c)}}return n}r=r||0;for(var a=e.length;a>0&&e[a-1][2]>r;a--)e[a]=e[a-1];e[a]=[i,t,r]},s.d=(e,n)=>{for(var i in n)s.o(n,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},s.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={app:0};s.O.j=n=>0===e[n];var n=(n,i)=>{var t,r,d=i[0],o=i[1],l=i[2],c=0;if(d.some((n=>0!==e[n]))){for(t in o)s.o(o,t)&&(s.m[t]=o[t]);if(l)var a=l(s)}for(n&&n(i);c<d.length;c++)r=d[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(a)},i=self.webpackChunkwebpacktemplate=self.webpackChunkwebpacktemplate||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))})();var t=s.O(void 0,["vendors"],(()=>s(616)));t=s.O(t)})();