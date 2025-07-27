import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      category: 'Frontend',
      items: ['Angular', 'React', 'HTML5/CSS3', 'JavaScript/TypeScript', 'Responsive Design', 'SASS/SCSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', '.NET Core', 'Python', 'SQL', 'RESTful APIs', 'GraphQL']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Docker', 'AWS', 'Agile/Scrum', 'CI/CD', 'Unit Testing']
    }
  ];

  constructor() {}

  ngOnInit(): void {}
} 