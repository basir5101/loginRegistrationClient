import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className = 'd-flex justify-content-center align-items-center'>
            <div className = 'row'>
                <div className = 'col-10'>
                        <Link to = '/user/login'>
                                <Card className = 'bg-warning text-white text-center'> 
                                    <Card.Body><h2>Continue As A Customer</h2></Card.Body>
                                </Card>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;