export class Answer {
    ans_id:number;
    ans_body:String;
    ans_date:String;
    ans_status:Number;

  constructor(
    ans_id: number, 
    ans_body: String, 
    ans_date: String, 
    ans_status: Number
) {
    this.ans_id = ans_id
    this.ans_body = ans_body
    this.ans_date = ans_date
    this.ans_status = ans_status
  }

}
