import React from 'react';
import { connect, useSelector } from 'react-redux'
import { EditorNav } from './EditorNav';
import { ElementsList } from './ElementsList';
import { ElementEditor } from './ElementEditor';


export const EditorSideBar = ({ onAddSection, onUpdateElement, onAddElement }) => {
    const { editorMode } = useSelector(state => state.editorModule);
    return (
        <div className="editor-side-container">
            <EditorNav />
            {(editorMode === 'addElement') && <ElementsList onAddElement={onAddElement} onAddSection={onAddSection} />}
            {(editorMode === 'editElement') && <ElementEditor onUpdateElement={onUpdateElement} />}
        </div>
    );
}
