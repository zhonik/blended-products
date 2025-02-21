import"./assets/styles-BK7AYJoX.js";import{a as s}from"./assets/vendor-N5iQpiFS.js";s.defaults.baseURL="https://dummyjson.com/products/";async function n(){return(await s.get("category-list")).data}const r={productsList:document.querySelector(".products"),categoriesList:document.querySelector(".categories")};function c(e){e.unshift("all");const t=e.map(o=>`<li class="categories__item">
        <button class="categories__btn" type="button">${o}</button>
      </li>`).join("");r.categoriesList.innerHTML=t}async function a(e){try{const t=await n();c(t)}catch(t){console.log(t)}}document.addEventListener("DOMContentLoaded",a);
//# sourceMappingURL=index.js.map
