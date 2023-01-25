import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'

const OrderList = (props) => {
    return (
        <div className='orderlist'>
            <h1>Order List</h1>

            <Scrollbars autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                autoHeight
                autoHeightMin={0}
                autoHeightMax={400}>


                <table>
                    <thead>
                        <tr>
                            <th>ORDER NO.</th>

                            <th>STATUS</th>
                            <th>OPERATORS</th>
                            <th>LOCATION</th>
                            <th>DISTANCE</th>
                            <th>START DATE</th>
                            <th>EST DELIVERY DUE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data && props.data.map((item, indx) => {
                            return (
                                <tr key={indx}>
                                    <td>#{item.orderNo}</td>
                                    <td><div className={item.status === 'Moving' ? 'status-circle moving ' : item.status === 'Pending' ? 'status-circle pending' : item.status === 'Cancelled' ? 'status-circle cancelled' : item.status === 'Delivered' ? 'status-circle delivered' : ''} > </div>{item.status}</td>
                                    <td>{item.operators}</td>
                                    <td>{item.location}</td>
                                    <td>{item.distance} km </td>
                                    <td>{item.startDate}</td>
                                    <td>{item.deliveryDate}</td>
                                </tr>

                            )
                        })}


                    </tbody>


                </table>


            </Scrollbars>




        </div>
    )
}

export default OrderList