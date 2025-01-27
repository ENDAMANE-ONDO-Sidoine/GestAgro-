import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Card, CardContent, Pagination } from "@mui/material";
import { FaTractor, FaShoppingCart, FaWarehouse, FaComment, FaSearch, FaTruck, FaFlask, FaHandsHelping, FaUniversity, FaGavel } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [backgroundImage, setBackgroundImage] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const navigate = useNavigate(); // Pour la navigation vers la page des commentaires

    const bannerImages = [
        "https://cdn4.regie-agricole.com/ulf/CMS_Content/1/articles/221497/fiches_Visuel_optimiser_temps_de_travail-480x270.png",
        "https://hexagon.com/-/media/project/one-web/master-site/solutions/farms-ecosystem/farms-main-marquee.jpg?h=880&iar=0&w=2560&hash=690A0B17EABB71EA29689423F4916B57",
        "https://static.lpnt.fr/images/2019/10/07/19455183lpw-19456011-article-jpg_6559913_1250x625.jpg",
    ];

    const services = [
        {
            title: "Agriculteurs",
            description: "Gérez vos productions agricoles.",
            icon: <FaTractor size={40} color="#22c55e" />,
            route: "/agriculteurs",
        },
        {
            title: "Clients",
            description: "Achetez des produits agricoles.",
            icon: <FaShoppingCart size={40} color="#ff5722" />,
            route: "/clients",
        },
        {
            title: "Fournisseurs",
            description: "Proposez vos intrants agricoles.",
            icon: <FaWarehouse size={40} color="#3f51b5" />,
            route: "/fournisseurs",
        },
    ];

    const partners = [
        {
            name: "Transporteurs",
            description: "Collaborer avec les transporteurs pour une logistique efficace et une distribution rapide des produits agricoles.",
            icon: <FaTruck size={40} color="#ffc107" />,
            route: "/transporteurs",
        },
        {
            name: "Agronomes",
            description: "Travailler avec des agronomes pour améliorer les pratiques agricoles et augmenter les rendements.",
            icon: <FaFlask size={40} color="#9c27b0" />,
            route: "/agronomes",
        },
        {
            name: "ONG",
            description: "Partenariats avec des ONG pour soutenir le développement durable et les initiatives agricoles.",
            icon: <FaHandsHelping size={40} color="#009688" />,
            route: "/ong",
        },
        {
            name: "Institutions financières",
            description: "Collaboration avec des institutions financières pour fournir des services de financement aux agriculteurs et autres acteurs.",
            icon: <FaUniversity size={40} color="#795548" />,
            route: "/institutions-financieres",
        },
        {
            name: "Décideurs étatiques",
            description: "Travailler avec les décideurs étatiques pour renforcer les politiques et les infrastructures agricoles.",
            icon: <FaGavel size={40} color="#e91e63" />,
            route: "/decideurs-etatiques",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const randomImage = bannerImages[Math.floor(Math.random() * bannerImages.length)];
            setBackgroundImage(randomImage);
        }, 5000);
        return () => clearInterval(interval);
    }, [bannerImages]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPartners = partners.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <Box sx={{ bgcolor: "gray.100" }}>
            {/* Bannière */}
            <Box
                sx={{
                    height: { xs: "300px", sm: "400px", md: "500px" },
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.5)",
                    }}
                />
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        px: { xs: 2, sm: 4 },
                    }}
                >
                    <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" } }}>
                        Bienvenue sur GestAgro
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }, mt: 1 }}>
                        Vers une agriculture gabonaise innovante et inclusive.
                    </Typography>
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                        sx={{ mt: 3, fontSize: { xs: "0.8rem", sm: "1rem" }, px: { xs: 2, sm: 4 } }}
                        href="#services"
                        startIcon={<FaSearch />}
                    >
                        Explorer
                    </Button>
                </Box>
            </Box>

            {/* Section Services */}
            <Box id="services" textAlign="center" p={4}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        position: "relative",
                        display: "inline-block",
                        fontWeight: "bold",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            bottom: "-10px",
                            left: "50%",
                            width: "60px",
                            height: "4px",
                            bgcolor: "#22c55e",
                            transform: "translateX(-50%)",
                        },
                    }}
                >
                    NOS SERVICES
                </Typography>
                <Grid container spacing={4} justifyContent="center" mt={4}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <CardContent>
                                    <Box>{service.icon}</Box>
                                    <Typography variant="h6" gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {service.description}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        href={service.route}
                                        sx={{ mt: 2 }}
                                    >
                                        Découvrir
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Section Partenaires */}
            <Box id="partners" textAlign="center" p={4}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        position: "relative",
                        display: "inline-block",
                        fontWeight: "bold",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            bottom: "-10px",
                            left: "50%",
                            width: "60px",
                            height: "4px",
                            bgcolor: "#3b82f6",
                            transform: "translateX(-50%)",
                        },
                    }}
                >
                    NOS PARTENAIRES STRATÉGIQUES
                </Typography>
                <Grid container spacing={4} justifyContent="center" mt={4}>
                    {currentPartners.map((partner, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <CardContent>
                                    <Box>{partner.icon}</Box>
                                    <Typography variant="h6" gutterBottom>
                                        {partner.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {partner.description}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        href={partner.route}
                                        sx={{ mt: 2 }}
                                    >
                                        En savoir plus
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={4} display="flex" justifyContent="center">
                    <Pagination
                        count={Math.ceil(partners.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="success"
                    />
                </Box>
            </Box>

            {/* Bouton pour aller à la page des commentaires */}
            <Box textAlign="center" py={4}>
                <Button
                    variant="contained"
                    color="success"
                    size="large"
                    startIcon={<FaComment />}
                    onClick={() => navigate("/comments")} // Navigation vers la page des commentaires
                >
                    Avis & Commentaires
                </Button>
            </Box>
        </Box>
    );
};

export default HomePage;
