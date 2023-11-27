import { useState } from "react";
import ActionMenu from "../../components/menus/action-menu";
import DeleteDialog from "../../components/dialogs/delete-dialog";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import Page from "../../layouts/Page";
import ReusableTable from "../../components/tables/reusable-table";
import PageHeader from "../../layouts/PageHeader";
import Filter from "../../components/forms/filter";
import { Paper, Stack } from "@mui/material";
import ConfirmDialog from "../../components/dialogs/confirm-dialog";

const ManageArchievedNews = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { search } = useLocation();
    const parsed: queryString.ParsedQuery<string> = queryString.parse(search);
    const initialPage = parsed.page ? Number(parsed.page) - 1 : 0;
    const initialLimit = parsed.limit ? Number(parsed.limit) : 10;
    const [page, setPage] = useState(initialPage);
    const [limit, setLimit] = useState(initialLimit);
    const [_, setRowData] = useState<any | null>(null); //eslint-disable-line
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [archieveConfirmDialog, setArchieveConfirmDialog] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const open = Boolean(anchorEl);
    // const queryClient = useQueryClient();



    return (
        <Page title="Manage News">
            <PageHeader
                title="Manage News"
                btnText="Add News"
                navigate="/news/add-news"
                currentPage="Manage News" />

            <Stack component={Paper} className="rad-grad" pb={2} >
                <Filter
                    key={"News"}
                    placeholder="Search..."
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    filterMenu
                    navigate="/news/add-news" />

                <ReusableTable
                    data={[]}
                    columns={[
                        { id: 'title', label: 'Title', align: "left", fontWeight: "bold" },
                        { id: 'featuredImage', label: 'Featured Image', align: "center", fontWeight: "bold", photo: true },
                        { id: 'category', label: 'Category', align: "left", fontWeight: "bold" },
                        { id: 'source', label: 'Source', align: "center", fontWeight: "bold" }]}
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
                    totalData={100} />
            </Stack>




            <ActionMenu
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                open={open}
                handleDeleteDialog={() => setDeleteDialog(true)}
                handleCustomDialog={() => setArchieveConfirmDialog(true)}
                customMenuTitle={"Archieve"}
            />


            {deleteDialog && <DeleteDialog setOpenDialog={setDeleteDialog} openDialog={deleteDialog} />}
            {archieveConfirmDialog && <ConfirmDialog setOpenDialog={setArchieveConfirmDialog} openDialog={archieveConfirmDialog} />}


        </Page>
    )
}

export default ManageArchievedNews;