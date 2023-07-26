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

interface Props {
  node: Node | null;
}

const NodeForm = ({ node }: Props) => {
  const { data, isLoading, error } = useForms();
  const form = data.find((form) => form.nodeType === node?.type);
  return (
    <aside color="black">
      <VStack>
        <Heading marginBottom={4}>{node?.data.label} parameters:</Heading>
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
          ) : typeof param.value === "object" && param.value.length !== 0 ? (
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
