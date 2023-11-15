import { NextSeo } from 'next-seo';

import { AppConfig } from '@/app/utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => (
  <NextSeo
    title={props.title}
    description={props.description}
    canonical={props.canonical}
    openGraph={{
      title: props.title,
      description: props.description,
      url: props.canonical,
      locale: AppConfig.locale,
      site_name: AppConfig.site_name,
    }}
  />
);

export { Meta };
