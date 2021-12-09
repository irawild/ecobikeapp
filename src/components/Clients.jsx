import './Clients.css'

const Clients = (props) => {
    if (props.clientsList)
    {
        console.log(props)
        return <div className="clients">
            {props.clientsList.map((client, i) => {
                return <h4 key={i}>{client.name}</h4>
            })}
        </div>
    }
    else{
        return <div className="clients">No clients found</div>
    }
}

export default Clients