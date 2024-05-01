<script>

    export let title;
    export let description
</script>

<p>the answer is {title}</p>
{#each description as point}
    <p>* {point}</p>
{/each}