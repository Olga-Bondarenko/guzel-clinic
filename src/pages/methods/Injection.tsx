import { FC } from 'react';
import { MethodPropsProps } from '../../types/types';
import { SingleServicesLink } from '../ServiceLayout/SingleServicesLink/SingleServicesLink';

import styles from '../Pages.module.scss';

export const Injection: FC<MethodPropsProps> = ({ services }) => {
  return (
    <>
      <p>
        Инъекционная косметология на сегодняшний день составляет здоровую
        конкуренцию пластической хирургии, потому что занимается профилактикой
        возрастных изменений, поддержанием и улучшением внешнего вида.
      </p>
      <p>
        С помощью инъекционной пластики вглубь кожи подаются субстанции,
        запускающие цикл обновления клеток – гиалуроновая кислота, гели, плазма
        крови, комплексные омолаживающие растворы.
      </p>
      <p>
        Процедуры инъекционной терапии действуют в нескольких направлениях –
        «стирают» возрастные изменения, замедляют процессы старения, лечат
        сопутствующие кожные заболевания, корректируют эстетические дефекты.
      </p>
      <div className={styles.serviceWrapper}>
        {services.map((service) => (
          <SingleServicesLink
            key={service.slug}
            to={`/services/injection-cosmetology/${service.slug}`}
            title={service.title}
            img={service.img}
            slug={service.slug}
          />
        ))}
      </div>
    </>
  );
};
