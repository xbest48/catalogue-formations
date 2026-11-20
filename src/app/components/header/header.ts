import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

// Un composant = une classe TypeScript + un template HTML + des styles.
// Le décorateur @Component est l'« étiquette » qui dit à Angular : ceci est un composant,
// voici le nom de sa balise (selector) et voici ses fichiers.
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Une donnée reçue du composant parent (comme un paramètre).
  readonly titre = input('Catalogue des formations');
}
