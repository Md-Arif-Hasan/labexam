import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from '../info';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  constructor(private infoService: InfoService, private router: Router) { }

  ngOnInit(): void {
  }

  newData = new users();

  
  doSubmit(){
   
    this.infoService.submitFunction(this.newData);
    
    this.router.navigateByUrl('/show');
  }


}
