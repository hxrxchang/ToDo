let colortCnt = 0;
$(function() {
    // タスクの追加
    $('.add-btn').on('click', () => {
        $('.task-list').append(
            `<li class='task'>${getDate()}
            <div class="task-btn">
            <button class="del-btn">削除</button>
            <button class="edit-task">色変更</button>
            </div>
            </li>`
        );
    });

    // タスク削除処理
    $('.task-list').on('click', '.del-btn', (evt) => {
        const isDelete = confirm('タスクを削除しますか？');
        if (isDelete) {
            $(evt.currentTarget).parent().parent()
            .css({
                'animation': 'fadeOut 2s ease 0s 1 normal'
            }).queue(function() {
                $(evt.currentTarget).parent().parent().remove();
            });
            
        }
    });

    // タスク更新処理
    $('.task-list').on('click', '.edit-task', (evt) => {
        const isEdit = confirm('タスクを編集しますか？');
    });
})


/**
 * 日付の0埋め
 * @param {number} num 
 * 
 * @returns {string} num
 */
function toDD(num) {
    num += '';
    if(num.length === 1) {
        num = '0' + num;
    }
    return num;
};

/**
 * 現在時刻を返す(yyyy/mm/dd/ HH:MM:ss)
 * @returns {string} text
 */
function getDate() {
    const now = new Date();
    year = now.getFullYear();
    month = toDD(now.getMonth());
    date = toDD(now.getDate());
    hour = toDD(now.getHours());
    min = toDD(now.getMinutes());
    sec = toDD(now.getSeconds());
    let text = year + '/' + month + '/' + date + ' '
                + hour +':'+ min +':'+ sec;
    return text;
}