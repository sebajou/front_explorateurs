import { Interpolation } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Explorateur } from '../explorateur';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ExplorateurService } from '../explorateur.service';

@Component({
  selector: 'app-explorateur-detail',
  templateUrl: './explorateur-detail.component.html',
  styleUrls: ['./explorateur-detail.component.css']
})
export class ExplorateurDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private explorateurService: ExplorateurService,
    private location: Location
  ) {}

  @Input() explorateur?: Explorateur;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.explorateurService.getExplorateur(id)
      .subscribe(explorateur => this.explorateur = explorateur);
  }

  goBack(): void {
    this.location.back();
  }
}