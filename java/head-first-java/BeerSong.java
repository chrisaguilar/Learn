public class BeerSong {
    public static void main(String[] args) {
        int beerNum = 99;
        String word = "bottles";
        String message;

        while (beerNum > 0) {
            System.out.println(beerNum + " " + word + " of beer on the wall");
            System.out.println(beerNum + " " + word + " of beer");
            System.out.println("Take one down");
            System.out.println("Pass it around");

            beerNum -= 1;
            word = (beerNum == 1) ? "bottle" : word;
            message = (beerNum > 0) ? String.format("%d %s", beerNum, word) : "No more bottles";

            System.out.println(String.format("%s of beer on the wall\n", message));
        }
    }
}
