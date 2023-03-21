import type { NextPageWithLayout } from "next";

import { Container, Stack, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const ExamplesPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Examples</Text>
      </Stack>
    </Container>
  );
};

ExamplesPage.getLayout = getDocsLayout;

export default ExamplesPage;
