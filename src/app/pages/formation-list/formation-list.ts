import { Component, computed, inject, signal } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { FormationCard } from '../../components/formation-card/formation-card';
import { Niveau } from '../../models/formation';

// Page « liste » : elle demande les données au service (injection de dépendances),
// gère un filtre, et affiche une carte par formation.
@Component({
  selector: 'app-formation-list',
  imports: [FormationCard],
  templateUrl: './formation-list.html',
  styleUrl: './formation-list.css',
})
export class FormationList {
  private readonly service = inject(FormationService);
  readonly niveaux: Niveau[] = ['Débutant', 'Intermédiaire', 'Avancé'];
  readonly filtre = signal<Niveau | 'Tous'>('Tous');

  readonly formations = computed(() => {
    const toutes = this.service.getAll()();
    const f = this.filtre();
    return f === 'Tous' ? toutes : toutes.filter((x) => x.niveau === f);
  });

  choisir(valeur: string) {
    this.filtre.set(valeur as Niveau | 'Tous');
  }
}
