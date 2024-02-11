import { Routes, provideRouter } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./app.component').then((m) => m.AppComponent),
    },
    {
        path: 'header',
        loadComponent: () => import('./header/header.component').then((m) => m.HeaderComponent),
    },
    {
        path: 'search',
        loadComponent: () => import('./search/search.component').then((m) => m.SearchComponent),
    },
    
];
