import { memo } from "react";

import type { NextPageWithLayout } from "next";

import { ActionIcon, Container, Group, Stack, Text } from "@mantine/core";
import { Prism } from "@mantine/prism";

import { IconBrandGithub, IconBrandNpm } from "@tabler/icons-react";

import { createPackageComponent } from "~/components/core";
import { getDocsLayout } from "~/components/layouts";

const { NPMBadgesGroup, PackageInstallationPrism } = createPackageComponent("@regions-of-indonesia/swr");

const PrismUsage = memo(() => {
  const text = `
import { createSWR } from "@regions-of-indonesia/swr";

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
  useSearchVillages,
} = createSWR(client);
`;

  return <Prism language="tsx">{text}</Prism>;
});

const SWRPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Regions of Indonesia swr</Text>

        <Group>
          <ActionIcon component="a" href="https://github.com/regions-of-indonesia/swr" target="_blank">
            <IconBrandGithub />
          </ActionIcon>

          <ActionIcon component="a" href="https://www.npmjs.com/package/@regions-of-indonesia/swr" target="_blank">
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

SWRPage.getLayout = getDocsLayout;

export default SWRPage;
