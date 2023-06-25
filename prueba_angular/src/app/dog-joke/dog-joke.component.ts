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
  private interval: any;
  private interval_number: any;
  regresiva: number;

  constructor(private jokeService: JokeService, private randomimgService: RandomimgService) {
    this.jokeSetup = '';
    this.imageData = null;
    this.jokePunchline = '';
    this.regresiva = 20;
   }
  
  ngOnInit() {
    this.load();

    //Setear un intervalo de 20seg para ejecutar load() que genera las variables que se renderizan en la plantilla
    this.interval = setInterval(() => {
      this.load();    
    }, 20000);

    //Cuenta regresiva
    this.interval_number = setInterval(() => {
      this.regresiva -= 1;
      if (this.regresiva === 0) {
        this.regresiva = 20;
      }
    }, 1000);
  }

  //Detener interval cuando se destruye el componente
  ngOnDestroy() {
    clearInterval(this.interval);
    clearInterval(this.interval_number);
  }

  load(){
    this.jokeService.getJoke().subscribe(response => {
      this.jokeSetup = response.setup;
      this.jokePunchline = response.punchline;
    });
    this.randomimgService.getRandomImage().subscribe(response => {
      this.imageData = response.message;
    });
  }
}
