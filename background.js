// 拡張機能のアイコンがクリックされたときの処理
chrome.action.onClicked.addListener((tab) => {
  // アクティブなタブでスクリプトを実行
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: scrapeMediaElements,
  }, (results) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }
    if (results && results[0] && results[0].result) {
      // 結果をストレージに保存し、result.htmlを開く
      chrome.storage.local.set({ mediaData: results[0].result }, () => {
        chrome.tabs.create({ url: chrome.runtime.getURL('result.html') });
      });
    }
  });
});

// メディア要素をスクレイピングする関数
function scrapeMediaElements() {
  const mediaElements = [];
  // 現在のページのURLを取得
  const pageUrl = window.location.href;

  // imgタグを取得
  const imgs = Array.from(document.getElementsByTagName('img'));
  imgs.forEach(img => {
    mediaElements.push({
      pageUrl: pageUrl,
      src: img.src || '',
      alt: img.alt || '',
      width: img.getAttribute('width') || '',
      height: img.getAttribute('height') || '',
      loading: img.getAttribute('loading') || ''
    });
  });

  return mediaElements;
} 