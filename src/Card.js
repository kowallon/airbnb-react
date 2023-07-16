import './App.css';
/*If the props.badge exist in data this div will be rendered, otherwise it wont
{props.badge && <div className='badge'>
<p>{props.badgeText}</p>
        </div>}
if item has props.badge it is truthy value*/

export default function Card(props){
    return (
    <div className='singleCard'>
        
        {props.badge && <div className='badge'>
            <p>{props.badgeText}</p>
        </div>}
        <img src={props.img} className='activityPic'></img>
        <div className='info'>
            <img src='star.png' className='starIcon'></img>
            <p className='rating'>{props.rating}</p>
            <p id='opinions'>{props.opinions}</p>
            <p id='location'>· {props.location}</p>
        </div>
        <h4 className='activity-title'>{props.title}</h4>
        <h5><span className='price'>From {props.price} </span>/person</h5>
    </div>
    )
}

