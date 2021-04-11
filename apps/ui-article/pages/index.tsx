import React from 'react';
import styled from 'styled-components';
import { useContentful } from 'react-contentful';
import Link from 'next/link';
import { IArticle, IArticleFields } from '@poc-contentful/contentful';
import { contentfulClient } from '@poc-contentful/contentful';

const HomePage = styled.div`
  .article-item {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 30px;
  }
`;

export function Index({ articles }) {
  return (
    <HomePage>
      <h1>article list</h1>
      <ul>
        {articles.map(({ fields }) => (
          <li className="article-item" key={fields.slug}>
            <Link href={`/${fields.slug}`}>{fields.title}</Link>
            --- {fields.author.fields.name}
          </li>
        ))}
      </ul>
    </HomePage>
  );
}

export async function getStaticProps() {
  const res = await contentfulClient.getEntries<IArticleFields>({
    content_type: 'article',
  });

  return {
    props: {
      articles: res.items,
    },
  };
}

export default Index;
