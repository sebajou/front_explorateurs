import { Component } from '@angular/core';
import { Explorateur } from '../explorateur';
import { ExplorateurService } from '../explorateur.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-explorateur',
  templateUrl: './explorateur.component.html',
  styleUrls: ['./explorateur.component.css']
})
export class ExplorateurComponent {
  
  selectedExplorateur?: Explorateur;

  explorateurs: Explorateur[] = [];
  
  constructor(
    private explorateurService: ExplorateurService, 
    private messageService: MessageService
    ) {}
 
  ngOnInit(): void {
    this.getExplorateurs();
  }

  onSelect(explorateur: Explorateur): void {
    this.selectedExplorateur = explorateur;
    this.messageService.add(`ExplorateursComponent: Selected explorateur id=${explorateur.id}, name=${explorateur.name}`);
  }

  getExplorateurs(): void {
    this.explorateurService.getExplorateurs()
      .subscribe(explorateurs => this.explorateurs = explorateurs)
  }
}


