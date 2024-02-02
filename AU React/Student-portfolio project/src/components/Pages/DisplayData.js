import React from 'react'

export const DisplayData = (props) => {
    return (
        <div>{props.onSendData.map((item) => {
            return (
                <div>

                    <p>{item.value0}</p>
                    <p>{item.value1}</p>
                    <p>{item.value2}</p>
                    <p>{item.value3}</p>
                    <p>{item.value4}</p>
                </div>
            )
        })}</div>
    )
}
