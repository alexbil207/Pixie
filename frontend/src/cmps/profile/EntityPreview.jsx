import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { pageViewMode } from '../../store/actions/app-actions';


export const EntityPreview = ({ entity, onSetData, onDeleteEntity }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex column space-between entity-preview">
            <div className="flex justify-center align-center entity-name">
                <span>{entity.name}</span>
                <span className="state">{entity.isPublished ? '(Published)' : '(Draft)'}</span>
            </div>
            <div className="flex align-center entity-hover-menu">
                <div onClick={() => onSetData(entity)} className="fas pointer option edit-el-icn"></div>
                {entity.isPublished && <Link to={`/view/${entity._id}`}
                    onClick={() => dispatch(pageViewMode(true))}
                    className="fas pointer option watch-icn"></Link>}
                <div onClick={() => onDeleteEntity(entity._id)} className="fas pointer option trash-icn"></div>
            </div>
        </div>
    )
}
