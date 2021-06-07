import React from 'react';
import { connect } from 'react-redux';
import { Steps } from 'intro.js-react';
import { setData, addSection } from '../store/actions/data-actions';
import { removeEditingElement, setEditorMode } from '../store/actions/editor-actions';
import { isEditorMode } from '../store/actions/app-actions';
import { elementService } from '../service/element-service';
import { storageService } from '../service/storage-service';
import { Loading } from '../cmps/Loading';
import { EditorSideBar } from '../cmps/editor/EditorSideBar';
import { PageRender } from '../cmps/editor/page-render/PageRenderV2';
import { PublishTool } from '../cmps/editor/PublishTool';
import { UserMsg } from '../cmps/UserMsg';

class _Editor extends React.Component {
    state = {
        isUserMsg: false,
        msg: '',

        stepsEnabled: false,
        initialStep: 0,
        steps: [
            {
                element: '.editor-nav-container',
                intro: 'Press the editor\'s navigation buttons to decide rather create or edit elements.',
                position: 'right',
                highlightClass: 'intro-highlight editor-step',
                tooltipClass: 'steps-tool-tip',
            },
            {
                element: '.editor-options-container',
                intro: 'Press the publish tool button to save or publish your website.',
                position: 'top',
                tooltipClass: 'steps-tool-tip publish-step',
                highlightClass: 'intro-highlight',
            },
            {
                element: '.intro-profile',
                intro: 'On the profile page you\'ll be able to see your saved ot published website.',
                position: 'bottom-right-aligned',
                highlightClass: 'intro-highlight profile-step',
                tooltipClass: 'steps-tool-tip',
            },
        ]
    }

    componentDidMount() {
        const { isEditorMode } = this.props;
        isEditorMode(true);

        if (this.props.data.childs.length) {
            return;
        } else {
            const savedData = storageService.loadFromStorage('website')
            if (savedData) {
                this.props.setData({ data: savedData });
            }
        }
    }

    componentWillUnmount() {
        const { isEditorMode, setEditorMode } = this.props;
        setEditorMode('addElement');
        isEditorMode(false);
        this.setState(prevState => ({ ...prevState, stepsEnabled: false }));
    }

    userMsgShow = (msg) => {
        this.setState(prevState => ({ ...prevState, isUserMsg: true, msg: msg }))
        setTimeout(() => {
            this.setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000)
    }

    onAddSection = async (section, src = null) => {
        const addedSection = elementService.getElement(section, src);
        await this.props.addSection(addedSection);
        this.resetEditorAccordion();
        const siteContainer = document.querySelector('.site-container');
        siteContainer.scrollTo({top: siteContainer.scrollHeight, behavior: 'smooth'});
    }

    onAddElement = (elementType, src = null) => {
        const { data, editingElement } = this.props;
        if (!editingElement || !editingElement.childs) {
            console.log('trying to push element to a chidless element...');
            return;
        }
        const { id } = editingElement
        const newData = JSON.parse(JSON.stringify(elementService.addElement(data, id, elementType, src)));
        this.props.setData({ data: newData });
    }

    onUpdateElement = (newElement) => {
        const elementId = newElement.id;
        const newData = JSON.parse(JSON.stringify(elementService.editElement(this.props.data, elementId, newElement)));
        this.props.setData({ data: newData });
    }

    onRemoveElement = (elementId) => {
        const newData = JSON.parse(JSON.stringify(elementService.removeElementById(this.props.data, elementId)));
        this.props.setData({ data: newData });
        this.props.removeEditingElement();
    }

    onReorderingElement = (elementId, val) => {
        const newData = JSON.parse(JSON.stringify(elementService.reorderElement(this.props.data, elementId, val)));
        this.props.setData({ data: newData });
    }

    saveWebsiteToStorage = () => {
        storageService.saveToStorage('website', this.props.data)
    }

    onExitSteps = () => {
        this.setState(prevState => ({ ...prevState, stepsEnabled: false }));
    };

    resetEditorAccordion = () => {
        const { setEditorMode } = this.props;
        setEditorMode('editElement');
        setEditorMode('addElement');
    }


    render() {
        let { data, isLoading } = this.props;
        if (isLoading) return <Loading />;
        const { childs } = data;
        const { isUserMsg, msg, stepsEnabled, initialStep, steps } = this.state;

        return (
            <>
                <section className="flex column justify-center align-center text-center editor-prevent-mobile">Sorry, the editor is available only on tablets and wider screens.</section>
                <section className="flex editor-container">
                    <EditorSideBar onAddElement={this.onAddElement} onAddSection={this.onAddSection} onUpdateElement={this.onUpdateElement} />
                    <PageRender
                        onReorderingElement={this.onReorderingElement}
                        onRemoveElement={this.onRemoveElement}
                        onUpdateElement={this.onUpdateElement}
                        saveWebsiteToStorage={this.saveWebsiteToStorage}
                        childs={childs} />
                </section>
                {isUserMsg && <UserMsg msg={msg} />}
                <PublishTool userMsgShow={this.userMsgShow} />


                <Steps
                    hidePrev={true}
                    hideNext={true}
                    exitOnEsc={true}
                    keyboardNavigation={true}
                    enabled={stepsEnabled}
                    steps={steps}
                    initialStep={initialStep}
                    onExit={this.onExitSteps}
                />
            </>
        );
    }
}

const mapDispatchToProps = {
    setData,
    addSection,
    isEditorMode,
    removeEditingElement,
    setEditorMode
}

function mapStateToProps(state) {
    return {
        data: state.dataModule.data,
        editingElement: state.editorModule.editingElement,
        isLoading: state.webModule.isLoading
    }
}

export const Editor = connect(mapStateToProps, mapDispatchToProps)(_Editor)