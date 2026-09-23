import { useState, type FormEvent } from 'react';
import { FormField } from '../components/FormField';
import { PrimaryButton } from '../components/PrimaryButton';
import { useApp } from '../hooks/useApp';
import { isNonEmpty } from '../utils/validation';

export function ResetPasswordPage() {
  const { data, submitReset } = useApp();
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  if (!data) return null;
  const copy = data.content.auth;
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!isNonEmpty(password)) nextErrors.password = copy.requiredField;
    if (password !== confirmation) nextErrors.confirmation = copy.passwordMismatch;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSubmitting(true);
    await submitReset(password);
    setSubmitting(false);
  };
  return <main className="auth-page focused-auth"><section className="auth-card"><h1>{copy.resetTitle}</h1><p>{copy.resetSubtitle}</p><form onSubmit={submit} noValidate><FormField id="reset-password" type="password" label={copy.password} value={password} error={errors.password} onChange={(e) => setPassword(e.target.value)} /><FormField id="reset-confirmation" type="password" label={copy.passwordConfirmation} value={confirmation} error={errors.confirmation} onChange={(e) => setConfirmation(e.target.value)} /><PrimaryButton disabled={submitting}>{copy.sendAction}</PrimaryButton></form></section></main>;
}
