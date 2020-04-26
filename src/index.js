import { accept } from '@compactjs/uea';
import './index.scss';

const createMenu = (parentElement, { className } = {}) => {
  const menu = document.createElement('ul');
  menu.className = className;
  parentElement.appendChild(menu);
  return {
    show(items, { x, y }) {
      menu.innerHTML = '';
      menu.style.top = `${y}px`;
      menu.style.left = `${x}px`;
      items.forEach(({ text = '', className = '', onClick = null }) => {
        const mItem = document.createElement('li');
        mItem.innerHTML = text;
        mItem.className = className;
        if (onClick) {
          // mItem.tabIndex = 0;
          mItem.classList.add('menu-item-clickable');
          mItem.addEventListener('click', onClick);
          mItem.addEventListener('click', () => this.hide());
        }
        menu.appendChild(mItem);
      });
      menu.classList.add('menu-visible');
      // menu.firstChild.focus();
    },
    hide() {
      menu.classList.remove('menu-visible');
    },
  };
};

export const contextmenu = (
  element,
  items,
  {
    parentElement = document.body,
    root = document,
    className = 'context-menu',
  } = {}
) => {
  const elements = accept(element);
  const menu = createMenu(parentElement, { className });
  elements.forEach((e) => {
    e.addEventListener('contextmenu', (e) => {
      const _items = typeof items === 'function' ? items(e.target) : items;
      if (!_items) return;
      menu.show(_items, { x: e.clientX, y: e.clientY });
      e.preventDefault();
    });
  });
  root.addEventListener('click', (e) => {
    // make sure, the clicked element wasn't a menu item
    if (
      !e.target.parentElement ||
      !e.target.parentElement.classList.contains(className)
    )
      menu.hide();
  });
};
