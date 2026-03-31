
//作品一覧
const works = [
    {
        workname: '01profile',
        text: `自己紹介サイトのトップページを、HTML/CSSで再現しました。
               保守性能を高めるため、ソースコードを整理しながら記述しました。領域ごとにコメントを追加しました。`},
    {
        workname: '02photo',
        text: `フォト紹介サイトのトップページを、HTML/CSSで再現しました。
               class指定を使い、cssの記述を整理しました。`},
    {
        workname: '03photo2',
        text: `フォト紹介サイトのトップページを、HTML/CSSで再現しました。
               レスポンシブ対応で、改行し余白を調整する部分を丁寧に記述しました。
               marginとpaddingを使い分けてレイアウト調整しました。`},
    {
        workname: '04recipe',
        text: `レシピ紹介サイトのトップページを、HTML/CSSで再現しました。
               footerやsectionなど、意味を考慮して適切なタグを使用しました。
               メインの３つの画像はリスト形式で並べました。
               画像の大きさとリスト要素の大きさが合わない問題がありましたが、
               リストの横幅を計算式を利用して指定することで解決できました。`},
];

//リスト取得
const list = document.getElementById('worksList');

//要素作成
works.forEach(
    work => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${work.workname}</h3>
            <div class="listContents">
                <div><img class="worksImage" src="image/${work.workname}.png" alt="${work.workname}"></div>
                <div><a class="worksButton" href="works_CodeJump/${work.workname}/" target="_blank">show</a></div>
            </div>
            <div class="listText">
                <h4>＜工夫した点＞</h4>
                    <p>${work.text}</p>
            </div>
        `;
        list.appendChild(li);
    }
);

