using System;

namespace _05_42
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
                Write a program and ask the user to enter a number. The number
                should be between 1 to 10. If the user enters a valid number,
                display "Valid" on the console. Otherwise, display "Invalid".
                (This logic is used a lot in applications where values entered
                into input boxes need to be validated.)
            */
            var random = new Random().Next(1, 11);

            Console.Write("Guess a number between 1 and 10: ");
            var guess = int.Parse(Console.ReadLine());

            if (guess == random) Console.WriteLine("Valid");
            else Console.WriteLine("Invalid");

            /*
                Write a program which takes two numbers from the console and
                displays the maximum of the two.
            */
            Console.Write("Enter a number: ");
            var number1 = int.Parse(Console.ReadLine());

            Console.Write("Enter another number: ");
            var number2 = int.Parse(Console.ReadLine());

            Console.WriteLine(Math.Max(number1, number2));

            /*
                Write a program and ask the user to enter the width and height
                of an image. Then tell if the image is landscape or portrait.
            */
            Console.Write("Give me the width: ");
            var width = int.Parse(Console.ReadLine());

            Console.Write("Give me the height: ");
            var height = int.Parse(Console.ReadLine());

            if (width < height) Console.WriteLine("Picture is portrait");
            else Console.WriteLine("Picture is landscape");
        }
    }
}
