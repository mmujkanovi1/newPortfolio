import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  demoLink: string;
  disabledGithubLink: boolean;
  disabledDemoLink: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built using Angular 17 with a focus on responsive design and smooth animations. Features include dark mode, interactive components, and optimized performance.',
      image: 'assets/portfolio.png',
      techStack: ['Angular', 'TypeScript', 'SCSS'],
      githubLink: 'https://github.com/mmujkanovi1/newPortfolio',
      demoLink: window.location.origin,
      disabledGithubLink: false,
      disabledDemoLink: false
    },
    {
      title: 'Taskboard Application',
      description: ' As Austria’s first full-service financial provider, Wüstenrot offers comprehensive solutions for savings, financing, retirement planning, and insurance. The project features numerous web services that communicate with each other, while the frontend is implemented using a microfrontend architecture.',
      image: 'assets/wustenrot.png',
      techStack: ['Java', 'Angular', 'Bamboo', 'Hexagon'],
      githubLink: 'https://github.com/yourusername/task-manager',
      demoLink: 'https://task-manager-demo.com',
      disabledGithubLink: true,
      disabledDemoLink: true
    },
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform with features like product catalog, shopping cart, payment integration, and order management system.',
      image: 'assets/reddotfood.png',
      techStack: ['React', 'Java', 'Spring boot', 'PostgreSQL', 'AWS'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      demoLink: 'https://www.reddotfood.store/',
      disabledGithubLink: true,
      disabledDemoLink: false
    },
    {
      title: 'Infobiro',
      description: 'INFOBIRO archive was launched in 2004. Its primary activity and mission involve preserving articles from printed media in electronic form with the permission and cooperation of publishers from Bosnia and the region. The archive consists of both contemporary and historical content. Access to the archive is online, and searches can be conducted using keywords.',
      image: 'assets/infobiro.png',
      techStack: ['Html', 'Css', 'Scala'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      demoLink: 'https://www.infobiro.ba/',
      disabledGithubLink: true,
      disabledDemoLink: false
    },
    {
      title: 'Advertisment app - INTERN',
      description: 'Spring Boot sample app for advertising with five entities that are located in postgreSQL database. This app contains CRUD (create, read, update, delete) routes for "Users", "Advertisements", "Category" and "AppConfig". Intern app',
      image: 'assets/advertisment.jpg',
      techStack: ['Java', 'Spring boot', 'PostgreSQL'],
      githubLink: 'https://github.com/mmujkanovi1/Market-spring',
      demoLink: 'https://ecommerce-demo.com',
      disabledGithubLink: false,
      disabledDemoLink: true
    },
    {
      title: 'Scandinavian airline system',
      description: 'The Scandinavian airline system allows users to search for flights, find a suitable flight, choose a specific flight and ancillaries (seat, bag, fares), pay using cards and IFG cash, make a booking with delayed payment, cancel the flight, etc. My role: java backend engineer',
      image: 'assets/sas.png',
      techStack: ['java', 'Spring boot', 'Oracle'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      demoLink: 'https://www.flysas.com/en',
      disabledGithubLink: true,
      disabledDemoLink: true
    },
    {
      title: 'Factoring',
      description: 'Factoring is the legal business of buying and selling an existing non-due or future short-term monetary claim arising from a contract for the sale of goods or the provision of services in the country and abroad, which is transferred to the Bank by contract and which undertakes to take over the claim from the debtor, to collect it, on its own behalf and for its own account, and to perform the following services in order to perform the factoring function!',
      image: 'assets/factoring.png',
      techStack: ['Java', 'Spring boot', 'Oracle', 'Angular'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      demoLink: 'https://www.flysas.com/en',
      disabledGithubLink: true,
      disabledDemoLink: true
    }
  ];
}
