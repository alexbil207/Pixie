import React from 'react';
import { connect } from 'react-redux';
import { setEditingElement } from '../../store/actions/editor-actions';
import { ElementToolBar } from './ElementToolBar';

class _PageRender extends React.Component {
    checkChildren = (elements) => {
        return elements.map((elChild) => {
            return elChild.childs ?
                this.renderSection(elChild) :
                React.createElement(
                    elChild.type,
                    {
                        ...elChild.prefs,
                        className: `${elChild.prefs.className} ${elChild.name === ' site-container' ? '' : ' basic-product'}`,
                        'data-id': elChild.id,
                        key: elChild.id,
                        onClick: (ev) => {
                            ev.stopPropagation()
                            const parentId = ev.target.parentElement.dataset.id;
                            this.props.setEditingElement(elChild, parentId)
                        },

                    },

                    [<ElementToolBar
                        id={elChild.id}
                        key={elChild.id + 't'}
                        onReorderingElement={this.props.onReorderingElement}
                        onRemoveElement={this.props.onRemoveElement} />,
                    elChild.role === 'childless' ? (elChild.txt || elChild.lngTxt) : null]);
        })
    }

    renderSection = (cmp) => {
        const { childs, id } = cmp
        return React.createElement(
            //Creates main page elements
            cmp.type,
            {
                ...cmp.prefs,
                className: `${cmp.prefs.className} ${cmp.name === ' site-container' ? '' : ' basic-product'}`,
                'data-id': id,
                key: id,
                onClick: (ev) => {
                    ev.stopPropagation()
                    const parentId = ev.target.parentElement.dataset.id;
                    this.props.setEditingElement(cmp, parentId)
                },

            },
            [...this.checkChildren(childs),
            cmp.name === 'site container' ? '' :
                <ElementToolBar
                    id={cmp.id}
                    key={cmp.id + 't'}
                    onReorderingElement={this.props.onReorderingElement}
                    onRemoveElement={this.props.onRemoveElement} />
            ]
        );

    }

    render() {
        const { app } = this.props
        if (!app) return <div className="site-container">No cmps dragged yet, drag a component to start edit</div>
        return (
            <div data-id="root" className="site-container">
                {app && this.renderSection(app)}
            </div>
        )
    }
}

const mapDispatchToProps = {
    setEditingElement
}

function mapStateToProps(state) {
    return {
        data: state.editorModule.data,
    }
}

export const PageRender = connect(mapStateToProps, mapDispatchToProps)(_PageRender)