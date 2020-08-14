import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isTournament: boolean = false;
  $background : any;
  $home : any;

  constructor() { }

  ngOnInit(): void {
  }

  startTournament($button, $title, $background, $home){
    this.$background = $background;
    this.$home = $home;
    $button.classList.add("start");
    $title.classList.add("start");
    $background.style.animation = 'tournament 2s forwards';
    setTimeout(() => {
      $button.style.display = "none";
      $title.style.display = "none";
      $home.style.gridTemplateAreas = '"corner content"'
      $home.style.gridTemplateColumns = "1fr 540px";
      $background.style.backgroundImage = "url('https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ultimate-team/features/images/franchise-hero-large-asset-name-here-16x9-xl.jpg.adapt.crop16x9.1920w.jpg')";
      this.isTournament = true;
    }, 2000);
  }

  createTeams(tournament) {
    console.log(tournament);
  }

}
