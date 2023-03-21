import { memo } from "react";

import type { NextPageWithLayout } from "next";

import { Container, Stack, Text } from "@mantine/core";
import { Prism } from "@mantine/prism";

import { createPackageComponent } from "~/components/core";
import { getDocsLayout } from "~/components/layouts";

const { NPMBadgesGroup, PackageInstallationPrism } = createPackageComponent("@regions-of-indonesia/react-query");

const PrismUsage = memo(() => {
  const text = `import { createReactQuery } from "@regions-of-indonesia/react-query";

import client from "path/to/regions-of-indonesia-client";

const {
  useProvinces,
  useProvince,
  useDistricts,
  useDistrict,
  useSubdistricts,
  useSubdistrict,
  useVillages,
  useVillage,
  useSearch,
  useSearchProvinces,
  useSearchDistricts,
  useSearchSubdistricts,
  useSearchVillages
} = createReactQuery(client);
`;

  return <Prism language="tsx">{text}</Prism>;
});

const ReactQueryPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Regions of Indonesia react-query</Text>

        <NPMBadgesGroup />

        <Stack spacing="xl">
          <Stack spacing="xs">
            <Text>Installation</Text>
            <PackageInstallationPrism />
          </Stack>

          <Stack spacing="xs">
            <Text>Usage</Text>
            <PrismUsage />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

ReactQueryPage.getLayout = getDocsLayout;

export default ReactQueryPage;
