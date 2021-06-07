import React from 'react';
import { connect } from 'react-redux';
import { setEditingElement } from '../../../store/actions/editor-actions';
import { setData, editData } from '../../../store/actions/data-actions';
import { utilService } from '../../../service/util-service';
import { ChildsPreview } from './ChildsPreview';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

class _PageRenderV2 extends React.Component {

    siteContainerRef = React.createRef();

    reorder = (startIndex, endIndex) => {
        const { childs } = this.props;
        let data = childs.slice();
        let elDragged = data.splice(startIndex, 1);
        elDragged = elDragged[0];
        data.splice(endIndex, 0, elDragged);
        return data;
    }

    onDragEnd = (result) => {
        if (!result.destination) return;
        const childs = this.reorder(
            result.source.index,
            result.destination.index
        )
        this.props.editData(childs);
    }

    render() {
        const { childs, onReorderingElement, onRemoveElement, setEditingElement, editingElement, saveWebsiteToStorage, onUpdateElement } = this.props;

        if (childs.length === 0) {
            //if there is no childs in store it shows msg.
            // localStorage.removeItem('website');
            return (
                <section
                    data-id={utilService.makeId()}
                    className="site-container">
                    <ChildsPreview
                        child={
                            {
                                type: "div",
                                role: "childless",
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '5px dashed #aaaaaa',
                                        color: "#555555",
                                        fontSize: '2rem',
                                        fontFamily: "Inter",
                                        letterSpacing: '1px',
                                        textAlign: 'center',
                                        paddingBlock: '200px',
                                        width: '100%',
                                        pointerEvents: 'none'
                                    }
                                },
                                txt: "Choose Your Design from Create Menu"
                            }}
                        isEdit={true}
                    />
                </section>
            )
        }

        //if the user choose, it shows the choosen element
        saveWebsiteToStorage();
        return (
            <>
                <DragDropContext onDragEnd={this.onDragEnd} >
                    <Droppable droppableId="childs">
                        {(provided) => (
                            <section
                                data-id={utilService.makeId()}
                                className="site-container"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {childs.map((child, idx) => {
                                    return <ChildsPreview
                                        child={child}
                                        editingElement={editingElement}
                                        key={child.id}
                                        isContainer={child.isContainer}
                                        setEditingElement={setEditingElement}
                                        onReorderingElement={onReorderingElement}
                                        onRemoveElement={onRemoveElement}
                                        onUpdateElement={onUpdateElement}
                                        idx={idx}
                                        isEdit={true}
                                    />
                                })}
                                {provided.placeholder}
                            </section>
                        )}
                    </Droppable>
                </DragDropContext>
            </>
        )
    }
}

const mapDispatchToProps = {
    setEditingElement,
    setData,
    editData
}

function mapStateToProps(state) {
    return {
        editingElement: state.editorModule.editingElement
    }
}

export const PageRender = connect(mapStateToProps, mapDispatchToProps)(_PageRenderV2)