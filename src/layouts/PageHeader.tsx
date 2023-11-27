import { Breadcrumbs, Button, Hidden, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { ArrowLeft } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import AddNew from '../components/buttons/add-new';

type PageHeaderProps = {
    btn?: boolean,
    backButton?: boolean,
    btnText?: string,
    handleBtn?: () => void,
    navigate?: string,
    title?: string,
    subTitle?: string,
    breadcrumbLinks?: any[],
    currentPage?: string,
    mb?: number
}

const PageHeader: FC<PageHeaderProps> = ({ btn = true, backButton = false, btnText = "Add New", handleBtn, navigate = '/dashboard', title = "Title", subTitle = "", breadcrumbLinks, currentPage, mb = 4 }) => {
    const nv = useNavigate();

    return (
        <Stack direction={{ xs: "column", md: 'row' }} justifyContent={"space-between"} alignItems={{ md: 'center' }} mb={mb}>
            <Stack >
                <Breadcrumbs aria-label="breadcrumb" sx={{ display: "inline-flex", alignItems: "center" }}>
                    <NavLink
                        style={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '14px', color: 'GrayText' }}
                        to="/dashboard"  >
                        {/* <HomeIcon size={14} /> */}
                        Dashboard
                    </NavLink>
                    {breadcrumbLinks && breadcrumbLinks?.map((link: any, index: number) => (
                        <NavLink
                            key={index}
                            style={{ fontSize: '14px', color: "#A6ACAF" }}
                            to={link?.href}
                        >{link?.label} </NavLink>
                    ))}
                    {currentPage && <Typography color="#A6ACAF" sx={{ fontSize: '14px' }}>{currentPage} </Typography>}
                </Breadcrumbs>
                <Typography variant="body1" fontWeight={"bold"}>{title} {subTitle && <span style={{ fontSize: "1rem", fontWeight: "normal" }}> - {subTitle}</span>} </Typography>
            </Stack>

            <Hidden smDown>
                {btn && <AddNew btnText={btnText} handleBtn={handleBtn} navigate={navigate} />}
            </Hidden>

            <Hidden smDown>
                {backButton &&
                    <Button variant="text" size='medium' onClick={() => nv(-1)} sx={{ textTransform: "capitalize", color: "gray" }}>
                        <ArrowLeft size={25} /> Back
                    </Button>}
            </Hidden>

        </Stack>
    );
};

export default PageHeader;