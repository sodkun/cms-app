import {
  Box,
  Heading,
  VStack,
  Button,
  Text,
  Input,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMenuStore } from "../../stores/menuStore";

const MenuGroupList = () => {
  const { menuGroups, addMenuGroup, removeMenuGroup } = useMenuStore();
  const [newGroup, setNewGroup] = useState("");

  return (
    <Box borderWidth={1} p={4} borderRadius="lg">
      <Heading size="md" mb={4}>Menu Groups</Heading>
      <VStack align="start" spacing={2}>
        {menuGroups.map((group) => (
          <HStack key={group.id} justify="space-between" w="full">
            <Text>{group.name}</Text>
            <Button size="xs" colorScheme="red" onClick={() => removeMenuGroup(group.id)}>Delete</Button>
          </HStack>
        ))}
      </VStack>

      <HStack mt={4}>
        <Input
          placeholder="New Group"
          size="sm"
          value={newGroup}
          onChange={(e) => setNewGroup(e.target.value)}
        />
        <Button
          size="sm"
          colorScheme="blue"
          onClick={() => {
            if (newGroup.trim()) {
              addMenuGroup(newGroup);
              setNewGroup("");
            }
          }}
        >
          Add
        </Button>
      </HStack>
    </Box>
  );
};

export default MenuGroupList;
