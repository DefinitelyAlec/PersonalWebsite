<script lang="ts">
    import Project from '../Project.svelte';

    function manipulateDropdowns(className: String, open: Boolean) {
    const inputs = document.querySelectorAll(`.${className}`);
    
    inputs.forEach(input => {
        if(open){
            input.checked = true;
        }else{
            input.checked = false;
        }
    });
  }
</script>

<h1 class="text-3xl font-bold text-center py-12">
    Projects
</h1>

<button class="btn" on:click={() => manipulateDropdowns("dropdown-input", true)}>Open All</button>

<button class="btn" on:click={() => manipulateDropdowns("dropdown-input", false)}>Close All</button>

<Project 
    title={'Rock Paper Scissors Battle Royale'}
    website={'https://rps-sim.netlify.app/'}
    description={['Built out game in pure HTML/JS/CSS',
                'Leveraged ChatGPT to exponentially speed up development by generating boilerplate code and correcting/adding details',
                'Built out vector based tracking system for all entities in a <canvas> component']}
/>

<Project 
    title={'Info Website for a Therapy Center'}
    website={'https://movingforwardutah.com/'}
    description={['Worked with Wordpress to improve existing site structure and content',
                'Built out custom HTML/JS/CSS solutions to fix what Wordpress couldn\'t deliver on',
                'Optimized the website caching, SEO, and general performance to load up to 10x faster',
                'Operated on a strict deadline to deliver on client needs']}
/>

<Project 
    title={'Ecommerce Website for Mrs Hobby Shop'}
    website={'https://mrshobby.com/'}
    description={['Made a React API to get the BigCommerce site to properly pull product based off their category',
                'Built realistic technical roadmap for client given the existing site and its constraints',
                'Established a consistent and reliable data pipeline between the point of sale system and website']}
/>

<Project 
    title={'Python Batch Program Installer'}
    description={['Made a batch installer in Python using Tkinter and leveraging Multiprocessing to chain together installations while timing them',
                'Developed a simple and intuitive UI to select programs desired to install and leave out',
                'Frequently communicated with different departments to ensure custom installations are ran smoothly and can be automated']}
/>