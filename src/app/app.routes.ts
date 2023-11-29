import { Routes } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { AimtrainerComponent } from './components/pages/games/aim-trainer/aim-trainer.component';
import { ChimpTestComponent } from './components/pages/games/chimp-test/chimp-test.component';
import { ColorsComponent } from './components/pages/games/colors/colors.component';
import { NumberMemoryComponent } from './components/pages/games/number-memory/number-memory.component';
import { WordsMemoryComponent } from './components/pages/games/words-memory/words-memory.component';
import { VisualMemoryComponent } from './components/pages/games/visual-memory/visual-memory.component';
import { TypingTestComponent } from './components/pages/games/typing-test/typing-test.component';
import { SequenceTestComponent } from './components/pages/games/sequence-test/sequence-test.component';
import { ReactionTimeComponent } from './components/pages/games/reaction-time/reaction-time.component';

// TODO: отрефакторить рауты с массимом игр

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'Home page'
  },
  {
    path: 'aimtrainer',
    component: AimtrainerComponent,
    title: 'Train your aim'
  },
  {
    path: 'chimptest',
    component: ChimpTestComponent,
    title: 'chimptest'
  },
  {
    path: 'colors',
    component: ColorsComponent,
    title: 'colors'
  },
  {
    path: 'numbermemory',
    component: NumberMemoryComponent,
    title: 'numbermemory'
  },
  {
    path: 'wordsmemory',
    component: WordsMemoryComponent,
    title: ''
  },
  {
    path: 'visualmemory',
    component: VisualMemoryComponent,
    title: ''
  },
  {
    path: 'typingtest',
    component: TypingTestComponent,
    title: ''
  },
  {
    path: 'sequencetest',
    component: SequenceTestComponent,
    title: ''
  },
  {
    path: 'reactiontime',
    component: ReactionTimeComponent,
    title: ''
  },
];
