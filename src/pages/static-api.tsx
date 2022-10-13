import { memo } from "react";

import type { NextPageWithLayout } from "next";

import { Anchor, Container, Stack, Table, Text } from "@mantine/core";

import { getDocsLayout } from "~/components/layouts";

const AnchorEndpoint = memo((props: { pathname: string; params?: { [key: string]: string }; queries?: { [key: string]: string } }) => {
  const base = "https://regions-of-indonesia.github.io/static-api";

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

  const href = `${base}${pathname}.json`;

  return (
    <Anchor href={href} target="_blank" sx={{ fontFamily: "monospace" }}>
      {`${props.pathname}.json`}
    </Anchor>
  );
});

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
            <AnchorEndpoint pathname="/provinces" />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorEndpoint pathname="/province/:code" params={{ code: "11" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorEndpoint pathname="/districts/:province-code" params={{ "province-code": "11" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorEndpoint pathname="/district/:code" params={{ code: "11.01" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorEndpoint pathname="/subdistricts/:district-code" params={{ "district-code": "11.01" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorEndpoint pathname="/subdistrict/:code" params={{ code: "11.01.01" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorEndpoint pathname="/villages/:subdistrict-code" params={{ "subdistrict-code": "11.01.01" }} />
          </td>
        </tr>

        <tr>
          <td>
            <AnchorEndpoint pathname="/village/:code" params={{ code: "11.01.01.2001" }} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
});

const StaticAPIPage: NextPageWithLayout = () => {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Text size="xl">Static API</Text>

        <Endpoints />
      </Stack>
    </Container>
  );
};

StaticAPIPage.getLayout = getDocsLayout;

export default StaticAPIPage;
