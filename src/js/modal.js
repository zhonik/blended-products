import { onEscapePress } from './handlers';
import { refs } from './refs';

//Описана робота модалки - відкриття закриття і все що з модалкою повʼязаноre

export function openModal() {
  refs.backdrop.classList.add('modal--is-open');
  document.addEventListener('keydown', onEscapePress);
  refs.closeButton.addEventListener('click', closeModal);
  refs.backdrop.addEventListener('click', closeModal);
}
export function closeModal() {
  refs.backdrop.classList.remove('modal--is-open');
  document.removeEventListener('keydown', onEscapePress);
}
