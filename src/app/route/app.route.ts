import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignmanagementComponent } from '../components/campaignmanagement/campaignmanagement.component';
import { LoginComponent } from '../components/login/login.component';
import { HomecomponentComponent } from '../components/homecomponent/homecomponent.component';
import { CreatecampaignComponent } from '../components/createcampaign/createcampaign.component';
import { InventorymanageComponent } from '../components/inventortyManagement/inventorymanage/inventorymanage.component';
import { ContentlibhomeComponent } from '../components/ContentLibrary/contentlibhome/contentlibhome.component';
import { CreatecontentComponent } from '../components/ContentLibrary/createcontent/createcontent.component';


const routes: Routes = [
    {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
    },
    { path: 'login', component: LoginComponent },
    // {
    //     path:'forgot',
    //     component: ForgotComponent
    // },
    {
        path:'home',
        component: HomecomponentComponent,
        children:[
            {
                path:'campaignmanagement',
                component: CampaignmanagementComponent
            },  
            {
                path:'createcampaign',
                component: CreatecampaignComponent
            }
        ]

        
    },

    {
        path:'invnt',
        component:InventorymanageComponent
    },
    {
        path:'contlib',
        component:ContentlibhomeComponent,
        children:[{
           path:'',
           redirectTo:'contentlibhome',
           pathMatch:"full",
           
      },{
          path:'contentlibhome',
         component:   ContentlibhomeComponent
      },{
        path:'createcontent',
       component:CreatecontentComponent
      }
     


]
    }
    
    
  ];
  
  @NgModule({
      imports:[RouterModule.forRoot(routes)],
      exports : [RouterModule]
  })
  export class AppRoutingModule {}
