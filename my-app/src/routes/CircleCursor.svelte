<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { theme } from '../stores/content';

  let xPos = 0;
  let yPos = 0;
  let targetX = 0;
  let targetY = 0;
  let circleColor = '';

  // Function to convert pixels to em units based on the font size of the parent element
  function pxToEm(px: number) {
    const fontSize = parseFloat(getComputedStyle(document.body).fontSize);
    return px / fontSize;
  }

  function lerp(start: number, end: number, t: number) {
    return start + t * (end - start);
  }

  function updateCirclePosition() {
    // Move the circle towards the cursor at a constant slow rate
    xPos = lerp(xPos, targetX, 0.05);
    yPos = lerp(yPos, targetY, 0.05);
    requestAnimationFrame(updateCirclePosition);
  }

  onMount(() => {
    updateCirclePosition();
  });

  // check to make sure code isn't run on the server
  // otherwise a "window is not defined" error occurs
  // anything that references DOM elements needs this check
  if(browser){
    // Update target position when the cursor moves
    window.addEventListener('mousemove', (event: MouseEvent) => {
      targetX = pxToEm(event.clientX);
      targetY = pxToEm(event.clientY);
    });
  }

  // Subscribe to theme changes
  theme.subscribe(value => {
    circleColor = value === 'light' ? 'rgba(255,255,0,0.2)' : 'rgba(0,0,255,0.2)';
  });
</script>

<style lang="postcss">
  .circle {
    position: absolute;
    width: 30em; /* Adjusted size in em units */
    height: 30em; /* Adjusted size in em units */
    border-radius: 50%;
    pointer-events: none; /* Allows mouse events to pass through */
  }
</style>

<div class="circle" style="top: {yPos - 15}em; left: {xPos - 15}em; background-image: radial-gradient(circle, {circleColor} 0%, rgba(0,0,0,0) 60%);"></div>
