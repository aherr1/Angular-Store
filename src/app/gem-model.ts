import { ReviewModel } from './review-model';

export class GemModel {
    id: number;
    name: string;
    price: number;
    description: string;
    fullImagePath: string;
    inventory: number;
    colors: string[];
    reviews?: ReviewModel[];
}   