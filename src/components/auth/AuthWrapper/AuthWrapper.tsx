'use client';

import { Stack, Typography } from '@mui/material';
import { LocaleChange } from '@/components/common/LocaleChange';
import { grey } from '@mui/material/colors';
import Link from 'next/link';
import { Locale } from '@/i18n.config';
import Button from '@mui/material/Button';
import { loginStaticDataPageProp } from '@/interface/IStaticData';
import theme from '@/theme';

interface IContentProps {
    children: React.ReactNode;
    title: string;
    pages: loginStaticDataPageProp[];
    lang: Locale;
}
export const AuthWrapper = (props: IContentProps) => {
    return (
        <Stack direction={'column'} sx={{ margin: 'auto' }}>
            <Typography component="h1" variant="h5" color={'primary.dark'}>
                {props.title}
            </Typography>
            {props.children}
            <Stack mt={1} display={'flex'} alignItems={'center'} spacing={1} direction={'row'}>
                <LocaleChange weight={'500'} color={'primary.dark'} lang={props.lang} />
                {props.pages.map(el => (
                    <Link href={`/${props.lang}${el.path}`} key={el.id}>
                        <Button
                            sx={{
                                textTransform: 'none',
                                color: 'primary.dark',
                            }}
                            variant={'text'}
                        >
                            {el.title}
                        </Button>
                    </Link>
                ))}
            </Stack>
        </Stack>
    );
};
