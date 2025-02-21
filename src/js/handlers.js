// Функції, які передаються колбеками в addEventListners

import { getProductsCategories } from './products-api';
import { renderCategoriesList } from './render-function';

export async function onDOMContentLoaded(evt) {
  try {
    const categories = await getProductsCategories();
    renderCategoriesList(categories);
  } catch (error) {
    console.log(error);
  }
}
