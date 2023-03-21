import { memo } from "react";

import type { NextPageWithLayout } from "next";

import { Container, Stack, Text } from "@mantine/core";
import { Prism } from "@mantine/prism";

import { createPackageComponent } from "~/components/core";
import { getDocsLayout } from "~/components/layouts";

const { NPMBadgesGroup, PackageInstallationPrism } = createPackageComponent("@regions-of-indonesia/client");

const PrismTypes = memo(() => {
  const text = `type CodeName = {
  code: string;
  name: string;
};

type SearchResult = {
  provinces: CodeName[];
  districts: CodeName[];
  subdistricts: CodeName[];
  villages: CodeName[];
};
`;

  return <Prism language="typescript">{text}</Prism>;
});

const PrismUsage = memo(() => {
  const text = `import { RegionsOfIndonesiaClient, log, cache } from "@regions-of-indonesia/client";
  
const client = new RegionsOfIndonesiaClient({
  middlewared: [log(), cache()],
  static: true,
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

const ClientPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Regions of Indonesia client</Text>

        <NPMBadgesGroup />

        <Stack spacing="xl">
          <Stack spacing="xs">
            <Text>Installation</Text>
            <PackageInstallationPrism />
          </Stack>

          <Stack spacing="xs">
            <Text>Types</Text>
            <PrismTypes />
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

ClientPage.getLayout = getDocsLayout;

export default ClientPage;
