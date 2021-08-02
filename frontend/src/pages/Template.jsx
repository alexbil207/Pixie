import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../store/actions/data-actions';
import { loadTemplates } from '../store/actions/template-action';
import { Loading } from '../cmps/Loading';
import { TemplatePreview } from "../cmps/TemplatePreview";
import { useHistory } from 'react-router-dom';



export const Template = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { templates, isLoading } = useSelector(state => state.templateModule);

    useEffect(() => {
        dispatch(loadTemplates());
    }, [dispatch]);

    const onSetData = (data) => {
        dispatch(setData({ data }));
        history.push('/editor');
    };

    if (isLoading) return <Loading />;
    return (
        <>
            <div className="templates-page-title">Templates</div>

            <div className="template-list container">
                {/* Make new website */}
                <div className="template-card-container">
                    <div onClick={() => {
                        localStorage.removeItem('website');
                        onSetData({ childs: [] })
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
                {templates.map(template => <TemplatePreview key={template._id} onSetData={onSetData} template={template} />)}
            </div>
        </>
    );

}
