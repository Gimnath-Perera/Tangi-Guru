import { useEffect, useState } from 'react';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { userRegister } from '../../store/actions/auth.actions';
import { Link } from 'react-router-dom';
import { MOBILE_REGEX } from 'src/constants/common-configurations';

const FormHeaderContainer = styled(Box)(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  `
);

const FormSubHeaderSection = styled(Box)(
  ({ theme }) => `
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    `
);

const SubmitButton = styled(Button)`
  color: #fff;
`;

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const isAuthenticated = useSelector(
    ({ auth }: RootStateOrAny) => auth.isAuthenticated
  );
  const isLoginError = useSelector(
    ({ common }: RootStateOrAny) => common.error
  );
  const loading = useSelector(({ common }: RootStateOrAny) => common.loading);
  const initialFormValues = {
    email: '',
    password: '',
    fullName: '',
    phoneNumber: ''
  };
  useEffect(() => {
    isAuthenticated && navigate('/dashboards/overview');
  }, [isAuthenticated]);

  const handleOnSubmit = (values) => {
    dispatch(userRegister(values));
  };

  const userRegisterSchema = Yup.object({
    email: Yup.string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    password: Yup.string().max(255).required('Password is required'),
    fullName: Yup.string().max(255).required('Full Name is required'),
    phoneNumber: Yup.string()
      .matches(MOBILE_REGEX, 'Phone number is not valid')
      .required('Phone number is not required')
  });

  const handlePasswordVisible = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="sm">
        <Formik
          initialValues={initialFormValues}
          validationSchema={userRegisterSchema}
          onSubmit={(values) => {
            handleOnSubmit(values);
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values
          }) => (
            <form onSubmit={handleSubmit}>
              <FormHeaderContainer sx={{ mb: 3 }}>
                <FormSubHeaderSection>
                  <Typography color="#252733" variant="h2" align="center">
                    Create an Account
                  </Typography>
                </FormSubHeaderSection>
              </FormHeaderContainer>

              <TextField
                error={Boolean(touched.fullName && errors.fullName)}
                fullWidth
                helperText={touched.fullName && errors.fullName}
                label="Full Name"
                margin="normal"
                name="fullName"
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                value={values.fullName}
                variant="outlined"
                sx={{ background: '#fff' }}
              />

              <TextField
                error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                fullWidth
                helperText={touched.phoneNumber && errors.phoneNumber}
                label="Phone Number"
                margin="normal"
                name="phoneNumber"
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                value={values.phoneNumber}
                variant="outlined"
                sx={{ background: '#fff' }}
              />

              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label="Email Address"
                margin="normal"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
                sx={{ background: '#fff' }}
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Password"
                margin="normal"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                variant="outlined"
                sx={{ background: '#fff' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={handlePasswordVisible}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              {isLoginError && (
                <FormHelperText error id="outlined-adornment-password">
                  Invalid credentials
                </FormHelperText>
              )}

              <Box
                sx={{
                  py: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}
              >
                {loading ? (
                  <CircularProgress />
                ) : (
                  <SubmitButton
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign In
                  </SubmitButton>
                )}
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </Box>
            </form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};
export default Register;
