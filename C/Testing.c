#include <stdio.h>
#include <stdbool.h>

bool isValid(long num);
int countDigits(long num);

int main(void)
{
    // 378282246310005
    char getNumber[16];
    printf("Enter a credit card number: ");
    scanf("%s", getNumber);

    if (isValid(getNumber))
        printf("%d is valid according to Luhn's algorithm.\n", getNumber);
    else
        printf("%d is not valid according to Luhn's algorithm.\n", getNumber);
}

int countDigits(long num)
{

    int count = 0;
    while (num != 0)
    {
        num /= 10; // Divide the number by 10
        count++;
    }
    return count;
}

bool isValid(long num)
{
    int nDigits = countDigits(num);
    int sum = 0, isSecond = false;
    int currentDigit;

    while (num > 0)
    {
        currentDigit = num % 10; // Get the last digit

        if (isSecond)
        {
            currentDigit *= 2;
            if (currentDigit > 9)
                currentDigit -= 9;
        }

        sum += currentDigit;
        num /= 10; // Remove the last digit
        isSecond = !isSecond;
    }

    return (sum % 10 == 0);
}
