import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from 'src/app/model/Building';
import { BuildingService } from 'src/app/service/building.service';

@Component({
  selector: 'app-building-update',
  templateUrl: './building-update.component.html',
  styleUrls: ['./building-update.component.css']
})
export class BuildingUpdateComponent implements OnInit {

  building: Building =  {};
  constructor(private buildingService: BuildingService, 
    private router: Router,
    private route: ActivatedRoute,) {
    
   }

   ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id)
    {
      this.buildingService.getBuildingById(id).subscribe({
        next: (data) => {
          if (data===null) {
            alert('Building not found');
            this.router.navigate(['/building']);
          }
          this.building = data;
        },
        error: (error) => console.log(error)
      });
    }
    
  }

  onSubmit(): void {
    this.buildingService.updateBuilding(this.building).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/building']);
      },
      error: (error) => console.log(error)
    });
  }

  goBack()
  {
    this.router.navigate(['/building']);
  }

}
