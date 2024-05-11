<script lang="ts">
  import Project from "../Project.svelte";

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

<div class="btnContainer">
  <button class="btn items-center" on:click={() => manipulateDropdowns("dropdown-input", true)}
    >Open All</button
  >
  
  <button
    class="btn"
    on:click={() => manipulateDropdowns("dropdown-input", false)}
    >Close All</button
  >
  
  <!-- search button? -->
  <!-- <button
    class="btn">
    <svg xmlns="http://www.w3.org/2000/svg" height="0.85em" viewBox="0 0 24 24" {...$$props}>
      <path fill="currentColor" d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.99.99 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12z" />
    </svg>
  </button> -->
</div>


{#each projects as project}
  <Project {...project} />
{/each}
