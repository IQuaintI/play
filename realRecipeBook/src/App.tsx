import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Grid from "@mui/material/Unstable_Grid2";

// Import other recipe components
import FishSoup from "./recipes/FishSoup";

//Import images
import fishSoup from "./assets/fishSoup.jpg";

import "./css/App.scss";

function App() {
  const [selectedItem, setSelectedItem] = useState<{
    id: number;
    label: string;
  } | null>(null);

  const items = [
    { id: 1, label: "Fish Soup" },
    { id: 2, label: "Other Recipe 1" },
    { id: 3, label: "Other Recipe 2" },
    // Add other recipes as needed
  ];

  return (
    <Grid container rowSpacing={12} columnSpacing={{ sm: 2 }}>
      <Grid sm={12} id="header">
        <Header title="Real Recipe Book" />
      </Grid>
      <Grid sm={3} id="sidebar">
        <Sidebar title="Recipes" items={items} onSelect={setSelectedItem} />
      </Grid>
      <Grid sm={9} id="recipes">
        {selectedItem && selectedItem.label === "Fish Soup" && (
          <FishSoup
            recipe={{
              name: items[0].label,
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
        {/* Add other recipe components here based on selectedItem */}
      </Grid>
      <Grid sm={12} id="footer">
        <div>Footer</div>
      </Grid>
    </Grid>
  );
}

export default App;
