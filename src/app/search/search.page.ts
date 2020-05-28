import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {

  currentIndex: number;
  results = [];
  avatars = [
    {
      name: 'Barack Obama',
      age: 58,
      image: '../../assets/img/terrain1.png',
      visible: true
    },
    {
      name: 'Elon Musk',
      age: 48,
      image: '../../assets/img/terrain1.png',
      visible: true
    },
    {
      name: 'Jeff Bezos',
      age: 56,
      image: '../../assets/img/terrain1.png',
      visible: true
    },
    {
      name: 'Beyonce',
      age: 38,
      image: '../../assets/img/terrain1.png',
      visible: true
    },
    {
      name: 'Eminem',
      age: 47,
      image: '../../assets/img/terrain1.png',
      visible: true
    }
  ];

  constructor() {
    this.currentIndex = this.avatars.length - 1;
    console.log(this.currentIndex);
  }

  swiped(event: any, index: number) {
    console.log(this.avatars[index].name + ' swiped ' + event);
    this.avatars[index].visible = false;
    this.results.push(this.avatars[index].name + ' swiped ' + event);
    this.currentIndex--;
  }


  swipeleft() {
    this.avatars[this.currentIndex].visible = false;
    this.results.push(this.avatars[this.currentIndex].name + ' swiped false');
    this.currentIndex--;
  }

  swiperight() {
    this.avatars[this.currentIndex].visible = false;
    this.results.push(this.avatars[this.currentIndex].name + ' swiped true');
    this.currentIndex--;
  }

}
