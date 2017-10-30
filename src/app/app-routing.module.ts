import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { FrontpageComponent } from './frontpage/frontpage.component'


const appRoutes: Routes = [
    {
        path: '',
        component: FrontpageComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}