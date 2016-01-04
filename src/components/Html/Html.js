/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';

class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    css: PropTypes.string,
    body: PropTypes.string.isRequired,
    entry: PropTypes.string.isRequired,
    initialStore: PropTypes.object,
  };

  static defaultProps = {
    title: '',
    description: '',
  };

  render() {
    return (
      <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <style id="css" dangerouslySetInnerHTML={{ __html: this.props.css }} />
      </head>
      <body>
        {/* This div prevents Chrome from using subpixel font smoothing when it's not supposed to. */}
        {/* See https://github.com/adobe/brackets/issues/9978 */}
        <div style={{transform: 'translateZ(0)'}}/>
        <div id="app" dangerouslySetInnerHTML={{ __html: this.props.body }} />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `document.getElementById('app').__data = ${this.props.initialStore || {}};` }} />
        <script src={this.props.entry}></script>
      </body>
      </html>
    );
  }

}

export default Html;
