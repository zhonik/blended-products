// Функції для роботи з бекендом
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/products';
export async function getProductsCategories() {
  const END_POINT = '/category-list';
  const url = `${END_POINT}`;

  const resp = await axios.get(url);
  return resp.data;
}

export async function getProducts(page = 1) {
  const skip = (page - 1) * 12;
  const url = `?limit=12&skip=${skip}`;

  const response = await axios.get(url);
  return response.data.products;
}
