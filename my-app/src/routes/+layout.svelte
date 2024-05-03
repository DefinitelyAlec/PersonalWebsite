<script lang="ts">
  import "../app.css";
  import Header from "./Header.svelte";
  import CircleCursor from "./CircleCursor.svelte";
</script>

<main>
  <div class="page-container">
    <CircleCursor />
    
    <Header />

    <div class="content">
      <slot />
    </div>
  </div>
</main>

<style lang="postcss">
  .page-container {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh; /* Ensures the container takes up the full viewport height */
  }

  .content {
    flex: 1; /* Fill remaining vertical space */
    overflow-y: auto; /* Allow content to scroll if it exceeds the available space */
    scrollbar-gutter: stable;
  }
</style>
