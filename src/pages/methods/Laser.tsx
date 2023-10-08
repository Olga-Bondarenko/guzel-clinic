import { FC } from 'react';
import { MethodPropsProps } from '../../types/types';
import { SingleServicesLink } from '../../components/SingleServicesLink/SingleServicesLink';

import styles from '../Pages.module.scss'

const features = [
  'Высокая эффективность практически во всех случаях.',
  'Отличные антисептические свойства, поскольку лазерный луч одновременно обеззараживает зону воздействия.',
  'Минимальное количество противопоказаний и отличная переносимость.',
  'Практически полная безболезненность.',
  'Достаточно короткий или вовсе отсутствующий восстановительный период.',
];

export const Laser: FC<MethodPropsProps> = ({services}) => {

  return (
    <>
      <h4>В каких процедурах мы используем лазер?</h4>
      <h5>Лазерная косметология для лица</h5>
      <p>
        Световое излучение прекрасно показывает себя в борьбе с угревой
        болезнью, успешно уничтожая не только сами высыпания, но и их
        непосредственную причину — патогенные бактерии. Отличные результаты
        показывает лазер в устранении участков гиперпигментации на лице.
        Излучение с правильно подобранной длиной волны сокращает количество
        меланина в коже, тем самым делая ее более светлой. Эффективны лазерные
        процедуры и для коррекции морщин. Фракционная методика позволяет
        активизировать собственные регенеративные возможности кожных покровов,
        запуская процесс их естественного омоложения.
      </p>
      <h5>Лазерная косметология для тела</h5>
      <p>
        Здесь речь в первую очередь идет об удалении лазером нежелательных
        волосков — такая эпиляция дает чрезвычайно длительный эффект. Помимо
        этого, в нашей клинике лазерной косметологии в Москве вы можете убрать
        рубцы, шрамы и растяжки после родов или быстрой потери массы тела,
        избавиться от татуировок, а также сосудистых звездочек и сеточек.
      </p>
      <h5>Лазерная косметология для ногтей</h5>
      <p>
        Основная область применения лазера здесь — лечение грибковых поражений.
        Световое излучение большой интенсивности попросту уничтожает клетки
        паразитического грибка, причем даже проникшего в глубину ногтя.
      </p>
      <h4>Каковы особенности лазерных процедур?</h4>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h4>Кто проводит такие процедуры?</h4>
      <p>
        Команду нашей клиники эстетической медицины составляют
        высококвалифицированные косметологи, а также профессиональные
        врачи-дерматологи. Каждый из них имеет богатый практический опыт работы
        с лазерными технологиями.
      </p>
      <h4>Чего позволяет добиться применение лазера?</h4>
      <p>
        В первую очередь, такие методики направлены на улучшение внешнего вида
        кожных покровов. Увеличивается их гладкость и упругость за счет
        стимуляции лазером синтеза коллагена и эластина, пропадают морщины,
        рубцы и стрии, исчезают пигментные пятна и телеангиоэктазии, устраняются
        инфекционные поражения и воспаления.
      </p>

      <div className={styles.serviceWrapper}>
        {services.map((service) => (
          <SingleServicesLink
          key={service.slug}
            to={`/services/laser-cosmetology/${service.slug}`}
            title={service.title}
            img={service.img}
            slug={service.slug}
          />
        ))}
      </div>
    </>
  );
};
