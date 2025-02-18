import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  header: {
    marginRight: 12,
  },
  inverted: {
    transform: [
      {
        scaleY: -1,
      },
    ],
  },
})
