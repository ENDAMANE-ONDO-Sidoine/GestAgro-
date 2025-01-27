import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";

const AuthForm = () => {
  const [tabValue, setTabValue] = useState(0); // 0 for Login, 1 for Signup
  const [role, setRole] = useState("");

  const handleTabChange = (event, newValue) => setTabValue(newValue);

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Card sx={{ maxWidth: "500px", width: "100%", borderRadius: "10px", boxShadow: 3 }}>
        <CardContent>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="Connexion" />
            <Tab label="Inscription" />
          </Tabs>

          {tabValue === 0 ? (
            // Connexion Formulaire
            <Box sx={{ mt: 3 }}>
              <Typography variant="h5" gutterBottom>
                Connexion
              </Typography>
              <TextField
                fullWidth
                label="Adresse e-mail"
                type="email"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Mot de passe"
                type="password"
                margin="normal"
                required
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2, borderRadius: "20px" }}
              >
                Se connecter
              </Button>
            </Box>
          ) : (
            // Inscription Formulaire
            <Box sx={{ mt: 3 }}>
              <Typography variant="h5" gutterBottom>
                Inscription
              </Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel id="role-select-label">Je suis un(e)</InputLabel>
                <Select
                  labelId="role-select-label"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <MenuItem value="Agriculteur">Agriculteur</MenuItem>
                  <MenuItem value="Fournisseur">Fournisseur</MenuItem>
                  <MenuItem value="Client">Client</MenuItem>
                  <MenuItem value="Partenaire">Partenaire</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Nom complet"
                type="text"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Adresse e-mail"
                type="email"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Mot de passe"
                type="password"
                margin="normal"
                required
              />
              {role === "Agriculteur" && (
                <TextField
                  fullWidth
                  label="Type de culture"
                  type="text"
                  margin="normal"
                  required
                />
              )}
              {role === "Fournisseur" && (
                <TextField
                  fullWidth
                  label="Type de produit fourni"
                  type="text"
                  margin="normal"
                  required
                />
              )}
              {role === "Client" && (
                <TextField
                  fullWidth
                  label="Type de produit recherché"
                  type="text"
                  margin="normal"
                  required
                />
              )}
              {role === "Partenaire" && (
                <TextField
                  fullWidth
                  label="Nom de l'organisation"
                  type="text"
                  margin="normal"
                  required
                />
              )}
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 2, borderRadius: "20px" }}
              >
                S'inscrire
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default AuthForm;
