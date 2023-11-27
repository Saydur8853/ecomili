
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    TablePagination,
    SxProps,
    Theme,
    TablePropsSizeOverrides,
    Avatar,
    Checkbox,
} from '@mui/material';
import { Image, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { OverridableStringUnion } from '@mui/types';
import StatusCheck from '../common/status-check';
import { blueGrey, grey } from '@mui/material/colors';
import { getLocalDate, getLocalDateTime } from '../../lib/utils';

type Column = {
    id: string | number,
    label: string | number | null,
    align?: "left" | "right" | "center" | "inherit" | "justify" | undefined,
    fontWeight?: "normal" | "bold",
    dateTime?: boolean,
    date?: boolean,
    amount?: boolean,
    photo?: boolean,
};

type ReusableTableProps = {
    columns: Column[],
    data: any[],
    totalData?: number,
    actions?: boolean,
    setSelectedRow?: React.Dispatch<React.SetStateAction<null>>
    page?: number | undefined,
    limit?: number | undefined,
    setPage?: React.Dispatch<React.SetStateAction<number>> | undefined,
    setLimit?: React.Dispatch<React.SetStateAction<number>> | undefined,
    containerStyle?: SxProps<Theme> | undefined,
    size?: OverridableStringUnion<"small" | "medium", TablePropsSizeOverrides> | undefined,
    status?: boolean,
    open?: boolean,
    setAnchorEl?: React.Dispatch<React.SetStateAction<null>>,
    handleRowSelection?: (selected: any[]) => void,

    selectedRows?: any[],
    setSelectedRows?: React.Dispatch<React.SetStateAction<any[]>>
    children?: React.ReactNode,
}

const ReusableTable = ({ columns, data, actions, setSelectedRow, selectedRows, setSelectedRows, totalData, page = 1, limit = 10, setPage, setLimit, setAnchorEl, open = false, size = "medium", status = false, handleRowSelection, children }: ReusableTableProps) => {
    const navigate = useNavigate();

    const handleClick = (event: any, row: any) => {
        setAnchorEl && setAnchorEl(event.currentTarget);
        setSelectedRow && setSelectedRow(row);
    };
    const handlePageChange = (_: any, newPage: number) => {
        setPage && setPage(newPage);

        navigate(`?page=${newPage + 1}&limit=${limit}`);
    };

    const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newLimit = parseInt(e.target.value, 10);
        setLimit && setLimit(newLimit);
        setPage && setPage(0);

        navigate(`?page=1&limit=${newLimit}`);
    };



    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (setSelectedRows) {
            if (event.target.checked) {
                const newSelecteds = data.map((row) => row.id); // Replace 'id' with your unique row identifier
                setSelectedRows(newSelecteds);
                handleRowSelection && handleRowSelection(newSelecteds);
            } else {
                setSelectedRows([]);
                handleRowSelection && handleRowSelection([]);
            }
        }
    };

    const handleRowClick = (event: React.MouseEvent<unknown>, row: any) => {
        if (selectedRows && setSelectedRows) {
            const selectedIndex = selectedRows.indexOf(row.id); // Replace 'id' with your unique row identifier
            let newSelected: any[] = [];

            if (selectedIndex === -1) {
                newSelected = newSelected.concat(selectedRows, row.id); // Replace 'id' with your unique row identifier
            } else if (selectedIndex === 0) {
                newSelected = newSelected.concat(selectedRows.slice(1));
            } else if (selectedIndex === selectedRows.length - 1) {
                newSelected = newSelected.concat(selectedRows.slice(0, -1));
            } else if (selectedIndex > 0) {
                newSelected = newSelected.concat(
                    selectedRows.slice(0, selectedIndex),
                    selectedRows.slice(selectedIndex + 1)
                );
            }

            setSelectedRows(newSelected);
            handleRowSelection && handleRowSelection(newSelected);
        }
    };




    return (
        <TableContainer   >
            <Table size={size} sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ bgcolor: grey[100] }}>

                        {selectedRows && <TableCell align="center">
                            <Checkbox
                                size='small'
                                indeterminate={
                                    selectedRows.length > 0 && selectedRows.length < data.length
                                }
                                checked={selectedRows.length === data.length}
                                onChange={handleSelectAllClick}
                            />
                        </TableCell>}

                        <TableCell align="center" sx={{ fontWeight: "bold" }} >SL.</TableCell>
                        {columns.map((column: any, index: number) => (
                            <TableCell key={index} align={column?.align || "left"} sx={{ fontWeight: column?.fontWeight || "bold" }}>{column.label}</TableCell>
                        ))}
                        {status && <TableCell align="center" sx={{ fontWeight: "bold" }}>Status</TableCell>}
                        {actions && <TableCell align="center" sx={{ fontWeight: "bold" }}>Action</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>

                    {data?.length === 0 ?
                        <TableRow sx={{ textAlign: "center" }}><TableCell align="center" sx={{ fontWeight: 'medium' }} colSpan={columns?.length + 3 || 3}>No records found.</TableCell></TableRow> :
                        data?.map((row: any, index: number) => (
                            <TableRow key={index} hover onClick={(event) => handleRowClick(event, row)}>

                                {selectedRows && <TableCell align="center">
                                    <Checkbox
                                        size='small'
                                        checked={selectedRows.indexOf(row.id) !== -1}
                                    />
                                </TableCell>}

                                <TableCell align="center">{index + 1}</TableCell>
                                {columns.map((column, index: number) => (
                                    <TableCell key={index} align={columns[index]?.align} >
                                        {
                                            columns[index]?.dateTime ?
                                                getLocalDateTime(row[column.id]) :
                                                columns[index]?.date ?
                                                    getLocalDate(row[column.id]) :
                                                    columns[index]?.photo ?
                                                        <Avatar sx={{ bgcolor: blueGrey[100], margin: "0 auto" }} variant="rounded">
                                                            <Image />
                                                        </Avatar> :
                                                        row[column.id]
                                        }
                                    </TableCell>
                                ))}

                                {status && <TableCell align="center" width={120}> <StatusCheck status={row?.isActive} /> </TableCell>}
                                {actions ? (
                                    <TableCell align="center">
                                        <IconButton
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={(e: any) => handleClick(e, row)}  >
                                            <MoreVertical />
                                        </IconButton>

                                    </TableCell>
                                ) : ""}

                            </TableRow>
                        ))}
                </TableBody>
            </Table>

            <TablePagination
                component="div"
                count={totalData || 0}
                page={page}
                onPageChange={handlePageChange}
                rowsPerPage={limit}
                onRowsPerPageChange={handleLimitChange}
                sx={{ overflow: 'visible' }}
            />

            {children}

        </TableContainer>

    );
};

export default ReusableTable;
