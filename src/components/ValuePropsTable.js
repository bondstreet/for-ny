
import React from 'react'
import classnames from 'classnames'

const ValuePropsTable = (props, { data }) => {
    const { valueProps } = data.landing.about
    const colorClass = props.dark ? 'bg-black mint' : 'bg-yellow black'

    const cx = classnames(
        'sm-table-cell',
        'center',
        'mb1',
        'p2',
        'bg-black',
        colorClass
    )

    return (
        <div className='sm-table table-fixed col-12 mb2'
            style={{
                borderSpacing: '4px'
            }}>
            {valueProps.map(({ label, value }, i) => (
                <div key={i}
                    className={cx}>
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

