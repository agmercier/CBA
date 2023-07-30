import {
  Box,
  Button,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack,
} from "@chakra-ui/react";
import { Node } from "@reactflow/core";
import useForms, { Form } from "../../../hooks/useForms";
import { BsChevronDown } from "react-icons/bs";

/**
 * Dynamically display a form passed by the server
 * Each parameter has an entry in the form which is dynamically assigned
 * String -> Input
 * Number -> Number Input
 * List of options -> Menu's
 */

interface Props {
  //node the
  node: Node | null;
}

const NodeForm = ({ node }: Props) => {
  //Get all forms
  const { data, isLoading, error } = useForms();
  //Find the form that matches the node
  const form = data.find((form) => form.nodeType === node?.type);
  return (
    <aside color="black">
      <VStack>
        <Heading marginBottom={4}>{node?.data.label} parameters:</Heading>
        {/* Map each parameter to an input in the form */}
        {form?.params.map((param) =>
          typeof param.value === "string" ? (
            <Box key={param.key} marginBottom={4}>
              <Heading size={"sm"}>{param.key}</Heading>
              <Input variant="flushed" placeholder={param.value}></Input>
            </Box>
          ) : typeof param.value === "number" ? (
            <Box key={param.key} marginBottom={4}>
              <Heading size={"sm"}>{param.key}</Heading>
              <NumberInput defaultValue={param.value}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
          ) : /* If is an array with options inside*/
          typeof param.value === "object" && param.value.length !== 0 ? (
            <Menu key={param.key}>
              <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}
                marginBottom={4}
              >
                {param.key}
              </MenuButton>
              <MenuList>
                {param.value.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          ) : (
            <></>
          )
        )}
      </VStack>
    </aside>
  );
};

export default NodeForm;
