import React, { useEffect } from 'react';
import slide1 from '../assets/images/edupics.jpg';

const HomePage = () => {
    useEffect(() => {
        document.title = 'Edu-Tech';
    }, []);

    return (
        <div className="row gx-1">
            <div className="col-2 main-sidebar small">
                <div className="card">
                    <nav className="nav flex-column">
                        <a className="nav-link" href="#"><i className="fa fa-history"></i> History</a>
                        <a className="nav-link" href="#"><i className="fa fa-pie-chart"></i> Programming</a>
                        <a className="nav-link" href="#"><i className="fa fa-dashboard"></i> Digital Marketting</a>
                        <a className="nav-link" href="#"><i className="fa fa-laptop"></i> Computer Science</a>
                        <a className="nav-link" href="#"><i className="fa fa-universal-access"></i> Enterpreneurial Operations</a>
                        <a className="nav-link" href="#"><i className="fa fa-server"></i> Data Science</a>
                        <a className="nav-link" href="#"><i className="fa fa-institution"></i> Marketing Management</a>
                        <a className="nav-link" href="#"><i className="fa fa-circle"></i> Climate Change</a>
                        <a className="nav-link" href="#"><i className="fa fa-barcode"></i> Economics</a>
                        <a className="nav-link" href="#"><i className="fa fa-crop"></i> UI/UX</a>
                        <a className="nav-link" href="#"><i className="fa fa-heartbeat"></i> Health and Nursing</a>
                        <a className="nav-link" href="#"><i className="fa fa-chevron-down"></i> More Categories</a>
                    </nav>
                </div>
            </div>
            <div className="col-10 ps-5 main-content">
                <div className="row">
                    <div className="col-9">
                        <img src={slide1} alt="Slide 1"/>
                    </div>
                    <div className="col-3 main-sidebar small">
                        <div className="card">
                            <nav className="nav flex-column">
                                <a className="nav-link" href="#"><i className="fa fa-history"></i> History</a>
                                <a className="nav-link" href="#"><i className="fa fa-pie-chart"></i> Programming</a>
                                <a className="nav-link" href="#"><i className="fa fa-dashboard"></i> Digital Marketting</a>
                                <a className="nav-link" href="#"><i className="fa fa-laptop"></i> Computer Science</a>
                                <a className="nav-link" href="#"><i className="fa fa-universal-access"></i> Enterpreneurial Operations</a>
                                <a className="nav-link" href="#"><i className="fa fa-server"></i> Data Science</a>
                                <a className="nav-link" href="#"><i className="fa fa-institution"></i> Marketing Management</a>
                                <a className="nav-link" href="#"><i className="fa fa-circle"></i> Climate Change</a>
                                <a className="nav-link" href="#"><i className="fa fa-barcode"></i> Economics</a>
                                <a className="nav-link" href="#"><i className="fa fa-crop"></i> UI/UX</a>
                                <a className="nav-link" href="#"><i className="fa fa-heartbeat"></i> Health and Nursing</a>
                                <a className="nav-link" href="#"><i className="fa fa-chevron-down"></i> More Categories</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
