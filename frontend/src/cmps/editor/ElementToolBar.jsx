export function ElementToolBar({ onReorderingElement, onRemoveElement, id, isContainer=false }) {
    return (
        <div contentEditable={false} className={"element-tool-bar " + (isContainer ? 'container ' : '')}>
            <span onClick={(ev) =>{
                ev.stopPropagation();
                onRemoveElement(id)}
                } className="fas tool-bar-icn trash"></span>
            <span onClick={() => onReorderingElement(id, -1)} className="fas tool-bar-icn up-arrow"></span>
            <span onClick={() => onReorderingElement(id, 1)} className="fas tool-bar-icn down-arrow"></span>
            <span className="fas tool-bar-icn edit"></span>
        </div>
    )
}