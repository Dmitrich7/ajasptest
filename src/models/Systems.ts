export interface IStream{
    id: number;
    name: string;
    last_sync_date: string;
    last_sync_time: string;
    status: Statuses;
}

export type Statuses = "Успешно"|"Ошибка"|"С предупреждением";

export interface ISystems{
    id: number;
    description: string;
    name: string;
    last_sync_date: string;
    last_sync_time: string;
    status: Statuses;
    streams: IStream[];
}


export enum Streams{
    DETALIZATION= "Детализация полномочий",
    PROFILES = "Профили",
    ROLES = "Роли",
    USERS = "Пользователи"
}

export interface IStreamSwitches {
    load_delta: boolean;
    sync_future_assignments: boolean;
}

export const CheckedStreams: Record<string, undefined|IStreamSwitches> = {
    [Streams.DETALIZATION]: undefined,
    [Streams.PROFILES]: undefined,
    [Streams.ROLES]: undefined,
    [Streams.USERS]: undefined,
}
