import { useState } from "react"
import './VetCard.scss'


function VetCard(){

    const[food , setFood] = useState("")
    const[status, setStatus] = useState("")
    const[price , setPrice] = useState("")
    const[image, setImage] = useState("")

    function foodInputHandler(e){
        setFood(e.target.value)
    }

    const statusInputHandler = (e) => {
        setStatus(e.target.value)
    }

    const priceInputhandler = (e) => {
        setPrice(e.target.value)
    }

    const imageInputhandler = (e) => {
        setImage(e.target.value)
    }

    const formhandler = (e) => {
        e.preventDefault()

        const myObject = {
            food,
            status,
            price,
            image,
        }

        console.log(myObject);
       // setOrders([...orders, myObject]) //parana ewa gnnw

        setFood("")
        setStatus("")
        setPrice("")
        setImage("")
    }

    return (
        <>
            <form className="form_container" onSubmit={formhandler}>
                <div>
                    <label className="inputContainer">Food Name</label>
                    <input type="text" className="textFields" value={food} onChange={foodInputHandler}/>
                </div>
                <div>
                    <label className="inputContainer">Status</label>
                    <input type="text" className="textFields" value={status} onChange={statusInputHandler}/>
                </div>
                <div>
                    <label className="inputContainer">Price</label>
                    <input type="text" className="textFields" value={price} onChange={priceInputhandler}/>
                </div>
                <div>
                    <label className="inputContainer">Image</label>
                    <input type="text" className="textFields" value={image} onChange={imageInputhandler}/>
                </div>
                <button className="submitbtn" type="submit">Place Order</button>
            </form>


            {/* <div className="container">
                    {orders.map((singleOrder, index)=>{
                        return(
                            <div className="orderCard" key={index}>  
                                <img className="food_image" src={singleOrder.image} alt="img" width="100px" height="100px"/>
                                <div className="foodTextContainer">
                                <span>{singleOrder.food}</span>
                                <span>{singleOrder.status}</span>
                                <span>{singleOrder.price}</span>
                                </div>
                            </div>
                        )
                    })}
            </div> */}
        </>
    )
}

export default VetCard