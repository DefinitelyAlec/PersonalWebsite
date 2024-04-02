<!-- Everything in here appears on all +page.svelte files -->
<script>
    import '../app.css'

    import { Hamburger } from 'svelte-hamburgers';
    import Menu from './Menu.svelte';

    /**
     * @type {any}
     */
    let open;
</script>

<Hamburger 
    bind:open 
    --color="white" />

<Menu bind:open />

<slot />