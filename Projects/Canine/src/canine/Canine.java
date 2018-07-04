 
package canine;

// SUPERCLASS
abstract class Canine {
    // Instance variables
    String name;
    String color;
    String gender;
    int age;
    
    // Parameters
    
    Canine(String name, String color, int age, char mF) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.gender = (mF == 'M') ? "Male" : "Female";
    }
    
    // Abstract methods
    abstract String getBreed();
    
    // Print method
    void printInfo() {
        // Pint info about the dog
        System.out.println(name + " is " + ((age%10 == 8)? "an " : "a ") + age + " year old "
         + gender + getBreed() + " with a " + color + " coat.");
    }
    
    public static void main(String[] args) {
        // TODO code application logic here
        
        
//        Canine myPuppy = new Canine("Lilah", "Grey/White", 5, 'F');
        Canine c = new KleeKai("Lilah", "Grey/White", 5, 'F');
        Canine d = new SiberianHusky("Alaska", "Grey/Black/White", 16, 'F');
        c.printInfo();
        d.printInfo();
    }
    
}
