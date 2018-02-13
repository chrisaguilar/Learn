import java.util.Scanner;

public class GuessTheNumber {
    static Scanner userInput = new Scanner(System.in);
    static int randomNumber;
    static int userGuess;

    public static void main(String[] args) {
        System.out.println("I've chosen a random number between 0 and 100");
        System.out.println("Can you guess it?");

        do {
            randomNumber = (int) (Math.random() * 101);

            while (userGuess != randomNumber) {
                System.out.print("Your guess: ");
                userGuess = userInput.nextInt();

                if (userGuess < randomNumber) {
                    System.out.println("Higher!");
                } else if (userGuess > randomNumber) {
                    System.out.println("Lower!");
                }
            }

            System.out.println("\nCongratulations, you win!");
            System.out.println("The random number was " + randomNumber);
            System.out.print("\nContinue playing? [y/n] ");

        } while (userInput.next().equalsIgnoreCase("y"));
    }
}
