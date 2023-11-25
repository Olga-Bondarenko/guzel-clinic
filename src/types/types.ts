export interface Service {
  title: string;
  slug: string;
  img: string;
}

export interface MethodPropsProps {
  services: Service[];
}

export interface DescriptionItem {
  type: 'description';
  content: string[];
  img: string;
  title: string;
}

export interface ListSectionItem {
  type: 'listSection';
  header: string;
  content: string[];
}
export interface SectionItem {
  type: 'section';
  header: string;
  content: string[];
}

// export interface Header {
//   type: 'header';
//   content: string;
// }
// export interface List {
//   type: 'list';
//   content: string[];
// }

export interface ParagraphItem {
  type: 'paragraph';
  content: string;
}


export type MarkupItem = DescriptionItem | ListSectionItem | SectionItem | ParagraphItem;
export interface BrandObject {
  title: string;
  img: string;
  slug: string;
  markup?: MarkupItem[];
  children?: BrandObject[];
}
