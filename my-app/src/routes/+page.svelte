<script lang="ts">
    import MdiEmailOutline from '~icons/mdi/email-outline';
    import MdiGithub from '~icons/mdi/github';
</script>

<h1 class="text-3xl font-bold text-center py-12">
    Alec Parent's Personal Website
</h1>

<div id="EmailGitHubContainer" class="flex justify-around">
    <div id="EmailContainer" class="btn btn-ghost large-icon h-28">
        <MdiEmailOutline/>
    </div>
    <div id="GitHubContainer" class="btn btn-ghost large-icon h-28">
        <MdiGithub/>
    </div>
</div>

<style>
    .large-icon {
        font-size: 5em;
    }
</style>