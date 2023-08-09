import React from 'react';
import './BoardContent.scss';

function BoardContent() {

  return (
    <>
      <div className="board-columns">
        <div className="column">
          <header>Monday</header>
          <ul>
            <li>First</li>
            <li>Second</li>
          </ul>
          <footer>+ Add a commitment</footer>
        </div>

        <div className="column">
          <header>Tuesday</header>
          <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
            <li>Fifth</li>
            <li>Sixth</li>
            <li>Seventh</li>
          </ul>
          <footer>+ Add a commitment</footer>
        </div>

        <div className="column">
          <header>Wednesday</header>
          <ul>
            <li>First</li>
            <li>Second</li>
          </ul>
          <footer>+ Add a commitment</footer>
        </div>

        <div className="column">
          <header>Thursday</header>
          <ul>
            <li>First</li>
            <li>Second</li>
          </ul>
          <footer>+ Add a commitment</footer>
        </div>

        <div className="column">
          <header>Friday</header>
          <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
            <li>Fifth</li>
            <li>Sixth</li>
            <li>Seventh</li>
          </ul>
          <footer>+ Add a commitment</footer>
        </div>
        <div className="column">
          <header>Saturday</header>
          <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </ul>
          <footer>+ Add a commitment</footer>
        </div>
        <div className="column">
          <header>Sunday</header>
          <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
          </ul>
          <footer>+ Add a commitment</footer>
        </div>        

      </div>
    </>
  )

}

export default BoardContent;