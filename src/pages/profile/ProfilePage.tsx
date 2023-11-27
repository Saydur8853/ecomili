import { Avatar, Divider, IconButton, Paper, Stack, Typography } from "@mui/material";
import Page from "../../layouts/Page";
import PageHeader from "../../layouts/PageHeader";
import { EditIcon } from "lucide-react";


const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phoneNumber: '+1234567890',
    accountCreationDate: 'January 1, 2022',
    role: 'Admin',
    lastLogin: '10:20:56 AM 20/11/2023',
};


const ProfilePage = () => {
    const handleEditProfile = () => {
        // Add functionality for editing the profile here
        console.log('Edit button clicked');
    };

    return (
        <Page title="Profile">
            <PageHeader
                title="Profile"
                btn={false}
                currentPage="Profile" />



            <Paper elevation={0} className="rad-grad" sx={{ maxWidth: 400, mx: 'auto', p: 4 }}>
                <IconButton color="inherit" onClick={handleEditProfile}>
                    <EditIcon size={16} />
                </IconButton>

                <Avatar
                    alt="User Logo"
                    src="https://via.placeholder.com/150"
                    sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h5" align="center" gutterBottom>
                    {user.name}
                </Typography>
                <Divider sx={{ mb: 2 }} />

                <Stack gap={1}>
                    <Typography variant="body1">
                        <strong>Email: </strong> {user.email}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Phone Number: </strong> {user.phoneNumber}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Account Creation Date: </strong> {user.accountCreationDate}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Role: </strong> {user.role}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Last Login: </strong>
                        <i>{user.lastLogin}</i>
                    </Typography>
                </Stack>
            </Paper>

        </Page>
    );
};

export default ProfilePage;