import { Component, OnInit } from '@angular/core';
import { Maintenance } from 'src/app/model/Maintenance';
import { MaintenanceService } from 'src/app/service/maintenance.service';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.css']
})
export class MaintenanceListComponent implements OnInit {

  tableHeaders: string[] = ['Thông báo', 'Thao tác'];
  maintenances: Maintenance[] = [];
  constructor(
    private maintenanceService: MaintenanceService,
    ) { 
  }

  ngOnInit(): void {
    this.getAllMaintenances(0);
  }

  private getAllMaintenances(page: number): void {
    this.maintenanceService.getMaintenanceList(page).subscribe(
      data => {
        // console.log(data);
        this.maintenances = data.content;
      }
    );
  }

  deleteMaintenance(maintenance: Maintenance){
    let choose = confirm(`Are you sure you want to delete this maintenance`);
    if (choose) {
      this.maintenanceService.deleteMaintenance(maintenance).subscribe({
        next: () => {
          this.ngOnInit();
        },
        error: (error) => console.log(error)
      });
    }
    else
      console.log('ko xoa');
  }

}
