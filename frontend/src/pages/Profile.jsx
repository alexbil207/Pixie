import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../cmps/Loading.jsx';
import { EntityList } from '../cmps/profile/EntityList.jsx'
import { webService } from '../service/web-service'
import { setData } from '../store/actions/data-actions';
import { utilService } from '../service/util-service';
import { pageViewMode } from '../store/actions/app-actions';
import { useHistory } from 'react-router-dom';


export const Profile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user, isLoading } = useSelector(state => state.userModule);

    const [state, setState] = useState({
        entitiesType: 'All',
        entities: null,
        draftsAmount: 0,
        websitesAmount: 0,
        isUserMsg: false,
    })

    useEffect(() => {
        dispatch(pageViewMode(false));
        if (!user) {
            history.push('/')
            return;
        }
        getEntities(user._id)
        //eslint-disable-next-line 
    }, [dispatch])


    const getEntities = async (userId) => {
        const entities = await webService.query(userId);
        setState({ ...state, entities })
    }

    useEffect(() => {
        getEntitiesAmount()
        //eslint-disable-next-line 
    }, [state.entities])


    const changeEntitiesType = (entitiesType) => {
        setState({ ...state, entitiesType })
    }

    const getEntitiesForDisplay = (entitiesType) => {
        let { entities } = state
        if (!entities) {
            return;
        }
        if (entitiesType !== 'All') {
            const isPublished = entitiesType === 'Websites';
            entities = entities.filter(entity => entity.isPublished === isPublished);
        }
        return entities;
    }


    const getEntitiesAmount = () => {
        const { entities } = state;
        let draftsAmount = 0;
        let websitesAmount = 0;
        if (entities) {
            entities.forEach(entity => {
                entity.isPublished ? websitesAmount++ : draftsAmount++;
            })
        }
        setState({ ...state, draftsAmount, websitesAmount });
    }

    const onSetData = (data) => {
        dispatch(setData({ data }));
        history.push('/editor');
    }

    const onDeleteEntity = async (entityId) => {
        await webService.remove(entityId);
        setState(
            { ...state, entities: state.entities.filter(entity => entity._id !== entityId) },
            getEntitiesAmount)
    }

    if (isLoading) return <Loading />
    const { entitiesType, websitesAmount, draftsAmount } = state
    return (
        <>
            <section className="flex profile-container">
                <div className="flex column align-center profile-sidebar">
                    <div className="user-img">
                        <div className="user-img-hover">
                            <div className="fas edit-el-icn"></div>
                        </div>
                    </div>
                    <div className="flex statistics">
                        <div className="flex column align-center">
                            <span className="amount">{websitesAmount}</span>
                            <span className="stat">Websites</span>
                        </div>
                        <div className="flex column align-center">
                            <span className="amount">{draftsAmount}</span>
                            <span className="stat">Drafts</span>
                        </div>
                    </div>
                    <div className="flex column side-nav">
                        <div className={entitiesType === 'All' ? 'active' : ''} onClick={() => changeEntitiesType('All')}>All</div>
                        <div className={entitiesType === 'Websites' ? 'active' : ''} onClick={() => changeEntitiesType('Websites')}>Websites</div>
                        <div className={entitiesType === 'Drafts' ? 'active' : ''} onClick={() => changeEntitiesType('Drafts')}>Drafts</div>
                    </div>
                </div>
                <div className="profile-main">
                    <div className="flex space-between details">
                        <span className="greet">Hello {user.fullName}</span>
                        <span className="last-active">Last activity: {utilService.getHumanTime(user.lastLogInAt)}</span>
                    </div>
                    <EntityList
                        onDeleteEntity={onDeleteEntity}
                        onSetData={onSetData}
                        entities={getEntitiesForDisplay(entitiesType)}
                        entitiesType={entitiesType} />
                </div>
            </section>
        </>
    )

}
