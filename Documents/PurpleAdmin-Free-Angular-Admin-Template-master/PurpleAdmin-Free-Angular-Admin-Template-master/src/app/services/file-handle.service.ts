import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FileHandleService {

  private _downLoad_ass_que="/updown/file/";
  private _getAssignmentbySubnID="/api/assignmentbysubnid";

  constructor(private http: Http,
    private http1: HttpClient) { }

    downloadPDF(filename, filetype): any {
    return this.http.get(this._downLoad_ass_que + filename,
    { responseType: ResponseContentType.Blob });
  }

  deleteFile(file_id){
    return this.http.delete('api/file/'+file_id); 
  }
  showFileNames() {
    return this.http.get('api/files');
  }
  getAssignmentbySubnID(sub){
    return this.http1.post<any>(this._getAssignmentbySubnID,{'subject':sub});
  }
}
