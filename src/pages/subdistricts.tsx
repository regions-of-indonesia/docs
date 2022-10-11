import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const SubdistrictsPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Text>SubdistrictsPage</Text>
    </Container>
  );
};

SubdistrictsPage.getLayout = getDocsLayout;

export default SubdistrictsPage;
