import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { WishService } from './services/wish.service';
import { EventServices } from 'src/shared/services/eventServices';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent {
  items: WishItem[] = [];
  filter: any = () => {};

  get visibleWishes(): WishItem[] {
    return this.items.filter(this.filter);
  }

  constructor(events: EventServices, private wishService: WishService) {
    events.listen('removeWish', (payload: any) => {
      let index = this.items.indexOf(payload);
      this.items.splice(index, 1)
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      {
        next: (data: any) => {
          this.items = data;
        },
        error: (error:any) => {
          alert(error.message)
        }
      }
    )
  }
}
