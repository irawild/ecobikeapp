import './Clients.css'

const Clients = (props) => {
    if (props.clientsList)
    {
        console.log(props)
        return <div className="clients">
            <ul>
            {props.clientsList.map((client, i) => {
                return <il key={i}>{client.name}</il>
            })}
            </ul>
        </div>
    }
    else{
        return <div className="clients">No clients found</div>
    }
}

export default Clients