/// <reference types="vite/client" />

declare module '*.md' {
  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
  import React from 'react';
  const MdContent: React.VFC<{
    previewer: (props: {
      code: string;
      language: string;
      title?: string;
      dependencies: Record<
        string,
        {
          type: string;
          value: string;
          css: boolean;
        }
      >;
    }) => React.ReactNode;
  }>;
  const MdDemos: { Component: React.VFC; title?: string; id: string }[];

  // Modify below per your usage
  export { MdContent, MdDemos };
}

// some modules with missing type definitions
declare module 'execa';
declare module 'hash-sum';
declare module 'clean-css';
declare module 'release-it';
declare module 'conventional-changelog';
declare module 'vite-plugin-markdown';
