using System;

namespace Treehouse.FitnessFrog {
    class Program {
        static void Main() {
            double runningTotal = 0;

            while (true) {
                string entry;
                double minutes;

                Console.Write("Enter how many minutes you exercised or type \"quit\" to exit: ");
                entry = Console.ReadLine();

                if (entry.ToLower() == "quit") break;

                try {
                    minutes = double.Parse(entry);
                } catch (FormatException) {
                    Console.WriteLine("That is not valid input");
                    continue;
                }

                if (minutes <= 0) {
                    Console.WriteLine(minutes + " is not an acceptable value.");
                    continue;
                }
                else if (minutes <= 10) Console.WriteLine("Better than nothing, am I right?");
                else if (minutes <= 30) Console.WriteLine("Way to go hot stuff!");
                else if (minutes <= 60) Console.WriteLine("You must be a ninja warrior in training!");
                else Console.WriteLine("Okay, now you're just showing off!");

                runningTotal += minutes;

                Console.WriteLine("You've entered " + runningTotal + " minutes.");

            }

            Console.WriteLine("Goodbye.");
        }
    }
}

/*
    Practice Projects
    Averager
    Repeatedly prompt the user for numbers. Add all of the numbers together. When the user types in “done”, print the average of all of the numbers by dividing the total by the number of numbers entered.

    treehouse:~/workspace$ mcs Program.cs && mono Program.exe
    Enter a number or type "done" to see the average: 5.5
    Enter a number or type "done" to see the average: bogus
    That is not valid input.
    Enter a number or type "done" to see the average: 4.2
    Enter a number or type "done" to see the average: 99
    Enter a number or type "done" to see the average: done
    Average: 36.2333333333333
    treehouse:~/workspace


    Interactive Quiz
    Write an interactive quiz. It should ask the user three multiple-choice or true/false questions about something. It must keep track of how many they get wrong, and print out a "score" at the end.


    Arithmetic Calculator
    Create a calculator that does one arithmetic operation at a time and prints the result to the screen.


    Prompt the user for a number.
    Prompt the user for an operation (+ - / *).
    Prompt the user for another number.
    Perform the operation.
    Print the result to the screen.
    Repeat until the user types in “quit” at any of the prompts.
    Extra Credit: Add the power operator using the ^ symbol. You can calculate a number raised to a power using the Math.Pow method.


    Math Function Calculator
    Prompt the user for a math function such as sine, cosine, tangent, square root, logarithm, etc. Then prompt the user for the function's parameter. Perform the function and print the result back to the screen.

    Use .NET’s Math class to do perform the math for you.
*/
