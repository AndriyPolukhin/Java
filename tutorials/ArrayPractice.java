// package arraypractice;

import java.util.Arrays;

public class ArrayPractice {

  public static void printArray(int[] array) {
    System.out.print("[");
    for (int i = 0; i < array.length; i += 1) {
      int item = array[i];
      System.out.print(item);
      if( i < array.length - 1) {
        System.out.print (", ");
      }
    }
    System.out.println("]");
  }

  public static void printArray(String[] array) {
    System.out.print("[");
    for (int i = 0; i < array.length; i += 1) {
      String item = array[i];
      System.out.print(item);
      if( i < array.length - 1) {
        System.out.print (", ");
      }
    }
    System.out.println("]");
  }

  public static void main(String[] args) {
    // TODO code application logic here

    // Index:  0  1  2  3  4
    // Array: [0, 5, 3, 2, 1] --> lenght 5
    // Random Objects from Array:
    // Math.abs(rand.nextInt) % length;

    //  Index:  0       1       2
    // Array: ['bob', 'sally', 'max'] --> lenght 3

    // 3 ways to make an Array
    // Declaring, Allocating, Initializing
    int[] intArray1;
    int[] intArray2 = new int[4];
    printArray(intArray2);
    int[] intArray3 = {5, 2, 9, 1, 3};

    String[] shoppingList = {"bananas", "apples", "pears"};

    // Index:   0  1  2   3
    // Array: [10, 8, 5, 10] --> lenght 4

    intArray2[0] = 10;
    intArray2[1] = 8;
    intArray2[2] = 5;
    intArray2[3] = 10;



    // Print out Arrays
    System.out.println(Arrays.toString(intArray2));
    System.out.println(Arrays.toString(intArray3));
    System.out.println();
    // Custom print out
    printArray(intArray2);
    printArray(intArray3);
    System.out.println();

    // Retrieve objects
    System.out.println(intArray2[3]);
    // System.out.println(Arrays.get(intArray2, 2));

    System.out.println();

    // Given function
    System.out.println(Arrays.toString(intArray3));
    Arrays.sort(intArray3);
    printArray(intArray3);
    // System.out.println(Arrays.toString(intArray3));

    printArray(shoppingList);

    System.out.println("Special for Loop:");
    // Special for loop for Arrays forEach
    for (String s : shoppingList) {
      System.out.println(s);
    }
  }
}