import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule, HttpClientModule, FormsModule)
  ]
};
