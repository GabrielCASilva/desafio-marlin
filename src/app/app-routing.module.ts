import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesPostComponent } from './detalhes-post/detalhes-post.component';
import { FormularioPostComponent } from './formulario-post/formulario-post.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  {path: '', component: PaginaPrincipalComponent},
  {path: 'post/:id', component: DetalhesPostComponent},
  {path: 'novo-post', component: FormularioPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
