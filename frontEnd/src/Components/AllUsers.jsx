import {getUsers} from "../Service/api"
import { Table , TableCell , TableHead , TableBody , TableRow , makeStyles , Button} from "@material-ui/core";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser } from "../Service/api";

const useStyles = makeStyles({
    table:{
        width:"90%",
        margin:"50px 0 0 50px"
    },
    thead:{
        "& > *":{
            background:"#000000",
            color:"#FFFFFF",
            fontSize:20
        }
    },
    row:{
        "& > *":{
            fontSize:20
        }
    }
})

const AllUsers = () => {
    const [users , setUsers] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        getAllUsers();
    }, [])
    const getAllUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    }
    const deleteUserData = async(id) => {
        await deleteUser(id);
        getAllUsers();
    }
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button style = {{marginRight:10}} variant="contained" color="primary" component={Link} to ={`/edit/${user._id}`}>Edit</Button>
                                <Button variant ="contained" color="secondary" onClick={() => deleteUserData(user._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllUsers;