import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  // Dropdown options
  visualizerOptions = ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort'];
  quizOptions = ['Easy', 'Medium', 'Hard'];
  interviewQuestions = ['Arrays', 'Linked Lists', 'Trees', 'Graphs'];

  // Circular component data
  quizComponent = {
    label: 'Quiz',
    icon: 'question-circle',
    link: '/welcome' // Replace with your actual quiz route
  };
  visualizerComponent = {
    label: 'Visualizer',
    icon: 'chart-bar',
    link: '/vizualizer' // Replace with your actual visualizer route
  };
}

