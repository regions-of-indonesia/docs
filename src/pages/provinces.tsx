import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const ProvincesPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Text>ProvincesPage</Text>
    </Container>
  );
};

ProvincesPage.getLayout = getDocsLayout;

export default ProvincesPage;
