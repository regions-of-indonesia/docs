import { memo } from "react";

import type { NextPageWithLayout } from "next";

import { ActionIcon, Container, Group, Stack, Text } from "@mantine/core";
import { Prism } from "@mantine/prism";

import { IconBrandGithub, IconBrandNpm } from "@tabler/icons-react";

import { createPackageComponent } from "~/components/core";
import { getDocsLayout } from "~/components/layouts";

const { NPMBadgesGroup, PackageInstallationPrism } = createPackageComponent("@regions-of-indonesia/client");

const PrismTypes = memo(() => {
  const text = `
type CodeName = {
  code: string;
  name: string;
};

type RegionResult = {
  province?: CodeName;
  district?: CodeName;
  subdistrict?: CodeName;
  village?: CodeName;
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
  const text = `
import { create } from "@regions-of-indonesia/client";

const client = create(/** options */);

await client.province.find() /** CodeName[] */;
await client.province.find.by("11") /** CodeName */;

await client.district.find("11") /** CodeName[] */;
await client.district.find.by("11.01") /** CodeName */;

await client.subdistrict.find("11.01") /** CodeName[] */;
await client.subdistrict.find.by("11.01.01") /** CodeName */;

await client.village.find("11.01.01") /** CodeName[] */;
await client.village.find.by("11.01.01.2001") /** CodeName */;

await client.region("11") /** RegionResult  */;
await client.region("11.01") /** RegionResult  */;
await client.region("11.01.01") /** RegionResult  */;
await client.region("11.01.01.2001") /** RegionResult  */;

await client.search("name") /** SearchResult */;

await client.search.provinces("name") /** CodeName[] */;
await client.province.search("name") /** CodeName[] */;

await client.search.districts("name") /** CodeName[] */;
await client.district.search("name") /** CodeName[] */;

await client.search.subdistricts("name") /** CodeName[] */;
await client.subdistrict.search("name") /** CodeName[] */;

await client.search.villages("name") /** CodeName[] */;
await client.village.search("name") /** CodeName[] */;
`;

  return <Prism language="tsx">{text}</Prism>;
});

const ClientPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Regions of Indonesia client</Text>

        <Group>
          <ActionIcon component="a" href="https://github.com/regions-of-indonesia/client" target="_blank">
            <IconBrandGithub />
          </ActionIcon>

          <ActionIcon component="a" href="https://www.npmjs.com/package/@regions-of-indonesia/client" target="_blank">
            <IconBrandNpm />
          </ActionIcon>
        </Group>

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
