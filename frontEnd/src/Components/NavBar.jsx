import { Typography , AppBar , Toolbar , makeStyles} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles =  makeStyles({
    header:{
        background:"#111111",
    },
    tabs:{
        color:"#FFFFFF",
        marginRight:20,
        fontSize:20,
        textDecoration:'none'
    },
})

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className = {classes.tabs} to="/" exact>Aman Jadeja</NavLink>
                <NavLink className = {classes.tabs} to ="/all" exact>All Users</NavLink>
                <NavLink className = {classes.tabs} to = "/add" exact>Add User</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;