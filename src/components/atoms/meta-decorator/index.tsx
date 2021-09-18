import { Helmet } from 'react-helmet';

export type MetaDecoratorProps = {
  title: string;
  description: string;
  keywords?: string;
  og_type?: string;
  og_url?: string;
  og_image?: string;
};

export const MetaDecorator: React.FC<MetaDecoratorProps> = ({
  title,
  description,
  keywords,
  og_type,
  og_url,
  og_image,
}) => (
  <Helmet defer={false}>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {og_type && <meta property="og:type" content={og_type} />}
    {og_url && <meta property="og:url" content={og_url} />}
    {og_image && <meta property="og:image" content={og_image} />}
  </Helmet>
);
