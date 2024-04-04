<!-- Everything in here appears on all +page.svelte files -->
<script>
  import "../app.css";

  import { Hamburger } from "svelte-hamburgers";
  import Menu from "./Menu.svelte";

  /**
   * @type {any}
   */
  let open = false;
</script>

<div class="dropdown">
    
        <Hamburger bind:open/>
    
    <Menu bind:open />
</div>

<!-- <Hamburger
    bind:open
    --color="white"/>

<Menu 
    bind:open/> -->

<slot />
