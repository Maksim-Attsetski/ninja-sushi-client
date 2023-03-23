import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TMsgType = 'success' | 'error';

interface IDefault {
  enable: boolean;
  text?: string;
}

interface IState extends IDefault {
  type: TMsgType;
}

interface IPayload extends IDefault {
  type?: TMsgType;
}

const initialState: IState = {
  enable: false,
  type: 'success',
  text: '',
};

const messageSlice = createSlice({
  name: 'messageSlice',
  initialState,
  reducers: {
    setMessageAC: (state: IState, action: PayloadAction<IPayload>) => {
      const { enable, type, text } = action.payload;

      state.enable = enable;
      state.type = type ?? 'success';
      state.text = text ?? '';
    },
  },
});

export const messageReducer = messageSlice.reducer;
export const { actions } = messageSlice;
