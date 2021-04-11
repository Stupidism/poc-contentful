import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import JsonView from 'react-json-view-ssr';
import { GetStaticPaths, GetStaticProps } from 'next';

import {
  contentfulClient,
  IArticleFields,
} from '@poc-contentful/contentful';

import { Markdown } from '../components/Markdown';
import { ContentfulRichText } from '../components/ContentfulRichText';

const ArticlePageWrapper = styled.div`
  .article-box {
    border: 1px solid black;
    margin: 20px;
  }

  .two-column-wrapper {
    display: flex;

    & > div {
      width: 50%;
      flex: 1;

      img {
        width: 80%;
      }
    }
  }
`;

export interface HookResponse {
  data?: unknown;
}

export function ArticleDetailPage({ article }) {
  return (
    <ArticlePageWrapper>
      <p>
        <Link href="/">Home</Link> - Article
      </p>
      <h1>Title: {article.fields.title}</h1>

      <br />
      <div className="two-column-wrapper">
        <div>
          <h3>Render with marksy</h3>

          <div className="article-box">
            <Markdown markdown={article.fields.markdown} />
          </div>
        </div>
        <div>
          <h3>Render with contentful rich text</h3>
          <div className="article-box">
            <ContentfulRichText content={article.fields.content} />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <h3>JSON structure</h3>
      <div suppressHydrationWarning>
        {process.browser && <JsonView src={article} enableClipboard={false} />}
      </div>
    </ArticlePageWrapper>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const articleEntries = await contentfulClient.getEntries<IArticleFields>({
    content_type: 'article',
  });

  return {
    paths: articleEntries.items.map((item) => ({
      params: {
        slug: item.fields.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await contentfulClient.getEntries<IArticleFields>({
    content_type: 'article',
    'fields.slug[match]': params.slug,
  });

  return {
    props: {
      article: res.items[0],
    },
  };
};

export default ArticleDetailPage;
