public class Tutorial003 {
    public static void main(String[] args) {
        int randomNumber = (int) (Math.random() * 50);

        /** Relational Operators:
         * >  : Greater Than
         * >= : Greater Than Or Equal To
         * <  : Less Than
         * <= : Less Than Or Equal To
         * == : Equal To
         * != : Not Equal To
        */

        if (randomNumber < 25) {
            System.out.println("The random number is less than 25");
        } else if (randomNumber <= 40) {
            System.out.println("The random number is greater than 40");
        } else if (randomNumber == 18) {
            System.out.println("The random number is equal to 18");
        } else if (randomNumber <= 30) {
            System.out.println("The random number is not equal to 30");
        } else {
            System.out.println("Nothing Worked!");
        }
        // etc

        /** Logical Operators
         * !  : Reverses Truthiness
         * &  :
         * && :
         * |  :
         * || :
         * ^  : XOR (one or the other are true, but not both)
        */

        if (!(false)) {
            System.out.println("I turned false into true!");
        }

        if (!(false) && (true)) {
            System.out.println("Both are true.");
        }

        if ((false) & (true)) {
            System.out.println("");
        }

        if ((false) | (true)) {
            System.out.println("One is true.");
        }

        if ((false) ^ (false)) {
            System.out.println("One or the other are true, but not both");
        }
        if ((true) ^ (false)) {
            System.out.println("One or the other are true, but not both");
        }
        if ((true) ^ (true)) {
            System.out.println("One or the other are true, but not both");
        }

        /**
         * Ternary Operator
         */

        int valueOne = 1;
        int valueTwo = 2;

        int biggestValue = (valueOne > valueTwo) ? valueOne : valueTwo;
        System.out.println(biggestValue);

        char theGrade = 'B';

        switch (theGrade) {
        case 'A':
            System.out.println("Great Job!");
            break;
        case 'B':
            System.out.println("Good Job!");
            break;
        case 'C':
            System.out.println("You Did Ok!");
            break;
        case 'D':
            System.out.println("You Did Bad!");
            break;
        default:
            System.out.println("You Failed!");
            break;
        }

        System.out.println("The random number is " + randomNumber);
    }
}
