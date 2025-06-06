import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  demoLink: string;
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
      image: 'assets/images/portfolio.png',
      techStack: ['Angular', 'TypeScript', 'SCSS'],
      githubLink: 'https://github.com/yourusername/portfolio',
      demoLink: 'https://yourportfolio.com'
    },
    {
      title: 'Task Management Application',
      description: 'A full-stack task management application with real-time updates, user authentication, and collaborative features. Implements drag-and-drop functionality and data persistence.',
      image: 'assets/images/task-manager.png',
      techStack: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/task-manager',
      demoLink: 'https://task-manager-demo.com'
    },
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform with features like product catalog, shopping cart, payment integration, and order management system.',
      image: 'assets/images/ecommerce.png',
      techStack: ['Vue.js', 'Express', 'PostgreSQL'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      demoLink: 'https://ecommerce-demo.com'
    }
  ];
}
