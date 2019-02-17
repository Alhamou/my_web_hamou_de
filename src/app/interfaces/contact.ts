import { Timestamp } from 'rxjs';

export interface Contact {
    email: string;
    subject: string;
    body: string;
    data: Date;
}
