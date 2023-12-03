const AboutSVG = () => {
  return (
    <>
      <svg
        id="aboutMeSVG"
        width="128"
        height="128"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="about_icon_2" transform="translate(36, 36)">
          <text
            textAnchor="middle"
            x="64"
            y="160"
            fontSize="30"
          >
            about
          </text>
          <circle className="svg-main-color" id="about_me_bg" cx="64" cy="64" r="64" />
          <circle
            id="about_me_right_eye_white"
            cx="88"
            cy="61"
            r="27"
            className="svg-secondary-color"
          />
          <ellipse
            id="about_me_right_eye_pupil"
            cx="83.5"
            cy="64"
            rx="8.5"
            ry="11"
            className="svg-main-color"
          />
          <g id="about_me_left_eye">
            <mask
              id="mask0_1_3500"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="128"
              height="128"
            >
              <circle
                id="about_me_left_eye_mask"
                cx="64"
                cy="64"
                r="64"
                className="svg-main-color"
              />
            </mask>
            <g mask="url(#mask0_1_3500)">
              <ellipse
                id="about_me_left_eye_white"
                cx="44.5"
                cy="61"
                rx="27.5"
                ry="28"
                className="svg-secondary-color"
              />
              <g id="about_me_left_pupil">
                <mask
                  id="mask1_10_35"
                  maskUnits="userSpaceOnUse"
                  x="12"
                  y="25"
                  width="56"
                  height="56"
                >
                  <circle
                    id="about_me_left_eye_mask_2"
                    cx="39.7736"
                    cy="52.7736"
                    r="27.7736"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask1_10_35)">
                  <ellipse
                    id="about_me_left_pupil_shape"
                    cx="47.5"
                    cy="64"
                    rx="8.5"
                    ry="11"
                    className="svg-main-color"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>

      </svg>
    </>
  );
};

export default AboutSVG;
