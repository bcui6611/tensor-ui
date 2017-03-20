export class Inventory {
  id: string;

  name: string;
  description: string;
  organization_id: string;
  variables: number;

  total_hosts: number;
  hosts_with_active_failures: number;
  total_groups: number;
  groups_with_active_failures: number;
  total_inventory_sources: number;
  inventory_sources_with_failures: number;

  has_inventory_sources: boolean;
  has_active_failures: boolean;

  created: Date;
  modified: Date;

  type: string;
  links: Object;
  meta: Object;
}
