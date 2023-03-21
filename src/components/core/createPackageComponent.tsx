import { memo, useCallback, useEffect, useState } from "react";

import { Group } from "@mantine/core";
import type { GroupProps } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Prism } from "@mantine/prism";
import type { PrismProps } from "@mantine/prism";

type PackageManager = "npm" | "yarn" | "pnpm";
const PACKAGEMANAGERS: PackageManager[] = ["npm", "yarn", "pnpm"];
const isPackageManager = (value: unknown): value is PackageManager => PACKAGEMANAGERS.includes(String(value) as any);
const usePackageManager = () => {
  const [value, setValue] = useLocalStorage<PackageManager>({ key: "regions-of-indonesia-package-manager", defaultValue: "npm" }),
    handleSetValue = useCallback((value: string) => {
      if (isPackageManager(value)) setValue(value);
    }, []);

  return [value, handleSetValue] as const;
};

const createPackageComponent = (name: string) => {
  const src = {
    npm: {
      version: `https://badgen.net/npm/v/${name}`,
      downloadtotal: `https://badgen.net/npm/dt/${name}`,
      license: `https://badgen.net/npm/license/${name}`,
    },
    bundlephobia: {
      min: `https://badgen.net/bundlephobia/min/${name}`,
      minzip: `https://badgen.net/bundlephobia/minzip/${name}`,
    },
  };

  const title = {
    npm: {
      version: `version for ${name}`,
      downloadtotal: `total downloads for ${name}`,
      license: `license for ${name}`,
    },
    bundlephobia: {
      min: `minified size for ${name}`,
      minzip: `minified + gzip size for ${name}`,
    },
  };

  const code = {
    npm: `npm install ${name}`,
    yarn: `yarn add ${name}`,
    pnpm: `pnpm add ${name}`,
  };

  return {
    NPMBadgesGroup: memo((props: Partial<GroupProps>) => {
      const [isClient, setIsClient] = useState<boolean>(false);

      useEffect(() => {
        setIsClient(true);
      }, []);

      return (
        <Group {...props}>
          {isClient ? (
            <>
              <img src={src.npm.version} title={title.npm.version} />
              <img src={src.npm.downloadtotal} title={title.npm.downloadtotal} />
              <img src={src.npm.license} title={title.npm.license} />
              <img src={src.bundlephobia.min} title={title.bundlephobia.min} />
              <img src={src.bundlephobia.minzip} title={title.bundlephobia.minzip} />
            </>
          ) : null}
        </Group>
      );
    }),
    PackageInstallationPrism: memo((props: Partial<PrismProps>) => {
      const [value, setValue] = usePackageManager();

      return (
        <Prism.Tabs value={value} onTabChange={setValue}>
          <Prism.TabsList>
            <Prism.Tab value="npm">npm</Prism.Tab>
            <Prism.Tab value="yarn">yarn</Prism.Tab>
            <Prism.Tab value="pnpm">pnpm</Prism.Tab>
          </Prism.TabsList>

          <Prism.Panel language="bash" value="npm">
            {code.npm}
          </Prism.Panel>
          <Prism.Panel language="bash" value="yarn">
            {code.yarn}
          </Prism.Panel>
          <Prism.Panel language="bash" value="pnpm">
            {code.pnpm}
          </Prism.Panel>
        </Prism.Tabs>
      );
    }),
  };
};

export { createPackageComponent };
