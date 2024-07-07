

const BookingRow = ({ book ,handelDelete,hadleCofirm}) => {
    const {_id, customerName, img, email, date, price,status } = book

    console.log(book);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <button onClick={()=>handelDelete(_id)} className="btn btn-circle btn-outline">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </th>
                            <td>

                                <div className="avatar">
                                    <div className="rounded-xl h-24 w-24">
                                        {
                                            img ? <img
                                                src={img}
                                                alt="Avatar Tailwind CSS Component" /> :
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        }
                                    </div>
                                </div>


                            </td>
                            <td>
                                {customerName}
                            </td>
                            <td>{email}</td>
                            <td>${price}</td>
                            <th>
                               {
                                status==='confirm' ? <span className="text-primary font-bold bg-green-600">Confirmed</span>: <button onClick={()=>hadleCofirm(_id)} className="btn btn-ghost btn-xs">PLEASE Conform</button>
                               }
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingRow;