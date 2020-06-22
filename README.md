<h1 align="center">easycontext</h1>
<h3 align="center">Simple context menu for the web.</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/easycontext" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/easycontext.svg">
  </a>
  <a href="https://github.com/TimoBechtel/easycontext/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/TimoBechtel/easycontext" />
  </a>
</p>
<p align="center">
  ·
  <a href="https://github.com/TimoBechtel/easycontext#readme">Homepage</a>
  ·
  <a href="https://timobechtel.github.io/easycontext/">View Demo</a>
  ·
  <a href="https://github.com/TimoBechtel/easycontext/issues">Report Bug / Request Feature</a>
  ·
</p>

## Table of Contents

- [Installation](#Install)
- [Usage](#usage)
- [Test](#run-tests)
- [Contact](#contact)
- [Contributing](#Contributing)
- [License](#license)

## Install

### NPM:

```sh
npm install easycontext
```

### CDN:

```html
<script src="https://unpkg.com/easycontext"></script>
```

## Usage

### Import as module:

```javascript
import { contextmenu } from 'easycontext';
```

### Or when using the CDN:

```javascript
const { contextmenu } = easycontext;
```

### Use

Use `contextmenu` for selecting one or more HTMLElements to append a context menu to.
You can it one ore more HTMLElements, a selector string or a NodeList. It uses [Universal Element Accept](https://github.com/CompactJS/uea) under the hood.

### Example:

```javascript
contextmenu('#my-button', [
  {
    text: 'This is a button',
    onClick() {
      console.log('Do something');
    },
  },
]);

// you can also use a funtion to dynamically generate menu items:
contextmenu('button', (target) => {
  return target.classList.contains('removable')
    ? [
        {
          text: 'Remove',
          onClick() {
            target.parentElement.removeChild(target);
          },
        },
      ]
    : [
        {
          text: 'This is not clickable',
        },
      ];
});

// you can also just add a context menu to everything
contextmenu(document, [
  {
    text: 'Reload page',
    onClick() {
      window.location.reload();
    },
  },
]);
```

### Doc:

```typescript
/**
 * Creates a context menu for given element(s) / selector string
 * @param element Single HTMLElement, Array or query selector string (using @compactjs/uea)
 * @param items Menu items or function that returns menu items
 * @param options Additional Options
 */
function contextmenu(
  element: string | HTMLElement | HTMLElement[] | HTMLCollection | NodeList,
  items: MenuItem[] | ((target: HTMLElement) => MenuItem[]),
  options?: MenuOptions
): void;

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
```

## Run tests

```sh
npm run test
```

## Contact

👤 **Timo Bechtel**

- Website: https://timobechtel.com
- Twitter: [@TimoBechtel](https://twitter.com/TimoBechtel)
- GitHub: [@TimoBechtel](https://github.com/TimoBechtel)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />

1. Check [issues](https://github.com/TimoBechtel/easycontext/issues)
1. Fork the Project
1. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
1. Test your changes `npm run test`
1. Commit your Changes (`git commit -m 'feat: add amazingFeature'`)
1. Push to the Branch (`git push origin feat/AmazingFeature`)
1. Open a Pull Request

### Commit messages

This project uses semantic-release for automated release versions. So commits in this project follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines. I recommend using [commitizen](https://github.com/commitizen/cz-cli) for automated commit messages.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Distributed under the [MIT](https://github.com/TimoBechtel/easycontext/blob/main/LICENSE) License.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
