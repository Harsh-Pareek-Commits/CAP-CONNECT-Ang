import { Query } from "@angular/core";
import { User } from "./user";

export class Answer {
    ans_id:number;
    ans_body:String;
    ans_date:String;
    ans_status:Number;
    user : User;
    query :Query;

  constructor(
    ans_id: number, 
    ans_body: String, 
    ans_date: String, 
    ans_status: Number, 
    user: User, 
    query: Query
    
) {
    this.ans_id = ans_id
    this.ans_body = ans_body
    this.ans_date = ans_date
    this.ans_status = ans_status
    this.user = user
    this.query = query
  }
    

  
}
