import {
  NgModule, CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { ModalPokemonsDetailComponent } from './shared/components/modal-pokemons-detail/modal-pokemons-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './shared/components/header/header.component';
import { IndexComponent } from './shared/components/index/index.component';



import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule} from '@angular/material/dialog';



@NgModule({
  exports: [

  ],
  declarations: [
    AppComponent,
    PokemonsComponent,
    ModalPokemonsDetailComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" }),

    //ANGULAR MATERIAL
    MatSidenavModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule

  ],
  providers: [NgModule],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
