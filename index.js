/* empty css                      */import{S,a as q,i as n}from"./assets/vendor-DdGhKT1E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".load-more"),B=new S(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const t=o.map(({webformatURL:s,largeImageURL:c,tags:e,likes:r,views:a,comments:b,downloads:w})=>`
    <li class="gallery-item">
      <a href="${c}">
        <img src="${s}" alt="${e}" />
      </a>
      <div class="info">
        <p>Likes: ${r}</p>
        <p>Views: ${a}</p>
        <p>Comments: ${b}</p>
        <p>Downloads: ${w}</p>
      </div>
    </li>
  `).join("");f.insertAdjacentHTML("beforeend",t),B.refresh()}function M(){f.innerHTML=""}function h(){m.classList.remove("hidden")}function g(){m.classList.add("hidden")}function L(){y.classList.remove("hidden")}function d(){y.classList.add("hidden")}const $="55039806-2a0c5390e699dedf74405cda1",E="https://pixabay.com/api/";async function v(o,t=1){return(await q.get(E,{params:{key:$,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const P=document.querySelector(".search-form"),O=document.querySelector(".load-more");let i=1,l="",u=0;P.addEventListener("submit",async o=>{if(o.preventDefault(),l=o.target.elements.searchQuery.value.trim(),!!l){i=1,M(),d(),h();try{const t=await v(l,i);if(u=t.totalHits,t.hits.length===0){n.error({message:"Sorry, no images found."});return}p(t.hits),u>15?L():(d(),n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({message:"Error loading images"})}finally{g()}}});O.addEventListener("click",async()=>{i+=1,d(),h();try{const o=await v(l,i);p(o.hits);const t=Math.ceil(u/15);i>=t?(d(),n.info({message:"We're sorry, but you've reached the end of search results."})):L();const s=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s.height*2,behavior:"smooth"})}catch{n.error({message:"Error loading more images"})}finally{g()}});
//# sourceMappingURL=index.js.map
