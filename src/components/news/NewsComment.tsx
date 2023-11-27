import React from 'react';
import {
    Typography,
    List,
    ListItem,
    ListItemText,
    Avatar,
    Divider,
    IconButton,
} from '@mui/material';
import { DeleteIcon } from 'lucide-react';

const NewsComment = ({ comments = [] }: { comments: any[] }) => {

    const handleDeleteComment = (commentId: number) => {
        // Implement your logic to delete the comment by commentId
        console.log('Deleting comment with ID:', commentId);
    };

    const handleDeleteReply = (commentId: number, replyId: number) => {
        // Implement your logic to delete the reply by replyId under comment with commentId
        console.log('Deleting reply with ID:', replyId, 'under comment ID:', commentId);
    };

    return (
        <>
            <Typography variant="body1" fontWeight="bold" gutterBottom>
                Comments
            </Typography>
            <List>
                {comments.map((comment) => (
                    <React.Fragment key={comment.id}>
                        <ListItem>
                            <ListItemText
                                primary={comment.text}
                                secondary={`By ${comment.author},  At ${comment.datetime}`}
                            />
                            <IconButton
                                aria-label="delete"
                                onClick={() => handleDeleteComment(comment.id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                        <List>
                            {comment.replies &&
                                comment.replies.map((reply: any) => (
                                    <ListItem key={reply.id} sx={{ width: 'unset', display: 'inline-flex', alignItems: 'flex-start', gap: 1 }}>
                                        <Avatar sx={{ marginRight: 1.5 }}>
                                            {reply.author.charAt(0)}
                                        </Avatar>
                                        <ListItemText
                                            primary={reply.text}
                                            secondary={`By ${reply.author}, At ${reply.datetime}`}
                                        />
                                        <IconButton
                                            aria-label="delete"
                                            onClick={() => handleDeleteReply(comment.id, reply.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItem>
                                ))}
                        </List>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </>
    );
};

export default NewsComment;
