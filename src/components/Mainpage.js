import React from "react";
import kidpng from "../assets/sclkids.png";
import ficklogo from "../assets/Frame 1.png";
import "../assets/css/font.css";
import Marquee from "react-fast-marquee";
import formlines from "../assets/formbg.png";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



export const Mainpage = () => {
  return (
    <>
     <AppBar style={{background:"#2A2A2A "}} position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img  style={{width:"150px"}} src={ficklogo}/>
            
          </IconButton>
          
        </Toolbar>
      </AppBar>

      <div
        style={{
          background: "#000",
          height: "auto",
          width: "auto"
        }}
      >
        <div className="mx-4 text-start ">
          <h1
            style={{ fontSize: "132px", color: "#fff", fontFamily: "Radion" }}
          >
            Unlock the
            <br />
            Quest of
            <span
              style={{
                background:
                  "-webkit-linear-gradient(45deg, #EA21C7 30%, #4799F8 90%)",
                fontFamily: "Blueberry",
                textTransform: "none",
                webkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              {" "}
              {"<"}Fickle{">"}
            </span>
          </h1>
        </div>
        <div
          style={{
            background: "#28C0EC",
            height: "10vh",
            width: "100%",
            transform: "rotate(-4deg)",
            overflow: "hidden",
            marginTop: "50px",
            borderTop: "4px solid #fff",
            borderBottom: "4px solid #fff",
            position: "sticky"
          }}
        >
          <Marquee pauseOnHover gradient={false} speed={100}>
            <div className="d-flex justify-content-center align-items-center">
              <h2
                style={{
                  fontSize: "54px",
                  fontWeight: "600",
                  fontFamily: "Radion",
                  color: "#fff"
                }}
              >
                Using Fickle - Register now - Using Fickle -{" "}
              </h2>
              <h2
                style={{
                  fontSize: "54px",
                  fontWeight: "600",
                  fontFamily: "Radion",
                  color: "#fff"
                }}
              >
                {" "}
                Register now - Using Fickle - Register now -{" "}
              </h2>
            </div>
          </Marquee>
        </div>
        <div className="col align-self-center" style={{ marginTop: "25vh" }}>
          <div style={{position:"absolute",left:"70vh",top:"20vh"}} className="row justify-content-center">
            <form>
            <div class="form-group ">
                <input
                  style={{
                    width: "500px",
                    height: "60px",
                    borderRadius: "0px",
                    boxShadow: " 6px 6px 0 0 #C512EB",
                    background: "#000",
                    color: "#fff",
                    fontFamily:"Radion",
                    fontSize:"24px",
                    border: "2px solid #fff"
                  }}
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-group">
                <input
                  style={{
                    width: "500px",
                    height: "60px",
                    borderRadius: "0px",
                    boxShadow: " 6px 6px 0 0 #4799F8",
                    background: "#000",
                    color: "#fff",
                    fontFamily:"Radion",
                    fontSize:"24px",
                    border: "2px solid #fff"
                  }}
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                />
              </div>
             

              <button
                style={{
                  backgroundImage:
                    " linear-gradient(to right top,#1774b2, #0271d0, #4868e7, #8753f1, #c512eb)",
                    color: "#fff",
                    fontFamily:"Radion",
                    fontSize:"24px",
                }}
                type="submit"
                class="btn btn-primary w-100"
              >
                Register
              </button>
            </form>
          </div>

          <img style={{ width: "50%",backgroundAttachment:"fixed" }} src={formlines} />
        </div>
        <img style={{ width: "50%", marginTop: "-12vh" }} src={kidpng}></img>
      </div>
    </>
  );
};
