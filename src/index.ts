
class Circle {

    readonly color: string;
    readonly name: string;

    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }
    
    calculateArea(r: number) {
        return 3.14 * r * r;
    }
}

class Rectangle {
    
    readonly color: string;
    readonly name: string;

    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }
    
    calculateArea(a: number, b: number) {
        return a * b;
    }

    print() {
        console.log('Formula for calculating area of square: a * b')
    }
}

class Square {
    
    readonly color: string;
    readonly name: string;

    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }
    
    calculateArea(a: number) {
        return a * a;
    }

    print() {
        console.log('Formula for calculating area of square: a * a')
    }
}

class Triangle {

    readonly color: string;
    readonly name: string;

    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }
    
    calculateArea(a: number, h: number) {
        return (a * h)/2;
    }
}







