/* empty css                      */import{S,a as b,i as l}from"./assets/vendor-DdGhKT1E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-more"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const t=o.map(({webformatURL:a,largeImageURL:i,tags:e,likes:r,views:s,comments:v,downloads:w})=>`
    <li class="gallery-item">
      <a href="${i}">
        <img src="${a}" alt="${e}" />
      </a>
      <div class="info">
        <p>Likes: ${r}</p>
        <p>Views: ${s}</p>
        <p>Comments: ${v}</p>
        <p>Downloads: ${w}</p>
      </div>
    </li>
  `).join("");u.insertAdjacentHTML("beforeend",t),q.refresh()}function B(){u.innerHTML=""}function y(){f.classList.remove("hidden")}function h(){f.classList.add("hidden")}function M(){m.classList.remove("hidden")}function g(){m.classList.add("hidden")}const $="55039806-2a0c5390e699dedf74405cda1",E="https://pixabay.com/api/";async function L(o,t=1){return(await b.get(E,{params:{key:$,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const P=document.querySelector(".search-form"),O=document.querySelector(".load-more");let n=1,c="",d=0;P.addEventListener("submit",async o=>{if(o.preventDefault(),c=o.target.elements.searchQuery.value.trim(),!!c){n=1,B(),g(),y();try{const t=await L(c,n);if(d=t.totalHits,t.hits.length===0){l.error({message:"Sorry, no images found."});return}p(t.hits),d>15&&M()}catch{l.error({message:"Error loading images"})}finally{h()}}});O.addEventListener("click",async()=>{n+=1,y();try{const o=await L(c,n);p(o.hits);const t=Math.ceil(d/15);n>=t&&(g(),l.info({message:"We're sorry, but you've reached the end of search results."}));const a=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"})}catch{l.error({message:"Error loading more images"})}finally{h()}});
//# sourceMappingURL=index.js.map
