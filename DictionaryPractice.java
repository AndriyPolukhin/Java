// package dictionarypractice;

import java.util.HashMap;
import java.util.Map;

public class DictionaryPractice {

  public static void main(String[] args) {
    // English to Spanish Dictionary
    Map<String,String> englSpanDictionary = new HashMap<String,String>();
    // Puting things inside our Dictionary
    englSpanDictionary.put("Monday","Lunes");
    englSpanDictionary.put("Tuesday","Martes");
    englSpanDictionary.put("Wednesday","Miercoles");
    englSpanDictionary.put("Thursday","Jueves");
    englSpanDictionary.put("Friday","Viernes");
    englSpanDictionary.put("Saturday", "Sabado");
    englSpanDictionary.put("Sunday", "Domingo");
    // Retrive things from the dictionary
    System.out.println(englSpanDictionary.get("Monday"));
    System.out.println(englSpanDictionary.get("Tuesday"));
    System.out.println(englSpanDictionary.get("Wednesday"));
    System.out.println(englSpanDictionary.get("Thursday"));
    System.out.println(englSpanDictionary.get("Friday"));
    // Print out all keys
    System.out.println(englSpanDictionary.keySet());
    // Print out all values
    System.out.println(englSpanDictionary.values());
    // Size of the dictionary
    System.out.println("The size of the Dictionary is: " + englSpanDictionary.size());

    System.out.println();
    System.out.println();

    // Shopping List
    Map<String,Boolean>shoppingList = new HashMap<String,Boolean>();
    //Put some stuff into the list
    shoppingList.put("Ham", true);
    shoppingList.put("Bread", Boolean.TRUE);
    shoppingList.put("Oreos", Boolean.TRUE);
    shoppingList.put("Eggs", Boolean.FALSE);
    shoppingList.put("Sugar", false);
    // Retrive Items
    System.out.println(shoppingList.get("Ham"));
    System.out.println(shoppingList.get("Oreos"));
    // Key value Pairs print out
    System.out.println(shoppingList.toString());
    // Check is there something in the dictionary
    System.out.println(shoppingList.isEmpty());
    // Remove a key
    shoppingList.remove("Eggs");
    System.out.println(shoppingList.toString());
    // Replace a values
    shoppingList.replace("Bread",Boolean.FALSE);
    System.out.println(shoppingList.toString());
    // Clear the dictionary
    shoppingList.clear();
    System.out.println(shoppingList.toString());
    // Check if the dictionary is empty
    System.out.println(shoppingList.isEmpty());

  }
}