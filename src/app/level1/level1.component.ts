import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css'],
})
export class Level1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const nextButton = document.querySelector<HTMLElement>('.next-button');
    const levelOne = document.querySelector<HTMLElement>('.level-one');
    const levelTwo = document.querySelector<HTMLElement>('.level-two');
    const uiLevel = document.querySelector<HTMLElement>('.ui-level');
    const uiMessage = document.querySelector<HTMLElement>('.ui-message');
    const spookyPicture =
      document.querySelector<HTMLElement>('.spooky-picture');
    const screamSound = document.querySelector<HTMLElement>('.scream-sound');

    const collisionCheck = (value) => {
      if (value === 'maze-border') 
      alert('You lost...try again.');
      if (value === 'finish') {
        nextButton.style.opacity = '1';
        nextButton.style.pointerEvents = 'all';
        levelOne.style.pointerEvents = 'none';
      }
      if (value === 'end-game') {
        //screamSound.play();
        spookyPicture.style.display = 'block';
        document.body.style.background = 'block';
      }
    };

    window.addEventListener('mousemove', (e) => {
      let check = (<HTMLInputElement>e.target).classList.value;
      collisionCheck(check);
    });

    nextButton.addEventListener('click', () => {
      levelOne.style.display = 'none';
      levelTwo.style.display = 'block';
      nextButton.style.opacity = '0';
      nextButton.style.pointerEvents = 'none';
      uiLevel.textContent = 'Level 2';
      uiMessage.textContent = 'One more to go...';
    });
  }
}
