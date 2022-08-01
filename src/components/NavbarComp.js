import React, { Component } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

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
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/pricing">Pricing</CustomLink>
                            <CustomLink to="/about">About</CustomLink>
                        </ul>
                    </div>
                </div>
          </nav>
        )
    }
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
