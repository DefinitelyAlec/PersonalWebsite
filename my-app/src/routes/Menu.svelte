<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';

    /**
     * @type {any}
     */
     export let open;
</script>


{#if open}
    <!-- Make column of buttons, and make the div space stretch to the full width of the screen -->
    <div class="grid grid-cols-1 gap-4 place-items-stretch">
        {#each ['Home', 'Projects', 'Contact'] as link, i}
            <!-- Make each button have a minimum width so that they are all the same width -->
            <div class="btn max-w-20" transition:fly={{ y: -15, delay: 50 * i}}>
                {#if link=='Home'}
                    <a href="/">{link}</a>
                {:else}
                    <a href="/{link.toLowerCase()}">{link}</a>
                {/if}
            </div>
        {/each}
    </div>
    <!-- <nav class="">
        <div class="px-3 py-1">
            <div class="btn">
                <a href="/">Home</a>
            </div>
        </div>
        <div class="px-3 py-1">
            <div class="btn">
                <a href="/projects">Projects</a>
            </div>
        </div>
        <div class="px-3 py-1">
            <div class="btn">
                <a href="/contact">Contact</a>
            </div>
        </div>
    </nav> -->
{/if}