import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddItemsFormComponent } from './add-items-form/add-items-form.component';
import { HelloWorldTestComponent } from './hello-world-test/hello-world-test.component';

export const routes: Routes = [
    //{ path: '', component: HomePageComponent },
    { path: '', component: HelloWorldTestComponent},
    { path: 'home', component: HomePageComponent },
    { path: 'add-items', component: AddItemsFormComponent },
];
