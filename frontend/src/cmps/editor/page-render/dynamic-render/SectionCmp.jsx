import { ElementToolBar } from "../../ElementToolBar";
import { ChildsPreview } from "../ChildsPreview";


export function SectionCmp({ data, setEditingElement, onReorderingElement, editingElement, onRemoveElement, className, isEdit, onUpdateElement }) {
    if (isEdit) {
        return (
            <section
                data-id={data.id}
                className={className}
                style={{ ...data.prefs.style }}
                onClick={(ev) => {
                    ev.stopPropagation()
                    const parentId = ev.target.parentElement.dataset.id;
                    setEditingElement(data, parentId)
                }}
            >
                <ElementToolBar
                    id={data.id}
                    isContainer={data.isContainer}
                    onReorderingElement={onReorderingElement}
                    onRemoveElement={onRemoveElement} />

                {data.childs &&
                    data.childs.map((child) => {
                        return <ChildsPreview
                            child={child}
                            key={child.id}
                            setEditingElement={setEditingElement}
                            onReorderingElement={onReorderingElement}
                            onRemoveElement={onRemoveElement}
                            isEdit={isEdit}
                            editingElement={editingElement}
                            onUpdateElement={onUpdateElement}
                        />
                    })}

            </section >
        )
    }
    return (
        <section
            data-id={data.id}
            className={data.prefs.className}
            style={{ ...data.prefs.style }}
        >
            {data.childs &&
                data.childs.map((child) => {
                    return <ChildsPreview
                        child={child}
                        editingElement={editingElement}
                        key={child.id}
                    />
                })}
        </section >
    )
}