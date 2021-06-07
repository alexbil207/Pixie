import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';


export function UserMsg({ msg }) {
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