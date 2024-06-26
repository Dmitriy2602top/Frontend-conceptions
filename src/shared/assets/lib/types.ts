import { JSXElementConstructor } from "react";

export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

export type PropsOf<TTag extends ReactTag> = TTag extends React.ElementType
  ? React.ComponentProps<TTag>
  : never;
