import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Steps } from 'intro.js-react';
import { setData, addSection } from '../store/actions/data-actions';
import { removeEditingElement, setEditorMode } from '../store/actions/editor-actions';
import { isEditorMode } from '../store/actions/app-actions';
import { elementService } from '../service/element-service';
import { storageService } from '../service/storage-service';
import { Loading } from '../cmps/Loading';
import { EditorSideBar } from '../cmps/editor/EditorSideBar';
import { PageRender } from '../cmps/editor/page-render/PageRender';
import { PublishTool } from '../cmps/editor/PublishTool';
import { UserMsg } from '../cmps/UserMsg';


export const Editor = () => {
    const [state, setState] = useState({

        isUserMsg: false,
        msg: '',
        stepsEnabled: false,
        initialStep: 0,
        steps: [
            {
                element: '.editor-nav-container',
                intro: 'Press the editor\'s navigation buttons to decide rather create or edit elements.',
                position: 'right',
                highlightClass: 'intro-highlight editor-step',
                tooltipClass: 'steps-tool-tip',
            },
            {
                element: '.editor-options-container',
                intro: 'Press the publish tool button to save or publish your website.',
                position: 'top',
                tooltipClass: 'steps-tool-tip publish-step',
                highlightClass: 'intro-highlight',
            },
            {
                element: '.intro-profile',
                intro: 'On the profile page you\'ll be able to see your saved ot published website.',
                position: 'bottom-right-aligned',
                highlightClass: 'intro-highlight profile-step',
                tooltipClass: 'steps-tool-tip',
            },
        ]
    });
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.dataModule);
    const { editingElement } = useSelector(state => state.editorModule);
    const { isLoading } = useSelector(state => state.webModule);

    useEffect(() => {
        dispatch(isEditorMode(true));
        if (data.childs.length) {
            return;
        } else {
            const savedData = storageService.loadFromStorage('website')
            if (savedData) {
                dispatch(setData({ data: savedData }));
            }
        }

        return () => {
            dispatch(setEditorMode('addElement'));
            dispatch(isEditorMode(false));
            setState(prevState => ({ ...prevState, stepsEnabled: false }));
        }
    }, [dispatch, data])


    const userMsgShow = (msg) => {
        setState(prevState => ({ ...prevState, isUserMsg: true, msg: msg }))
        setTimeout(() => {
            setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000)
    }

    const onAddSection = (section, src = null) => {
        const addedSection = elementService.getElement(section, src);
        dispatch(addSection(addedSection));
        resetEditorAccordion();
        const siteContainer = document.querySelector('.site-container');
        siteContainer.scrollTo({ top: siteContainer.scrollHeight, behavior: 'smooth' });
    }

    const onAddElement = (elementType, src = null) => {
        if (!editingElement || !editingElement.childs) {
            console.log('trying to push element to a chidless element...');
            return;
        }
        const { id } = editingElement
        const newData = JSON.parse(JSON.stringify(elementService.addElement(data, id, elementType, src)));
        dispatch(setData({ data: newData }));
    }

    const onUpdateElement = (newElement) => {
        const elementId = newElement.id;
        const newData = JSON.parse(JSON.stringify(elementService.editElement(data, elementId, newElement)));
        dispatch(setData({ data: newData }));
    }

    const onRemoveElement = (elementId) => {
        const newData = JSON.parse(JSON.stringify(elementService.removeElementById(data, elementId)));
        dispatch(setData({ data: newData }));
        dispatch(removeEditingElement());
    }

    const onReorderingElement = (elementId, val) => {
        const newData = JSON.parse(JSON.stringify(elementService.reorderElement(data, elementId, val)));
        dispatch(setData({ data: newData }));
    }

    const saveWebsiteToStorage = () => {
        storageService.saveToStorage('website', data)
    }

    const onExitSteps = () => {
        setState(prevState => ({ ...prevState, stepsEnabled: false }));
    };

    const resetEditorAccordion = () => {
        dispatch(setEditorMode('editElement'));
        dispatch(setEditorMode('addElement'));
    }

    if (isLoading) return <Loading />;
    const { childs } = data;
    const { isUserMsg, msg, stepsEnabled, initialStep, steps } = state;

    return (
        <>
            <section className="flex column justify-center align-center text-center editor-prevent-mobile">Sorry, the editor is available only on tablets and wider screens.</section>
            <section className="flex editor-container">
                <EditorSideBar onAddElement={onAddElement} onAddSection={onAddSection} onUpdateElement={onUpdateElement} />
                <PageRender
                    onReorderingElement={onReorderingElement}
                    onRemoveElement={onRemoveElement}
                    onUpdateElement={onUpdateElement}
                    saveWebsiteToStorage={saveWebsiteToStorage}
                    childs={childs} />
            </section>
            {isUserMsg && <UserMsg msg={msg} />}
            <PublishTool userMsgShow={userMsgShow} />


            <Steps
                hidePrev={true}
                hideNext={true}
                exitOnEsc={true}
                keyboardNavigation={true}
                enabled={stepsEnabled}
                steps={steps}
                initialStep={initialStep}
                onExit={onExitSteps}
            />
        </>
    );

}
