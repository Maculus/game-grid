import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Box hideBelow="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Box>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  ); // 'Box' element and 'hideBelow' attribute added required for Chakra UI v3 // 'show' and 'below' for v2
}

export default App;
