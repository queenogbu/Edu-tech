import React, { useEffect } from 'react';

import AuthSidebar from '../components/AuthSidebar';

const LoginPage = () => {
    useEffect(() => {
        document.title = 'Edu-Tech';
    }, []);

    return (
        <div>
            <nav style={{'--bs-breadcrumb-divider': "'>'"}} aria-label="breadcrumb" className="py-3">
            {/* <nav className="py-3"> */}
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">
                            <i className="fa fa-home"></i>
                        </a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/">Account</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Login</li>
                </ol>
            </nav>

            <div className="row gx-1">
                <div className="col-9">
                    <div className="row">
                        <div className="col-6">
                            <div className="card p-4">
                                <h2>New Customer</h2>

                                <p className="fw-bold">Register Account</p>

                                <p>Creating an account gives you unlimited access to all our educational and vocational courses.</p>

                                <div>
                                    <button type="submit" className="btn btn-dark">CONTINUE</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card p-4">
                                <form className="register-form">
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email Address</label>
                                        <input type="text" className="form-control" id="email" placeholder="Email address" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="text" className="form-control" id="password" placeholder="Password" />
                                    </div>

                                    <div className="text-end">
                                        <button type="submit" className="btn btn-dark">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <AuthSidebar />
            </div>
        </div>
    );
};

export default LoginPage;
