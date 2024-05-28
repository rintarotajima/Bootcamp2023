class Color {
    constructor(r,g,b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    toHex() {
        return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }

    toString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

}

const red = new Color(255,0,0);
console.log(red.toString());
console.log(red.toHex());

const green = new Color(0,255,0);
console.log(green.toString());
console.log(green.toHex());

const blue = new Color(0,0,255);
console.log(blue.toString());
console.log(blue.toHex());