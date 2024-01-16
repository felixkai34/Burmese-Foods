import { Link } from 'react-router-dom';
import Datas from '../Data.json'

export default function Post() {
	return (
		<div className=' max-w-xs sm:max-w-full lg:max-w-screen-lg mx-auto'>
			<h1 className=' font-serif font-semibold text-3xl my-10 text-center'> Burmese Foods</h1>

            {/* Card */}

            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-3'> 
                {Datas.map( (data) => {
                    return(
                        <div key={data.Id} className="flex flex-col rounded-lg bg-white md:max-w-xl md:flex-row shadow-md m-3">
                            <img className="rounded-t-lg object-cover aspect-square md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
                                src={`/img/${data.Name}.jpg`}
                                onError={(e) => {
                                    e.target.src = "/img/default.png";
                                }}
                            />
                            <div className="w-full flex flex-col justify-between p-6">

                                <div className=''>
                                    <h5 className="mb-2 text-xl text-neutral-800 ">
                                    {data.Name}
                                    </h5>
                                </div>
                                
                                <div className=' flex justify-end'>
                                    <Link to={`/${data.Id}`} className=" underline text-cyan-600 ">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

		</div>
	)
}