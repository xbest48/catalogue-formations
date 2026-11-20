import { Routes } from '@angular/router';
import { FormationList } from './pages/formation-list/formation-list';
import { FormationDetail } from './pages/formation-detail/formation-detail';

// Le routage côté navigateur : à chaque adresse correspond une page (un composant).
export const routes: Routes = [
  { path: '', component: FormationList, title: 'Catalogue des formations' },
  { path: 'formation/:id', component: FormationDetail, title: 'Détail de la formation' },
  { path: '**', redirectTo: '' },
];
