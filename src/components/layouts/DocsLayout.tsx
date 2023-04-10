import { useCallback, useEffect } from "react";
import type { PropsWithChildren } from "react";

import type { GetLayout } from "next";
import { useRouter } from "next/router";

import { ActionIcon, Anchor, Badge, Box, Drawer, Group, NavLink as MantineNavLink, Tooltip, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { IconBrandGithub, IconList, IconMenu2, IconMoon, IconPackage, IconServer, IconSun } from "@tabler/icons-react";

import { APP } from "~/const/app";

import { NavLink } from "~/components/core";

function useRouteMatches() {
  const router = useRouter();

  return useCallback((...paths: string[]) => paths.map((path) => router.asPath === path).some(Boolean), [router.asPath]);
}

function GithubLink() {
  return (
    <Tooltip label="Github" withinPortal>
      <ActionIcon component="a" href={APP.link.github} aria-label="Github">
        <IconBrandGithub />
      </ActionIcon>
    </Tooltip>
  );
}

function ColorSchemeToggler() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Tooltip label="Color scheme" withinPortal>
      <ActionIcon onClick={() => toggleColorScheme()} aria-label="Color scheme">
        {colorScheme === "dark" ? <IconSun /> : <IconMoon />}
      </ActionIcon>
    </Tooltip>
  );
}

function DocsNavbarNavLinks() {
  const matches = useRouteMatches();

  return (
    <Box w="100%" h="100%">
      <NavLink href="/" label="Home" />

      {/* <NavLink href="/examples" label="Examples" /> */}

      <MantineNavLink
        label="API"
        active={matches("/provinces", "/districts", "/subdistricts", "/villages", "/search")}
        childrenOffset={16}
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
        childrenOffset={16}
        variant="subtle"
        defaultOpened
      >
        <NavLink href="/data" label="Data" icon={<IconPackage />} variant="light" />
        <NavLink href="/client" label="Client" icon={<IconPackage />} variant="light" />
        <NavLink href="/localforage" label="LocalForage" icon={<IconPackage />} variant="light" />
        <NavLink href="/swr" label="SWR" icon={<IconPackage />} variant="light" />
        <NavLink href="/react-query" label="React Query" icon={<IconPackage />} variant="light" />
        <NavLink href="/solid-query" label="Solid Query" icon={<IconPackage />} variant="light" />
        <NavLink href="/svelte-query" label="Svelte Query" icon={<IconPackage />} variant="light" />
        <NavLink href="/vue-query" label="Vue Query" icon={<IconPackage />} variant="light" />
      </MantineNavLink>

      <MantineNavLink label="Service" active={matches("/dynamic-api", "/static-api")} childrenOffset={16} variant="subtle" defaultOpened>
        <NavLink href="/dynamic-api" label="Dynamic API" icon={<IconServer />} variant="light" />
        <NavLink href="/static-api" label="Static API" icon={<IconServer />} variant="light" />
      </MantineNavLink>
    </Box>
  );
}

const HEADERHEIGHT = 56;
const NAVBARWIDTH = 280;

function DocsLayout(props: PropsWithChildren) {
  const [drawer, handleDrawer] = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", handleDrawer.close);

    return () => {
      router.events.off("routeChangeComplete", handleDrawer.close);
    };
  }, []);

  return (
    <>
      <Box
        pos="fixed"
        top={0}
        left={0}
        w="100%"
        h={HEADERHEIGHT}
        sx={(theme) => ({
          zIndex: 10,
          backgroundColor: theme.fn.rgba(theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white, 0.7),
          borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]}`,
          backdropFilter: "blur(4px)",
        })}
      >
        <Box display="flex" w="100%" h="100%" px="lg" sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Group>
            <ActionIcon
              onClick={handleDrawer.open}
              sx={(theme) => ({
                [theme.fn.largerThan("sm")]: {
                  display: "none",
                },
              })}
            >
              <IconMenu2 />
            </ActionIcon>

            <Anchor href="/" size="xl" variant="text" weight={700}>
              Regions of Indonesia
            </Anchor>

            <Badge variant="outline">Beta</Badge>
          </Group>

          <Group>
            <Badge variant="outline">v4.0.0</Badge>

            <GithubLink />

            <ColorSchemeToggler />
          </Group>
        </Box>
      </Box>

      <Box
        pos="fixed"
        top={HEADERHEIGHT}
        left={0}
        w={NAVBARWIDTH}
        h={`calc(100% - ${HEADERHEIGHT}px)`}
        p="sm"
        sx={(theme) => ({
          zIndex: 10,
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          borderRight: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]}`,
          overflow: "auto",

          display: "block",

          [theme.fn.smallerThan("sm")]: {
            display: "none",
          },
        })}
      >
        <DocsNavbarNavLinks />
      </Box>

      <Box
        pos="relative"
        p="sm"
        sx={(theme) => ({
          left: NAVBARWIDTH,
          width: `calc(100% - ${NAVBARWIDTH}px)`,
          zIndex: 0,

          [theme.fn.smallerThan("sm")]: {
            left: 0,
            width: "100%",
          },
        })}
      >
        <Box sx={{ height: HEADERHEIGHT + 16 }} />
        {props.children}
        <Box sx={{ height: (HEADERHEIGHT + 16) / 2 }} />
      </Box>

      <Drawer opened={drawer} onClose={handleDrawer.close} title="Menu" size={NAVBARWIDTH}>
        <DocsNavbarNavLinks />
      </Drawer>
    </>
  );
}

const getDocsLayout: GetLayout = (page) => <DocsLayout>{page}</DocsLayout>;

export { getDocsLayout };
export { DocsLayout };
