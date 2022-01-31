import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalPokemonsDetailComponent } from './shared/components/modal-pokemons-detail/modal-pokemons-detail.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { IndexComponent } from './shared/components/index/index.component';
import { HeaderComponent } from './shared/components/header/header.component';

export const routes: Routes = [{
  path: "", pathMatch: "full",redirectTo: "inicio"
},
{
  path: "inicio", component:IndexComponent
},
{
  path: "pokemons", component:PokemonsComponent
},
{
  path: "detalle", component:ModalPokemonsDetailComponent
},
{
  path: "headers", component:HeaderComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
