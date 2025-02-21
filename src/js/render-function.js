//Функцію для створення, рендеру або видалення розмітки
//Логіка сторінки Home

import { refs } from './refs';

export function renderProductsList(products) {
  const markup = products
    .map(
      ({ id, title, price, category, thumbnail, brand }) => `
      <li class="products__item" data-id="${id}">
       <img class="products__image" src="${thumbnail}" alt="${title}" />
       <p class="products__title">${title}</p>
       <p class="products__brand">
         <span class="products__brand--bold">Brand: ${brand}</span>
       </p>
       <p class="products__category">Category: ${category} </p>
       <p class="products__price">Price: ${price}$</p>
     </li>
    `
    )
    .join('');
  refs.productsList.insertAdjacentHTML('beforeend', markup);
}
