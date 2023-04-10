import { memo } from "react";

import type { NextPageWithLayout } from "next";

import { ActionIcon, Anchor, Container, Group, Stack, Table, Text } from "@mantine/core";

import { IconBrandGithub } from "@tabler/icons-react";

import { getDocsLayout } from "~/components/layouts";

const AnchorDynamicEndpoint = memo(
  (props: { pathname: string; params?: { [key: string]: string }; queries?: { [key: string]: string } }) => {
    const base = "https://regions-of-indonesia.deno.dev";

    let pathname = props.pathname;

    if (props.params) {
      for (const [key, value] of Object.entries(props.params)) {
        pathname = pathname.replace(new RegExp(`:${key}`, "g"), value);
      }
    }

    if (props.queries) {
      const sp = new URLSearchParams();
      for (const [key, value] of Object.entries(props.queries)) {
        sp.append(key, value);
      }
      pathname = `${pathname}?${sp}`;
    }

    const href = `${base}${pathname}`;

    return (
      <Anchor href={href} target="_blank" sx={{ fontFamily: "monospace" }}>
        {props.pathname}
      </Anchor>
    );
  }
);

const Endpoints = memo(() => {
  return (
    <Table>
      <thead>
        <tr>
          <th>pathname</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <AnchorDynamicEndpoint pathname="/provinces" />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorDynamicEndpoint pathname="/province/:code" params={{ code: "11" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorDynamicEndpoint pathname="/districts/:province-code" params={{ "province-code": "11" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorDynamicEndpoint pathname="/district/:code" params={{ code: "11.01" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorDynamicEndpoint pathname="/subdistricts/:district-code" params={{ "district-code": "11.01" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorDynamicEndpoint pathname="/subdistrict/:code" params={{ code: "11.01.01" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorDynamicEndpoint pathname="/villages/:subdistrict-code" params={{ "subdistrict-code": "11.01.01" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorDynamicEndpoint pathname="/village/:code" params={{ code: "11.01.01.2001" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorDynamicEndpoint pathname="/region/:code" queries={{ code: "11" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorDynamicEndpoint pathname="/search" queries={{ name: "a" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorDynamicEndpoint pathname="/search/provinces" queries={{ name: "a" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorDynamicEndpoint pathname="/search/districts" queries={{ name: "a" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorDynamicEndpoint pathname="/search/subdistricts" queries={{ name: "a" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorDynamicEndpoint pathname="/search/villages" queries={{ name: "a" }} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
});

const DynamicAPIPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Dynamic API</Text>

        <Group>
          <ActionIcon component="a" href="https://github.com/regions-of-indonesia/api" target="_blank">
            <IconBrandGithub />
          </ActionIcon>
        </Group>

        <Endpoints />
      </Stack>
    </Container>
  );
};

DynamicAPIPage.getLayout = getDocsLayout;

export default DynamicAPIPage;
