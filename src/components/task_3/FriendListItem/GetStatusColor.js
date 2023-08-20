export const getStatusColor = props => {
    switch (props.isOnline) {
        case true:
            return "green";
        case false:
            return "red";
        default:
            return null;
    }
};

