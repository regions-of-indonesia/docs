import { forwardRef } from "react";

import { useRouter } from "next/router";
import NextLink from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";

import { NavLink as MantineNavLink } from "@mantine/core";
import type { NavLinkProps as MantineNavLinkProps } from "@mantine/core";

type NavLinkProps = MantineNavLinkProps & NextLinkProps & { caseSensitive?: boolean };

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => {
  const { href, as, replace, scroll, shallow, passHref = true, locale, prefetch, legacyBehavior, caseSensitive, ...rest } = props;

  const router = useRouter();

  let locationPathname = router.asPath;
  let toPathname = href.toString();
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  const active = locationPathname === toPathname;

  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      locale={locale}
      prefetch={prefetch}
      legacyBehavior={legacyBehavior}
    >
      <MantineNavLink ref={ref} component="a" active={active} {...rest} />
    </NextLink>
  );
});

export type { NavLinkProps };
export default NavLink;
