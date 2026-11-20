import { Injectable, signal } from '@angular/core';
import { Formation } from '../models/formation';

// Un « service » regroupe la logique et les données partagées par plusieurs composants.
// Le décorateur @Injectable permet à Angular de le fournir automatiquement
// à tout composant qui le demande : c'est l'injection de dépendances.
// En demi-journée 7, ces données viendront de l'API NestJS au lieu d'être écrites ici.
@Injectable({ providedIn: 'root' })
export class FormationService {
  private readonly formations = signal<Formation[]>([
    { id: 1, titre: 'Excel perfectionnement', resume: 'Tableaux croisés dynamiques, formules avancées et graphiques pour piloter son activité.', dureeHeures: 14, niveau: 'Intermédiaire', prix: 690, modalite: 'Présentiel', placesRestantes: 4 },
    { id: 2, titre: "L'IA générative au quotidien", resume: 'Rédiger, résumer et analyser plus vite avec les assistants IA, en gardant le contrôle.', dureeHeures: 7, niveau: 'Débutant', prix: 390, modalite: 'Distanciel', placesRestantes: 8 },
    { id: 3, titre: 'Créer son site WordPress', resume: 'De la page blanche au site vitrine publié : thème, pages, extensions et sécurité.', dureeHeures: 21, niveau: 'Débutant', prix: 990, modalite: 'Présentiel', placesRestantes: 0 },
    { id: 4, titre: 'Automatiser ses tâches avec n8n', resume: 'Relier ses applications et automatiser les tâches répétitives sans programmer.', dureeHeures: 14, niveau: 'Avancé', prix: 850, modalite: 'Distanciel', placesRestantes: 2 },
    { id: 5, titre: 'LinkedIn pour les professionnels', resume: 'Optimiser son profil, publier régulièrement et développer son réseau.', dureeHeures: 7, niveau: 'Débutant', prix: 350, modalite: 'Présentiel', placesRestantes: 6 },
    { id: 6, titre: 'Cybersécurité : les bons réflexes', resume: "Mots de passe, hameçonnage, sauvegardes : protéger l'entreprise au quotidien.", dureeHeures: 7, niveau: 'Intermédiaire', prix: 420, modalite: 'Distanciel', placesRestantes: 10 },
  ]);

  getAll() {
    return this.formations.asReadonly();
  }

  getById(id: number): Formation | undefined {
    return this.formations().find((f) => f.id === id);
  }
}
