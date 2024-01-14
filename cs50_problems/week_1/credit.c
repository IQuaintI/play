#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isValid(const char *num);
int getCardType(const char *num);

int main(void) {
    char getNumber[20];  // Increased length to handle longer numbers
    printf("Enter a credit card number: ");
    scanf("%19s", getNumber);  // Limit input to prevent buffer overflow

    int cardType = getCardType(getNumber);
    switch (cardType) {
        case 1:
            printf("Visa card detected.\n");
            break;
        case 2:
            printf("MasterCard detected.\n");
            break;
        case 3:
            printf("American Express card detected.\n");
            break;
        case 4:
            printf("Discover card detected.\n");
            break;
        default:
            printf("Card type unknown.\n");
    }
}

// Function to identify the type of card
int getCardType(const char *num) {
    if (num[0] == '4') {
        return 1; // Visa
    } else if (strncmp(num, "51", 2) == 0 || strncmp(num, "52", 2) == 0 || 
               strncmp(num, "53", 2) == 0 || strncmp(num, "54", 2) == 0 || 
               strncmp(num, "55", 2) == 0) {
        return 2; // MasterCard
    } else if (strncmp(num, "34", 2) == 0 || strncmp(num, "37", 2) == 0) {
        return 3; // American Express
    } else if (strncmp(num, "6011", 4) == 0 || (strncmp(num, "65", 2) == 0) ||
               (strncmp(num, "644", 3) == 0 || strncmp(num, "645", 3) == 0 ||
                strncmp(num, "646", 3) == 0 || strncmp(num, "647", 3) == 0 ||
                strncmp(num, "648", 3) == 0 || strncmp(num, "649", 3) == 0)) {
        return 4; // Discover
    }
    return 0; // Unknown type
}

// Function to check if the card is valid using Luhn's algorithm
bool isValid(const char *num) {
    int numDigits = strlen(num);
    int sum = 0, isSecond = false;
    for (int i = numDigits - 1; i >= 0; i--) {
        int digit = num[i] - '0';

        if (isSecond) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        isSecond = !isSecond;
    }

    return (sum % 10 == 0);
}
