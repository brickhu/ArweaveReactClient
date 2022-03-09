import React from 'react';
import './index.less';
import { Tooltip } from 'antd';


function LinkGroup(props) {
  return (
    <div className="link-group">
      <h2>{props.title}</h2>
      <div className="link-group-warps">
        {props.children}
      </div>
    </div>
  )
}

class Linkitem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    alert(`Welcome aboard, dddd!`);
  }

  render() {
    return (
      <Tooltip title={this.props.desc}>
        <div onClick={this.handleClick} data-id={this.props.id} className='linkitem'>
          <img className="li-icon" src={`http://www.google.com/s2/favicons?domain=`+this.props.url || `https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=`+this.props.url} alt="" width="24px" height="24px" />
          <span className="li-name">{this.props.name}</span>
          <span className="li-highline">{this.props.heighline||''}</span>
        </div>
      </Tooltip>
    )
  }
}



export { Linkitem , LinkGroup };