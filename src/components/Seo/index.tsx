import Head from "next/head";
import { useRouter } from "next/router";
import app from "@/config/app";
import { METADATA_DESCRIPTION, METADATA_TITLE } from "@/lib/constant";

const defaultMeta = {
  title: METADATA_TITLE,
  siteName: "hiroscope.ai",
  description: METADATA_DESCRIPTION,
  url: app.app_url,
  type: "website",
  robots: "follow, index",
  image: "/assets/OGimage.png",
};

const favicons: Array<React.ComponentPropsWithoutRef<"link">> = [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/assets/favicon_io/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/assets/favicon_io/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/assets/favicon_io/favicon-16x16.png",
  },
  { rel: "manifest", href: "/assets/favicon_io/site.webmanifest" },
  { rel: "shortcut icon", href: "/assets/favicon_io/favicon.ico" },
];

export interface SeoProps extends Partial<typeof defaultMeta> {
  title?: string;
  description?: string;
}

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta["title"] = props.title
    ? `${props.title} | ${meta.siteName}`
    : meta.title;
  meta.description = props.description || meta.description;
  meta.image;
  meta.url
  return (
    <>
      <Head>
        <meta name="theme-color" content="$white" />
        <meta name="robots" content="nosnippet" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <title>{meta.title || "hiroscope.ai"} </title>
        <meta name="robots" content={meta.robots} />
        <link rel="icon" href={"/assets/favicon_io/favicon.ico"} />
        <meta content={meta.description || "hiroscope.ai"} name="description" />
        <meta
          name="keywords"
          content="AI hiring,hiring,ai,Easy recruitment,Hiring made simple,AI job matching,Interview, Candidates,AI Interview"
        />
        <meta property="og:url" content={`${meta.url}${router.asPath}`} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={`${meta.url}${router.asPath}`} />
        {/* Open Graph */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="image" property="og:image" content={meta.image} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/* Favicons */}
        {favicons.map((linkProps) => (
          <link key={linkProps.href} {...linkProps} />
        ))}
        <script id="schema-org" type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "Web-App",
            "headline": "${meta?.title}",
            "datePublished": "2023-11-14",
            "description": "${meta?.description}",
            "image": "${meta.image}",
            "publisher": {
              "@type": "Organization",
              "name": "${meta?.siteName}",
              "logo": {
                "@type": "ImageObject",
                "url": "${meta?.siteName}"
              }
            }
          }
        `}
        </script>
      </Head>
    </>
  );
}
