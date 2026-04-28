
import { works } from './constants.js';

//リスト取得
const list = document.getElementById('worksList');

//要素作成
works.forEach(
    work => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${work.workname}</h3>
            <div class="listText">
                <p class="description" >${work.description}</p>
            </div>
            <div class="listContents">
                <a class="worksButton" href="works_CodeJump/${work.workname}/" target="_blank">
                    <img class="worksImage" src="image/${work.workname}.png" alt="${work.workname}">
                </a>
            </div>
            <div class="listText">
                <h4>＜使用言語＞</h4>
                    <p class="listText-p">${work.languages}</p>
                <h4>＜工夫した点＞</h4>
                    <p class="listText-p">${work.text}</p>
            </div>
        `;
        li.className = 'worksList-li';
        list.appendChild(li);
    }
);

