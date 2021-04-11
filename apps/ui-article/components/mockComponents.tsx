import React from 'react';
import JsonView from 'react-json-view-ssr';
import { isEmpty } from 'lodash';

const mockNames = ['CtaWidget1', 'CtaWidget2', 'CtaWidget3'] as const;

export const mockComponents = mockNames.reduce(
  (components, name) => ({
    ...components,
    [name]: ({ children, ...props }) => (
      <div style={{ margin: 20, border: '1px solid gray', padding: 20 }}>
        <div>Component Name: {name}</div>
        <div>
          Props: <JsonView src={props} />
        </div>
        <div>Children: {isEmpty(children) ? '[Not provided]' : children}</div>
      </div>
    ),
  }),
  {}
) as Record<typeof mockNames[number], React.FC>;
