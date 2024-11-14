export  function Card(name) {
    return (
        <div className="card">
            <img src={name.img} alt="Avatar" />
            <div className="container">
                <h4><b>{name.title}</b></h4>
            </div>
        </div>  
    )
}
export default Card ; 