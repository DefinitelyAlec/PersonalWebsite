import {writable} from 'svelte/store';
import {browser} from '$app/environment';

// exported theme variable
export let theme = writable();
// prevent SSR environment error
if (browser){
    const storedTheme = localStorage.getItem('theme')

    // if there isn't a theme set in local storage, set the theme to dark
    theme = writable(storedTheme || 'dark')
    // change the local storage every time the theme store is updated
    theme.subscribe((value) => localStorage.setItem('theme', value))
}
