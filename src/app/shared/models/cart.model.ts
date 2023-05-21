import { Merchandising } from "./merchandising.model";
import { Purchase } from "./purchase.model";

export interface Cart {
    id?: string;
    purchase: Purchase;
    merchandising: Merchandising;
    amount: number;
}