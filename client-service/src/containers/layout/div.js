import React from 'react'

const div = (props) => {
    return (
        <div style={{ 'padding': '1rem 0' }}>
            {props.children}
        </div>
    )
}

export default div