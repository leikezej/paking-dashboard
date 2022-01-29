import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    navigationLogo: {
        width: "50%",
        cursor: "pointer",
    },
    navigationLogoContainer: {
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
    },
    navigationDrawer: {
        width: 240,
    },
    navigationList: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
    },
    navigationSpacer: {
        flex: 1,
    },
    menuItemIcon: {
        height: "50%",
    },
    menuItem: {
        width: "80%",
        borderRadius: 8,
        marginBottom: 8,
    },
    menuItemActive: {
        backgroundColor: "#D3D3D3",
    },
});