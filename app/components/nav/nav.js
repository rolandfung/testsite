import React from 'react'
import {Link} from 'react-router'
import styles from './styles.css'
import 'blast-text'
  
export default class App extends React.Component {

  componentDidMount() {
    //page load nav animation
    var $mainNav = $('.'+styles.mainNav);
    var $body = $('body');
    var $document = $(document);

    $mainNav.blast({delimiter: 'word'})
      .velocity('transition.fadeIn', {stagger:50});
    
    //scroll hide/show animation
    var lastScrollTop = 0;

    $document.on('scroll', () => {
      var currentScrollTop = $document.scrollTop();

      //scroll down
      if (currentScrollTop > lastScrollTop) {
        $mainNav.addClass(styles.hidden);
      } else {
        $mainNav.removeClass(styles.hidden);
      }
      lastScrollTop = currentScrollTop;
    });

    //todo: debounce the scroll show/hide
  }

  render() {
    return (
      <nav>
        <ul className={styles.mainNav}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
        </ul>
      </nav>
   );
  } 
}

