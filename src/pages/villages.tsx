import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Stack, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const VillagesPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Villages</Text>
      </Stack>
    </Container>
  );
};

VillagesPage.getLayout = getDocsLayout;

export default VillagesPage;
