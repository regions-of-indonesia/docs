import { memo } from "react";

import type { NextPageWithLayout } from "next";

import { Container, Stack, Text } from "@mantine/core";
import { Prism } from "@mantine/prism";

import { createPackageComponent } from "~/components/core";
import { getDocsLayout } from "~/components/layouts";

const { NPMBadgesGroup, PackageInstallationPrism } = createPackageComponent("@regions-of-indonesia/vue-query");

const PrismUsage = memo(() => {
  const text = `import { createVueQuery } from "@regions-of-indonesia/vue-query";

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
} = createVueQuery(client);
`;

  return <Prism language="tsx">{text}</Prism>;
});

const VueQueryPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Regions of Indonesia vue-query</Text>

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

VueQueryPage.getLayout = getDocsLayout;

export default VueQueryPage;
