import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  guild: string = "no data";
  xp: number = 0;
  requiredXp: number = 100;
  progress: number = 0;

  public UserData: UserDto;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<UserDto>(baseUrl + 'UserProperties').subscribe(result => {
      this.UserData = result;
      this.xp = result.xp;
      this.guild = result.guild;
      this.progress = Math.floor(this.xp / this.requiredXp * 100);

    }, error => console.error(error));

   


  }
}

interface UserDto {
  xp: number;
  guild: string;
}