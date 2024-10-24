// pages/services/[service].js

import { useState } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextSeo } from 'next-seo';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const ServiceHero = styled('div')({
  padding: '40px 0',
  textAlign: 'center',
  backgroundSize: 'cover',
});

export default function ServicePage({ service, content }) {
  const { title, description, heroImage } = service;

  return (
    <>
      {/* SEO */}
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          images: [{ url: heroImage }],
        }}
      />

      <ServiceHero style={{ backgroundImage: `url(${heroImage})` }}>
        <Container>
          <Typography variant="h1" component="h1">
            {title}
          </Typography>
        </Container>
      </ServiceHero>

      <Container sx={{ py: 4 }}>
        <MDXRemote {...content} />
      </Container>
    </>
  );
}

// Fetch content based on slug
export async function getStaticProps({ params }) {
  const { service } = params;
  const filePath = path.join(process.cwd(), 'content/services', `${service}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      service: data,
      content: mdxSource,
    },
  };
}

// Generate paths
export async function getStaticPaths() {
  const directory = path.join(process.cwd(), 'content/services');
  const filenames = fs.readdirSync(directory);

  const paths = filenames.map((filename) => ({
    params: {
      service: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
