import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
    },

    logout: {
        textDecoration: 'none',
        cursor: 'pointer',
        color: 'black',
        marginLeft: '38px',
        fontStyle: 'normal',
        fontSize: '16px',
        ['@media (max-width: 1000px)']: {
            display: 'none',
        },
    },

    header: {
        position: 'fixed',
        width: '100%',
        zIndex: 5,
        padding: 0,
        margin: 0,
        display: 'flex',
        padding: '2rem',
        background: 'white',
        boxShadow: 'none',
        top: 0,
        left: 0,
        // border: 'red 3px solid',
        boxShadow: "0px 16px 20px rgba(0, 0, 0, 0.15)",
    },

    sidebarOpener: {
        padding: 0,
        marginRight: '30px',
        position: 'relative',
        left: 0,
    },

    logoBox: {
        position: 'realtive',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    wordsLogo: {
        position: 'static',
        paddingTop: '15px',
        width: '225px',

        [`@media (max-width: ${mobile})`]: {
            display: 'none'
        },

        flex: 'none',
        order: 0,
        flexGrow: 0,
        // margin: '0px 10px',
    },

    logo: {
        position: 'static',
        width: '55px',
        height: '55px',
        left: '0px',
        top: '0px',

        [`@media (max-width: ${mobile})`]: {
            width: '50px',
            height: '50px',
            left: 0,
            position: 'absolute'
        },

        flex: 'none',
        order: 0,
        flexGrow: 0,
        margin: '0px 10px',
    },

    pages: {
        display: 'flex',

        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: '20rem',

        ['@media (max-width: 1000px)']: {
            display: 'none',
        }
    },

    page: {
        textDecoration: 'none',
        cursor: 'pointer',
        color: 'black',
        marginLeft: '38px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '16px',

        ['@media (max-width: 1000px)']: {
            display: 'none',
        },

        '&:hover, &:visited, &:focus, &:active': {
            textDecoration: 'none',
            borderBottom: "3px solid",

            ['@media (max-width: 1000px)']: {
                display: 'none',
            }
        }
    },

    activePage: {
        textDecoration: 'none',
        borderBottom: "3px solid",
        cursor: 'pointer',
        color: 'black',
        marginLeft: '38px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '16px',
        
        '&:hover, &:visited, &:focus, &:active': {
            textDecoration: 'none',
            borderBottom: "3px solid",
            cursor: 'pointer',
            color: 'black',
            marginLeft: '38px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '16px',

            ['@media (max-width: 1000px)']: {
                display: 'none',
            }
        }
    },

    navButtons: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 0,

        ['@media (max-width: 1000px)']: {
            display: 'none',
        }
    },

    navButton: {
        textTransform: 'none',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 70,
        fontSize: '16px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 'none',
        order: 1,
        flexGrow: 0,
        margin: '0px 20px',
        padding: '12px 30px',
        borderRadius: '30px',

        width: '126px',
        height: '60px',

        whiteSpace: 'nowrap',
        textAlign: 'center',

        ['@media (max-width: 1000px)']: {
            display: 'none',
        }
    },

    menuBox: {
        display: 'none',
        ['@media (max-width: 1000px)']: {
            display: 'flex',
            position: 'absolute',
            flexGrow: 1,
            right: 0,
        }
    },

    menu: {
        display: 'none',
        ['@media (max-width: 1000px)']: {
            display: 'flex',
            position: 'absolute',
            right: 0,
        }
    },

    name: {
        color: 'black', 
        textAlign: 'center',
        [`@media (max-width: ${mobile})`]: {
            display: 'none'
        },
    },

    floatCon: {
        float: 'right'
    },

    util: {
        width: 'auto',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // float: 'right'
        // border: 'red 3px solid'
    },

    tools: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px'
    },

    profile: {
        position: 'relative',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',

        [`@media (max-width: ${mobile})`]: {
            right: '50px'
        },
        
    }
}, { index: 1 });

export { useStyles };