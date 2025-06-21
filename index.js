import{a as h,S as g,i as y}from"./assets/vendor-BDlA6vKe.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const b="https://pixabay.com/api/";function L(a){return"?"+new URLSearchParams({key:"50351330-2fc0fc2b1e2442bcaa307ce6b",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString()}function S(a){const r=b+L(a);return h(r).then(o=>o.data).catch(o=>console.error(o))}function q({src:a,originalSrc:r,description:o,likes:s,views:e,comments:t,downloads:i}){return`<li class="gallery-item">
            <a class="gallery-link" href="${r}">
                <img
                    class="gallery-image"
                    src="${a}"
                    data-source="${r}"
                    alt="${o}"
                    width=360
                    height=200
                />

            </a>
            <ul class='metadata'>
                <li>
                    <p class='metadata-heading'>Likes</p>
                    <p>${s}</p>
                </li>
                <li>
                    <p class='metadata-heading'>Views</p>
                    <p>${e}</p>
                </li>
                <li>
                    <p class='metadata-heading'>Comments</p>
                    <p>${t}</p>
                </li>
                <li>
                    <p metadata-heading>Downloads</p>
                    <p>${i}</p>
                </li>
            </ul>
        </li>`}function v(a){a.innerHTML=""}function w(a,r){if(a){const o=r.map(({webformatURL:e,largeImageURL:t,tags:i,likes:d,views:m,comments:p,downloads:f})=>q({src:e,originalSrc:t,description:i,likes:d,views:m,comments:p,downloads:f})).join("");a.innerHTML=o,new g(".gallery a").refresh()}}const n=document.querySelector(".gallery"),P=document.querySelector("form"),l=document.querySelector("input"),c=document.querySelector(".loader"),u=document.querySelector("button");P.addEventListener("submit",a=>{if(a.preventDefault(),!n)return;const r=l.value;l.value="",r&&(v(n),c.classList.remove("hidden"),u.setAttribute("disabled","disabled"),S(r).then(o=>{if(u.removeAttribute("disabled"),c.classList.add("hidden"),!o.hits.length)return y.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});w(n,o.hits)}))});
//# sourceMappingURL=index.js.map
