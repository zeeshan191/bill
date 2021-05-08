import React from "react";
import { FaPlusCircle,FaMinus} from 'react-icons/fa';
const TaskList = (props) => {
  return (
    props.taskList.map((val, idx) => {
      let itemsPurchase = `itemsPurchase-${idx}`, qty = `qty-${idx}`, price = `price-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <input type="text"  name="itemPurchase" data-id={idx} id={itemsPurchase} className="form-control " />
          </td>
          <td>
            <input type="text"  name="qty" id={qty} data-id={idx} className="form-control " />
          </td>
          <td>
          <input type="text"  name="price" id={price} data-id={idx} className="form-control " />
          </td>
          
          <td>
            {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><FaPlusCircle /></button>
            : <button className="btn btn-danger" onClick={(() => props.delete(val))} ><FaMinus /></button>
            }
          </td>
        </tr>
      )
    })
  )
}
export default TaskList