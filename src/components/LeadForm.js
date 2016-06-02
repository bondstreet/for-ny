import React from 'react'

class LeadForm extends React.Component {

  render () {
      return (
        <form>
            <input type='text' name='business_name' />
            <input type='text' name='name' />
            <input type='email' name='email' />
            <input type='text' name='phone_number' />
            <button type='submit'>Submit</button>
        </form>
      )    
  }
}

LeadForm.contextTypes = {
  data: React.PropTypes.object
}

export default LeadForm
