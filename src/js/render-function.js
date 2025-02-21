//Функцію для створення, рендеру або видалення розмітки

import { refs } from './refs';

export function renderCategoriesList(categories) {
  categories.unshift('All');
  const markup = categories
    .map(
      category =>
        `<li class="categories__item">
        <button class="categories__btn" type="button">${category}</button>
      </li>`
    )
    .join('');

  refs.categoriesList.innerHTML = markup;
}
