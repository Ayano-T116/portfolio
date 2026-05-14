

//作品一覧
export const works = [
    {
        workname: '11store3',
        description: `和菓子のストアサイトのトップページ`,
        languages: `HTML/CSS`,
        text: `縦書き、mapの埋め込み、レスポンシブ対応など、様々な要素を盛り込んだ作品です。
               mapの埋め込みは、Googleマップの埋め込みコードを利用し、レスポンシブ対応させるために、CSSで幅と高さを指定しました。
               レスポンシブ対応は、メディアクエリを使用して、画面サイズに応じてレイアウトを調整や背景画像の切り替えを行いました。`
    },
    {
        workname: '04recipe',
        description: `レシピ紹介サイト(トップページ・詳細ページ)`,
        languages: `HTML/CSS`,
        text: `メインの３つの画像はリスト形式で並べました。
               画像の大きさとリスト要素の大きさが合わない問題がありましたが、
               リストの横幅を計算式を利用して指定することで解決できました。<br>
               トップページと詳細ページで共通となる部分は、CSSを共通化し、複数ページで再利用できる構成にしました。`},
    {
        workname: '03photo2',
        description: `フォト紹介サイトのトップページ`,
        languages: `HTML/CSS`,
        text: `レスポンシブ対応で、改行し余白を調整する部分を丁寧に記述しました。
               footerやsectionなど、意味を考慮して適切なタグを使用しました。`},
    {
        workname: '02photo',
        description: `フォト紹介サイトのトップページ`,
        languages: `HTML/CSS`,
        text: `class指定を使い、cssの記述を整理しました。`},
    {
        workname: '01profile',
        description: `自己紹介サイトのトップページ`,
        languages: `HTML/CSS`,
        text: `保守性能を高めるため、ソースコードを整理しながら記述しました。領域ごとにコメントを追加しました。`
    },
];