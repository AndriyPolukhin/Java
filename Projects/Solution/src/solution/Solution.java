 
package solution;

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

class Difference {
    
    private final int[] elements;
    public int maximumDifference;
    // Add you code here;
    
   public Difference(int[] elements) {
    this.elements = elements;
    System.out.println(elements);
}

    public void computeDifference() {
        int max=1, min=100;
        for (int e: elements) {
            max = Math.max(max, e);
            min = Math.min(min, e);
        }
        maximumDifference = max - min;   
}
    
    
    /* CASE 2
    
    public Difference(int[] a)
    {
    this.elements=a;
}
public void computeDifference()
    {
    int min=elements[0];
    int max=elements[0];
    for(int i=0;i<elements.length;i++)
        {
        if(elements[i]<min)
            {
            min=elements[i];
        }
        if(elements[i]>max)
            {
            max=elements[i];
        }                
    }
maximumDifference = Math.abs(max-min);    
}
    
    */
   
    
    // End of the Difference class
}

public class Solution {
     
     
    public static void main(String[] args) {
        // TODO code application logic here
       
        /*
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        sc.close();
        */
        int[] b = new int[5];
        b[0] = 8;
        b[1] = 19;
        b[2] = 3;
        b[3] = 2;
        b[4] = 7;
//        = [8, 19, 3, 2, 7];
        
//    System.out.println(Arrays.toString(b));
        Difference difference = new Difference(b);
        
        difference.computeDifference();
        
        System.out.println(difference.maximumDifference);
    }
    
}
