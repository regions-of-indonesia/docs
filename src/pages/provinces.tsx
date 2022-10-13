import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Stack, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const ProvincesPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Provinces</Text>
      </Stack>
    </Container>
  );
};

ProvincesPage.getLayout = getDocsLayout;

export default ProvincesPage;
