import React from "react";
import CustomTextField from "../CustomTextField";

function AmountInput({
    onChange,
    ...props
}) {
    const _onChange = (e) => {
        const {
            value
        } = e.target;
        if (value === ".") {
            e.target.value = "";
        }
        const dotIndex = value.indexOf(".");
        if (dotIndex > 0) {
            value.replace(".", "");
            e.target.value =
                value.substring(0, dotIndex + 1) +
                value
                .substring(dotIndex, value.length)
                .replace(/\./g, "")
                .substring(0, 8);
        }
        onChange(e);
    };

    return <CustomTextField { ...props
    }
    onChange = {
        _onChange
    }
    type = "text" / > ;
}

export default AmountInput;