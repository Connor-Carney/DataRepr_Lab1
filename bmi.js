class BMI {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    } // End of Constructor

    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    } // End of calculateBMI

} // End of Class

let MyBMI = new BMI(2, 90);
let calculatedBMI = MyBMI.calculateBMI();
console.log(calculatedBMI);