import { Box, Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import ProjectGrid from "./ProjectGrid";
import NavBar from "./Nav/NavBar";
import SideBar from "./SideBar";

/*
Cut page into two sections: nav [logo, searchBar, help, settings, profile], aside [new project, home, recent, favorite, trash], main [(Recent projects), filters, all projects]
*/

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        // formating for different aspect ratios
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr", //take all space possible if one column
        lg: "200px 1fr", // second column takes all space
      }}
    >
      <GridItem area={"nav"}>
        <NavBar onSearch={(searchText) => console.log(searchText)} />
      </GridItem>
      <Show above="lg" /* show only if screen is wide enough*/>
        <GridItem area={"aside"} padding={5}>
          <SideBar onSelectOption={(option) => console.log(option)} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <Heading>Projects</Heading>
          <HStack spacing={5} marginBottom={5} /* Filters */></HStack>
          <ProjectGrid />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
