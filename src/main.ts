import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

!environment.dev && enableProdMode();
console.log(environment);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));