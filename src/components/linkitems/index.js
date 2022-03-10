import React from 'react';
import styles from './index.module.scss';
import SvgExternalLinkOutline from '../icons/ExternalLinkOutline';
import SvgPlusOutline from '../icons/PlusOutline';
import SvgMinusOutline from '../icons/MinusOutline';


function LinkGroup(props) {
  return (
    <div className={styles.link_group}>
      <div className={styles.link_group_title}>
        <SvgMinusOutline className={styles.link_group_title_icon} />
        <h2 className={styles.link_group_title_icon}>{props.title}</h2>
      </div>
      <div className={styles.link_group_warps}>
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
    const {index,id,name,url,highline,desc} = this.props;
    const pureurl = url.replace(/^https?:\/\//,'');
    const favicon = `http://www.google.com/s2/favicons?domain=` + url || `https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=` + url
    return (
      <a onClick={this.handleClick} data-id={id} className={styles.linkitem}>
        <div className={styles.linkitem_left}>
          <span className={styles.li_index}>{index}</span>
          <img className={styles.li_icon} src={favicon} alt={name} />
          <span className={styles.li_name}>{name} </span>
          <i className={styles.li_dot}></i>
          <span className={styles.li_desc}>{desc}</span>
          <span className={styles.li_url}>{pureurl}</span>
        </div>
        <div className={styles.linkitem_right}>
          <span className={styles.li_label}>{highline || ''}</span>
          <SvgExternalLinkOutline width="16" height="16"/>
        </div>
      </a>
    )
  }
}



export { Linkitem , LinkGroup };