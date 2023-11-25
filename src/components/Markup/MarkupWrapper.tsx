import { FC } from 'react';
import { MarkupItem } from '../../types/types';
import styles from './MarkupWrapper.module.scss';
import Paragraph from 'antd/es/typography/Paragraph';
import { Description } from './Description';

interface MarkupWrapperProps {
  markup: MarkupItem[];
}

export const MarkupWrapper: FC<MarkupWrapperProps> = ({ markup }) => {
  const processedContent = (markup: MarkupItem[]) => {
    return markup.map((item, index) => {
      switch (item.type) {
        // case 'header':
        //   return <h4 key={`${index}-${item.type}`}>{item.content}</h4>;

        // case 'img':
        //   if (typeof item.content === 'string') {
        //     return (
        //       <img
        //         key={index}
        //         src={item.content}
        //         alt={''}
        //       />
        //     );
        //   }
        //   return null;
        case 'description':
          return <Description item={item} />;

        case 'listSection':
          return (
            <div className={styles.list}>
              <h4 key={`${index}-${item.type}`}>{item.header}</h4>
              <ul>
                {item.content.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
            </div>
          );
        case 'section':
          return (
            <div className={styles.section}>
              <h4 key={`${index}-${item.type}`}>{item.header}</h4>
              {item.content.map((i) => (
                <p>{i}</p>
              ))}
            </div>
          );

        case 'paragraph':
          return <p>{item.content}</p>;

        default:
          return null;
      }
    });
  };

  return <div className={styles.root}>{processedContent(markup)}</div>;
};
