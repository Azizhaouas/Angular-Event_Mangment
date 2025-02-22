import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title: string = 'Bienvenue sur la page d\'accueil';
  description: string = 'Explorez notre application et découvrez nos fonctionnalités principales.';

  constructor() { }

  ngOnInit(): void {
    console.log('AccueilComponent initialized');
  }

  // Example method for interaction
  displayWelcomeMessage(): void {
    alert('Bienvenue ! Merci de visiter notre site.');
  }
}
