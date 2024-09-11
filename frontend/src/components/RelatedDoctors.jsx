import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = ({speciality, docId}) => {

    const { doctors } = useContext(AppContext)
    const [relDoc, setRelDoc] = useState([])

    return (
        <div>RelatedDoctors</div>
    )
}

export default RelatedDoctors