import { Component, computed, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormationService } from '../../services/formation.service';

// Page « détail » : le routeur lui transmet l'identifiant lu dans l'adresse (/formation/3).
@Component({
  selector: 'app-formation-detail',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './formation-detail.html',
})
export class FormationDetail {
  private readonly service = inject(FormationService);
  readonly id = input.required<string>();
  readonly formation = computed(() => this.service.getById(Number(this.id())));
}
