import { t, isJapanese } from './i18n.js';

// テーブルヘッダーを設定する関数
function setupTableHeaders() {
  const headerRow = document.querySelector('#resultTable thead tr');
  const headers = [
    'thumbnail',
    'src',
    'alt',
    'width',
    'height',
    'loading'
  ];
  
  headerRow.innerHTML = headers
    .map(header => `<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${t(header)}</th>`)
    .join('');
}

// DOMContentLoadedイベントでCSVダウンロードボタンのイベントリスナーを設定
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('downloadCSV').addEventListener('click', downloadCSV);
  // 言語に応じてテキストを設定
  document.getElementById('pageTitle').textContent = t('scanResults');
  document.getElementById('downloadCSV').textContent = t('downloadCSV');
  document.querySelector('label[for="filterAltMissing"]').textContent = t('showOnlyMissingAlt');

  // テーブルヘッダーを設定
  setupTableHeaders();
});

let mediaData = [];
let allResults = []; // 例: APIやその他の取得方法でセット

// chrome.storage.local からメディアデータを取得してテーブルを生成
chrome.storage.local.get(["mediaData"], (result) => {
  mediaData = result.mediaData;
  if (!mediaData || mediaData.length === 0) {
    document.getElementById('resultTable').innerHTML = `<tr><td colspan="6" class='text-center text-gray-700'>${t('noData')}</td></tr>`;
    return;
  }
  renderTable(mediaData);
});

// URLからファイル名を生成する補助関数
function generateFilenameFromUrl(url) {
  try {
    const hostname = new URL(url).hostname;
    const date = new Date().toISOString().split('T')[0];
    return `media_scan_${hostname}_${date}.csv`;
  } catch (e) {
    // URLのパースに失敗した場合はデフォルトのファイル名を返す
    return `media_scan_${new Date().toISOString().split('T')[0]}.csv`;
  }
}

// CSV形式に変換し、ダウンロードを実行する関数
function downloadCSV() {
  if (!mediaData || mediaData.length === 0) {
    alert(t('noData'));
    return;
  }

  const filteredData = getFilteredResults(mediaData);
  const csv = convertToCSV(filteredData);
  const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
  const blob = new Blob([bom, csv], { 
    type: 'text/csv;charset=utf-8' 
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const filename = generateFilenameFromUrl(mediaData[0]?.pageUrl || '');
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// 取得したデータをCSV形式に変換する補助関数
function convertToCSV(data) {
  // 1行目：スキャンしたページのURL
  const pageUrl = data[0]?.pageUrl || '';
  const urlRow = `${t('pageUrl')},${pageUrl}\n`;


  // 2行目以降：テーブルヘッダーとデータ
  const headers = ['src', 'alt', t('width'), t('height'), t('loading')];
  const rows = data.map(item => {
    // alt属性が未設定の場合、"[要設定]"を追加
    const altValue = (!item.alt) ? t('needsAlt') + (item.alt || '') : item.alt;
    return [
      item.src,
      altValue,
      item.width,
      item.height,
      item.loading
    ].map(value => `"${value}"`).join(',');
  });
  return urlRow + headers.join(',') + "\n" + rows.join("\n");
}

// Tailwind CSS を使ったテーブル生成関数（popup.js の renderTable と同様）
function renderTable(mediaData) {
  const filteredData = getFilteredResults(mediaData);
  const tbody = document.querySelector("#resultTable tbody");
  
  let html = '';
  filteredData.forEach(item => {
    let thumbnail = '';
    if (item.src) {
      thumbnail = `<img src="${item.src}" alt="thumbnail" class="max-w-[100px] h-auto" />`;
    }
    // alt属性が未設定の場合、missing-altクラスを追加
    const rowClass = (!item.alt) ? 'missing-alt' : '';
    const altText = (!item.alt) ? `${t('needsAlt')}` : item.alt;

    html += `<tr class="${rowClass}">
             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${thumbnail}</td>
             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.src}</td>
             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${altText}</td>
             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.width}</td>
             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.height}</td>
             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.loading}</td>
           </tr>`;
  });
  
  tbody.innerHTML = html;
}

// -------------------------------
// 新規追加・修正: altフィルター適用関数
function getFilteredResults(data) {
    const checkbox = document.getElementById('filterAltMissing');
    if (checkbox && checkbox.checked) {
        return data.filter(item => !item.alt || item.alt.trim() === '');
    }
    return data;
}

// -------------------------------
// DOM読み込み完了後の初期処理
document.addEventListener("DOMContentLoaded", function() {
    // チェックボックスの変更で表示を更新
    document.getElementById('filterAltMissing').addEventListener('change', () => {
        renderTable(mediaData);
    });
    
    // 初回表示
    renderTable(mediaData);
}); 