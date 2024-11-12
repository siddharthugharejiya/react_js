import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { single_action } from '../Redux/action'

export default function Singlepage() {
    const dispatch = useDispatch()
    const single = useSelector(state => state.single)
    console.log(single)
    useEffect(()=>{
        dispatch(single_action())
    },[])
  return (
    <div>Singlepage</div>
  )
}
