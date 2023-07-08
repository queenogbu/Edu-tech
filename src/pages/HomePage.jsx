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
                        
                        <a className="nav-link" href="/Programming"><i className="fa fa-pie-chart"></i> Programming</a>
                        <a className="nav-link" href="/DigitalMarketting"><i className="fa fa-dashboard"></i> Digital-Marketting</a>
                        <a className="nav-link" href="/ComputerScience"><i className="fa fa-laptop"></i> Computer-Science</a>
                        <a className="nav-link" href="/DataScience"><i className="fa fa-server"></i> Data-Science</a>
                        <a className="nav-link" href="/Economics"><i className="fa fa-barcode"></i> Economics</a>
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
                                <a className="nav-link" href="/Baking"><i className="fa fa-birthday-cake"></i> Baking</a>
                                <a className="nav-link" href="Tailoring"><i className="fa fa-text-width"></i> Tailoring</a>
                                <a className="nav-link" href="/Painting"><i className="fa fa-paint-brush"></i> Painting</a>
                                <a className="nav-link" href="HairStyling"><i className="fa fa-header"></i> Hair-Styling</a>
                                <a className="nav-link" href="Capentry"><i className="fa fa-check-circle"></i> Capentry</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
