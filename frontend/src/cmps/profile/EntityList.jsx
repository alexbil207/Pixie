import { EntityPreview } from './EntityPreview';

export function EntityList({ entitiesType, entities, onSetData, onDeleteEntity }) {
    return (
        <div className="entity-container">
            {entities ?
                <>
                    <div className="list-header">{entitiesType}</div>
                    <div className="grid entity-list">
                        {entities.map(entity => <EntityPreview onDeleteEntity={onDeleteEntity} onSetData={onSetData} entity={entity} key={entity._id} />)}
                    </div>
                </>
                :
                <div className="list-header">We couldnt find any websites...</div>}
        </div>
    )
}
