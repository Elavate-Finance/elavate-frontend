import { createReducer } from '@reduxjs/toolkit'
import { updateBlockNumber } from './actions'

export interface ApplicationState {
  readonly blockNumber: { readonly [chainId: number]: number }
}

const initialState: ApplicationState = {
  blockNumber: {},
}

export default createReducer(initialState, (builder) =>
  builder.addCase(updateBlockNumber, (state, action) => {
    const { chainId, blockNumber } = action.payload
    // console.log('reducer1', blockNumber)
    if (typeof state.blockNumber[chainId] !== 'number') {
      state.blockNumber[chainId] = blockNumber
    } else {
      state.blockNumber[chainId] = Math.max(blockNumber, state.blockNumber[chainId])
    }
    // console.log('reducer2', state.blockNumber[chainId])
  }),
)
