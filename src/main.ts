import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppSettings } from './proyect.conf';
if (environment.production) {
  enableProdMode();
}
var script = document.createElement( 'script' );
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + AppSettings.apiGoogleMaps + '&libraries=places';
script.defer = true;
document.head.appendChild( script );
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
