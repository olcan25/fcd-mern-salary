import 'alertifyjs/build/css/alertify.min.css';
import alertify from 'alertifyjs';

export const successMessage = (message,delay=5) => {
    alertify.success(message,delay);
}

export const errorMessage = (message,delay=7) => {
    alertify.error(message,delay);
}
