import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';
import Login from './Login';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
    height: 100%;
    display: flex;
    justify-content: center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3cpath d='M718.84 96.25a13.77 13.77 0 1 0-17.96 20.88z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1207.82 177.42L1226.84 177.42L1226.84 196.44L1207.82 196.44z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M179.68 406.33a47.7 47.7 0 1 0-15.14-94.19z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M261.55 349.44L300.21 349.44L300.21 377.18L261.55 377.18z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1265.5 385.06a53.04 53.04 0 1 0-50.84 93.1z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M863.77 389.23 a22.49 22.49 0 1 0 44.98 0 a22.49 22.49 0 1 0 -44.98 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M929.93 510.48L984.39 510.48L984.39 521.42L929.93 521.42z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M1146.28 555.58L1195.2 555.58L1195.2 604.5L1146.28 604.5z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M656.16 141.62L693.31 141.62L693.31 178.77L656.16 178.77z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M559.23 574.34a31.51 31.51 0 1 0-43.52-45.59z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M48.8 393.16a22.1 22.1 0 1 0-35.93 25.75z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1001.63 163.98 a25.5 25.5 0 1 0 51 0 a25.5 25.5 0 1 0 -51 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M986.34 140.61 a35.1 35.1 0 1 0 70.2 0 a35.1 35.1 0 1 0 -70.2 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M174.6 22.2L197.13 22.2L197.13 32.31L174.6 32.31z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M132.85 306.1a33.79 33.79 0 1 0-40.17-54.35z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M205.33 34.82L232.31 34.82L232.31 61.8L205.33 61.8z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M238.26 146.58a5.42 5.42 0 1 0-10.82 0.68z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M15.63 154.23L42.91 154.23L42.91 189.72L15.63 189.72z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M1093.06 425.71L1095.26 425.71L1095.26 456.39L1093.06 456.39z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M3.94 387.87 a9.35 9.35 0 1 0 18.7 0 a9.35 9.35 0 1 0 -18.7 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M392 146.94 a24.55 24.55 0 1 0 49.1 0 a24.55 24.55 0 1 0 -49.1 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M416.34 93.07 a31.89 31.89 0 1 0 63.78 0 a31.89 31.89 0 1 0 -63.78 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M1396.04 193.99L1398.33 193.99L1398.33 196.28L1396.04 196.28z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M231.18 14.37L280.22 14.37L280.22 48.64L231.18 48.64z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M250.75 485.74 a0.58 0.58 0 1 0 1.16 0 a0.58 0.58 0 1 0 -1.16 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M287.24 445.61a48.92 48.92 0 1 0 15.33 96.63z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M85.36 141.05a23.09 23.09 0 1 0-40.39-22.39z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M641.59 400.01L680.79 400.01L680.79 439.21L641.59 439.21z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1282.86 452.12 a33.03 33.03 0 1 0 66.06 0 a33.03 33.03 0 1 0 -66.06 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M1082.26 352.22 a9.9 9.9 0 1 0 19.8 0 a9.9 9.9 0 1 0 -19.8 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1002.63 229.28L1051.56 229.28L1051.56 278.21L1002.63 278.21z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M161.48 489.35L194.14 489.35L194.14 522.01L161.48 522.01z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M242.51 266.73L267.05 266.73L267.05 291.27L242.51 291.27z' fill='%23e73635'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Helmet>
        <title>Tangi Guru | Login</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Logo />
        </Box>
        <Login />
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
