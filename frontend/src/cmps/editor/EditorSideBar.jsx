import React from 'react';
import { connect } from 'react-redux'
import { EditorNav } from './EditorNav';
import { ElementsList } from './ElementsList';
import { ElementEditor } from './ElementEditor';

class _EditorSideBar extends React.Component {

    state = {

    }

    render() {
        const { editorMode } = this.props;
        const { onAddSection, onUpdateElement, onAddElement } = this.props;

        return (
            <div className="editor-side-container">
                <EditorNav />
                {(editorMode === 'addElement') && <ElementsList onAddElement={onAddElement} onAddSection={onAddSection} />}
                {(editorMode === 'editElement') && <ElementEditor onUpdateElement={onUpdateElement} />}
            </div>
        );
    }
}

const mapDispatchToProps = {
}

function mapStateToProps(state) {
    return {
        editorMode: state.editorModule.editorMode
    }
}

export const EditorSideBar = connect(mapStateToProps, mapDispatchToProps)(_EditorSideBar)