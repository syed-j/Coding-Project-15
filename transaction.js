// transaction.js
import { assets, getAssetById } from './asset.js';

export class Transaction {
    constructor(assetId, type, quantity) {
        // Find the asset by ID
        this.asset = getAssetById(assetId);
        this.type = type;
        this.quantity = quantity;

        // Check if the asset exists; throw an error if it doesn't
        if (!this.asset) {
            throw new Error(`Asset with ID ${assetId} not found`);
        }

        // Check if there is enough quantity available for sale
        // If the type is "sell" and quantity exceeds current asset quantity, throw an error
        if (type === 'sell' && this.quantity > this.asset.quantity) {
            throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
        }

        // Execute the transaction by adjusting the asset quantity
        this.executeTransaction();
    }

    executeTransaction() {
        if (this.type === 'buy') {
            this.asset.quantity += this.quantity;
        } else if (this.type === 'sell') {
            this.asset.quantity -= this.quantity;
        }
    }
}
