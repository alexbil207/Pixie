import React from 'react';
import { connect } from 'react-redux';
import { setEditorMode } from '../../store/actions/editor-actions';

class _EditorNav extends React.Component {
    render() {
        const { editorMode, setEditorMode } = this.props

        return (
            <div className="text-center flex space-between editor-nav-container">
                <div
                    onClick={() => setEditorMode('addElement')}
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
}

const mapDispatchToProps = {
    setEditorMode,
}

function mapStateToProps(state) {
    return {
        editorMode: state.editorModule.editorMode
    }
}

export const EditorNav = connect(mapStateToProps, mapDispatchToProps)(_EditorNav)