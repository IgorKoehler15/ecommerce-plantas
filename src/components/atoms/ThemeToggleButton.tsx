import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeContext } from '../../context/ThemeContext';

export const ThemeToggleButton: React.FC = () => {
  const { toggleTheme, isDarkMode } = useThemeContext();

  return (
    <Tooltip title="Alterar tema">
      <IconButton onClick={toggleTheme} color="inherit">
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
};
