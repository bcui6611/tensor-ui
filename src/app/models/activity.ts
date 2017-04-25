export class Activity {
  public id: string;

  public actor_id: string;
  public object1: Object;
  public object2: Object;
  public timestamp: Date;
  public operation: string;
  public changes: Object;

  public type: string;
  public links: Object;
  public meta: Object;
}
