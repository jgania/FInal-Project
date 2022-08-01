import React, { Component } from 'react';

export default class NavbarComp extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark navbar-expand">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Jordan Gania</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/App">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/About">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/ContactUs">Contact Us</a>
                            </li>
                       
                        </ul>
                    </div>
                </div>
          </nav>
        )
    }
}
