import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isCompleted,
  (item: WishItem) => item.isCompleted,
]

@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<any>();
  listFilter: any = "0";

  ngOnInit(){
    this.filter.emit(filters[0])
  }

  filterChange(value: any){
    this.filter.emit(filters[value])
  }
}
