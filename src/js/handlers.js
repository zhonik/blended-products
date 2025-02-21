// Функції, які передаються колбеками в addEventListners
import { closeModal } from './modal';
import { getProductsCategories } from './products-api';
import { renderCategoriesList } from './render-function';

export function onEscapePress(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

export async function onDOMContentLoaded(evt) {
  try {
    const categories = await getProductsCategories();
    renderCategoriesList(categories);
  } catch (error) {
    console.log(error);
  }
}
