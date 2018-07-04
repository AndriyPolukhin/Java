 
package employee;

import java.util.Locale;
import java.text.NumberFormat;

 
public class Employee {

    // instance variables:
    protected String name;
    private int salary;
    
    // Parameterized Constructor
    // set the name
    Employee(String name) {
        this.name = name;
    }
    
    // Return the name
    String getName() {
        return name;
    }
    
    // set the salary
    void setSalary(int salary) {
        this.salary = salary;
    }
    
    // return salary
    int getSalary() {
        return salary;
    }
    
    void print() {
        if(this.salary == 0) {
            System.err.println("Error: No salary set for " + this.name 
            + "; please set salary and try again.\n");
        }
        else {
            // print and format the salary and info
            NumberFormat salaryFormat = NumberFormat.getNumberInstance(Locale.US);
            
            System.out.println("Employee Name: " + this.name
            + "\nSalary: " + salaryFormat.format(this.salary) + "\n");
        }
    }
    
    public static void main(String[] args) {
        // TODO code application logic here
         Employee employee = new Employee("Andriy");
         employee.print();
         employee.setSalary(60000);
         employee.print();
         
         Volunteer volunteer = new Volunteer("Andy");
         volunteer.setHours(20);
         volunteer.print();
    }
    
}
