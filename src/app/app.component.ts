import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Bienvenue dans escape';
  nbClassicsRooms = 4;
  nbVirtualRooms = 5;
  ageMin = 12;
  ageMax = 120;

  imageUrl = './assets/images/escape1.jpg';

  ngOnInit(): void {
    setTimeout(
      () => {
        this.title = 'Saurez-vous sortir vivant ?';
      }, 5000
    );

    setTimeout(
      () => {
        this.imageUrl = './assets/images/escape2.jpg';
      }, 3000
    );
  }

  lastLi() {
    return 'Un amusement garanti';
  }

}