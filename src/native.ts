import {
  Insets,
  NativeModule,
  NativeModules,
  NativeSyntheticEvent,
  requireNativeComponent,
  ViewProps,
} from 'react-native'

export interface KeyboardStatus {
  height: number
  hidden: boolean
  transitioning: boolean
}

interface KeyboardPosition {
  position: number
}

interface NativeKeyboardInsetsViewProps {
  mode?: 'auto' | 'manual'
  extraHeight?: number
  onStatusChanged?: (event: NativeSyntheticEvent<KeyboardStatus>) => void
  onPositionChanged?: (event: NativeSyntheticEvent<KeyboardPosition>) => void
}

export const NativeKeyboardInsetsView = requireNativeComponent<NativeKeyboardInsetsViewProps & ViewProps>(
  'KeyboardInsetsView',
)

interface KeyboardInsetsModuleInterface extends NativeModule {
  getEdgeInsetsForView(viewTag: number, callback: (insets: Insets) => void): void
}

const KeyboardInsetsModule: KeyboardInsetsModuleInterface = NativeModules.KeyboardInsetsModule

export function getEdgeInsetsForView(viewTag: number, callback: (insets: Insets) => void) {
  KeyboardInsetsModule.getEdgeInsetsForView(viewTag, callback)
}
