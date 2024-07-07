import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { json } from "react-router-dom";
import { data } from "autoprefixer";


const Booking = () => {
    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState([])
    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    const handelDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(date => {
                        console.log(date);
                        if (date.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaning = booking.filter(book => book._id !== id)
                            setBooking(remaning)
                        }
                    })
            }
        });


    }
    
    const hadleCofirm =id=>{
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status :'confirm'})
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount >0){
                //update state
                const remaning = booking.filter(book => book._id !== id)
                       
                const update =booking.find(book=>book._id===id)
                update.status='confirm'
                const newBooking =[update,...remaning]
                setBooking(newBooking)
               
            }
        })



      }
    
    return (
        <div>
            <h2 className="text-5xl">{booking.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                            </th>
                            <td>

                                <div className="avatar">
                                    <p>Image</p>
                                </div>


                            </td>
                            <td>
                                <p>customerName</p>
                            </td>
                            <td>Email</td>
                            <td>Price</td>
                            <th>

                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            {booking.map(book => <BookingRow key={booking._id} handelDelete={handelDelete} hadleCofirm={hadleCofirm} book={book}></BookingRow>)}
        </div>
    );
};

export default Booking;