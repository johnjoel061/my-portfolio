import React from "react";
import './services.css';

const services = () => {
  return (
    <div class="services-section" id="services">
      <div class="services">
        <div class="container">
          <h1 class="sub-title">My Services</h1>
          <div class="services-list">
            <div>
              <i class="fa-solid fa-code"></i>
              <h2>Blockchain development</h2>
              <p>
                Blockchain development is the process of creating, designing,
                and applying blockchain technology, which is a shared,
                unchangeable, distributed ledger that records transactions and
                tracks assets within a network
              </p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i class="fa-solid fa-pen-nib"></i>
              <h2>Full Stack Development</h2>
              <p>
                Full stack development refers to the end-to-end application
                software development, including the front end and back end. The
                front end consists of the user interface, and the back end takes
                care of the business logic and application workflows.
              </p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i class="fa-brands fa-app-store-ios"></i>
              <h2>Decentralized App Development</h2>
              <p>
                A decentralized application (DApp) is a type of distributed,
                open source software application that runs on a peer-to-peer
                (P2P) blockchain network rather than on a single computer. DApps
                are similar to other software applications that are supported on
                a website or mobile device, but they're P2P supported.
              </p>
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
