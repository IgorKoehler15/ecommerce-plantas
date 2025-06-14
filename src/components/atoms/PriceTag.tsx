import React from 'react';

type PriceTagProps = {
  value: number;
};

export const PriceTag: React.FC<PriceTagProps> = ({ value }) => {
  const formatted = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return <span>{formatted}</span>;
};
