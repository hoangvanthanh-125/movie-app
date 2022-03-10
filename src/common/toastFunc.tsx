import { toast } from 'react-toastify';

export const ToastFuncError = (err:any) => {
  let message = null;
  if(typeof err === 'object' && err.message){
    ({message} = err);
    toast.error(message);
  }
}
export const  ToastFuncSuccess = (mess:string) =>{
  if(mess!==null){
      toast.success(mess);
  }
}