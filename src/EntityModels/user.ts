export class User {
    user_id:number;
    email:String;
    name: String;
    designation:String;
    password:String;

  constructor(
    user_id: number, 
    email: String, 
    name: String, 
    designation: String, 
    password: String
) {
    this.user_id = user_id
    this.email = email
    this.name = name
    this.designation = designation
    this.password = password
  }

}
