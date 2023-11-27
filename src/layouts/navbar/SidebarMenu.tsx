import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { NavLink, useLocation } from "react-router-dom";
import { Typography, TypographyPropsVariantOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { Variant } from "@mui/material/styles/createTypography";

interface Props {
    icon?: any,
    menuTitle?: string,
    directory?: string,
    onClose: any,
    variant?: OverridableStringUnion<"inherit" | Variant, TypographyPropsVariantOverrides> | undefined,
    fontWeight?: "normal" | "bold" | "medium"
}


const SidebarMenu = ({ icon, menuTitle, directory = "", onClose, variant = "body2", fontWeight = "normal" }: Props) => {
    const location = useLocation()
    return (
        <NavLink to={directory} onClick={onClose} style={{ textDecoration: "none" }}>
            <ListItem className={location.pathname === directory ? "sidebar-menu-active" : ""} disablePadding>
                <ListItemButton>
                    <ListItemIcon style={{ color: location.pathname === directory ? "#3F80EA" : "" }}>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={
                        <Typography color={location.pathname === directory ? "#3F80EA" : "#0C1E5B"} variant={variant} fontWeight={fontWeight}
                            sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {menuTitle}
                        </Typography>} />
                </ListItemButton>
            </ListItem>
        </NavLink>
    )
}

export default SidebarMenu;