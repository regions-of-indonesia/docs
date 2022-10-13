import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Stack, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const SearchPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Search</Text>
      </Stack>
    </Container>
  );
};

SearchPage.getLayout = getDocsLayout;

export default SearchPage;
