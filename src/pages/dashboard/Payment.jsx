import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);

const Payment = () => {
    return (
        <div className='w-full'>
           <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
           <Elements stripe={stripePromise}>
                <CheckoutForm ></CheckoutForm>
            </Elements>
        </div>
        
    );
};

export default Payment;