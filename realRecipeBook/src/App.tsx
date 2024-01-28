// Admin Imports
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

// Recipe Imports
import FishSoup from "./recipes/FishSoup";
import StrawberryRomanoff from "./recipes/StrawberryRomanoff";
import FulMedames from "./recipes/FulMedames";
import SpicyArrabiataPenne from "./recipes/SpicyArrabiataPenne";
import LambPilaf from "./recipes/LambPilaf";

// Images Imports
import fishSoup from "./assets/fishSoup.jpg";
import strawberryRomanoff from "./assets/strawberryRomanoff.jpg";
import fulMedames from "./assets/fulMedames.jpg";
import chocolateAvocadoMousse from "./assets/chocolateAvocadoMousse.jpg";
import spicyArrabiataPenne from "./assets/spicyArrabiataPenne.jpg";
import lambPilaf from "./assets/lambPilaf.jpg";

// CSS Imports
import "./css/App.scss";
import ChocolateAvocadoMousse from "./recipes/ChocolateAvocadoMousse";

function App() {
  const [selectedItem, setSelectedItem] = useState<{
    id: number;
    label: string;
  } | null>(null);

  const items = [
    { id: 1, label: "Fish Soup" },
    { id: 2, label: "Strawberry Romanoff" },
    { id: 3, label: "Ful Medames" },
    { id: 4, label: "Chocolate Avocado Mousse" },
    { id: 5, label: "Spicy Arrabiata Penne" },
    { id: 6, label: "Lamb Pilaf" },
  ];

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
      <Grid item xs={12} id="header">
        <Box sx={{ borderBottom: 3, borderColor: "pink", p: 2, width: "100%" }}>
          <Header title="Real Recipe Book" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={3} id="sidebar">
        <Box sx={{ borderRight: 1, height: "auto", minHeight: "50vh" }}>
          <Sidebar title="Recipes" items={items} onSelect={setSelectedItem} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={9} id="recipes">
        <>
          {selectedItem && selectedItem.label === "Fish Soup" && (
            <FishSoup
              recipe={{
                image: fishSoup,
                ingredients: [
                  "2 tablespoons olive oil",
                  "1 sliced onion",
                  "2 sliced carrots",
                  "4 cups fish stock",
                  "2 cups water",
                  "2 potatoes, peeled and cubed",
                  "2 bay leaves",
                  "1 teaspoon black peppercorns",
                  "Salt to taste",
                  "1/2 cup millet",
                  "1 pound white fish fillets, cut into 1-inch cubes",
                  "1/4 cup chopped fresh dill or parsley",
                ],
                instructions: [
                  "In a medium pot, heat the olive oil over medium-high heat.",
                  "Add the onions and cook, stirring occasionally until the onions start to caramelize.",
                  "Add the carrots and cook until the carrots start to soften, about 4 more minutes.",
                  "Add the stock, water, potatoes, bay leaves, and black peppercorns.",
                  "Season with salt and bring to a boil.",
                  "Reduce heat, cover and cook for 10 minutes.",
                  "Add the millet and cook for 15 more minutes until millet and potatoes are cooked.",
                  "Gently add the fish cubes.",
                  "Stir and bring the soup to a simmer.",
                  "The fish will cook through very fast, so make sure to not overcook them.",
                  "They are done when the flesh is opaque and flakes easily.",
                  "Garnish the soup with chopped fresh dill or parsley before serving.",
                ],
              }}
            />
          )}
          {selectedItem && selectedItem.label === "Strawberry Romanoff" && (
            <StrawberryRomanoff
              recipe={{
                image: strawberryRomanoff,
                ingredients: [
                  "2 pints strawberries",
                  "4 tbs sugar",
                  "4 tbs grand marnier",
                  "4 cups fish stock",
                  "2 cups water",
                ],
                instructions: [
                  "In a medium bowl, combine hulled and quartered strawberries, 4 Tbsp sugar and 4 Tbsp liqueur, stir to combine then cover and refrigerate at least 1 hour and up to 2 hours, stirring once or twice.",
                  "Add the onions and cook, stirring occasionally until the onions start to caramelize.",
                  "Using a spatula, fold in 1/4 cup sour cream just until well blended.",
                  "To serve, stir strawberries then divide between 6 serving glasses or bowls.",
                  "You can spoon a little syrup over the berries if you like.",
                  "You can also use this syrup to soak a cake.",
                  "Spoon cream over strawberries, dividing evenly.",
                  "You can also use an ice cream scoop with trigger release for a nice rounded puff of cream.",
                  "Serve right away or chill and enjoy within 2 hours of assembly.",
                ],
              }}
            />
          )}
          {selectedItem && selectedItem.label === "Ful Medames" && (
            <FulMedames
              recipe={{
                image: fulMedames,
                ingredients: [
                  "2 cups broad beans",
                  "1/3 cup parsley",
                  "Dash olive oil",
                  "3 lemons",
                  "4 garlic cloves",
                  "1 teaspoon cumin",
                ],
                instructions: [
                  "As the cooking time varies depending on the quality and age of the beans, it is good to cook them in advance and to reheat them when you are ready to serve.",
                  "Cook the drained beans in a fresh portion of unsalted water in a large saucepan with the lid on until tender, adding water to keep them covered, and salt when the beans have softened.",
                  "They take 2 to 2 1/2 hours of gentle simmering.",
                  "When the beans are soft, let the liquid reduce.",
                  "It is usual to take out a ladle or two of the beans and to mash them with some of the cooking liquid, then stir this back into the beans.",
                  "Serve the beans in soup bowls sprinkled with chopped parsley and accompanied by Arab bread.",
                ],
              }}
            />
          )}
          {selectedItem &&
            selectedItem.label === "Chocolate Avocado Mousse" && (
              <ChocolateAvocadoMousse
                recipe={{
                  image: chocolateAvocadoMousse,
                  ingredients: [
                    "1 banana",
                    "3 tbsp cocoa powder",
                    "1 avocado",
                    "2 tbsp honey",
                    "1 tsp vanilla extract",
                    "1 pinch salt",
                    "2 tbsp water",
                    "1 tsp lemon juice",
                  ],
                  instructions: [
                    "Blend all the mousse ingredients together in your food processor until smooth.",
                    "Add the cacao powder first and, as you blend, have all the ingredients to hand in order to adjust the ratios slightly as the size of avocados and bananas varies so much.",
                    "The perfect ratio in order to avoid the dish tasting too much of either is to use equal amounts of both.",
                  ],
                }}
              />
            )}
          {selectedItem && selectedItem.label === "Spicy Arrabiata Penne" && (
            <SpicyArrabiataPenne
              recipe={{
                image: spicyArrabiataPenne,
                ingredients: [
                  "1/2 cup olive oil",
                  "1/2 cup diced onion",
                  "2 tablespoons minced garlic",
                  "1/2 cup diced celery",
                  "1/2 cup diced carrot",
                  "2 (28 ounce) cans peeled and diced tomatoes",
                  "1/2 cup red wine",
                  "1 tablespoon chopped fresh basil",
                  "1 tablespoon chopped fresh parsley",
                  "1 tablespoon crushed red pepper flakes",
                  "1/2 teaspoon salt",
                  "1/2 teaspoon ground black pepper",
                  "1 pound penne pasta",
                  "1/2 cup grated Parmesan cheese",
                ],
                instructions: [
                  "Heat olive oil in a large saucepan over medium heat.",
                  "Saute onion and garlic until tender.",
                  "Stir in celery and carrot; cook for 5 minutes.",
                  "Stir in tomatoes, red wine, basil, parsley, crushed red pepper, salt, and pepper.",
                  "Bring to a boil, reduce heat to low, and simmer for 1 hour, stirring occasionally.",
                  "Bring a large pot of lightly salted water to a boil.",
                  "Add pasta and cook for 8 to 10 minutes or until al dente; drain.",
                  "Toss pasta with sauce, and sprinkle with Parmesan cheese.",
                ],
              }}
            />
          )}
          {selectedItem && selectedItem.label === "Lamb Pilaf" && (
            <LambPilaf
              recipe={{
                image: lambPilaf,
                ingredients: [
                  "1 tablespoon olive oil",
                  "1 pound ground lamb",
                  "1 onion, chopped",
                  "1 (14.5 ounce) can diced tomatoes",
                  "1 cup uncooked white rice",
                  "1 cup water",
                  "1/2 cup raisins",
                  "1/2 teaspoon ground cinnamon",
                  "1/2 teaspoon ground cumin",
                  "1/2 teaspoon ground coriander",
                  "1/2 teaspoon ground turmeric",
                  "1/2 teaspoon ground black pepper",
                  "1/2 teaspoon salt",
                  "1/2 cup pine nuts",
                ],
                instructions: [
                  "Heat the olive oil in a large skillet over medium-high heat.",
                  "Add the lamb and onion; cook and stir until the lamb is crumbly, evenly browned, and no longer pink.",
                  "Drain and discard any excess grease.",
                  "Stir in the tomatoes, rice, water, raisins, cinnamon, cumin, coriander, turmeric, pepper, and salt.",
                  "Bring to a boil over high heat, then reduce heat to medium-low, cover, and simmer until the rice is tender, about 20 minutes.",
                  "Meanwhile, place the pine nuts in a dry skillet over medium heat.",
                  "Cook and stir until golden brown, then stir into the pilaf before serving.",
                ],
              }}
            />
          )}
        </>
      </Grid>
      <Grid item xs={12} id="footer">
        <Box sx={{ borderTop: 3, borderColor: "pink", p: 2, width: "100%" }}>
          {" "}
          <Footer title="Information pulled from 'TheMealDB'" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
