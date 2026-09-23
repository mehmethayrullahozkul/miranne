import { PrimaryButton } from '../components/PrimaryButton';
import { ROUTES } from '../constants/app';
import { useApp } from '../hooks/useApp';

export function NotFoundPage() {
  const { data, navigate } = useApp();
  if (!data) return null;
  return <main className="state-page"><span className="not-found-mark">{data.content.common.notFoundCode}</span><h1>{data.content.common.notFoundTitle}</h1><PrimaryButton onClick={() => navigate(ROUTES.HOME)}>{data.content.common.notFoundAction}</PrimaryButton></main>;
}
