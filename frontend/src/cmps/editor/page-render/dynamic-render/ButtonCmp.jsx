import { ElementToolBar } from "../../ElementToolBar";

export function ButtonCmp({ data, setEditingElement, onReorderingElement, onRemoveElement, isEdit, className, onUpdateElement }) {
    if (isEdit) {
        return (
            <button
                contentEditable={true}
                suppressContentEditableWarning={true}
                data-id={data.id}
                className={className}
                style={{ ...data.prefs.style }}
                onClick={(ev) => {
                    ev.stopPropagation()
                    const parentId = ev.target.parentElement.dataset.id;
                    setEditingElement(data, parentId)
                }}
                onBlur={
                    (ev) => {
                        data.txt = ev.target.innerText;
                        onUpdateElement(data);
                        const parentId = ev.target.parentElement.dataset.id;
                        setEditingElement(JSON.parse(JSON.stringify(data)), parentId)
                    }}
            >
                <ElementToolBar
                    id={data.id}
                    onReorderingElement={onReorderingElement}
                    onRemoveElement={onRemoveElement} />

                {data.txt}

            </button>
        )
    }
    return (
        <button
            data-id={data.id}
            className={data.prefs.className}
            style={{ ...data.prefs.style }}
        >
            {data.txt}
        </button>
    )
}