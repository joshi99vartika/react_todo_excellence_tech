import React, {useState} from 'react'
import todo from '../images/todo.png'
import "../App.css"

const Todo = () =>
{
    
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState([])

    const addItem = () =>
    {
        if (!inputData)
        {
            
        } else
        {
            setItems([...items, inputData])
            setInputData("")
        }
        
    }

    const deleteItem = (id) =>
    {
        const updatedItems = items.filter((element, ind) =>
        {
            return ind !== id
        })

        setItems(updatedItems)
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todo logo" />
                        <figcaption>Add your List Here </figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="Add Item here " name=""
                            value={inputData}
                            onChange={ e => setInputData(e.target.value)}
                        />
                        <i className="fa fa-plus add-btn" title="Add Item"
                            onClick={addItem}
                        ></i>
                    </div>

                    <div className="showItems">
                        {
                            items.map((elem, ind) =>
                            {
                                return (
                                    <div className="eachItem" key={ind}>
                                        <h3>{elem}</h3>
                                        <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(ind)}></i>
                                    </div>
                                )
                            })
                        }
                       
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Todo
