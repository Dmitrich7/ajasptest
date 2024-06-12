import React, {FC} from 'react';
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import ErrorOutlineSharpIcon from '@mui/icons-material/ErrorOutlineSharp';
import WarningAmberSharpIcon from '@mui/icons-material/WarningAmberSharp';
import {Statuses} from "../models/Systems";

interface StatusIconProps {
    status:Statuses
}

const StatusIcon: FC<StatusIconProps> = ({status}) => {
    switch(status){
        case 'Успешно':
            return <CheckCircleOutlineSharpIcon sx={{ fontSize: '1.5rem'}}/>
        case 'Ошибка':
            return <ErrorOutlineSharpIcon sx={{ fontSize: '1.5rem'}}/>
        case 'С предупреждением':
            return <WarningAmberSharpIcon sx={{ fontSize: '1.5rem'}}/>
    }

};

export default StatusIcon;
