import React from 'react';

import enGbFlag from '../assets/images/language/en-gb/en-gb.png';

const Header = () => {
  return (
    <header>
        {/* <div className="container-fluid px-5 py-2 nav-box">
            <div className="row welcome-top">
                <div className="col-8 fs-6">The Access To Endless Educational Content</div>
            </div>
        </div> */}
        <div class="row my-4">
            <div class="col-2 py-2">
                <img src="https://th.bing.com/th/id/OIP.IPUDTmz_43gYqMmWUGo2xgHaC1?w=335&h=133&c=7&r=0&o=5&pid=1.7" alt="EduTech" class="logo" height={40}/>
            </div>
            <div class="col-10">
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <div
                        class="container-fluid">
                        {/* <!-- <a class="navbar-brand" href="#">Navbar</a> --> */}
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                               
                               </ul>
                            <div class="header-links text-end">
                                <span>
                                    <i class="fa fa-lock"></i> <a href="/login">Login</a> | <a href="/register">Register</a>
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
            
    </header>
  );
};

export default Header;
