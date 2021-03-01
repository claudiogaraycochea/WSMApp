import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

function IconSearch(props: SvgProps) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M16.028 2.746c-3.661-3.661-9.62-3.661-13.282 0-3.66 3.662-3.66 9.62 0 13.282 3.26 3.26 8.339 3.61 11.998 1.064.076.364.253.712.536.995l5.332 5.332a1.983 1.983 0 002.806 0 1.981 1.981 0 000-2.806l-5.332-5.333a1.984 1.984 0 00-.995-.535c2.547-3.66 2.198-8.737-1.063-11.999zm-1.684 11.599c-2.733 2.733-7.182 2.733-9.914 0-2.732-2.734-2.732-7.181 0-9.915 2.732-2.732 7.18-2.732 9.914 0a7.019 7.019 0 010 9.915z"
          fill="#C4C4C4"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IconSearch