import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero bg-base-200 h-auto md:h-[500px] my-10 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
               <div className='lg:w-1/2 relative'>
               <img
                    src={person}
                    className="w-3/4 rounded-lg shadow-2xl" />
               <img
                    src={parts}
                    className="w-1/2 absolute right-5 top-1/2 border-white border-8 rounded-lg shadow-2xl" />
               </div>
                <div className='lg:w-1/2'>
                <h3 className='text-[#FF3811] mt-10 md:mt-0 font-extrabold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
                    </p>
                    <p className="py-6">
                    The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
                    </p>
                    <button className="btn bg-[#FF3811] text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;