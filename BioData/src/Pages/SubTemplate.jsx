import React from 'react'
import { useParams } from 'react-router-dom'
import { Template } from '../components/Template'

export const SubTemplate = () => {

    const { id } = useParams();

    return (
        <div>
            <Template tId={id} />
        </div>
    )
}
