import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from 'src/EntityModels/answer';
import { baseurl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http:HttpClient) { }
  Answers:Answer[]=[];
  Answer!:Answer;
  addAnswer(Answer:Answer):Observable<Answer>{
    return this.http.post<Answer>(`${baseurl}answer/add`,Answer);
  }
  deleteAnswer(id:number):Observable<Object>{
    return this.http.delete<Object>(`${baseurl}answer/delete/${id}`);
  }
  viewAnswer(id:number):Observable<Answer>{
   return this.http.get<Answer>(`${baseurl}answer/view/${id}`);
  }
  viewAllAnswer(id:number):Observable<Answer[]>{
   return this.http.get<Answer[]>(`${baseurl}answer/view/${id}`);
  }
  updateAnswer(Answer:Answer, id:number):Observable<Answer>{
    return this.http.put<Answer>(`${baseurl}answer/update/${id}`,Answer);
   }
}
