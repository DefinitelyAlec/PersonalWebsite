<script lang="ts">
  import "../app.css";
  import Header from "./Header.svelte";

  let xPos = 0;
  let yPos = 0;

  function mouseMoved(event: MouseEvent) {
      xPos = event.clientX;
      yPos = event.clientY;
  }
</script>

<main>
  <div role="document" class="page-container" on:mousemove={mouseMoved}>
    <div class="circle" style="top: {yPos-200}px; left: {xPos-200}px;"></div>
    
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

  .circle {
    position: absolute;
    width: 400px; /* Increased size */
    height: 400px; /* Increased size */
    border-radius: 50%;
    /* Background made of translucent pixels */
    background-image: radial-gradient(circle, rgba(0,0,255,0.2) 0%, rgba(0,0,255,0) 60%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    pointer-events: none; /* Allows mouse events to pass through */
  }

  .content {
    flex: 1; /* Fill remaining vertical space */
    overflow-y: auto; /* Allow content to scroll if it exceeds the available space */
  }
</style>
