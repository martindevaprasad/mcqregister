import React from "react";
import kidpng from "../assets/sclkids.png";
import ficklogo from "../assets/Frame 1.png";
import "../assets/css/font.css";
import Marquee from "react-fast-marquee";
import formlines from "../assets/formbg.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import "../index.css";

export const Mainpage = () => {
  return (
    <>
      <AppBar
        sx={{
          "& .css-hyum1k-MuiToolbar-root": {
            paddingLeft: "80px"
          },
          "& .css-imktkw-MuiPaper-root-MuiAppBar-root":{
            backgroundColor:"rgba(79, 79, 79, 0.679)"
          }
        }}
        style={{ background: "#2A2A2A " }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img className="logo" src={ficklogo} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className="mainpage">
        <div className="mx-4 text-start ">
          <h1>
            Unlock the
            <br />
            Quest of
            <span className="gradtext">
              {" "}
              {"<"}Fickle{">"}
            </span>
          </h1>
        </div>
        <div className="marquebg">
          <Marquee pauseOnHover gradient={false} speed={100}>
            <div className="d-flex justify-content-center align-items-center">
              <h2>Using Fickle - Register now - Using Fickle - </h2>
              <h2> Register now - Using Fickle - Register now - </h2>
            </div>
          </Marquee>
        </div>
        <div className="col align-self-center gridcontainer">
          <div className="row justify-content-center formposition">
            <form>
              <div class="form-group mb-2 ">
                <input
                  type="text "
                  class="form-control inputform"
                  id="exampleInputPassword1"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-group mt-4">
                <input
                  type="email"
                  class="form-control inputform1"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                />
              </div>

              <button type="submit" class="btn btn-primary btun w-100 mt-2">
                Register
              </button>
            </form>
          </div>

          <img className="gridline" src={formlines} />
        </div>
        <img className="kidpng" src={kidpng}></img>
        <div className="marquebg1">
          <Marquee pauseOnHover gradient={false} speed={100}>
            <div className="d-flex justify-content-center align-items-center">
              <h2>Using Fickle - Register now - Using Fickle - </h2>
              <h2> Register now - Using Fickle - Register now - </h2>
            </div>
          </Marquee>
        </div>
        <img className="gridline" src={formlines} />
      </div>
    </>
  );
};
