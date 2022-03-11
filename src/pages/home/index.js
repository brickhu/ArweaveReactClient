import React from 'react';
import styles from './index.module.scss';
import { LinkSection } from '../../components/linkitems';
import SvgExternalLink from '../../components/icons/ExternalLink.js';

const thelinks = [
  {
    id: '244',
    name: 'PornHub',
    desc: '提供免费的成人内容！我们是成人网站之王。',
    url: 'https://pornhub.com',
    highline: 'new',
  },{
    id: '2434',
    name: 'XVideos',
    desc: '网上有一份流量统计，xVideos是世界上浏览人数最多的色情网站.',
    url: 'https://xvideos.com',
    highline: 'hot',
  },{
    id: '4677',
    name: 'xHamster',
    desc: 'xHamster是互联网上历史最久的成人视频网站之一，也是最好的网站之一',
    url: 'https://xhamster.com'
  }
]

function Home(props) {
  return (
    <div className='home'>
      <div className={styles.section}>
      Sex123所列成人站点收集于全球互联网，仅为年满18岁的成年提供参考，未满18岁请自行离开。
      </div>
      <div className={styles.section}>
        <LinkSection title="Free" links={thelinks} className={styles.section}/>
      </div>
    </div>
  );
}

export default Home;