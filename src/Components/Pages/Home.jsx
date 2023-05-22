import React from 'react'
const Home = () => {
  return (
    <>
      <div className='container-fluid' style={{width:'50%',margin:'50px auto 0px auto',display:'flex',flexDirection:'column',justifyItems:'center',alignItems:'center',border:'2px dashed black', borderRadius:'20px'}}>
              <div className='row'>
                        <div className='col-12'>
                              <h1> CRUD APP</h1>
                        </div>
                        <div className='col-12'>
                              <h3> C: CREATE</h3>
                        </div>
                        <div className='col-12'>
                              <h3> R: READ</h3>
                        </div>
                        <div className='col-12'>
                              <h3> U: UPDATE</h3>
                        </div>
                        <div className='col-12'>
                              <h3> D: DELETE</h3>
                        </div>
              </div>
      </div>
    </>
  )
}

export default Home