

const Card = (props) => {
    return (
        <div >
            <img src={props.src} alt="anh" />
            <h2>{props.title}</h2>
              <p className="card-text">{props.number}</p>
        </div>
    );
}
export default Card