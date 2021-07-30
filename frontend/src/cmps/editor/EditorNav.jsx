import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEditorMode } from '../../store/actions/editor-actions';


export const EditorNav = () => {
    const dispatch = useDispatch();
    const { editorMode } = useSelector(state => state.editorModule);

    return (
        <div className="text-center flex space-between editor-nav-container">
            <div
                onClick={() => dispatch(setEditorMode('addElement'))}
                className={"pointer " + (editorMode === 'addElement' ? ' active' : '')}>
                <span className="fas create-el-icn"></span>
                Create
            </div>

            <div
                onClick={() => setEditorMode('editElement')}
                className={"pointer" + (editorMode === 'editElement' ? ' active' : '')}>
                <span className="fas edit-el-icn"></span>
                Edit
            </div>
        </div>
    )
}
