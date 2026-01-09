// ============================================
// @uistate/aliases - Ergonomic DOM Aliases
// ============================================

// --- SELECTION ---
export const $ = (id) => document.getElementById(id);
export const qs = (sel, ctx = document) => ctx.querySelector(sel);
export const qsa = (sel, ctx = document) => ctx.querySelectorAll(sel);
export const find = (el, sel) => el.closest(sel);

// --- CREATION ---
export const mk = (tag) => document.createElement(tag);
export const txt = (content) => document.createTextNode(content);
export const frag = () => document.createDocumentFragment();

// --- EVENTS ---
export const on = (el, ev, cb, opts) => el.addEventListener(ev, cb, opts);
export const off = (el, ev, cb, opts) => el.removeEventListener(ev, cb, opts);
export const once = (el, ev, cb) => el.addEventListener(ev, cb, { once: true });
export const emit = (el, ev, detail) => el.dispatchEvent(new CustomEvent(ev, { detail }));

// --- MANIPULATION ---
export const append = (parent, ...children) => parent.append(...children);
export const prepend = (parent, ...children) => parent.prepend(...children);
export const before = (ref, ...nodes) => ref.before(...nodes);
export const after = (ref, ...nodes) => ref.after(...nodes);
export const replace = (old, ...nodes) => old.replaceWith(...nodes);
export const remove = (el) => el.remove();

// --- ATTRIBUTES ---
export const attr = (el, name, value) => {
  if (value === undefined) return el.getAttribute(name);
  if (value === null) el.removeAttribute(name);
  else el.setAttribute(name, value);
};

export const data = (el, key, value) => {
  if (value === undefined) return el.dataset[key];
  el.dataset[key] = value;
};

// --- CLASSES ---
export const cls = (el, ...classes) => el.classList.add(...classes);
export const uncls = (el, ...classes) => el.classList.remove(...classes);
export const toggle = (el, cls, force) => el.classList.toggle(cls, force);
export const has = (el, cls) => el.classList.contains(cls);

// --- STYLES ---
export const css = (el, prop, value) => {
  if (typeof prop === 'object') {
    Object.assign(el.style, prop);
  } else if (value === undefined) {
    return getComputedStyle(el)[prop];
  } else {
    el.style[prop] = value;
  }
};

// --- TRAVERSAL ---
export const parent = (el) => el.parentElement;
export const children = (el) => Array.from(el.children);
export const siblings = (el) => children(parent(el)).filter(child => child !== el);
export const next = (el) => el.nextElementSibling;
export const prev = (el) => el.previousElementSibling;

// --- UTILITIES ---
export const ready = (cb) => {
  if (document.readyState !== 'loading') cb();
  else document.addEventListener('DOMContentLoaded', cb);
};

export const clone = (el, deep = true) => el.cloneNode(deep);
export const empty = (el) => { el.innerHTML = ''; };
