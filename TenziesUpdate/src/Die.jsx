import React from 'react'

export default function Main(props){
    const styles={
        backgroundColor:props.isheld?"#59E391":"#FFFFFF"
    }
    return (
        <div className='container'>
      <button  style={styles} onClick={props.handleClick}>{props.value}</button>
        </div>
    )
}