import React from 'react'
import {Link} from 'react-router'
import styles from './styles.css'
import 'blast-text'
import _ from 'underscore'
  
export default class App extends React.Component {

  componentDidMount() {
    //page load nav animation
    var $mainNav = $('.'+styles.mainNav);
    var $body = $('body');
    var $document = $(document);

    $mainNav.blast({delimiter: 'letter'})
      .velocity('transition.bounceUpIn', {duration:400, stagger:30});
    
    //scroll hide/show animation
    var lastScrollTop = 0;

    var debouncedNav = _.debounce(function() {
      var currentScrollTop = $document.scrollTop();

      //scroll down past header.height()
      if (currentScrollTop > lastScrollTop && currentScrollTop > 200) {
        $mainNav.addClass(styles.hidden);
      } else {
      //scroll up
        $mainNav.removeClass(styles.hidden);
      }

      if (currentScrollTop > 0) {
        $mainNav.addClass(styles.opaque);
      } else {
        $mainNav.removeClass(styles.opaque);
      }

      lastScrollTop = currentScrollTop;
    }, 500);

    $document.on('scroll', debouncedNav);
    $mainNav.mouseover(function(){this.removeClass(styles.opaque)}.bind($mainNav));
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

