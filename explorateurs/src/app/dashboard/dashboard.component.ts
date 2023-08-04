import { Component, OnInit } from '@angular/core';
import { Explorateur } from '../explorateur';
import { ExplorateurService } from '../explorateur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  explorateurs: Explorateur[] = [];

  constructor(private explorateurService: ExplorateurService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.explorateurService.getExplorateurs()
      .subscribe(explorateurs => this.explorateurs = explorateurs.slice(1, 5));
  }
}