import React from 'react';
import { Plant } from '../../types/Plant';
import { Button } from '../atoms/Button';
import { PriceTag } from '../atoms/PriceTag';
import { PlantIcon } from '../atoms/PlantIcon';
import styles from './PlantCard.module.css';

interface PlantCardProps {
  plant: Plant;
  onBuy?: (id: number) => void;
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant, onBuy }) => {
  const handleBuy = () => {
    if (onBuy) onBuy(plant.id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <PlantIcon size="md" />
      </div>
      <h3 className={styles.name}>{plant.name}</h3>
      <div className={styles.light}>
        Tipo de luz: {plant.light === 'sun' ? 'Sol' : 'Sombra'}
      </div>
      <PriceTag value={plant.price} />
      <Button variant="primary" onClick={handleBuy}>
        Comprar
      </Button>
    </div>
  );
};
