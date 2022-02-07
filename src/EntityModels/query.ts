import { Category } from "./category";
import { User } from "./user";

export class Query {
     post_id:Number;
     title:String;
     query_body:String;
     query_date:String;
     query_status:Number;

  constructor(
    post_id: Number, 
    title: String, 
    query_body: String, 
    query_date: String, 
    query_status: Number, 
    user: User, 
    category: Category
) {
    this.post_id = post_id
    this.title = title
    this.query_body = query_body
    this.query_date = query_date
    this.query_status = query_status
    this.user = user
    this.category = category
  }
     user: User;
     category : Category;

  

}
