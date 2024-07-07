import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Checkout = () => {

    const service = useLoaderData()
    const { title, _id,price,img } = service
    const {user}=useContext(AuthContext)

    const handelService = e =>{
        e.preventDefault()

        const form =e.target 
        const name =form.name.value
        const email =form.email.value
        const date =form.date.value
        const price =form.price.value

        const order ={
            customerName : name,
            email,
            date,
            service:title,
            service_id:_id,
            price,
            img,
        }
        console.log(order);

        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(date=>{
            console.log(date);
            if(date.insertedId){
                alert('success')
            }
        })
    }
    return (
        <div>
            <h1>Book Service {title}</h1>
            <div className="card bg-base-100 w-full border-4 shrink-0 shadow-2xl">
                <form onSubmit={handelService} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name="price" defaultValue={'$' + price} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className=" h-96 input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-block bg-[#FF3811] text-white" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;