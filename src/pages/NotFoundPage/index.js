import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../assets/gif/PageNotFound.gif';

const NotFoundPage = () => {
        return(
            <div>
                <p style={{ textAlign: "center" }}>
                <img src={PageNotFound} alt="pagina nao encontrada"/>
                    <Link to="/">Go to Home </Link>
                </p>
            </div>
        ); 
}

export default NotFoundPage;