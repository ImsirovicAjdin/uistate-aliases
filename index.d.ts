// ============================================
// @uistate/aliases - TypeScript Definitions
// ============================================

// --- SELECTION ---
export function $(id: string): HTMLElement | null;
export function qs<E extends Element = Element>(sel: string, ctx?: Document | Element): E | null;
export function qsa<E extends Element = Element>(sel: string, ctx?: Document | Element): NodeListOf<E>;
export function find<E extends Element = Element>(el: Element, sel: string): E | null;

// --- CREATION ---
export function mk<K extends keyof HTMLElementTagNameMap>(tag: K): HTMLElementTagNameMap[K];
export function mk(tag: string): HTMLElement;
export function txt(content: string): Text;
export function frag(): DocumentFragment;

// --- EVENTS ---
export function on<K extends keyof HTMLElementEventMap>(
  el: Element | Document | Window,
  ev: K,
  cb: (this: Element, ev: HTMLElementEventMap[K]) => any,
  opts?: boolean | AddEventListenerOptions
): void;
export function on(
  el: Element | Document | Window,
  ev: string,
  cb: EventListenerOrEventListenerObject,
  opts?: boolean | AddEventListenerOptions
): void;

export function off<K extends keyof HTMLElementEventMap>(
  el: Element | Document | Window,
  ev: K,
  cb: (this: Element, ev: HTMLElementEventMap[K]) => any,
  opts?: boolean | EventListenerOptions
): void;
export function off(
  el: Element | Document | Window,
  ev: string,
  cb: EventListenerOrEventListenerObject,
  opts?: boolean | EventListenerOptions
): void;

export function once<K extends keyof HTMLElementEventMap>(
  el: Element | Document | Window,
  ev: K,
  cb: (this: Element, ev: HTMLElementEventMap[K]) => any
): void;
export function once(
  el: Element | Document | Window,
  ev: string,
  cb: EventListenerOrEventListenerObject
): void;

export function emit(el: Element, ev: string, detail?: any): void;

// --- MANIPULATION ---
export function append(parent: Element, ...children: (Node | string)[]): void;
export function prepend(parent: Element, ...children: (Node | string)[]): void;
export function before(ref: Element, ...nodes: (Node | string)[]): void;
export function after(ref: Element, ...nodes: (Node | string)[]): void;
export function replace(old: Element, ...nodes: (Node | string)[]): void;
export function remove(el: Element): void;

// --- ATTRIBUTES ---
export function attr(el: Element, name: string): string | null;
export function attr(el: Element, name: string, value: string | null): void;

export function data(el: HTMLElement, key: string): string | undefined;
export function data(el: HTMLElement, key: string, value: string): void;

// --- CLASSES ---
export function cls(el: Element, ...classes: string[]): void;
export function uncls(el: Element, ...classes: string[]): void;
export function toggle(el: Element, cls: string, force?: boolean): boolean;
export function has(el: Element, cls: string): boolean;

// --- STYLES ---
export function css(el: HTMLElement, prop: string): string;
export function css(el: HTMLElement, prop: string, value: string): void;
export function css(el: HTMLElement, prop: Partial<CSSStyleDeclaration>): void;

// --- TRAVERSAL ---
export function parent(el: Element): HTMLElement | null;
export function children(el: Element): Element[];
export function siblings(el: Element): Element[];
export function next(el: Element): Element | null;
export function prev(el: Element): Element | null;

// --- UTILITIES ---
export function ready(cb: () => void): void;
export function clone<T extends Node>(el: T, deep?: boolean): T;
export function empty(el: Element): void;
