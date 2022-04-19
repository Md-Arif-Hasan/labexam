import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  constructor(private infoService: InfoService, private router: Router) { }

  ngOnInit(): void {
  }

  userss = this.infoService.getUsers();

 

}
