<script>

    export let skills = "";
    export let title = "Default Title";
    export let website = "";
    export let description = ["Default Description"];
</script>

<div class="py-6">
    <div class="collapse collapse-arrow bg-base-200">
        <input class="dropdown-input" type="checkbox" checked/> 
        <div class="collapse-title text-xl font-medium">
            {title}
        </div>
        <div class="collapse-content prose max-w-full"> 
        <ul>
            {#if skills != ""}
                {#each skills as skill}
                    <p>{skill}</p>
                {/each}
            {/if}

            {#if website != ""}
                <li><a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 font-bold" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="{website}">Website link</a></li>
            {/if}
            
            {#each description as point}
                <li>{point}</li>
            {/each}
        </ul>
        </div>
    </div>
</div>