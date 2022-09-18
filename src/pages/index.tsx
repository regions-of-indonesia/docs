import {} from "react";

import { Container, Notification, Stack, Title } from "@mantine/core";

function IndexPage() {
  return (
    <Container size="xl">
      <Stack spacing="xl">
        <Title>Regions of Indonesia</Title>

        <Notification title="Under Development" my="xl" color="yellow" disallowClose>
          Documented Soon
        </Notification>
      </Stack>
    </Container>
  );
}

export default IndexPage;
