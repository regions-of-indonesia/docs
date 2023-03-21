import {} from "react";

import type { NextPageWithLayout } from "next";

import { Alert, Container, Stack, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const SubdistrictsPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">SubdistrictsPage</Text>

        <Alert>TODO: Interactive Request</Alert>
      </Stack>
    </Container>
  );
};

SubdistrictsPage.getLayout = getDocsLayout;

export default SubdistrictsPage;
