import { memo } from "react";

import type { NextPageWithLayout } from "next";

import { Container, Group, Stack, Text } from "@mantine/core";
import { Prism } from "@mantine/prism";

import { getDocsLayout } from "~/components/layouts";

const Badges = memo(() => {
  const name = "@regions-of-indonesia/swr";

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
  const text = `npm install @regions-of-indonesia/swr`;

  return <Prism language="bash">{text}</Prism>;
});

const PrismUsage = memo(() => {
  const text = `import { createSWR } from "@regions-of-indonesia/swr";

import client from "path/to/regions-of-indonesia-client";

const {} = createSWR(client)
`;

  return <Prism language="javascript">{text}</Prism>;
});

const SWRPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Regions of Indonesia swr</Text>

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

SWRPage.getLayout = getDocsLayout;

export default SWRPage;
