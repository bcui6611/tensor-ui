export class Inventory {
  public id: string;

  public name: string;
  public description: string;
  public organization_id: string;
  public variables: number;

  public total_hosts: number;
  public hosts_with_active_failures: number;
  public total_groups: number;
  public groups_with_active_failures: number;
  public total_inventory_sources: number;
  public inventory_sources_with_failures: number;

  public has_inventory_sources: boolean;
  public has_active_failures: boolean;

  public created: Date;
  public modified: Date;

  public type: string;
  public links: Object;
  public meta: Object;
}
