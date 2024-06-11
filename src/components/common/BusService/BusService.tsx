import { Box, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useMemo } from 'react';

import { ServicersBus } from '@/components/common/BusService/ServicersBus';
import { IBus } from '@/interface/IBus';

const color = grey[700];
const colorIcon = grey[800];
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
                    spacing={0.5}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                >
                    {data.map(item => (
                        <Box
                            sx={{
                                color: colorIcon,
                            }}
                            display={'flex'}
                            key={item.name}
                        >
                            {item.component}
                        </Box>
                    ))}
                </Stack>
            ) : null}
        </>
    );
};
