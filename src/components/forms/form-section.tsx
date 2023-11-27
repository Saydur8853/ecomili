import { Divider, Grid, Stack, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

type FormSectionProps = {
    title?: string,
    mt?: number,
    mb?: number,
    xs?: number,
    md?: number,
    alignItems?: string,
    children?: any
}

const FormSection: FC<FormSectionProps> = ({ title, mt = 0, mb = 0, xs = 12, md = 6, alignItems = "", children }) => {
    let childrens = [];
    !children?.length ? childrens.push(children) : childrens = [...children];

    return (
        <Stack mt={mt} mb={mb}>
            {title &&
                <>
                    <Typography variant="body1" fontWeight="bold">{title}</Typography>
                    <Divider sx={{ mb: 2 }} />
                </>}


            <Grid container spacing={2} alignItems={alignItems}>
                {childrens?.map((item: ReactNode, i: number) =>
                    <Grid item xs={xs} md={md} key={i}>
                        {item}
                    </Grid>)}
            </Grid>
        </Stack>
    );
};

export default FormSection;