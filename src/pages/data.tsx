import { memo } from "react";

import type { NextPageWithLayout } from "next";

import { Container, Stack, Text } from "@mantine/core";
import { Prism } from "@mantine/prism";

import { createPackageComponent } from "~/components/core";
import { getDocsLayout } from "~/components/layouts";

const { NPMBadgesGroup, PackageInstallationPrism } = createPackageComponent("@regions-of-indonesia/data");

const PrismUsage = memo(() => {
  const text = `import { PROVINCE, DISTRICT, SUBDISTRICT, VILLAGE } from "@regions-of-indonesia/data";

console.log(PROVINCE);
/**
 * {
 *    "11": "ACEH"
 *    "12": "SUMATERA UTARA",
 *    ...
 * }
*/
`;

  return <Prism language="tsx">{text}</Prism>;
});

const DataPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Regions of Indonesia data</Text>

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
