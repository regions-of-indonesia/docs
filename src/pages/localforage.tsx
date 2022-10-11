import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const LocalForagePage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Text>LocalForagePage</Text>
    </Container>
  );
};

LocalForagePage.getLayout = getDocsLayout;

export default LocalForagePage;
