import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useStyles } from './SearchBarStyles.js';

export default function SearchBar({ setSearchQuery, label }) {
    const classes = useStyles();

    return (
        <>
            <form style={{display: 'flex', justifyContent: 'center'}}>
                <div className={classes.textField}>
                    <TextField
                        id="search-bar"
                        className="text"
                        onInput={(e) => {
                            setSearchQuery(e.target.value);
                        }}
                        variant="outlined"
                        placeholder={`Search for a ${label}...`}
                        fullWidth
                    />
                </div>
            </form>
        </>
    )
}