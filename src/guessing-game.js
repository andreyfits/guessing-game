class GuessingGame {
    constructor() {
        this.min = this.max = this.mid = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.mid = Math.round(this.min + (this.max - this.min) / 2);
    }

    lower() {
        this.max = this.mid;
        this.setRange(this.min, this.max);
    }

    greater() {
        this.min = this.mid;
        this.setRange(this.min, this.max);
    }
}

module.exports = GuessingGame;
