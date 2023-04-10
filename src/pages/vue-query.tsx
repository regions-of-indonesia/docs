import { memo } from "react";

import type { NextPageWithLayout } from "next";

import { ActionIcon, Container, Group, Stack, Text } from "@mantine/core";
import { Prism } from "@mantine/prism";

import { IconBrandGithub, IconBrandNpm } from "@tabler/icons-react";

import { createPackageComponent } from "~/components/core";
import { getDocsLayout } from "~/components/layouts";

const { NPMBadgesGroup, PackageInstallationPrism } = createPackageComponent("@regions-of-indonesia/vue-query");

const PrismUsage = memo(() => {
  const text = `
import { createVueQuery } from "@regions-of-indonesia/vue-query";

import client from "path/to/regions-of-indonesia-client";

const {
  createProvinces,
  createProvince,
  createDistricts,
  createDistrict,
  createSubdistricts,
  createSubdistrict,
  createVillages,
  createVillage,
  createSearch,
  createSearchProvinces,
  createSearchDistricts,
  createSearchSubdistricts,
  createSearchVillages,
} = createVueQuery(client);
`;

  return <Prism language="tsx">{text}</Prism>;
});

const VueQueryPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Regions of Indonesia vue-query</Text>

        <Group>
          <ActionIcon component="a" href="https://github.com/regions-of-indonesia/vue-query" target="_blank">
            <IconBrandGithub />
          </ActionIcon>

          <ActionIcon component="a" href="https://www.npmjs.com/package/@regions-of-indonesia/vue-query" target="_blank">
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

VueQueryPage.getLayout = getDocsLayout;

export default VueQueryPage;
