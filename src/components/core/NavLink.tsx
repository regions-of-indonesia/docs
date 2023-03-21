import { forwardRef } from "react";

import { useRouter } from "next/router";
import NextLink from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";

import { NavLink as MantineNavLink } from "@mantine/core";
import type { NavLinkProps as MantineNavLinkProps } from "@mantine/core";

type NavLinkProps = MantineNavLinkProps & NextLinkProps;

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => {
  const { href, as, replace, scroll, shallow, passHref = true, locale, prefetch, legacyBehavior, ...rest } = props,
    router = useRouter();

  return (
    <MantineNavLink
      ref={ref}
      component={NextLink}
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      locale={locale}
      prefetch={prefetch}
      legacyBehavior={legacyBehavior}
      active={router.asPath === href.toString()}
      {...rest}
    />
  );
});

export type { NavLinkProps };
export { NavLink };
