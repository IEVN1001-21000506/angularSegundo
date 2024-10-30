import {Routes } from "@angular/router";

export default[
    {
        path:'sign-in',
        loadComponent:()=>import('./sign-in/sign-in.component'),
    },
    {
        path:'sing-up',
        loadComponent:()=>import('./sing-up/sing-up.component'),
    },
] as Routes
export class AuthRoutesModule {}