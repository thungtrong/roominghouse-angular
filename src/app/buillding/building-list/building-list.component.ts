import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/model/Building';
import { BuildingService } from 'src/app/service/building.service';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {

  tableHeaders: string[] = ['Tên', 'Địa chỉ', 'Mô Tả', ''];
  buildings: Building[] = [];
  constructor(
    private buildingService: BuildingService,
    ) { 
  }

  ngOnInit(): void {
    this.getAllBuildings(0);
  }

  getAllBuildings(page: number)
  {
    this.buildingService.getBuildingList(page).subscribe({
      next: (data) => 
      {
        this.buildings = data.content;
      },
      error: (error) => console.log(error)
    })
  }

  deleteBuilding(building: Building){
    let choose = confirm(`Are you sure you want to delete this building`);
    if (choose) {
      this.buildingService.deleteBuilding(building).subscribe({
        next: () => {
          let i;
          for (i = 0; i < this.buildings.length; i++) {
            let announ = this.buildings[i];
            if (announ.id === building.id)
              {
                break;
              }
          }
          this.buildings.splice(i, i);
          this.ngOnInit();
        },
        error: (error) => console.log(error)
      });
    }
    else
      console.log('ko xoa');
  }

}
