import React, { useEffect, useState } from 'react';
import './Header.css';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { BASE_URL } from '../constant';
import axios from 'axios';

export default function Header(props) {
  const navigate = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    const user = localStorage.getItem('user');

    if (user) {
      const _user = JSON.parse(user);
      setUser(_user);
    } else {
      window.location.href = '/login';
    }
  };

  const handlePointSubmit = async () => {
    const { points } = props;
    try {
      if (points == 0) return navigate.push('/');
      const response = await axios.patch(`${BASE_URL}/v1/users/${user?._id}`, {
        score: user?.score + parseInt(points),
      });
      const updatedUser = user;
      updatedUser.score = response?.data?.score;
      setUser((prevState) => ({ ...prevState, ...{ score: response?.data?.score } }));

      localStorage.setItem('user', JSON.stringify(user));
      navigate.push('/');
      toast.success('Score has been updated successfully!');
    } catch (err) {
      toast.error('Network Error!');
    }
  };
  return (
    <div>
      <div
        className="point-counter"
        key={props.randomKeyforPoints}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0px 50px',
        }}
      >
        <div style={{ cursor: 'pointer' }} onClick={handlePointSubmit}>
          <img src="https://i.ibb.co/chMfPHj/back-arrow.png" alt="Back Arrow" width="50" height="50" />
        </div>

        <p className="animated points">Points : {parseInt(props.points)}</p>
      </div>
      <div className="travel-image-container" key={props.randomKeyForImage}>
        {' '}
        <img alt="" className="animated travel-image" src={props.pickedWordUrl}></img>
      </div>
      <Toaster />
    </div>
  );
}
