import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    // console.log(user);


    /**
      We need to verify only email and password this is valid email or not. wWe don't 
      want to verify google so we can use:
      if(user.providerData[0].providerId ==='password' && !user.emailVerified){

      }
      When you do console user you will find the provideData and provideId.
      ScreenShot link: https://prnt.sc/eF1El8cxpzrm
     */



    if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
        return <div>
            <h2 className='text-primary text-center'>Please Check Your Email</h2>
            <button
                className='btn btn-danger text-center'
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }}
            >
                Verify email
            </button>
        </div>
    }
    return children;
};

export default RequireAuth;