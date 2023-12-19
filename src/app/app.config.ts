import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BuscaMoedaService } from './services/busca-moeda.service';
import { HttpClientModule, provideHttpClient , withFetch} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),BuscaMoedaService,importProvidersFrom(HttpClientModule),provideHttpClient(withFetch())]
};
