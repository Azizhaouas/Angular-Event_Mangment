import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title: string = 'Bienvenue sur la page d\'accueil';
  description: string = 'Découvrez nos fonctionnalités et services !';

  constructor() { }

  ngOnInit(): void {
    console.log('AccueilComponent initialized');
  }

  // Example method
  showWelcomeMessage(): void {
    alert('Bienvenue sur notre plateforme!');
  }
}
