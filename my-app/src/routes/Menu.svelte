<script>
  // import { fly, scale } from 'svelte/transition';
  // import { quadOut } from 'svelte/easing';

  // /**
  //  * @type {any}
  //  */
  export let open = false;
</script>

{#if open}
  <ul
    tabindex="-1"
    class="menu menu-lg dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
  >
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/projects">Projects</a>
    </li>
    <li>
      <a href="/contact">Contact</a>
    </li>
  </ul>
{/if}

