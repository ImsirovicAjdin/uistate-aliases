# @uistate/aliases

**Ergonomic DOM aliases that stay close to the metal.**

Thin, transparent wrappers for verbose DOM APIs. Zero abstraction penalty. You're still writing vanilla JavaScript—just faster.

## Philosophy

Every function is a one-line wrapper with 1:1 mapping to platform primitives. No magic, no lock-in, no framework churn. Just ergonomics.

## Installation

```bash
npm install @uistate/aliases
```

## Usage

```javascript
// Import what you need
import { $, mk, on, find } from '@uistate/aliases';

// Or import everything
import * as dom from '@uistate/aliases';
```

## Full Example

```javascript
import { $, mk, on, find } from '@uistate/aliases';

const list = $('list');
const add = $('add');
let counter = 1;

on(add, 'click', () => {
  const li = mk('li');
  li.innerHTML = `Item ${counter++} <button class="remove">Remove</button>`;
  list.append(li);
});

on(list, 'click', (e) => {
  const btn = find(e.target, 'button.remove');
  if (!btn) return;
  const li = find(btn, 'li');
  alert(`Removing ${li.textContent.replace(' Remove', '')}`);
  li.remove();
});
```

**Character Count Comparison:**
- Original: 449 characters
- Aliased: 329 characters  
- **Savings: ~27% reduction**

## API Reference

### Selection

#### `$(id)`
Get element by ID.
```javascript
const el = $('myId');
// document.getElementById('myId')
```

#### `qs(selector, context?)`
Query selector (single element).
```javascript
const btn = qs('.button');
const nested = qs('.child', parent);
// document.querySelector('.button')
```

#### `qsa(selector, context?)`
Query selector all.
```javascript
const items = qsa('.item');
// document.querySelectorAll('.item')
```

#### `find(element, selector)`
Find closest ancestor matching selector.
```javascript
const li = find(button, 'li');
// button.closest('li')
```

### Creation

#### `mk(tag)`
Create element.
```javascript
const div = mk('div');
// document.createElement('div')
```

#### `txt(content)`
Create text node.
```javascript
const text = txt('Hello');
// document.createTextNode('Hello')
```

#### `frag()`
Create document fragment.
```javascript
const fragment = frag();
// document.createDocumentFragment()
```

### Events

#### `on(element, event, callback, options?)`
Add event listener.
```javascript
on(button, 'click', handleClick);
on(input, 'change', handleChange, { passive: true });
// element.addEventListener(event, callback, options)
```

#### `off(element, event, callback, options?)`
Remove event listener.
```javascript
off(button, 'click', handleClick);
// element.removeEventListener(event, callback, options)
```

#### `once(element, event, callback)`
Add one-time event listener.
```javascript
once(button, 'click', handleClick);
// element.addEventListener(event, callback, { once: true })
```

#### `emit(element, event, detail?)`
Dispatch custom event.
```javascript
emit(element, 'custom', { data: 'value' });
// element.dispatchEvent(new CustomEvent(event, { detail }))
```

### Manipulation

#### `append(parent, ...children)`
Append children to parent.
```javascript
append(list, item1, item2);
// parent.append(...children)
```

#### `prepend(parent, ...children)`
Prepend children to parent.
```javascript
prepend(list, item);
// parent.prepend(...children)
```

#### `before(reference, ...nodes)`
Insert nodes before reference.
```javascript
before(item, newItem);
// reference.before(...nodes)
```

#### `after(reference, ...nodes)`
Insert nodes after reference.
```javascript
after(item, newItem);
// reference.after(...nodes)
```

#### `replace(old, ...nodes)`
Replace element with nodes.
```javascript
replace(oldItem, newItem);
// old.replaceWith(...nodes)
```

#### `remove(element)`
Remove element from DOM.
```javascript
remove(item);
// element.remove()
```

### Attributes

#### `attr(element, name, value?)`
Get/set/remove attribute.
```javascript
const href = attr(link, 'href');           // Get
attr(link, 'href', '/path');               // Set
attr(link, 'disabled', null);              // Remove
```

#### `data(element, key, value?)`
Get/set dataset attribute.
```javascript
const id = data(element, 'id');            // Get
data(element, 'id', '123');                // Set
```

### Classes

#### `cls(element, ...classes)`
Add classes.
```javascript
cls(element, 'active', 'highlight');
// element.classList.add(...classes)
```

#### `uncls(element, ...classes)`
Remove classes.
```javascript
uncls(element, 'active', 'highlight');
// element.classList.remove(...classes)
```

#### `toggle(element, class, force?)`
Toggle class.
```javascript
toggle(element, 'active');
toggle(element, 'visible', true);
// element.classList.toggle(class, force)
```

#### `has(element, class)`
Check if element has class.
```javascript
if (has(element, 'active')) { }
// element.classList.contains(class)
```

### Styles

#### `css(element, property, value?)`
Get/set styles.
```javascript
const color = css(element, 'color');                    // Get
css(element, 'color', 'red');                           // Set
css(element, { color: 'red', fontSize: '16px' });       // Set multiple
```

### Traversal

#### `parent(element)`
Get parent element.
```javascript
const p = parent(element);
// element.parentElement
```

#### `children(element)`
Get child elements as array.
```javascript
const kids = children(element);
// Array.from(element.children)
```

#### `siblings(element)`
Get sibling elements.
```javascript
const sibs = siblings(element);
```

#### `next(element)`
Get next sibling element.
```javascript
const nextEl = next(element);
// element.nextElementSibling
```

#### `prev(element)`
Get previous sibling element.
```javascript
const prevEl = prev(element);
// element.previousElementSibling
```

### Utilities

#### `ready(callback)`
Execute callback when DOM is ready.
```javascript
ready(() => {
  console.log('DOM ready');
});
```

#### `clone(element, deep?)`
Clone element.
```javascript
const copy = clone(element);
const deepCopy = clone(element, true);
// element.cloneNode(deep)
```

#### `empty(element)`
Remove all children.
```javascript
empty(element);
// element.innerHTML = ''
```

## Bundle Size

~2-3kb minified + gzipped. Tree-shakeable—import only what you use.

## TypeScript

Full TypeScript definitions included.

```typescript
import { $, mk, on } from '@uistate/aliases';

const button = $('myButton'); // HTMLElement | null
const div = mk('div');        // HTMLDivElement
```

## Why @uistate/aliases?

### ✅ What We Alias
- Verbose global functions: `document.getElementById` → `$`
- Repetitive API calls: `document.createElement` → `mk`
- Long method names: `addEventListener` → `on`

### ❌ What We Don't Alias
- Property access: `e.target`, `el.textContent` (stay vanilla)
- Native methods: `remove()`, `replace()` (unless they're verbose)
- Standard operations: String/Array methods (use platform APIs)

### Philosophy
Close to the metal, ergonomic by design. These aliases are:
- **Transparent**: 1:1 mapping to platform APIs
- **Educational**: Learn vanilla JS through usage
- **Optional**: No lock-in, adopt incrementally
- **Timeless**: Won't break when frameworks change

## Ecosystem

Part of the **uistate** family:
- `@uistate/core` - State management
- `@uistate/aliases` - DOM ergonomics (this package)

## License

MIT
