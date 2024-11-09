// asset.js
export const assets = [
    { id: 1, name: 'TechCorp Stock', type: 'stock', price: 150, quantity: 50 },
    { id: 2, name: 'Green Energy Bond', type: 'bond', price: 100, quantity: 30 },
    { id: 3, name: 'Health Fund ETF', type: 'etf', price: 200, quantity: 20 }
];

export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}
