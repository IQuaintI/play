#include <stdio.h>
#include <ctype.h>

int getWord(void);
int score(void);
int compareScore(void);

int main(void)
{
    getWord();
    score();
    compareScore();
    return 0;
}

// Declares two arrays to store the words
char questionOne[50];
char questionTwo[50];

int getWord(void)
{
    // Prompts the user to enter two words
    printf("Enter a word Player One!: ");
    scanf("%s", questionOne);
    printf("Enter a word Player Two!: ");
    scanf("%s", questionTwo);

    return 0;
}

// Declares two variables to store the score
int scoreOne = 0;
int scoreTwo = 0;

int score(void)
{
    // Loops through the first word and adds the score
    for (int i = 0; questionOne[i] != '\0'; i++)
    {
        char ch = tolower(questionOne[i]); // Convert to lowercase for simplicity

        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
            ch == 'l' || ch == 'n' || ch == 's' || ch == 't' || ch == 'r')
        {
            scoreOne += 1;
        }
        else if (ch == 'd' || ch == 'g')
        {
            scoreOne += 2;
        }
        else if (ch == 'b' || ch == 'c' || ch == 'm' || ch == 'p')
        {
            scoreOne += 3;
        }
        else if (ch == 'f' || ch == 'h' || ch == 'v' || ch == 'w' || ch == 'y')
        {
            scoreOne += 4;
        }
        else if (ch == 'k')
        {
            scoreOne += 5;
        }
        else if (ch == 'j' || ch == 'x')
        {
            scoreOne += 8;
        }
        else if (ch == 'q' || ch == 'z')
        {
            scoreOne += 10;
        }
    }

    // Loops through the second word and adds the score
    for (int i = 0; questionTwo[i] != '\0'; i++)
    {
        char ch = tolower(questionTwo[i]); // Convert to lowercase for simplicity

        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
            ch == 'l' || ch == 'n' || ch == 's' || ch == 't' || ch == 'r')
        {
            scoreTwo += 1;
        }
        else if (ch == 'd' || ch == 'g')
        {
            scoreTwo += 2;
        }
        else if (ch == 'b' || ch == 'c' || ch == 'm' || ch == 'p')
        {
            scoreTwo += 3;
        }
        else if (ch == 'f' || ch == 'h' || ch == 'v' || ch == 'w' || ch == 'y')
        {
            scoreTwo += 4;
        }
        else if (ch == 'k')
        {
            scoreTwo += 5;
        }
        else if (ch == 'j' || ch == 'x')
        {
            scoreTwo += 8;
        }
        else if (ch == 'q' || ch == 'z')
        {
            scoreTwo += 10;
        }
    }

    return 0;
}

int compareScore(void)
{
    // Compares the scores and prints the winner
    if (scoreOne > scoreTwo)
    {
        printf("Player One wins!\n");
    }
    else if (scoreOne < scoreTwo)
    {
        printf("Player Two wins!\n");
    }
    else if (scoreOne == scoreTwo) // Add condition for tie
    {
        printf("It's a tie!\n");
    }

    return 0;
}