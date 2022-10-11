import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const ClientPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Text>ClientPage</Text>
    </Container>
  );
};

ClientPage.getLayout = getDocsLayout;

export default ClientPage;
