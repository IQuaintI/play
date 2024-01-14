#include <stdio.h>
#include <ctype.h>

void getChange();

int main(void)
{
    getChange();
    return 0;
}

void getChange()
{
    int change;
    int quarters = 25;
    int dimes = 10;
    int nickels = 5;
    int pennies = 1;

    do
    {
        printf("Change owed: ");
        scanf("%i", &change);
    } while (change < 0);

    if (change == 0)
    {
        printf("No change owed.\n");
        return;
    }


    int numQuarters = change / quarters;
    change %= quarters;

    int numDimes = change / dimes;
    change %= dimes;

    int numNickels = change / nickels;
    change %= nickels;

    int numPennies = change / pennies;

    printf("Quarters: %i\n", numQuarters);
    printf("Dimes: %i\n", numDimes);
    printf("Nickels: %i\n", numNickels);
    printf("Pennies: %i\n", numPennies);
}
