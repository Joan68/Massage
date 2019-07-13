import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { ContactMe_Data } from './contact';
import { Observable,of, throwError } from 'rxjs';
import { ContactComponent } from './contact.component'
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  PHP_API_SERVER  = "URLtoYourAPI"      // oublie pas de changer ça !

  constructor(private httpClient : HttpClient) { }

  httpOptions = {                                                 // tes paramètres http
    headers : new HttpHeaders ({'Content-Type':  'application/json'})
  };

  post_SendEmail(ContactMe_Data: ContactMe_Data): Observable<ContactMe_Data[]>{     // on appelle ton api et on lui passe toutes les données du form !
    console.log(ContactMe_Data); // petit console.log pour voir qu'on lui passe bien les bons trucs
    return this.httpClient.post<ContactMe_Data[]>(`${this.PHP_API_SERVER}`,ContactMe_Data,this.httpOptions);
  }


}
