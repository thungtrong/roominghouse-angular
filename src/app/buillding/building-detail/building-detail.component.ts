import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from 'src/app/model/Building';
import { BuildingService } from 'src/app/service/building.service';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css']
})
export class BuildingDetailComponent implements OnInit {

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
          this.building = data;
        },
        error: (error) => console.log(error)
      });
    }
    
  }

  goBack()
  {
    this.router.navigate(['/building']);
  }

}
