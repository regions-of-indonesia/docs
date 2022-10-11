import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const IndexPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Text>IndexPage</Text>
    </Container>
  );
};

IndexPage.getLayout = getDocsLayout;

export default IndexPage;
