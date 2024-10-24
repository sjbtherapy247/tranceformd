import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export async function getMDXContent(slug, folder) {
  const filePath = path.join(process.cwd(), `content/${folder}`, `${slug}.mdx`);
  const source = fs.readFileSync(filePath);
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, { scope: data });

  return {
    content: mdxSource,
    metadata: data,
  };
}

export function getAllPaths(folder) {
  const directory = path.join(process.cwd(), `content/${folder}`);
  const filenames = fs.readdirSync(directory);

  return filenames.map((filename) => ({
    params: {
      service: filename.replace('.mdx', ''),
    },
  }));
}