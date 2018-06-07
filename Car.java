// package car;

public class Car {

    int maxSpeed = 100;
    int minSpeed = 0;

    double weight = 4079;

    boolean isTheCarOn = false;
    char condition = 'A';
    String nameOfCar = "Lucy";

    double maxFuel = 16;
    double currentFuel = 8;
    double mpg = 26.4;

    int numberOfPeopleInCar = 1;
    int maxNumberOfPeopleInCar = 6;


    // f(x, y, z) = x + 1/z - y;
    // Say x = 5;
    // f(5) = 5 + 1 = 6;

    public Car() {

    }

    public Car(int customMaxSpeed, double customWeight, boolean customIsTheCarOn) {
        maxSpeed = customMaxSpeed;
        weight = customWeight;
        isTheCarOn = customIsTheCarOn;
    }


    // GETTERS AND SETTERS

    public int getMaxSpeed() {
        return this.maxSpeed;
    }

    public void setMaxSpeed(int newMaxSpeed) {
        this.maxSpeed = newMaxSpeed;
    }

    public int getMinSpeed() {
        return this.minSpeed;
    }

    public void setMinSpeed(int newMinSpeed) {
        this.minSpeed = newMinSpeed;
    }

    public double getWeight() {
        return this.weight;
    }

    public void setWeight(double newWeight) {
        this.weight = newWeight;
    }

    public boolean getIsTheCarOn() {
        return this.isTheCarOn;
    }

    public void setIsTheCarOn(boolean newIsTheCarOn) {
        this.isTheCarOn = newIsTheCarOn;
    }

    public char getCondition() {
        return this.condition;
    }

    public void setCondition(char newCondition) {
        this.condition = newCondition;
    }


    public void printVariables() {
        System.out.println("maxSpeed: " + maxSpeed);
        System.out.println("minSpeed:" + minSpeed);
        System.out.println("Weight " + weight);
        System.out.println("Is It On: " + isTheCarOn);
        System.out.println("Condition: " + condition);
        System.out.println("Name: " + nameOfCar);
        System.out.println("Number Of People in Car: " + numberOfPeopleInCar);
    }

    public void wreckCar() {
        condition = 'C';
    }

    public void upgradeMaxSpeed() {
        setMaxSpeed(getMaxSpeed() + 10);
    }

    public void getIn() {
        // numberOfPeopleInCar = numberOfPeopleInCar + 1;
        // if there aren't too many people in the car
        if(numberOfPeopleInCar < maxNumberOfPeopleInCar) {
            // then someone can get in
            numberOfPeopleInCar++;
            System.out.println("Someone got in");
        } else {
            // otherwise print out that the car is full
            System.out.println("The car is full! " + numberOfPeopleInCar + " = " + maxNumberOfPeopleInCar);
        }
    }

    public void getOut() {
        // if there's people in the car
        if(numberOfPeopleInCar > 0) {
            // then tell one person to get out
            numberOfPeopleInCar--;
        } else {
            // otherwise no one can get out
            System.out.println("No on is in the car " + numberOfPeopleInCar);
        }
    }

    public double howManyMilesTillOutOfGas() {
        return currentFuel * mpg;
    }

    public double maxMilesPerFillUp() {
        return maxFuel * mpg;
    }

    public void turnTheCarOn() {
        // if the car isn't on...
        if(!isTheCarOn) {
            // turn it on
            isTheCarOn = true;
        } else {
            // ohterwise print out the fact is't on
            System.out.println("The car is already on " + isTheCarOn);
        }
    }

    public static void main(String[] args) {
        // Car birthdayPresent = new Car(500, 5000.545, true);
        // System.out.println("Birthday Car v1");
        // birthdayPresent.printVariables();
        // birthdayPresent.getIn();
        // birthdayPresent.getIn();
        // birthdayPresent.getIn();
        // System.out.println("Miles left: " + birthdayPresent.howManyMilesTillOutOfGas());
        // System.out.println("Max Fill Up: " + birthdayPresent.maxMilesPerFillUp());
        // System.out.println("Birthday Car v2");
        // birthdayPresent.printVariables();
        // birthdayPresent.getOut();
        // System.out.println("Birthday Car v3");
        // birthdayPresent.printVariables();
        // System.out.println("Christmas Car");
        // Car christmasPresent = new Car(550, 2000, false);
        // christmasPresent.printVariables();
        Car tommyCar = new Car();
        tommyCar.getOut();
        tommyCar.getOut();
        tommyCar.getIn();
        tommyCar.getIn();
        tommyCar.getIn();
        tommyCar.getIn();
        tommyCar.getIn();
        tommyCar.getIn();
        tommyCar.getIn();
        tommyCar.turnTheCarOn();
        tommyCar.turnTheCarOn();

    }
}