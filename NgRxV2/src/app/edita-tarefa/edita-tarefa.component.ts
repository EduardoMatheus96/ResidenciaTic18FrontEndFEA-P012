import { tarefasStore } from './../store/tarefa.store';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edita-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edita-tarefa.component.html',
  styleUrls: ['./edita-tarefa.component.css'],
})
export class EditaTarefaComponent {
  description: string = '';
  tarefasStore = inject(tarefasStore);

  constructor(
    private route: ActivatedRoute,
    private routes: Router,)
  {}

  salvar() {
    this.tarefasStore.updateTarefa(this.route.snapshot.paramMap.get('id')!, this.description);

    setTimeout(() => {
      this.routes.navigate(['/']);
    }, 100);
  }
}
