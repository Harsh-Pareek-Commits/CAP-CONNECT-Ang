import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/EntityModels/category';
import { Query } from 'src/EntityModels/query';
import { CategoryService } from 'src/Services/category.service';
import { QueryService } from 'src/Services/query.service';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  queryList!:Query[]
  catList! :Category[]
  addQueryForm! :FormGroup
  submitted = false;
  constructor( private queryService: QueryService, private toastr: ToastrService,private router: Router, private categoryService: CategoryService, private formBuilder : FormBuilder) { }
  
  ngOnInit(): void {
    this.initForm()
    this.getQueries()
    this.getCategory()

  }

  getQueries(){
    this.queryService.viewAllQuery().subscribe(data=>{
      this.queryList=data
      console.log(this.queryList)
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
  }

  getCategory(){
    this.categoryService.viewAllCategory().subscribe(data=>{
    this.catList=data
    console.log(this.catList)
  },
  (error)=>{
    if(error.status==404){
      this.toastr.info('No Category Found')
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

  viewQuery(id:any){
    this.router.navigate(['/answer',id])

  }

  initForm(){
    this.addQueryForm=this.formBuilder.group({
      queryTitle:["",[Validators.required]],
      queryBody:["",[Validators.required]],
      queryCategory:["",[Validators.required]]

    })
  }

  get control(){
    return this.addQueryForm.controls;
  }

postQuery(){
  this.submitted=true

  if(this.addQueryForm.valid){
    var today = new Date();
      var month
      if((today.getMonth() + 1)<10){
        month="0"+(today.getMonth() + 1);
      }else{
        month=(today.getMonth() + 1);  
      }
      var dat
      if(today.getDate()<10){
        dat="0"+today.getDate()
      }
      else{
        dat=today.getDate()
      }
      var date = today.getFullYear() + '-' + month + '-' + dat;
      
    var question=new Query("0",this.addQueryForm.get('queryTitle')?.value,this.addQueryForm.get('queryBody')?.value,date,"0")
  }

}
}
