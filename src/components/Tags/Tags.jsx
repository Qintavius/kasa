import './Tags.scss';

const Tags = (props) => {
    return (
        <div className='housing-tags'>
            {
                props.tags && props.tags.map((tag, index) => {
                    return <div className='tag' key={'tag' + index}><span>{tag}</span></div>
                })
            }
        </div>
    );
};

export default Tags;