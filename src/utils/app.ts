import { Location } from 'react-router';
import { hasMatch } from 'routes-utils';

export const checkUrl = ({ pathname }: Location) => {
  const notFound = !hasMatch(pathname)
  if (notFound) return '/page1'
}