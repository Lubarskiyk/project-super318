import{a as s}from"./assets/vendor-CJnw4Yj2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();s.init({once:!1,mirror:!0,easing:"ease-out-cubic",anchorPlacement:'top-bottom"',offset:120,delay:50,duration:500});(()=>{const o={BurgerBtnOpen:document.querySelector("#header-burger-open"),BurgerBtnClose:document.querySelector("#header-burger-close"),burger:document.querySelector(".navigation-wrapper"),body:document.querySelector("body")};o.BurgerBtnOpen.addEventListener("click",t),o.BurgerBtnClose.addEventListener("click",t);function t(){o.burger.classList.toggle("is-open")}})();
//# sourceMappingURL=commonHelpers.js.map
