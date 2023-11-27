import { Grid, Typography } from '@mui/material';
import Page from '../../layouts/Page';
import StateCard from '../../components/dashboard/state-card';
import NewsViewsChart from '../../components/dashboard/news-views-chart';

const Dashboard = () => {

  return (
    <Page title='Dashboard'>
      <Typography variant="h5" sx={{ mb: 5 }}> Hi, Welcome back  </Typography>

      {/* Stat Cards  */}
      <Grid container spacing={{ xs: 2, md: 5 }} mb={5}>
        <Grid item xs={6} md={2.4}>
          <StateCard title='Total News' count={30} />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <StateCard title='Total Clips' count={10} />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <StateCard title='Total Videos' />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <StateCard title='Total Infobites' count={30} />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <StateCard title='Total Shares' count={40} />
        </Grid>
      </Grid>
      {/* Stat Cards End  */}


      {/* News View Chart Starts  */}
      <NewsViewsChart />
      {/* News View Chart End  */}

    </Page>
  );
}


export default Dashboard;