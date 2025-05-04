// Pattern management
class PatternManager {
    constructor() {
        this.patterns = JSON.parse(localStorage.getItem('bingoPatterns')) || [];
        this.currentPattern = Array(25).fill(false);
        this.initializePatternEditor();
        this.loadPatternList();
        this.setupEventListeners();
    }

    initializePatternEditor() {
        const editor = document.getElementById('patternEditor');
        editor.innerHTML = '';
        
        for (let i = 0; i < 25; i++) {
            const cell = document.createElement('div');
            cell.className = 'pattern-cell cursor-pointer';
            cell.dataset.index = i;
            
            // Set center cell as FREE
            if (i === 12) {
                cell.classList.add('selected');
                cell.textContent = 'FREE';
                this.currentPattern[i] = true;
            }
            
            cell.addEventListener('click', () => this.toggleCell(i));
            editor.appendChild(cell);
        }
    }

    toggleCell(index) {
        if (index === 12) return; // Don't toggle FREE space
        const cell = document.querySelector(`[data-index="${index}"]`);
        this.currentPattern[index] = !this.currentPattern[index];
        cell.classList.toggle('selected');
    }

    savePattern() {
        const name = document.getElementById('patternName').value.trim();
        if (!name) {
            alert('Please enter a pattern name');
            return;
        }

        const pattern = {
            id: Date.now(),
            name,
            grid: [...this.currentPattern]
        };

        this.patterns.push(pattern);
        localStorage.setItem('bingoPatterns', JSON.stringify(this.patterns));
        this.loadPatternList();
        document.getElementById('patternName').value = '';
    }

    loadPatternList() {
        const list = document.getElementById('patternList');
        list.innerHTML = '';

        this.patterns.forEach(pattern => {
            const div = document.createElement('div');
            div.className = 'flex justify-between items-center p-2 bg-gray-100 rounded';
            
            div.innerHTML = `
                <span>${pattern.name}</span>
                <div>
                    <button class="text-blue-500 hover:text-blue-700 mr-2" onclick="patternManager.editPattern(${pattern.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="text-red-500 hover:text-red-700" onclick="patternManager.deletePattern(${pattern.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            
            list.appendChild(div);
        });
    }

    editPattern(id) {
        const pattern = this.patterns.find(p => p.id === id);
        if (!pattern) return;

        this.currentPattern = [...pattern.grid];
        document.getElementById('patternName').value = pattern.name;
        
        const cells = document.querySelectorAll('.pattern-cell');
        cells.forEach((cell, index) => {
            if (pattern.grid[index]) {
                cell.classList.add('selected');
            } else {
                cell.classList.remove('selected');
            }
        });

        this.deletePattern(id);
    }

    deletePattern(id) {
        this.patterns = this.patterns.filter(p => p.id !== id);
        localStorage.setItem('bingoPatterns', JSON.stringify(this.patterns));
        this.loadPatternList();
    }

    setupEventListeners() {
        document.getElementById('savePattern').addEventListener('click', () => this.savePattern());
    }

    getPatterns() {
        return this.patterns;
    }
}

const patternManager = new PatternManager();
