
import React from 'react'

const ValuePropsTable = (props, { data }) => {
    const { valueProps } = data.landing.about

    return (
        <div className='sm-table table-fixed col-12 mb2'
            style={{
                borderSpacing: '4px'
            }}>
            {valueProps.map(({ label, value }, i) => (
                <div key={i}
                    className='sm-table-cell center mb1 p2 black bg-yellow'>
                    <div className='bold'>
                        {label}
                    </div>
                    <div className='tk-nimbus-sans-extended bold'>
                        {value}
                    </div>
                </div>
            ))}
        </div>
    )
}

ValuePropsTable.contextTypes = {
    data: React.PropTypes.object
}

export default ValuePropsTable

