// Card management
class CardManager {
    constructor() {
        this.validCards = new Map();
        this.currentBatch = '';
        this.setupEventListeners();
    }

    loadCards() {
        const batchNumber = document.getElementById('batchNumber').value.trim();
        const seriesInput = document.getElementById('cardSeries').value.trim();
        
        if (!batchNumber || !seriesInput) {
            alert('Please enter both batch number and card series');
            return;
        }

        this.currentBatch = batchNumber;
        const series = seriesInput.split(',').map(s => s.trim());
        
        series.forEach(s => {
            this.validCards.set(s, batchNumber);
        });

        alert(`Loaded ${series.length} cards from batch ${batchNumber}`);
    }

    verifyCard(seriesNumber) {
        return this.validCards.has(seriesNumber) ? this.validCards.get(seriesNumber) : null;
    }

    setupEventListeners() {
        document.getElementById('loadCards').addEventListener('click', () => this.loadCards());
    }

    getCurrentBatch() {
        return this.currentBatch;
    }

    generateCardNumbers() {
        const numbers = [];
        // B (1-15)
        const b = this.generateRandomNumbers(1, 15, 5);
        // I (16-30)
        const i = this.generateRandomNumbers(16, 30, 5);
        // N (31-45) with center FREE
        const n = this.generateRandomNumbers(31, 45, 4);
        n.splice(2, 0, 'FREE');
        // G (46-60)
        const g = this.generateRandomNumbers(46, 60, 5);
        // O (61-75)
        const o = this.generateRandomNumbers(61, 75, 5);

        return [...b, ...i, ...n, ...g, ...o];
    }

    generateRandomNumbers(min, max, count) {
        const numbers = [];
        while (numbers.length < count) {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        return numbers;
    }

    displayWinningCard(seriesNumber, pattern) {
        const batchNumber = this.verifyCard(seriesNumber);
        if (!batchNumber) {
            alert('Invalid card series number!');
            return;
        }

        const numbers = this.generateCardNumbers();
        const popup = document.getElementById('winningCardPopup');
        const grid = document.getElementById('winningCardGrid');
        const batchDisplay = document.getElementById('batchNumberDisplay');
        const seriesDisplay = document.getElementById('seriesNumberDisplay');

        // Display batch number at top
        batchDisplay.textContent = `Batch: ${batchNumber}`;
        
        // Display series number at bottom left
        seriesDisplay.textContent = `Series: ${seriesNumber}`;

        // Create card grid
        grid.innerHTML = '';
        numbers.forEach((num, index) => {
            const cell = document.createElement('div');
            cell.className = 'bingo-cell border p-2 text-center ' + 
                           (pattern.grid[index] ? 'bg-green-200' : '');
            cell.textContent = num;
            grid.appendChild(cell);
        });

        popup.classList.remove('hidden');
    }
}

const cardManager = new CardManager();

function closeWinningCardPopup() {
    document.getElementById('winningCardPopup').classList.add('hidden');
}
