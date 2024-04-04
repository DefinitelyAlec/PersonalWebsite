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

<!-- 
<div class="navbar bg-base-100">
  <div class="navbar-start">
    {#if open}{/if}
  </div>

  <div class="navbar-center">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost btn-circle">
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        /></svg
      >
    </button>
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
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
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          /></svg
        >
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div> -->

<!-- {#if open}
    <div class="grid grid-cols-1 gap-4 place-items-stretch">
        {#each ['Home', 'Projects', 'Contact'] as link, i}
            <div class="btn max-w-20">
                {#if link=='Home'}
                    <a href="/">{link}</a>
                {:else}
                    <a href="/{link.toLowerCase()}">{link}</a>
                {/if}
            </div>
        {/each}
    </div> -->
<!-- <nav class="">
        <div class="px-3 py-1">
            <div class="btn">
                <a href="/">Home</a>
            </div>
        </div>
        <div class="px-3 py-1">
            <div class="btn">
                <a href="/projects">Projects</a>
            </div>
        </div>
        <div class="px-3 py-1">
            <div class="btn">
                <a href="/contact">Contact</a>
            </div>
        </div>
    </nav> -->
<!-- {/if} -->
