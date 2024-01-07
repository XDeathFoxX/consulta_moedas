import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { usdbrlComponent } from './pages/usdbrl/usdbrl.component';
import { eurbrlComponent } from './pages/eurbrl/eurbrl.component';
import { btcusdComponent } from './pages/btcusd/btcusd.component';
import { ethusdComponent } from './pages/ethusd/ethusd.component';
import { cadbrlComponent } from './pages/cadbrl/cadbrl.component';
import { usdbrltComponent } from './pages/usdbrlt/usdbrlt.component';
import { gbpbrlComponent } from './pages/gbpbrl/gbpbrl.component';
import { arsbrlComponent } from './pages/arsbrl/arsbrl.component';
import { EurComponent } from './pages/eur/eur.component';
import { UsdComponent } from './pages/usd/usd.component';
import { BrlComponent } from './pages/brl/brl.component';
import { btcbrlComponent } from './pages/btcbrl/btcbrl.component';
import { ltcbrlComponent } from './pages/ltcbrl/ltcbrl.component';

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
    },
    {
        path:'usdbrlt',component:usdbrltComponent
    },
    {
        path:'gbpbrl',component:gbpbrlComponent
    },
    {
        path:'arsbrl',component:arsbrlComponent
    },
    {
        path:'eurs',component:EurComponent
    },
    {
        path:'usds',component:UsdComponent
    },
    {
        path:'brls',component:BrlComponent
    },
    {
        path:'btcbrl',component:btcbrlComponent
    },
    {
        path:'ltcbrl',component:ltcbrlComponent
    }
];
