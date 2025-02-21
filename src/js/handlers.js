// Функції, які передаються колбеками в addEventListners
import { currentPage } from './constants';
import { closeModal } from './modal';
import { getProducts, getProductsCategories } from './products-api';
import { renderCategoriesList, renderProductsList } from './render-function';

export function onEscapePress(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

export async function onDOMContentLoaded(evt) {
  try {
    const categories = await getProductsCategories();
    renderCategoriesList(categories);
    const products = await getProducts(currentPage);
    renderProductsList(products);
  } catch (error) {
    console.log(error);
  }
}
