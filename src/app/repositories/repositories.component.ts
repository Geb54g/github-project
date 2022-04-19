import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
      repositories:Repos[]=[
        new Repos(1, 'https://github.com/Geb54g/schooolweb'),
        new Repos(2, 'https://github.com/Geb54g/delanistudio'),
        new Repos(3, 'https://github.com/Geb54g/burgerplace'),
        new Repos(4, 'https://github.com/Geb54g/gebportfolio'),
        new Repos(5, 'https://github.com/Geb54g/birthdaywed'),
        new Repos(6, 'https://github.com/Geb54g/delanistudio')
      ]

  constructor() { }

  ngOnInit(): void {
  }

}
