import React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import { 
    Group, 
    BarChart, 
    Share, 
    Agriculture, 
    ShoppingCart, 
    Notifications, 
    AttachMoney, 
    AccountBalance, 
    Handshake, 
    DataUsage, 
    Lightbulb 
} from "@mui/icons-material";
import './AboutPage.css'; // Importez le fichier CSS

const AboutPage = () => {
    return (
        <Box
            sx={{
                padding: "2rem",
                backgroundColor: "#f9f9f9",
                minHeight: "100vh",
                marginTop: "4rem", // Espace pour compenser la Navbar
            }}
        >
            <Card sx={{ maxWidth: "900px", margin: "0 auto", borderRadius: "10px", boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h4" gutterBottom sx={{ color: "green" }}>
                        À propos de GestAgro
                    </Typography>

                    <Typography variant="h6" gutterBottom sx={{ color: "green" }}>
                        Une Réponse aux Défis de l’Agriculture Gabonaise
                    </Typography>
                    <Typography paragraph sx={{ textAlign: "justify" }}>
                        L’agriculture, bien que pleine de potentiel, reste un secteur sous-exploité au Gabon. Elle souffre d’un manque de
                        statistiques fiables, d’une faible collaboration entre les acteurs, et d’un partage limité des connaissances et bonnes
                        pratiques. Ces défis freinent les opportunités d’innovation et de modernisation, nécessaires pour renforcer l’impact
                        de l’agriculture sur le développement durable du pays.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: "justify" }}>
                        GestAgro s’inscrit comme une solution numérique pour combler ces lacunes, en connectant les agriculteurs, fournisseurs,
                        et clients, et en leur offrant des outils modernes pour optimiser leurs activités.
                    </Typography>

                    <Typography variant="h5" gutterBottom sx={{ color: "green" }}>
                        Notre Mission
                    </Typography>
                    <Typography paragraph sx={{ textAlign: "justify" }}>
                        Notre mission est de transformer le paysage agricole au Gabon en mettant à disposition une plateforme intuitive et
                        collaborative, conçue pour faciliter la gestion, la planification, et l’échange d’informations entre les acteurs du secteur.
                    </Typography>

                    <Typography variant="h5" gutterBottom sx={{ color: "green" }}>
                        Nos Objectifs
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon><Group sx={{ color: "blue" }} className="iconHover" /></ListItemIcon>
                            <ListItemText 
                                primary="Créer un écosystème collaboratif" 
                                secondary="Favoriser l’interconnexion entre agriculteurs, fournisseurs d’intrants, et partenaires stratégiques." 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><BarChart sx={{ color: "purple" }} className="iconHover" /></ListItemIcon>
                            <ListItemText 
                                primary="Rendre les données accessibles et exploitables" 
                                secondary="Collecter, centraliser, et analyser les données agricoles pour soutenir la prise de décision." 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Share sx={{ color: "orange" }} className="iconHover" /></ListItemIcon>
                            <ListItemText 
                                primary="Faciliter le partage des connaissances" 
                                secondary="Proposer un espace de communication pour échanger des bonnes pratiques et expériences." 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Agriculture sx={{ color: "green" }} className="iconHover" /></ListItemIcon>
                            <ListItemText 
                                primary="Améliorer la gestion agricole" 
                                secondary="Fournir des outils de suivi des productions animales et végétales, avec des fichiers et rapports exportables." 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><ShoppingCart sx={{ color: "red" }} className="iconHover" /></ListItemIcon>
                            <ListItemText 
                                primary="Renforcer la visibilité des produits agricoles" 
                                secondary="Offrir une plateforme de publication et de vente de produits, accessible à un large public." 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Notifications sx={{ color: "teal" }} className="iconHover" /></ListItemIcon>
                            <ListItemText 
                                primary="Intégrer des outils innovants" 
                                secondary="Notifications personnalisées, prévisions météorologiques, suivi de la chaîne de valeur, et géolocalisation pour des interactions efficaces." 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><AttachMoney sx={{ color: "gold" }} className="iconHover" /></ListItemIcon>
                            <ListItemText 
                                primary="Soutenir les dynamiques du marché" 
                                secondary="Suivre l’évolution des prix agricoles et fournir des informations pertinentes pour maximiser les opportunités." 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><AccountBalance sx={{ color: "navy" }} className="iconHover" /></ListItemIcon>
                            <ListItemText 
                                primary="Impliquer les partenaires stratégiques" 
                                secondary="Travailler avec les transporteurs, agronomes, ONG, institutions financières, et décideurs étatiques pour renforcer l'impact global." 
                            />
                        </ListItem>
                    </List>

                    <Typography variant="h5" gutterBottom sx={{ color: "green" }}>
                        Pourquoi GestAgro ?
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon><Handshake sx={{ color: "blue" }} className="iconHover" /></ListItemIcon>
                            <ListItemText 
                                primary="Collaboration renforcée" 
                                secondary="Un espace dédié pour connecter tous les acteurs de la chaîne de valeur agricole." 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><DataUsage sx={{ color: "purple" }} className="iconHover" /></ListItemIcon>
                            <ListItemText 
                                primary="Analyse et planification" 
                                secondary="Des données fiables pour aider les agriculteurs à optimiser leurs rendements et leurs ventes." 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Lightbulb sx={{ color: "orange" }} className="iconHover" /></ListItemIcon>
                            <ListItemText 
                                primary="Partage de savoir-faire" 
                                secondary="Une communauté pour apprendre et évoluer ensemble." 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Agriculture sx={{ color: "green" }} className="iconHover" /></ListItemIcon>
                            <ListItemText 
                                primary="Facilité d’utilisation" 
                                secondary="Une plateforme accessible et pensée pour répondre aux besoins spécifiques des agriculteurs gabonais." 
                            />
                        </ListItem>
                    </List>

                    <Typography variant="h5" gutterBottom sx={{ color: "green" }}>
                        Rejoignez le Mouvement GestAgro
                    </Typography>
                    <Typography paragraph sx={{ textAlign: "justify" }}>
                        GestAgro n’est pas seulement une application web, c’est une révolution dans la manière de penser et de pratiquer
                        l’agriculture au Gabon. En connectant les acteurs, en partageant les connaissances, et en valorisant les données, nous œuvrons pour
                        un avenir agricole plus collaboratif, productif et durable.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AboutPage;
