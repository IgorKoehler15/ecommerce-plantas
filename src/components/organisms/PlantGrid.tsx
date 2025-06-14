import React from 'react';
import { useMediaQuery } from '@mui/material';
import { PlantCard } from '../molecules/PlantCard';
import { Plant } from '../../types/Plant';
import styles from './PlantGrid.module.css';

interface PlantGridProps {
  plants: Plant[];
  onBuy?: (id: number) => void;
}

export const PlantGrid: React.FC<PlantGridProps> = ({ plants, onBuy }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(max-width: 900px)');

  const getColumns = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const columns = getColumns();

  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onBuy={onBuy} />
      ))}
    </div>
  );
};
