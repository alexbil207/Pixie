import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';


export const UserMsg = ({ msg }) => {
    return (
        <section>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={true}
                message={msg}
            />
        </section>
    );
}