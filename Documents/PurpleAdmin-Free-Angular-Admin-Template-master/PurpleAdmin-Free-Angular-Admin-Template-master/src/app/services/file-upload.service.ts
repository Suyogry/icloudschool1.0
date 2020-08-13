import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse
} from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

const url = '/api/assignupload';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  
  private _filesUrl ="/updown/files";
  constructor(private http: HttpClient) { }

  public upload(
    files: Set<File>,
  data:any): { [key: string]: { progress: Observable<number> } } {
    // this will be the our resulting map
    const status: { [key: string]: { progress: Observable<number> } } = {};

    files.forEach(file => {
      // create a new multipart-form for every file

      const formData: FormData = new FormData();
      formData.append('subject',data.subject);
      formData.append('a_q_id',data.fileId);
      formData.append('assignment', file, file.name);

      // create a http-post request and pass the form
      // tell it to report the upload progress
      const req = new HttpRequest('POST', url, formData, {
        reportProgress: true
      });

      // create a new progress-subject for every file
      const progress = new Subject<number>();

      // send the http-request and subscribe for progress-updates

      const startTime = new Date().getTime();
      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          // calculate the progress percentage

          const percentDone = Math.round((100 * event.loaded) / event.total);
          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          progress.complete();
        }
      });

      // Save every progress-observable in a map of all observables
      status[file.name] = {
        progress: progress.asObservable()
      };
    });

    // return the map of progress.observables
    return status;
  }

  getFiles(subject){
    const formData = new FormData();
    formData.append('subject', subject);
    formData.append('class', "8B");
    /*{'subject':"Marathi",'class':"8B"}*/ 
    /*const req = new HttpRequest('POST', this._filesUrl, formData, {
      reportProgress: true
    });
    return this.http.request(req)*/
    return this.http.post<any>(this._filesUrl,{'subject':subject,'class':"8B"})
  }


}
