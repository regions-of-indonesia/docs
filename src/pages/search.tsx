import {} from "react";

import type { NextPageWithLayout } from "next";

import { Alert, Container, Stack, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const SearchPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Search</Text>

        <Alert>TODO: Interactive Request</Alert>
      </Stack>
    </Container>
  );
};

SearchPage.getLayout = getDocsLayout;

export default SearchPage;
