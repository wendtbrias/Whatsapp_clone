
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from "@mui/material/IconButton";

const Search = () => {
    return (
        <div className="search">
            <IconButton style={{ position:"absolute" , top:"50%",transform:"translateY(-50%)",left:"13px" }}>
                <SearchOutlinedIcon/>
            </IconButton>
            <input type="search" fontSize="small" placeholder="find the user"/>
        </div>
    )
}

export default Search;