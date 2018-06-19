// package guessthenumber;

import java.util.Random;
import java.util.Scanner;

public class GuessTheNumber {


    int theNUMBER;
    int max;
    Scanner scanner = new Scanner(System.in);

    public GuessTheNumber() {
        Random rand = new Random();
        max = 100;
        theNUMBER = Math.abs(rand.nextInt()) % (max + 1);
    }

    public void play() {
        while(true) {
            int move = scanner.nextInt();
            if (move > theNUMBER) {
                System.out.println("Your number is too big");
            } else if (move < theNUMBER) {
                System.out.println("Your number is too small");
            } else {
                System.out.println("You got it BRO");
                break;
            }
        }
    }

    public static void howBigIsMyNumber(int x) {
        if ( x >= 0 && x <= 10) {
            System.out.println("Our number is pretty small: " + x);
        } else if (x >= 11 && x <= 100) {
            System.out.println("Our number is pretty big: " + x);
        } else {
            System.out.println("Our number is out of range: " + x);
        }
    }


    public static void main(String[] args) {
        GuessTheNumber guessGame = new GuessTheNumber();
        System.out.println("Welcome to my game. Try and guess my impossible number");
        System.out.println("It is between 0 and a " + guessGame.max + " inclusive.");
        System.out.println("Just type a number to get started");
        guessGame.play();
    }
}