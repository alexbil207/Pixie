import Loader from '../assets/img/Loader.gif';

export function Loading() {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '95vh',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img src={Loader} alt="Loader" />
        </div>
    );
}