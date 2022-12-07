const Delete=(props)=>{
const DeleteNode=()=>{
props.deleteitem(props.id)
}
    return(
    <>
    <center>
    <div className="p-5">
         <p> {props.Firstinp1}</p>
        <p> {props.Secondinp2}</p>
        <br />
        <button className="btn btn-danger" onClick={DeleteNode}>Delete List</button>

    </div>
    </center>
    </>
)
}
export default Delete;