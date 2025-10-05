import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        // Good practice to define template areas attributes within an object
        base: `"nav" "main"`, //  less than 1024px // 1 column in each row
        lg: `"nav nav" "aside main"`, // greater than 1024px // 2 columns in each row // Back tick used to define multi-line string
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>

      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
