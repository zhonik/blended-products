// Функції для роботи з бекендом
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/products/';
export async function getProductCategories() {
  const END_POINT = 'category-list';
  const url = `${END_POINT}`;
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    console.log(err);
  }
}
