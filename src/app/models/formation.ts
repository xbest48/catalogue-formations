// Le « modèle » : la forme que prend une formation dans l'application.
// Une interface TypeScript décrit les propriétés et leur type, sans comportement.
export type Niveau = 'Débutant' | 'Intermédiaire' | 'Avancé';

export interface Formation {
  id: number;
  titre: string;
  resume: string;
  dureeHeures: number;
  niveau: Niveau;
  prix: number;          // en euros HT (données fictives)
  modalite: 'Présentiel' | 'Distanciel';
  placesRestantes: number;
}
