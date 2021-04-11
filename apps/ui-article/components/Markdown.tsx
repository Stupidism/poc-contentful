import React, { FC, createElement } from 'react';
import marksy from 'marksy-lite';

import { mockComponents } from './mockComponents';

interface MarkdownProps {
  markdown: string;
  context?: Record<string, unknown>;
  components?: Record<string, FC<unknown>>;
}

/**
 * Markdown
 *
 * @param markdown
 * @param context
 * @param components
 * @returns dom tree of markdown
 */
export const Markdown: React.FC<MarkdownProps> = ({
  markdown,
  context,
  components,
}) => {
  if (!markdown) return null;

  const compile = marksy({
    createElement,
    components: {
      ...mockComponents,
    },
  });

  const { tree } = compile(markdown);

  return tree;
};
