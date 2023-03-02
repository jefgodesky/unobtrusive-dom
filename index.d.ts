import { CreateOptions } from './src/create'

export as namespace unobtrusiveDom

export function create (options: CreateOptions): HTMLElement
export function addClass (el: HTMLElement, ...classes: string[]): void
export function hasClass (el: HTMLElement, ...classes: string[]): boolean
export function removeClass (el: HTMLElement, ...classes: string[]): void
export function toggleClass (el: HTMLElement, ...classes: string[]): void
export { CreateOptions }
