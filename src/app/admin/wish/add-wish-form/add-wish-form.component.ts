import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css'],
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  wishText = '';

  addWishItem() {
    this.addWish.emit(new WishItem(this.wishText));
    this.wishText = '';
  }
}
