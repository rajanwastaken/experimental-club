import Head from 'next/head'
import Image from 'next/image'
import { Heading, Link } from '@chakra-ui/layout';
import Hero from './components/Hero';
import Features from './components/Features';
import More from './components/More';
import Overhead from './components/Overhead';
import { Flex, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Minds On | A Place To Grow</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" /> 
      </Head>

      <main>
      <Overhead/>
          <Hero/>
          <Stack gridTemplateColumns={{ md: "repeat(2,3fr)" }}>
          <Features/><Features/>
          </Stack>

      </main>

    </div>
  )
}
