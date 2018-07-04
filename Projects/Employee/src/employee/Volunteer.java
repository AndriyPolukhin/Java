 
package employee;

 
public class Volunteer extends Employee {
    // instance variable
    int hours;
    
    // set the name
    Volunteer(String name) {
        super(name);
    }
    
    // set hours
    void setHours(int hours) {
        this.hours = hours;
    }
    
    // get hours
    int getHours() {
        return hours;
    }
    
    @Override
        void print() {
            System.out.println("Volunteer Name: " + this.getName()
            + "\nHours: " + this.getHours());
        }
}
