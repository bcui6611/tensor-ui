import { User } from './user'
export class Credentials {
    id: string;

    name: string;
    kind: string;

    cloud: boolean;
    description: string;
    host: string;
    username: string;
    password: string;
    security_token: string;
    project: string;
    domain: string;
    ssh_key_data: string;
    ssh_key_unlock: string;
    become_method: string;
    become_username: string;
    become_password: string;
    vault_password: string;
    subscription: string;
    tenant: string;
    secret: string;
    client: string;
    authorize: boolean;
    autherize_password: string;
    orgization: string;

    created: string;
    modified: string;

    type: string;
    url: string;
    ralated: any;
    summary_fields: any;
}