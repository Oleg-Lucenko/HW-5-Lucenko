
interface generalTemplateOfShapes {
    color: string;
    name: string;
};

interface printShapes {
    print(): void;
};

abstract class GeometricShapes implements generalTemplateOfShapes {
    readonly color: string;
    readonly name: string;

    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    };

    abstract calculateArea(firstArgument: number, secondArgument?: number): number;

};


class Circle extends GeometricShapes {

    radius: number;
    
    constructor(color: string, name: string, r: number) {
        super(color, name);
        this.radius = r;
    };
    
    calculateArea(r: number): number {
        return 3.14 * r * r;
    };
};

class Rectangle extends GeometricShapes implements printShapes {
    
    sideA: number;
    sideB: number;

    constructor(color: string, name: string, sideA: number, sideB: number) {
        super(color, name);
        this.sideA = sideA;
        this.sideB = sideB;
        
    };
    
    calculateArea(a: number, b: number): number {
        return a * b;
    };

    print(): void {
        console.log('Formula for calculating area of square: a * b');
    };
};

class Square extends GeometricShapes implements printShapes {
    
    side: number;

    constructor(color: string, name: string, side: number) {
        super(color, name);
        this.side = side;
        
    };
    
    calculateArea(a: number): number {
        return a * a;
    };

    print(): void {
        console.log('Formula for calculating area of square: a * a');
    };
};

class Triangle extends GeometricShapes {

    sideA: number;
    sideB: number;
    sideC: number;

    constructor(color: string, name: string, sideA: number, sideB: number, sideC: number) {
        super(color, name);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    };
    
    calculateArea(a: number, h: number): number {
        return (a * h)/2;
    };
};




