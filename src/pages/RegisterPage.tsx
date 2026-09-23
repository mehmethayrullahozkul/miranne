import { useState, type FormEvent } from 'react';
import { FormField } from '../components/FormField';
import { PrimaryButton } from '../components/PrimaryButton';
import { useApp } from '../hooks/useApp';
import { isNonEmpty, isValidEmail } from '../utils/validation';

export function RegisterPage() {
  const { data, registerUser } = useApp();
  const [values, setValues] = useState({ firstName: '', lastName: '', email: '', password: '', passwordConfirmation: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  if (!data) return null;
  const copy = data.content.auth;
  const update = (key: keyof typeof values, value: string) => setValues((current) => ({ ...current, [key]: value }));

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!isNonEmpty(values.firstName)) nextErrors.firstName = copy.requiredField;
    if (!isNonEmpty(values.lastName)) nextErrors.lastName = copy.requiredField;
    if (!isValidEmail(values.email)) nextErrors.email = copy.invalidEmail;
    if (!isNonEmpty(values.password)) nextErrors.password = copy.requiredField;
    if (values.password !== values.passwordConfirmation) nextErrors.passwordConfirmation = copy.passwordMismatch;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSubmitting(true);
    await registerUser(values);
    setSubmitting(false);
  };

  return (
    <main className="auth-page compact-auth"><section className="auth-card"><h1>{copy.createAccount}</h1><p>{copy.registerSubtitle}</p><form onSubmit={submit} noValidate>
      <FormField id="first-name" label={copy.firstName} value={values.firstName} error={errors.firstName} onChange={(e) => update('firstName', e.target.value)} />
      <FormField id="last-name" label={copy.lastName} value={values.lastName} error={errors.lastName} onChange={(e) => update('lastName', e.target.value)} />
      <FormField id="register-email" type="email" label={copy.email} value={values.email} error={errors.email} onChange={(e) => update('email', e.target.value)} />
      <FormField id="register-password" type="password" label={copy.password} value={values.password} error={errors.password} onChange={(e) => update('password', e.target.value)} />
      <FormField id="register-password-confirmation" type="password" label={copy.passwordConfirmation} value={values.passwordConfirmation} error={errors.passwordConfirmation} onChange={(e) => update('passwordConfirmation', e.target.value)} />
      <PrimaryButton disabled={submitting}>{copy.createAccountAction}</PrimaryButton>
    </form></section></main>
  );
}
