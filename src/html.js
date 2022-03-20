import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="he">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <style
          dangerouslySetInnerHTML={{
            __html:
              'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6 {  margin: 0;  padding: 0;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}',
          }}
        ></style>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n  html {\n    font-family: Inter;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.15;\n    color: var(--dl-color-gray-black);\n    background-color: var(--dl-color-gray-white);\n    \n  }\n\n  \n',
          }}
        ></style>
        <link
          rel="shortcut icon"
          href="/playground_assets/favicon.ico"
          type="icon/png"
          sizes="32x32"
        ></link>
        <link
          rel="stylesheet"
          href="https://or-ins.info/wp-content/uploads/2022/03/FbKazefet-Regular.otf"
        ></link>
        <link
          rel="stylesheet"
          href="https://or-ins.info/wp-content/uploads/2022/03/FbSpoilerEng-Regular.otf"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
        ></link>
        <link
          rel="stylesheet"
          href="https://or-ins.info/wp-content/uploads/2020/10/AnyConv.com__FbSpoiler-Regular.ttf"
        ></link>
        <link
          rel="stylesheet"
          href="https://or-ins.info/wp-content/uploads/2022/03/FbKazefet-Bold.otf"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&amp;display=swap"
        ></link>
        <link
          rel="stylesheet"
          href="https://or-ins.info/wp-content/uploads/2022/03/FbSpoilerEng-Bold.otf"
        ></link>
        <link
          rel="stylesheet"
          href="https://or-ins.info/wp-content/uploads/2022/03/FbSpoiler-Light.otf"
        ></link>
        <link
          rel="stylesheet"
          href="https://or-ins.info/wp-content/uploads/2022/03/FbSpoiler-Bold.otf"
        ></link>
        <link
          rel="stylesheet"
          href="https://or-ins.info/wp-content/uploads/2020/10/AnyConv.com__FbSpoiler-Bold_0.ttf"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta charSet="utf-8"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          id="___gatsby"
          key={`body`}
          dangerouslySetInnerHTML={{
            __html: props.body,
          }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}