import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Query } from 'src/EntityModels/query';
import {baseurl} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http:HttpClient) {

   }
   Queries:Query[]=[];
   Query!:Query;
   addQuery(Query:Query):Observable<Query>{
     return this.http.post<Query>(`${baseurl}query/add`,Query);
   }
   deleteQuery(id:number):Observable<Object>{
     return this.http.delete<Object>(`${baseurl}query/delete/${id}`);
   }
   viewQuery(id:number):Observable<Query>{
    return this.http.get<Query>(`${baseurl}query/view/${id}`);
   }
   viewAllQuery():Observable<Query[]>{
    return this.http.get<Query[]>(`${baseurl}query/view`);
   }
   updateQuery(Query:Query, id:number):Observable<Query>{
    return this.http.put<Query>(`${baseurl}query/update/${id}`,Query);
   }
}
