function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequire7bc7=r);var i=r("eWCmQ");const l=document.querySelector(".form"),u=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]');function s(o,t){new Promise(((e,n)=>{setTimeout((()=>{Math.random()>.3?e({position:o,delay:t}):n({position:o,delay:t})}),t)})).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}l.addEventListener("submit",(function(e){e.preventDefault();let o=Number(u.value),t=Number(a.value),n=Number(d.value);for(let e=0;e<n;e++)s(e,o),o+=t}));
//# sourceMappingURL=03-promises.f7d237d6.js.map