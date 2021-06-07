import { DynamicCmp } from './DynamicCmp'
import { Draggable } from 'react-beautiful-dnd'


export function ChildsPreview({ child, onReorderingElement, onRemoveElement, setEditingElement, idx, editingElement, isEdit, onUpdateElement }) {

    if (idx !== undefined) {
        return (
            <Draggable key={child.id} draggableId={child.id} index={idx}>
                {(provided) => (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <DynamicCmp
                            editingElement={editingElement}
                            child={child}
                            key={child.id}
                            setEditingElement={setEditingElement}
                            onReorderingElement={onReorderingElement}
                            onRemoveElement={onRemoveElement}
                            isEdit={isEdit}
                            onUpdateElement={onUpdateElement}
                        />
                    </div>
                )}
            </Draggable>
        )
    } else {
        return <DynamicCmp
            child={child}
            editingElement={editingElement}
            key={child.id}
            setEditingElement={setEditingElement}
            onReorderingElement={onReorderingElement}
            onRemoveElement={onRemoveElement}
            isEdit={isEdit}
            onUpdateElement={onUpdateElement}
        />
    }

}