import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FileHandleService } from 'src/app/services/file-handle.service';
import { FileUploadModalComponent } from './file-upload-modal/file-upload-modal.component';

import { MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  
}
export class subject { 
  constructor(public subId:string, public subName:string) { }	
}
export interface DialogData {
  email: string;
  assignment: File;
}


@Component({
  selector: 'app-assignment-table',
  templateUrl: './assignment-table.component.html',
  styleUrls: ['./assignment-table.component.scss']
})
@NgModule({
  declarations: [MatTableDataSource],
  imports: [MatTableDataSource],
  exports:[MatTableDataSource]
})
export class AssignmentTableComponent implements OnInit {

  form = new FormGroup({
    subject:new FormControl('',[Validators.required])
  });
  allSubjects=[
    new subject('math','Mathematics'),
    new subject('sci','Science'),
    new subject('so-sci','Social science'),
    new subject('lang','Language')
];
  constructor(private dialog:MatDialog,public uploadService:FileUploadService,public fileService: FileHandleService) { }

  dataSource;
  selectedSubject: string;
  email: string;
  assignment: File;
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  

  ngOnInit(): void {
   // this.showTableData();
  }
  showTableData(){
    this.uploadService.getFiles(this.form.value.subject.subId)
    .subscribe(
      res => {this.dataSource=res,console.log("All assignments:",res)}
    )
  


    //this.dataSource = ELEMENT_DATA;
    this.email="abnaveshubham111@gmail.com";
    
  }
 /* openDialog(){
      const dialogConfig=new MatDialogConfig();
      dialogConfig.disableClose= true;
      dialogConfig.autoFocus=true;
      dialogConfig.width="70%";
      const dialogRef=this.dialog.open(ModalComponent,dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        this.email = result.email;
        //this.assignment=result.assignment;
      });
      

  }*/

  /*{ width: '50%', height: '50%' }*/ 
  openDialog(file_id): void {
    this.selectedSubject=this.form.value.subject.subId;
    const dialogRef = this.dialog.open(FileUploadModalComponent, {
      width: '50%',
      height: '50%',
      data: {fileId:file_id, subject:this.selectedSubject}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


  downloadPdf(filename, contentType) {
    this.fileService.downloadPDF(filename, contentType).subscribe(
      (res) => {
        const file = new Blob([res.blob()], { type: contentType });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      }
    );
  }
  getAssignmentList(){
    this.uploadService.getFiles(this.form.value.subject.subId)
    .subscribe(
      res => {this.dataSource=res,console.log("All assignments:",res)}
    )
  }

}
