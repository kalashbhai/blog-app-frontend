import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  const notify = (type, message) => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <ToastContainer />
      <button onClick={() => notify('success', 'Operation successful!')}>Show success toast</button>
      <button onClick={() => notify('error', 'An error occurred!')}>Show error toast</button>
    </div>
  );
}

export default Toast;
