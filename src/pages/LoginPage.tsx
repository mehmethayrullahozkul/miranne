import { useState, type FormEvent } from 'react';
import { FormField } from '../components/FormField';
import { PrimaryButton } from '../components/PrimaryButton';
import { ROUTES } from '../constants/app';
import { useApp } from '../hooks/useApp';
import { isNonEmpty, isValidEmail } from '../utils/validation';

export function LoginPage() {
  const { data, loginUser, navigate } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  if (!data) return null;
  const copy = data.content.auth;

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!isValidEmail(email)) nextErrors.email = copy.invalidEmail;
    if (!isNonEmpty(password)) nextErrors.password = copy.requiredField;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSubmitting(true);
    await loginUser({ email, password });
    setSubmitting(false);
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>{copy.loginTitle}</h1><p>{copy.loginSubtitle}</p>
        <form onSubmit={submit} noValidate>
          <FormField id="login-email" type="email" label={copy.email} value={email} error={errors.email} onChange={(event) => setEmail(event.target.value)} />
          <FormField id="login-password" type="password" label={copy.password} value={password} error={errors.password} onChange={(event) => setPassword(event.target.value)} />
          <button className="text-link auth-forgot" type="button" onClick={() => navigate(ROUTES.FORGOT_PASSWORD)}>{copy.forgotPassword}</button>
          <PrimaryButton disabled={submitting}>{copy.loginAction}</PrimaryButton>
        </form>
      </section>
      <section className="register-teaser"><h2>{copy.registerTitle}</h2><p>{copy.registerSubtitle}</p><PrimaryButton variant="secondary" fullWidth={false} onClick={() => navigate(ROUTES.REGISTER)}>{copy.createAccount}</PrimaryButton></section>
    </main>
  );
}
