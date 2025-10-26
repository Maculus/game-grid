import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Box hideBelow="lg">
        <GridItem area="aside" paddingX="10px">
          <GenreList />
        </GridItem>
      </Box>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  ); // 'Box' element and 'hideBelow' attribute added required for Chakra UI v3 // 'show' and 'below' for v2
}

export default App;
