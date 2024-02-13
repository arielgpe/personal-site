interface Props {
  noPadding?: boolean;
  ariaHidden?: boolean;
}

export const Hr = ({noPadding, ariaHidden}: Props) => {
  return (
    <div className={`max-w-3xl mx-auto ${noPadding ? 'px-0' : 'px-4'}`}>
      <hr className="border-skin-line" aria-hidden={ariaHidden}/>
    </div>
  );
};
