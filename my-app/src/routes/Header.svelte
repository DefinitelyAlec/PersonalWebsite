<script>
  // @ts-ignore
  import MdiEmailOutline from '~icons/mdi/email-outline';
  // @ts-ignore
  import MdiGithub from '~icons/mdi/github';
  // @ts-ignore
  import MdiMoonWaningCrescent from '~icons/mdi/moon-waning-crescent';
  // @ts-ignore
  import MdiWhiteBalanceSunny from '~icons/mdi/white-balance-sunny';
  import { theme } from '../stores/content';
  import { onDestroy, onMount } from 'svelte';
  
  let dropdownVisibleStart = false;

  function toggleTheme(){

    theme.set($theme=="light"? "dark" : "light");
  }

  function checkOverflow() {
    const navStart = document.getElementById('navStart');
    const navEnd = document.getElementById('navEnd');
    const container = document.querySelector('.navbar');

    let startWidth = -1;
    let endWidth = -1;
    
    if (navStart && navEnd && container) {
      if (startWidth != 0 && endWidth != 0) {
        startWidth = navStart.scrollWidth;
        endWidth = navEnd.scrollWidth;
        console.log("start: "+startWidth)
        console.log("end: "+endWidth)
        console.log("container: "+container.scrollWidth)
      }

      if (container && startWidth + endWidth < container.scrollWidth){
        dropdownVisibleStart = false;
      } else {
        dropdownVisibleStart = true;
      }
        // const isOverflowing = navStart.scrollWidth+navEnd.scrollWidth > container.clientWidth || navStart.scrollWidth+navEnd.scrollWidth > container.clientWidth;
        // console.log("navStart: "+navStart.scrollWidth+ " container: "+container.clientWidth)
        // console.log(isOverflowing)
        // dropdownVisibleStart = isOverflowing; 
                 
    }
  }

  // mount the theme variable onto the data-theme attribute so it's dynamic
  onMount(() => {
    theme.subscribe(value => {
      document.documentElement.setAttribute('data-theme', value);
    });

    window.addEventListener('resize', checkOverflow)
    checkOverflow();
  });

  // Cleanup event listener on component unmount
  // onDestroy(() => {
  //   window.removeEventListener('resize', checkOverflow);
  // });
  
</script>

<div class="navbar bg-base-100">
  <div id="navStart" class="navbar-start">
    <div class="dropdown" class:hidden={!dropdownVisibleStart}>
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
            d="M4 6h16M4 12h16M4 18h16"
          /></svg
        >
      </div>
      <ul
        class="menu dropdown-content p-2 shadow bg-base-100 rounded-box"
      >
        <li><a href="/" class="home-btn">Home</a></li>
        <li><a href="/projects" class="projects-btn">Projects</a></li>
      </ul>
    </div>

      <a class="btn btn-ghost text-xl home-btn" href="/" class:hidden={dropdownVisibleStart}>Home</a>
      <a class="btn btn-ghost text-xl projects-btn" href="/projects" class:hidden={dropdownVisibleStart}>Projects</a>  
    
  </div>

  <div id="navEnd" class="navbar-end">
    <div class="dropdown" class:hidden={!dropdownVisibleStart}>
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
            d="M4 6h16M4 12h16M4 18h16"
          /></svg
        >
      </div>
      <ul class="dropdown-content shadow bg-base-100 rounded-box">
        <li>
          <a title="Email" href="mailto:alecparent@rocketmail.com">
            <button class="btn btn-ghost btn-circle">
              <MdiEmailOutline/>
            </button>
          </a>
        </li>
        <li>
          <a title="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/DefinitelyAlec">
            <button class="btn btn-ghost btn-circle">          
              <MdiGithub/>
            </button>
          </a>
        </li>
        <li>
          <button title="Toggle Theme" class="btn btn-ghost btn-circle" on:click={toggleTheme}>
            {#if $theme == 'dark'}
              <MdiMoonWaningCrescent/>
            {:else if $theme == 'light'}
              <MdiWhiteBalanceSunny/>
            {/if}
          </button>
        </li>
      </ul>
    </div>

      <a title="Email" href="mailto:alecparent@rocketmail.com" class:hidden={dropdownVisibleStart}>
        <button class="btn btn-ghost btn-circle">
            <MdiEmailOutline/>
        </button>
      </a>
  
      <a title="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/DefinitelyAlec" class:hidden={dropdownVisibleStart}>
        <button class="btn btn-ghost btn-circle">          
          <MdiGithub/>
        </button>
      </a>
  
      <button title="Toggle Theme" class="btn btn-ghost btn-circle" on:click={toggleTheme} class:hidden={dropdownVisibleStart}>
        {#if $theme == 'dark'}
          <MdiMoonWaningCrescent/>
        {:else if $theme == 'light'}
          <MdiWhiteBalanceSunny/>
        {/if}
      </button>
    
    
  </div>
</div>
