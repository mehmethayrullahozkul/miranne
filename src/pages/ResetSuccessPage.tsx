import { Icon } from '../components/Icon';
import { PrimaryButton } from '../components/PrimaryButton';
import { ROUTES } from '../constants/app';
import { useApp } from '../hooks/useApp';

export function ResetSuccessPage() {
  const { data, navigate } = useApp();
  if (!data) return null;
  return <main className="success-page"><div className="success-message"><span><Icon name="check" /></span><p>{data.content.auth.successMessage}</p></div><PrimaryButton onClick={() => navigate(ROUTES.LOGIN)}>{data.content.auth.loginAction}</PrimaryButton></main>;
}
