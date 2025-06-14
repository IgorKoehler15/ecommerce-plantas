import React from 'react';
import { StoreLayout } from '../components/templates/StoreLayout';
import { PlantGrid } from '../components/organisms/PlantGrid';
import { Plant } from '../types/Plant';

const mockPlants: Plant[] = [
  { id: '1', name: 'Suculenta', price: 29.9, light: 'sun' },
  { id: '2', name: 'Samambaia', price: 39.9, light: 'shade' },
  { id: '3', name: 'Zamioculca', price: 49.9, light: 'shade' },
  { id: '4', name: 'Jiboia', price: 24.5, light: 'sun' },
  { id: '5', name: 'Espada de São Jorge', price: 34.0, light: 'sun' },
  { id: '6', name: 'Palmeira Ráfis', price: 59.9, light: 'shade' },
];

export const PlantStore: React.FC = () => {
  return (
    <StoreLayout>
      <PlantGrid plants={mockPlants} onBuy={(id) => alert(`Comprou planta ${id}`)} />
    </StoreLayout>
  );
};
