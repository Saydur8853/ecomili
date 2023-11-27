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

const ManageNewsComments = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { search } = useLocation();
    const parsed: queryString.ParsedQuery<string> = queryString.parse(search);
    const initialPage = parsed.page ? Number(parsed.page) - 1 : 0;
    const initialLimit = parsed.limit ? Number(parsed.limit) : 10;
    const [page, setPage] = useState(initialPage);
    const [limit, setLimit] = useState(initialLimit);
    const [_, setRowData] = useState<any | null>(null); // eslint-disable-line
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const open = Boolean(anchorEl);
    // const queryClient = useQueryClient();



    return (
        <Page title="News Comments">
            <PageHeader
                title="News Comments"
                btn={false}
                currentPage="News Comments" />

            <Stack component={Paper} className="rad-grad" pb={2} >
                <Filter
                    key={"Comments"}
                    placeholder="Search..."
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    filterMenu />

                <ReusableTable
                    data={[]}
                    columns={[
                        { id: 'author', label: 'Author', align: "left", fontWeight: "bold" },
                        { id: 'comment', label: 'Comment', align: "left", fontWeight: "bold" },
                        { id: 'totalReplies', label: 'Total Replies', align: "center", fontWeight: "bold" },
                        { id: 'newsTitle', label: 'News', align: "left", fontWeight: "bold" },
                        { id: 'timestamp', label: 'DateTime', align: "left", fontWeight: "bold", dateTime: true },
                    ]}
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
            />


            {deleteDialog && <DeleteDialog setOpenDialog={setDeleteDialog} openDialog={deleteDialog} />}


        </Page>
    )
}

export default ManageNewsComments;