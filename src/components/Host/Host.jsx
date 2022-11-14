import './Host.scss'

const Host = (props) => {

    return (
        <div className="host-wrapper">
            <p className='host-name'>{props.name}</p>
            <img className='avatar' src={props.img} alt="avatar" />
        </div>
    );
};

export default Host;