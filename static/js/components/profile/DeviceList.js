import React, {
    useEffect
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    Container,
    List,
    Segment
} from "semantic-ui-react";
import {
    _getDeviceList,
    _getLoginActivity
} from "../../actions/userActions";
import {
    formatTime
} from "../../settings/format";

function DeviceList() {
    const {
        user
    } = useSelector((state) => state);
    const {
        device
    } = user;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(_getDeviceList());
        dispatch(_getLoginActivity());
    }, [dispatch]);

    return (
        device && ( <
            div className = "device-list mt-20" >
            <
            List divided verticalAlign = "middle" > {
                device.map((d, index) => {
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
                        } < /Container> <
                        /List.Header> <
                        List.Description as = "div" >
                        <
                        Container fluid > {
                            formatTime(d.time)
                        } < /Container> <
                        /List.Description> <
                        /List.Content> <
                        List.Content >
                        <
                        List.Header as = "p" > {
                            d.name
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

export default DeviceList;