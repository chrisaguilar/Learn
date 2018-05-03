using System;
using non_primitive_types.Math;

namespace non_primitive_types
{
    public class D01Classes
    {

        public static void Run()
        {
            var chris = new Person();
            chris.FirstName = "Chris";
            chris.LastName = "Aguilar";
            chris.Introduce();

            var calculator = new Calculator();
            var result = calculator.Add(1, 4);
            System.Console.WriteLine(result);
        }

        public class Person
        {
            public string FirstName;
            public string LastName;

            public void Introduce()
            {
                Console.WriteLine("My name is {0} {1}", FirstName, LastName);
            }
        }
    }
}
