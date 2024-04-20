<script lang="ts">
    let xPos = 0;
    let yPos = 0;

    function mouseMoved(event: MouseEvent) {
        xPos = event.clientX;
        yPos = event.clientY;
    }
</script>


<div role="document" class="page-container" on:mousemove={mouseMoved}>
    <h1 class="text-3xl font-bold text-center py-12">
        Alec Parent's Personal Website
    </h1>
    <div class="circle" style="top: {yPos-200}px; left: {xPos-200}px;"></div>

</div>


<style lang="postcss">
    .page-container {
        position: relative; /* prevents scrollbars */
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
</style>
