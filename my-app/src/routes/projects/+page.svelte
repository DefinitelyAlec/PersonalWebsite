<script lang="ts">
  import Project from "../Project.svelte";

  import MdiFilter from '~icons/mdi/filter';

  function manipulateDropdowns(className: String, open: Boolean) {
    const inputs = document.querySelectorAll(`.${className}`) as NodeListOf<HTMLInputElement>;

    inputs.forEach((input) => {
      if (open) {
        input.checked = true;
      } else {
        input.checked = false;
      }
    });
  }
  const projects = [
    {
      title: "This Website",
      skills: ["Svelte", "JS", "HTML", "CSS"],
      description: [
        "Built out in Sveltekit using DaisyUI",
        "Focus on quick deliverability, maintainability, and strengthening common full tech-stack for future webapps",
        "Maintained consistency in development to strengthen coding habits and push myself to try new things",
      ],
    },
    {
      title: "Rock Paper Scissors Battle Royale",
      skills: ["JS", "HTML", "CSS", "ChatGPT"],
      website: "https://rps-sim.netlify.app/",
      description: [
        "Built out game in pure HTML/JS/CSS",
        "Leveraged ChatGPT to exponentially speed up development by generating boilerplate code and correcting/adding details",
        "Built out vector based tracking system for all entities in a <canvas> component",
      ],
    },
    {
      title: "Info Website for a Therapy Center",
      skills: ["JS", "HTML", "CSS"],
      website: "https://movingforwardutah.com/",
      description: [
        "Worked with Wordpress to improve existing site structure and content",
        "Built out custom HTML/JS/CSS solutions to fix what Wordpress couldn't deliver on",
        "Optimized the website caching, SEO, and general performance to load up to 10x faster",
        "Operated on a strict deadline to deliver on client needs",
      ],
    },
    {
      title: "Ecommerce Website for Mrs Hobby Shop",
      skills: ["React", "JS", "HTML", "CSS"],
      website: "https://mrshobby.com/",
      description: [
        "Made a React API to get the BigCommerce site to properly pull product based off their category",
        "Built realistic technical roadmap for client given the existing site and its constraints",
        "Established a consistent and reliable data pipeline between the point of sale system and website",
      ],
    },
    {
      title: "Python Batch Program Installer",
      skills: ["Python", "Tkinter", "Multiprocessing"],
      description: [
        "Made a batch installer in Python using Tkinter and leveraging Multiprocessing to chain together installations while timing them",
        "Developed a simple and intuitive UI to select programs desired to install and leave out",
        "Frequently communicated with different departments to ensure custom installations are ran smoothly and can be automated",
      ],
    },
  ];
</script>

<h1 class="text-3xl font-bold text-center py-12">Projects</h1>

<button class="btn" on:click={() => manipulateDropdowns("dropdown-input", true)}
  >Open All</button
>

<button
  class="btn"
  on:click={() => manipulateDropdowns("dropdown-input", false)}
  >Close All</button
>

<!-- search button? -->
<button
  class="btn"
><MdiFilter/></button>

{#each projects as project}
  <Project {...project} />
{/each}
