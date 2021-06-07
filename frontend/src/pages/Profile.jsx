import React from 'react'
import { connect } from 'react-redux';
import { Loading } from '../cmps/Loading.jsx';
import { EntityList } from '../cmps/profile/EntityList.jsx'
import { webService } from '../service/web-service'
import { UserMsg } from '../cmps/UserMsg.jsx';
import { setData } from '../store/actions/data-actions';
import { utilService } from '../service/util-service';
import { pageViewMode } from '../store/actions/app-actions';


class _Profile extends React.Component {
    state = {
        user: this.props.user,
        entitiesType: 'All',
        entities: null,
        draftsAmount: 0,
        websitesAmount: 0,
        isUserMsg: false,
    }

    async componentDidMount() {
        this.props.pageViewMode(false); //if the user push back from Publishmode its returns the header of the site
        const user = this.props.user;
        if (!user) {
            this.props.history.push('/')
            return;
        }
        this.setState({ ...this.state, user })
        await this.getEntities(user._id);
    }

    changeEntitiesType = (entitiesType) => {
        this.setState({ entitiesType }, () => {
            if (!this.state.entities) this.userMsgShow(`No websites to show...`);
        })
    }

    getEntitiesForDisplay(entitiesType) {
        let { entities } = this.state
        if (!entities) {
            return;
        }
        if (entitiesType !== 'All') {
            const isPublished = entitiesType === 'Websites';
            entities = entities.filter(entity => entity.isPublished === isPublished);
        }
        return entities;
    }

    getEntitiesAmount() {
        const { entities } = this.state;
        let draftsAmount = 0;
        let websitesAmount = 0;
        if (entities) {
            entities.forEach(entity => {
                entity.isPublished ? websitesAmount++ : draftsAmount++;
            })
        }
        this.setState({ ...this.state, draftsAmount, websitesAmount });
    }

    getEntities = async (userId) => {
        const entities = await webService.query(userId);
        this.setState({ ...this.state, entities }, this.getEntitiesAmount)
    }

    onSetData = (data) => {
        this.props.setData({ data });
        this.props.history.push('/editor');
    }

    onDeleteEntity = async (entityId) => {
        await webService.remove(entityId);
        this.setState(
            { ...this.state, entities: this.state.entities.filter(entity => entity._id !== entityId) },
            this.getEntitiesAmount)
    }

    userMsgShow = (msg) => {
        this.setState(prevState => ({ ...prevState, isUserMsg: true, msg }));
        setTimeout(() => {
            this.setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000);
    }

    render() {

        const { entitiesType, websitesAmount, draftsAmount, user, isUserMsg, msg } = this.state
        const { isLoading } = this.props;
        if (isLoading) return <Loading />

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
                            <div className={entitiesType === 'All' ? 'active' : ''} onClick={() => this.changeEntitiesType('All')}>All</div>
                            <div className={entitiesType === 'Websites' ? 'active' : ''} onClick={() => this.changeEntitiesType('Websites')}>Websites</div>
                            <div className={entitiesType === 'Drafts' ? 'active' : ''} onClick={() => this.changeEntitiesType('Drafts')}>Drafts</div>
                        </div>
                    </div>
                    <div className="profile-main">
                        <div className="flex space-between details">
                            <span className="greet">Hello {user.fullName}</span>
                            <span className="last-active">Last activity: {utilService.getHumanTime(user.lastLogInAt)}</span>
                        </div>
                        <EntityList
                            onDeleteEntity={this.onDeleteEntity}
                            onSetData={this.onSetData}
                            entities={this.getEntitiesForDisplay(entitiesType)}
                            entitiesType={entitiesType} />
                    </div>
                </section>
                {isUserMsg && < UserMsg msg={msg} />}
            </>
        )
    }
}

const mapDispatchToProps = {
    setData,
    pageViewMode
}

function mapStateToProps(state) {
    return {
        user: state.userModule.user,
        isLoading: state.userModule.isLoading,

    }
}

export const Profile = connect(mapStateToProps, mapDispatchToProps)(_Profile)