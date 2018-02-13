import java.util.*;
import java.io.*;

public class Tutorial006 {

    static Scanner userInput = new Scanner(System.in);

    public static void main(String[] args) {
        divideByZero(2);

        System.out.print("How old are you? ");
        int age = checkValidAge();

        if (age != 0) {
            System.out.println("You're " + age + " years old");
        }

        getAFile("./somestuff.txt");

        try {
            getAThrownFile("./somestuff.txt");
        } catch (IOException e) {
            System.out.println("An IO Error Occurred");
        }
    }

    public static void divideByZero(int a) {
        try {
            System.out.println(a / 0);
        } catch(ArithmeticException e) {
            System.out.println("You can't do that!");
            System.out.println(e.getMessage());
            System.out.println(e.toString());
            e.printStackTrace();
        }
    }

    public static int checkValidAge() {
        try {
            return userInput.nextInt();
        } catch (InputMismatchException e) {
            userInput.next();
            System.out.print("That isn't a whole number");
            return 0;
        }
    }

    public static void getAFile(String fileName) {
        try {
            FileInputStream file = new FileInputStream(fileName);
        } catch (FileNotFoundException e) {
            System.out.println("Sorry, can't find that file");
        } catch (IOException e) {
            System.out.println("Unknown IO Error");
        } catch (Exception e) {
            System.out.println("Some error occurred");
        } finally {
            System.out.println("Finished");
        }
    }

    public static void getAThrownFile(String fileName) throws IOException, FileNotFoundException {
        FileInputStream file = new FileInputStream(fileName);
    }
}
