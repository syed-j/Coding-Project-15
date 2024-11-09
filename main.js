// main.js
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

function displayPortfolio() {
    console.log("Portfolio Value:", calculatePortfolioValue());
    console.log("Portfolio Allocation:", getPortfolioAllocation());
}

function main() {
    // Initial Portfolio Details
    console.log("Initial Portfolio:");
    displayPortfolio();

    // Create Transactions
    console.log("\nProcessing Transactions...");
    try {
        const transaction1 = new Transaction(1, 'buy', 10); // Buy 10 of TechCorp Stock
        console.log(`Transaction 1: Bought 10 of ${transaction1.asset.name}`);

        const transaction2 = new Transaction(2, 'sell', 5); // Sell 5 of Green Energy Bond
        console.log(`Transaction 2: Sold 5 of ${transaction2.asset.name}`);

        const transaction3 = new Transaction(3, 'buy', 5); // Buy 5 of Health Fund ETF
        console.log(`Transaction 3: Bought 5 of ${transaction3.asset.name}`);
    } catch (error) {
        console.error("Transaction Error:", error.message);
    }

    // Updated Portfolio Details
    console.log("\nUpdated Portfolio:");
    displayPortfolio();
}

main();
