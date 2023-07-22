import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Show,
} from "@chakra-ui/react";
import ProjectGrid from "./ProjectGrid";
import NavBar from "./Nav/NavBar";
import SideBar from "./SideBar";
import FilterSelector from "./FilterSelector";
import OrderSelector from "./OrderSelector";
import { BsGrid3X2Gap, BsListStars } from "react-icons/bs";
import { useState } from "react";
import ProjectList from "./ProjectList";

/*
Cut page into two sections: nav [logo, searchBar, help, settings, profile], aside [new project, home, recent, favorite, trash], main [(Recent projects), filters, all projects]
*/

interface ProjectQuery {
  filter: string;
  order: string;
}

const HomePage = () => {
  const [projectQuery, setProjectQuery] = useState<ProjectQuery>(
    {} as ProjectQuery
  );
  const [gridView, setGridView] = useState(true);
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
        <Box paddingLeft={2} paddingRight={3}>
          <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
            Projects
          </Heading>
          <HStack
            marginBottom={2}
            justifyContent={"space-between"} /* Filters */
          >
            <HStack spacing={3}>
              <FilterSelector
                onSelectFilter={(filter) =>
                  setProjectQuery({ ...projectQuery, filter })
                }
                selectedFilter={projectQuery.filter}
              />
              <OrderSelector
                onSelectOrder={(order) =>
                  setProjectQuery({ ...projectQuery, order })
                }
                selectedOrder={projectQuery.order}
              />
            </HStack>
            <IconButton
              icon={gridView ? <BsListStars /> : <BsGrid3X2Gap />}
              aria-label={"viewSwitch"}
              onClick={() => setGridView(!gridView)}
            ></IconButton>
          </HStack>
        </Box>
        {gridView ? <ProjectGrid /> : <ProjectList />}
      </GridItem>
    </Grid>
  );
};

export default HomePage;
