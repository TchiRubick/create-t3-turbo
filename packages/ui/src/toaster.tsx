"use client";

import { useToast } from "./_hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";

export type ToastType = {
  title?: string;
  description?: string;
  action?: JSX.Element | boolean;
  id: string;
};

export function Toaster() {
  const toasts: ToastType[] = useToast();

  return (
    <ToastProvider>
      {toasts.map(function (toast: ToastType) {
        const { id, title, description, action, ...props } = toast;
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
