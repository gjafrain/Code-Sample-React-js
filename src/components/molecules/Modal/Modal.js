import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Modal as SModal } from 'semantic-ui-react'
// REDUX ACTIONS
import { closeModal } from '../../../redux/modules/modal/actions';
// CHILD 
import { AddEditAddress } from './Views/AddEditAddress';
import { ConfirmOrder } from './Views/ConfirmOrder';
import { SignIn } from './Views/SignIn';
import { SignUp } from './Views/SignUp';
import { ContactUs } from './Views/ContactUs';


export default function Modal({ }) {

    const dispatch = useDispatch(),
        open = useSelector(state => state.modal.openModal),
        { viewType, callBack, data } = useSelector(state => state.modal);

    const _renderView = () => {
        switch (viewType) {
            case 'SignIn':
                return <SignIn onClose={onClose} />
            case 'ContactUs':
                return <ContactUs onClose={onClose} />
            case 'Address':
                return <AddEditAddress callBack={callBack} onClose={onClose} data={data} />
            case 'ConfirmOrder':
                return <ConfirmOrder callBack={callBack} data={data} />
           case 'SignUp':
                return <SignUp callBack={callBack} data={data} onClose={onClose} />
            default:
                return <SignIn />
        }
    }

    const onClose = () => dispatch(closeModal())

    return (
        <SModal
            dimmer={'blurring'}
            open={open}
            onClose={onClose}
            className=''
        >
            <>
                <ToastContainer position="top-center" hideProgressBar={true} />
                {_renderView()}
            </>
        </SModal>
    )
}
