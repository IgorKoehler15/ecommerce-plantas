import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography, Paper } from '@mui/material';
import { ThemeToggleButton } from '../atoms/ThemeToggleButton';

interface StoreLayoutProps {
  children: React.ReactNode;
}

export const StoreLayout: React.FC<StoreLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            🌱 Garden Store
          </Typography>
          <ThemeToggleButton />
        </Toolbar>
      </AppBar>

      {/* Conteúdo */}
      <Container sx={{ py: 4, flexGrow: 1 }}>
        {children}
      </Container>

      {/* Footer */}
      <Paper
        component="footer"
        elevation={3}
        sx={{
          mt: 'auto',
          py: 2,
          px: 2,
          textAlign: 'center',
          backgroundColor: 'background.paper',
        }}
      >
        <Typography variant="body2">© 2025 Garden Store. Todos os direitos reservados.</Typography>
      </Paper>
    </Box>
  );
};
