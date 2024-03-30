<!-- Everything in here appears on all +page.svelte files -->
<script>
    import '../app.css'
</script>


<nav class="flex justify-around">
    <a href="/">Home</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
</nav>

<slot />