import { writable } from 'svelte/store';
export const preloader = writable(true);
export const loaded = writable(false);


