public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");

        int x = 3;
        String name = "Chris";
        x = x * 17;
        System.out.println("x is " + x);
        double d = Math.random();
        System.out.println("d is " + d);
        // this is a comment

        while (x > 12) {
            x = x - 1;
        }

        for (int y = 0; y < 10; y = y + 1) {
            System.out.println("y is now " + y);
        }

        if (x == 10) {
            System.out.println("x must be 10");
        } else {
            System.out.println("x isn't 10");
        }

        if ((x < 3) & (name.equals("Chris"))) {
            System.out.println("Aguilar");
        }
        System.out.println("This line prints no matter what.");
    }
}
