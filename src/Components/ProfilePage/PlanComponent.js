import React, {useEffect, useState} from 'react';
import {Paper, Typography, Stack, Box, IconButton} from '@mui/material';
import {Save as SaveIcon} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import PublicIcon from '@mui/icons-material/Public';
import PublicOffIcon from '@mui/icons-material/PublicOff';
import PlanService from '../../API/PlanService';
import {handleLoginError} from '../../Objects/HandleLogin';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const PlanCard = ({plan}) => {
    const navigate = useNavigate()
    const [isPublic,
        setPublic] = useState(plan.public)

    useEffect(() => {})

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);

        const options = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false 
        };
      
        return date.toLocaleString('en-US', options);
    }

    return (
        <Paper
            elevation={3}
            style={{
            padding: '16px',
            margin: '8px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer'
        }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <Stack direction="row">
                <Typography variant="h6" gutterBottom>
                    Plan ID: {plan.id}
                </Typography>
                <IconButton
                    onClick={() => {
                        setPublic((isPublic) => !isPublic)
                        PlanService
                            .togglePlanPublicity(plan.id)
                            .catch((error) => {
                                handleLoginError(navigate, error, "/profile")
                            })
                }}>
                    {isPublic
                        ? (<PublicIcon/>)
                        : (<PublicOffIcon/>)}
                </IconButton>
                <IconButton
                    onClick={() => {
                    navigate("/", {
                        state: {
                            data: plan
                        }
                    })
                }}>
                    <CloudDownloadIcon/>
                </IconButton>
            </Stack>
            <Typography variant="body1">
                Save time: {formatTime(plan.saveTime)}
            </Typography>
            <Box
                position="absolute"
                top="16px"
                right="16px"
                style={{
                opacity: 0,
                transition: 'opacity 0.2s ease-in-out'
            }}
                className="save-icon"></Box>
        </Paper>
    );
}

const PlanComponent = ({plans}) => {
    return (
        <Box display="flex" flexWrap="wrap">
            {plans.length > 0
                ? (plans.map((plan) => (<PlanCard key={plan.id} plan={plan}/>)))
                : (
                    <Typography variant="body1" color="textSecondary">
                        No plans available.
                    </Typography>
                )}
        </Box>
    );
}

export default PlanComponent;
