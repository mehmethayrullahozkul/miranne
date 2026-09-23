import type { InputHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FormField({ label, error, id, ...props }: FormFieldProps) {
  return (
    <div className="form-field">
      <label className="visually-hidden" htmlFor={id}>{label}</label>
      <input id={id} aria-label={label} placeholder={label} aria-invalid={Boolean(error)} {...props} />
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}
