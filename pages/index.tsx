import { Heading, Text } from '@components/typography';
import { Box } from '@components/layout';
import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <main>
        <Heading element="h1">This is a heading 1</Heading>
        <Heading element="h2">This is a heading 2</Heading>
        <Heading element="h3">This is a heading 3</Heading>
        <Heading element="h4">This is a heading 4</Heading>
        <Heading element="h5">This is a heading 5</Heading>
        <Heading element="h6">This is a heading 6</Heading>
        <Text
          size="lg"
          tone="primary"
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </Text>
        <Text
          size="lg"
          tone="secondary"
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </Text>
        <Box
          backgroundColor="primary400"
          padding="3"
        >
          primary400
        </Box>
        <Box
          backgroundColor="primary300"
          padding="3"
        >
          primary300
        </Box>
        <Box
          backgroundColor="primary200"
          padding="3"
        >
          primary200
        </Box>
        <Box
          backgroundColor="primary100"
          padding="3"
        >
          primary100
        </Box>
        <Box
          backgroundColor="primary50"
          padding="3"
        >
          primary50
        </Box>
        <Box
          backgroundColor="secondary400"
          padding="3"
        >
          secondary400
        </Box>
        <Box
          backgroundColor="secondary300"
          padding="3"
        >
          secondary300
        </Box>
        <Box
          backgroundColor="secondary200"
          padding="3"
        >
          secondary200
        </Box>
        <Box
          backgroundColor="secondary100"
          padding="3"
        >
          secondary100
        </Box>
        <Box
          backgroundColor="secondary50"
          padding="3"
        >
          secondary50
        </Box>
        <Box
          backgroundColor="base900"
          padding="3"
        >
          base900
        </Box>
        <Box
          backgroundColor="base700"
          padding="3"
        >
          base700
        </Box>
        <Box
          backgroundColor="base500"
          padding="3"
        >
          base500
        </Box>
        <Box
          backgroundColor="base300"
          padding="3"
        >
          base300
        </Box>
        <Box
          backgroundColor="base100"
          padding="3"
        >
          base100
        </Box>
        <Box
          backgroundColor="success500"
          padding="3"
        >
          success500
        </Box>
        <Box
          backgroundColor="success400"
          padding="3"
        >
          success400
        </Box>
        <Box
          backgroundColor="success300"
          padding="3"
        >
          success300
        </Box>
        <Box
          backgroundColor="success200"
          padding="3"
        >
          success200
        </Box>
        <Box
          backgroundColor="success100"
          padding="3"
        >
          success100
        </Box>
        <Box
          backgroundColor="warning500"
          padding="3"
        >
          warning500
        </Box>
        <Box
          backgroundColor="warning400"
          padding="3"
        >
          warning400
        </Box>
        <Box
          backgroundColor="warning300"
          padding="3"
        >
          warning300
        </Box>
        <Box
          backgroundColor="warning200"
          padding="3"
        >
          warning200
        </Box>
        <Box
          backgroundColor="warning100"
          padding="3"
        >
          warning100
        </Box>
        <Box
          backgroundColor="error500"
          padding="3"
        >
          error500
        </Box>
        <Box
          backgroundColor="error400"
          padding="3"
        >
          error400
        </Box>
        <Box
          backgroundColor="error300"
          padding="3"
        >
          error300
        </Box>
        <Box
          backgroundColor="error200"
          padding="3"
        >
          error200
        </Box>
        <Box
          backgroundColor="error100"
          padding="3"
        >
          error100
        </Box>
        <Box
          backgroundColor="info500"
          padding="3"
        >
          info500
        </Box>
        <Box
          backgroundColor="info400"
          padding="3"
        >
          info400
        </Box>
        <Box
          backgroundColor="info300"
          padding="3"
        >
          info300
        </Box>
        <Box
          backgroundColor="info200"
          padding="3"
        >
          info200
        </Box>
        <Box
          backgroundColor="info100"
          padding="3"
        >
          info100
        </Box>
      </main>
    </>
  );
}
