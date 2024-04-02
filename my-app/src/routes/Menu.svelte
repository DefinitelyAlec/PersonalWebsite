<script>

    /**
     * @type {any}
     */
     export let open;
</script>


{#if open}
    <nav class="">
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
    </nav>
{/if}