import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../slices/modalSlice';

import InDevelopment from './inDevelopment.jsx';

const modals = {
  inDevelopment: InDevelopment,
};

const ModalWindow = () => {
  const dispatch = useDispatch();
  const { isOpen, type } = useSelector((state) => state.modal);

  const handleClose = () => dispatch(actions.closeModal());

  const Modal = modals[type];
  if (!Modal) {
    return null;
  }
  return <Modal handleClose={handleClose} isOpen={isOpen} />;
};

export default ModalWindow;
