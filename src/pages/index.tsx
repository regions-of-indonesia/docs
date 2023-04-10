import type { MouseEvent } from "react";

import type { NextPageWithLayout } from "next";
import { useRouter } from "next/router";

import { Card, Container, Grid, Group, Stack, Text } from "@mantine/core";

import {
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandSolidjs,
  IconBrandSvelte,
  IconBrandVue,
  IconDatabase,
  IconList,
  IconPackage,
  IconServer,
} from "@tabler/icons-react";

import { getDocsLayout } from "~/components/layouts";

const IndexPage: NextPageWithLayout = () => {
  const router = useRouter();

  function handleNavigate(url: string) {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      router.push(url);
    };
  }

  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Stack>
          <Group>
            <IconList />

            <Text size="lg" weight="bold">
              API
            </Text>
          </Group>

          <Grid>
            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/provinces" onClick={handleNavigate("/provinces")}>
                <Group position="apart">
                  <Text>Provinces</Text>

                  <IconList />
                </Group>

                <Text size="sm" color="dimmed">
                  Provinces API
                </Text>
              </Card>
            </Grid.Col>

            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/districts" onClick={handleNavigate("/districts")}>
                <Group position="apart">
                  <Text>Districts</Text>

                  <IconList />
                </Group>

                <Text size="sm" color="dimmed">
                  Districts API
                </Text>
              </Card>
            </Grid.Col>

            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/subdistricts" onClick={handleNavigate("/subdistricts")}>
                <Group position="apart">
                  <Text>Subdistricts</Text>

                  <IconList />
                </Group>

                <Text size="sm" color="dimmed">
                  Subdistricts API
                </Text>
              </Card>
            </Grid.Col>

            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/villages" onClick={handleNavigate("/villages")}>
                <Group position="apart">
                  <Text>Villages</Text>

                  <IconList />
                </Group>

                <Text size="sm" color="dimmed">
                  Villages API
                </Text>
              </Card>
            </Grid.Col>

            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/search" onClick={handleNavigate("/search")}>
                <Group position="apart">
                  <Text>Search</Text>

                  <IconList />
                </Group>

                <Text size="sm" color="dimmed">
                  Search API
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>

        <Stack>
          <Group>
            <IconPackage />

            <Text size="lg" weight="bold">
              Package
            </Text>
          </Group>

          <Grid>
            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/client" onClick={handleNavigate("/client")}>
                <Group position="apart">
                  <Text>Client</Text>

                  <IconBrandJavascript />
                </Group>

                <Text size="sm" color="dimmed">
                  Javascript client
                </Text>
              </Card>
            </Grid.Col>

            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/data" onClick={handleNavigate("/data")}>
                <Group position="apart">
                  <Text>Data</Text>

                  <IconBrandJavascript />
                </Group>

                <Text size="sm" color="dimmed">
                  Key Value object
                </Text>
              </Card>
            </Grid.Col>

            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/localforage" onClick={handleNavigate("/localforage")}>
                <Group position="apart">
                  <Text>LocalForage</Text>

                  <IconBrandJavascript />
                </Group>

                <Text size="sm" color="dimmed">
                  Storage cache driver
                </Text>
              </Card>
            </Grid.Col>

            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/swr" onClick={handleNavigate("/swr")}>
                <Group position="apart">
                  <Text>SWR</Text>

                  <IconBrandReact />
                </Group>

                <Text size="sm" color="dimmed">
                  SWR
                </Text>
              </Card>
            </Grid.Col>

            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/react-query" onClick={handleNavigate("/react-query")}>
                <Group position="apart">
                  <Text>React Query</Text>

                  <IconBrandReact />
                </Group>

                <Text size="sm" color="dimmed">
                  Tanstack React Query
                </Text>
              </Card>
            </Grid.Col>

            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/solid-query" onClick={handleNavigate("/solid-query")}>
                <Group position="apart">
                  <Text>Solid Query</Text>

                  <IconBrandSolidjs />
                </Group>

                <Text size="sm" color="dimmed">
                  Tanstack Solid Query
                </Text>
              </Card>
            </Grid.Col>

            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/vue-query" onClick={handleNavigate("/vue-query")}>
                <Group position="apart">
                  <Text>Vue Query</Text>

                  <IconBrandVue />
                </Group>

                <Text size="sm" color="dimmed">
                  Tanstack Vue Query
                </Text>
              </Card>
            </Grid.Col>

            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/svelte-query" onClick={handleNavigate("/svelte-query")}>
                <Group position="apart">
                  <Text>Svelte Query</Text>

                  <IconBrandSvelte />
                </Group>

                <Text size="sm" color="dimmed">
                  Tanstack Svelte Query
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>

        <Stack>
          <Group>
            <IconServer />

            <Text size="lg" weight="bold">
              Service
            </Text>
          </Group>

          <Grid>
            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/dynamic-api" onClick={handleNavigate("/dynamic-api")}>
                <Group position="apart">
                  <Text>Dynamic API</Text>

                  <IconServer />
                </Group>

                <Text size="sm" color="dimmed">
                  Deno rest API
                </Text>
              </Card>
            </Grid.Col>

            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="/static-api" onClick={handleNavigate("/static-api")}>
                <Group position="apart">
                  <Text>Static API</Text>

                  <IconServer />
                </Group>

                <Text size="sm" color="dimmed">
                  Github static pages
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>

        <Stack>
          <Group>
            <IconDatabase />

            <Text size="lg" weight="bold">
              Data Source
            </Text>
          </Group>

          <Grid>
            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card component="a" withBorder href="https://github.com/cahyadsn/wilayah" target="_blank">
                <Group position="apart">
                  <Text>WILAYAH</Text>

                  <IconBrandGithub />
                </Group>

                <Text size="sm" color="dimmed">
                  cahyadsn
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
};

IndexPage.getLayout = getDocsLayout;

export default IndexPage;
