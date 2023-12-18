import { Component, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventServices } from 'src/shared/services/eventServices';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {
  @Input() item!: WishItem;

  constructor(private events: EventServices){}

  toggleItem(item: WishItem){
    item.isCompleted = !item.isCompleted;
  }

  removeWish(){
    this.events.emit('removeWish', this.item);
  }
}
