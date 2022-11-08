import React, { useState } from 'react';
import { BASE_URL } from '../constant';
import './Register.css';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const navigate = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const handleSubimit = async () => {
    const re = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;

    const em = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    try {
      if (!email) {
        setEmailError('Email is required');
      }
      if (!email.match(em)) {
        setEmailError('Invalid email');
      }

      if (!password) {
        setPasswordError('Password is required');
      }
      if (!fullName) {
        setFullNameError('Full Name is required');
      }
      if (!phoneNumber) {
        setPhoneNumberError('Phone number is required');
      }
      if (!phoneNumber.match(re)) {
        setPhoneNumberError('Invalid phone number');
      } else {
        setIsLoading(true);

        setPasswordError('');
        setEmailError('');
        setFullNameError('');
        setPhoneNumberError('');
        const response = await axios.post(`${BASE_URL}/v1/auth/register`, {
          fullName,
          email,
          password,
          phoneNumber,
        });
        setIsLoading(false);
        toast.success('Registeration successful!');
        navigate.push('/login');
      }
    } catch (error) {
      setIsLoading(false);
      toast.error('Invalid Credentials');
      console.log('error', error);
    }
  };
  return (
    <section class="vh-100" style={{ backgroundColor: '#F5F1D8' }}>
      <div class="container-fluid" style={{ height: '100%' }}>
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form style={{ marginTop: '70px' }}>
              <h2 style={{ marginBottom: '20px' }}>Create an account</h2>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">
                  Full Name
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter full name"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
                {fullNameError.length > 0 && <p style={{ color: 'red', fontSize: '12px' }}>{fullNameError}</p>}
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter phone number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                />
                {phoneNumberError.length > 0 && <p style={{ color: 'red', fontSize: '12px' }}>{phoneNumberError}</p>}
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">
                  Email address
                </label>
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                {emailError.length > 0 && <p style={{ color: 'red', fontSize: '12px' }}>{emailError}</p>}
              </div>

              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example4">
                  Password
                </label>
                <input
                  type="password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                {passwordError.length > 0 && <p style={{ color: 'red', fontSize: '12px' }}>{passwordError}</p>}
              </div>
              <div class="text-center text-lg-start mt-4 pt-2">
                {isLoading ? (
                  <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                    onClick={handleSubimit}
                  >
                    Register
                  </button>
                )}
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account?{' '}
                  <a href="/login" class="link-danger">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://i.ibb.co/ZxWKPxb/Whats-App-Image-2022-11-08-at-2-01-12-PM-1.jpg"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Register;
