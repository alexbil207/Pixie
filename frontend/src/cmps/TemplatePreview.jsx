import React from "react";

export function TemplatePreview({ template, onSetData }) {
    return (

        <div className="template-card-container">
            <div onClick={() => {
                const web = { ...template }
                delete web._id
                onSetData(web)
            }}
                className="template-card">
                <div className="template-bar">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>

                <div style={{ backgroundImage: `url("${template.image}")` }} className="template-img">
                    <div className="template-img-hover">
                        <button>Edit</button>
                    </div>
                </div>
                <div className="template-title">{template.title}</div>
            </div>
        </div>
    )
}