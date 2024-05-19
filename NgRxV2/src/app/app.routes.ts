import { Routes } from '@angular/router';
import { TarefasComponent } from './tarefas/tarefas.component';
import { EditaTarefaComponent } from './edita-tarefa/edita-tarefa.component';

export const routes: Routes = [
  {path: '', component: TarefasComponent},
  {path: 'edita-tarefa/:id', component: EditaTarefaComponent}
];
