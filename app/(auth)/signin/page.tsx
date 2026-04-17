export default function signin(){
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div  className="flex flex-col ">
                <br />
                <input className=" border border-amber-600 gap-3 p-3" type="text" placeholder="Username" />
                <br />
            <input className="border border-amber-600 gap-3 p-3" type="text" placeholder="Password" />
                <br />

                 <button className="border p-3 border-amber-950 bg-blue-900 cursor-pointer">Signin</button>
            </div>
           
        </div>
    )
}