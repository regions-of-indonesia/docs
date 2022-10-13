import { memo } from "react";

import type { NextPageWithLayout } from "next";

import { Container, Group, Stack, Text } from "@mantine/core";
import { Prism } from "@mantine/prism";

import { getDocsLayout } from "~/components/layouts";

const Badges = memo(() => {
  const name = "@regions-of-indonesia/localforage";

  return (
    <Group>
      <img src={`https://badgen.net/npm/v/${name}`} title={`version for ${name}`} />
      <img src={`https://badgen.net/npm/dt/${name}`} title={`total downloads for ${name}`} />
      <img src={`https://badgen.net/npm/license/${name}`} title={`license for ${name}`} />
      <img src={`https://badgen.net/bundlephobia/min/${name}`} title={`minified size for ${name}`} />
      <img src={`https://badgen.net/bundlephobia/minzip/${name}`} title={`minified + gzip size for ${name}`} />
    </Group>
  );
});

const PrismInstallation = memo(() => {
  const text = `npm install @regions-of-indonesia/client @regions-of-indonesia/localforage`;

  return <Prism language="bash">{text}</Prism>;
});

const PrismUsage = memo(() => {
  const text = `import { RegionsOfIndonesiaClient, log, cache } from "@regions-of-indonesia/client";
import { createLocalForageDriver } from "@regions-of-indonesia/localforage";

const driver = createLocalForageDriver();

const client = new RegionsOfIndonesiaClient({
  middlewares: [log(), cache({ driver })],
});
`;

  return <Prism language="javascript">{text}</Prism>;
});

const LocalForagePage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Regions of Indonesia localforage</Text>

        <Badges />

        <Stack spacing="xl">
          <Stack spacing="xs">
            <Text>Installation</Text>
            <PrismInstallation />
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
