import React from "react";

const Typography = ({ type, children, ...rest }: any) => {
    return React.createElement(type, { ...rest }, children);
};

export default Typography;
