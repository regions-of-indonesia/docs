import {} from "react";

import type { NextPageWithLayout } from "next";

import { Container, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const SearchPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Text>SearchPage</Text>
    </Container>
  );
};

SearchPage.getLayout = getDocsLayout;

export default SearchPage;
