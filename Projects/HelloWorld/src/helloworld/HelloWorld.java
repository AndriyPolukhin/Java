
package helloworld;

import java.util.*;


/**
 *
 * @author Andrey
 */
public class HelloWorld {

     private static int nTimesK(int n, int k) {
         System.out.println("n: "+n);
         
         if(n > 1) {
             return k + nTimesK(n - 1, k);
         }
         else {
             return k;
         }
     }
    public static void main(String[] args) {
        // TODO code application logic here
        Scanner scanner = new Scanner(System.in);
        int result = nTimesK(scanner.nextInt(), scanner.nextInt());
        scanner.close();
        System.out.println("Result: " + result);
    }
    
}
