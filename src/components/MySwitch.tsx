import React, {FC} from 'react';
import {styled, SwitchProps} from "@mui/material";
import Switch from "@mui/material/Switch";

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(20px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(105%)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#B7B7B7' : '#B7B7B7',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 14,
        height: 14,
        borderRadius: 50,
        border: "1px solid #B7B7B7",
    },
    '& .MuiSwitch-track': {
        borderRadius: 50,
        border: "1px solid #B7B7B7",
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgb(255,255,255)',
        boxSizing: 'border-box',
    },
}));

interface MySwitchProps extends SwitchProps{

}

const MySwitch:FC<MySwitchProps> = (props) => {
    return (
        <AntSwitch {...props}/>
    );
};

export default MySwitch;
