import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { CampaignmangmntService } from 'src/app/services/campaignmangmnt.service';

export interface UserData {
  campaignname: string;
  brand: string;
  mappings: number;
  status:string;
  views:number
}

/** Constants used to fill up our data base. */
const Color : string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const Campaignname: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
  const Mappings: number[]=[1,3,4,6,7,8,2,4,]
  const Status: string[]=['Active','Active','Active','Active','Active','Active','Active','Active']
  const Views: number[]=[400,60000,735666,732434,345345,32423]
  const Brand:string[]=['fanta','coke','pepsi','fanta','coke','pepsi','fanta','coke','pepsi']

@Component({
  selector: 'app-campaignmanagement',
  templateUrl: './campaignmanagement.component.html',
  styleUrls: ['./campaignmanagement.component.css']
})  
export class CampaignmanagementComponent implements OnInit {
  displayedColumns: string[] = ['campaignname', 'brand', 'mappings', 'status','views','actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public router:Router, private  campaignService:  CampaignmangmntService) { 
  
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
 
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
   
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } 
  
  navigatepage(){
    console.log("in click")
    this.router.navigateByUrl('/home/createcampaign'); 
  }
//  routerLink="home/createcampaign

//api calling for retriving campaigns
getCampaigns(){
  this.campaignService.getAllCampaigns().subscribe((data) => {
     // this.contacts  =  data;
      console.log(data);
  });

}

}


function createNewUser(id: number): UserData {
  let name=Campaignname[id]
  let color=Color[id]
  return {
    campaignname: name,
  brand: Brand[id],
  mappings: Mappings[id],
  status:Status[id],
  views:Views[id]
  };
}
