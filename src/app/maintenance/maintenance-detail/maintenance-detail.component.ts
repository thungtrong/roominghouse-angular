import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Maintenance } from 'src/app/model/Maintenance';
import { MaintenanceService } from 'src/app/service/maintenance.service';

@Component({
  selector: 'app-maintenance-detail',
  templateUrl: './maintenance-detail.component.html',
  styleUrls: ['./maintenance-detail.component.css']
})
export class MaintenanceDetailComponent implements OnInit {

  
  maintenance: Maintenance =  {date: new Date()};
  constructor(private maintenanceService: MaintenanceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {    
   }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.maintenanceService.getMaintenanceById(id).subscribe({
      next: (data) => {
        if (data===null) {
          alert('Maintenance not found');
          this.router.navigate(['/maintenance']);
        }
        this.maintenance = data;
      },
      error: err => console.log(err)
    })
  }

  goBack()
  {
    this.router.navigate(['/maintenance']);
  }

  parseDate(target: any)
  {
    if (target.value)
      this.maintenance.date = new Date(target.value);
    else
      this.maintenance.date = undefined;
  }
}
