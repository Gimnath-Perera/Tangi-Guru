import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import WatchList from './WatchList';
import { errorClose } from 'src/store/actions/common.actions';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(errorClose());
  }, []);

  return (
    <>
      <Helmet>
        <title>Lush | Admin</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <WatchList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
