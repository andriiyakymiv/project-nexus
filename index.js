(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const o=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),n=()=>{const e=r.getAttribute("aria-expanded")==="true";r.setAttribute("aria-expanded",!e),o.classList.toggle("is-open"),e?document.body.style.overflow="":document.body.style.overflow="hidden"};r.addEventListener("click",n),s.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),r.setAttribute("aria-expanded",!1),document.body.style.overflow="")})})();document.querySelectorAll(".header-link").forEach(o=>{o.addEventListener("click",()=>{document.querySelector(".js-menu-container").classList.remove("is-open"),document.body.style.overflow=""})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector("header"),r=window.visualViewport.height*.25;window.addEventListener("scroll",function(){window.scrollY>r?(o.classList.add("sticky-header"),o.classList.remove("fixed-header")):(o.classList.add("fixed-header"),o.classList.remove("sticky-header"))})});
//# sourceMappingURL=index.js.map
