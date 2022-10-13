import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Stack, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const SubdistrictsPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">SubdistrictsPage</Text>
      </Stack>
    </Container>
  );
};

SubdistrictsPage.getLayout = getDocsLayout;

export default SubdistrictsPage;
