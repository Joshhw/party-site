import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter }  from 'react-router-dom';
import Main from "./mainpage/Main";


ReactDOM.render((
    <BrowserRouter>
        <Main />
    </BrowserRouter>
    ), document.getElementById('root')
);

