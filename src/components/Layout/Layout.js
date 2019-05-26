import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
    root :{
        width: '100%',
        height: '50px',
        borderBottom: '#6d6e70 solid 2px',
        display: 'flex'
    }

}

function Layout(props) {

    const {classes, children} = props;


    return (
        <div className={classes.root}>
            <div >

            </div>
            <div >

            </div>
        <div>
            {children}
        </div>
        </div>
    );
}


export default withStyles(styles)(Layout);



