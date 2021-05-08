import React from "react"
import './App.css'
import { FiPlusSquare } from 'react-icons/fi';
import TaskList from "./TaskList"

import { NotificationContainer, NotificationManager } from 'react-notifications';
class Form extends React.Component {
    state = {
        taskList: [{ index: Math.random(), itemPurchase: "", qty: "", price: "" }],
        date: "",
        description: "",
    }

    handleChange = (e) => {
        if (["itemPurchase", "qty", "price"].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = () => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, { index: Math.random(), itemPurchase: "", qty: "", price: "" }],
        }));
    }


    deteteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    };
    handleSubmit = (e) => {
        alert('hello'); 
        e.preventDefault();
        if (this.state.selectedItem === '' || this.state.qty === '') {
            alert('running 1');
            NotificationManager.warning("Please Fill up Required Field . Please check Task and Date Field");
            return false;
        }
        for (var i = 0; i < this.state.taskList.length; i++) {
            alert('running 2');
            if (this.state.taskList[i].itemPurchase === '' || this.state.taskList[i].price === '') {
                alert('running 3');
                NotificationManager.warning("Please Fill up Required Field.Please Check Project name And Task Field");
                return false;
            }
        }
        let data = { formData: this.state};
        
    console.log("data : ", data);
    console.log("data HEader : ", data.formData);
    console.log("data Task : ", data.formData.taskList);
    console.log("Length of Row : ", data.formData.taskList.length);
    alert(data);
    return false;
    };
    clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }
    render() {
        let { taskList } = this.state//let { notes, date, description, taskList } = this.state
        return (
            <div className="content">
                <NotificationContainer />
                <div className="card height-auto" >
                <div className="card-body">



                <form className="mg-b-20" onSubmit={this.handleSubmit} onChange={this.handleChange} >

                <div className='container'>
                <div className="row gutters-8">
                    <div className="col-lg-4  col-12 form-group">
                        <label style={{ marginLeft: '40px' }}>Item ID</label>
                        <input type="Number" placeholder="Item ID ..." className="form-control" />
                    </div>
                    <div className="col-lg-4 col-12 form-group">
                        <label style={{ marginLeft: '40px' }}>Item Name</label>
                        <input type="text" placeholder="Item Name ..." className="form-control" />
                    </div>
                    <div className="col-lg-1 col-04 form-group" style={{ marginTop: '22px' }}>
                        <button type="submit" className="fw-btn-fill btn-gradient-yellow" style={{ width: "100px", marginLeft: '50px' }}>SEARCH</button>
                    </div>
                    <div className="col-lg-1  col-12 form-group1 ">
                        <label style={{ marginLeft: '-40px' }}>GST%</label>
                        <input type="" placeholder="GST..." className="form-control" style={{ marginLeft: '-50px' }} />
                    </div>
                </div></div>
                <div className='container1'>
                <div className="row gutters-8">
                    <div className="col-lg-5  col-12 form-group1" style={{ marginLeft: '92px' }}>
                        <label > Selected Item </label>
                        <input type="" placeholder=" Selected Item ..." className="form-control" />
                    </div>
                    <div className="col-sm-3   form-group1" style={{
                        marginInline: '176px', width: '85px'
                        , marginLeft: '167px'
                    }}>
                        <label >QTY</label>
                        <input type="number" placeholder="num.." className="form-control" />
                    </div>
                    <div className="col-sm-3   form-group1" style={{ marginLeft: '-208px' }}>
                        <button onClick={this.addNewRow} type="button" className="fw-btn-fill btn-gradient-yellow" style={{ width: "80px", marginLeft: '125px', marginTop: '25px' }}><FiPlusSquare /></button>
                    </div>
                    <div className="col-md-3 form-group" style={{
                        marginLeft: '700px'
                        , width: '200px', marginTop: '30px'
                    }}>
                        <label for="gender">Discount in %</label>
                        <select name="percentage" id="per" class="form-control">
                            <option value="">
                                Select </option>
                            <option value="5%">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                    </div>

                </div>   </div>

                    <div className="row" style={{ marginTop: 5 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                         

                              
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >itemPurchase</th>
                                                <th className="required" >QTY</th>
                                                <th>Price</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} />
                                        </tbody>
                                        
                                    </table>
                          
                                
                            </div>
                        </div>
            

                       
               <hr />
            
              
                <div className="heading-layout1">
                <div className="item-title" style={{    marginLeft: '600px'
                }}>
                    <h3 >Discount</h3>
                
            </div>
            <div className="col-sm-3   form-group" style={{marginRight: '14px',
            width: '200px',
            marginBottom: '19px' }}>
           
           
          </div>
            
            
            
            </div>
            <div>
            <div className="heading-layout1">
            <div className="item-title" style={{    marginLeft: '600px'
            }}>
                <h3 >Tax</h3>
            
        </div>
        <div className="col-sm-3   form-group"style={{marginRight: '14px',
        width: '200px',
        marginBottom: '19px' }}>
       
       
          
      </div>
        
        
        
        </div>
        <div className="heading-layout1">
        <div className="item-title" style={{    marginLeft: '600px'
        }}>
            <h3  >Total</h3>
        
    </div>
    <div className="col-sm-3   form-group" style={{marginRight: '14px',
    width: '200px',
    marginBottom: '19px' }}>
   
  
      
  </div>
    
    
  </div>
  <div className="heading-layout1">
  <div className="item-title" style={{    marginLeft: '600px'
  }}>
      <h3  >Discount Total</h3>
  
</div>
<div className="col-sm-3   form-group" style={{marginRight: '14px',
width: '200px',
marginBottom: '19px' }}>



</div>


</div>

    </div>
    <div className="col-12 form-group mg-t-8">
    <button type="submit" className="btn-fill-lg  " style={{marginLeft:"400px"}} >Print</button>

</div>      
                </form>

            </div>
            </div>
            </div>
        )
    }
}
export default Form