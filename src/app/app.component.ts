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

  ngOnInit(): void {
    setTimeout(
      () => {
        console.log('timeout fini');
        this.title = 'Saurez-vous sortir vivant ?';
      }, 5000
    );
  }

  lastLi() {
    console.log('lastLi');
    return 'Un amusement garanti';
  }

}
