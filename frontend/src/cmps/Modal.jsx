import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import PublicIcon from '@material-ui/icons/Public';
import SaveIcon from '@material-ui/icons/Save';
import { useForm } from '../hooks/useForm'


export const Modal = ({ name, onSubmit, isModalOpen }) => {
    const [form, handleChange, setName] = useForm({
        name: ''
    });

    useEffect(() => {
        if (name) setName({ name });
        return;
    }, [setName, name])


    return (
        <>
            <div className={`flex column modal ${isModalOpen ? 'show' : ''}`}>
                <h2>Publish tool</h2>
                <div>
                    <label htmlFor="name">Website name:</label>
                    <input type="text"
                        autoFocus
                        value={name}
                        onChange={(ev) => handleChange(ev)}
                        name="name"
                        id="name"
                    />
                </div>

                <div className="flex space-between publish-btns">
                    <Button
                        title="Save to Drafts"
                        variant="contained"
                        onClick={() => onSubmit(form.name, false)}
                        className="btn save"
                    >
                        <SaveIcon />
                        Save
                    </Button>

                    <Button
                        title="Publish site"
                        variant="contained"
                        onClick={() => onSubmit(form.name, true)}
                        className="btn publish"
                    >
                        <PublicIcon />
                        Publish
                    </Button>
                </div>
            </div>
        </>
    );
}