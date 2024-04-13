<script>
  import MdiEmailOutline from '~icons/mdi/email-outline';
  import MdiGithub from '~icons/mdi/github';
  import MdiMoonWaningCrescent from '~icons/mdi/moon-waning-crescent';
  import { theme } from '../stores';
  import { onMount } from 'svelte';

  function toggleTheme(){
    theme.set($theme=="light"? "dark" : "light");
    console.log($theme);
  }

  // mount the theme variable onto the data-theme attribute so it's dynamic
  onMount(() => {
    theme.subscribe(value => {
      document.documentElement.setAttribute('data-theme', value);
    });
  });
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          /></svg
        >
      </div>
      <ul
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/">Homepage</a></li>
        <li><a href="/projects">Projects</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a class="btn btn-ghost text-xl" href="/">Alec Parent</a>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost btn-circle">
        <MdiEmailOutline/>
    </button>
    <button class="btn btn-ghost btn-circle">
      <MdiGithub/>
    </button>
    <button class="btn btn-ghost btn-circle" on:click={toggleTheme}>
      <MdiMoonWaningCrescent/>
    </button>
  </div>
</div>
