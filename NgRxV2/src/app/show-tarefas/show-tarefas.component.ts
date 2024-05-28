import { tarefasStore } from './../store/tarefa.store';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tarefa } from '../tarefa.model';

@Component({
  selector: 'app-show-tarefas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-tarefas.component.html',
  styleUrls: ['./show-tarefas.component.css']
})
export class ShowTarefasComponent {
  tarefasStore = inject(tarefasStore);

  removeTarefa(id: string) {
    this.tarefasStore.removeTarefa(id);
  }
}
