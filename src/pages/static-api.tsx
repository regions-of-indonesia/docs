import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const StaticAPIPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Text>StaticAPIPage</Text>
    </Container>
  );
};

StaticAPIPage.getLayout = getDocsLayout;

export default StaticAPIPage;
