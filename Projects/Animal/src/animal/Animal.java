
package animal;

public abstract class Animal { 
    private int age; // VS private int age;

    
    public Animal(int age) {
        this.age = age;
        System.out.println("Animal has been created!");
    }
    
    // happy = 10;
    // f(x) = x + 5 + happy;
    // f(z, d) = z + d + happy;
    public void doSomething(String thing) {
        System.out.println("I'm doing " + thing);
    }
    
    public abstract void eat();
    
    public void sleep() {
        System.out.println("An animal is sleeping");
    }
    
    public int getAge() {
        return age;
    }
    
    public static void main(String[] args) {
        // TODO code application logic here
        
         
        Dog d = new Dog();
        Cat c = new Cat();
        d.eat();
        c.eat();
        d.sleep();
        c.sleep();
        
        
        // casting
        Object dog = new Dog();
        
        Dog realDog = (Dog) dog;
        realDog.ruff();
        
        Object str = "est";
        String realS = (String) str;
        realS.getBytes();
        
        // What happens when...
        Dog doggy = new Dog();
        if (d instanceof Animal) {
            Animal animal = (Animal) doggy;
            animal.sleep();
            
        }
        doggy.sleep();
        
    }
    
}
