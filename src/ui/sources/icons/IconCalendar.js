import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { Color } from '../colors/Colors'

function IconCalendar(props: SvgProps) {
  const color = (props.color) ? props.color : Color.text;

  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M28.5 4H26V3a2 2 0 10-4 0v1h-4V3a2 2 0 10-4 0v1h-4V3a2 2 0 10-4 0v1H3.5A2.5 2.5 0 001 6.5v20A2.5 2.5 0 003.5 29h14a.5.5 0 000-1h-14A1.504 1.504 0 012 26.5V11h28v8.5a.5.5 0 001 0v-13A2.5 2.5 0 0028.5 4zM23 3a1 1 0 012 0v3a1 1 0 01-2 0V3zm-8 0a1 1 0 012 0v3a1 1 0 01-2 0V3zM7 3a1 1 0 012 0v3a1 1 0 01-2 0V3zm23 7H2V6.5A1.505 1.505 0 013.5 5H6v1a2 2 0 104 0V5h4v1a2 2 0 104 0V5h4v1a2 2 0 104 0V5h2.5A1.504 1.504 0 0130 6.5V10z"
        fill={color}
      />
      <Path
        d="M15 14.5a1 1 0 00-1-1h-2a1 1 0 00-1 1V16a1 1 0 001 1h2a1 1 0 001-1v-1.5zM12 16v-1.5h2V16h-2zM9 14.5a1 1 0 00-1-1H6a1 1 0 00-1 1V16a1 1 0 001 1h2a1 1 0 001-1v-1.5zM6 16v-1.5h2V16H6zM26 17a1 1 0 001-1v-1.5a1 1 0 00-1-1h-2a1 1 0 00-1 1V16a1 1 0 001 1h2zm-2-2.5h2V16h-2v-1.5zM15 19a1 1 0 00-1-1h-2a1 1 0 00-1 1v1.5a1 1 0 001 1h2a1 1 0 001-1V19zm-3 1.5V19h2v1.5h-2zM9 19a1 1 0 00-1-1H6a1 1 0 00-1 1v1.5a1 1 0 001 1h2a1 1 0 001-1V19zm-3 1.5V19h2v1.5H6zM14 22.5h-2a1 1 0 00-1 1V25a1 1 0 001 1h2a1 1 0 001-1v-1.5a1 1 0 00-1-1zM12 25v-1.5h2V25h-2zM18 17h2a1 1 0 001-1v-1.5a1 1 0 00-1-1h-2a1 1 0 00-1 1V16a1 1 0 001 1zm0-2.5h2V16h-2v-1.5zM17 20.5a1 1 0 001 1 .5.5 0 000-1V19h2a.5.5 0 000-1h-2a1 1 0 00-1 1v1.5zM8 22.5H6a1 1 0 00-1 1V25a1 1 0 001 1h2a1 1 0 001-1v-1.5a1 1 0 00-1-1zM6 25v-1.5h2V25H6z"
        fill={color}
      />
      <Path
        d="M24.5 18a6.5 6.5 0 106.5 6.5 6.508 6.508 0 00-6.5-6.5zm0 12a5.5 5.5 0 115.5-5.5 5.506 5.506 0 01-5.5 5.5z"
        fill={color}
      />
      <Path
        d="M27.389 22.404L23.5 26.293l-1.767-1.768a.5.5 0 00-.707.707l2.12 2.122a.5.5 0 00.707 0l4.243-4.243a.5.5 0 00-.707-.707z"
        fill={color}
      />
    </Svg>
  )
}

export default IconCalendar
