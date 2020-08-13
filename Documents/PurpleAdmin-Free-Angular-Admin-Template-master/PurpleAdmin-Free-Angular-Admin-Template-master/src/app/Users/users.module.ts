import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule} from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


import { AdminPanelComponent } from './Admin/admin-panel/admin-panel.component';
import { StudentPanelComponent } from './Student/student-panel/student-panel.component';
import { GuardianPanelComponent } from './Guardian/guardian-panel/guardian-panel.component';
import { TeacherPanelComponent } from './Teacher/teacher-panel/teacher-panel.component';
import { AssignmentTableComponent } from './Student/assignment-table/assignment-table.component';
import { FileUploadModalComponent } from './Student/assignment-table/file-upload-modal/file-upload-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'admin', component: AdminPanelComponent },
  { path: 'student', component: StudentPanelComponent },
  { path: 'guardian', component: GuardianPanelComponent},
  { path: 'teacher', component: TeacherPanelComponent}
]

@NgModule({
  declarations: [AdminPanelComponent,StudentPanelComponent,GuardianPanelComponent,TeacherPanelComponent, AssignmentTableComponent, FileUploadModalComponent],
  imports: [
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatTableModule,
    CommonModule,
    NgbModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[MatListModule,MatProgressBarModule,MatTableModule,MatDialogModule,MatListModule,MatButtonModule],
  entryComponents:[FileUploadModalComponent]
})
export class UsersModule { }
