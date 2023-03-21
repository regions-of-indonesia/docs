import {} from "react";

import type { NextPageWithLayout } from "next";

import { Alert, Container, Stack, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const ProvincesPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Provinces</Text>

        <Alert>TODO: Interactive Request</Alert>
      </Stack>
    </Container>
  );
};

ProvincesPage.getLayout = getDocsLayout;

export default ProvincesPage;
