import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const VillagesPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Text>VillagesPage</Text>
    </Container>
  );
};

VillagesPage.getLayout = getDocsLayout;

export default VillagesPage;
