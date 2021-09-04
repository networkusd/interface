import {
    Typography
} from "@material-ui/core";
import React, {
    useEffect
} from "react";

function ComingSoon() {
    return ( <
        div style = {
            {
                height: "calc(100vh - 62.63px)",
                backgroundImage: `url("../images/background.jpeg")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "50% 50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
            }
        } >
        <
        div style = {
            {
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.4)",
                position: "absolute",
                top: 0,
                zIndex: 0,
            }
        } >
        < /div> <
        div style = {
            {
                zIndex: 1,
                height: 300,
                width: 300,
                border: "2px solid #fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.4)",
                boxShadow: "rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px",
            }
        } >
        <
        Typography variant = "h4"
        className = "color-white text-bold" >
        COMING SOON <
        /Typography> <
        /div> <
        /div>
    );
}

export default ComingSoon;