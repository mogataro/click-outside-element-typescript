/**
 * targetSelectorの外側の要素をclickした際にexecutionFunctionを実行するイベントリスナを追加する
 * @param targetSelector セレクタ。(例: '.hoge', '#fuga')
 * @param executionFunction 要素の外側をクリック時に実行する関数。例えば、要素のcssについてdisplayをnoneにする関数など
 */
export const addClickOutsideEvent = (targetSelector: string, executionFunction: () => void) => {
  window.document.addEventListener('click', listener(targetSelector, executionFunction))
}

/**
 * イベントリスナーを削除する。アンマウント時などに実行する
 * @param targetSelector
 * @param executionFunction
 */
export const removeClickOutsideEvent = (targetSelector: string, executionFunction: () => void) => {
  window.document.removeEventListener('click', listener(targetSelector, executionFunction))
}

const listener =
  (targetSelector: string, executionFunction: () => void = () => {}) =>
  (event: MouseEvent) => {
    if (!(event.target instanceof HTMLElement)) return
    if (event.target.closest(targetSelector)) return
    executionFunction()
  }
