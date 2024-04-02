<!-- Everything in here appears on all +page.svelte files -->
<script>
    import '../app.css'
</script>


<nav class="flex justify-end">
    <div class="px-1">
        <div class="btn">
            <a href="/">Home</a>
        </div>
    </div>
    <div class="px-1">
        <div class="btn">
            <a href="/projects">Projects</a>
        </div>
    </div>
    <div class="px-1">
        <div class="btn">
            <a href="/contact">Contact</a>
        </div>
    </div>
</nav>

<slot />