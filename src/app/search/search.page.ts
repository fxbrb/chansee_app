import { 
  Component, 
  AfterViewInit, 
  ViewChildren,
  ElementRef,
  QueryList,
  NgZone
} from '@angular/core';
import { IonCard, GestureController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements AfterViewInit{

  people = [
    {
      name: '6V6 PARIS 16',
      image: '../../assets/img/terrain1.png',
      power : 0
    },
    {
      name: '10v10 Paris 18',
      image: '../../assets/img/terrain1.png',
      power : 0
    },
    {
      name: '10v10 Paris 17',
      image: '../../assets/img/terrain1.png',
      power : 0
    }, 
  ];

  @ViewChildren(IonCard, {read: ElementRef}) cards: QueryList<ElementRef>;
  longPressActive = false;

  constructor(private gestureCtrl: GestureController, private zone: NgZone, private plt: Platform) {}

  ngAfterViewInit() {
    const cardArray = this.cards.toArray();
    this.useSwipe(cardArray);
  }

  useSwipe(cardArray) {
    for (let i = 0; i < cardArray.length; i++){
      const card = cardArray[i];
      console.log('card', card);

      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'swip',
        onStart: ev=>{
          
        },
        onMove: ev => {
         card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`; 
         this.setCardColor(ev.deltaX, card.nativeElement);
        },
        onEnd: ev => {
          card.nativeElement.style.transition= '.5s ease-out';

          if(ev.deltaX > 150) {
            card.nativeElement.style.transform = `translateX(${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
          } else if (ev.deltaX < -150) {
            card.nativeElement.style.transform = `translateX(${-this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
          } else {
            card.nativeElement.style.transform = '';
          }
        }
      });

      gesture.enable(true)
    }
  }

  setCardColor(x, element) { 
    let color = '';
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min,2);

    if (x<0){
      color = '#FF' + hexCode + hexCode;
    } else {
      color = '#' + hexCode + 'FF' + hexCode;
    }

    element.style.background = color;
  }

  decimalToHex(d,padding) {
    let hex = Number(d).toString(16);
    padding = typeof padding === 'undefined' || padding === null ? (padding =2) : padding;

    while (hex!.length < padding) {
      hex = '0' + hex;
    }

    return hex;
  }

}
