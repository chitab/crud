import { AppBar, Grid } from "@mui/material";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header1-css">
      <AppBar position="static">
        <div className="header-container">
          <Grid container>
            <Grid
              container
              item
              sm={7}
              md={7}
              lg={7}
              spacing={1}
              justify="space-evenly"
              wrap="nowrap"
            >
              <div>
                <div className="header-title">
                  <Link to="/dashboard" className="link-title">
                    Home
                  </Link>
                </div>
              </div>
              <div>
                <div className="header-title">
                  <Link to="/addpost" className="link-title">
                    Post
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
