import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const DataPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Text>DataPage</Text>
    </Container>
  );
};

DataPage.getLayout = getDocsLayout;

export default DataPage;
