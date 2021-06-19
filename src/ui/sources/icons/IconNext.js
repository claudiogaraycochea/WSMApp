import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { Color } from '../colors/Colors';

function IconNext(props: SvgProps) {
  const color = (props.color) ? props.color : Color.text;
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.299 13L8.708.414a1.418 1.418 0 00-2.002 0 1.41 1.41 0 000 1.998l11.593 11.588L6.707 25.588a1.412 1.412 0 000 1.998 1.418 1.418 0 002.002 0L21.3 15a1.427 1.427 0 00-.001-1.998z"
        fill={color}
      />
    </Svg>
  )
}

export default IconNext