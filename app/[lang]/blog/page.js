export default function About() {
	return <></>;
}
export function generateStaticParams() {
	return [
	  { lang: 'en' },
	  { lang: 'es' },
	  { lang: 'fr' }
	  // 添加你需要支持的所有语言
	]
  }