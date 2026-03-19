import {
  IconCircleCheck as CheckCircle,
  IconInfoCircle as Info,
  IconAlertTriangle as AlertTriangle,
  IconCircleX as XCircle,
  IconX as X,
} from '@tabler/icons-react';
import type { Toast } from 'react-hot-toast';
import { cn } from '~/lib/utils';

interface CustomToastProps {
  toast: Toast;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  onDismiss: () => void;
}

export function CustomToast({
  toast,
  title,
  message,
  type,
  onDismiss,
}: CustomToastProps) {
  const config = {
    success: {
      icon: CheckCircle,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-400',
      iconBgColor: 'bg-green-500',
      textColor: 'text-green-900',
    },
    info: {
      icon: Info,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-400',
      iconBgColor: 'bg-blue-500',
      textColor: 'text-blue-900',
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-400',
      iconBgColor: 'bg-yellow-500',
      textColor: 'text-yellow-900',
    },
    error: {
      icon: XCircle,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-400',
      iconBgColor: 'bg-red-500',
      textColor: 'text-red-900',
    },
  };

  const {
    icon: Icon,
    bgColor,
    borderColor,
    iconBgColor,
    textColor,
  } = config[type];

  return (
    <div
      className={cn(
        'border-2 rounded-2xl shadow-lg p-4 flex items-start gap-3 min-w-87.5 max-w-md',
        bgColor,
        borderColor,
        toast.visible ? 'animate-enter' : 'animate-leave'
      )}
    >
      <div className={cn('rounded-full p-2 shrink-0', iconBgColor)}>
        <Icon className="w-5 h-5 text-white" />
      </div>

      <div className="flex-1 pt-0.5">
        <h3 className={cn('font-bold text-base mb-0.5', textColor)}>{title}</h3>
        <p className="text-gray-600 text-sm">{message}</p>
      </div>

      <button
        onClick={onDismiss}
        className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
