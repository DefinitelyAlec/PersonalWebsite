<script>
    export let skills = [''];
    export let title = "Default Title";
    export let website = "";
    export let description = ["Default Description"];
    export let startDate = "";
    export let endDate = ""
</script>

<div class="py-6">
    <div class="collapse collapse-arrow bg-base-200">
        <input class="dropdown-input" type="checkbox" checked/> 
        <div class="collapse-title text-xl font-medium">
            <div class="flex justify-between">
                <div>
                    {title}
                </div>
                <div>
                    {#if startDate != "" && endDate != ""}
                        {startDate} - {endDate}   
                    {/if}
                </div>
            </div>
        </div>
        <div class="collapse-content prose max-w-full"> 
        <ul>
            {#if skills != ['']}
                <div id="skillContainer" class="space-x-3">
                {#each skills as skill}
                    <div class="badge badge-lg badge-outline">{skill}</div>
                {/each}
                </div>
            {/if}

            {#if website != ""}
                <li><a class="link link-primary" 
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

<style>
    .collapse-content {
        overflow: hidden;
        transition: 0.3 ease-out;
    }

    
</style>