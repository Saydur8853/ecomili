import { useState } from 'react';
import { Hidden, IconButton, InputAdornment, OutlinedInput, Stack, Tooltip } from '@mui/material';
import { FC } from 'react';
import { ListFilter, Search } from "lucide-react"
import FilterMenu from '../menus/filter-menu';
import AddNew from '../buttons/add-new';

type FilterProps = {
    placeholder?: string,
    searchQuery?: string,
    setSearchQuery?: React.Dispatch<React.SetStateAction<string>>,
    filterMenu?: boolean,
    btn?: boolean,
    handleBtn?: () => void,
    navigate?: string,

}

const Filter: FC<FilterProps> = ({ placeholder = "Search...", searchQuery, setSearchQuery, filterMenu = false, btn = true, handleBtn, navigate = '/dashboard' }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    return (
        <Stack direction={"row"} justifyContent={"flex-end"} alignItems={"center"} gap={1} mt={3} mb={2}>

            <Hidden smUp>
                {btn && <AddNew btnText={""} handleBtn={handleBtn} navigate={navigate} iconSize={20} iconColor="#D6EAF8" buttonSize='large' variant='outlined' />}
            </Hidden>

            <OutlinedInput
                name='search'
                size='small'
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setSearchQuery && setSearchQuery(e.currentTarget.value)}
                endAdornment={<InputAdornment position="end"><Search size={16} /></InputAdornment>}
            />


            {filterMenu &&
                <>
                    <Tooltip title="Filter">
                        <IconButton
                            aria-label="Filter"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={(e: any) => setAnchorEl(e.currentTarget)}>
                            <ListFilter size={25} />
                        </IconButton>
                    </Tooltip>

                    <FilterMenu
                        anchorEl={anchorEl}
                        setAnchorEl={setAnchorEl}
                        open={open} />
                </>}
        </Stack>
    );
};

export default Filter;
