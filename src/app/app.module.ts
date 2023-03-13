/* Importamos DoBoostrap e injector para el arranque manual */
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Importamos createCustomElement */
import { createCustomElement } from '@angular/elements';

import { AnHatModule } from 'common-library';

import { ViewMonkeysComponent } from './views/monkeys/view-monkeys/view-monkeys.component';

@NgModule({
  declarations: [ViewMonkeysComponent],
  imports: [BrowserModule, AnHatModule],
  /* Añadimos la clave entryComponent para indicar cuál
  es el componente de entrada, el que debe cargar en root */
  entryComponents: [ViewMonkeysComponent],

  providers: [],
  /* bootstrap: [AppComponent] */
})
/* Tipamos la clase */
export class AppModule implements DoBootstrap {
  /* Definimos el boostrap manualmente creando un componente (monkey-app) */
  constructor(private injector: Injector) {
    const webComponent = createCustomElement(ViewMonkeysComponent, {
      injector,
    });
    customElements.define('monkey-app', webComponent);
  }

  ngDoBootstrap() {}
}
