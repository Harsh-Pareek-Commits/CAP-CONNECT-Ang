import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Answer } from 'src/EntityModels/answer';
import { Query } from 'src/EntityModels/query';
import { AnswerService } from 'src/Services/answer.service';
import { QueryService } from 'src/Services/query.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
queryId:any=undefined
query! : Query
answers! : Answer[]
  constructor(private route: ActivatedRoute, private queryService: QueryService, private answerService: AnswerService, private toastr: ToastrService,private router: Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.queryId=params.get('id')?params.get('id'):undefined;
    })
    
    this.getAnswer()
  }
  
  getAnswer(){
    if(this.queryId){
      this.queryService.viewQuery(this.queryId).subscribe(data=>{
        this.query=data;
      },
      (error)=>{
        if(error.status==404){
          this.toastr.info('No Query Found')
        }
        else if(error.status==403){
          this.toastr.error('Please log in first');
          this.router.navigate(["/login"])
        }
        else{
          this.toastr.error('Something went wrong!');
          console.log(error);
        }
        }
        )
        this.answerService.viewAllAnswer(this.queryId).subscribe(data=>{
          this.answers=data;
        },
        (error)=>{
          if(error.status==404){
            this.toastr.info('No Answer Found')
          }
          else if(error.status==403){
            this.toastr.error('Please log in first');
            this.router.navigate(["/login"])
          }
          else{
            this.toastr.error('Something went wrong!');
            console.log(error);
          }
          }
          )
    }
  }

}
