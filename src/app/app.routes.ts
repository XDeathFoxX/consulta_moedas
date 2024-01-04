import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { usdbrlComponent } from './pages/usdbrl/usdbrl.component';
import { eurbrlComponent } from './pages/eurbrl/eurbrl.component';
import { btcusdComponent } from './pages/btcusd/btcusd.component';
import { ethusdComponent } from './pages/ethusd/ethusd.component';
import { cadbrlComponent } from './pages/cadbrl/cadbrl.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'usdbrl',component:usdbrlComponent
    },
    {
        path:'eurbrl',component:eurbrlComponent
    },
    {
        path:'btcusd',component:btcusdComponent
    },
    {
        path:'ethusd',component:ethusdComponent
    },
    {
        path:'cadbrl',component:cadbrlComponent
    }
];
