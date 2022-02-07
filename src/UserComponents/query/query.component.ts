import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Query } from 'src/EntityModels/query';
import { QueryService } from 'src/Services/query.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  queryList!:Query[]

  constructor(private queryService: QueryService, private toastr: ToastrService,private router: Router) { }
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

  ngOnInit(): void {
    this.getQueries()
  }

}
