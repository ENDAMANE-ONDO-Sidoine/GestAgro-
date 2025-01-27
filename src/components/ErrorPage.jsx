import React from "react";
import { Typography, Box, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import './ErrorPage.css'; // Importez le fichier CSS

const StyledContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    color: '#fff',
});

const StyledButton = styled(Button)({
    marginTop: '20px',
});

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <StyledContainer maxWidth="md" className="errorContent">
            <div className="animatedBackground"></div>
            <Typography variant="h1" color="error" gutterBottom>
                404
            </Typography>
            <Typography variant="h4" gutterBottom>
                Oups! La page que vous cherchez n'existe pas.
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
                Il semble que vous soyez perdu. Ne vous inquiétez pas, nous allons vous ramener à l'accueil.
            </Typography>
            <StyledButton 
                variant="contained" 
                color="primary" 
                onClick={() => navigate("/")}
            >
                Retour à l'accueil
            </StyledButton>
        </StyledContainer>
    );
};

export default ErrorPage;
