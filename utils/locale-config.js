const defaultLang = 'pt'
const defaultLangPack = 'strings'

const useLanguages = (lang_pack = defaultLangPack) => {
  const en = require(`/public/locales/en-US/${lang_pack}.json`)
  const pt = require(`/public/locales/pt-BR/${lang_pack}.json`)
  return {
    translations: {
      en: en,
      pt: pt,
    },
  }
}

export { defaultLang, defaultLangPack }
export default useLanguages
