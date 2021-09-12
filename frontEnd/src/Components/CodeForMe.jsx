import youtube from "../Assets/Images/youtube.png"
import instaTele from "../Assets/Images/InstaTele.jpeg"
import { Box , Typography , makeStyles} from "@material-ui/core"


const useStyles = makeStyles({
    component:{
        margin:50,
    },
    image:{
        width:'50%',
        height:'50%',
    }
})

const CodeForMe = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component} >
            <Typography varient = "h4" style={{marginTop:50}}>Code For Peace</Typography>
            <Box style={{display:'flex'}}>
                <img className={classes.image} src={youtube} />
                <img className={classes.image} src={instaTele} />
            </Box>
        </Box>
    )
}

export default CodeForMe;