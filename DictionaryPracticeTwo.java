
//package dictionarypracticetwo;

import java.util.HashMap;
import java.util.Map;

public class DictionaryPracticeTwo {

  public static void main(String[] args) {
    // English to Spanish dictionary
    Map<String,String> englSpanDictionary = new HashMap<String,String>();
    // Insterint in the dicitionary
    englSpanDictionary.put("Monday", "Lunes");
    englSpanDictionary.put("Tuesday", "Martes");
    englSpanDictionary.put("Wednsday", "Miercoles");
    englSpanDictionary.put("Thursday", "Jueves");
    englSpanDictionary.put("Friday", "Viernes");
    englSpanDictionary.put("Saturday", "Sabado");
    englSpanDictionary.put("Sunday", "Domingo");
    // Get the daya
    System.out.println(englSpanDictionary.get("Monday"));
    System.out.println(englSpanDictionary.get("Tuesday"));
    System.out.println(englSpanDictionary.get("Wednsday"));
    System.out.println(englSpanDictionary.get("Thursday"));
    System.out.println(englSpanDictionary.get("Friday"));
    System.out.println(englSpanDictionary.keySet());
    System.out.println(englSpanDictionary.values());
    System.out.println("The Size of our Dictionary is: " + englSpanDictionary.size());

    System.out.println();
    System.out.println();

    // Shopping list
    Map<String,Boolean> shoppingList = new HashMap<String,Boolean>();
    // put some stuff in
    shoppingList.put("Ham", true);
    shoppingList.put("Bread", Boolean.TRUE);
    shoppingList.put("Orios", Boolean.TRUE);
    shoppingList.put("Eggs", Boolean.FALSE);
    shoppingList.put("Sugar", false);
    // Retrive Itmes
    System.out.println(shoppingList.get("Ham"));
    System.out.println(shoppingList.get("Orios"));
    // KeyValues Pairs

    System.out.println(shoppingList.toString());
    System.out.println(shoppingList.isEmpty());
    // shoppingList.clear();
    shoppingList.remove("Eggs");
    shoppingList.replace("Bread", Boolean.FALSE);
    System.out.println(shoppingList.toString());
    // System.out.println(shoppingList.isEmpty());
  }
}