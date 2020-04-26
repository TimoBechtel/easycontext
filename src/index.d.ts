declare module 'easycontext';

interface MenuItem {
  /**
   * Menu item text, can also be HTML
   */
  text?: string;
  /**
   * A custom classname
   */
  className?: string;
  /**
   * Function that is called when item is clicked.
   * Not clickable, when omitted.
   */
  onClick?: (event: Event) => void;
}

interface MenuOptions {
  /**
   * Parent element for the menu element to append to
   * @default document.body
   */
  parentElement: HTMLElement;
  /**
   * Document Root, internaly used for adding a click listener to hide context menu.
   * @default document
   */
  root: Document | HTMLElement;
  /**
   * Custom class name for context menu
   * @default 'context-menu'
   */
  className: string;
}

/**
 * Creates a context menu for given element(s) / selector string
 * @param element Single HTMLElement, Array or query selector string (using @compactjs/uea)
 * @param items Menu items or function that returns menu items
 * @param options Additional Options
 */
export function contextmenu(
  element: string | HTMLElement | HTMLElement[] | HTMLCollection | NodeList,
  items: MenuItem[] | ((target: HTMLElement) => MenuItem[]),
  options?: MenuOptions
): void;
