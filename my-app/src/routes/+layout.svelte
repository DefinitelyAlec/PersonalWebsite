<script lang="ts">
  import { onMount } from 'svelte';
  import "../app.css";
  import Header from "./Header.svelte";

  let xPos = 0;
  let yPos = 0;
  let prevXPos = 0;
  let prevYPos = 0;

  // Function to convert pixels to em units based on the font size of the parent element
  function pxToEm(px: number) {
    const fontSize = parseFloat(getComputedStyle(document.body).fontSize);
    return px / fontSize;
  }

  function mouseMoved(event: MouseEvent) {
    prevXPos = xPos;
    prevYPos = yPos;

    xPos = pxToEm(event.clientX);
    yPos = pxToEm(event.clientY);
  }

  onMount(() => {
    // Smooth out the movement of the circle
    const smoothness = 0.97; // Adjust this value for the desired smoothness
    const updateCirclePosition = () => {
      xPos += (prevXPos - xPos) * smoothness;
      yPos += (prevYPos - yPos) * smoothness;
      requestAnimationFrame(updateCirclePosition);
    };
    requestAnimationFrame(updateCirclePosition);
  });
</script>

<main>
  <div role="document" class="page-container" on:mousemove={mouseMoved}>
    <div class="circle" style="top: {yPos-15}em; left: {xPos-15}em;"></div>
    
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
    width: 30em; /* Increased size */
    height: 30em; /* Increased size */
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
