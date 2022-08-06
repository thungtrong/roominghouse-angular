import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/model/Contract';
import { ContractService } from 'src/app/service/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  tableHeaders: string[] = ['Người Thuê', 'Nhân Viên', 'Giá thuê','Ngày Tạo', 'Ngày Hiệu Lực', 'Ngày Kết Thúc'];
  contracts: Contract[] = [];
  constructor(
    private contractService: ContractService,
    ) { 
  }

  ngOnInit(): void {
    this.getAllContracts(0);
  }

  private getAllContracts(page: number): void {
    this.contractService.getContractList(page).subscribe(
      data => {
        // console.log(data);
        this.contracts = data.content;
      }
    );
  }

  deleteContract(contract: Contract){
    let choose = confirm(`Are you sure you want to delete this contract`);
    if (choose) {
      this.contractService.deleteContract(contract).subscribe({
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
