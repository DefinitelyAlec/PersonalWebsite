<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { theme } from '../stores';
  
    let xPos = 0;
    let yPos = 0;
    let targetX = 0;
    let targetY = 0;
  
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
    // let circleColor = 'radial-gradient(circle, rgba(0,0,255,0.2) 0%, rgba(0,0,255,0) 60%)'; // Default color

    // if ($theme == "light"){
    //   circleColor = "radial-gradient(circle, rgba(255,255,224,0.2) 0%, rgba(255,255,224,0) 60%)"
    // } else {
    //   circleColor = "radial-gradient(circle, rgba(0,0,255,0.2) 0%, rgba(0,0,255,0) 60%)"
    // }
    // Subscribe to theme changes
    // let unsubscribe = theme.subscribe(value => {
    //   // Update circle color based on theme
    //   circleColor = value === 'light' ? 'radial-gradient(circle, rgba(255,255,224,0.2) 0%, rgba(255,255,224,0) 60%)' : 'radial-gradient(circle, rgba(0,0,255,0.2) 0%, rgba(0,0,255,0) 60%)';
    // });
    
  </script>
  
  <style lang="postcss">
    .circle {
      position: absolute;
      width: 30em; /* Adjusted size in em units */
      height: 30em; /* Adjusted size in em units */
      border-radius: 50%;
      /* Background made of translucent pixels */
       /*background-image: radial-gradient(circle, rgba(0,0,255,0.2) 0%, rgba(0,0,255,0) 60%); */
      background-size: 100% 100%;
      background-repeat: no-repeat;
      pointer-events: none; /* Allows mouse events to pass through */
    }
  </style>
  {#if $theme == "light"}
    <div class="circle" style="top: {yPos - 15}em; left: {xPos - 15}em; background-image: radial-gradient(circle, rgba(255,0,224,0.2) 0%, rgba(255,0,224,0) 60%);"></div>
  {:else}
    <div class="circle" style="top: {yPos - 15}em; left: {xPos - 15}em; background-image: radial-gradient(circle, rgba(0,0,255,0.2) 0%, rgba(0,0,255,0) 60%);"></div>

  {/if}