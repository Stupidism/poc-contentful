import React from 'react';
import styled from 'styled-components';
import { useContentful } from 'react-contentful';
import Link from 'next/link';
import { IArticle } from '@poc-contentful/contentful';
import { contentfulClient } from '@poc-contentful/contentful';

const HomePage = styled.div`
  .article-item {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 30px;
  }
`;

export function Index() {
  const { data, error, fetched, loading } = useContentful({
    contentType: 'article',
  });

  if (loading) return 'Loading...';
  if (!data) return 'Failed to fetch';
  if (error) return error;

  const articles = (data as any).items as IArticle[];

  return (
    <HomePage>
      <h1>article list</h1>
      <ul>
        {articles.map(({ fields }) => (
          <li className="article-item" key={fields.slug}>
            <Link href={fields.slug}>{fields.title}</Link>
            --- {fields.author.fields.name}
          </li>
        ))}
      </ul>
    </HomePage>
  );
}

export async function getStaticProps(context) {
  await contentfulClient.getEntries({
    content_type: 'article',
  });

  return {
    props: {},
  };
}

export default Index;
