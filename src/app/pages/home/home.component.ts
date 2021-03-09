import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Bienvenue dans escape';
  nbClassicsRooms = 4;
  nbVirtualRooms = 5;
  ageMin = 12;
  ageMax = 120;

  isDisabled = false;

  ngOnInit(): void {
    setTimeout(
      () => {
        this.title = 'Saurez-vous sortir vivant ?';
      }, 5000
    );  

  }

  lastLi() {
    return 'Un amusement garanti';
  }

  seeMore() {
    alert('Plus');
  }

}
