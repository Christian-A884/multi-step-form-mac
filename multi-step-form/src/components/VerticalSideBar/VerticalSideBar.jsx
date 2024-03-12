import './VerticalSideBar.css'

const VerticalSideBar = () => {
  return (
    <>
      <div className="vertical-side-bar">
        <div className='steps'>
            <div className='circle'>1</div>
            <div className='step-content'>
              <span>step 1</span>
              <p>your info</p>
            </div>
        </div>
        <div className='steps'>
            <div className='circle active'>2</div>
            <div className='step-content'>
              <span>STEP2</span>
              <p>SELECT PLAN</p>
            </div>
        </div>
        <div className='steps'>
            <div className='circle'>3</div>
            <div className='step-content'>
              <span>STEP3</span>
              <p>ADD-ONS</p>
            </div>
        </div>
        <div className='steps'>
            <div className='circle'>4</div>
            <div className='step-content'>
              <span>STEP4</span>
              <p>SUMMARY</p>
            </div>
        </div>
            
        
      </div>
    </>

  )
}

export default VerticalSideBar