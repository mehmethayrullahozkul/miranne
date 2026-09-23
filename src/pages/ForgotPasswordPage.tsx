import { useState, type FormEvent } from 'react';
import { FormField } from '../components/FormField';
import { PrimaryButton } from '../components/PrimaryButton';
import { useApp } from '../hooks/useApp';
import { isValidEmail } from '../utils/validation';

export function ForgotPasswordPage() {
  const { data, requestReset } = useApp();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  if (!data) return null;
  const copy = data.content.auth;
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!isValidEmail(email)) { setError(copy.invalidEmail); return; }
    setSubmitting(true);
    await requestReset(email);
    setSubmitting(false);
  };
  return <main className="auth-page focused-auth"><section className="auth-card"><h1>{copy.forgotTitle}</h1><p>{copy.forgotSubtitle}</p><form onSubmit={submit} noValidate><FormField id="forgot-email" type="email" label={copy.email} value={email} error={error} onChange={(event) => setEmail(event.target.value)} /><PrimaryButton disabled={submitting}>{copy.resetAction}</PrimaryButton></form></section></main>;
}
