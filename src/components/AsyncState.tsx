import { useApp } from '../hooks/useApp';
import { content } from '../mocks/mockData';
import { PrimaryButton } from './PrimaryButton';

export function LoadingView() {
  return <div className="state-page"><span className="loading-orbit" /><p>{content.common.loading}</p></div>;
}

export function ErrorView() {
  const { data, retryBootstrap } = useApp();
  const copy = data?.content.common ?? content.common;
  return <div className="state-page"><h1>{copy.errorTitle}</h1><PrimaryButton onClick={() => void retryBootstrap()}>{copy.retry}</PrimaryButton></div>;
}
