import { useState } from "react";
import ActionMenu from "../../components/menus/action-menu";
import DeleteDialog from "../../components/dialogs/delete-dialog";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import Page from "../../layouts/Page";
import ReusableTable from "../../components/tables/reusable-table";
import PageHeader from "../../layouts/PageHeader";
import Filter from "../../components/forms/filter";
import { Grid, MenuItem, Paper, Select, Stack, Typography } from "@mui/material";
import ConfirmDialog from "../../components/dialogs/confirm-dialog";
import { news_data } from "../../_mock/data";
import { newsStatuses } from "../../utils/constants";



const ManageNews = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { search } = useLocation();
    const parsed: queryString.ParsedQuery<string> = queryString.parse(search);
    const initialPage = parsed.page ? Number(parsed.page) - 1 : 0;
    const initialLimit = parsed.limit ? Number(parsed.limit) : 10;
    const [page, setPage] = useState(initialPage);
    const [limit, setLimit] = useState(initialLimit);
    const [rowData, setRowData] = useState<any | null>(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [archieveConfirmDialog, setArchieveConfirmDialog] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const open = Boolean(anchorEl);
    // const queryClient = useQueryClient();

    const [selectedRows, setSelectedRows] = useState<any[]>([]);
    const [newsStatus, setNewsStatus] = useState<string>("");







    return (
        <Page title="Manage News">
            <PageHeader
                title="Manage News"
                btnText="Add News"
                navigate="/news/add-news"
                currentPage="Manage News" />

            <Stack component={Paper} className="rad-grad">
                <Grid container flexDirection={"row"} justifyContent={selectedRows?.length > 0 ? "space-between" : "flex-end"} alignItems={"center"} gap={2}>
                    {selectedRows?.length > 0 &&
                        <>
                            <Grid item md={2.5} pl={2}>
                                <Typography>{selectedRows?.length} rows selected. </Typography>

                                <Select
                                    fullWidth
                                    size="small"
                                    className="basic-single"
                                    value={newsStatus}
                                    onChange={(event) => {
                                        setNewsStatus(event.target.value);
                                    }}>

                                    <MenuItem value={""} disabled>Select Status </MenuItem>

                                    {newsStatuses.map((option: { value: string, label: string }) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>

                            </Grid>
                        </>
                    }


                    <Grid item xs={8} md={"auto"}>
                        <Filter
                            key={"News"}
                            placeholder="Search..."
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            filterMenu
                            navigate="/news/add-news" />
                    </Grid>
                </Grid>

                <ReusableTable
                    data={news_data}
                    columns={[
                        { id: 'title', label: 'Title', align: "left", fontWeight: "bold" },
                        { id: 'featuredImage', label: 'Featured Image', align: "center", fontWeight: "bold", photo: true },
                        { id: 'category', label: 'Category', align: "left", fontWeight: "bold" },
                        { id: 'source', label: 'Source', align: "center", fontWeight: "bold" },
                        { id: 'featured', label: 'Featured', align: "center", fontWeight: "bold" },]}
                    containerStyle={{ mt: 10 }}
                    actions
                    status
                    page={page}
                    setSelectedRow={setRowData}
                    setPage={setPage}
                    limit={limit}
                    setLimit={setLimit}
                    setAnchorEl={setAnchorEl}
                    open={open}
                    totalData={100}
                    selectedRows={selectedRows}
                    setSelectedRows={setSelectedRows}
                />
            </Stack>




            <ActionMenu
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                open={open}
                editUrl={`/news/edit-news/${rowData?.id}`}
                viewUrl={`/news/view-news/${rowData?.id}`}
                handleDeleteDialog={() => setDeleteDialog(true)}
                handleCustomDialog={() => setArchieveConfirmDialog(true)}
                customMenuTitle="Archieve"
            />


            {deleteDialog && <DeleteDialog setOpenDialog={setDeleteDialog} openDialog={deleteDialog} />}
            {archieveConfirmDialog && <ConfirmDialog setOpenDialog={setArchieveConfirmDialog} openDialog={archieveConfirmDialog} />}


        </Page>
    )
}

export default ManageNews;