export default function HeroSilhouette({ className = '', style }) {
  return (
    <svg
      viewBox="0 0 300 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Background glow behind figure */}
      <ellipse cx="155" cy="320" rx="90" ry="280" fill="#07111F" opacity="0.6" />

      {/* Staff — vertical, slightly angled */}
      <rect x="232" y="0" width="8" height="640" rx="4" fill="#020817" />
      <rect x="229" y="0" width="3" height="640" rx="1.5" fill="#0D1E35" opacity="0.8" />
      {/* Staff tip top */}
      <path d="M228 8 L240 0 L252 8 L248 20 L232 20 Z" fill="#020817" />

      {/* Robe / main body silhouette */}
      <path
        d="
          M 120 130
          C 95 130, 75 145, 65 170
          C 55 200, 50 240, 45 280
          C 40 320, 38 370, 40 420
          C 42 470, 45 510, 48 550
          C 50 580, 52 605, 55 630
          L 240 630
          C 242 605, 244 580, 245 550
          C 248 510, 250 470, 250 420
          C 250 370, 248 320, 244 280
          C 240 240, 235 200, 225 170
          C 215 145, 200 130, 185 130
          L 120 130
          Z
        "
        fill="#07111F"
      />

      {/* Robe inner shadow lines for depth */}
      <path
        d="M 152 175 C 148 220, 145 270, 143 330 C 141 390, 142 450, 144 520 C 145 570, 146 600, 147 630"
        stroke="#020817"
        strokeWidth="2"
        opacity="0.6"
      />
      <path
        d="M 175 180 C 172 225, 170 275, 168 335 C 166 395, 167 455, 168 525"
        stroke="#020817"
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Left arm slightly visible */}
      <path
        d="M 68 170 C 60 185, 56 205, 58 225 C 60 245, 68 255, 78 250 L 90 220 C 85 210, 82 195, 85 180 Z"
        fill="#020817"
      />

      {/* Right arm holding staff */}
      <path
        d="M 215 165 C 225 175, 235 185, 238 200 C 241 215, 238 235, 230 245 L 218 240 C 222 228, 225 215, 222 200 C 219 185, 213 175, 208 168 Z"
        fill="#020817"
      />

      {/* Neck */}
      <rect x="137" y="95" width="30" height="40" rx="8" fill="#07111F" />

      {/* Head — dignified oval */}
      <ellipse cx="152" cy="68" rx="32" ry="36" fill="#07111F" />

      {/* Beard — lower face extending down */}
      <path
        d="M 130 78 C 125 85, 122 95, 124 108 C 126 118, 134 128, 143 130 L 162 130 C 170 128, 177 120, 178 110 C 179 98, 176 88, 172 80 C 165 94, 155 100, 145 100 C 138 100, 132 95, 130 78 Z"
        fill="#07111F"
      />

      {/* Turban / head covering — wrapped cloth */}
      <path
        d="
          M 118 62
          C 116 50, 120 38, 130 30
          C 140 22, 155 18, 168 22
          C 178 26, 186 34, 188 44
          C 190 54, 186 64, 180 70
          C 188 68, 194 62, 196 54
          C 200 40, 194 24, 182 16
          C 170 8, 154 5, 140 10
          C 126 15, 116 28, 114 42
          C 112 52, 114 58, 118 62
          Z
        "
        fill="#07111F"
      />
      {/* Turban wrap detail */}
      <path
        d="M 114 50 C 116 40, 122 32, 132 26 C 142 20, 158 18, 168 24 C 178 30, 184 40, 184 50"
        stroke="#0D1E35"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 116 56 C 118 46, 126 36, 138 30 C 150 24, 166 24, 174 32"
        stroke="#122844"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />

      {/* Subtle shoulder cape / outer mantle edge */}
      <path
        d="M 65 155 C 52 160, 45 175, 48 195 L 75 185 C 70 175, 68 162, 72 152 Z"
        fill="#020817"
        opacity="0.7"
      />
      <path
        d="M 240 155 C 252 160, 258 175, 254 195 L 228 185 C 232 175, 234 162, 230 152 Z"
        fill="#020817"
        opacity="0.7"
      />

      {/* Ground shadow */}
      <ellipse cx="152" cy="636" rx="85" ry="8" fill="#020817" opacity="0.8" />
    </svg>
  );
}
