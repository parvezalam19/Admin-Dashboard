import React from 'react'
import '../dashboard.css'

import { Scrollbars } from 'react-custom-scrollbars-2';




const Notification = (props) => {

    return (

        <Scrollbars autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            autoHeight
            autoHeightMin={0}
            autoHeightMax={500}>

            {props.data && props.data.map((item, idx) => {
                return (
                    <section className='noti-container' key={idx}>
                        <div className='image'>
                            <img src={item.pic}
                                alt="" />
                        </div>

                        <div className="notification-content">
                            <h3 className='message'>{item.message} </h3>
                            <h6 className='time'>{item.time} ago</h6>
                        </div>
                    </section>

                )
            }
            )}
            {props.data && props.data.map((item, idx) => {
                return (
                    <section className='noti-container' key={idx}>
                        <div className='image'>
                            <img src={item.pic}
                                alt="" />
                        </div>

                        <div className="notification-content">
                            <h3 className='message'>{item.message} </h3>
                            <h6 className='time'>{item.time} ago</h6>
                        </div>
                    </section>

                )
            }
            )}

        </Scrollbars>



    )
}

export default Notification