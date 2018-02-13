/*
static => Accessible to other classes and such

Data Types:
String => List of characters
int => Integer
double => Real number

final <datatype> => declares constant
*/

public class Tutorial001 {
    // Class Variable
    static String randomString = "A string to print";

    // Class Constant
    static final double PINUM = 3.141592653589;

    public static void main(String[] args) {
        /* ---BASICS--- */
        System.out.println("Hello, World!");
        System.out.println(randomString);
        System.out.println(PINUM);

        /* ---VARIABLES--- */
        // Declaration Statement: int integerOne;
        // Declaration + Assignment: int integerOne = 22;
        // Multiple Declarations: int integerOne, integerTwo;

        int integerOne = 22;
        int integerTwo = integerOne + 1;

        System.out.println(integerTwo);

        /* ---DATA TYPES--- */
        byte bigByte = 127;
        short bigShort = 32767;
        int bigInt = 2100000000;
        long bigLong = 9220000000000000000L;
        float bigFloat = 3.14F;
        double bigDouble = 3.239847593284752934875923845D;

        System.out.println(Float.MAX_VALUE);
        System.out.println(Double.MAX_VALUE);

        boolean trueOrFalse = true;

        char randomChar = 65;
        char anotherChar = 'A';
        char escapedChars = '\b'; // Pretty much what you expect from other langs
        System.out.println(randomChar);
        System.out.println(anotherChar);
        System.out.println(escapedChars);

        String stringA = "I'm a random string.";
        String stringB = "STUFF";
        String stringC = stringA + ' ' + stringB;
        System.out.println(stringC);

        String byteString = Byte.toString(bigByte);
        String shortString = Short.toString(bigShort);
        String intString = Integer.toString(bigInt);
        String longString = Long.toString(bigLong);
        String floatString = Float.toString(bigFloat);
        String doubleString = Double.toString(bigDouble);
        String booleanString = Boolean.toString(trueOrFalse);

        System.out.println(byteString);
        System.out.println(shortString);
        System.out.println(intString);
        System.out.println(longString);
        System.out.println(floatString);
        System.out.println(doubleString);
        System.out.println(booleanString);

        // double aDoubleValue = 3.141592653589;
        double aDoubleValue = 3000000000000000.141592653589;
        int doubleToInt = (int) aDoubleValue;

        int stringToInt = Integer.parseInt(intString);

        // These also exist:
        // parseShort, parseLong, parseByte, parseFloat, parseDouble, parseBoolean

        System.out.println(doubleToInt);
        System.out.println(stringToInt);
    }
}
