import React from 'react'
import { useDispatch } from 'react-redux';
import { createService } from '../../actions/ServicesActions';

export default function CreateServiceForm(props) {
    const dispatch = useDispatch();

  return (
    <div>
        <h2>Create Service Form</h2>
        <form onSubmit={(e)=>createService(dispatch, e)}>
            <label>serviceDescription</label>
            <input type="text" name="serviceDescription" id="serviceDescription" />
            <label>price</label>
            <input type="text" name="price" id="price" />
            <label>serviceCategory</label>
            <input type="text" name="serviceCategory" id="serviceCategory" />
            <button type="submit">Create Service</button>
        </form>
    </div>
  )
}
