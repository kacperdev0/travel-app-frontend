import React from "react";
import { Box } from "@mui/material";
import SingleLocationComponent from "./SingleLocationComponent";

const ListLocationsComponent = ({plans}) => {
    
    return (
        <Box 
        width="100%" 
        height="90hv" 
        display="flex" 
        flexDirection="column"
        padding="4vh" 
    >
        {plans.map((loc) => (
            <SingleLocationComponent location={loc} />
        ))}
    </Box>
    )
}

export default ListLocationsComponent;