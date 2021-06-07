export function InputCmp({ data, setEditingElement, className, isEdit }) {
    if (isEdit) {
        return (
            <input
                placeholder={data.placeholder}
                data-id={data.id}
                className={className}
                style={{ ...data.prefs.style }}
                onClick={(ev) => {
                    ev.stopPropagation()
                    const parentId = ev.target.parentElement.dataset.id;
                    setEditingElement(data, parentId)
                }}
            >
            </input>
        )
    }
    return (
        <input
            placeholder={data.placeholder}
            data-id={data.id}
            className={data.prefs.className}
            style={{ ...data.prefs.style }}
        >
            {data.txt}

        </input>
    )
}