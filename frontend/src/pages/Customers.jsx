import React, {useState} from "react";
import { useEffect } from "react";


function Customers(){ 

 const [customers, setCustomers] = useState(() =>{
    const saved = localStorage.getItem("customers");
    return saved ? JSON.parse(saved):[
    {id: 1, name: "Kamogelo Mafaesa"},
    {id: 2, name: "Farayi Mpofu"},
    {id: 3, name: "John Doe"},
    ]
 }); /* useState will act as a box to store my customers, it start off empty*/
 const [name, setName] = useState("");

 const [editingId, setEditingId] = useState(null);
 const [editedName, setEditedName] = useState("");

useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
}, [customers]);

//Adding customers logic
const handleAddCustomer = (e) =>{
    e.preventDefault(); // stops page reload
    if(!name.trim()) return; //checks if name is filled

    const newCustomer = { //creates a new object
        id: Date.now(), //this will give each object/customer a new unique id
        name,
    };
    //adds new object to customer list
    setCustomers((prev) => [...prev, newCustomer]); //setCustomers updates the box
    setName("");//clear input
};


//Deleting customers logic
const handleDelete = (id) => {
    setCustomers((prev) => prev.filter((customer) => customer.id !== id));
};

//start editing customer names logic

const startEditing = (customer) => {
    setEditingId(customer.id);
    setEditedName(customer.name);
};

//Save edited customer name

const handleSavedEdit = (id) => {
    setCustomers((prev) =>
    prev.map((customer) =>
    customer.id === id ? {...customer, name: editedName } : customer
    )
    );
    setEditingId(null);
    setEditedName("");
};


return(

      
    <div>
        <h2 className="text-2xl font-bold mb-4">Customers</h2>
         
        <form onSubmit={handleAddCustomer} className="mb-6 flex gap-2">
            <input type = "text"
            placeholder="Enter customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded w-64"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2">Add</button>
        </form>

        <ul className="space-y-2">
            {customers.map((customer) => (
                <li key={customer.id} className="bg-white p-3 rounded shadow flex justify-between items-center">

                    {editingId === customer.id ? (
                        <>
                        <input
                        type ="text"
                        value = {editedName}
                        onChange = {(e) => setEditedName(e.target.value)}
                        className = "border p-1 rounded mr-2"
                        />

                        <button onClick={() => handleSavedEdit(customer.id)}
                            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                                Save
                        </button>

                        <button onClick={() => setEditingId(null)} 
                         className="bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500">
                            Cancel
                        </button>
                        </>
                    ):(
                        <>
                   <span>{customer.name}</span>

                   <div className="flex gap-2">


                    <button onClick={() => startEditing(customer)}
                     className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                        Edit
                    </button>

                    <button onClick={() => handleDelete(customer.id)} 
                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
                    </button> 
                   </div>
                    </>
                    )}
                </li>
            ))}
        </ul>

    </div>
);
}
export default Customers;