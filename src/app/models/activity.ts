export class Activity {
  id: string;

  actor_id: string;
  object1: Object;
  object2: Object;
  timestamp: Date;
  operation: string;
  changes: Object;

  type: string;
  links: Object;
  meta: Object;
}
