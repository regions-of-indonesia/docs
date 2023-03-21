import { memo } from "react";

import type { NextPageWithLayout } from "next";

import { Container, Stack, Text } from "@mantine/core";
import { Prism } from "@mantine/prism";

import { createPackageComponent } from "~/components/core";
import { getDocsLayout } from "~/components/layouts";

const { NPMBadgesGroup, PackageInstallationPrism } = createPackageComponent("@regions-of-indonesia/localforage");

const PrismUsage = memo(() => {
  const text = `import { RegionsOfIndonesiaClient, log, cache } from "@regions-of-indonesia/client";
import { createLocalForageDriver } from "@regions-of-indonesia/localforage";

const driver = createLocalForageDriver();

const client = new RegionsOfIndonesiaClient({
  middlewares: [log(), cache({ driver })],
});

async function getAllProvinces() {
  return await client.province.find();
};

async function getProvinceByCode(code) {
  return await client.province.findByCode(code);
};
`;

  return <Prism language="tsx">{text}</Prism>;
});

const LocalForagePage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Regions of Indonesia localforage</Text>

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

LocalForagePage.getLayout = getDocsLayout;

export default LocalForagePage;
