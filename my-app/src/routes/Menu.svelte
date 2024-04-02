<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';

    /**
     * @type {any}
     */
     export let open;
</script>


{#if open}
    <div>
        {#each ['Home', 'Projects', 'Contact'] as link, i}
            <div class="btn" transition:fly={{ y: -15, delay: 50 * i}}>
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