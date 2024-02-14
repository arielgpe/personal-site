import { LinkButton } from '@/components/LinkButton/LinkButton';

export const LinkRenderer = (props: any) => {
  return (
    <LinkButton {...props} target="_blank" rel="noreferrer">
      {props.children}
    </LinkButton>
  );
};
