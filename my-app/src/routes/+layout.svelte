<script lang="ts">
  import "../app.css";

  import Header from "./Header.svelte";

</script>

<main>
  <Header />

  <slot />
</main>

<style>
  main {
    overflow: hidden;

  }

</style>