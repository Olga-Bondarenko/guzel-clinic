import laser from '../assets/services/laser.png';
import hardware from '../assets/services/hardware.png';
import injection from '../assets/services/injection.png';
import epilation from '../assets/services/epilation.jpg';

export const services = [
  {
    title: 'Лазерная косметология',
    slug: 'laser-cosmetology',
    img: laser,
    children: [
      // {
      //   title: 'Лазерная шлифовка и омоложение',
      //   slug: 'laser-resurfacing',
      //   img: laser,
      // },
      {
        title: 'Неабляционное лазерное омоложение',
        slug: 'laser-rejuvenation',
        img: laser,
      },
      {
        title: 'Лазерное удаление шрамов и рубцов',
        slug: 'laser-scars-removal',
        img: laser,
      },
      {
        title: 'Лазерная эпиляция',
        slug: 'laser-epilation',
        img: laser,
      },
      {
        title: 'Лазерный пилинг',
        slug: 'laser-peeling',
        img: laser,
      },
      {
        title: 'Лазерное удаление сосудистых патологий',
        slug: 'vascular-pathologies-removal',
        img: laser,
      },
    ],
  },
  {
    title: 'Аппаратная косметология',
    slug: 'hardware-cosmetology',
    img: hardware,
    children: [
      {
        title: 'Криолиполиз - процедура удаления жира холодом',
        slug: 'cryolipolysis',
        img: hardware,
      },
      {
        title: 'Ультразвуковой SMAS-лифтинг (Ultraformer)',
        slug: 'ultraformer',
        img: hardware,
      },
      {
        title: 'Фототерапия Harmony XL',
        slug: 'phototherapy',
        img: hardware,
      },
      {
        title: 'RF-лифтинг лица и тела',
        slug: 'rf-lifting',
        img: hardware,
      },
      {
        title: 'Безинъекционная мезотерапия (электропорация)',
        slug: 'electroporation',
        img: hardware,
      },
      {
        title: 'Вакуумный гидропилинг HydraFacial',
        slug: 'hydropeeling',
        img: hardware,
      },
      {
        title: 'Игольчатый RF-лифтинг',
        slug: 'Needle-rf-lifting',
        img: hardware,
      },
      {
        title: 'Лазерная терапия Cutera',
        slug: 'cutera',
        img: hardware,
      },
      {
        title: 'Микротоковая терапия',
        slug: 'microcurrent-therapy',
        img: hardware,
      },
      {
        title: 'Миостимуляция',
        slug: 'myostimulation',
        img: hardware,
      },
    ],
  },
  {
    title: 'Инъекционная косметология',
    slug: 'injection-cosmetology',
    img: injection,
    children: [
      {
        title: 'Контурная пластика',
        slug: 'konturnaya-plastika',
        img: laser,
      },
      {
        title: 'Ботулинотерапия',
        slug: 'botulinoterapiya',
        img: laser,
      },
      {
        title: 'Мезотерапия кожи лица и тела',
        slug: 'mesotherapy',
        img: laser,
      },
      {
        title: '3D-волюмизация',
        slug: '3d-volumization',
        img: laser,
      },

      {
        title: 'PRP-терапия',
        slug: 'plazmolifting',
        img: laser,
      },
      {
        title: 'Биоревитализация',
        slug: 'biorevitalization',
        img: laser,
      },
      {
        title: 'Инъекционная интимная пластика',
        slug: 'injection-intimate-plastic',
        img: laser,
      },
      {
        title: 'Коллагеннотерапия',
        slug: 'kollagenoterapiya-kollostoterapiya',
        img: laser,
      },
      {
        title: 'Нитевой лифтинг',
        slug: 'nitevoy-lifting',
        img: laser,
      },
      {
        title: 'Препараты Belotero',
        slug: 'belotero',
        img: laser,
      },
      {
        title: 'Препараты Restylane',
        slug: 'restilayn',
        img: laser,
      },
      {
        title: 'Препараты Juvederm ',
        slug: 'yuviderm',
        img: laser,
      },
    ],
  },
  {
    title: 'Лазерная эпиляция',
    slug: 'epilation',
    img: epilation,
  },
];
