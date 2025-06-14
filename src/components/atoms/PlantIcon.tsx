import React from 'react';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

type PlantIconProps = {
  size: 'sm' | 'md' | 'lg';
};

const sizeMap = {
  sm: 20,
  md: 32,
  lg: 48,
};

export const PlantIcon: React.FC<PlantIconProps> = ({ size }) => {
  return <LocalFloristIcon style={{ fontSize: sizeMap[size] }} />;
};
