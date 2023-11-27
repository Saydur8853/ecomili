import { useState } from 'react';
import {
    Container,
    Typography,
    CardContent,
    Grid,
    Chip,
    CardMedia,
    Divider,
    Collapse,
    Button,
    Paper,
    Stack,
} from '@mui/material';
import Page from '../../layouts/Page';
import PageHeader from '../../layouts/PageHeader';
import parse from 'html-react-parser';
import NewsComment from '../../components/news/NewsComment';

const newsDetails = {
    title: 'Sample News Title',
    shortNews: 'This is a short description of the news. This is a short description of the news. This is a short description of the news. This is a short description of the news. This is a short description of the news. This is a short description of the news.',
    detailedNews: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque ipsum et justo rhoncus dignissim. Vestibulum sollicitudin neque faucibus sapien bibendum, vel lobortis nulla volutpat. Nullam est erat, iaculis ac sapien quis, ultrices blandit erat. Pellentesque eu lacus ac justo mattis blandit vitae et est. Donec ornare porttitor tellus in porttitor. Fusce luctus libero arcu, in ultricies tortor feugiat sed. Aliquam ut bibendum diam.</p><br/> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque ipsum et justo rhoncus dignissim. Vestibulum sollicitudin neque faucibus sapien bibendum, vel lobortis nulla volutpat. Nullam est erat, iaculis ac sapien quis, ultrices blandit erat. Pellentesque eu lacus ac justo mattis blandit vitae et est. Donec ornare porttitor tellus in porttitor. Fusce luctus libero arcu, in ultricies tortor feugiat sed. Aliquam ut bibendum diam.</p><br/> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque ipsum et justo rhoncus dignissim. Vestibulum sollicitudin neque faucibus sapien bibendum, vel lobortis nulla volutpat. Nullam est erat, iaculis ac sapien quis, ultrices blandit erat. Pellentesque eu lacus ac justo mattis blandit vitae et est. Donec ornare porttitor tellus in porttitor. Fusce luctus libero arcu, in ultricies tortor feugiat sed. Aliquam ut bibendum diam.</p><br/> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque ipsum et justo rhoncus dignissim. Vestibulum sollicitudin neque faucibus sapien bibendum, vel lobortis nulla volutpat. Nullam est erat, iaculis ac sapien quis, ultrices blandit erat. Pellentesque eu lacus ac justo mattis blandit vitae et est. Donec ornare porttitor tellus in porttitor. Fusce luctus libero arcu, in ultricies tortor feugiat sed. Aliquam ut bibendum diam.</p><br/> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque ipsum et justo rhoncus dignissim. Vestibulum sollicitudin neque faucibus sapien bibendum, vel lobortis nulla volutpat. Nullam est erat, iaculis ac sapien quis, ultrices blandit erat. Pellentesque eu lacus ac justo mattis blandit vitae et est. Donec ornare porttitor tellus in porttitor. Fusce luctus libero arcu, in ultricies tortor feugiat sed. Aliquam ut bibendum diam.</p><br/>`,
    tags: ['Politics', 'Health', 'Technology'],
    featuredImage: 'https://via.placeholder.com/1200x600',
    galleryImages: [
        'https://via.placeholder.com/150x150',
        'https://via.placeholder.com/150x150',
        'https://via.placeholder.com/150x150',
    ],
    category: 'Sample Category',
    comments: [
        {
            id: 1,
            text: 'This is a comment on the news article.',
            author: 'Nayan',
            datetime: '10:20:02 AM 22/11/23',
            replies: [
                { id: 11, text: 'Reply to the comment.', author: 'Sumon', datetime: '10:20:02 AM 22/11/23' },
            ],
        },
        {
            id: 2,
            text: 'This is second comment on the news article.',
            author: 'Fahim',
            datetime: '10:20:02 AM 22/11/23',
            replies: [
                { id: 12, text: 'Reply to the second comment.', author: 'Sumon', datetime: '10:20:02 AM 22/11/23' },
            ],
        },

    ],
};

const ViewNews = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Page title={newsDetails.title}>
            <PageHeader
                title={''}
                btn={false}
                breadcrumbLinks={[
                    { label: "Manage News", href: '/news/manage' }
                ]}
                currentPage={newsDetails.title}
                backButton />



            {/* Content  */}
            <Container maxWidth="lg">
                <Typography variant="h5" gutterBottom>
                    {newsDetails.title}
                </Typography>
                <Stack component={Paper} elevation={0} className='rad-grad'>
                    <CardContent>
                        <Typography variant="body1" fontWeight={600} gutterBottom>  Short News </Typography>
                        <Typography variant="body1" color={'#3b3b3b'}>{newsDetails.shortNews}</Typography>
                        <Divider style={{ margin: '20px 0' }} />

                        <Typography variant="body1" fontWeight={600} gutterBottom> Detailed News </Typography>
                        <Collapse in={!isExpanded}>
                            <Typography variant="body1" color={'#3b3b3b'} style={{ maxHeight: '120px', overflow: 'hidden' }}>
                                {parse(newsDetails.detailedNews?.slice(0, 600) + '...')}
                            </Typography>
                        </Collapse>
                        {!isExpanded && (
                            <Button onClick={toggleExpand} variant="text" sx={{ textTransform: 'capitalize' }} color="primary">
                                Read More
                            </Button>
                        )}
                        {isExpanded && (
                            <div>
                                <Typography variant="body1" color={'#3b3b3b'}>
                                    {parse(newsDetails.detailedNews)}
                                </Typography>
                                <Button onClick={toggleExpand} variant="text" sx={{ textTransform: 'capitalize' }} color="primary">
                                    Show Less
                                </Button>
                            </div>
                        )}
                        <Divider style={{ margin: '20px 0' }} />

                        <Typography variant="body1" fontWeight={"bold"} gutterBottom> Tags </Typography>
                        <Grid container spacing={1}>
                            {newsDetails.tags.map((tag, index) => (
                                <Grid item key={index}>
                                    <Chip label={tag} variant="outlined" />
                                </Grid>
                            ))}
                        </Grid>
                        <Divider style={{ margin: '20px 0' }} />

                        <Typography variant="body1" fontWeight={"bold"} gutterBottom> Featured Image </Typography>
                        <CardMedia component="img" image={newsDetails.featuredImage} alt="Featured" />
                        <Divider style={{ margin: '20px 0' }} />

                        <Typography variant="body1" fontWeight={"bold"} gutterBottom> Gallery Images </Typography>
                        <Grid container spacing={2}>
                            {newsDetails.galleryImages.map((image, index) => (
                                <Grid item key={index}>
                                    <img src={image} alt={`Image ${index}`} style={{ width: '150px', height: '150px' }} />
                                </Grid>
                            ))}
                        </Grid>
                        <Divider style={{ margin: '20px 0' }} />

                        <Typography variant="body1" fontWeight={"bold"} gutterBottom> Category </Typography>
                        <Typography variant="body1">{newsDetails.category}</Typography>
                        <Divider style={{ margin: '20px 0' }} />



                        {/* Comments and Replies  */}
                        <NewsComment comments={newsDetails.comments} />

                    </CardContent>

                </Stack>

            </Container>

        </Page>
    );
};

export default ViewNews;
