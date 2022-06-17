import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("""
                You are in a land full of dragons. In front of you,
                you see two caves, In one cave, the dragon is friendly
                and will share his treasure with you. The other dragon
                is greedy and hungry and will eat you on sight.
                Which cave will you go into? (1 or 2)""");

        switch (new Scanner(System.in).nextLine()) {
            case "1" -> System.out.println("""
                    You approach the cave...
                    It is dark and spooky...
                    A large dragon jumps out in front of you! He opens his jaws and...
                    Gobbles you down in one bite!""");
            case "2" -> System.out.println("""
                    You approach the caves...
                    It is dark and spooky...
                    A large dragon jumps out in front of you! He opens his jaws and...
                    Tells you a funny joke, as he shares the treasure with you!""");
            default -> System.out.println("You tripped and fell, maybe you shouldn't go inside the cave.");
        }
    }
}