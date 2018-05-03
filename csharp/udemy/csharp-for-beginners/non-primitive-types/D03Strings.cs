using System;

namespace non_primitive_types
{
    public class D03Strings
    {
        public static void Run()
        {
            string firstName = "Chris";
            string lastName = "Aguilar";
            string fullName = $"{firstName} {lastName}";
            Console.WriteLine(fullName);
        }
    }
}
