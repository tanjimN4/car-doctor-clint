import { FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";

const SeviceCard = ({service}) => {
    const {_id,title,img,price}=service
    return (
        <div>
            <div className="card bg-base-100 w-96 h-96 shadow-xl border-2 border-slate-500">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price : {price}</p>
                    <div className="card-actions flex justify-end">
                        <Link to={`/checkout/${_id}`}><button className=""><FcNext /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeviceCard;