import React, { useState } from 'react';
import { Modal } from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { saveWeb } from '../../store/actions/web-action';


export const PublishTool = ({ userMsgShow }) => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.dataModule)
    const { user } = useSelector(state => state.userModule)


    const [isModalOpen, setModalOpen] = useState(false);



    const toggleMenu = () => {
        setModalOpen(!isModalOpen);
    }

    const onSubmit = async (name, isPublished) => {
        // if there is no user UserMsg "Login required"
        if (!user) {
            userMsgShow('Login required');
            toggleMenu();
            return;
        }
        toggleMenu(); //closing modal

        // if there is an a id only update 
        if (data._id) {
            const webInfo = {
                ...data,
                name,
                isPublished,
            };
            try {
                dispatch(saveWeb(webInfo));
                userMsgShow(`${isPublished ? 'Published!' : 'Saved to Drafts'}`)
                window.open(`http://localhost:3000/#/view/${webInfo._id}`); //change to heroku
                // window.open(`https://pixie-ca.herokuapp.com/#/view/${webInfo._id}`); //heroku
                return;
            } catch (err) {
                return;
            }
        }

        // if there is no id push creator too 
        const webInfo = {
            ...data,
            name,
            isPublished,
            creatorId: user._id,
        };
        try {
            const savedWeb = dispatch(saveWeb(webInfo));
            userMsgShow(`${isPublished ? 'Published!' : 'Saved to Drafts'}`);
            window.open(`http://localhost:3000/#/view/${savedWeb._id}`); //change to heroku
            // window.open(`https://pixie-ca.herokuapp.com/#/view/${savedWeb._id}`); //heroku
        } catch (err) {
            console.log('Error on Save', err);
        }

    }
    return (
        <>
            <div className={isModalOpen ? 'background-modal' : ''}
                onClick={() => toggleMenu()}
            ></div>
            <div className="flex editor-options-container">
                <div className={"pointer circle" + (isModalOpen ? ' open' : '')} title="Save and publish" onClick={() => toggleMenu()}>
                    <span className="fas editor-menu-icn"></span>
                </div>
                {isModalOpen && <Modal
                    isModalOpen={isModalOpen}
                    toggleMenu={toggleMenu}
                    name={data.name}
                    onSubmit={onSubmit}

                />}
            </div>

        </>
    )


}
