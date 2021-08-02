import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { ChildsPreview } from '../cmps/editor/page-render/ChildsPreview';
import { webService } from '../service/web-service';
import { Loading } from '../cmps/Loading';
import { pageViewMode } from '../store/actions/app-actions';
import { useLocation } from 'react-router-dom';



export const WebDetails = () => {
    const [web, setWeb] = useState('');
    const dispatch = useDispatch();
    let location = useLocation();

    useEffect(() => {
        dispatch(pageViewMode(true));
        const pathname = location.pathname.split('/');
        const webId = pathname[pathname.length - 1];
        getWebById(webId);
    }, [dispatch, location.pathname])

    const getWebById = async (webId) => {
        const res = await webService.getById(webId);
        setWeb(res);
    }

    if (!web) return <Loading />
    return (
        web.childs.map(child => <ChildsPreview child={child} key={child.id} />)
    )
}











// class _WebDetails extends React.Component {
//     state = {
//         web: '',
//     }

//     async componentDidMount() {
//         this.props.pageViewMode(true);
//         const { webId } = this.props.match.params;
//         const web = await webService.getById(webId);
//         this.setState({ web });
//     };


//     render() {
//         const { web } = this.state;
//         if (!web) return <Loading />
//         return (
//             web.childs.map(child => <ChildsPreview child={child} key={child.id} />)
//         )
//     }
// }


// const mapDispatchToProps = {
//     pageViewMode
// }



// export const WebDetails = connect(null, mapDispatchToProps)(_WebDetails)