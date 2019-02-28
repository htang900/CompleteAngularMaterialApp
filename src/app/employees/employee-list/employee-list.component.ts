import { Component, OnInit, ViewChild } from '@angular/core';
//import { EmployeeService } from 'src/app/shared/employee.service';
import { EmployeeService } from '../../shared/employee.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DepartmentService } from 'src/app/shared/department.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EmployeeComponent } from '../employee/employee.component';
import { NotificationService } from 'src/app/shared/notification.service';
import { DialogService } from 'src/app/shared/dialog.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service: EmployeeService,
    private departmentService: DepartmentService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private dialogService: DialogService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName','email','mobile','city','departmentName','hireDate','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.service.getEmployees().subscribe(
      list => {
        let array =list.map(item => {
          let departmentName = this.departmentService.getDepartmentName(item.payload.val()['department']);
    console.log(departmentName);
          return {
            $key: item.key,
            departmentName, //departmentName : departmentName, // Property : value
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        // filter columns not list for sort
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          });
        }
      }
    );
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.service.initializeFormGroup(); // initialize form to default values
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    // Pop up dialog
    this.dialog.open(EmployeeComponent, dialogConfig);
  }

  onEdit(row) {
console.log('row:' + row.hireDate);
    this.service.populateForm(row);
    const dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "750px";  //"60%"
    // Pop up dialog
    this.dialog.open(EmployeeComponent, dialogConfig);
  }

  onDelete($key) {
    // if (confirm('Are you sure to delete this record?')) {
    //   this.service.deleteEmployee($key);
    //   this.notificationService.warn('! Deleted successfully');
    // }
    this.dialogService.openConfirmDialog('Are you sure to delete this record?')
    .afterClosed().subscribe(res => {
      //console.log(res);
      if (res) {
        this.service.deleteEmployee($key);
        this.notificationService.warn('! Deleted successful')
      }
    });
  }
}
