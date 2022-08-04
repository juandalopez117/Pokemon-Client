import React from 'react'
import { useHistory } from 'react-router-dom'
import './Landing.scss'


function LandingPage() {
  const history = useHistory()
  return (
    <div className="pokeball"></div>

  )
}
export default LandingPage

{/* <button className={S.header} onClick={() => history.push('/home')}> */}