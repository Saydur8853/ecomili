import { Button, CircularProgress, Stack } from '@mui/material';
import { } from 'react';
import { Search } from 'lucide-react';

type SearchButtonProps = {
    isLoading?: boolean,
    buttonText?: string,
    onClick?: () => void
}

const SearchButton = ({ isLoading = false, buttonText = "Search", onClick }: SearchButtonProps) => {
    return (
        <Button onClick={onClick} variant="outlined" disabled={isLoading} type="submit" color="primary" size='medium' sx={{ py: 0.8 }} >
            <Stack direction="row" alignItems='center' gap={1} fontWeight={'bold'} textTransform="capitalize">
                {isLoading ? <CircularProgress size={18} /> : <Search size={20} />}
                {buttonText}
            </Stack>
        </Button>
    );
};

export default SearchButton;