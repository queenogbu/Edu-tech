import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/style.css';

const Footer = () => {
  return (
    <section className="newsletter container-fluid px-5 py-4">
        <div className="row">
            <div className="col-4 offset-4 fa-lg socials">
                <a href="#">
                    <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                    <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                    <i className="fa fa-google-plus"></i>
                </a>
                <a href="#">
                    <i className="fa fa-pinterest"></i>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Footer;
