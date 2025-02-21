import"./assets/styles-BK7AYJoX.js";import{a as c}from"./assets/vendor-N5iQpiFS.js";let u=1;const r={categoriesList:document.querySelector(".categories"),modal:document.querySelector(".modal__content"),closeButton:document.querySelector(".modal__close-btn"),backdrop:document.querySelector(".modal"),productsList:document.querySelector(".products")};c.defaults.baseURL="https://dummyjson.com/products";async function p(){return(await c.get("/category-list")).data}async function l(s=1){const o=`?limit=12&skip=${(s-1)*12}`;return(await c.get(o)).data.products}function m(s){const t=s.map(({id:o,title:e,price:n,category:a,thumbnail:i,brand:d})=>`
      <li class="products__item" data-id="${o}">
       <img class="products__image" src="${i}" alt="${e}" />
       <p class="products__title">${e}</p>
       <p class="products__brand">
         <span class="products__brand--bold">Brand: ${d}</span>
       </p>
       <p class="products__category">Category: ${a} </p>
       <p class="products__price">Price: ${n}$</p>
     </li>
    `).join("");r.productsList.insertAdjacentHTML("beforeend",t)}function _(s){s.unshift("all");const t=s.map(o=>`<li class="categories__item">
        <button class="categories__btn" type="button">${o}</button>
      </li>`).join("");r.categoriesList.innerHTML=t}async function g(s){try{const t=await p();_(t);const o=await l(u);m(o)}catch(t){console.log(t)}}document.addEventListener("DOMContentLoaded",g);
//# sourceMappingURL=index.js.map
