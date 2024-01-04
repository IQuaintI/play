#include <stdio.h>
#include <stdbool.h>

int countDigits(int num);
bool isValid(int num);

int main(void)
{
    int number = 123456789;
    if (isValid(number))
        printf("%d is valid according to Luhn's algorithm.\n", number);
    else
        printf("%d is not valid according to Luhn's algorithm.\n", number);

    return 0;
}

// Function to count the number of digits in an integer
int countDigits(int num)
{
    int count = 0;
    while (num != 0)
    {
        num /= 10; // Divide the number by 10
        count++;
    }
    return count;
}

// Function to check if a number is valid according to Luhn's algorithm
bool isValid(int num)
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
