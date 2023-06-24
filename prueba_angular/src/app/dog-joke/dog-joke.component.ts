import { Component } from '@angular/core';
import { JokeService } from '../joke.service';
import { RandomimgService } from '../randomimg.service';

@Component({
  selector: 'app-dog-joke',
  templateUrl: './dog-joke.component.html',
  styleUrls: ['./dog-joke.component.css']
})
export class DogJokeComponent {
  jokeSetup: string;
  imageData: any;
  jokePunchline: string;

  constructor(private jokeService: JokeService, private randomimgService: RandomimgService) {
    this.jokeSetup = '';
    this.imageData = null;
    this.jokePunchline = '';
   }
  
  ngOnInit() {
    this.jokeService.getJoke().subscribe(response => {
      this.jokeSetup = response.setup;
      this.jokePunchline = response.punchline;
    });
    this.randomimgService.getRandomImage().subscribe(response => {
      this.imageData = response.message;
    });
  }
}
