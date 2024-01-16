import { Link, useParams } from "react-router-dom";
import Datas from '../Data.json'

export default function Detail(){

    let Id= useParams().Id;
    let searchData = Datas.find(data => data.Id == Id)

    return(
        <div className=" max-w-full sm:max-w-screen-sm md:max-w-screen-lg m-auto p-5">
            <h1 className=' font-serif font-semibold text-3xl my-10 text-center'> Burmese Foods</h1>

            <div className=" grid grid-cols-1 md:grid-cols-2 mt-14">

                <img className="object-cover aspect-square max-w-80 md:w-3/4 mx-auto mb-5" 
                    src={`/img/${searchData.Name}.jpg`}
                    onError={(e) => {
                        e.target.src = "/img/default.png";
                    }}
                />
                
                <div className=" text-xl">
                    <h1 className=" font-semibold font-serif">Type</h1>
                    <p className="pt-3 pb-5 leading-10"> 
                        { searchData.UserType == 0 ? "သက်သက်လွတ်" : "အသားဟင်း" } 
                    </p>

                    <h1 className=" font-semibold font-serif">Menu Name</h1>
                    <p className="pt-3 pb-5 leading-10"> 
                        {searchData.Name}
                    </p>

                    <h1 className=" font-semibold font-serif">Ingredients</h1>
                    <p className="pt-3 pb-5 leading-10"> 
                        {searchData.Ingredients}
                    </p>

                    <h1 className=" font-semibold font-serif">How To Cook</h1>
                    <p className="pt-3 pb-5 leading-10"> 
                        {searchData.CookingInstructions}
                    </p>
                </div>
            </div>
            
            <div className=" flex justify-end my-5"> 
                <Link to={"/"} className="font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"> Back </Link>
            </div>
        </div>
    )
}