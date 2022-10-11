import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const DistrictsPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Text>DistrictsPage</Text>
    </Container>
  );
};

DistrictsPage.getLayout = getDocsLayout;

export default DistrictsPage;
