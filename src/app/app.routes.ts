import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LogInComponent } from './components/pages/log-in/log-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { ProductsComponent } from './components/pages/products/products.component';

export const routes: Routes = [
    {path:'home', title: 'Home Page', component: HomeComponent},
    {path:'', title: 'Home Page', component: HomeComponent},
    {path:'login', title: 'Login', component: LogInComponent},
    {path:'signup', title: 'Sign Up', component: SignUpComponent},
    {path:'products', title: 'Our products', component: ProductsComponent},
];
