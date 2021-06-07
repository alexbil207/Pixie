import React from "react";
import { connect } from 'react-redux';
import { setData } from '../store/actions/data-actions';
import { loadTemplates } from '../store/actions/template-action';
import { Loading } from '../cmps/Loading';
import { TemplatePreview } from "../cmps/TemplatePreview";


class _Template extends React.Component {

    async componentDidMount() {
        await this.props.loadTemplates();
    }

    onSetData = (data) => {
        this.props.setData({ data });
        this.props.history.push('/editor');
    }


    render() {
        const { templates, isLoading } = this.props;
        if (isLoading) return <Loading />
        return (
            <>
                <div className="templates-page-title">Templates</div>

                <div className="template-list">
                    {/* Make new website */}
                    <div className="template-card-container">
                        <div onClick={() => {
                            localStorage.removeItem('website');
                            this.onSetData({ childs: [] })
                        }}
                            className="template-card">
                            <div className="template-bar">
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                            <div className="template-img">
                                <div className="template-img-hover">
                                    <button>Start</button>
                                </div>
                            </div>
                            <div className="template-title">Make New</div>
                        </div>
                    </div>

                    {templates.map(template => <TemplatePreview key={template._id} onSetData={this.onSetData} template={template} />)}
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        templates: state.templateModule.templates,
        isLoading: state.templateModule.isLoading,
    }
}

const mapDispatchToProps = {
    loadTemplates,
    setData
}

export const Template = connect(mapStateToProps, mapDispatchToProps)(_Template)

