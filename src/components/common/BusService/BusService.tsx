import { Box, Stack } from '@mui/material';
import React, { useMemo } from 'react';

import { ServicersBus } from '@/components/common/BusService/ServicersBus';
import { IBus } from '@/interface/IBus';
import theme from '@/theme';

interface IServiceBus {
    name: string;
    component: JSX.Element;
}

const serviceBus: IServiceBus[] = [
    { name: 'wifi', component: <ServicersBus.Wifi /> },
    { name: 'wc', component: <ServicersBus.Wc /> },
    { name: 'ac', component: <ServicersBus.Ac /> },
    { name: 'plug', component: <ServicersBus.Plug /> },
    { name: 'usb', component: <ServicersBus.Usb /> },
    { name: 'display', component: <ServicersBus.Display /> },
    { name: 'music', component: <ServicersBus.Music /> },
];

export const BusService = ({ busIdService }: { busIdService: string[] }) => {
    const service = function (busIdService: string[], serviceBus: IServiceBus[]) {
        let dataId: string[] = [];
        busIdService.forEach(el => dataId.push(el));
        return serviceBus.filter(item => busIdService.includes(item.name));
    };

    const data = useMemo(() => {
        return service(busIdService, serviceBus);
    }, [busIdService]);

    return (
        <>
            {busIdService?.length ? (
                <Stack
                    direction={'row'}
                    spacing={1}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                >
                    {data.map(item => (
                        <Box
                            display={'flex'}
                            key={item.name}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            {item.component}
                        </Box>
                    ))}
                </Stack>
            ) : null}
        </>
    );
};
