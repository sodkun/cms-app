import {
  Box,
  Heading,
  VStack,
  Button,
  Text,
  Input,
  HStack,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMenuStore } from "../../stores/menuStore";

const MenuList = () => {
  const {
    menus,
    menuGroups,
    addMenu,
    removeMenu,
  } = useMenuStore();
  const [newMenu, setNewMenu] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");

  return (
    <Box borderWidth={1} p={4} borderRadius="lg">
      <Heading size="md" mb={4}>Menus</Heading>
      <VStack align="start" spacing={2}>
        {menus.map((menu) => {
          const group = menuGroups.find((g) => g.id === menu.groupId);
          return (
            <HStack key={menu.id} justify="space-between" w="full">
              <Text>
                {menu.name} ({group?.name || "Unknown Group"})
              </Text>
              <Button size="xs" colorScheme="red" onClick={() => removeMenu(menu.id)}>Delete</Button>
            </HStack>
          );
        })}
      </VStack>

      <VStack mt={4} w="full" align="stretch">
        <Input
          placeholder="New Menu Name"
          size="sm"
          value={newMenu}
          onChange={(e) => setNewMenu(e.target.value)}
        />
        <Select
          placeholder="Select Group"
          size="sm"
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
        >
          {menuGroups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </Select>
        <Button
          size="sm"
          colorScheme="green"
          onClick={() => {
            if (newMenu.trim() && selectedGroup) {
              addMenu(newMenu, selectedGroup);
              setNewMenu("");
              setSelectedGroup("");
            }
          }}
        >
          Add
        </Button>
      </VStack>
    </Box>
  );
};

export default MenuList;
