import { closeModal } from './modal';

// Функції, які передаються колбеками в addEventListners
export function onEscapePress(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}
