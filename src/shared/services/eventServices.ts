import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class EventServices {
  //supply messages from observable to ojects
  private subject = new Subject();

  emit(eventName: string, payload: any) {
    this.subject.next({ eventName, payload });
  }

  listen(eventName: string, callback: (payload: any) => void) {
    this.subject.asObservable().subscribe((next: any) => {
      if (eventName === next.eventName) {
        callback(next.payload);
      }
    });
  }
}
