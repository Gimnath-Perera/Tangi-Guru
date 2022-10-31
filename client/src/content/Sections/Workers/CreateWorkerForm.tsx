import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import _ from 'lodash';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

import { createWorker, updateWorker } from 'src/store/actions/worker.actions';
import { MOBILE_REGEX } from 'src/constants/common-configurations';
import { useState } from 'react';

interface CreateWorkerFormProps {
  onSuccess(): any;
  formData?: any;
}

const CreateWorkerForm = ({ onSuccess, formData }: CreateWorkerFormProps) => {
  const dispatch = useDispatch();
  const loading = useSelector(({ common }: RootStateOrAny) => common.loading);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const initialFormValues = {
    firstName: formData?.firstName || '',
    lastName: formData?.lastName || '',
    role: formData?.role || 'Worker',
    status: formData?.status || 'Reviewing',
    email: formData?.email || '',
    password: '',
    confirmPassword: '',
    phoneNumber: formData?.phoneNumber || '',
    address: formData?.address || '',
    nearestMarket: formData?.farm?.nearestMarket || '',
    name: formData?.farm?.name || '',
    postalCode: formData?.farm?.postalCode || '',
    openTime: formData?.farm?.openTime || '09:00',
    closeTime: formData?.farm?.closeTime || '18:00'
  };

  const workerRegisterSchema = Yup.object({
    email: Yup.string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    status: Yup.string().required('Status is required'),
    phoneNumber: Yup.string()
      .matches(MOBILE_REGEX, 'Invalid phone number')
      .required('Contact number required'),
    address: Yup.string().required('Address is required'),
    nearestMarket: Yup.string().required('NearestMarket is required'),
    name: Yup.string().required('Farm Name is required'),
    postalCode: Yup.string().required('PostalCode is required'),
    openTime: Yup.string().required('Open Time is required'),
    closeTime: Yup.string().required('Close Time is required'),
    ...(!formData && {
      role: Yup.string().required('Role is required'),
      password: Yup.string()
        .required('Please Enter your password')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
        ),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      )
    })
  });

  const onSubmitWorker = (values: any) => {
    const payload = {
      firstName: values?.firstName,
      lastName: values?.lastName,
      role: values?.role,
      status: values?.status,
      userType: 'Farmer',
      email: values?.email,
      password: values?.password,
      phoneNumber: values?.phoneNumber,
      address: values?.address,
      farm: {
        nearestMarket: values?.address,
        name: values?.name,
        postalCode: values?.postalCode,
        openTime: values?.openTime,
        closeTime: values?.closeTime
      }
    };

    if (formData) {
      dispatch(
        updateWorker({
          id: formData?.id,
          data: _.omit(payload, ['password', 'role']) // removing password for now & role is not allowed to update
        })
      );
    } else {
      dispatch(createWorker(payload));
    }
    onSuccess();
  };

  const handleClickShowPassword = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () => {
    setConfirmPasswordVisible((prevState) => !prevState);
  };

  const handleMouseDownConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
          validationSchema={workerRegisterSchema}
          onSubmit={(values) => {
            onSubmitWorker(values);
          }}
        >
          {({ errors, handleBlur, handleChange, touched, values }) => {
            return (
              <Form>
                <p>Enter the farmer's personal details</p>
                <TextField
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  label="First Name"
                  margin="normal"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.firstName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Last Name"
                  margin="normal"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.lastName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
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
                />
                <TextField
                  error={Boolean(touched.address && errors.address)}
                  fullWidth
                  helperText={touched.address && errors.address}
                  label="Address"
                  margin="normal"
                  name="address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.address}
                  variant="outlined"
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
                  type={passwordVisible ? 'text' : 'password'}
                  value={values.password}
                  variant="outlined"
                  disabled={formData ? true : false}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          disabled={formData ? true : false}
                        >
                          {passwordVisible ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                <TextField
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                  fullWidth
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  label="Confirm Password"
                  margin="normal"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  value={values.confirmPassword}
                  variant="outlined"
                  disabled={formData ? true : false}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownConfirmPassword}
                          edge="end"
                          disabled={formData ? true : false}
                        >
                          {confirmPasswordVisible ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                <TextField
                  error={Boolean(touched.role && errors.role)}
                  fullWidth
                  helperText={touched.role && errors.role}
                  label="Account Type"
                  margin="normal"
                  name="role"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.role}
                  variant="outlined"
                  disabled
                />

                <TextField
                  error={Boolean(touched.status && errors.status)}
                  fullWidth
                  helperText={touched.status && errors.status}
                  select
                  label="Status"
                  margin="normal"
                  name="status"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.status}
                  variant="outlined"
                >
                  <MenuItem value={'Active'}>Active</MenuItem>
                  <MenuItem value={'Reviewing'}>Reviewing</MenuItem>
                  <MenuItem value={'Deactivated'}>Deactivated</MenuItem>
                </TextField>
                <p>Enter the farm related details</p>
                <TextField
                  error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  label="Farm Name"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.name}
                  variant="outlined"
                />

                <TextField
                  error={Boolean(touched.nearestMarket && errors.nearestMarket)}
                  fullWidth
                  helperText={touched.nearestMarket && errors.nearestMarket}
                  label="Nearest Marketplace"
                  margin="normal"
                  name="nearestMarket"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.nearestMarket}
                  variant="outlined"
                />

                <TextField
                  error={Boolean(touched.postalCode && errors.postalCode)}
                  fullWidth
                  helperText={touched.postalCode && errors.postalCode}
                  label="Postal Code"
                  margin="normal"
                  name="postalCode"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.postalCode}
                  variant="outlined"
                />

                <TextField
                  error={Boolean(touched.openTime && errors.openTime)}
                  fullWidth
                  helperText={touched.openTime && errors.openTime}
                  label="Open Time"
                  margin="normal"
                  name="openTime"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="time"
                  value={values.openTime}
                  variant="outlined"
                />

                <TextField
                  error={Boolean(touched.closeTime && errors.closeTime)}
                  fullWidth
                  helperText={touched.closeTime && errors.closeTime}
                  label="Close Time"
                  margin="normal"
                  name="closeTime"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="time"
                  value={values.closeTime}
                  variant="outlined"
                />

                <Box sx={{ py: 2 }}>
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      color="primary"
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      {formData ? 'UPDATE' : 'SUBMIT'}
                    </Button>
                  )}
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </Box>
  );
};
export default CreateWorkerForm;
