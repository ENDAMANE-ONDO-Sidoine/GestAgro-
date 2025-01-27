import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import { FaThumbsUp, FaHeart, FaComment, FaTrashAlt, FaEdit } from "react-icons/fa";
import { addComment, getComments, deleteComment, updateComment } from "../utils/indexedDB";

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const CommentsPage = () => {
    const [comments, setComments] = useState([]); // Liste des commentaires
    const [newComment, setNewComment] = useState(""); // Nouveau commentaire
    const [username, setUsername] = useState(""); // Nom de l'utilisateur
    const [editingComment, setEditingComment] = useState(null); // Commentaire en cours de modification

    useEffect(() => {
        const fetchComments = async () => {
            const storedComments = await getComments();
            setComments(storedComments);
        };
        fetchComments();

        // Charger le nom de l'utilisateur depuis le stockage local
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleAddOrUpdateComment = async () => {
        if (newComment.trim() && username.trim()) {
            if (editingComment) {
                await updateComment(editingComment.id, {
                    content: newComment,
                    username: username,
                    likes: editingComment.likes,
                    reactions: editingComment.reactions,
                    timestamp: editingComment.timestamp,
                });
                setComments(
                    comments.map((comment) =>
                        comment.id === editingComment.id ? { ...comment, content: newComment, username: username } : comment
                    )
                );
                setEditingComment(null);
            } else {
                const comment = { content: newComment, username: username, likes: 0, reactions: 0, timestamp: new Date().toISOString() };
                const id = await addComment(comment);
                setComments([{ id, ...comment }, ...comments]); // Ajouter le commentaire localement
            }
            setNewComment(""); // Réinitialiser le champ
        }
    };

    const handleDeleteComment = async (id) => {
        await deleteComment(id);
        setComments(comments.filter((comment) => comment.id !== id));
    };

    const handleEditComment = (comment) => {
        setEditingComment(comment);
        setNewComment(comment.content);
    };

    const handleCancelEdit = () => {
        setEditingComment(null);
        setNewComment("");
    };

    const handleLike = (id) => {
        const updatedComments = comments.map((comment) =>
            comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
        );
        setComments(updatedComments);
    };

    const handleReact = (id) => {
        const updatedComments = comments.map((comment) =>
            comment.id === id ? { ...comment, reactions: comment.reactions + 1 } : comment
        );
        setComments(updatedComments);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        localStorage.setItem("username", e.target.value); // Stocker le nom de l'utilisateur dans le stockage local
    };

    return (
        <Box
            sx={{
                maxWidth: "800px", // Largeur maximale
                margin: "auto", // Centrer le conteneur
                padding: "16px",
                bgcolor: "#f8f9fa", // Fond doux
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
        >
            {/* Titre principal */}
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    position: "relative",
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "60px",
                        height: "4px",
                        backgroundColor: "#22c55e",
                        bottom: "-8px",
                        left: "50%",
                        transform: "translateX(-50%)",
                    },
                }}
            >
                Avis récents
            </Typography>

            {/* Liste des commentaires */}
            <Box
                sx={{
                    maxHeight: "400px", // Hauteur maximale avec défilement
                    overflowY: "auto",
                    mt: 4,
                    padding: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    bgcolor: "white",
                }}
            >
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <Box
                            key={comment.id}
                            sx={{
                                mb: 2,
                                p: 2,
                                borderRadius: "8px",
                                backgroundColor: "#f9f9f9",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <Typography variant="body1" sx={{ wordWrap: "break-word", fontWeight: "500" }}>
                                {comment.content}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                {comment.username} - {formatDate(comment.timestamp)}
                            </Typography>
                            <Box mt={1} display="flex" justifyContent="space-between" flexWrap="wrap">
                                <Button size="small" onClick={() => handleLike(comment.id)} startIcon={<FaThumbsUp />}>
                                    Aimer ({comment.likes})
                                </Button>
                                <Button size="small" onClick={() => handleReact(comment.id)} startIcon={<FaHeart />}>
                                    Réagir ({comment.reactions})
                                </Button>
                                <IconButton onClick={() => handleEditComment(comment)}>
                                    <FaEdit />
                                </IconButton>
                                <IconButton onClick={() => handleDeleteComment(comment.id)}>
                                    <FaTrashAlt />
                                </IconButton>
                            </Box>
                        </Box>
                    ))
                ) : (
                    <Typography variant="body2" color="textSecondary">
                        Aucun commentaire pour le moment.
                    </Typography>
                )}
            </Box>

            {/* Formulaire d'ajout / modification */}
            <Typography variant="h6" mt={4}>
                {editingComment ? "Modifier le commentaire" : "Ajouter un commentaire"}
            </Typography>
            <TextField
                label="Nom d'utilisateur"
                variant="outlined"
                fullWidth
                value={username}
                onChange={handleUsernameChange}
                sx={{ mt: 2 }}
            />
            <TextField
                label="Votre commentaire"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                sx={{ mt: 2 }}
            />
            <Box display="flex" justifyContent="space-between" mt={2} flexWrap="wrap">
                <Button variant="contained" color="success" onClick={handleAddOrUpdateComment} startIcon={<FaComment />}>
                    {editingComment ? "Mettre à jour" : "Envoyer"}
                </Button>
                {editingComment && (
                    <Button variant="outlined" color="error" onClick={handleCancelEdit} sx={{ mt: 1 }}>
                        Annuler
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default CommentsPage;
