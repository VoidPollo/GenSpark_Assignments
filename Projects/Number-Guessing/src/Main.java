import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello! What is your name?\n");
        String userName = new Scanner(System.in).nextLine();

        do {
            int secretNumber = new Random().nextInt(0, 21);
            System.out.printf("\nWell, %s, I am thinking of a number between 1 and 20.\nTake a guess\n\n", userName);

            for (int tries = 1; tries <= 6; tries++) {
                int userGuess = new Scanner(System.in).nextInt();

                if (userGuess == secretNumber) {
                    System.out.printf("\nGood job, %s! You guessed my number in %s guesses!", userName, tries);
                    break;
                } else if (tries == 6) {
                    System.out.printf("\nSorry, %s! That was not correct.\nYou also ran out of guesses!\n", userName);
                    break;
                }

                if (userGuess > secretNumber) {
                    System.out.println("Your guess is too high.\nTake a guess.");
                } else {
                    System.out.println("Your guess is too low.\nTake a guess.");
                }
            }

            System.out.println("\nWould you like to play again? (y or n)");
        } while (!new Scanner(System.in).nextLine().equals("n"));
    }
}