import Puran from "./data.json"
export default function Button(){

    return (
        <div className="flex flex-row gap-x-5 overflow-x-scroll">
            {Puran.map((list , index)=> (
                <button key={index} className="w-fit text-nowrap bg-amber-600 p-2 rounded-sm">{list.name}</button>
            ))}
        </div>
    )
}