#include <stdio.h>

void create_pyramid(int height);

int main()
{
    int height = 5;

    create_pyramid(height);
}

void create_pyramid(int height)
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < height - i - 1; j++)
        {
            printf(" ");
        }

        for (int k = 0; k < i + 1; k++)
        {
            printf("#");
        }

        for (int l = 0; l < 2; l++)
        {
            printf(" ");
        }

        for (int m = 0; m < i + 1; m++)
        {
            printf("#");
        }

        printf("\n");
    }
}