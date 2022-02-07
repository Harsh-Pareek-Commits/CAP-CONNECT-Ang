import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/EntityModels/category';
import { baseurl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  Categories:Category[]=[];
  Category!:Category;
  addCategory(Category:Category):Observable<Category>{
    return this.http.post<Category>(`${baseurl}category/add`,Category);
  }
  deleteCategory(id:number):Observable<Object>{
    return this.http.delete<Object>(`${baseurl}category/delete/${id}`);
  }
  viewAllCategory():Observable<Category[]>{
   return this.http.get<Category[]>(`${baseurl}category/view`);
  }
  updateCategory(Category:Category, id:number):Observable<Category>{
   return this.http.put<Category>(`${baseurl}category/update/${id}`,Category);
  }

}
