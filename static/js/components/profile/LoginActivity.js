import React from "react";
import {
    useSelector
} from "react-redux";
import {
    Container,
    List
} from "semantic-ui-react";
import {
    formatTime
} from "../../settings/format";

function LoginActivity() {
    const {
        user
    } = useSelector((state) => state);
    const {
        activity
    } = user;

    return (
        activity && ( <
            div className = "login-list mt-20" >
            <
            List divided verticalAlign = "middle" > {
                activity.items.map((d, index) => {
                    return ( <
                        List.Item key = {
                            index
                        } >
                        <
                        List.Content floated = "right" >
                        <
                        List.Header as = "div" >
                        <
                        Container fluid > {
                            d.ip
                        } <
                        /Container> <
                        /List.Header> <
                        List.Description as = "div" >
                        <
                        Container fluid > {
                            formatTime(d.time)
                        } <
                        /Container> <
                        /List.Description> <
                        /List.Content> <
                        List.Content >
                        <
                        List.Header as = "p" > {
                            d.device
                        } < /List.Header> <
                        List.Description as = "p" > {
                            d.location
                        } < /List.Description> <
                        /List.Content> <
                        /List.Item>
                    );
                })
            } <
            /List> <
            /div>
        )
    );
}

export default LoginActivity;