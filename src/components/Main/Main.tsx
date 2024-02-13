import { ReactNode } from 'react';
import './main.css';

interface StringTitleProp {
  pageTitle: string;
  pageDesc?: string;
  children: ReactNode;
}

interface ArrayTitleProp {
  pageTitle: [string, string];
  titleTransition: string;
  pageDesc?: string;
  children: ReactNode;
}

type Props = StringTitleProp | ArrayTitleProp;
export const Main = ({children, ...props}: Props) => {
  return (
    <main id="main-content">
      {
        'titleTransition' in props ? (
          <h1>
            {props.pageTitle[0]}
            {/*<span transition:name={props.titleTransition}>*/}
            {/*{props.pageTitle[1]}*/}
            {/*</span>*/}
          </h1>
        ) : (
          <h1>{props.pageTitle}</h1>
        )
      }
      <p>{props.pageDesc}</p>
      {children}
    </main>
  );
};
