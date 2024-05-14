<script lang="ts">
    import MdiEmailOutline from '~icons/mdi/email-outline';
    import MdiGithub from '~icons/mdi/github';
</script>

<h1 class="text-3xl font-bold text-center py-12">
    Alec Parent's Personal Website
</h1>

<div id="EmailGitHubContainer" class="flex justify-around">
    <a title="Email" href="mailto:alecparent@rocketmail.com">
        <div id="EmailContainer" class="btn btn-ghost large-icon h-28">
            <MdiEmailOutline/>
        </div>
    </a>
    <a title="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/DefinitelyAlec">
        <div id="GitHubContainer" class="btn btn-ghost large-icon h-28">
            <MdiGithub/>
        </div>
    </a>
</div>

<style>
    .large-icon {
        font-size: 5em;
    }
</style>