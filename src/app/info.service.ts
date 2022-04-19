import { Injectable } from '@angular/core';
import { users } from './info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  private user: users =
    {
      id: 1,
       fname : 'arif',
       lname :'hasan',
       email: 'bsse1112@gmail.com',
       address :'dhaka',
       image : ''
    }


  

  personToBeToBeadded !: users;


  getUsers(): users{
    return this.user;
 }

 getUsersToBeadded(): users{
  return this.personToBeToBeadded;
}

submitFunction( newlap : users){

  this.user = newlap;

 // this.user.splice(laps,0, newlap);
}


}
