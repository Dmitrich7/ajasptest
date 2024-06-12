import {http, HttpResponse} from 'msw'

export const handlers = [
    http.get('/api/systems',(resolver)=>{
        return HttpResponse.json([
            {
                id: 1,
                name: 'ER5CLNT500',
                description: 'SAP ERP Production system',
                last_sync_date: "02.05.2023",
                last_sync_time: "12:55",
                status: "С предупреждением",
                streams: [
                    {
                        id: 1,
                        name: "Пользователи",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "Успешно"
                    },{
                        id: 1,
                        name: "Профили",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "С предупреждением"
                    },{
                        id: 1,
                        name: "Роли",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "С предупреждением"
                    },{
                        id: 1,
                        name: "детализация полномочий",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "С предупреждением"
                    }
                ]
            },{
                id: 1,
                name: 'ER1CLNT500',
                description: 'SAP ERP Production system',
                last_sync_date: "02.05.2023",
                last_sync_time: "12:55",
                status: "С предупреждением",
                streams: [
                    {
                        id: 1,
                        name: "Пользователи",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "Успешно"
                    },{
                        id: 1,
                        name: "Профили",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "С предупреждением"
                    },{
                        id: 1,
                        name: "Роли",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "С предупреждением"
                    },{
                        id: 1,
                        name: "детализация полномочий",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "С предупреждением"
                    }
                ]
            },{
                id: 1,
                name: 'HR4CLNT150',
                description: 'SAP HCM Development system',
                last_sync_date: "02.05.2023",
                last_sync_time: "12:55",
                status: "Успешно",
                streams: [
                    {
                        id: 1,
                        name: "Пользователи",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "Успешно"
                    },{
                        id: 1,
                        name: "Профили",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "С предупреждением"
                    },{
                        id: 1,
                        name: "Роли",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "С предупреждением"
                    },{
                        id: 1,
                        name: "детализация полномочий",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "С предупреждением"
                    }
                ]
            },{
                id: 1,
                name: 'HRSCLNT500',
                description: 'SAP HCM Testsystem',
                last_sync_date: "02.05.2023",
                last_sync_time: "12:55",
                status: "Ошибка",
                streams: [
                    {
                        id: 1,
                        name: "Пользователи",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "Успешно"
                    },{
                        id: 1,
                        name: "Профили",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "С предупреждением"
                    },{
                        id: 1,
                        name: "Роли",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "С предупреждением"
                    },{
                        id: 1,
                        name: "детализация полномочий",
                        last_sync_date: "29.04.2023",
                        last_sync_time: new Date().toLocaleTimeString(),
                        status: "С предупреждением"
                    }
                ]
            },
        ])
    }),
    http.get('/api/system_logs',(resolver)=>{
        return HttpResponse.json([
            {
                id: 1,
                name: "Пользователи",
                last_sync_date: "11.04.2024",
                last_sync_time: "11:00",
                status: "Успешно"
            },{
                id: 1,
                name: "Профили",
                last_sync_date: "11.04.2024",
                last_sync_time: "11:00",
                status: "С предупреждением"
            },{
                id: 1,
                name: "Роли",
                last_sync_date: "11.04.2024",
                last_sync_time: "11:00",
                status: "С предупреждением"
            },{
                id: 1,
                name: "детализация полномочий",
                last_sync_date: "11.04.2024",
                last_sync_time: "11:00",
                status: "С предупреждением"
            },
        ])
    }),
    http.post('/api/system_streams_sync',(resolver)=>{
        return HttpResponse.json()
    })
]
