export const CHANGE_CURRENT_MODAL = 'CHANGE_CURRENT_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export function changeModal(modalType) {
  return {
    type: CHANGE_CURRENT_MODAL,
    payload: modalType
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  }
}
