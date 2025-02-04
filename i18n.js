// 言語設定の取得（ブラウザの設定を使用）
const userLang = navigator.language || navigator.userLanguage;
const isJapanese = userLang.startsWith('ja');

// 翻訳データ
const translations = {
  en: {
    scanResults: 'Scan Results',
    downloadCSV: 'Download CSV',
    showOnlyMissingAlt: 'Show only images missing alt text',
    needsAlt: '[Alt text required]',
    thumbnail: 'Thumbnail',
    src: 'Source',
    alt: 'Alt Text',
    width: 'Width',
    height: 'Height',
    loading: 'Loading',
    noData: 'No data available',
    pageUrl: 'Page URL'
  },
  ja: {
    scanResults: 'スキャン結果',
    downloadCSV: 'CSVダウンロード',
    showOnlyMissingAlt: 'alt属性が空欄のみ表示',
    needsAlt: '[空欄]',
    thumbnail: 'サムネイル',
    src: 'ソース',
    alt: 'alt属性',
    width: 'width属性',
    height: 'height属性',
    loading: 'loading属性',
    noData: 'データがありません',
    pageUrl: 'ページURL'
  }
};

// 翻訳を取得する関数
function t(key) {
  const lang = isJapanese ? 'ja' : 'en';
  const translationSet = translations[lang];
  if (!translationSet || !translationSet[key]) return key;
  return translationSet[key];
}

export { t, isJapanese }; 