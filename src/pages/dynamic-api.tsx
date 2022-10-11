import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const DynamicAPIPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Text>DynamicAPIPage</Text>
    </Container>
  );
};

DynamicAPIPage.getLayout = getDocsLayout;

export default DynamicAPIPage;
