import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    textField: {
        fontFamily: 'Poppins',
        position: 'relative',
        margin: "0 17%",
        [`& fieldset`]: {
          borderRadius: 50,
        },
    }
}, { index: 1 });

export { useStyles };