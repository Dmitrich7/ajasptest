import React, {useEffect, useState} from 'react';
import './App.css';
import {
    createTheme, InputAdornment, Stack, TextField,
    ThemeProvider, Typography,
} from "@mui/material";
import MyAccordion from "./components/MyAccordion";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {getSystems} from "./store/reducers/ActionCreators";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import {filterSystems} from "./store/reducers/SystemsSlice";

const theme = createTheme({
    palette:{
        primary:{
            main: "#363636",
            light: "#5ASASA",
            dark: "#000000"
        }
    }
})

function App() {
    const dispatch = useAppDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const filteredSystems = useAppSelector(state => filterSystems(state, searchQuery));
    useEffect(()=>{
        dispatch(getSystems())
    },[])
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Stack bgcolor={'#ECECEC'}>
                    <Stack justifyContent={"space-between"} direction={"row"} marginTop={"16px"} marginLeft={"1%"} marginBottom={"25px"}>
                        <Typography fontFamily={"Mulish"} variant={"h5"}>Загрузка интеграционных данных</Typography>
                        <Stack marginRight={"1%"}>
                            <TextField
                                size={"small"}
                                sx={{ backgroundColor:"white","& fieldset": { border: 'none' }}} placeholder="Поиск"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setSearchQuery(e.target.value);
                                    console.log(e.target.value)
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position={"end"}>
                                            <SearchSharpIcon/>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Stack>
                    </Stack>
                    {filteredSystems.map((system,index)=>(
                        <MyAccordion key={index} system={system}/>
                    ))}
                </Stack>
            </div>
        </ThemeProvider>
    );
};

export default App;
