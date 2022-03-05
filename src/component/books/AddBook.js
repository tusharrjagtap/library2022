import React, { useState } from 'react';
 import Validation from '../Validation';
function AddBook() {
  //setting errors to empty object
  const[errors,setErrors]=useState({});
  //setting defalut values
  const[values,setValues]=useState({
    sellername:"",
    bname:"",
    aname:"",
    bookid:"",
    publisher:"",
    language:"",
    entrydate:"",
    purchasedate:""

  });
  // on typing values it will get stored here
  const handleChange=(event)=>{
               setValues({
                ...values,
                [event.target.name]:event.target.value,
               })
  };
  //to avoid refreshment of page after clicking login
  const handleLogin =(event)=>{
  event.defaultPrevented();
    //calling validation
     setErrors(Validation(values)); 
  };
  //to cancel customer add
  const cancelAddBook=(event)=>{
    event.defaultPrevented();
  }
  return (
  <>
          
  <div className='container' >
  
      <div className='app-wrapper'>
          <div>
              <h2 className='title'> Add new Book</h2>

          </div>
          
          <form className='form-wrapper' >

                      <div className='name'>
                      <label className='label'>Enter Book Name</label>
                        <input type="text"  id="bname" className='input' name='bname' value={values.bname} onChange={handleChange}/>
                        {errors.bname && <p className='error'>{errors.bname}</p>}
                      </div>
                      <div className='name'>
                      <label className='label'>Enter Author Name</label>
                        <input type="text"  id="aname" className='input' name='aname' value={values.aname} onChange={handleChange}/>
                        </div>
                        <div className='id'>
                            <label className='label'>Enter Book Id</label>
                          <input type="text" id='bookid' className='input' name='bookid' value={values.bookid} onChange={handleChange}/>
                        </div>
                        <div className='name'>
                            <label className='label'>Enter Publisher</label>
                          <input type="text" id='publisher' className='input' name='publisher' value={values.publisher} onChange={handleChange}/>
                        </div>

                        <div className='name'>
                      <label className='label'>Purchased From</label>
                        <input type="text" id="sellername" className='input' name='sellername' value={values.sellername} onChange={handleChange}/>
                        {errors.sellername && <p className='error'>{errors.sellername}</p>}
                      </div>

                      <div className='name'>
                      <label className='label'>Langauage of Book</label>
                        <input type="text" id="language" className='input' name='language' value={values.language} onChange={handleChange}/>
                        {errors.language && <p className='error'>{errors.language}</p>}
                      </div>

                        <div className='date'>
                        <label className='label'>Lab Book Entry Date</label>
                        <input type="date" name='entrydate' className='input'/>
                        </div>

                        <div className='date'>
                        <label className='label'>Purchase Date</label>
                        <input type="date" name='purchasedate' className='input'/>
                        </div>
                      
                      <div>
                        <button type='submit' className='addBook' onClick={handleLogin}>Add book</button>
                      <button type='button' className='cancel' onClick={cancelAddBook}>Cancel</button>
                      
                    </div>
          </form>
      </div>
  </div>
  </>);
}

export default AddBook;
