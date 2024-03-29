import React from 'react';
import GitHubIcon from '../../../assets/github.svg';
import TwitterIcon from '../../../assets/twitter.svg';
import InstagramIcon from '../../../assets/instagram.svg';

const SideIntro = () => (
  <aside className="flex fixed-l">
    <div className="v-mid h-100 ph5-l mt6-l mh4 mv5">
      <div className="b dark-blue">Mi nombre es</div>
      <h1 className="mt0 b f1 lh-solid blue">
        Diego<br/>
        Alvarado<br/>
        Otey.
      </h1>
      <p className="lh-copy dark-blue">
        Vengo de Chiloé, una isla mágica úbicada en el sur <br/>
        de Chile. Actualmente vivo en Santiago.<br/>
        Soy ingeniero y me dedico a desarrollar para la web.<br/>
        Practico fotografía y de vez en cuando tiro un par de <br/>
        notas en la guitarra.
      </p>
      <div className="flex mv4">
        <div className="mr3 gray" style={{ width: '30px' }}>
          <a href="https://github.com/dalvaradotey/">
            <GitHubIcon />
          </a>
        </div>
        <div className="mh3" style={{ width: '30px' }}>
          <a href="https://www.instagram.com/dalvaradotey/">
            <InstagramIcon />
          </a>
        </div>
        <div className="mh3" style={{ width: '30px' }}>
          <a href="https://twitter.com/dalvaradotey/">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  </aside>
);

export default SideIntro;