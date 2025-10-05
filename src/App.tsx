import { Box, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>


      <Box hideBelow="lg">  
        <GridItem area="aside" bg="gold">
          Aside 
        </GridItem>
      </Box>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  ); // 'Box' element and 'hideBelow' attribute added required for Chakra UI v3 // 'show' and 'below' for v2
}

export default App;
