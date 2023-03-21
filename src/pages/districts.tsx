import {} from "react";

import type { NextPageWithLayout } from "next";

import { Alert, Container, Stack, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const DistrictsPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Districts</Text>

        <Alert>TODO: Interactive Request</Alert>
      </Stack>
    </Container>
  );
};

DistrictsPage.getLayout = getDocsLayout;

export default DistrictsPage;
