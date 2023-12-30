interface TableCardState {
  isHovered: boolean;
  isModalActive: boolean;
  hoveredIndex: number | null;
}

interface TableCardAction {
  type: string;
  payload?: any; // Adjust payload type based on your action payload structure
}

export const ActionTypes = {
  HOVER: 'HOVER',
  UNHOVER: 'UNHOVER',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

export const tableCardReducer = (
  state: TableCardState,
  action: TableCardAction
): TableCardState => {
  switch (action.type) {
    case ActionTypes.HOVER:
      return { ...state, isHovered: true };
    case ActionTypes.UNHOVER:
      return { ...state, isHovered: false };
    case ActionTypes.OPEN_MODAL:
      return { ...state, isModalActive: true, hoveredIndex: action.payload };
    case ActionTypes.CLOSE_MODAL:
      return { ...state, isModalActive: false, hoveredIndex: null };
    default:
      return state;
  }
};
