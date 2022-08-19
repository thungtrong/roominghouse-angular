import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Maintenance } from 'src/app/model/Maintenance';
import { BasicCommponent } from 'src/app/service/basic-component';
import { MaintenanceService } from 'src/app/service/maintenance.service';

@Component({
  selector: 'app-maintenance-create',
  templateUrl: './maintenance-create.component.html',
  styleUrls: ['./maintenance-create.component.css']
})
export class MaintenanceCreateComponent extends BasicCommponent implements OnInit {

  maintenance: Maintenance =  {date: new Date()};
  constructor(private maintenanceService: MaintenanceService,
              private router: Router,
              location: Location) {    
                super(location);
   }

  ngOnInit(): void {
  }

  private saveMaintenance(maintenance: Maintenance)
  {
    this.maintenanceService.createMaintenance(maintenance).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.goToMaintenanceList();
        },
        error: err => console.log(err)
      }
    );
  }

  private goToMaintenanceList()
  {
    this.router.navigate(['/maintenance']);
  }

  onSubmit(): void {
    this.saveMaintenance(this.maintenance);
  }

  parseDate(target: any)
  {
    if (target.value)
      this.maintenance.date = new Date(target.value);
    else
      this.maintenance.date = undefined;
  }

}
