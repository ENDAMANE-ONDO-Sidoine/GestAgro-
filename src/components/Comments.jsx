import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { FaThumbsUp, FaHeart, FaComment } from "react-icons/fa";
import { addComment, getComments } from "../utils/indexedDB";

const Comments = () => {
    const [comments, setComments] = useState([]); // Liste des commentaires
    const [newComment, setNewComment] = useState(""); // Nouveau commentaire

    // Charger les commentaires depuis IndexedDB
    useEffect(() => {
        const fetchComments = async () => {
            const storedComments = await getComments();
            setComments(storedComments);
        };
        fetchComments();
    }, []);

    // Ajouter un commentaire dans IndexedDB
    const handleAddComment = async () => {
        if (newComment.trim()) {
            const comment = { content: newComment, likes: 0, reactions: 0 };
            const id = await addComment(comment);
            setComments([{ id, ...comment }, ...comments]); // Ajouter le commentaire localement
            setNewComment(""); // Réinitialiser le champ
        }
    };

    // Gestion des likes
    const handleLike = (id) => {
        const updatedComments = comments.map((comment) =>
            comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
        );
        setComments(updatedComments);
    };

    // Gestion des réactions
    const handleReact = (id) => {
        const updatedComments = comments.map((comment) =>
            comment.id === id ? { ...comment, reactions: comment.reactions + 1 } : comment
        );
        setComments(updatedComments);
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Avis récents
            </Typography>
            {comments.map((comment) => (
                <Box
                    key={comment.id}
                    sx={{
                        mb: 2,
                        p: 2,
                        border: "1px solid #ccc",
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="body1">{comment.content}</Typography>
                    <Box mt={1}>
                        <Button size="small" onClick={() => handleLike(comment.id)} startIcon={<FaThumbsUp />}>
                            Aimer ({comment.likes})
                        </Button>
                        <Button
                            size="small"
                            onClick={() => handleReact(comment.id)}
                            startIcon={<FaHeart />}
                            sx={{ ml: 2 }}
                        >
                            Réagir ({comment.reactions})
                        </Button>
                    </Box>
                </Box>
            ))}
            <Typography variant="h6" mt={4}>
                Ajouter un commentaire
            </Typography>
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
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddComment}
                sx={{ mt: 2 }}
                startIcon={<FaComment />}
            >
                Envoyer
            </Button>
        </Box>
    );
};

export default Comments;
