import React from 'react';

export interface SampleComponentProps {
  text: string;
}

export function SampleComponent({ text }: SampleComponentProps) {
  return (
    <h1>{text}</h1>
  );
}