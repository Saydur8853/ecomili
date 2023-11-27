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
import InfobiteDialog from "../../components/dialogs/infobite-dialog";

const ManageInfobit = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { search } = useLocation();
    const parsed: queryString.ParsedQuery<string> = queryString.parse(search);
    const initialPage = parsed.page ? Number(parsed.page) - 1 : 0;
    const initialLimit = parsed.limit ? Number(parsed.limit) : 10;
    const [page, setPage] = useState(initialPage);
    const [limit, setLimit] = useState(initialLimit);
    const [rowData, setRowData] = useState<any | null>(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [addNewDialog, setAddNewDialog] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const open = Boolean(anchorEl);
    // const queryClient = useQueryClient();



    return (
        <Page title="Manage Infobite">
            <PageHeader
                title="Manage Infobite"
                btnText="Add Infobite"
                handleBtn={() => {
                    setRowData(null);
                    setAddNewDialog(true);
                }}
                currentPage="Manage Infobites" />

            <Stack component={Paper} className="rad-grad" pb={2} >
                <Filter
                    key={"Infobite"}
                    placeholder="Search..."
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    filterMenu
                    handleBtn={() => {
                        setRowData(null);
                        setAddNewDialog(true);
                    }} />

                <ReusableTable
                    data={[]}
                    columns={[
                        { id: 'title', label: 'Title', align: "left", fontWeight: "bold" },
                        { id: 'image', label: 'Image', align: "center", fontWeight: "bold", photo: true },
                        { id: 'published', label: 'Published', align: "center", fontWeight: "bold" }]}
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
                hanldeEdit={() => setAddNewDialog(true)}
                handleDeleteDialog={() => setDeleteDialog(true)}
            />


            {deleteDialog && <DeleteDialog setOpenDialog={setDeleteDialog} openDialog={deleteDialog} />}
            {addNewDialog && <InfobiteDialog setOpenDialog={setAddNewDialog} openDialog={addNewDialog} metadata={{ id: rowData?.id }} />}

        </Page>
    )
}

export default ManageInfobit;