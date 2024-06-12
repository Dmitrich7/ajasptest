import React, {FC, useState} from 'react';
import {Button, Checkbox, FormControlLabel, Stack, Typography} from "@mui/material";
import {CheckedStreams, IStream, IStreamSwitches, Streams} from "../models/Systems";
import MySwitch from "./MySwitch";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import FilterListSharpIcon from "@mui/icons-material/FilterListSharp";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import SystemStreamsSlice, {systemStreamsSlice} from "../store/reducers/SystemStreamsSlice";
import {postSystemStreams} from "../store/reducers/ActionCreators";

interface MyAccordionContentProps {
    stream: IStream[],
    systemId: number
}

const MyAccordionContent:FC<MyAccordionContentProps> = ({stream, systemId}) => {

    const {checkedStreams,isLoading} = useAppSelector(state => state.systemStreamsReducer)
    const systemStreamsSliceActions = systemStreamsSlice.actions;
    const dispatch = useAppDispatch();

    const checkAll = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.checked===true){
            dispatch(systemStreamsSliceActions.checkAll())
        }else{
            dispatch(systemStreamsSliceActions.uncheckAll())
        }
    }

    const addSwitch = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(checkedStreams[e.target.value]===undefined){
            dispatch(systemStreamsSliceActions.addSwitch(e))
        }else{
            dispatch(systemStreamsSliceActions.removeSwitch(e))
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value==="CheckAll"){
            checkAll(e)
        }else{
            addSwitch(e)
        }
    }

    const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(systemStreamsSliceActions.setStreamSwitch(e))
    }
    console.log(isLoading)
    return (
        <>
            <Stack  direction={"row"}>
                <Stack width={"100%"} justifyContent={"space-between"} direction={"row"}>
                    <Stack paddingTop={"5px"}>
                        <FormControlLabel
                            control={<Checkbox checked={checkedStreams[Streams.DETALIZATION]===undefined?false:true} value={Streams.DETALIZATION} onChange={e=>handleChange(e)}/>} label={Streams.DETALIZATION} />
                        <Typography display={"flex"} alignItems={"end"} height={"42px"}>Объекты репозитория</Typography>
                        <FormControlLabel
                            control={<Checkbox checked={checkedStreams[Streams.PROFILES]===undefined?false:true} value={Streams.PROFILES} onChange={e=>handleChange(e)}/>} label={Streams.PROFILES}/>
                        <FormControlLabel
                            control={<Checkbox checked={checkedStreams[Streams.ROLES]===undefined?false:true} value={Streams.ROLES} onChange={e=>handleChange(e)}/>} label={Streams.ROLES}/>
                        <FormControlLabel
                            control={<Checkbox checked={checkedStreams[Streams.USERS]===undefined?false:true} value={Streams.USERS} onChange={e=>handleChange(e)}/>} label={Streams.USERS}/>
                    </Stack>
                    <Stack paddingTop={"7px"}>
                        <Typography color={"primary"} height={"42px"} fontSize={"12px"} display={"flex"} alignItems={"center"}>Последняя синхронизация: {stream[0].last_sync_date}</Typography>
                        <Typography height={"42px"}></Typography>
                        <Typography color={"primary"} fontSize={"12px"} display={"flex"} alignItems={"center"} height={"42px"}>Последняя синхронизация: {stream[1].last_sync_date}</Typography>
                        <Typography color={"primary"} fontSize={"12px"} display={"flex"} alignItems={"center"} height={"42px"}>Последняя синхронизация: {stream[2].last_sync_date}</Typography>
                        <Typography color={"primary"} fontSize={"12px"} display={"flex"} alignItems={"center"} height={"42px"}>Последняя синхронизация: {stream[3].last_sync_date}</Typography>
                    </Stack>
                    <Stack aria-label={"load_delta"}>
                        <FormControlLabel
                            label={<Typography fontSize={"12px"}>Загрузка дельты</Typography>}
                            labelPlacement={"top"}
                            control={<MySwitch disabled={checkedStreams[Streams.DETALIZATION]===undefined}
                                               onChange={e=>handleSwitch(e)}
                                               checked={checkedStreams[Streams.DETALIZATION]===undefined?false:checkedStreams[Streams.DETALIZATION]?.load_delta}
                                               value={Streams.DETALIZATION}/>}
                        ></FormControlLabel>
                        <Typography height={"65px"}></Typography>
                        <Stack display={"flex"} alignItems={"center"} height={"42px"}>
                            <MySwitch disabled={checkedStreams[Streams.PROFILES]===undefined}
                                      onChange={e=>handleSwitch(e)}
                                      checked={checkedStreams[Streams.PROFILES]===undefined?false:checkedStreams[Streams.PROFILES]?.load_delta}
                                      value={Streams.PROFILES}></MySwitch>
                        </Stack>
                        <Stack display={"flex"} alignItems={"center"} height={"42px"}>
                            <MySwitch disabled={checkedStreams[Streams.ROLES]===undefined}
                                      onChange={e=>handleSwitch(e)}
                                      checked={checkedStreams[Streams.ROLES]===undefined?false:checkedStreams[Streams.ROLES]?.load_delta}
                                      value={Streams.ROLES}></MySwitch>
                        </Stack>
                        <Stack display={"flex"} alignItems={"center"} height={"42px"}>
                            <MySwitch disabled={checkedStreams[Streams.USERS]===undefined}
                                      onChange={e=>handleSwitch(e)}
                                      checked={checkedStreams[Streams.USERS]===undefined?false:checkedStreams[Streams.USERS]?.load_delta}
                                      value={Streams.USERS}></MySwitch>
                        </Stack>
                    </Stack>
                    <Stack aria-label={"sync_future_assignments"}>
                        <FormControlLabel
                            label={<Typography fontSize={"12px"}>Синхронизация будущих присвоений</Typography>}
                            labelPlacement={"top"}
                            control={<MySwitch disabled={checkedStreams[Streams.DETALIZATION]===undefined}
                                               onChange={e=>handleSwitch(e)}
                                               checked={checkedStreams[Streams.DETALIZATION]===undefined?false:checkedStreams[Streams.DETALIZATION]?.sync_future_assignments}
                                               value={Streams.DETALIZATION}/>}></FormControlLabel>
                        <Typography height={"65px"}></Typography>
                        <Stack display={"flex"} alignItems={"center"} height={"42px"}>
                            <MySwitch disabled={checkedStreams[Streams.PROFILES]===undefined}
                                      onChange={e=>handleSwitch(e)}
                                      checked={checkedStreams[Streams.PROFILES]===undefined?false:checkedStreams[Streams.PROFILES]?.sync_future_assignments}
                                      value={Streams.PROFILES}></MySwitch>
                        </Stack>
                        <Stack display={"flex"} alignItems={"center"} height={"42px"}>
                            <MySwitch disabled={checkedStreams[Streams.ROLES]===undefined}
                                      onChange={e=>handleSwitch(e)}
                                      checked={checkedStreams[Streams.ROLES]===undefined?false:checkedStreams[Streams.ROLES]?.sync_future_assignments}
                                      value={Streams.ROLES}></MySwitch>
                        </Stack>
                        <Stack display={"flex"} alignItems={"center"} height={"42px"}>
                            <MySwitch disabled={checkedStreams[Streams.USERS]===undefined}
                                      onChange={e=>handleSwitch(e)}
                                      checked={checkedStreams[Streams.USERS]===undefined?false:checkedStreams[Streams.USERS]?.sync_future_assignments}
                                      value={Streams.USERS}></MySwitch>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Typography paddingTop={"15px"} marginRight={5}>
                            Запланирован в...
                            <ArrowForwardIosSharpIcon sx={{ fontSize: '0.7rem'}}/>
                        </Typography>
                        <Typography paddingTop={"62px"} marginRight={5}>
                            Запланирован в...
                            <ArrowForwardIosSharpIcon sx={{ fontSize: '0.7rem'}}/>
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack justifyContent={"space-between"} direction={"row"}>
                <FormControlLabel
                    control={<Checkbox value={"CheckAll"}
                                       onChange={e=>handleChange(e)}
                    />}
                    label="Выбрать всё" />
                <Stack direction={"row"}>
                    <Button startIcon={<FilterListSharpIcon/>} color="primary" variant="text">Настроить планирование синхр.</Button>
                    <Button disabled={isLoading} onClick={()=>dispatch(postSystemStreams({systemId,checkedStreams}))} variant={"contained"}>Запустить синхр. данных</Button>
                </Stack>
            </Stack>
        </>
    );
};

export default MyAccordionContent;
