import {} from "react";

import type { NextPageWithLayout } from "next";

import { Alert, Container, Stack, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const VillagesPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Villages</Text>

        <Alert>TODO: Interactive Request</Alert>
      </Stack>
    </Container>
  );
};

VillagesPage.getLayout = getDocsLayout;

export default VillagesPage;
