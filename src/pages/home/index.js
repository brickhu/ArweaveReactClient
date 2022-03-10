import React from 'react';
import styles from './index.module.scss';
import { Linkitem,LinkGroup } from '../../components/linkitems';
import SvgExternalLink from '../../components/icons/ExternalLink.js';

function Home(props) {
  return (
    <div className='home'>
      <div className={styles.section}>
        <LinkGroup title="Free Porn Tube">
          <Linkitem index="1" id="244" name="PornHub" desc="提供免费的成人内容！我们是成人网站之王。" url="https://pornhub.com" highline="new" />
          <Linkitem index="2" id="2434" name="XVideos" desc="网上有一份流量统计，xVideos是世界上浏览人数最多的色情网站." url="https://xvideos.com" highline="hot" />
          <Linkitem index="3" id="4677" name="xHamster" desc="xHamster是互联网上历史最久的成人视频网站之一，也是最好的网站之一" url="https://xhamster.com" />
        </LinkGroup>
      </div>
    </div>
  );
}

export default Home;