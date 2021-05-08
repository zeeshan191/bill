import React from 'react'
import { FiPlusSquare } from 'react-icons/fi';

function ItemForm() {
    return (<>
        <div className="card height-auto" >
        <div className="card-body">

            <form className="mg-b-20">
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
                        <div class="col-sm-3   form-group1" style={{
                            marginInline: '176px', width: '85px'
                            , marginLeft: '167px'
                        }}>
                            <label >QTY</label>
                            <input type="number" placeholder="num.." className="form-control" />
                        </div>
                        <div class="col-sm-3   form-group1" style={{ marginLeft: '-208px' }}>
                            <button type="submit" className="fw-btn-fill btn-gradient-yellow" style={{ width: "80px", marginLeft: '125px', marginTop: '25px' }}><FiPlusSquare /></button>
                        </div>
                        <div class="col-md-3 form-group" style={{
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
            </form>




            <div className="table-responsive">
                <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper no-footer">
                    <table className="table display data-table text-nowrap dataTable no-footer table-striped" id="DataTables_Table_0" role="grid" >
                        <thead>
                            <tr role="row">
                                <th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Admission iD: activate to sort column ascending" >Items Purchase</th>
                                <th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="photo: activate to sort column ascending" >QTY</th>
                                <th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="photo: activate to sort column ascending" >Price</th>


                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr role="row" className="odd ">

                                <td>towel</td>
                                <td>02</td>
                                <td>200</td>
                            </tr>
                        </tbody>
                        <tbody className="text-center">
                            <tr role="row" className="odd ">


                                <td>Rice</td>
                                <td>01</td>
                                <td>1650</td>
                            </tr>
                        </tbody>
                        <tbody className="text-center">
                            <tr role="row" className="odd ">


                                <td>Handkey</td>
                                <td>05</td>
                                <td>250</td>
                            </tr>
                        </tbody>
                        <tbody className="text-center">
                            <tr role="row" className="odd ">


                                <td>samosa</td>
                                <td>10</td>
                                <td>100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr />
            
            
            <form>
            <div className="row">
           
           
            <div className="heading-layout1">
            <div className="item-title" style={{    marginLeft: '580px'
            }}>
                <h3 >Final Total</h3>
            
        </div>
        <div className="col-sm-3   form-group1" style={{marginRight: '60px' }}>
       
        <input type="text" 
            placeholder="Number" 
            className="form-control" 
            id="totalId"
            name="totalId"/>
          
      </div>
        
      </div>
        
        </div>
        <div>
        <div className="heading-layout1">
        <div className="item-title" style={{    marginLeft: '580px'
        }}>
            <h3 >Percentage</h3>
        
            
    <div className="col-sm-3   form-group1" style={{marginRight: '60px' }} >
   
    <input type="text" 
        placeholder="Percentage" 
        className="form-control" 
        id="totalId"
        name="totalId"/>
        </div>
  </div>
    
    
    
    </div>
    <div className="heading-layout1">
    <div className="item-title" style={{    marginLeft: '580px'
    }}>
        <h3  >Result</h3>
    
</div>
<div className="col-sm-3   form-group1" style={{marginRight: '60px' }} >

<input type="text" 
    placeholder="Number" 
    className="form-control" 
    id="totalId"
    name="totalId"/>
  
</div>


</div>
</div>
<div className="col-12 form-group mg-t-8">
<button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark " style={{marginLeft:"400px"}} >Submit</button>

</div>      
            </form>
    
    

   


        </div>
    </div>
        </>
    )
}

export default ItemForm
