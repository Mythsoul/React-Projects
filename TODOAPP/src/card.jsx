import { Pencil, Trash2 } from 'lucide-react';
export  function Card(detail) {
    return (
        <div className="card mt-4">
            <div className="card-title flex justify-between">
                <h3>{detail.title}</h3>
                <div className="flex items-center">
                    <button className="mr-2 text-blue-500 hover:text-blue-700" type="button"><Pencil className="h-4 w-4" /></button>
                    <button className="mr-2 text-red-500 hover:text-red-700" type="button"><Trash2 className="h-4 w-4" /></button>
                </div>
            </div>
            <p>{detail.description ? detail.description : "No description"}</p>
        </div>
    )
}
export default Card ; 