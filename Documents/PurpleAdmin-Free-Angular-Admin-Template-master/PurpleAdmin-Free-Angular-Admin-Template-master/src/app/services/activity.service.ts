import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private _aboutSchoolUrl ="/api/aboutSchool"
  private _filesUrl ="/api/files"
  private _getBooksbySubject="/api/booksbysubject";
  private _getAssignmentbySubnID="/api/assignmentbysubnid";
  private _uploadAssignment="/api/assignmentupload"


  constructor(private http: HttpClient) { }

  getAboutSchool(){
    return this.http.get<any>(this._aboutSchoolUrl)
  }
  getFiles(){
    const params=new HttpParams();
    const formData = new FormData();
    formData.append('subject', "Marathi");
    formData.append('class', "8B");
    params.set("subject","Marathi");
    params.set("class","8B");
    /*{'subject':"Marathi",'class':"8B"}*/ 
    /*const req = new HttpRequest('POST', this._filesUrl, formData, {
      reportProgress: true
    });
    return this.http.request(req)*/
    return this.http.post<any>(this._filesUrl,{'subject':"Marathi",'class':"8B"})
  }
  getBooksbySubject(sub){
    const formData = new FormData();
    formData.append('subject', "whichever you want");
    return this.http.post<any>(this._getBooksbySubject,{'subject':sub});

  }
  getAssignmentbySubnID(sub){
    return this.http.post<any>(this._getAssignmentbySubnID,{'subject':sub});
  }
}
