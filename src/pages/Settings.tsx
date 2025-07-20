// src/pages/Settings.tsx
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import MenuGroupList from "../components/settings/MenuGroupList";
import MenuList from "../components/settings/MenuList";
import DashboardLayout from "../components/layout/DashboardLayout";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <Box p={4}>
        <Heading mb={6}>Settings</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <MenuGroupList />
          <MenuList />
        </SimpleGrid>
      </Box>
    </DashboardLayout>
  );
};

export default SettingsPage;
