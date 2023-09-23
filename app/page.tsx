let slug = "foo";

export async function generateMetadata() {
  const { title } = await import(`./${slug}.js`);
  return {
    title: `${title}`,
  };
}

export default async function Home() {
  const { Content } = await import(`./${slug}.js`);
  return <Content />;
}
