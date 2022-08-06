import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Building } from 'src/app/model/Building';
import { BuildingService } from 'src/app/service/building.service';

@Component({
  selector: 'app-building-create',
  templateUrl: './building-create.component.html',
  styleUrls: ['./building-create.component.css']
})
export class BuildingCreateComponent implements OnInit {

  building: Building =  {};
  constructor(private buildingService: BuildingService,
              private router: Router) {    
   }

  ngOnInit(): void {
  }

  private saveBuilding(building: Building)
  {
    this.buildingService.createBuilding(building).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.goToBuildingList();
        },
        error: err => console.log(err)
      }
    );
  }

  private goToBuildingList()
  {
    this.router.navigate(['/building']);
  }

  onSubmit(): void {
    this.saveBuilding(this.building);
  }

  goBack()
  {
    this.router.navigate(['/building']);
  }
}
