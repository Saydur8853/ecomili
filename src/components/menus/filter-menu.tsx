import { Button, Menu, PopoverVirtualElement, Stack, Typography } from '@mui/material';
import { Filter } from 'lucide-react';


type FilterMenuProps = {
    anchorEl: Element | (() => Element) | PopoverVirtualElement | (() => PopoverVirtualElement) | null | undefined,
    open: boolean,
    setAnchorEl: any
}

const FilterMenu = ({ anchorEl, open, setAnchorEl }: FilterMenuProps) => {
    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(!anchorEl)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }} >

            <Stack px={2} py={1} gap={1}>
                <Typography fontWeight={"bold"} >Filter Results By</Typography>

                <Button variant="contained" type="submit" color="primary" size='small' fullWidth>
                    <Stack direction="row" alignItems='center' gap={1} fontWeight={'bold'} textTransform="capitalize">
                        <Filter size={15} />
                        Filter
                    </Stack>
                </Button>
            </Stack>

        </Menu>
    );
};

export default FilterMenu;