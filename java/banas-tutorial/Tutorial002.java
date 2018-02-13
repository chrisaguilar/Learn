
// Accepts user input
import java.util.Scanner;

public class Tutorial002 {

    static Scanner userInput = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.print("Your favorite number: ");

        // If the next thing typed is an integer (.hasNext{Double,Float,Boolean,Float,Byte,Long})
        if (userInput.hasNextInt()) {
            int numberEntered = userInput.nextInt();
            System.out.println("You entered " + numberEntered);

            int numberEnteredTimes2 = numberEntered + numberEntered;
            System.out.println(numberEntered + " + " + numberEntered + " = " + numberEnteredTimes2);

            int numberEnteredMinus2 = numberEntered - 2;
            System.out.println(numberEntered + " - 2 = " + numberEnteredMinus2);

            int numberEnteredTimesSelf = numberEntered * numberEntered;
            System.out.println(numberEntered + " * " + numberEntered + " = " + numberEnteredTimesSelf);

            int numberEnteredDividedBy2 = numberEntered / 2;
            System.out.println(numberEntered + " / 2 = " + numberEnteredDividedBy2);

            numberEntered += 2;
            numberEntered -= 2;
            numberEntered++;
            numberEntered--;

            int numberABS = Math.abs(numberEntered);
            int whichIsBigger = Math.max(4, 6);
            int whichIsSmaller = Math.min(4, 6);
            double numSqrt = Math.sqrt(5.23);
            int numCeiling = (int) Math.ceil(5.23);
            int numFloor = (int) Math.floor(5.23);
            int numRound = (int) Math.round(5.23);

            // Math.random() * max + 1
            int randomNumber = (int) (Math.random() * 11);
            System.out.println(randomNumber);

        } else {
            System.out.println("Enter an integer next time");
        }
    }
}
