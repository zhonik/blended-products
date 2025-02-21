import"./assets/styles-BK7AYJoX.js";import{a as s}from"./assets/vendor-N5iQpiFS.js";s.defaults.baseURL="https://dummyjson.com/products/";async function n(){return(await s.get("category-list")).data}const r={categoriesList:document.querySelector(".categories")};function a(e){e.unshift("All");const t=e.map(o=>`<li class="categories__item">
        <button class="categories__btn" type="button">${o}</button>
      </li>`).join("");r.categoriesList.innerHTML=t}async function c(e){try{const t=await n();a(t)}catch(t){console.log(t)}}document.addEventListener("DOMContentLoaded",c);
//# sourceMappingURL=index.js.map
