import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";
import { Color } from '../colors/Colors';

function IconBack(props: SvgProps) {
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
        d="M6.7 15l12.592 12.587a1.418 1.418 0 002.002 0 1.41 1.41 0 000-1.998L9.7 14.001 21.292 2.412a1.412 1.412 0 000-1.999 1.418 1.418 0 00-2.001 0L6.699 13.001a1.427 1.427 0 00.002 1.998z"
        fill={color}
      />
    </Svg>
  )
}

export default IconBack;
