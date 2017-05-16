import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export class EventBusService {
  public bus: Subject<Event> = new Subject<Event>();

  public dispatch(data: Event) {
    this.bus.next(data);
  }

  //its up to you how to implement it:
  public listen(type: string): Observable<Event> {
    return this.bus.filter((event) => event.type === type);
  }
}
