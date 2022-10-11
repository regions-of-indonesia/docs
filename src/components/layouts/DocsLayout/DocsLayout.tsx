import { useState } from "react";
import type { PropsWithChildren } from "react";

import type { GetLayout } from "next";
import { useRouter } from "next/router";

import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Group,
  Header,
  MediaQuery,
  Navbar,
  NavLink as MantineNavLink,
  ScrollArea,
  Space,
  Text,
  useMantineColorScheme,
} from "@mantine/core";

import { IconBrandGithub, IconList, IconMoon, IconPackage, IconServer, IconSun } from "@tabler/icons";

import { APP } from "~/const/app";

import { NavLink } from "~/components/core";

function useRouteMatches() {
  const router = useRouter();

  function fn(...paths: string[]) {
    return paths.map((path) => router.asPath === path).some(Boolean);
  }

  return fn;
}

function GithubLink() {
  return (
    <ActionIcon component="a" href={APP.link.github}>
      <IconBrandGithub />
    </ActionIcon>
  );
}

function ColorSchemeToggler() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return <ActionIcon onClick={() => toggleColorScheme()}>{colorScheme === "dark" ? <IconSun /> : <IconMoon />}</ActionIcon>;
}

function DocsHeader(props: { opened: boolean; onMenuClick: () => void }) {
  return (
    <Header height={64} p="md">
      <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger opened={props.opened} onClick={props.onMenuClick} size="sm" mr="xl" />
        </MediaQuery>

        <Text>Regions of Indonesia</Text>

        <Box sx={{ flexGrow: 1 }} />

        <Group>
          <GithubLink />

          <ColorSchemeToggler />
        </Group>
      </Box>
    </Header>
  );
}

function DocsNavbarNavLinks() {
  const matches = useRouteMatches();

  return (
    <Box py="xs" px="xs">
      <NavLink href="/" label="Home" />

      <MantineNavLink
        label="API"
        active={matches("/provinces", "/districts", "/subdistricts", "/villages", "/search")}
        childrenOffset={28}
        variant="subtle"
        defaultOpened
      >
        <NavLink href="/provinces" label="Provinces" icon={<IconList />} variant="light" />
        <NavLink href="/districts" label="Districts" icon={<IconList />} variant="light" />
        <NavLink href="/subdistricts" label="Subdistricts" icon={<IconList />} variant="light" />
        <NavLink href="/villages" label="Villages" icon={<IconList />} variant="light" />
        <NavLink href="/search" label="Search" icon={<IconList />} variant="light" />
      </MantineNavLink>

      <MantineNavLink
        label="Packages"
        active={matches("/data", "/client", "/localforage")}
        childrenOffset={28}
        variant="subtle"
        defaultOpened
      >
        <NavLink href="/data" label="Data" icon={<IconPackage />} variant="light" />
        <NavLink href="/client" label="Client" icon={<IconPackage />} variant="light" />
        <NavLink href="/localforage" label="LocalForage" icon={<IconPackage />} variant="light" />
      </MantineNavLink>

      <MantineNavLink label="Service" active={matches("/dynamic-api", "/static-api")} childrenOffset={28} variant="subtle" defaultOpened>
        <NavLink href="/dynamic-api" label="Dynamic API" icon={<IconServer />} variant="light" />
        <NavLink href="/static-api" label="Static API" icon={<IconServer />} variant="light" />
      </MantineNavLink>
    </Box>
  );
}

function DocsNavbar(props: { hidden?: boolean }) {
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={props.hidden} width={{ sm: 280, lg: 320 }}>
      <Navbar.Section grow component={ScrollArea} mx="-xs" py="sm" px="xs">
        <DocsNavbarNavLinks />
      </Navbar.Section>
    </Navbar>
  );
}

type DocsLayoutProps = PropsWithChildren<{}>;

function DocsLayout(props: DocsLayoutProps) {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      header={<DocsHeader opened={opened} onMenuClick={() => setOpened((o) => !o)} />}
      navbar={<DocsNavbar hidden={!opened} />}
    >
      {props.children}
    </AppShell>
  );
}

const getDocsLayout: GetLayout = (page) => {
  return <DocsLayout>{page}</DocsLayout>;
};

export type { DocsLayoutProps };
export { getDocsLayout };
export default DocsLayout;
