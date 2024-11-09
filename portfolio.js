// portfolio.js
import { assets } from './asset.js';

//function that sums the total value of the portfolio by multiplying the price and quantity of each asset.
export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

// function that calculates the percentage allocation of each asset in the portfolio.
export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalValue) * 100
    }));
}
