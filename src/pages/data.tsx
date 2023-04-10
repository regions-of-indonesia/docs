import { memo } from "react";

import type { NextPageWithLayout } from "next";

import { ActionIcon, Container, Group, Stack, Text } from "@mantine/core";
import { Prism } from "@mantine/prism";

import { IconBrandGithub, IconBrandNpm } from "@tabler/icons-react";

import { createPackageComponent } from "~/components/core";
import { getDocsLayout } from "~/components/layouts";

const { NPMBadgesGroup, PackageInstallationPrism } = createPackageComponent("@regions-of-indonesia/data");

const PrismUsage = memo(() => {
  const text = `
import { PROVINCE, DISTRICT, SUBDISTRICT, VILLAGE } from "@regions-of-indonesia/data";

console.log(PROVINCE);
/**
 * {
 *   "11": "ACEH",
 *   "12": "SUMATERA UTARA",
 *   "13": "SUMATERA BARAT",
 *   ...
 * }
 */

/**
 * PROVINCE is {[key: string]: string}
 * DISTRICT is {[key: string]: string}
 * SUBDISTRICT is {[key: string]: string}
 * VILLAGE is {[key: string]: string}
 *
 * type {[key: string]: string} means, key is region code and value is region name
 */
`;

  return <Prism language="tsx">{text}</Prism>;
});

const DataPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Regions of Indonesia data</Text>

        <Group>
          <ActionIcon component="a" href="https://github.com/regions-of-indonesia/data" target="_blank">
            <IconBrandGithub />
          </ActionIcon>

          <ActionIcon component="a" href="https://www.npmjs.com/package/@regions-of-indonesia/data" target="_blank">
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
            <Text>Usage</Text>
            <PrismUsage />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

DataPage.getLayout = getDocsLayout;

export default DataPage;
