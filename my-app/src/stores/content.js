import {writable} from 'svelte/store';
import {browser} from '$app/environment';

// exported theme variable
export let theme = writable();
// threshhold for navbar dropdown appearing
export let navThreshhold = writable(-1);
// prevent SSR environment error
if (browser){
    const storedTheme = localStorage.getItem('theme')
    const storedNavThreshhold = Number(localStorage.getItem('navThreshhold'))

    // if there isn't a theme set in local storage, set the theme to dark
    theme = writable(storedTheme || 'dark')
    navThreshhold = writable(storedNavThreshhold || -1)

    // change the local storage every time the theme store is updated
    theme.subscribe((value) => localStorage.setItem('theme', value))
    navThreshhold.subscribe((value) => localStorage.setItem('navThreshhold', String(value)))

}
