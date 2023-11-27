import { useNavigate } from 'react-router-dom';
import { Button, Typography, Stack, Box } from '@mui/material';
import Page from '../../layouts/Page';



const NotFound = ({ minHeight = "70vh" }: { minHeight?: string }) => {
  const navigate = useNavigate();

  return (
    <Page title='404 - Page Not Found'>
      <Stack alignItems={"center"} justifyContent={"center"} minHeight={minHeight}>
        <Stack maxWidth={480} alignItems={"center"} gap={1.5}>
          <Typography variant="h4">  Sorry, page not found! </Typography>

          <Typography color={"GrayText"}>
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </Typography>

          <Box
            component="img"
            src="/assets/illustrations/illustration_404.svg"
            maxWidth={320}
          />

          <div>
            <Button size="medium" variant="contained"
              sx={{ textTransform: 'capitalize', mt: 5 }}
              onClick={() => navigate(-1)}>
              Go Back Home
            </Button>
          </div>

        </Stack>
      </Stack>
    </Page>
  );
}


export default NotFound;