import { memo } from "react";

import type { NextPageWithLayout } from "next";

import { ActionIcon, Container, Group, Stack, Text } from "@mantine/core";
import { Prism } from "@mantine/prism";

import { IconBrandGithub, IconBrandNpm } from "@tabler/icons-react";

import { createPackageComponent } from "~/components/core";
import { getDocsLayout } from "~/components/layouts";

const { NPMBadgesGroup, PackageInstallationPrism } = createPackageComponent("@regions-of-indonesia/localforage");

const PrismTypes = memo(() => {
  const text = `
type Options = {
  name?: string;
  ttl?: number;
};
`;

  return <Prism language="typescript">{text}</Prism>;
});

const PrismUsage = memo(() => {
  const text = `
import { create } from "@regions-of-indonesia/client";
import { createLocalForageDriver } from "@regions-of-indonesia/localforage";

const driver = createLocalForageDriver(/* options */);

const client = create({
  middlewares: [cache({ driver })],
});
`;

  return <Prism language="tsx">{text}</Prism>;
});

const LocalForagePage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Regions of Indonesia localforage</Text>

        <Group>
          <ActionIcon component="a" href="https://github.com/regions-of-indonesia/localforage" target="_blank">
            <IconBrandGithub />
          </ActionIcon>

          <ActionIcon component="a" href="https://www.npmjs.com/package/@regions-of-indonesia/localforage" target="_blank">
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

LocalForagePage.getLayout = getDocsLayout;

export default LocalForagePage;
