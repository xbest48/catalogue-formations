import { Component, computed, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Formation } from '../../models/formation';

// Composant réutilisable : une « carte » qui affiche UNE formation.
// La liste l'utilise six fois, avec six formations différentes.
@Component({
  selector: 'app-formation-card',
  // CurrencyPipe est importé pour l'atelier 3 (affichage du prix en euros).
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './formation-card.html',
  styleUrl: './formation-card.css',
})
export class FormationCard {
  readonly formation = input.required<Formation>();
  readonly complet = computed(() => this.formation().placesRestantes === 0);
}
