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
  import { onMount } from 'svelte';
  
  let dropdownVisibleStart = false;

  function toggleTheme(){

    theme.set($theme=="light"? "dark" : "light");
  }

  // mount the theme variable onto the data-theme attribute so it's dynamic
  onMount(() => {
    theme.subscribe(value => {
      document.documentElement.setAttribute('data-theme', value);
    });
    // Check if buttons overflow and toggle dropdown visibility accordingly
    const navbarStart = document.querySelector('.navbar-start');
    const navbarEnd = document.querySelector('.navbar-end');


    const checkOverflow = () => {
      const navbarStartRect = navbarStart?.getBoundingClientRect()
      const navbarEndRect = navbarEnd?.getBoundingClientRect()
      const startWidth = navbarStartRect.width
      const endWidth = navbarEndRect.width
      
      // @ts-ignore
      if (startWidth + endWidth < document.body.clientWidth){
        // console.log("document: "+document.body.clientWidth)
        // console.log("navbars: "+(Number(startWidth) + Number(endWidth)))
        console.log("start right: "+navbarStartRect.right)
        console.log("end right: "+navbarEndRect.left)

        console.log("navbars: "+(navbarStartRect.width + navbarEndRect.width))
        console.log("window: "+document.body.clientWidth)

        dropdownVisibleStart = false;
      } else {
        dropdownVisibleStart = true;
      }
    };

    window.addEventListener('resize', checkOverflow);
    checkOverflow();
  });
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
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
  <!-- <div class="navbar-center">
    <a class="btn btn-ghost text-xl" href="/">Alec Parent</a>
  </div> -->
  <div class="navbar-end">
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
          <!-- <label title="Toggle Theme" class="swap swap-rotate btn btn-ghost btn-circle">
            <input type="checkbox"  />
              <MdiMoonWaningCrescent class="swap-off" on:click={toggleTheme}/>
              <MdiWhiteBalanceSunny class="swap-on" on:click={toggleTheme}/>
          </label> -->

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

    <!-- <label class="swap swap-rotate btn btn-ghost btn-circle" class:hidden={dropdownVisibleStart}>
      <input type="checkbox" on:click={toggleTheme}/>
        <MdiMoonWaningCrescent class="swap-off"/>
        <MdiWhiteBalanceSunny class="swap-on"/>
    </label> -->
    <button title="Toggle Theme" class="btn btn-ghost btn-circle" on:click={toggleTheme} class:hidden={dropdownVisibleStart}>
      {#if $theme == 'dark'}
        <MdiMoonWaningCrescent/>
      {:else if $theme == 'light'}
        <MdiWhiteBalanceSunny/>
      {/if}
    </button>
    
  </div>
</div>
