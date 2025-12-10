import { toast } from 'react-hot-toast';
import { CheckCircle, XCircle, X } from 'lucide-react';

type ToastProps = {
  t: any;
  type: 'success' | 'error';
  title: string;
  message: string;
};

/**
 * @typedef ToastProps
 * @property {Object} t - The toast object provided by react-hot-toast.
 * @property {'success' | 'error'} type - The type of toast, either 'success' or 'error'.
 * @property {string} title - The title of the toast message.
 * @property {string} message - The message content of the toast.
 * @returns {JSX.Element} The custom toast component.
 * @description A custom toast component that displays a success or error message with an icon and a close button.
 */

/**
 * Custom toast component for displaying success or error messages.
 * @param {ToastProps} param0 - The props for the toast component.
 * @returns {JSX.Element} The custom toast component.
 */
function CustomToast({ t, type, title, message }: ToastProps) {
  const isSuccess = type === 'success';

  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-opacity-5 transform transition-all duration-300`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="shrink-0">
            {isSuccess ? (
              <CheckCircle className="h-6 w-6 text-green-400" />
            ) : (
              <XCircle className="h-6 w-6 text-red-400" />
            )}
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{message}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-400 hover:text-gray-500 focus:outline-none  focus:ring-indigo-500 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/**
 *
 * @param {string} title
 * @param {string} message
 */

export const showSuccessToast = (title: string, message: string) => {
  toast.custom((t) => (
    <CustomToast t={t} type="success" title={title} message={message} />
  ));
};
/**
 *
 * @param {string} title
 * @param {string} message
 */
export const showErrorToast = (title: string, message: string) => {
  toast.custom(
    (t) => <CustomToast t={t} type="error" title={title} message={message} />,
    { duration: 5000 }
  );
};

/**
 *
 * @param {'success' | 'error'} type
 * @param {string} title
 * @param {string} message
 */
export const showToast = (
  type: ToastProps['type'],
  title: string,
  message: string
) => {
  if (type === 'success') {
    showSuccessToast(title, message);
  } else if (type === 'error') {
    showErrorToast(title, message);
  } else {
    console.error("Invalid toast type. Use 'success' or 'error'.");
  }
};
